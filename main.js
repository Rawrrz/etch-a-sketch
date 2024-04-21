// Generate Grid
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

let size = 16;

let container = document.querySelector('.container');

generateGrid(size, container);

let colList = document.querySelectorAll('.col');

for(let i = 0; i < colList.length; i++)
{
  colList[i].addEventListener("mouseover", () => 
  {
      colList[i].style.cssText = "background-color: red;";
  })
}