/*
document.querySelector('.clear-tasks').addEventListener('click', function(e){
    console.log('Hello');

    e.preventDefault();
});
*/


document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    //console.log('Clicked');
    let val;
    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    e.target.innerText = 'Hello';

    // Event type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // Coordinates event relative to the window
    val = e.clientY; //pixels from top to bottom
    val = e.clientX; //pixels from left to right

    // Coordinates event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}

