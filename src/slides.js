let author = document.getElementsByClassName('author');
let date = document.getElementsByClassName('date');

for (let i = 0; i < author.length; i++) {
    author[i].innerHTML = 'Melvin Kosisochukwu |'
}

let today = new Date();
let mm = parseInt(today.getMonth()) + 1;

for (let i = 0; i < date.length; i++) {
    date[i].innerHTML = today.getDate() + '.' + mm + '.' + today.getFullYear()
}


//Slide Testmonial
var use = document.getElementById('user');
var rev = document.getElementById('review-text');
var rightBtn = document.getElementById('right-click');
var leftBtn = document.getElementById('left-click');

var review = [];
review[0] = '\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus earum voluptate fuga fugiat, dignissimos, dolorem ipsam error facilis odit veniam dolores voluptas. Ullam, saepe? Ipsam ducimus consectetur quam quas non!\"';
review[1] = '\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis cumque eligendi ullam rem quos vel cupiditate accusamus nesciunt fugiat animi, reprehenderit sapiente, autem sed, harum in pariatur a nihil.\"';
review[2] = '\"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed distinctio eveniet ad consequuntur commodi? Soluta alias doloremque obcaecati vitae hic culpa deleniti officiis nostrum perspiciatis? Temporibus, eos. Magni, hic quod.\"';

var user = [];
user[0] = '-James Corner';
user[1] = '-Mike Adeyemi';
user[2] = '-Melvin Kosisochukwu';

var i = 0;
rev.innerHTML = review[i];
use.innerHTML = user[i];

rightBtn.addEventListener('click', (e)=>{
    if (i < review.length - 1){
        i++;
        rev.innerHTML = review[i];
        use.innerHTML = user[i];
    }
    else{
        i = 0;
        rev.innerHTML = review[i];
        use.innerHTML = user[i];
    }
    e.preventDefault;
})

leftBtn.addEventListener('click', (e) => {
    if (i > 0) {
        i--;
        rev.innerHTML = review[i];
        use.innerHTML = user[i];
    }
    else {
        i = 2;
        rev.innerHTML = review[i];
        use.innerHTML = user[i];
    }
    e.preventDefault;
    e.preventDefault;
})
