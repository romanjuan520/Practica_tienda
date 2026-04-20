from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
from ..db.database import get_db
from ..services import product_service
from ..schemas.product_schema import ProductCreate, ProductOut
from ..core.security import decode_access_token


router = APIRouter(prefix="/vendedor", tags=["vendedor"])
security = HTTPBearer()

# Dependencia para verificar rol admin
def get_current_vendedor(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token =  credentials.credentials
    try:
        payload = decode_access_token(token)
    except:
        raise HTTPException(status_code=401, detail="Token inválido")
    
    if not payload or payload.get("role") != "vendedor":
        raise HTTPException(status_code=403, detail="No autorizado")
    return payload

@router.post("/products", response_model=ProductOut)
def create_product(
    product: ProductCreate, 
    db: Session = Depends(get_db),
    user = Depends(get_current_vendedor)
    ):

    return product_service.create_product(db, product)
@router.put("/products/{product_id}", response_model=ProductOut)
def update_product(
    product_id: int, 
    product: ProductCreate ,
    db: Session = Depends(get_db), 
    user=Depends(get_current_vendedor)
    ):

    update_product = product_service.update_product(
        db,
        product_id,
        product.model_dump(exclude_unset=True)
    )

    if not update_product:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    return update_product


@router.delete("/products/{product_id}")
def delete_product(product_id: int, 
    db: Session = Depends(get_db),
    user=Depends(get_current_vendedor)
    ):
    return product_service.delete_product(db, product_id)