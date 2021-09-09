from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.schemas.task import TaskRes, SubTask, SetTaskRes, SubTaskCreate, SubTaskUpdate  # , TaskCreate
from app.models.user import User as DBUser
from app.api.utils.db import get_db
from app.api.utils.security import get_current_user
from app import crud
router = APIRouter()


@router.get("/get-mytasks", response_model=List[TaskRes])
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
async def get_subtasks(*, db: Session = Depends(get_db), task_id: int):
    subtask_list = crud.subtask.get_by_task_id(db, task_id=task_id)
    return subtask_list


@router.post("/create-subtask", response_model=SubTask)
async def create_subtask(
    *,
    db: Session = Depends(get_db),
    subtask_in: SubTaskCreate,
    current_user: DBUser = Depends(get_current_user)
):

    subtask = crud.subtask.create(db, obj_in=subtask_in)

    return subtask


@router.post("/update-subtask", response_model=SubTask)
async def update_subtask(
    *,
    db: Session = Depends(get_db),
    subtask_id: int,
    subtask_in: SubTaskUpdate,
    current_user: DBUser = Depends(get_current_user)
):
    subtask_obj = crud.subtask.get(db, subtask_id)
    if not subtask_obj:
        return HTTPException(
            status_code=402,
            detail="Subtask not found",
            headers={"WWW-Authenticate": "Bearer"},
        )
    subtask = crud.subtask.update(db, db_obj=subtask_obj, obj_in=subtask_in)

    return subtask
