const consolelog = document.querySelector('#consolelog');
const alertt = document.querySelector('#alert')
const promptt = document.querySelector('#prompt')

    document.querySelector('#consolelog').addEventListener('click', function (event){
    
        alert('Пример использования кнопки console.log');
        console.log('console.log');
});

    document.querySelector('#alert').addEventListener('click', function (event){
    
        alert('Пример использования кнопки alert');
        console.log('alert()');
});

    document.querySelector('#prompt').addEventListener('click', function (event){
    
        alert('Пример использования кнопки prompt');
        prompt('Введите текст!');
        console.log('prompt');
});
