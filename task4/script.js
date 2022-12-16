const changeURL = document.querySelector('#changeURL');

changeURL.addEventListener('click', (Event) => {
    const newURL = prompt('Введите новый текст ссылки');
    changeURL.textContent = newURL;
    Event.preventDefault()
})
