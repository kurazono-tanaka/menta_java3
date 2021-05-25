'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    let text;
    const ul = document.querySelector('ul');
    const fizz =  document.getElementById('fizz').value;
    const buzz =  document.getElementById('buzz').value;

    while(ul.firstChild !== null){
      ul.removeChild(ul.firstChild);
    }

    if(/^(-?[1-9][0-9]*|0)$/.test(fizz) && /^(-?[1-9][0-9]*|0)$/.test(buzz)) {
      for(let i = 1; i <= 99; i++) {
        if(i % fizz === 0 && i % buzz === 0) {
          const li = document.createElement('li');
          text = document.createTextNode(`FizzBuzz ${i}`);
          li.appendChild(text);
          ul.appendChild(li);  
        } else if (i % fizz === 0) {
          const li = document.createElement('li');
          text = document.createTextNode(`Fizz ${i}`);
          li.appendChild(text);
          ul.appendChild(li);  
        } else if (i % buzz === 0) {
          const li = document.createElement('li');
          text = document.createTextNode(`Buzz ${i}`);
          li.appendChild(text);
          ul.appendChild(li);  
        }
      }
    } else {
      const li = document.createElement('li');
      text = document.createTextNode(`整数値を入力してください`);
      li.appendChild(text);
      ul.appendChild(li);  
    }
  });
}

