let Reviews=[
    {
        id:1,
        senderName:'Виктория Михаиловна',
        senderText:'очень интересно следить за происходящим ',
        date:"19 sep 2020",
        img:1,
        postId:1,
        
        
    },  {
        id:2,
        senderName:'Виктор Васильевич',
        senderText:'даже не знаю как в дальнейшем будут развиваться события',
        date:"20 sep 2020",
        img:2,
        postId:2,
        
        
    },
    {
        id:3,
        senderName:'Анастасия Валерьевна',
        senderText:'кто бы мог подумать',
        date:"28 nov 2020",
        img:3,
        postId:3,
    },{
        id:4,
        senderName:'Алексей Викторович',
        senderText:'не могу себе даже представить',
        date:"21 oct 2020",
        img:1,
        postId:4,
    },{
        id:5,
        senderName:'Валерия Миронова',
        senderText:'жду пока всё разрешиться',
        date:"30 sep 2020",
        img:2,
        postId:5,
    },{
        id:6,
        senderName:'Виктория Тарасова',
        senderText:'Что же дубет дальше',
        date:"5 dec 2020",
        img:3,
        postId:6,
    },{
        id:7,
        senderName:'Виктор Палыч',
        senderText:'Так много меняется',
        date:"9 dec 2020",
        img:1,
        postId:7,
    },{
        id:8,
        senderName:'Валерия Витальевна',
        senderText:'Спустя столько лет',
        date:"7 mar 2020",
        img:2,
        postId:8,
    },{
        id:9,
        senderName:'Максим Макаров',
        senderText:'такого точно не ожидал',
        date:"8 dec 2020",
        img:3,
        postId:9,
    }
    
    
]
export default function AddComent (state=Reviews,action){
           let prepareArray=[];
            
    switch(action.type){
            case"AddComent":
            
            return [...state,{...action.payload,id:state.length+1,img:2}];

            case"clear":
            ////возвращаю  в первоначальное состояние после выхода из аккаунта
            return Reviews;
    
            
        default:return state
    }
}