const API_Key = '1f6b07696dc16a173fd2dcc982cae872';

function loadTemp(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))

}
const displayTemp = (data) => {
    console.log(data);
    const text = document.getElementById('City-Name');
    text.innerText = data.name;
    const temp = document.getElementById('temp');
    const temp_text = data.main.temp - 273;
    temp.innerText = temp_text.toFixed(2);
    const state = document.getElementById('state');
    state.innerText = data.weather[0].description;
}
//search input enter press handle
document.getElementById('search-tag').addEventListener("keypress", function(e) {
    if(e.key == 'Enter'){
        getCity();
    }
})
const getCity = () =>{
    const value = document.getElementById('search-tag').value;
    loadTemp(value);
}
const city = 'Dhaka';
loadTemp(city);