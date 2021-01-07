let app = new Vue ({
    el: "#app",
    data:{
        activeContact: 0,
        activeImg: 0,
        newMsg: '',
        find:'',
        date: dayjs().format('DD/MM/YY HH:mm'),
        newDate :'',
        users:[
            {
                avatar : 'img/avatar_1.jpg', 
                name: 'Michele',
                visible: true, 
                messages: [
                {date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
                },
                {date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
                },
                {date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
                }
                ],
            },
            {
            avatar : 'img/avatar_2.jpg', 
            name: 'Fabio',
            visible: true,
            messages: [
                {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                }
                ],
            },

            {   
            avatar : 'img/avatar_3.jpg', 
            name: 'Samuele',
            visible: true,
            messages: [
                {
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
                },
                {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
                },
                {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
                }
                ],
            },
            {   
            avatar : 'img/avatar_4.jpg', 
            name: 'Luisa',
            visible: true,
            messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
                }
                ],   
            }
        ],
        usersTopBar:[
            {
            visible: true, 
            avatar : 'img/avatar_1.jpg', 
            name: 'Michele',
            },
            {
            avatar : 'img/avatar_2.jpg', 
            name: 'Fabio',
            visible: false,
            },

            {   
            avatar : 'img/avatar_3.jpg', 
            name: 'Samuele',
            visible: false,
            },
            {   
            avatar : 'img/avatar_4.jpg', 
            name: 'Luisa',
            visible: false,
            }
        ],
    },
        
 
    
    mounted() {
       
    },
    methods: {
        
        /* CERCA UTENTI */
        getIndex(index){
        this.activeContact = index;
        this.date[index] = dayjs().format('DD/MM/YY HH:mm:ss')
        console.log(index);
        console.log(this.date);
        
        },
        getImg(index){
        this.activeImg = index;

    },
        getDate(){
        this.newDate = `oggi alle ` + dayjs().format('HH:mm:ss')        
    },
    
   

       /* Funzione per inserire un nuovo messaggio tramite input */
       sendMsg: function(){
           let userMsg = {
               date: dayjs().format('DD/MM/YY HH:mm'),
               text : this.newMsg,
               status: 'sent'
            };
            // pusho nell'array users il nuovo messaggio di testo
            if(userMsg.text.length !== 0){
               this.users[this.activeContact].messages.push(userMsg);
           }
            // all'invio del messaggio pulisco il campo dell'input
           this.newMsg = '';
           
            /* Funzione per inserire una risposta automanica */
            let _self = this;
            setTimeout(function() {
               let botText = {
                   date: dayjs().format('DD/MM/YY HH:mm'),
                   text : 'ok',
                   status : 'received'
               };
               if(userMsg.text.length !== 0) {
                   _self.users[_self.activeContact].messages.push(botText);
               }
              console.log(this);
           }, 1000);
           console.log(this);
       },

      
        /* Funzione per la ricerca dei contatti */
       findUsers: function(){
            /*  Con un forEach scorro all'interno dei singoli elementi di users per ricercare il nome*/
           this.users.forEach(element => {
            /* Tutto quello che viene inserito viene trasformato in  lower case, altrimenti creava problemi nella ricerca */
            const find = this.find.toLowerCase();
            const name = element.name.toLowerCase();
            /*  Ora non mi resta che verificare che quello che ho inserito sia presente all'interno del mio elemento, e se è incluso, allora l'elemento diventa visibile, altrimenti non vine visualizzato. */
            if(name.includes(find)){
                element.visible = true;
            }else {
                element.visible = false;
            }
        });
       },
    },

    
  

    
});