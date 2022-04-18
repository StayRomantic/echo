let learnt_words_meaning = ['what', 'how', 'woman', 'being', 'seeing', 'girl', 'boy', 'good', 'going', 'should', 'friend', 'I', 'you', 'here', 'there', 'it', 'you', 'eating', 'child', 'playing', 'on', 'in', 'norwegian', 'happy', 'and', 'liking', 'hello', 'hi', 'my', 'your', 'will', 'believing', 'but', 'to', 'with', 'wanting', 'can', 'nice', 'finding', 'work', 'working', 'buying', 'thinking', 'about', 'as', 'I', 'his', 'that', 'han', 'was', 'for', 'on', 'are', 'with', 'they', 'be', 'one', 'have', 'this', 'from', 'by', 'hot', 'word', 'but', 'what', 'some', 'is', 'it', 'you', 'or', 'had', 'the', 'of', 'to', 'and', 'a', 'in', 'we', 'can', 'out', 'other', 'were', 'which', 'do', 'their', 'time', 'if', 'will', 'how', 'said', 'an', 'each', 'tell', 'does', 'set', 'three', 'want', 'air', 'well', 'also', 'play', 'small', 'end', 'put', 'home', 'read', 'hand', 'port', 'large', 'spell', 'add', 'even', 'land', 'here', 'must', 'big', 'high', 'such', 'follow', 'act', 'why', 'ask', 'men', 'change', 'went', 'light', 'kind', 'off', 'need', 'house', 'picture', 'try', 'us', 'again', 'animal',  'point', 'mother', 'world', 'near', 'build', 'self', 'earth', 'father',  'any', 'new', 'work', 'part', 'take', 'get', 'place', 'made',  'live', 'where', 'after', 'back', 'little', 'only', 'round', 'man',  'year', 'came', 'show', 'every', 'good', 'me', 'give', 'our',  'under', 'name', 'very', 'through', 'just', 'form', 'sentence', 'great',];
let learnt_words = ['hva', 'hvordan', 'kvinne', 'er', 'se', 'jenta', 'gutt', 'god', 'gå', 'burde', 'venn', 'jeg', 'du', 'her', 'der', 'det', 'dere', 'spiser', 'barn', 'spiller', 'på', 'i', 'norsk', 'glad', 'og', 'liker', 'hallo', 'hei', 'min', 'din', 'skal', 'tro', 'men', 'å', 'med', 'ønsker', 'kan', 'fin', 'finne', 'jobb', 'jobbe', 'kjøpe', 'tenker', 'om', 'som', 'jeg', 'hans', 'at', 'han', 'han', 'for', 'på', 'er', 'med', 'de', 'være', 'ett', 'har', 'dette', 'fra', 'etter', 'varm', 'ordet', 'men', 'Hva', 'noen', 'er', 'den', 'du', 'eller', 'hadde', 'den', 'av', 'til', 'og', 'en', 'i', 'vi', 'kan', 'ut', 'andre', 'var', 'som', 'gjøre', 'deres', 'tid', 'hvis', 'vil', 'hvordan', 'sa', 'en', 'hver', 'fortelle', 'gjør', 'sett', 'tre', 'ønsker', 'luft', 'godt', 'også', 'spille', 'liten', 'ende', 'sette', 'hjem', 'lese', 'hånd', 'port', 'stor', 'stave', 'legge', 'selv', 'landet', 'her', 'må', 'big', 'høy', 'slik	', 'følg', 'handle', 'hvorfor', 'spør', 'menn', 'endring', 'gikk', 'lys', 'kind', 'off', 'trenger', 'huset', 'bilde', 'prøve', 'oss', 'igjen', 'dyr',  'punkt', 'mor', 'verden', 'nær', 'bygge', 'selv', 'jorden', 'far',  'noen', 'ny', 'arbeid', 'del', 'ta', 'få', 'sted', 'gjort',  'leve', 'der', 'etter', 'tilbake', 'lite', 'bare', 'runde', 'mann',  'år', 'kom', 'vis', 'alle', 'god', 'meg', 'gi', 'vår',  'etter', 'navn', 'veldig', 'gjennom', 'bare', 'skjema', 'setning', 'stor',];
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