let suggestions = [
  "Channel",
  "CodingLab",
  "CodingNepal",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Vlogger",
  "Vechiles",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Designer",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to become Freelancer",
  "How to become Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stands for?",
  "What does CSS stands for?",
];

const inputElem = document.querySelector("input");
const searchInput = document.querySelector(".search-input");
const autocompleteBox = document.querySelector(".autocom-box");

inputElem.addEventListener("keyup", (e) => {
  autocompleteBox.innerHTML = "";
  searchInput.classList.add("active");
  let value = e.target.value.toLowerCase();
  if (!value) {
    searchInput.classList.remove("active");
  }

  let filteredResult = suggestions.filter((ele) => {
    let lower = ele.toLowerCase();
    return lower.includes(value);
  });
  console.log(filteredResult);

  if (filteredResult === undefined || filteredResult.length == 0) {
    let inputVal = inputElem.value;
    let createLiElem = document.createElement("li");
    createLiElem.innerHTML = inputVal;
    autocompleteBox.append(createLiElem);
  } else {
    filteredResult.map((ele) => {
      let createLi = document.createElement("li");
      createLi.innerHTML = ele;
      createLi.addEventListener("click", (e) => {
        inputElem.value = e.target.textContent;
        searchInput.classList.remove("active");
      });
      autocompleteBox.append(createLi);
    });
  }
});
