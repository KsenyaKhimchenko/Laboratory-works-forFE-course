
document.addEventListener("DOMContentLoaded", function () {

    // ЗАВДАННЯ 1

    // Отримуємо всі елементи всередині body
    const elements = document.querySelectorAll("body *");

    // 8-й і 9-й елементи (індексація з нуля)
    const element8 = elements[7];
    const element9 = elements[8];

    // Призначаємо унікальні ID
    element8.id = "element8";
    element9.id = "element9";

    // Лічильники натискань
    let clicks8 = 0;
    let clicks9 = 0;

    // Перший елемент: getElementById()
    element8.addEventListener("click", function (event) {
        event.stopPropagation();

        const el = document.getElementById("element8");

        clicks8++;

        if (clicks8 % 2 === 1) {
            el.style.backgroundColor = "blue";
            el.style.color = "white";
        } else {
            el.style.backgroundColor = "yellow";
            el.style.color = "black";
        }
    });

    // Другий елемент: querySelector()
    element9.addEventListener("click", function (event) {
        event.stopPropagation();

        const el = document.querySelector("#element9");

        clicks9++;

        if (clicks9 % 2 === 1) {
            el.style.backgroundColor = "green";
            el.style.color = "white";
        } else {
            el.style.backgroundColor = "pink";
            el.style.color = "black";
        }
    });

});


// ЗАВДАННЯ 2

// Додати зображення
function addImage() {
    const container = document.getElementById("image-container");

    // Якщо зображення вже є, не додаємо дубль
    if (document.getElementById("barcelona-image")) {
        return;
    }

    const link = document.createElement("a");
    link.href = "https://www.barcelona.cat/";
    link.target = "_blank";

    const img = document.createElement("img");
    img.id = "barcelona-image";
    img.src = "images/barcelona.jpg";
    img.alt = "Барселона";
    img.width = 800;

    link.appendChild(img);
    container.appendChild(link);
}

// Збільшити зображення
function increaseImage() {
    const img = document.getElementById("barcelona-image");

    if (img) {
        img.width = img.width + 100;
    }
}

// Зменшити зображення
function decreaseImage() {
    const img = document.getElementById("barcelona-image");

    if (img) {
        img.width = Math.max(100, img.width - 100);
    }
}

// Видалити зображення
function removeImage() {
    const img = document.getElementById("barcelona-image");

    if (img) {
        img.parentElement.remove();
    }
}
