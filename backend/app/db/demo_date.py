import datetime

demo_users = [
    {
        "name": "kitty",
        "display_name": "HelloKitty",
        "icon": "kitty.jpeg",
        "password": "123456"
    }, {
        "name": "mymelody",
        "display_name": "マイメロディ",
        "icon": "mymelo.jpeg",
        "password": "1234561"
    }, {
        "name": "cinnamoroll",
        "display_name": "シナモロール",
        "icon": "cinnamon.jpeg",
        "password": "1234567"
    }, {
        "name": "pomurin",
        "display_name": "ポムポムプリン",
        "icon": "pomu.jpeg",
        "password": "1234568"
    }
]

kitty_id = 2
mymelo_id = 3
cinnamon_id = 4
pomu_id = 5

demo_follows = [
    {
        "from_user": kitty_id,
        "to_user": mymelo_id
    }, {
        "from_user": mymelo_id,
        "to_user": cinnamon_id
    }, {
        "from_user": kitty_id,
        "to_user": cinnamon_id
    }, {
        "from_user": cinnamon_id,
        "to_user": pomu_id
    }, {
        "from_user": pomu_id,
        "to_user": kitty_id
    }, {
        "from_user": pomu_id,
        "to_user": cinnamon_id
    }
]

demo_transactions = [
    {
        "amount": 22000,
        "net_balance": 22000,
        "user_id": kitty_id
    }, {
        "amount": -2000,
        "net_balance": 20000,
        "user_id": kitty_id
    }, {
        "amount": 21000,
        "net_balance": 21000,
        "user_id": mymelo_id
    }, {
        "amount": -1000,
        "net_balance": 20000,
        "user_id": mymelo_id
    }, {
        "amount": 31000,
        "net_balance": 31000,
        "user_id": cinnamon_id
    }, {
        "amount": -1000,
        "net_balance": 30000,
        "user_id": cinnamon_id
    }, {
        "amount": 55000,
        "net_balance": 55000,
        "user_id": pomu_id
    }, {
        "amount": -5000,
        "net_balance": 50000,
        "user_id": pomu_id
    }
]

demo_items = [
    {
        "name": "にんじん",
        "image": "carrot.jpeg",
        "detail": "新鮮なにんじん",
        "price": 2000,
    }, {
        "name": "トマト",
        "image": "tomato.jpeg",
        "detail": "美味しいトマト",
        "price": 1000,
    }, {
        "name": "ベリー",
        "image": "berry.jpeg",
        "detail": "甘いベリー",
        "price": 1000,
    }, {
        "name": "バナナ",
        "image": "banana.jpeg",
        "detail": "フィリピンのバナナ",
        "price": 5000,
    }
]

demo_addresses = [
    {
        "name": "キティ",
        "phone_number": "080-0000-0000",
        "zipcode": "000-0000",
        "address": "ハロー県キティ市2-5",
        "user_id": kitty_id
    }, {
        "name": "マイメロディ",
        "phone_number": "090-0000-0000",
        "zipcode": "222-2222",
        "address": "マイメロディタウン25-25",
        "user_id": mymelo_id
    }, {
        "name": "シナモロール",
        "phone_number": "090-1111-1111",
        "zipcode": "111-1111",
        "address": "シナモロールカフェ4-7",
        "user_id": cinnamon_id
    }, {
        "name": "ポムポムプリン",
        "phone_number": "080-1111-1111",
        "zipcode": "333-3333",
        "address": "ポムポム府プリン市2-5",
        "user_id": pomu_id
    }
]

kitty_address_id = 1
mymelo_address_id = 2
cinnamon_address_id = 3
pomu_address_id = 4

demo_tasks = [
    {
        "title": "買い物に行く",
        "priority": 0,
        "deadline": datetime.datetime(2021, 10, 1, 15, 30),
        "status": "not_complete",
        "back_money": True,
        "addresses_id": kitty_address_id,
        "from_user": mymelo_id,
        "to_user": kitty_id
    }, {
        "title": "家事をする",
        "priority": 1,
        "deadline": datetime.datetime(2021, 12, 2, 15, 30),
        "status": "faild",
        "back_money": True,
        "addresses_id": mymelo_address_id,
        "from_user": pomu_id,
        "to_user": mymelo_id
    }, {
        "title": "合格する",
        "priority": 2,
        "deadline": datetime.datetime(2021, 12, 1, 15, 40),
        "status": "success",
        "back_money": True,
        "addresses_id": cinnamon_address_id,
        "from_user": kitty_id,
        "to_user": cinnamon_id
    }, {
        "title": "痩せる",
        "priority": 1,
        "deadline": datetime.datetime(2021, 11, 2, 15, 30),
        "status": "not_complete",
        "back_money": False,
        "addresses_id": pomu_address_id,
        "from_user": pomu_id,
        "to_user": pomu_id
    }
]

shopping_task = 1
house_task = 2
pass_task = 3
diet_task = 4

demo_subtasks = [
    {
        "title": "野菜をカゴに入れる",
        "priority": 0,
        "status": "not_complete",
        "task_id": shopping_task
    }, {
        "title": "お金を支払う",
        "priority": 2,
        "status": "not_complete",
        "task_id": shopping_task
    }, {
        "title": "お風呂掃除",
        "priority": 1,
        "status": "success",
        "task_id": house_task
    }, {
        "title": "洗濯",
        "priority": 1,
        "status": "faild",
        "task_id": house_task
    }, {
        "title": "勉強する",
        "priority": 2,
        "status": "success",
        "task_id": pass_task
    }, {
        "title": "試験を受ける",
        "priority": 2,
        "status": "success",
        "task_id": pass_task
    }, {
        "title": "50km走る",
        "priority": 1,
        "status": "not_complete",
        "task_id": diet_task
    }
]

item_carrot_id = 1
item_tomato_id = 2
item_berry_id = 3
item_banana_id = 4

demo_tasks_items = [
    {
        "task_id": shopping_task,
        "item_id": item_carrot_id
    }, {
        "task_id": house_task,
        "item_id": item_tomato_id
    }, {
        "task_id": pass_task,
        "item_id": item_berry_id
    }, {
        "task_id": diet_task,
        "item_id": item_banana_id
    }
]
