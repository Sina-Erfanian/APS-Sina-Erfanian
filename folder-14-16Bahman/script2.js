let citiesData = {
  tehran: {
    city: "Tehran",
    temp: 12,
    weather: "sunny",
    humidity: 23,
    windspeed: 32,
  },
  shiraz: {
    city: "Shiraz",
    temp: 9,
    weather: "windy",
    humidity: 12,
    windspeed: 14,
  },
  mashhad: {
    city: "Mashhad",
    temp: 16,
    weather: "snowy",
    humidity: 7,
    windspeed: 24,
  },
  esfehan: {
    city: "Esfehan",
    temp: 23,
    weather: "sunny",
    humidity: 15,
    windspeed: 18,
  },
};

let $ = document;

let searchBtn = $.getElementById("search");

let searchBar = $.querySelector(".search-bar");

searchBtn.addEventListener("click", () => {
  //   console.log(searchBar.value);
  let searchBarValue = searchBar.value; //tehran
  let mainCityDatas = citiesData[searchBarValue]; //citiesData["tehran"] => object
  //   console.log(mainCityDatas)
  if(mainCityDatas){
    $.querySelector(".city").innerHTML = "Weather in " + mainCityDatas.city
    $.querySelector(".temp").innerHTML = mainCityDatas.temp + "c"
    $.querySelector(".description").innerHTML = mainCityDatas.weather;
    $.querySelector(".humidity").innerHTML = "Humidity : " + mainCityDatas.humidity;
    $.querySelector(".wind").innerHTML = "Wind speed : " + mainCityDatas.windspeed + "km/h";
    $.querySelector(".weather").classList.remove("loading")
  } else{
    alert("Please Enter Your City Corecctly")
  }
});
