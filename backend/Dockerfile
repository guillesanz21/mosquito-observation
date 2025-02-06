FROM python:3.13-alpine3.21

COPY . /usr/backend
WORKDIR /usr/backend

ENV PYTHONUNBUFFERED=1

EXPOSE 8000

RUN pip install -r ./requirements.txt

ENV PATH="/py/bin:$PATH"
