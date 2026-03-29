from fastapi import HTTPException
from sqlalchemy.orm import Session
from app.models.product import Product
from app.schemas.product_schema import ProductCreate

def get_products(db: Session, skip: int = 0, limit: int = 10):
    return db.query(Product).offset(skip).limit(limit).all()

def get_product_by_id(db: Session, product_id: int):
    product = db.get(Product, product_id)

    if not product:
        raise HTTPException(status_code=404, detail="producto no encontrado")
    return product

def create_product(db: Session, product: ProductCreate):
    if product.stock < 0:
        raise HTTPException(status_code=400, detail="Stock no puede ser negativo")
    
    new_product = Product(**product.dict())
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product

def update_product(db: Session, product_id: int, data: ProductCreate):
    product = db.get(Product, product_id)

    if not product:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    
    for key, value in data.dict(exclude_unset=True).items():
        setattr(product, key, value)

    db.commit()
    db.refresh(product)

    return product
    
def delete_product(db: Session, product_id: int):
    product = db.get(Product, product_id)

    if not product:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    
    db.delete(product)
    db.commit()
    
    return {"message": "Producto eliminado correctamente"}