from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import get_connection
from models import create_tables
from pydantic import BaseModel
import stripe
import os

stripe.api_key = os.getenv('STRIPE_SECRET_KEY')

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

class DonationForm(BaseModel):
    amount: float
    donor_name: str
    donor_email: str

@app.post("/create-payment-intent")
def create_payment_intent(form: DonationForm):
    intent = stripe.PaymentIntent.create(
        amount=int(form.amount * 100),  # Convert dollars to cents
        currency='usd',
        metadata={"donor_name": form.donor_name, "donor_email": form.donor_email}
    )
    return {"client_secret": intent.client_secret}

@app.post("/donate")
def submit_donation(form: DonationForm):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''
        INSERT INTO donations (amount, donor_name, donor_email)
        VALUES (%s, %s, %s)
    ''', (form.amount, form.donor_name, form.donor_email))
    
    conn.commit()
    cur.close()
    conn.close()
    
    return {"message": "Donation submitted successfully"}

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