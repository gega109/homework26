let number = 1;
let btn = document.getElementById("btn");

async function getProducts() {
  try {
    let data = await fetch(`https://fakestoreapi.com/products/${number}`);
    let products = await data.json();
    let p = document.createElement("p");
    p.textContent = `სახელი: ${products.title} --- ფასი: ${products.price}`;
    document.body.appendChild(p);
  } catch (error) {
    let h1 = document.createElement("h1");
    h1.textContent = "ხარვეზია";
    document.body.appendChild(h1);
    h1.style.textAlign = "center";
    h1.style.color = "red";
    h1.style.fontSize = "60px";
  }
}

btn.addEventListener("click", () => {
  getProducts();
  number++;
});
