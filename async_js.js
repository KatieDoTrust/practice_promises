//practice .then vs async await using an external api

const button = document.querySelector('#generate-dog-image');
const output = document.querySelector('#output');
const image = document.querySelector('#img');

//using .then

button.addEventListener('click', () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then((data) => img.src = data.message)
    .catch((error) => output.textContent = `Couldn't get photo ${error}`);
});


//using async await

//note : the thing you are awaiting must be a promise

// button.addEventListener('click', async () => {
//     try{
//         const response = await fetch("https://dog.ceo/api/breeds/image/random")
//         const data = await response.json()
//         img.src = data.message
//     }
//     catch(error){
//         output.textContent = `Couldn't get photo ${error}`
//     };
// });
