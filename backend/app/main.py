from fastapi import FastAPI
from app.routers import auth, products , admin, orders
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Tienda de Ropa")

app.include_router(auth.router)
app.include_router(products.router)
app.include_router(admin.router)
app.include_router(orders.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)