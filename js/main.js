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
document.addEventListener("DOMContentLoaded", function () {
  const snowflakesContainer = document.querySelector(".snowflakes");

  // Функція для створення сніжинок
  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    // Встановлюємо випадкові розміри, місце і швидкість
    snowflake.style.width = Math.random() * 10 + "px";
    snowflake.style.height = snowflake.style.width;
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 5 + 5 + "s"; // випадкова швидкість падіння
    snowflake.style.animationDelay = Math.random() * 5 + "s"; // затримка для кожної сніжинки

    snowflakesContainer.appendChild(snowflake);

    // При досягненні нижнього краю, видаляємо сніжинку
    snowflake.addEventListener("animationiteration", function () {
      snowflake.remove();
    });
  }

  // Створюємо нову сніжинку кожну секунду
  setInterval(createSnowflake, 200);
});
