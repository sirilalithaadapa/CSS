const autoInput = document.getElementById('auto-input');

const output = document.getElementById('output')

//cant use just a variable we have to pass an event object because we need to know which key is being pressed since there any many keys, we need to use event object which can give a list of keys

autoInput.addEventListener('keydown', e => newchip(e));

function newchip(e) {
    var chipinput = autoInput.value
    if (e.key === 'Enter' && chipinput !== "") {
        output.innerHTML += `<div class="chips-cont">
       ${chipinput}
       <button class="cross-btn"><i class="fas fa-times-circle"></i></button>
       </div>`
        document.getElementById('auto-input').value = ''
    }

    //gets all of the chips that have been created 
    const chipsContList = document.querySelectorAll(".chips-cont");

    //for each makes sure to apply the function for every element of the array and here chipscontitem is the argument? for the arrow function 
    chipsContList.forEach((chipContItem) => {

        //childnode basically gets the child nodes of the main node, main node here is the chips cont and 2nd child node is the button(index 1)
        //event listener listens for the button click and removes it.
        chipContItem.childNodes[1].addEventListener("click", () => chipContItem.remove());

        //this works but we just cant simply do the same thing we did previously 
        // chipContItem.addEventListener("click", () => console.log('hello'))
    });

}

const disableBtn = document.querySelector('#disable-btn');
const enableBtn = document.querySelector('#enable-btn');

disableBtn.addEventListener('click', disabled);
enableBtn.addEventListener('click', enabled);

function disabled() {
    document.querySelector('#auto-input').disabled = true;
}

function enabled() {
    document.querySelector('#auto-input').disabled = false;
}


// const click = document.querySelector('#click')

// click.addEventListener('click', clicked)

// function clicked(){
//     console.log('hello')
// }


// const drag = document.querySelectorAll('.chips-cont')

// drag.forEach((dragged) =>{
//    dragged.childNodes[0].addEventListener('drag', () => console.log('hello'));
// })
