output = document.getElementById('output');
button = document.getElementById('btn1');

const randomNumber = () => {

  let randomIndex = (Math.floor(Math.random() * 501));
  let x = String([randomIndex]);
  output.innerHTML = x.toString();
};

randomNumber();

button.addEventListener('click',  () => {
  randomNumber();
});
