// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// const cityName = 'london';

// const apiKey = '3d708c9547f7607c3300bc0e1a2b7938';
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

const form = document.querySelector('form');
const inputField = document.getElementById('input-field');
// const img = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const input = inputField.value; 
    document.getElementById('input-field').value = '';
    document.getElementById('error-message').innerText = '';
    getWeather(input);
})

const getWeather = (city) =>{
    const cityName = city;
    const apiKey = '3d708c9547f7607c3300bc0e1a2b7938';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    console.log(city);
    fetch(url)
    .then(res => res.json())
    .then(data => {

    // console.log(data);
    // console.log(data.weather[0].description);
 

    if(data.cod === 200){
        const iconCode = data.weather[0].icon;
        document.getElementById('city-name').innerText = data.name;
        document.getElementById('temp').innerText = data.main.temp;
        document.getElementById('weather-type').innerText = data.weather[0].description;
        const img = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        console.log(img);
        document.getElementById('icon').src = img;

    }else{
        document.getElementById('error-message').innerText = data.message;
    }
})
}