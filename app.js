let learnt_words_meaning = ['what', 'how', 'woman', 'being', 'seeing', 'girl', 'boy', 'good', 'going', 'should', 'friend', 'I', 'you', 'here', 'there', 'it', 'you', 'eating', 'child', 'playing', 'on', 'in', 'norwegian', 'happy', 'and', 'liking', 'hello', 'hi', 'my', 'your', 'will', 'believing', 'but', 'to', 'with', 'wanting', 'can', 'nice', 'finding', 'work', 'working', 'buying', 'thinking', 'about', ];
let learnt_words = ['hva', 'hvordan', 'kvinne', 'er', 'se', 'jenta', 'gutt', 'god', 'gå', 'burde', 'venn', 'jeg', 'du', 'her', 'der', 'det', 'dere', 'spiser', 'barn', 'spiller', 'på', 'i', 'norsk', 'glad', 'og', 'liker', 'hallo', 'hei', 'min', 'din', 'skal', 'tro', 'men', 'å', 'med', 'ønske', 'kan', 'fin', 'finne', 'jobb', 'jobbe', 'kjøpe', 'tenker', 'om', ];
let new_words = ['også', 'helt', 'kino', 'film', 'lese', 'var', 'enig', 'skuespiller', 'favoritt', 'de', 'ofte', ];
let new_words_meaning = ['too', 'very', 'cinema', 'film', 'read', 'was', 'agreeing', 'actors', 'favorite', 'they', 'often', ];
let all_words_meaning =  new_words_meaning + learnt_words_meaning;
let all_words = new_words + learnt_words;
const btn = document.getElementById('btn');
const word = document.getElementById('word');
const meaning = document.getElementById('meaning');
const open = document.getElementById('open');
const close = document.getElementById('close');
let answer = " ";
let randomNumber = getRandomNumber();

btn.addEventListener('click', function() {
    newWord();
});

window.addEventListener("DOMContentLoaded", function () {
    newWord();
});

function check() {
    if (learnt_words[randomNumber].toUpperCase() == answer.toUpperCase()) {
        console.log(true);
        console.log(answer);
        console.log(learnt_words[randomNumber]);
        close.style.display = "none";
        open.style.display = "block";
    }
    else {
        console.log(false);
        console.log(answer);
        console.log(learnt_words[randomNumber]);
        open.style.display = "none";
        close.style.display = "block";
    }
    console.log(learnt_words_meaning.length);
    console.log(learnt_words.length);
}

function submit() {
    answer = document.getElementById('inp').value;
    document.getElementById('inp').value = "";
    meaning.textContent = learnt_words[randomNumber];
    check();
}

function newWord() {
    randomNumber = getRandomNumber();
    word.textContent = learnt_words_meaning[randomNumber];
    meaning.textContent = "";
    close.style.display = "none";
    open.style.display = "none";
}

function getRandomNumber() {
    return Math.floor(Math.random() * learnt_words_meaning.length);
}