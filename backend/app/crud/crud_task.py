from typing import Optional
from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.task import Task
from app.schemas.task import TaskCreate, TaskUpdate


class CRUDTask(CRUDBase[Task, TaskCreate, TaskUpdate]):
    def create(self, db_session: Session, *, obj_in: TaskCreate) -> Optional[Task]:
        if not obj_in.do_id:
            obj_in.do_id = obj_in.set_id

        return super().create(db_session, obj_in=obj_in)


task = CRUDTask(Task)
