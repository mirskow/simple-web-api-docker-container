FROM python:3.10-slim

WORKDIR /myapp/

COPY requirements.txt /myapp/
RUN pip install -r requirements.txt

COPY . /myapp/
    
EXPOSE 8000

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]
