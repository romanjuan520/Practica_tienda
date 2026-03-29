from sqlalchemy import Column, Integer, String, DECIMAL, ForeignKey, Text
from ..db.base import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True)
    name = Column(String(255),nullable=False)
    description = Column(Text)
    price = Column(DECIMAL(10,2), nullable=False)
    stock = Column(Integer, default=0)
    image = Column(String(255))
    category_id = Column(Integer, ForeignKey("categories.id"))