'use strict';

const guessTheNumber = function () {

  const getRandomNumber = function() {
    return Math.floor(Math.random() * 100);
  };

  let counter = 10;
  let number = getRandomNumber();


  const guess = function() {

    if (counter === 0) {
      counter = 10;
      if (confirm(`Игра завершена у вас ${counter} попыток. Начать новую игру?`)){
        guessTheNumber();
      } else {
        return;
      }
    }

    let userAnswer = +prompt(`Введите число от 1 до 100.`);

    if(userAnswer === 0){
      return;
    } else if(isNaN(userAnswer)){
      alert('Введи число!');
      guess();
    } else if(userAnswer > number){
      counter--;
      alert(`Загаданное число меньше. Осталось попыток ${counter}`);
      guess();
    } else if(userAnswer < number){
      counter--;
      alert(`Загаданное число больше. Осталось попыток ${counter}`);
      guess();
    } else if(userAnswer === number) {
      if(confirm("Вы угадали! Продолжить или завершить игру?")){
        guessTheNumber();
      }
    }

  };
  guess();
};

guessTheNumber();