from ..models.product import Product
from fastapi import HTTPException

def get_products(db):
    return db.query(Product).all()

def create_product(db, name, price, image, category_id, description, stock):

    product = Product(
        name=name,
        price=price,
        image=image,
        category_id=category_id,
        description=description,
        stock=stock
    )
    db.add(product)
    db.commit()
    db.refresh(product)
    return product

def update_product(db, product_id, product_data):

    product = db.query(Product).filter(Product.id == product_id).first()

    if not product:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    
    for key, value in product_data.item():
        setattr(product, key, value)

    db.commit()
    db.refresh(product)
    return product


def delete_product(db, product_id):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    db.delete(product)
    db.commit()
    return {"detail": "Producto eliminado"}