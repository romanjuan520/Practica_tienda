from ..models.product import Product
from fastapi import HTTPException

def get_products(db):
    return db.query(Product).all()

def create_product(db, name, price, image, category_id):
    product = Product(name=name, price=price, image=image,category_id=category_id)
    db.add(product)
    db.commit()
    db.refresh(product)
    return product

def update_product(db, product_id, name, price, image, category_id):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    product.name = name
    product.price = price
    product.image = image
    product.category_id = category_id
    db.commit()
    db.refresh(product)
    return product

def delete_product(db, product_id):
    product = db.query(Product).filter(Product.id == product_id). first()
    if not product:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    db.delete(product)
    db.commit()
    return {"detail": "Producto eliminado"}