from pydantic import BaseModel, Field, HttpUrl

class ProductBase(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    price: float = Field(gt=0, description="Precio del producto")
    image: str | None = None
    category_id: int | None = None
    description: str | None = None
    stock: int = Field(gt=0)

class ProductCreate(ProductBase):
    pass

class ProductOut(ProductBase):
    id: int

    class Config:
        from_attributes = True