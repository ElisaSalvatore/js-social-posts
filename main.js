// Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// id del post,
// numero progressivo da 1 a n nome autore,
// foto autore,
// data in formato americano (mm-gg-yyyy),
// testo del post,
// immagine (non tutti i post devono avere una immagine),
// numero di likes.

const postsArray = [
    {
        id: 1,
        autore: 'Eric Mangione',
        profilo: './img/profile-picture-1.jpg',
        data: '2021-06-18',
        testo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos cumque culpa consequatur esse earum fugiat voluptates error vel. Consequatur exercitationem tenetur inventore sequi. Accusamus, voluptatum! Harum inventore quod explicabo rem!',
        immagine: './img/post-image-1.jpg',
        likes: '80'
    },

    {
        id: 2,
        autore: 'Anna Rougon',
        profilo: './img/profile-picture-2.jpg',
        data: '2021-10-23',
        testo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos cumque culpa consequatur esse earum fugiat voluptates error vel. Consequatur exercitationem tenetur inventore sequi. Accusamus, voluptatum! Harum inventore quod explicabo rem!',
        immagine: './img/post-image-2.jpg',
        likes: '40'
    },

    {
        id: 3,
        autore: 'Margaret Smith ',
        profilo: './img/profile-picture-3.jpg',
        data: '2022-01-04',
        testo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos cumque culpa consequatur esse earum fugiat voluptates error vel. Consequatur exercitationem tenetur inventore sequi. Accusamus, voluptatum! Harum inventore quod explicabo rem!',
        immagine: './img/post-image-3.jpg',
        likes: '65'
    },
];

// Milestone 2
// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

function createTemplateHtml(post) {
   return ` 
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${post.profilo}" alt="${post.autore} Foto Profilo">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.autore}</div>
                        <div class="post-meta__time">${post.data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${post.testo}</div>
            <div class="post__image">
                <img src="${post.immagine}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div> `
    ;
};

//dove andremo a stampare i posts creati?
const postsContainer = document.querySelector('.posts-list');
const likeNumber = [];

for (let i = 0; i < postsArray.length; i++) {
    const post = postsArray[i];

    likeNumber[i] = post.likes;
    
    postsContainer.innerHTML += createTemplateHtml(post);     
};

// Milestone 3
// Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

const likeButton = document.querySelectorAll('.js-like-button'); //ritorn aun array di button
//assunto: per ogni post c'è un solo pusante like.
//assunto(2): per ogni post c'è un solo counter.

const likesCounters = document.querySelectorAll('.js-likes-counter');
const likedPostsArray = [];

for (let i=0; i < likeButton.length; i++) {
    const button = likeButton[i];

    button.addEventListener('click', function (e) {
        e.preventDefault(); //per evitare lo scatto automatico quando si clicca sul bottone.
        //"nell'istante in cui sto eseguendo questa azione non far nient'altro se non questo".

        this.classList.add('like-button--liked'); 

        const idPost = i + 1; //TODO

        //salvo in una variabile l'html del counter.
        const currentCounterHtml = likesCounters[i];
        //salvo in un'altra variabile il parseInt dell'innerHtml del counter
        // (così da ottenere il numero intero di likes).
        const currentCounterInt = parseInt(currentCounterHtml.innerHTML);
        console.log(currentCounterInt);

        //Ri-salvo (sovrascrivo) l'inner Html con il contatore attuale + 1.
        currentCounterHtml.innerHTML = currentCounterInt + 1;
       
        //Inserisco i post a cui ho messo mi piace in un secondo array.
        likedPostsArray.push(postsArray[i].id);
        console.log(likedPostsArray);
    });

};