from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..db.database import get_db
from .dependencies import get_current_user
from ..models.user import User

router = APIRouter(prefix="/users", tags=["Users"])

@router.get("/me")
def get_me(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return current_user