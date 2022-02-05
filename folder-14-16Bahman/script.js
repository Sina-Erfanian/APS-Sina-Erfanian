// function random() {
//   let r = Math.floor(Math.random() * 255);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);
//   let final = `rgb(${r},${g},${b})`;
//   document.body.style.backgroundColor = final;
// }

// setInterval(() => {
//   random();
// }, 1000);

///////////////////////////////////////////////////////////////////

// let select = document.getElementById("select");

// let span = document.getElementById("print");

// select.addEventListener("change", () => {
//   span.innerHTML = `you select ${select.value}`;
// });

/////////////////////////////////////////////////////////////////////

// let countrySelectBox = document.querySelector(".countrySelect");
// let citySelect = document.querySelector(".citySelect");

// let countriesData = {
//   Iran: ["Tabriz", "Tehran", "Shiraz", "Esfehan", "Mashhad"],
//   Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
//   US: ["Los Angles", "San Diego", "Chicago"],
//   PleaseSelect : ["Please Select Your Country First"]
// };

// countrySelectBox.addEventListener("change", () => {
//   let mainCountryName = countrySelectBox.value; //Iran

//   let mainCountryCities = countriesData[mainCountryName];
//   //   console.log(countriesData[mainCountryName])
//   citySelect.innerHTML = ""
//   mainCountryCities.forEach((element) => {
//     // citySelect.innerHTML += "<option>" + element + "</option>";
//     let createOpt = document.createElement("option")
//     createOpt.innerHTML = element
//     citySelect.append(createOpt)
//   });
// });

let country = document.querySelector(".countrySelect");
let city = document.querySelector(".citySelect");

let obj = {
  Iran: ["mashhad", "shiraz", "tehran"],
  US: ["chicago", "los angles"],
  Turkey: ["istanbul", "ezmir"],
};

country.addEventListener("change", () => {
  let getValue = country.value; // Iran

  if (getValue == "PleaseSelect") {
    city.innerHTML = "";
    let createOpt = document.createElement("option");
    createOpt.innerHTML = "Select City ...";
    city.append(createOpt);
  } else {
    let citySel = obj[getValue];
    city.innerHTML = "";
    citySel.forEach((element) => {
      let createEle = document.createElement("option");
      createEle.innerHTML = element;
      city.append(createEle);
    });
  }
  console.log(getValue);
});
