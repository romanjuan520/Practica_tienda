from fastapi import HTTPException
from ..models.order import Order
from sqlalchemy.orm import Session
from ..models.order_item import OrderItem
from app.models.product import Product
from typing import List
from app.schemas.order_schema import OrderItemCreate

def create_order(db: Session, user_id: int, items: List[OrderItemCreate]):

    total = 0
    order = Order(user_id=user_id, total=0)
    db.add(order)
    db.commit()
    db.refresh(order)

    for item in items:
        product = db.get(Product, item.product_id)
        
        if not product:
            raise HTTPException(status_code=404, detail="Producto no encontrado")
        
        if product.stock < item.quantity:
            raise HTTPException(status_code=400, detail="Stock insuficiente")
        product.stock -= item.quantity

        subtotal = product.price * item.quantity
        total += subtotal

        order_item = OrderItem(
            order_id=order.id,
            product_id=product.id,
            quantity=item.quantity,
            price=product.price
        )
        db.add(order_item)

    order.total = total
    db.commit()
    db.refresh(order)
    return order

def get_orders_by_user(db: Session, user_id: int):
    return db.query(Order).filter(Order.user_id  == user_id).all() 