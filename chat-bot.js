const phrases = [
  "Наш менеджер перезвонит Вам в ближайшее время!",
  "Уточнить детали можно по телефону 123456789",
  "Оставайтесь на связи!",
  "Сегодня прекрасная погода!",
  "С Вами очень приятно общаться!",
];

const hello = "Hello!";
const goodbye = "Good bye!";

$("h1").css("color", "blue");

$("#chatbot").click(function () {
  $(this).toggleClass("show");
});

$("#answers").append(`<div class="bot_answ">${hello}</div>`);

$("#answers").click(function () {
  return false;
});

$("#question").click(function () {
  return false;
});

$("#ok").click(function () {
    return false;
  });
  