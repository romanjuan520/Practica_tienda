from pydantic import BaseModel

class ProductCreate(BaseModel):
    name: str
    price: float
    image: str | None = None
    category_id: int | None = None
    description: str
    stock: int
    

class ProductOut(ProductCreate):
    id: int

    class Config:
        from_attributes = True