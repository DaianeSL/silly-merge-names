(function(){
'use strict';

    let elements = {
        nameOne : document.querySelector('input[data-js="name1"]'),
        nameTwo : document.querySelector('input[data-js="name2"]'),
        form : document.querySelector('form[data-js="generator"]'),
        nameGen : document.querySelector('p[data-js="nameGenerated"]'),
        gif : document.querySelector('img[data-js="gif"]')
    } 

    let gifs = [
        'https://media.giphy.com/media/ATVJxqmdwYsmY/giphy.gif',
        'https://media.giphy.com/media/QI154bXJEU1aM/giphy.gif',
        'https://media.giphy.com/media/x4fmfB4IVK9A4/giphy.gif',
        'https://media.giphy.com/media/4cuyucPeVWbNS/giphy.gif',
        'https://media.giphy.com/media/xYHscQ1Np55i8/giphy.gif',
        'https://media.giphy.com/media/QItLfsafwiRS8/giphy.gif',
        'https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif'
    ]

    let getAPiece = str => {
        let numbers = [];
        numbers.push(Math.floor(Math.random() * str.length));
        numbers.push(Math.floor(Math.random() * str.length));
        numbers.sort();
        let result = str.substr(...numbers);
        
        return result;
    }

    elements.form.addEventListener('submit', function(e){
        e.preventDefault();
        
        let firstName = elements.nameOne.value,
            lastName = elements.nameTwo.value,
            result = getAPiece(firstName)+getAPiece(lastName);
    
        elements.nameGen.innerHTML = result.toLowerCase();
        elements.gif.src = gifs[Math.floor(Math.random() * gifs.length)];
            
    }); 

})();