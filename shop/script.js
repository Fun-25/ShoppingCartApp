// const produtc = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: { rate: 3.9, count: 120 },
// };

const all = document.getElementById("men-clothing");
const menClothes = document.getElementById("men-clothing");
const womenClothes = document.getElementById("women-clothing");
const jewellery = document.getElementById("jewellery");
const electronics = document.getElementById("electronics");

async function getProducts() {
  const response = await fetch(" https://fakestoreapi.com/products");
  const data = await response.json();

  const mainContent = document.getElementById("main-content");
  const productContainer = document.getElementById("product-container");
  productContainer.style.display = "flex";

  const modifiedData = data.map((item) => {
    return {
      ...item,
      color: ["red","blue","green","white","black"],
      size: {
        small: "S",
        medium: "M",
        large: "L",
      },
    };
  });

  modifiedData.map((item) => {
    const productElement = document.createElement("div");
    productElement.innerHTML += `
  <title>${item.category}</title>
          <div class="items">
            <div class="item">
              <img src="${item.image}" />
              <div class="info">
                <div class="row">
                  <div class="price">${item.price}</div>
                  <div class="sized">${item.size.small},${item.size.medium},${
      item.size.large
    }</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    ${Object.entries(item.color)
                      .map(
                        ([colorKey, colorValue]) =>
                          `<div class="circle" style="background-color: ${colorValue};"></div>`
                      )
                      .join("")}
                   
                     
                  </div>
                </div>
                <div class="row">Rating:${item.rating.rate}</div>
              </div>
              <button id="addBtn">Add to Cart</button>
            </div>
        `;
    productContainer.appendChild(productElement);
    mainContent.appendChild(productContainer);
  });
  const styleElement = document.createElement("style");
  styleElement.innerHTML = `
         #product-container {
           margin-top: 1.2rem;
            
         }
       
         #product-container title {
           display: block;
           font-size: 1.5rem;
         }
       
         #product-container .items {
           display: flex;
           width: auto;
           overflow-x: scroll;
           padding: 1rem 0;
           gap: 3rem;
           margin:20px;
         }
       
         #product-container .items .item {
           border: 1px solid black;
           width: 14vw;
            
          
         }
       
         #product-container .items .item img {
           max-width: 100%;
         }
       
         #product-container .items .item .row {
           display: flex;
           justify-content: space-between;
         }
       
         #product-container .items .item .info {
           padding: 1rem;
         }
       
         #product-container .items .item button {
           width: 100%;
           border-radius: none;
           border: none;
           padding: 1rem;
           font-size: 1rem;
           color: white;
           background-color: black;
           cursor: pointer;
         }
       
         #product-container .items .item .colors {
           display: flex;
           margin: 1rem 0;
         }
       
         #product-container .items .item .circle {
           width: 12px;
           height: 17px;
           border-radius: 100%;
           margin: 0 3px;
         }
       `;

  document.head.appendChild(styleElement);
}

function renderAllCategories() {
  all.style.display = "none";
  menClothes.style.display = "none";
  womenClothes.style.display = "none";
  jewellery.style.display = "none";
  electronics.style.display = "none";
}

function renderMenClothes() {
  all.style.display = "none";
  menClothes.style.display = "none";
  womenClothes.style.display = "none";
  jewellery.style.display = "none";
  electronics.style.display = "none";
}

function renderWomenClothes() {
  all.style.display = "none";
  menClothes.style.display = "none";
  womenClothes.style.display = "none";
  jewellery.style.display = "none";
  electronics.style.display = "none";
}

function renderJewelry() {
  all.style.display = "none";
  menClothes.style.display = "none";
  womenClothes.style.display = "none";
  jewellery.style.display = "none";
  electronics.style.display = "none";
}
function renderElectronics() {
  all.style.display = "none";
  menClothes.style.display = "none";
  womenClothes.style.display = "none";
  jewellery.style.display = "none";
  electronics.style.display = "none";
}

all.addEventListener("click", renderAllCategories);
menClothes.addEventListener("click", renderMenClothes);
womenClothes.addEventListener("click", renderWomenClothes);
jewellery.addEventListener("click", renderJewelry);
electronics.addEventListener("click", renderElectronics);

getProducts();
