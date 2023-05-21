from models.base import Base
from sqlalchemy import Column, Integer, String, DateTime, Float, Boolean, ForeignKey
from sqlalchemy.orm import relationship, mapped_column

class h2v(Base):
    __tablename__ = 'h2v'

    id = Column(Integer, primary_key=True)
    measuremente_value = Column(Float)

    def __repr__(self) -> str:
        return f"h2v(id={self.id}, measuremente_value={self.measuremente_value})"