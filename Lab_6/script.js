
const loadButton = document.getElementById("loadButton");
const usersContainer = document.getElementById("usersContainer");
const statusText = document.getElementById("status");

// Обробка натискання кнопки
loadButton.addEventListener("click", function () {

    statusText.textContent = "Завантаження даних...";
    usersContainer.innerHTML = "";
    loadButton.disabled = true;

    // Запит до зовнішнього API
    fetch("https://randomuser.me/api/?results=5")

        // Перевірка відповіді сервера
        .then(function (response) {

            if (!response.ok) {
                throw new Error("Помилка HTTP: " + response.status);
            }

            return response.json();
        })

        // Обробка отриманих JSON-даних
        .then(function (data) {

            const users = data.results;

            users.forEach(function (user) {

                // Створюємо картку користувача
                const card = document.createElement("div");
                card.className = "user-card";

                // Фотографія
                const img = document.createElement("img");
                img.src = user.picture.large;
                img.alt = "Фото користувача";

                // Блок з інформацією
                const info = document.createElement("div");
                info.className = "user-info";

                function addField(label, value) {
                    const p = document.createElement("p");
                    const strong = document.createElement("strong");

                    strong.textContent = label + ": ";
                    p.appendChild(strong);
                    p.appendChild(document.createTextNode(value));

                    info.appendChild(p);
                }

                // Дані за варіантом №7
                addField("Мобільний телефон", user.cell);
                addField("Місто", user.location.city);
                addField("Поштовий індекс",
                         String(user.location.postcode));
                addField("Email", user.email);

                // Додаємо інформацію до картки
                card.appendChild(img);
                card.appendChild(info);

                // Додаємо картку на сторінку
                usersContainer.appendChild(card);
            });

            statusText.textContent = "Дані успішно завантажено!";
        })

        // Обробка помилок
        .catch(function (error) {

            statusText.textContent =
                "Помилка завантаження: " + error.message;

            console.error(error);
        })

        // Виконується після завершення запиту
        .finally(function () {
            loadButton.disabled = false;
        });

});
