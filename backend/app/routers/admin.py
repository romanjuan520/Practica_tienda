from fastapi import APIRouter, Depends, HTTPException, Header
from sqlalchemy.orm import Session
from ..db.database import get_db
from ..services import product_service
from ..schemas.product_schema import ProductCreate, ProductOut
from ..core.security import decode_access_token


router = APIRouter(prefix="/admin", tags=["admin"])

# Dependencia para verificar rol admin
def get_current_admin(authorization: str = Header(...)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Token invalido")
    token = authorization[7:]
    try:
        payload = decode_access_token(token)
    except:
        raise HTTPException(status_code=401, detail="Token inválido")
    
    if not payload or payload.get("role") != "admin":
        raise HTTPException(status_code=403, detail="No autorizado")
    return payload

@router.post("/products", response_model=ProductOut)
def create_product(
    product: ProductCreate, 
    db: Session = Depends(get_db),
    admin = Depends(get_current_admin)
    ):
    return product_service.create_product(db, product.name, product.price, product.image, product.category_id)

@router.put("/products/{product_id}", response_model=ProductOut)
def update_product(
    product_id: int, 
    product: ProductCreate ,
    db: Session = Depends(get_db), 
    admin=Depends(get_current_admin)
    ):

    return product_service.update_product(db, product_id, product.name, product.price, product.image, product.category_id)

@router.delete("/products/{product_id}")
def delete_product(product_id: int, 
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin)
    ):
    return product_service.delete_product(db, product_id)