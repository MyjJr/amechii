from copy import deepcopy
from typing import Optional
from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.task import Task, SubTask, Task_item
from app.schemas.task import TaskCreate, TaskUpdate, SubTaskCreate, SubTaskUpdate, Task_itemCreate, Task_itemUpdate


class CRUDTask(CRUDBase[Task, TaskCreate, TaskUpdate]):
    def create(self, db_session: Session, *, obj_in: TaskCreate) -> Optional[Task]:
        if not obj_in.do_id:
            obj_in.do_id = obj_in.set_id
        obj_in_db = deepcopy(obj_in)
        del obj_in_db.item_id_list
        task = super().create(db_session, obj_in=obj_in_db)
        if obj_in.item_id_list:
            for i in obj_in.item_id_list:
                task_item_in = Task_itemCreate(
                    task_id=task.id,
                    item_id=i
                )
                task_item.create(db_session, obj_in=task_item_in)
        return task


class CRUDSubTask(CRUDBase[SubTask, SubTaskCreate, SubTaskUpdate]):
    pass


class CRUDTask_item(CRUDBase[Task_item, Task_itemCreate, Task_itemUpdate]):
    pass


task = CRUDTask(Task)
subtask = CRUDSubTask(SubTask)
task_item = CRUDTask_item(Task_item)
