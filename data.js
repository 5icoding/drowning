// achievement = [{"title":"Hope","zh":"希望","value": 0},
// {"title":"Life","zh":"生命","value": 0},
// {"title":"Body","zh":"身体","value": 0},
// {"title":"Love","zh":"爱情","value": 0},
// {"title":"Memory","zh":"记忆","value": 0},
// {"title":"Knowledge","zh":"知识","value": 0},
// {"title":"Friend","zh":"友情","value": 0},    
// {"title":"Experience","zh":"经验","value": 0},    
// {"title":"Loyalty","zh":"忠诚","value":0}]

Nothing_level={
    "count": 4,
    "data":{
        "1": {
            "level": 1,
            "title":"空无一物",
            "resourse":"Hope",
            "operation":"+0",
            "type":"titleTask"
        },
        "2": {
            "level": 2, 
            "title":"你尚未存在 +希望",
            "resourse":"Hope",
            "operation":"+1",
            "type":"titleTask"
        },
        "3": {
            "level": 3,
            "title":"你开始形成 +身体",
            "resourse":"Body",
            "operation":"+1",
            "type":"titleTask"      
        },
        "4": {
            "level": 4,
            "title":"你存在了 +生命",
            "resourse":"Life",
            "operation":"+1",
            "type":"titleTask"
        }
    }
}
Baby_level={
    "count":2,
    "data":{
        "1":{
            "title":"你出生了 +爱",
            "resourse":"Love",
            "operation":"+1",
            "type":"titleTask"
        },
        "2":{
            "title":"你需要学习 +知识",
            "resourse":"Knowledge",  
            "operation":"+1",
            "type":"subTask"
        }
    }
}
toddler_level={
    "count":7,
    "data":{
        "0":{
            "title":"你是个孩子 [已锁定] -4经验 +忠诚",
            "resourse":"Loyalty",
            "operation":"+1",
            "type":"titleTask"  
        },
        "1":{
            "title":"你是个幼儿 [无法负担] -8知识 +正直",
            "resourse":"Integrity",
            "operation":"+1",
            "type":"title"  
        },
        "2":{
            "title":"你需要玩耍 +记忆",
            "resourse":"Memory",  
            "operation":"+1",
            "type":"subTask"
        },
        "3":{
            "title":"你需要学习 +知识",
            "resourse":"Knowledge",  
            "operation":"+1",
            "type":"subTask"
        },
        "4":{
            "title":"你需要更多朋友 +朋友",
            "resourse":"Memory",
            "operation":"+1",
            "type":"subTask"
        },
        "5":{
            "title":"你需要见朋友 +记忆",
            "resourse":"Friend",  
            "operation":"+1",   
            "type":"subTask"
        },
        "6":{
            "title":"你需要继续前进 -朋友 +经验",
            "resourse":"Friend Experience",  
            "operation":"-1 +1",
            "type":"subTask"
        }
    }

}
person_level={
    "count":3,
    "data":{
        "1":{
            "title":"Nothing",
            "data":Nothing_level
        },
        "2":{
            "title":"Baby",
            "data":Baby_level
        },
        "3":{
            "title":"Toddler",
            "data":toddler_level
        }
    }
}

