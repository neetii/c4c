from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import get_connection
from models import create_tables
from pydantic import BaseModel

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Update with your frontend URL
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup():
    create_tables()

@app.get("/")
def read_root():
    return {"message": "C4C API is running"}

class ContactForm(BaseModel):
    first_name: str
    last_name: str
    email: str
    message: str

@app.post("/contact")
def submit_contact(form: ContactForm):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''
        INSERT INTO contact_submissions (first_name, last_name, email, message)
        VALUES (%s, %s, %s, %s)
    ''', (form.first_name, form.last_name, form.email, form.message))
    
    conn.commit()
    cur.close()
    conn.close()
    
    return {"message": "Contact form submitted successfully"}