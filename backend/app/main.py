from fastapi import FastAPI
from app.routers import auth, products , admin, orders
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.db.database import engine
from app.db.base import Base

import app.models.product
import app.models.category
import app.models.order
import app.models.order_item
import app.models.user

app = FastAPI(title="Tienda de Ropa")

app.mount("/static", StaticFiles(directory="app/static"), name="static")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(auth.router)
app.include_router(products.router)
app.include_router(admin.router)
app.include_router(orders.router)