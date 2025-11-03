
    events={
        "10000": {
            "id": 10000,
            "title":"空无一物",
            "effect": {
            },
            "type":"titleTask",
            "stage":0
        },
        "10001": {  
            "id": 10001,
            "title":"你尚未存在 +希望",
            "effect": {
                "Hope": 1
            },
            "type":"titleTask",
            "stage":1
        },
        "10002": {
            "id": 10002,
            "title":"你开始形成 +身体",
            "effect": {
                "Body": 1
            },
            "type":"titleTask",
            "stage":2
        },
        "10003": {
            "id": 10003,
            "title":"你存在了 +生命",
            "effect": {
                "Life": 1
            },
            "type":"titleTask",
            "stage":3
        },
        
        "10004": {
            "id": 10004,
            "title":"你是个幼儿 [无法负担] -8知识 +正直",
            "effect": {
                "Knowledge": -8,
                "Integrity": 1
            },
            "type":"titleTask",
            "sequence":1,
            "solve":"No",
            "description":"不能晋级",
            "stage":5
        },
        "10005": {
            "id": 10005,
            "title":"你是个小孩 [已锁定] -4经验 +忠诚",
            "effect": {
                "Experience": -4,
                "Loyalty": 1
            },
            "type":"titleTask",
            "sequence":2,
            "solve":"Yes",
            "description":"能晋级",
            "stage":5
        },

        "10006": {
            "id": 10006,
            "title":"你需要玩耍 +记忆",
            "effect": {
                "Memory": 1
            },
            "type":"subTask",
            "level":2
        },
        "10007": {
            "id": 10007,
            "title":"你需要学习 +知识",
            "effect": {
                "Knowledge": 1
            },
            "type":"subTask",
            "level":2
        },
    }