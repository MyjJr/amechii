from copy import deepcopy
from typing import Optional, List
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

    def start_task(self, db_session: Session, *, db_obj: Task, obj_in: TaskUpdate, item_id_list: list):
        task = super().update(db_session, db_obj=db_obj, obj_in=obj_in)

        if item_id_list:
            for i in item_id_list:
                task_item_in = Task_itemCreate(
                    task_id=task.id,
                    item_id=i
                )
                task_item.create(db_session, obj_in=task_item_in)

        return task

    def get_by_do_id(self, db_session: Session, *, do_id: int) -> Optional[List[Task]]:
        return db_session.query(Task).filter(Task.do_id == do_id).all()

    def get_by_set_id(self, db_session: Session, *, set_id: int) -> Optional[List[Task]]:
        return db_session.query(Task).filter(Task.set_id == set_id).all()


class CRUDSubTask(CRUDBase[SubTask, SubTaskCreate, SubTaskUpdate]):
    def get_by_task_id(self, db_session: Session, *, task_id: int) -> Optional[List[SubTask]]:
        return db_session.query(SubTask).filter(SubTask.task_id == task_id).all()


class CRUDTask_item(CRUDBase[Task_item, Task_itemCreate, Task_itemUpdate]):
    pass


task = CRUDTask(Task)
subtask = CRUDSubTask(SubTask)
task_item = CRUDTask_item(Task_item)
