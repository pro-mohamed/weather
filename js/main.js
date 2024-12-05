

var cityName = document.getElementById('cityName');

var apiKey = 'b0affd94b59e42d5864200727240412';


document.getElementById('find').addEventListener('click', async function(){
    await weather();
})
async function weather(){
    try {
        var response = await fetch(`http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${cityName.value}`);
        var data = await response.json();
        
        document.querySelector('.cityName').innerHTML = `${data[0].name}`;
        document.querySelector('.deg').innerHTML = `${data[0].lat}<sup>o</sup>C`;
    } catch (error) {
        console.log(error);
    }
}





