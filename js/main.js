// Отримуємо елементи за ID
var youtube_social = document.getElementById("youtube");
var facebook_social = document.getElementById("facebook");
var instagram_social = document.getElementById("instagram");

// Додаємо обробники подій для кожної кнопки

youtube_social.addEventListener("click", function () {
  window.open("https://www.youtube.com/@Linuxoiddd-d6s", "_blank"); // Відкриває YouTube у новій вкладці
});

facebook_social.addEventListener("click", function () {
  alert("В мене немає Facebook((");
});

instagram_social.addEventListener("click", function () {
  alert("В мене немає Instagram((");
});

//Ну а тепер будуть прікольні сніжинки в честь нового року)))
// Функція створення сніжинки
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄"; // Символ сніжинки
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.fontSize = Math.random() * 5 + 15 + "px"; // Випадковий розмір
  snowflake.style.animation = `fall ${Math.random() * 5 + 3}s linear`;
  snowflake.style.animationDuration = `${Math.random() * 5+ 15}s`; // Тривалість падіння

  document.body.appendChild(snowflake);

  // Видалення сніжинки через 10 секунд
  setTimeout(() => {
    snowflake.remove();
  }, 10000);
}

// Запускаємо сніжинки кожні 200 мс
setInterval(createSnowflake, 200);
