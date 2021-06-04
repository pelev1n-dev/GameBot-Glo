'use strict'

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let startGame = function () {
  let randomNumber = Math.floor(Math.random() * 100)
  console.log(randomNumber)
  let getNumber = function () {

    let doYouPlayGame = function (q) {
      if (q) {
        getNumber()
      } else {
        alert("Игра окончена!")
      }
    }

    let play,
        userNumber = +prompt("Угадай число от 1 до 100")

    if (userNumber == null) {
      alert("Введи число!")
    } else if (!isNumber(userNumber) || userNumber > 100) {
      play = confirm("Введи число от 1 до 100!")
      doYouPlayGame(play)
    } else if (userNumber === randomNumber) {
      alert("Поздравляю, Вы угадали!!!")
    } else if (userNumber > randomNumber) {
      play = confirm("Загаданное число меньше. Введите новое число.")
      doYouPlayGame(play)
    } else if (userNumber < randomNumber) {
      play = confirm("Загаданное число больше. Введите новое число.")
      doYouPlayGame(play)
    }
  }
  return getNumber
}

let game = startGame()
game()
