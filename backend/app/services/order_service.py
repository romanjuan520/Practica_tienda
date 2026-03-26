from ..models.order import Order
from sqlalchemy.orm import Session
from ..models.order_item import OrderItem

def create_order(db: Session, user_id: int, total: float):
    order = Order(user_id=user_id, total=total)
    db.add(order)
    db.commit()
    db.refresh(order)
    return order

def get_orders_by_user(db: Session, user_id: int):
    return db.query(Order).filter(Order.user_id  == user_id).all() 