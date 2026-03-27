from pydantic import BaseModel

class OrderCreate(BaseModel):
    total: float

class OrderOut(OrderCreate):
    id: int
    user_id: int

    class Config:
        from_attributes = True