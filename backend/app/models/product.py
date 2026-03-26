from sqlalchemy import Column, Integer, String, DECIMAL, ForeignKey
from ..db.base import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True)
    name = Column(String(255),nullable=False)
    price = Column(DECIMAL(10,2), nullable=False)
    image = Column(String(255))
    category_id = Column(Integer, ForeignKey("category.id"))