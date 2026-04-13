from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreate(BaseModel):
    nombre: str
    apellido: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: str
    password: str

class UserOut(BaseModel):
    id: int
    email: str
    role: str
    nombre: str
    apellido: str
    imagen: str | None

    class Config:
        from_attributes = True