// grab DOM elements

const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-dis');




nameInput.addEventListener('input', () => {
      const name = nameInput.value;
      nameDisplay.textContent = name;



});











// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
