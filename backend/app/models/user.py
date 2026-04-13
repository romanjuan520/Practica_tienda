from sqlalchemy import Column, Integer,String, Enum
from ..db.base import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    role = Column(Enum('cliente', 'admin'), default='cliente')
    nombre = Column(String(255))
    apellido = Column(String(255))
    imagen = Column(String(255), default="/static/imagen/users/default.jpg")