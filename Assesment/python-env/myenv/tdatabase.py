from pymongo import MongoClient
from pydantic import BaseModel
import json
import fastapi
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

client = MongoClient("mongodb://localhost:27017/")
db = client["test"]
collection = db["test"]

app = fastapi.FastAPI()

# Configure CORS
origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://127.0.0.1:8000"
    # Add more allowed origins if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class items(BaseModel):
    question: str
    answer: str 
    type: str
    
class rateing(BaseModel):
    question: str
    rating: int
    type: str

@app.post("/")
def read_root(items: items):
    type = items.type
    question = items.question
    answer = items.answer
    
    data = {"question": question, "answer": answer} 
    items = collection.find_one_and_update({"email": "nigga@email.com"}, {"$push": {type: data}},upsert=True)  
    return "success"


@app.post("/rateing")
def read_root(rateing: rateing):
    type = rateing.type
    question = rateing.question
    answer = rateing.rating
    
    data = {"question": question, "answer": answer} 
    items = collection.find_one_and_update({"email": "nigga@email.com"}, {"$push": {type: data}},upsert=True)  
    return "success"

@app.post("/get")
def read_root():
    
    collection.insert_one({"email":"nigga@email.com"})
    # print(type(items))
    return "success"

if __name__ == '__main__':
    uvicorn.run(app)
