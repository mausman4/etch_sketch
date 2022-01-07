//functionality for the clear grid button
function addButtonFunction(){
    const btn = document.querySelector('button');

    btn.addEventListener('click', function (e){
        for (let i = 0; i < grid_item.length; i++){
            grid_item[i].style.background = "white";
        }
    let new_size = Number(prompt("Whats the new grid size?"));
    if (new_size > 64){
        alert("Size is limited to 64 x 64");
        return;
    }
    else if (new_size <= 0){
        alert("Please input a valid size between 1-64");
        return;
    }
    grid = makeGrid(new_size); //default size of 16 x 16
    grid_item = addEventsToGrid();
});
}
//generates a row
function makeRow(size){
    const div = document.createElement('div');
    div.classList.add("row");
    div.style.cssText = "display: flex"

    for (let i = 0; i < size; i++){
        const rowItem = document.createElement('div');
        rowItem.classList.add("row-item");
        rowItem.style.cssText = "flex: 1; border: 1px solid red;"

        div.appendChild(rowItem);
    }

    return div;
}
//generates the grid
function makeGrid(size){
    //make sure we start with a clean grid by removing the old one
    document.getElementById("grid").remove();

    //add a fresh grid
    const div = document.createElement('div');
    div.setAttribute('id', 'grid');
    //select the body
    let body = document.querySelector('body');
    body.appendChild(div); //append our grid to the body

    const grid = document.querySelector('#grid');

    for (let i = 0; i < size; i++){
        grid.appendChild(makeRow(size));
    }    

}

function addEventsToGrid(){
    //get all the rows into a nodelist
    let grid_item = document.querySelectorAll('.row-item');
    for (let i = 0; i < grid_item.length; i++){
        grid_item[i].addEventListener('mouseenter', function(e){
        e.target.style.background = "blue";
    });   
}   
    return grid_item;
}

addButtonFunction();
let grid = makeGrid(16); //default size of 16 x 16
let grid_item = addEventsToGrid();



