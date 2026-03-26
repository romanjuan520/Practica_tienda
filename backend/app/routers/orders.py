from fastapi import APIRouter, Depends, HTTPException, Header
from sqlalchemy.orm import Session
from ..db.database import get_db
from ..services import order_service
from ..schemas.order_schema import OrderCreate, OrderOut
from ..core.security import decode_access_token

router = APIRouter(prefix="/orders", tags=["orders"])

#Dependencia para usuario autenticado
def get_current_user(authorization: str = Header(...)):
    if not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Token inválido")
    token = authorization[7:]
    payload = decode_access_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Token inválido")
    return payload

@router.post("/", response_model=OrderOut)
def create_order(order: OrderCreate, db: Session = Depends(get_db), user=Depends(get_current_user)):
    return order_service.create_order(db, user["id"], order.total)

@router.get("/my-orders", response_model=list[OrderOut])
def get_my_orders(db: Session = Depends(get_db), user=Depends(get_current_user)):
    return order_service.get_orders_by_user(db, user["id"])