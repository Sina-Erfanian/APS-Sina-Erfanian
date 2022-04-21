const locationUrl = location.search

const btn = document.querySelector("button")

const params = new URLSearchParams(locationUrl).get("id")


let allProduct = [
  { id: 1, name: "shoes 1", price: 25, src: "images/1.png" },
  { id: 2, name: "shoes 2", price: 35, src: "images/2.png" },
  { id: 3, name: "shoes 3", price: 40, src: "images/3.png" },
  { id: 4, name: "shoes 4", price: 21, src: "images/4.png" },
];

let find = allProduct.find(ele => ele.id == params)

document.body.insertAdjacentHTML(
  "beforeend",
  `
 <div class="details">
      <div class="desc">
        <h1>${find.name}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at
          nobis, ipsum quas excepturi sed minus modi officia corrupti, veniam
          rem tempora, tenetur dicta nesciunt neque! Voluptate consequuntur
          incidunt molestias?
        </p>
      </div>
      <div class="image">
        <img src="${find.src}" />
      </div>
    </div>
`
);


btn.addEventListener("click",()=> {
    history.back()
})

