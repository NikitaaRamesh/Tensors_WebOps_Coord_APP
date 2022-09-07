let button = document.querySelector('.button');
let charname   = document.querySelector('#name');
let chargender   = document.querySelector('#gender');
let charheight   = document.querySelector('#height');
let charmass   = document.querySelector('#mass');
let charbirth   = document.querySelector('#birth');

function getInfo(){

    let randomnumber = Math.floor((Math.random() * 82) + 1 );
    let url='https://swapi.dev/api/people/' + randomnumber;

    
    axios.get(url).then(function(response) {
        updateInfo(response.data);
    })
}

function updateInfo(data){
    charname.innerText = data.name;
    chargender.innerText = data.gender;
    charheight.innerText = data.height;
    charmass.innerText = data.mass;
    charbirth.innerText = data.birth_year;

}

button.addEventListener('click', getInfo);