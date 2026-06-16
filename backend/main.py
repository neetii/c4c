from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import get_connection
from models import create_tables

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