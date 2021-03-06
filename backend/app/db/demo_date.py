import datetime

demo_users = [
    {
        "name": "hanako",
        "display_name": "HANAKO",
        "icon": "kitty.png",
        "password": "123456"
    }, {
        "name": "kenta",
        "display_name": "KENTA",
        "icon": "mymelo.png",
        "password": "1234561"
    }, {
        "name": "rina",
        "display_name": "RINA",
        "icon": "cinnamon.png",
        "password": "1234567"
    }, {
        "name": "ryo_tnk",
        "display_name": "RYO",
        "icon": "pomu.png",
        "password": "1234568"
    }, {
        "name": "ai_2525",
        "display_name": "AI",
        "icon": "heart.jpeg",
        "password": "1234568"
    }, {
        "name": "yuri_m",
        "display_name": "YURI",
        "icon": "flower.jpeg",
        "password": "1234568"
    }, {
        "name": "aiko",
        "display_name": "Aiko",
        "icon": "flower_2.jpeg",
        "password": "1234568"
    }, {
        "name": "taro25",
        "display_name": "TARO",
        "icon": "taro.jpeg",
        "password": "1234568"
    }, {
        "name": "hikari_21",
        "display_name": "HIKARI",
        "icon": "hikari.jpeg",
        "password": "1234568"
    }, {
        "name": "yuji_777",
        "display_name": "YUJI",
        "icon": "yuji.jpeg",
        "password": "1234568"
    }, {
        "name": "kumikumi",
        "display_name": "KUMI",
        "icon": "kumi.jpeg",
        "password": "12322"
    }, {
        "name": "minami_t",
        "display_name": "MINAMI",
        "icon": "minami.jpeg",
        "password": "1234568"
    }, {
        "name": "shiori_s",
        "display_name": "SHIORI",
        "icon": "shiori.jpeg",
        "password": "1234568"
    }, {
        "name": "hayato_5",
        "display_name": "HAYATO",
        "icon": "hayato.jpeg",
        "password": "1234568"
    }, {
        "name": "moe_mm",
        "display_name": "MOE",
        "icon": "moe.jpeg",
        "password": "1234568"
    }, {
        "name": "rinrin",
        "display_name": "RIN",
        "icon": "rin.jpeg",
        "password": "1234568"
    }, {
        "name": "riku_o",
        "display_name": "RIKU",
        "icon": "riku.jpeg",
        "password": "1234568"
    }, {
        "name": "natsumin",
        "display_name": "NATSUMI",
        "icon": "natsumi.jpeg",
        "password": "1234568"
    }, {
        "name": "nami_1212",
        "display_name": "NAMI",
        "icon": "nami.jpeg",
        "password": "12345"
    }, {
        "name": "yoshiki_m",
        "display_name": "YOSHIKI",
        "icon": "yoshiki.jpeg",
        "password": "1234567"
    }, {
        "name": "ryutaro_o",
        "display_name": "RYUTARO",
        "icon": "ryu.jpeg",
        "password": "1234568"
    }, {
        "name": "kanako_k",
        "display_name": "KANAKO",
        "icon": "kanako.jpeg",
        "password": "1234568"
    }, {
        "name": "risarisa",
        "display_name": "RISA",
        "icon": "risa.jpeg",
        "password": "1234568"
    }, {
        "name": "yuhei_k",
        "display_name": "YUHEI",
        "icon": "yuhei.jpeg",
        "password": "1234568"
    }, {
        "name": "hinako_22",
        "display_name": "HINAKO",
        "icon": "hinako.jpeg",
        "password": "1234567"
    }, {
        "name": "mimi",
        "display_name": "MIMI",
        "icon": "mimi.jpeg",
        "password": "1234567"
    }, {
        "name": "nozomin15",
        "display_name": "NOZOMI",
        "icon": "nozomi.jpeg",
        "password": "1234567"
    }, {
        "name": "reina_k",
        "display_name": "REINA",
        "icon": "reina.jpeg",
        "password": "1234567"
    }, {
        "name": "mayu_888",
        "display_name": "MAYU",
        "icon": "mayu.jpeg",
        "password": "1234567"
    }, {
        "name": "naoki_na",
        "display_name": "NAOKI",
        "icon": "naoki.jpeg",
        "password": "1234567"
    }, {
        "name": "maria_a",
        "display_name": "MARIA",
        "icon": "maria.jpeg",
        "password": "1234567"
    }, {
        "name": "nana_45",
        "display_name": "NANA",
        "icon": "nana.jpeg",
        "password": "1234567"
    }, {
        "name": "ren_87",
        "display_name": "REN",
        "icon": "ren.jpeg",
        "password": "1234567"
    }, {
        "name": "satoshi_77",
        "display_name": "Satoshi",
        "icon": "satoshi.jpeg",
        "password": "1234567"
    }, {
        "name": "yumi_u",
        "display_name": "YUMI",
        "icon": "yumi.jpeg",
        "password": "1234567"
    }, {
        "name": "yuta_56",
        "display_name": "YUTA",
        "icon": "yuta.jpeg",
        "password": "1234567"
    }, {
        "name": "erika_55",
        "display_name": "ERIKA",
        "icon": "erika.jpeg",
        "password": "1234567"
    }, {
        "name": "kotone_kk",
        "display_name": "KOTONE",
        "icon": "kotone.jpeg",
        "password": "1234567"
    }, {
        "name": "sho_s",
        "display_name": "sho",
        "icon": "sho.jpeg",
        "password": "1234567"
    }, {
        "name": "takuya_7",
        "display_name": "takuya",
        "icon": "takuya.jpeg",
        "password": "1234567"
    }, {
        "name": "masahiro",
        "display_name": "MASAHIRO",
        "icon": "masahiro.jpeg",
        "password": "1234567"
    }, {
        "name": "goro_56",
        "display_name": "GORO",
        "icon": "goro.jpeg",
        "password": "1234567"
    }, {
        "name": "kanon_n",
        "display_name": "KANON",
        "icon": "kanon.jpeg",
        "password": "1234567"
    }, {
        "name": "misa_7",
        "display_name": "MISA",
        "icon": "misa.jpeg",
        "password": "1234567"
    }, {
        "name": "momoko_3",
        "display_name": "MOMOKO",
        "icon": "momoko.jpeg",
        "password": "1234567"
    }, {
        "name": "shota_j",
        "display_name": "shota",
        "icon": "shota.jpeg",
        "password": "1234567"
    }, {
        "name": "miyu_m",
        "display_name": "miyu",
        "icon": "miyu.jpeg",
        "password": "1234567"
    }, {
        "name": "naomi_h",
        "display_name": "NAOMI",
        "icon": "naomi.jpeg",
        "password": "1234567"
    }, {
        "name": "erina_77",
        "display_name": "ERINA",
        "icon": "erina.jpeg",
        "password": "1234567"
    }, {
        "name": "hana_65",
        "display_name": "Hana",
        "icon": "hana.jpeg",
        "password": "1234567"
    }, {
        "name": "nao_5",
        "display_name": "NAO",
        "icon": "nao.jpeg",
        "password": "1234567"
    }, {
        "name": "kazuko_o",
        "display_name": "KAZUKO",
        "icon": "kazuko.jpeg",
        "password": "1234567"
    }, {
        "name": "keito_7",
        "display_name": "keito",
        "icon": "keito.jpeg",
        "password": "1234567"
    }, {
        "name": "akanen",
        "display_name": "AKANE",
        "icon": "akane.jpeg",
        "password": "1234567"
    }, {
        "name": "arisa_i",
        "display_name": "ARISA",
        "icon": "arisa.jpeg",
        "password": "1234567"
    }, {
        "name": "tomomin_7",
        "display_name": "TOMOMI",
        "icon": "tomomi.jpeg",
        "password": "1234567"
    }, {
        "name": "megumi_a",
        "display_name": "MEGUMI",
        "icon": "megumi.jpeg",
        "password": "1234567"
    }, {
        "name": "mei_h",
        "display_name": "MEI",
        "icon": "mei.jpeg",
        "password": "1234567"
    }, {
        "name": "kakeru_i",
        "display_name": "KAKERU",
        "icon": "kakeru.jpeg",
        "password": "1234567"
    }, {
        "name": "momona_n",
        "display_name": "MOMONA",
        "icon": "momona.jpeg",
        "password": "1234567"
    }, {
        "name": "kahokaho_k",
        "display_name": "KAHO",
        "icon": "kaho.jpeg",
        "password": "1234567"
    }, {
        "name": "remi_89",
        "display_name": "remi",
        "icon": "remi.jpeg",
        "password": "1234567"
    }, {
        "name": "rizumu_2",
        "display_name": "RIZUMU",
        "icon": "rizumu.jpeg",
        "password": "1234567"
    }, {
        "name": "anna_aa",
        "display_name": "ANNA",
        "icon": "anna.jpeg",
        "password": "1234567"
    }, {
        "name": "kyoko_t",
        "display_name": "kyoko",
        "icon": "kyoko.jpeg",
        "password": "1234567"
    }, {
        "name": "marie_e",
        "display_name": "marie",
        "icon": "marie.jpeg",
        "password": "1234567"
    }, {
        "name": "fuka_f",
        "display_name": "FUKA",
        "icon": "fuka.jpeg",
        "password": "1234567"
    }, {
        "name": "takeru_s",
        "display_name": "TAKERU",
        "icon": "takeru.jpeg",
        "password": "1234567"
    }, {
        "name": "takeshi_w",
        "display_name": "TAKESHI",
        "icon": "takeshi.jpeg",
        "password": "1234567"
    }, {
        "name": "suzu_24",
        "display_name": "SUZU",
        "icon": "suzu.jpeg",
        "password": "1234567"
    }, {
        "name": "sayaka_s",
        "display_name": "sayaka",
        "icon": "sayaka.jpeg",
        "password": "1234567"
    }, {
        "name": "minamina_45",
        "display_name": "minami",
        "icon": "minamin.jpeg",
        "password": "1234567"
    }, {
        "name": "nastuki_h",
        "display_name": "NATSUKI",
        "icon": "natsuki.jpeg",
        "password": "1234567"
    }, {
        "name": "masahito_h",
        "display_name": "masahito",
        "icon": "masahito.jpeg",
        "password": "1234567"
    }, {
        "name": "ryuya_o",
        "display_name": "RYUYA",
        "icon": "ryuya.jpeg",
        "password": "1234567"
    }, {
        "name": "ami_s",
        "display_name": "AMI",
        "icon": "ami.jpeg",
        "password": "1234567"
    }, {
        "name": "hello_yui",
        "display_name": "yui",
        "icon": "yui_h.jpeg",
        "password": "1234567"
    }, {
        "name": "chihiro",
        "display_name": "chihiro",
        "icon": "chihiro.jpeg",
        "password": "1234567"
    }, {
        "name": "mai_4649",
        "display_name": "MAI",
        "icon": "mai.jpeg",
        "password": "1234567"
    }, {
        "name": "haruna_k",
        "display_name": "HARUNA",
        "icon": "haruna.jpeg",
        "password": "1234567"
    }, {
        "name": "kurumin",
        "display_name": "Kurumi",
        "icon": "kurumi.jpeg",
        "password": "1234567"
    }, {
        "name": "sanae_h",
        "display_name": "SANAE",
        "icon": "sanae.jpeg",
        "password": "1234567"
    }, {
        "name": "tnk_aya",
        "display_name": "AYA",
        "icon": "aya.jpeg",
        "password": "1234567"
    }, {
        "name": "atsuko_o",
        "display_name": "ATSUKO",
        "icon": "atsuko.jpeg",
        "password": "1234567"
    }, {
        "name": "yuko_m",
        "display_name": "YUKO",
        "icon": "yuko.jpeg",
        "password": "1234567"
    }, {
        "name": "runa_h",
        "display_name": "RUNA",
        "icon": "runa.jpeg",
        "password": "1234567"
    }, {
        "name": "rumi_m",
        "display_name": "RUMI",
        "icon": "rumi.jpeg",
        "password": "1234567"
    }, {
        "name": "miki_k",
        "display_name": "MIKI",
        "icon": "miki.jpeg",
        "password": "1234567"
    }, {
        "name": "maki_e",
        "display_name": "MAKI",
        "icon": "maki.jpeg",
        "password": "1234567"
    }, {
        "name": "rika_7676",
        "display_name": "RIKA",
        "icon": "rika.jpeg",
        "password": "1234567"
    }, {
        "name": "rie_f",
        "display_name": "RIE",
        "icon": "rie.jpeg",
        "password": "1234567"
    }, {
        "name": "yukina_55",
        "display_name": "YUKINA",
        "icon": "yukina.jpeg",
        "password": "1234567"
    }, {
        "name": "chie_cc",
        "display_name": "CHIE",
        "icon": "chie.jpeg",
        "password": "1234567"
    }, {
        "name": "keiko_f",
        "display_name": "KEIKO",
        "icon": "keiko.jpeg",
        "password": "1234567"
    }, {
        "name": "miu_u",
        "display_name": "MIU",
        "icon": "miu.jpeg",
        "password": "1234567"
    }, {
        "name": "kokoro_k",
        "display_name": "kokoro",
        "icon": "kokoro.jpeg",
        "password": "1234567"
    }, {
        "name": "ayame_m",
        "display_name": "ayame",
        "icon": "ayame.jpeg",
        "password": "1234567"
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
        "name": "??????",
        "image": "watch.jpeg",
        "detail": "??????????????????",
        "price": 20000,
        "category": "??????????????????"
    },
    {
        "name": "?????????",
        "image": "game.jpeg",
        "detail": "??????????????????",
        "price": 10000,
        "category": "????????????"
    },
    {
        "name": "???????????????",
        "image": "bear.jpeg",
        "detail": "????????????????????????",
        "price": 1000,
        "category": "?????????"
    },
    {
        "name": "???????????????",
        "image": "tablet.jpeg",
        "detail": "????????????????????????",
        "price": 50000,
        "category": "??????"
    },
    {
        "name": "?????????",
        "image": "guitar.jpeg",
        "detail": "??????No.1????????????",
        "price": 20000,
        "category": "????????????"
    },
    {
        "name": "??????????????????",
        "image": "cosme.jpeg",
        "detail": "?????????????????????????????????",
        "price": 5000,
        "category": "??????????????????"
    },
    {
        "name": "??????",
        "image": "ring.jpeg",
        "detail": "????????????????????????",
        "price": 10000,
        "category": "??????????????????"
    },
    {
        "name": "?????????",
        "image": "wine.jpeg",
        "detail": "??????????????????",
        "price": 10000,
        "category": "?????????"
    },
    {
        "name": "?????????",
        "image": "game_2.jpeg",
        "detail": "????????????????????????",
        "price": 30000,
        "category": "????????????"
    },
    {
        "name": "?????????",
        "image": "camera.jpeg",
        "detail": "?????????????????????",
        "price": 40000,
        "category": "??????"
    },
    {
        "name": "???????????????",
        "image": "wan.jpeg",
        "detail": "???????????????????????????????????????????????????????????????",
        "price": 12500,
        "category": "??????????????????"
    },
    {
        "name": "????????????",
        "image": "skirt.jpeg",
        "detail": "??????????????????????????????????????????????????????",
        "price": 7000,
        "category": "??????????????????"
    },
    {
        "name": "???????????????",
        "image": "wan_2.jpeg",
        "detail": "????????????????????????????????????????????????",
        "price": 10200,
        "category": "??????????????????"
    },
    {
        "name": "??????",
        "image": "watch_2.jpeg",
        "detail": "??????????????????????????????",
        "price": 45000,
        "category": "??????????????????"
    },
    {
        "name": "??????",
        "image": "watch_3.jpeg",
        "detail": "???????????????????????????????????????????????????",
        "price": 35000,
        "category": "??????????????????"
    },
    {
        "name": "??????????????????",
        "image": "bracelet.jpeg",
        "detail": "???????????????????????????????????????????????????",
        "price": 3000,
        "category": "??????????????????"
    },
    {
        "name": "??????????????????",
        "image": "bracelet_2.jpeg",
        "detail": "???????????????????????????????????????????????????????????????",
        "price": 35000,
        "category": "??????????????????"
    },
    {
        "name": "??????????????????",
        "image": "bracelet_3.jpeg",
        "detail": "????????????????????????????????????????????????????????????????????????????????????",
        "price": 35000,
        "category": "??????????????????"
    },
    {
        "name": "???????????????",
        "image": "neck.jpeg",
        "detail": "???????????????????????????????????????????????????????????????",
        "price": 18000,
        "category": "??????????????????"
    },
    {
        "name": "???",
        "image": "meat.jpeg",
        "detail": "???????????????????????????",
        "price": 12000,
        "category": "?????????"
    },
    {
        "name": "?????????",
        "image": "beer.jpeg",
        "detail": "???????????????????????????????????????????????????",
        "price": 4000,
        "category": "?????????"
    },
    {
        "name": "????????????",
        "image": "maca.jpeg",
        "detail": "?????????????????????????????????????????????",
        "price": 2500,
        "category": "?????????"
    },
    {
        "name": "???????????????????????????",
        "image": "strawberry.jpeg",
        "detail": "??????????????????????????????????????????",
        "price": 4200,
        "category": "?????????"
    },
    {
        "name": "?????????????????????",
        "image": "fruit.jpeg",
        "detail": "????????????????????????????????????????????????????????????",
        "price": 3800,
        "category": "?????????"
    },
    {
        "name": "???????????????????????????",
        "image": "fruits.jpeg",
        "detail": "???????????????????????????????????????",
        "price": 4500,
        "category": "?????????"
    },
    {
        "name": "?????????",
        "image": "game_3.jpeg",
        "detail": "????????????????????????????????????????????????",
        "price": 25200,
        "category": "????????????"
    },
    {
        "name": "??????????????????",
        "image": "uno.jpeg",
        "detail": "???????????????????????????????????????",
        "price": 500,
        "category": "????????????"
    },
    {
        "name": "CD",
        "image": "cd.jpeg",
        "detail": "????????????????????????????????????CD",
        "price": 15200,
        "category": "????????????"
    },
    {
        "name": "???????????????????????????",
        "image": "cube.jpeg",
        "detail": "??????????????????????????????????????????????????????????????????",
        "price": 500,
        "category": "????????????"
    },
    {
        "name": "?????????",
        "image": "puzzle.jpeg",
        "detail": "?????????????????????????????????????????????",
        "price": 1200,
        "category": "????????????"
    },
    {
        "name": "?????????",
        "image": "tv.jpeg",
        "detail": "??????????????????????????????",
        "price": 52000,
        "category": "??????"
    },
    {
        "name": "?????????",
        "image": "wash.jpeg",
        "detail": "?????????????????????????????????????????????????????????????????????",
        "price": 555000,
        "category": "??????"
    },
    {
        "name": "???????????????",
        "image": "hairdry.jpeg",
        "detail": "????????????????????????????????????????????????????????????",
        "price": 12500,
        "category": "??????"
    },
    {
        "name": "?????????????????????",
        "image": "smart.jpeg",
        "detail": "????????????????????????????????????????????????????????????",
        "price": 105200,
        "category": "??????"
    },
    {
        "name": "?????????",
        "image": "tv_2.jpeg",
        "detail": "????????????????????????",
        "price": 22000,
        "category": "??????"
    },
    {
        "name": "?????????",
        "image": "camera_2.jpeg",
        "detail": "????????????????????????????????????????????????",
        "price": 45000,
        "category": "??????"
    },
    {
        "name": "?????????????????????",
        "image": "pc.jpeg",
        "detail": "???????????????????????????????????????????????????",
        "price": 95000,
        "category": "??????"
    },
    {
        "name": "????????????",
        "image": "toy.jpeg",
        "detail": "??????????????????????????????????????????????????????",
        "price": 2500,
        "category": "?????????"
    },
    {
        "name": "?????????",
        "image": "tsumiki.jpeg",
        "detail": "????????????????????????????????????????????????",
        "price": 3500,
        "category": "?????????"
    },
    {
        "name": "??????????????????",
        "image": "toy_2.jpeg",
        "detail": "????????????????????????????????????",
        "price": 3300,
        "category": "?????????"
    },
    {
        "name": "???????????????",
        "image": "kaeru.jpeg",
        "detail": "???????????????????????????????????????????????????3????????????",
        "price": 6200,
        "category": "?????????"
    },
    {
        "name": "????????????",
        "image": "car.jpeg",
        "detail": "???????????????????????????????????????????????????????????????",
        "price": 750,
        "category": "?????????"
    },
    {
        "name": "????????????",
        "image": "car_2.jpeg",
        "detail": "???????????????????????????????????????????????????",
        "price": 850,
        "category": "?????????"
    },
    {
        "name": "????????????",
        "image": "car_3.jpeg",
        "detail": "???????????????????????????????????????????????????",
        "price": 750,
        "category": "?????????"
    },
    {
        "name": "???????????????",
        "image": "manicure.jpeg",
        "detail": "????????????????????????????????????8????????????",
        "price": 6200,
        "category": "??????????????????"
    },
    {
        "name": "??????",
        "image": "kaori.jpeg",
        "detail": "??????????????????????????????????????????",
        "price": 12000,
        "category": "??????????????????"
    },
    {
        "name": "??????",
        "image": "kaori_2.jpeg",
        "detail": "?????????????????????????????????????????????",
        "price": 7200,
        "category": "??????????????????"
    },
    {
        "name": "???????????????",
        "image": "kuma.jpeg",
        "detail": "??????????????????????????????????????????",
        "price": 12500,
        "category": "?????????"
    },
    {
        "name": "????????????",
        "image": "oto.jpeg",
        "detail": "??????????????????????????????????????????????????????",
        "price": 2200,
        "category": "?????????"
    },
    {
        "name": "??????",
        "image": "vegetable.jpeg",
        "detail": "?????????????????????????????????",
        "price": 7980,
        "category": "?????????"
    },
    {
        "name": "A00le M0cB00k 2021",
        "image": "noimage.png",
        "detail": "??????????????????????????????????????????????????????",
        "price": 170000,
        "category": "??????"
    },
]

demo_addresses = [
    {
        "name": "HANAKO",
        "phone_number": "080-0000-0000",
        "zipcode": "000-0000",
        "address": "??????????????????2-5",
        "user_id": hanako_id
    }, {
        "name": "KENTA",
        "phone_number": "090-0000-0000",
        "zipcode": "222-2222",
        "address": "??????????????????20-5",
        "user_id": kenta_id
    }, {
        "name": "RINA",
        "phone_number": "090-1111-1111",
        "zipcode": "111-1111",
        "address": "??????????????????4-7",
        "user_id": rina_id
    }, {
        "name": "RYO",
        "phone_number": "080-1111-1111",
        "zipcode": "333-3333",
        "address": "??????????????????7-5",
        "user_id": ryo_id
    }
]

hanako_address_id = 1
kenta_address_id = 2
rina_address_id = 3
ryo_address_id = 4

demo_tasks = [
    {
        "title": "??????????????????",
        "deadline": datetime.datetime(2021, 10, 1, 12, 00),
        "status": "not_complete",
        "back_money": True,
        "set_id": kenta_id,
        "do_id": hanako_id,
        "addresses_id": hanako_address_id
    }, {
        "title": "???????????????",
        "deadline": datetime.datetime(2021, 10, 10, 23, 00),
        "status": "faild",
        "back_money": True,
        "set_id": rina_id,
        "do_id": kenta_id,
        "addresses_id": kenta_address_id
    }, {
        "title": "????????????",
        "deadline": datetime.datetime(2021, 11, 22, 15, 40),
        "status": "success",
        "back_money": True,
        "set_id": hanako_id,
        "do_id": rina_id,
        "addresses_id": rina_address_id
    }, {
        "title": "?????????",
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
        "title": "???????????????????????????",
        "priority": 0,
        "status": "not_complete",
        "task_id": shopping_task
    }, {
        "title": "??????????????????",
        "priority": 2,
        "status": "not_complete",
        "task_id": shopping_task
    }, {
        "title": "???????????????",
        "priority": 1,
        "status": "success",
        "task_id": house_task
    }, {
        "title": "??????",
        "priority": 1,
        "status": "faild",
        "task_id": house_task
    }, {
        "title": "????????????",
        "priority": 2,
        "status": "success",
        "task_id": pass_task
    }, {
        "title": "??????????????????",
        "priority": 2,
        "status": "success",
        "task_id": pass_task
    }, {
        "title": "50km??????",
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

demo_prepaid_card = [
    '9068839573703133', '3947156272307378', '2212223944567213', '2127720167842572',
    '0843154635248785', '4464439304561017', '5724476031718081', '9586728811164624',
    '7514093789796451', '6504542442451008', '4068833358947828', '1818635461537749',
    '0904708861919289', '1703332979344941', '4124660674082759', '5308215407328015',
    '3963736887153780', '4067833246186778', '1383658071381285', '1620576568121735',
    '4006521543212258', '9174226354142896', '1662819443923367', '9700707995193857',
    '4146122495512217', '1125522919807260', '3614797109745179', '2916904206710839',
    '2029299546890504', '4551929856250539', '9053025835818306', '3496530153179403',
    '3869386582922482', '1099979438626370', '9432210543218873', '2210950309748422',
    '9493933316960470', '2311108318228969', '8743609624539845', '2985523540921771',
    '8504671485076947', '7714219190949459', '6524702452966743', '7466819644200999',
    '6785765215003046', '5972327868941060', '6879704217714812', '1826054181180772',
    '2101882808491614', '0142858037062426'
]
