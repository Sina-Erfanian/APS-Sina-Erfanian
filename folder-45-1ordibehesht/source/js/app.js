const container = document.querySelector(".container");


let allProduct = [
    {id : 1 , name : "shoes 1" , price : 25 , src : "images/1.png"},
    {id : 2 , name : "shoes 2" , price : 35 , src : "images/2.png"},
    {id : 3 , name : "shoes 3" , price : 40 , src : "images/3.png"},
    {id : 4 , name : "shoes 4" , price : 21 , src : "images/4.png"}
]


allProduct.forEach(ele => {
    container.insertAdjacentHTML("beforeend",`
    <div class="product-card">
        <h1>${ele.name}</h1>
        <p>Lorem ipsum, or lipsum as it is sometimes known</p>
        <div class="product-pic" style="background-image: url(${ele.src});"></div>
        <div class="product-info">
          <div class="product-price">$${ele.price}</div>
          <a href="product.html?id=${ele.id}" class="product-button">See More</a>
        </div>
      </div>
    `)
})


