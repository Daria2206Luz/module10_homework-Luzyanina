const result = +prompt("Введите число", "");
if (typeof +result !== "number") {
  alert("Упс, кажется, вы ошиблись");
} else if (Number.isNaN(result % 2)) {
  alert("Ошибка, введено не число");
} else if (result % 2 === 0) {
  alert("Число четное");
} else {
  alert("Число нечетное");
}