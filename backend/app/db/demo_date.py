import datetime

demo_users = [
    {
        "name": "hanako_y",
        "display_name": "HANAKO",
        "icon": "kitty.png",
        "password": "123456"
    }, {
        "name": "kenta_m",
        "display_name": "KENTA",
        "icon": "mymelo.png",
        "password": "1234561"
    }, {
        "name": "rina_m",
        "display_name": "RINA",
        "icon": "cinnamon.png",
        "password": "1234567"
    }, {
        "name": "ryo_tnk",
        "display_name": "RYO",
        "icon": "pomu.png",
        "password": "1234568"
    }
]

hanako_id = 2
kenta_id = 3
rina_id = 4
ryo_id = 5

demo_follows = [
    {
        "from_id": hanako_id,
        "to_id": kenta_id
    }, {
        "from_id": kenta_id,
        "to_id": rina_id
    }, {
        "from_id": hanako_id,
        "to_id": rina_id
    }, {
        "from_id": rina_id,
        "to_id": ryo_id
    }, {
        "from_id": ryo_id,
        "to_id": hanako_id
    }, {
        "from_id": ryo_id,
        "to_id": rina_id
    }
]

demo_transactions = [
    {
        "amount": 22000,
        "net_balance": 22000,
        "user_id": hanako_id
    }, {
        "amount": -20000,
        "net_balance": 2000,
        "user_id": hanako_id
    }, {
        "amount": 21000,
        "net_balance": 21000,
        "user_id": kenta_id
    }, {
        "amount": -10000,
        "net_balance": 11000,
        "user_id": kenta_id
    }, {
        "amount": 31000,
        "net_balance": 31000,
        "user_id": rina_id
    }, {
        "amount": -1000,
        "net_balance": 30000,
        "user_id": rina_id
    }, {
        "amount": 55000,
        "net_balance": 55000,
        "user_id": ryo_id
    }, {
        "amount": -50000,
        "net_balance": 5000,
        "user_id": ryo_id
    }
]

demo_items = [
    {
        "name": "時計",
        "image": "watch.jpeg",
        "detail": "クールな時計",
        "price": 20000,
    },
    {
        "name": "ゲーム",
        "image": "game.jpeg",
        "detail": "新作のゲーム",
        "price": 10000,
    },
    {
        "name": "ぬいぐるみ",
        "image": "bear.jpeg",
        "detail": "可愛いぬいぐるみ",
        "price": 1000,
    },
    {
        "name": "タブレット",
        "image": "tablet.jpeg",
        "detail": "便利なタブレット",
        "price": 50000,
    },
    {
        "name": "ギター",
        "image": "guitar.jpeg",
        "detail": "人気No.1のギター",
        "price": 20000,
    },
    {
        "name": "アイシャドウ",
        "image": "cosme.jpeg",
        "detail": "肌に優しいアイシャドウ",
        "price": 5000,
    },
    {
        "name": "指輪",
        "image": "ring.jpeg",
        "detail": "ゴールドのリング",
        "price": 10000,
    },
    {
        "name": "ワイン",
        "image": "wine.jpeg",
        "detail": "人気のワイン",
        "price": 10000,
    },
    {
        "name": "ゲーム",
        "image": "game_2.jpeg",
        "detail": "限定色のゲーム機",
        "price": 30000,
    },
    {
        "name": "カメラ",
        "image": "camera.jpeg",
        "detail": "質の良いカメラ",
        "price": 40000,
    },
    {
        "name": "サングラス",
        "image": "glasses.jpeg",
        "detail": "オシャレなサングラス",
        "price": 10000,
    },
]

demo_addresses = [
    {
        "name": "HANAKO",
        "phone_number": "080-0000-0000",
        "zipcode": "000-0000",
        "address": "◯◯県△△市2-5",
        "user_id": hanako_id
    }, {
        "name": "KENTA",
        "phone_number": "090-0000-0000",
        "zipcode": "222-2222",
        "address": "◯◯県△△市20-5",
        "user_id": kenta_id
    }, {
        "name": "RINA",
        "phone_number": "090-1111-1111",
        "zipcode": "111-1111",
        "address": "◯◯県△△市4-7",
        "user_id": rina_id
    }, {
        "name": "RYO",
        "phone_number": "080-1111-1111",
        "zipcode": "333-3333",
        "address": "◯◯県△△市7-5",
        "user_id": ryo_id
    }
]

hanako_address_id = 1
kenta_address_id = 2
rina_address_id = 3
ryo_address_id = 4

demo_tasks = [
    {
        "title": "買い物に行く",
        "deadline": datetime.datetime(2021, 10, 1, 12, 00),
        "status": "not_complete",
        "back_money": True,
        "set_id": kenta_id,
        "do_id": hanako_id,
        "addresses_id": hanako_address_id
    }, {
        "title": "家事をする",
        "deadline": datetime.datetime(2021, 10, 10, 23, 00),
        "status": "faild",
        "back_money": True,
        "set_id": rina_id,
        "do_id": kenta_id,
        "addresses_id": kenta_address_id
    }, {
        "title": "合格する",
        "deadline": datetime.datetime(2021, 11, 22, 15, 40),
        "status": "success",
        "back_money": True,
        "set_id": hanako_id,
        "do_id": rina_id,
        "addresses_id": rina_address_id
    }, {
        "title": "痩せる",
        "deadline": datetime.datetime(2021, 12, 12, 15, 40),
        "status": "not_complete",
        "back_money": False,
        "set_id": ryo_id,
        "do_id": ryo_id,
        "addresses_id": ryo_address_id
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

item_watch_id = 1
item_game_id = 2
item_bear_id = 3
item_tablet_id = 4

demo_tasks_items = [
    {
        "task_id": shopping_task,
        "item_id": item_watch_id
    }, {
        "task_id": house_task,
        "item_id": item_game_id
    }, {
        "task_id": pass_task,
        "item_id": item_bear_id
    }, {
        "task_id": diet_task,
        "item_id": item_tablet_id
    }
]

demo_favourite = [
    {
        "user_id": kenta_id,
        "item_id": item_watch_id
    }, {
        "user_id": rina_id,
        "item_id": item_game_id
    }, {
        "user_id": hanako_id,
        "item_id": item_bear_id
    }, {
        "user_id": ryo_id,
        "item_id": item_tablet_id
    }
]
