let textOne = document.querySelector('#textOne');

textOne.addEventListener('click', function(event) {
    this.textContent = prompt('Введите текст!');
    event.defaultPrevented();
});