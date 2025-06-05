
// function addFruit() {
//   const fruit = prompt("Enter a new fruit:");
//   if (fruit) {
//     const li = document.createElement("li");
//     li.textContent = fruit;
//     document.getElementById("fruList").appendChild(li);
//   }
// }

// function addVegetable() {
//   const vegetable = prompt("Enter a new vegetable:");
//   if (vegetable) {
//     const li = document.createElement("li");
//     li.textContent = vegetable;
//     document.getElementById("vegList").appendChild(li);
//   }
// }


document.body.style.backgroundColor = "silver";

document.getElementById("title").style.color = "green";

document.querySelectorAll("h3").forEach(h3 => {
  h3.style.textTransform = "uppercase";
});



const fruitList = document.getElementById("fruitsList");
const newFruit = document.createElement("li");
newFruit.textContent = "Apples";
fruitList.style.display = "flex";
fruitList.style.justifyContent = "space-between";
fruitList.appendChild(newFruit);

const  fruitImages = {
  "Mangoes": "mangoes.jpg",
  "Bananas": "bananas.jpg",
  "Water Melons": "watermelons.jpg",
  "Apples": "apples.jpg"

}


const vegList = document.getElementById("veggiesList");
const newVeg = document.createElement("li");
newVeg.textContent = "Carrots";
vegList.style.display = "flex";
vegList.style.justifyContent = "space-between"
vegList.appendChild(newVeg);

const vegImages = {
  "Onions": "onions.jpg",
  "Tomatoes": "tomatoes.jpg",
  "Kales": "kales.jpg",
  "Carrots": "carrots.jpg"
};


document.querySelectorAll("#fruitsList li").forEach(li => {
  const fruitName = li.firstChild.textContent.trim();
  if (fruitImages[fruitName]) {
    const img = document.createElement("img");
    img.src = fruitImages[fruitName];
    img.alt = fruitName;
    img.className = "fruits-image";
    li.appendChild(img);
  }

});

document.querySelectorAll("#veggiesList li").forEach(li => {
  const vegName = li.firstChild.textContent.trim();
  if (vegImages[vegName]) {
    const img = document.createElement("img");
    img.src = vegImages[vegName];
    img.alt = vegName;
    img.className = "veggies-image";
    li.appendChild(img);
  }

});

const img = document.createElement('img');


