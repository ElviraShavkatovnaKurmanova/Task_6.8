const consoleL = document.querySelector('#consoleLog');

consoleL.addEventListener('click', function() {
   console.log('console.log служит для вывода инфомации в консоль');
  alert('console.log служит для вывода инфомации в консоль');
    })
  
const aler = document.querySelector('#alert');

aler.addEventListener('click', function() {
   console.log('alert Используется для вывода результата обработки или любой другой информации на экран пользователя при помощи специального окна');
  alert('Используется для вывода результата обработки или любой другой информации на экран пользователя при помощи специального окна');
   })
  
const promp = document.querySelector('#prompt');

promp.addEventListener('click', function() {
   console.log('prompt - возможность выводить специальное окно (pop-up), куда пользователь вводит какое-то значение');
  prompt('prompt - возможность выводить специальное окно (pop-up), куда пользователь вводит какое-то значение');
    })