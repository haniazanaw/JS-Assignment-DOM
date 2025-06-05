
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

//Change document background color to silver

document.body.style.backgroundColor= 'silver';
//Change the font color for h1 title tag to green
const title = document.getElementById('title');
title.style.color='green'

//Change the font case for h3 title tags to uppercase
const fontCase = document.querySelectorAll('h3');
fontCase.forEach(h3=>{
  h3.style.textTransform = 'uppercase';
});
// Add one more fruit to the fruits list

const fruits = document.getElementById('fruList');
const newList = document.createElement('li');
fruits.appendChild(newList);
newList.textContent= 'Strawberry';


//Add one more vegetable to the vegetables list
const vegetables = document.getElementById('vegList');
const newveg = document.createElement('li');
vegetables.appendChild(newveg);
newveg.textContent = 'Spinach';

//Additional Styles
fruits.style.display="flex";
fruits.style.flexDirection="wrap";
fruits.style.justifyContent="space-between";
const paragraph = document.querySelector("p")
paragraph.style.fontSize="60px"
paragraph.style.color='green';
const fruit = document.querySelectorAll('#fruList li');
const fruitimages = ["Images/front-view-fresh-green-apples-with-tangerines-dark-background-color-photo-xmas-holiday-fruit.jpg","Images/close-up-banana-table.jpg","Images/fruit-still-life-baroque-style.jpg","Images/red-strawberries-white-cup.jpg"]
fruit.forEach((li,index)=>{
  const img = document.createElement("img")
  img.src = fruitimages[index];
  img.className = "fruit-img";
  li.appendChild(img)
})
const veg = document.querySelectorAll('#vegList li');
const vegimages = ["Images/side-view-basket-full-red-onions-wooden-background.jpg","Images/close-up-view-tomatoes-basket-plate-wooden-table.jpg","Images/washed-spinach-leaves-bowl-wooden-table.jpg","Images/carrots-with-leaves-towel-bucket-marble-surface.jpg"]
veg.forEach((li,index)=>{
  const imgveg = document.createElement("img")
  imgveg.src = vegimages[index];
  imgveg.className = "veg-img";
  li.appendChild(imgveg)
})
vegetables.style.display="flex"
vegetables.style.justifyContent="space-between"
vegetables.style.marginTop ="50px"

const button = document.getElementById("button");
button.style.border='none';
button.style.borderRadius='20px';
button.style.backgroundColor= "rgb(164, 236, 164)";
button.style.padding="20px";
button.style.width="240px";
button.style.fontSize="25px"
button.style.cursor="pointer";
button.addEventListener('click',()=>{
  button.textContent="Go Down";
  button.style.backgroundColor= "rgb(215, 243, 215)"
})
button.addEventListener('click', function() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth' 
  });
});




document.body.style.backgroundColor = "beige";

document.getElementById("title").style.color = "white";

document.getElementById("nav").style.display = "flex";





document.querySelectorAll("h3").forEach(h3 => {
  h3.style.textTransform = "uppercase";
});

const fruitList = document.getElementById("fruList");
const newFruit = document.createElement("li");
newFruit.textContent = "Pineapples";
fruitList.style.display = "flex";
fruitList.style.justifyContent = "space-between";
fruitList.appendChild(newFruit);

const  fruitImages = {
  "Mangoes": "mango.jpg",
  "Bananas": "banana.jpg",
  "Water Melons": "water melons.jpg",
  "Pineapples": "pineapple.jpg"

}


const vegList = document.getElementById("vegList");
const newVeg = document.createElement("li");
newVeg.textContent = "Spinach";
vegList.style.display = "flex";
vegList.style.justifyContent = "space-between"
vegList.appendChild(newVeg);

const vegImages = {
  "Onions": "onions.jpg",
  "Tomatoes": "tomatoes.jpg",
  "Kales": "kales.jpg",
  "Spinach": "spinach.jpg"
};

document.querySelectorAll("#vegList li").forEach(li => {
  const vegName = li.firstChild.textContent.trim();
  if (vegImages[vegName]) {
    const img = document.createElement("img");
    img.src = vegImages[vegName];
    img.alt = vegName;
    img.className = "veg-image";
    li.appendChild(img);
  }

});

document.querySelectorAll("#fruList li").forEach(li => {
  const fruitName = li.firstChild.textContent.trim();
  if (fruitImages[fruitName]) {
    const img = document.createElement("img");
    img.src = fruitImages[fruitName];
    img.alt = fruitName;
    img.className = "fruit-image";
    li.appendChild(img);
  }

});

const img = document.createElement('img');


const button=document.getElementById('click-button')
button.style.padding='10px 10px 10px 10px'
button.style.background='none'
button.style.border = 'none'
button.style.backgroundColor = 'green'
button.style.borderRadius = '20px'
button.style.color = 'white'
button.style.fontSize = "20px"
button.style.cursor = 'pointer'
button.style.marginTop = "40px"
button.style.width = '250px'
button.style.height = '70px'
button.style.marginBottom = "40px"
button.addEventListener('click',()=>{
    button.style.backgroundColor='blue'
    button.textContent='Ordered'})
    button.onclick=()=>{           
    heading.textContent= 'Congrats'
    }