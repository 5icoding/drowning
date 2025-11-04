
events={
    "10000": {
        "id": 10000,
        "title":"空无一物",
        "effect": {
        },
        "type":"titleTask",
        "solve":"Yes",
    },
    "10001": {  
        "id": 10001,
        "title":"你尚未存在 +希望",
        "effect": {
            "Hope": 1
        },
        "type":"titleTask",
        "solve":"Yes",
    },
    "10002": {
        "id": 10002,
        "title":"你开始形成 +身体",
        "effect": {
            "Body": 1
        },
        "type":"titleTask",
        "solve":"Yes",
    },
    "10003": {
        "id": 10003,
        "title":"你存在了 +生命",
        "effect": {
            "Life": 1
        },
        "type":"titleTask",
        "solve":"Yes",
    },
    
    "10004": {
        "id": 10004,
        "title":"你出生了 +爱",
        "effect": {
            "Love": 1
        },
        "type":"titleTask",
        "solve":"Yes",
    },
    "10005": {
        "id": 10005,
        "title":"你是个幼儿-8知识 +正直",
        "effect": {
            "Knowledge": -8,
            "Integrity": 1
        },
        "type":"titleTask",
        "solve":"Yes",
    },
    "20005": {
        "id": 20005,
        "title":"你是个幼儿 [无法负担] -8知识 +正直",
        "effect": {
            "Knowledge": -8,
            "Integrity": 1
        },
        "type":"titleTask",
        "solve":"No",
    },
    "10006": {
        "id": 10006,
        "title":"你是个孩子 -4经验 +忠诚",
        "effect": {
            "Experience": -4,
            "Loyalty": 1
        },
        "type":"titleTask",
        "solve":"Yes",
    },
    "20006": {
        "id": 20006,
        "title":"你是个孩子 [已锁定] -4经验 +忠诚",
        "effect": {
            "Experience": -4,
            "Loyalty": 1
        },
        "type":"titleTask",
        "solve":"No",
    },
    "10007": {
        "id": 10007,
        "title":"你是个青少年 -2知识 +正直",
        "effect": {
            "Knowledge": -2,
            "Integrity": 1
        },
        "type":"titleTask",
        "solve":"Yes",
    },
    "20007": {
        "id": 20007,
        "title":"你是个青少年 [已锁定] -2心碎",
        "effect": {
            "Knowledge": -2,
        },
        "type":"titleTask",
        "solve":"No",
    },
    "10008": {
        "id": 10008,
        "title":"你是一个成人。-忠诚-破碎的梦想",
        "effect": {
            "Loyalty": -1,
            "Crushed Dream":-1
        },
        "type":"titleTask",
        "solve":"Yes",
    },
    "20008": {
        "id": 20008,
        "title":"你是一个成人。[负担不起]-忠诚-破碎的梦想",
        "effect": {
            "Loyalty": -1,
            "Crushed Dream":-1
        },
        "type":"titleTask",
        "solve":"No",
    },
    "10009": {
        "id": 10009,
        "title":"你需要更加努力。-5尊重-10东西+失去的野心",
        "effect": {
            "Respect": -5,
            "Stuff": 10,
            "Lost Ambition":-1,
        },
        "type":"titleTask",
        "solve":"Yes",
    },
    "20009": {
        "id": 20009,
        "stageTitle":"Troubled",
        "title":"你有麻烦了。[负担不起]-正直-失去野心",
        "effect": {
            "Integrity": -1,
            "Lost Ambition":-1
        },
        "type":"titleTask",
        "solve":"No",
    },
    "10010": {
        "id": 10010,
        "title":"你很苦。解决。-爱-10记忆",
        "effect": {
            "Love": -1,
            "Memory": -10
        },
        "type":"titleTask",
        "solve":"Yes",
    },

    "10011": {
        "id": 10011,
        "title":"你开始接受 -生命",
        "effect": {
            "Life": -1
        },
        'type':'titleTask',
        "solve":"Yes",            
    },
    
    "10012": {
        "id": 10012,
        "title":"你开始接受 -爱",
        "effect": {
            "Love": -1  
        },
        'type':'titleTask',
        "solve":"Yes",            
    },
    
    "10013": {
        "id": 10013,
        "title":"你死了-身体",
        "effect": {
           "Body": -1
        },
        'type':'titleTask',
        "solve":"Yes",            
    },
    
    "10014": {
        "id": 10014,
        "title":"你被忘记了-Hope",
        "effect": {
            "Hope": -1
        },
        'type':'titleTask',
        "solve":"Yes",            
    },
    "30001": {
        "id": 30001,
        "title":"你需要学习 +知识",
        "effect": {
            "Knowledge": 1
        },
        "type":"subTask",
        "solve":"Yes",  
    },
    "30002": {
        "id": 30002,
        "title":"你需要玩耍 +记忆",
        "effect": {
            "Memory": 1  
        },
        "type":"subTask",
        "solve":"Yes",  
    },
    "30003": {
        "id": 30003,
        "title":"你需要更多朋友 +朋友",
        "effect": {
            "Friends": 1   
        },
        "type":"subTask",
        "solve":"Yes",  
        
    },
    "30004": {
        "id": 30004,
        "title":"你需要更多朋友 +朋友",
        "effect": {
            "Friends": 1   
        },
        "type":"subTask",
        "solve":"Yes",  
    },
    "30005": {
        "id": 30005,
        "title":"你需要继续前进 -朋友 +经验",
        "effect": {
            "Friends": -1,
            "Experience": 1
        },
        "type":"subTask",
        "solve":"Yes",    
    },
    "30006": {
        "id": 30006,
        "title":"你需要找到工作 +工作",
        "effect": {
            "Job": 1,
        },
        "type":"subTask",
        "solve":"Yes",  
    },
    "30016":{
        "id": 30016,
        "title":"你需要去工作。+钱+压力",
        "effect": {
            "Money": 1,
            "Stress": 1
        },
        "type":"subTask",
        "solve":"Yes",  
    },
    "30007": {
        "id": 30007,
        "title":"你需要放松。-压力",
        "effect": {
            "Stress": -1,
        },
        "type":"subTask",
        "solve":"Yes",    
    },
    "30008": {
        "id": 30008,
        "title":"你需要一份更好的工作 -8知识+尊重 ",
        "effect": {
            "Knowledge": -8,
            "Respect": 1      
        },
        "type":"subTask",
        "solve":"Yes",    
    },
    "30009": {
        "id": 30009,
        "title":"你需要找到爱人 +爱人",
        "effect": {
            "Lover": 1,  
        },
        "type":"subTask",
        "solve":"Yes",    
    },
    "30010": {
        "id": 30010,
        "title":"你需要为爱鼓掌+记忆",
        "effect": {
            "Memory": 1,
        },
        "type":"subTask",
        "solve":"Yes",    
    },
    "30011": {
        "id": 30011,
        "title":"你需要感到被接受。-爱人+心碎+经验",
        "effect": {
            "Lover": -1,
            "Broken Heart":1,
            "Experience": 1,
        },
        "type":"subTask",
        "solve":"Yes",    
    },
    "30012": {
        "id": 30012,
        "title":"你需要更多的东西。+东西",
        "effect": {
            "Stuff": 1,
        },
        "type":"subTask",
        "solve":"Yes",    
    },
    "30013": {
        "id": 30013,
        "title":"你需要创造项目。+项目",
            "effect": {
            "Project": 1,
        },
        "type":"subTask",
        "solve":"Yes",    
    },
    "30014": {
        "id": 30014,
        "title":"你需要失败。+破碎梦想+记忆",
            "effect": {
            "Crushed Dream": 1,
            "Memory": 1,
        },
        "type":"subTask",
        "solve":"Yes",    
    },
}
