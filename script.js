const api_Url = "https://api.quotable.io/random";
const quote = document.getElementById('quote');
const author= document.getElementById('author');

async function getQuoteUrl(url){
    const response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+" --- "+author.innerHTML,"Tweet window","width=400,height=500");
}

getQuoteUrl(api_Url);
