from sqlalchemy.orm import Session
from fastapi import HTTPException
from ..models.user import User
from ..core.security import hash_password, verify_password


def create_user(db: Session, email: str, password: str, nombre: str, apellido: str, imagen: str | None = None):
    hashed = hash_password(password)

    existing_user = db.query(User).filter(User.email == email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="El email ya esta registrado")

    imagen_final = imagen or "/static/imagen/users/default.jpg"

    user = User(email=email,
                password_hash=hashed,
                nombre=nombre,
                apellido=apellido,
                imagen=imagen_final)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

def authenticate_user(db: Session, email: str, password: str):
    user = db.query(User).filter(User.email == email).first()
    if not user:
        return None
    if not verify_password(password, user.password_hash):
        return None
    return user