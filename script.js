const form = document.querySelector(".form-valid");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.reset();
  alert("Спасибо, ваша заявка принята!");
});

document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.querySelector("input.telephon"); // ищем наш единственный input
  const maskOptions = {
    // создаем объект параметров
    mask: "+{7}(000)000-00-00", // задаем единственный параметр mask
  };
  IMask(inputElement, maskOptions); // запускаем плагин с переданными параметрами
});
