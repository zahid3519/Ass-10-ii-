// Initialize array and list element
const numbers = [1, 2, 3, 4, 5];
const numbersList = document.getElementById("numbers-list");

// Function to update list in HTML
function updateList() {
  numbersList.innerHTML = "";
  numbers.forEach((number) => {
    const listItem = document.createElement("li");
    listItem.textContent = number;
    numbersList.appendChild(listItem);
  });
}


const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => {
  const newNumber = parseInt(prompt("Enter a number to add:"));
  numbers.push(newNumber);
  updateList();
});


const removeButton = document.getElementById("remove-button");
removeButton.addEventListener("click", () => {
  const indexToRemove = parseInt(prompt("Enter the index to remove:"));
  if (indexToRemove >= 0 && indexToRemove < numbers.length) {
    numbers.splice(indexToRemove, 1);
    updateList();
  } else {
    alert("Invalid index!");
  }
});


const findButton = document.getElementById("find-button");
findButton.addEventListener("click", () => {
  const numberToFind = parseInt(prompt("Enter a number to find:"));
  const index = numbers.indexOf(numberToFind);
  if (index !== -1) {
    alert(`Element found at index ${index}`);
  } else {
    alert("Element not found!");
  }
});

// Initial display of the list
updateList();
