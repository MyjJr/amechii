from app import crud
from app.schemas.user import UserCreate  # , FavouriteCreate
from app.schemas.item import ItemCreate
from app.schemas.task import TaskCreate, SubTaskCreate
from app.schemas.address import AddressCreate
from app.schemas.transaction import TransactionCreate
from app.utils import print_obj_attributes

from app.db import demo_date


def user_create(db):
    for i in demo_date.demo_users:
        user_in = UserCreate(
            name=i["name"],
            display_name=i["display_name"],
            icon=i["icon"],
            password=i["password"]
        )
        user = crud.user.create(db, obj_in=user_in)
        print(user)
        # print_obj_attributes(user)


def follow_create(db):
    for i in demo_date.demo_follows:
        user = crud.user.follow(
            db, from_user_id=i["from_id"], follow_user_id=i["to_id"]
        )
        # for i in user.following:
        #     print(i.name)
        print(user)


def item_create(db):
    for i in demo_date.demo_items:
        item_in = ItemCreate(
            name=i["name"], image=i["image"], detail=i["detail"], price=i["price"]
        )
        item = crud.item.create(db, obj_in=item_in)
        print(item)
        # print_obj_attributes(item)


def address_create(db):
    for i in demo_date.demo_addresses:
        address_in = AddressCreate(
            user_id=i["user_id"],
            name=i["name"],
            phone_number=i["phone_number"],
            zipcode=i["zipcode"],
            address=i["address"]
        )
        address = crud.address.create(db, obj_in=address_in)
        print(address)
        # print_obj_attributes(address)


def task_create(db):
    for i in range(len(demo_date.demo_tasks)):
        task_in = TaskCreate(
            set_id=demo_date.demo_tasks[i]["set_id"],
            do_id=demo_date.demo_tasks[i]["do_id"],
            address_id=demo_date.demo_tasks[i]["addresses_id"],
            title=demo_date.demo_tasks[i]["title"],
            deadline=demo_date.demo_tasks[i]["deadline"],
            back_money=demo_date.demo_tasks[i]["back_money"],
            status=demo_date.demo_tasks[i]["status"],
            item_id_list=[demo_date.demo_tasks_items[i]["item_id"]]
        )
        task = crud.task.create(db, obj_in=task_in)
        print(task)
        # print_obj_attributes(task)


def subtask_create(db):
    for i in demo_date.demo_subtasks:
        subtask_in = SubTaskCreate(
            task_id=i["task_id"],
            title=i["title"],
            priority=i["priority"],
            status=i["status"]
        )
        subtask = crud.subtask.create(db, obj_in=subtask_in)
        print(subtask)
        # print_obj_attributes(subtask)


def transaction_create(db):
    for i in demo_date.demo_transactions:

        obj_in = TransactionCreate(
            amount=i["amount"],
            user_id=i["user_id"]
        )
        transaction = crud.transaction.create(db, obj_in=obj_in)
        print(transaction)
        # print_obj_attributes(transaction)
        # balance = crud.transaction.get_balance(db, i["user_id"])
        # print(balance)


def favourite_create(db):
    for i in demo_date.demo_favourite:
        crud.favourite.create(db, obj_in=i)


def insert_demo_data_all(db):

    user_create(db)
    follow_create(db)
    item_create(db)
    address_create(db)
    task_create(db)
    subtask_create(db)
    transaction_create(db)
    favourite_create(db)


if __name__ == "__main__":
    from sqlalchemy import create_engine
    from sqlalchemy.orm import sessionmaker
    from sqlalchemy.orm import Session

    from app.core import configlocal
    # from app.models.task import Task
    engine = create_engine(
        configlocal.SQLALCHEMY_DATABASE_URI, encoding='UTF-8', echo=True
    )
    session = sessionmaker(autocommit=False, autoflush=False, bind=engine)

    db: Session = session()
    # insert_demo_data_all(db)
    user = crud.user.get(db, 1)
    print_obj_attributes(user)

    from app.schemas.task import SubTaskUpdate
    subtask_in = SubTaskUpdate(
        priority="1",
        status="success"
    )
    # a = crud.subtask.get(db, 1)
    # b = crud.subtask.update(db, db_obj=a, obj_in=subtask_in)
    # print(b)
    # a = crud.user.get_like_name(db, name="k")
    # a = 0
    # b = crud.item.get(db, 1)
    # print_obj_attributes(b)

    # obj_in = TransactionCreate(
    #     title="1",
    #     amount=-20000,
    #     user_id=1
    # )
    # transaction_create(db)
    # balance = crud.transaction.get_balance(db, 1)
    # print(balance)
    # a = crud.transaction.create(db, obj_in=obj_in)
    # print(crud.transaction.get_balance(db, 1))

    # obj_in = TransactionCreate(
    #     title="0",
    #     amount=20000,
    #     user_id=1
    # )

    # a = crud.transaction.create(db, obj_in=obj_in)
    # print(crud.transaction.get_balance(db, 1))
    # task_create(db)

    # task = crud.task.get(db, 1)
    # print_obj_attributes(task)
    # user_in = UserCreate(name="aaaa", password="123456")
    # user = crud.user.create(db, obj_in=user_in)
    # db.close()

    # user.following.append(user2)

    # print_obj_attributes(user.following[0])
    # db.add(user)
    # db.commit()
    # db.refresh(user)
    # # user = crud.user.get_by_name(db, name="キ")
    # user2 = crud.user.get(db, 2)
    # user3 = crud.user.get(db, 3)
    # user4 = crud.user.get(db, 4)
    # user = crud.user.unfollow(db, from_user=user, unfollow_user=user2)

    # users = crud.user.get_multi(db, limit=1)
    # for i in users:
    #     print_obj_attributes(i)
