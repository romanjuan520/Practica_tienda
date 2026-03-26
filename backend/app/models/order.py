from sqlalchemy import Column, Integer, DECIMAL, ForeignKey
from ..db.base import Base

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    total = Column(DECIMAL(10,2), nullable=False)