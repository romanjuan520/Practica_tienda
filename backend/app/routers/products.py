from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..db.database import get_db
from ..services import product_service
from ..schemas.product_schema import ProductOut

router = APIRouter(prefix="/products", tags=["products"])

@router.get("/", response_model=list[ProductOut])
def get_products(db: Session = Depends(get_db)):
    return product_service.get_products(db)