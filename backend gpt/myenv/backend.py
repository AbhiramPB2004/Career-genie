
import openai
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
openai.api_key = "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"


class chat(BaseModel):
    userChat: str
    

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    
)
@app.post("/chat")
def chatgptCompletion():
    
    # messages = [
    #     {"role":"system","content":"you are an bot"}
    # ]

    # user_prompt=info.userChat
    # if user_prompt:
    #     messages.append(
    #         {"role":"user","content":user_prompt}
    #     )
    #     chat= openai.ChatCompletion.create(
    #         model="gpt-3.5-turbo",messages=messages
    #     )
    #     reply=chat.choices[0].message.content
    #     print(f"chatGPT, {reply} ")
    #     messages.append({"role":"user","content":reply})
    return "helloworlld"