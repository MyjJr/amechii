from fastapi import APIRouter, Depends, HTTPException, Body
from sqlalchemy.orm import Session
from typing import List

from app.schemas.task import AllTask, TaskRes, SubTask, SetTaskRes, SubTaskCreate, SubTaskUpdate, TaskCreate, TaskUpdate
from app.schemas.transaction import TransactionCreate

from app.models.user import User as DBUser
from app.api.utils.db import get_db
from app.api.utils.security import get_current_user
from app import crud
router = APIRouter()


@router.get("/get-allproject", response_model=AllTask)
async def get_mytasks(
    *,
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(get_current_user),
):
    db.refresh(current_user)
    all_task = AllTask(do_tasks=current_user.do_tasks, set_tasks=current_user.set_tasks)
    return all_task


@router.get("/get-project", response_model=SetTaskRes)
async def get_subtasks(
    *,
    project_id: int,
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(get_current_user)
):
    task = crud.task.get(db, project_id)
    if not task:
        raise HTTPException(status_code=404, detail="Project not Found")

    if task.do_id != current_user.id and task.set_id != current_user.id:
        raise HTTPException(status_code=403, detail="Forbidden")

    return task


# @router.get("/get-theirtasks", response_model=List[SetTaskRes])
# async def get_theirtasks(
#     db: Session = Depends(get_db),
#     current_user: DBUser = Depends(get_current_user),
# ):
#     task_list = crud.task.get_by_set_id(db, set_id=current_user.id)
#     return task_list


@router.post("/create-new-project", response_model=TaskRes)
async def create_new_project(
    title: str = Body(..., embed=True),
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(get_current_user),
):
    task_in = TaskCreate(title=title, set_id=current_user.id)
    return crud.task.create(db, obj_in=task_in)


@router.post("/start-project", response_model=TaskRes)
async def start_project(
    project_id: int,
    project_in: TaskUpdate,
    task_list: List[SubTaskCreate],
    item_id_list: List[int] = Body([]),
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(get_current_user),
):
    task = crud.task.get(db, project_id)
    if not task:
        raise HTTPException(status_code=404, detail="Project not found")

    price = crud.item.get_price(db, item_id_list)
    if price > crud.transaction.get_balance(db, current_user.id):
        raise HTTPException(status_code=606, detail="残高不足")

    task = crud.task.start_task(
        db, db_obj=task, obj_in=project_in, item_id_list=item_id_list
    )

    for i in task_list:
        crud.subtask.create(db, obj_in=i)

    if price > 0:
        transaction_in = TransactionCreate(user_id=current_user.id, amount=-price)

        crud.transaction.create(db, obj_in=transaction_in)

    return task


@router.put("/update-project", response_model=TaskRes)
async def update_project(
    project_id: int,
    task_in: TaskUpdate,
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(get_current_user),
):
    task = crud.task.get(db, project_id)
    if not task:
        raise HTTPException(status_code=404, detail="Subtask not found")

    task = crud.task.update(db, db_obj=task, obj_in=task_in)
    return task


@router.delete("/delete-project", response_model=TaskRes)
async def delete_project(
    project_id: int,
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(get_current_user),
):
    task = crud.task.get(db, project_id)
    if not task:
        raise HTTPException(status_code=404, detail="Subtask not found")

    task = crud.task.remove(db, id=project_id)
    return task


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


@router.post("/create-subtask", response_model=SubTask)
async def create_subtask(
    *,
    db: Session = Depends(get_db),
    subtask_in: SubTaskCreate,
    current_user: DBUser = Depends(get_current_user)
):

    subtask = crud.subtask.create(db, obj_in=subtask_in)

    return subtask


@router.put("/update-subtask", response_model=SubTask)
async def update_subtask(
    *,
    db: Session = Depends(get_db),
    subtask_id: int,
    subtask_in: SubTaskUpdate,
    current_user: DBUser = Depends(get_current_user)
):
    subtask_obj = crud.subtask.get(db, subtask_id)
    if not subtask_obj:
        raise HTTPException(status_code=404, detail="Subtask not found")

    subtask = crud.subtask.update(db, db_obj=subtask_obj, obj_in=subtask_in)

    return subtask


@router.delete("/del-subtask", response_model=SubTask)
async def del_address(
    subtask_id: int,
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(get_current_user),
):
    subtask = crud.subtask.get(db, subtask_id)
    if not subtask:
        raise HTTPException(status_code=404, detail="Subtask not found")

    subtask = crud.subtask.remove(db, id=subtask_id)
    return subtask
