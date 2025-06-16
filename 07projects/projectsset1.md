# PROJECTS RELATED TO DOM
## PROJECT LINK
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-hrp5j66m?file=index.html)


# Solution
## Project code 1
``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(event);
    // console.log(event.target);
    if (e.target.id == 'grey') {
      body.style.backgroundColor = 'grey';
    } else if (e.target.id == 'blue') {
      body.style.backgroundColor = 'blue';
    }
    //event.target helps us t get what is the target
    else if (e.target.id == 'yellow') {
      body.style.backgroundColor = 'yellow';
    } else {
      body.style.backgroundColor = 'white';
    }
  });
});

```

## Project code 2
```javascript

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give valid weight ${weight}`;
  } else {
    results.innerHTML = (weight / ((height * height) / 10000)).toFixed(2);
  }
});


```
## Project code 3
```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```
## Project code 4
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');
const p = document.createElement('p');
let prevguess = [];
let numguess = 1;
let playgame = true;
if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a valid number more than 1');
  } else if (guess > 100) {
    alert('please enter a valid number less than 100');
  } else {
    prevguess.push(guess);
    if (numguess == 11) {
      displayGuess(guess);
      displayMessage(`GAME OVER . RANDOM NUMBER WAS ${randomNumber}`);
      endgame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage('you guessed it right');
  } else if (guess < randomNumber) {
    displayMessage('number is too low');
  } else if (guess > randomNumber) {
    displayMessage('number is too high');
  }
}
function displayGuess(guess) {
  userinput.value = '';
  guessslot.innerHTML += `${guess}  `;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`;
}
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2> ${message}</h2>`;
}

function endgame() {
  userinput.value = ' ';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML=`<h2 id="newgame"> Start new game </h2> `;
  startover.appendChild(p);
  playgame = false;
  newgame();
}
function newgame() {
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    guessslot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess}`;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);
    playgame = true;
  });
}

```

## Project code 5
``` javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class="color">
      <table border="1" cellpadding="10">
        <tr>
          <th>Key</th>
          <th>Key Code</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'Space' : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});

```
## Project code 6
``` javascript
  // generate a random colour
const randomclr = function () {
  const hex = '0123456789ABCDEF';
  let colour = '#';
  for (let i = 0; i < 6; i++) {
    colour += hex[Math.floor(Math.random() * 16)];
  }
  return colour;
};
let time;
const startcolour = function () {
  time = setInterval(changebg, 1000);
  function changebg() {
    document.body.style.backgroundColor = randomclr();
  }
};
const stopcolour = function () {
  clearInterval(time);
  time = null;
};
const start = document.querySelector('#start');
start.addEventListener('click', startcolour);

const stop = document.querySelector('#stop');
stop.addEventListener('click', stopcolour);

```