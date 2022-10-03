const hexItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const backgroundOutput = document.querySelector(".color-container");
const colorText = document.querySelector(".color");
const generateButton = document.querySelector(".btn");
const list = document.querySelector(".color-list");

// Function to generate random hex color
const getRandomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexItems[Math.floor(Math.random() * hexItems.length)];
  }
  colorText.textContent = color;
  backgroundOutput.style.backgroundColor = color;

  return color;
};

// Function to add the generated colors to list
const addToList = () => {
  const listItem = document.createElement("li");
  listItem.classList.add("li");
  list.prepend(listItem);
  const listColor = document.createElement("p");
  listColor.classList.add("list-color");
  listItem.appendChild(listColor);
  listColor.innerText = colorText.textContent;
  listItem.style.backgroundColor = colorText.textContent;
  colorArray.push(listColor.textContent);
  console.log(listColor.textContent);
  localStorage.setItem("colors", colorArray);
};

generateButton.addEventListener("click", (e) => {
  e.preventDefault();
  getRandomColor();
  addToList();
});
