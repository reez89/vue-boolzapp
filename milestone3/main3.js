let app = new Vue ({
    el: "#app",
    data:{
        activeContact: 0,
        newMsg:'',
        find:'',
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
        
    },
 
    
    mounted() {
    
    },
    methods: {
        /* CERCA UTENTI */
       getIndex(index){
        this.activeContact = index;
        console.log(index);
       },

       /* Funzione per inserire un nuovo messaggio tramite input */
       sendMsg: function(){
           let userMsg = {
               text : this.newMsg,
               status: 'sent'
           };
        // pusho nell'array users il nuovo messaggio di testo
           this.users[this.activeContact].messages.push(userMsg);
        // all'invio del messaggio pulisco il campo dell'input
           this.newMsg = '';
           
        /* Funzione per inserire una risposta automanica */
           setTimeout(function() {
               let botText = {
                   text : 'ok',
                   status : 'received'
               };
              app.users[app.activeContact].messages.push(botText);
           }, 1000);
       }


    },
  
    
});