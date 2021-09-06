 
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from app.schemas.task import SetTaskRes, MyTaskRes,TaskRes, TaskCreate, SubTask, SubTaskCreate
from app.models.user import User as DBUser
from app.api.utils.db import get_db
from app.api.utils.security import get_current_user
from app import crud
router = APIRouter()

@router.get("/get-mytasks", response_model=List[MyTaskRes])
async def get_mytasks(
    *,
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(get_current_user),
):
    task_list = crud.task.get_by_do_id(db, do_id=current_user.id)
    return task_list

@router.get("/get-theirtasks", response_model=List[SetTaskRes])
async def get_theirtasks(
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(get_current_user),
):
    task_list = crud.task.get_by_set_id(db, set_id=current_user.id)
    return task_list


# @router.post("/create-task", response_model=TaskRes)
# async def create_task(*,
#     db: Session = Depends(get_db),
#     current_user: DBUser = Depends(get_current_user),
#     do_user: int,
#     task_post: TaskCreate):
#     task_post.set_id = current_user.id
#     task_post.do_id = do_user
#     task = crud.task.create(db, obj_in=task_post)

#     return task

@router.get("/get-subtasks", response_model=List[SubTask])
async def get_subtasks(
    *,
    db: Session = Depends(get_db),
    task_id: int
):
    subtask_list = crud.subtask.get_by_task_id(db, task_id=task_id)
    return subtask_list


# @router.post("/create-subtask", response_model=SubTask)
# async def create_subtask(*,
#     db: Session = Depends(get_db),
#     task_id: int,
#     subtask_post: SubTaskCreate):

#     subtask = crud.subtask.create(db, task_id=task_id, obj_in=subtask_post)

#     return subtask
