const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = "6l6lOkr9AmqCs7TkcedAOA==apyn3KytsgkdvDsC";

const options ={
    method: 'GET',
    headers: { 'X-Api-Key': apiKey,},

};

 const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1";

 async function getJoke(){
    try {
        jokeEl.innerText="updating...";
    btnEl.disabled=true;
    btnEl.innerText="Loading.."
    const response= await fetch(apiURL,options);
    const data = await response.json();
    jokeEl.innerText=data[0].joke;
    btnEl.disabled=false;
    btnEl.innerText="TEEL ME JOKE";
    } catch (error) {
        jokeEl.innerText="Error happend,Try after some time";
        console.log(error);
    }
};


btnEl.addEventListener('click',getJoke);
