// Generate Grid Function
function generateGrid(size, container)
{
  for(let i = 0; i < size; i++)
  {
    let row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < size; j++)
    {
      let col = document.createElement("div");
      col.classList.add("col");
      row.appendChild(col);
    }
    container.appendChild(row);
  }
}

// Function to set grid listeners
function setGridListeners()
{
  // Pointer to all squares
  let colList = document.querySelectorAll('.col');
  
  // Set event listeners for the grid squares
  for(let i = 0; i < colList.length; i++)
  {
    colList[i].addEventListener("mouseover", () => 
    {
        colList[i].style.cssText = "background-color: red;";
    })
  }
}


// Function to erase current grid
function clearGrid(size, container)
{
  let rowList = document.querySelectorAll('.row');
  for(let i = 0; i < size; i++)
  {
    container.removeChild(rowList[i]);
  }
}

// Main Program

// Establish initial size and container
let size = 100;
let container = document.querySelector('.container');

// Establish button
let button = document.querySelector('.btn');

// Generate the grid
generateGrid(size, container);
// Set grid listeners
setGridListeners();

// Set event listener for button
button.addEventListener("click", () =>
{   
    // Clear old grid
    clearGrid(size, container);
  
    // Obtain new size from user
    let newSize;
    let goodSize = false;
    while(!goodSize)
    {
      newSize = prompt("Please enter a new size: Maximum: 100, Minimum: 10");
      if(newSize <= 100 && newSize >= 10)
         goodSize = true;
    }
    size = newSize;
  
    // Create new grid and listeners
    generateGrid(size, container);
    setGridListeners();
});