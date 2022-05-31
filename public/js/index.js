// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 03db699376207b0cdd07408c970bc476

console.log("Welcome to our Weather app");

const temp = document.getElementById('temp');
const town = document.getElementById('town');
const searchBox = document.getElementById('searchBox');



const btn = document.getElementById('btn');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    city = searchBox.value;
    api =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=03db699376207b0cdd07408c970bc476`;
    weatherReport(api).then((data)=>{
        console.log(data);
        value = [data];
        console.log(value[0].main.temp);
        temp.innerHTML = Math.round((value[0].main.temp)-273)+"&deg;C";
        town.innerHTML = value[0].name;
        const date = new Date();
        const hour = date.getHours() - 12;
        console.log(hour);

        
        if(hour<=6)
        {
            // console.log(body);
            document.querySelector('body').style.background = `b2.webp`;
        }
        
    });
});

async function weatherReport(url){
    const response = await fetch(url);
    const user = await response.json();
    return user;
}