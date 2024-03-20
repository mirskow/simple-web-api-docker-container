from fastapi import FastAPI, Form
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from datetime import datetime

app = FastAPI()

app.mount("/static", StaticFiles(directory='public'))

@app.get("/")
async def main():
    return FileResponse("public/index.html")
    
    
@app.post('/post/comment')
async def create_comment(comment: str = Form(...)):
    return {"comment": comment, "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
	
	
	

