
//Завдання №1
const form = document.getElementById("dataForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName");
    const variant = document.getElementById("variant");
    const phone = document.getElementById("phone");
    const faculty = document.getElementById("faculty");
    const address = document.getElementById("address");

    // Регулярні вирази
    const patterns = {
        fullName: /^[А-ЯІЇЄҐа-яіїєґ'’-]+(?:\s+[А-ЯІЇЄҐа-яіїєґ'’-]+){2}$/,
        variant: /^\d+$/,
        phone: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
        faculty: /^[А-ЯІЇЄҐа-яіїєґ\s'-]+$/,
        address: /^м\.\s\d{6}$/
    };

    const fields = [
        { input: fullName, pattern: patterns.fullName },
        { input: variant, pattern: patterns.variant },
        { input: phone, pattern: patterns.phone },
        { input: faculty, pattern: patterns.faculty },
        { input: address, pattern: patterns.address }
    ];

    let isValid = true;

    fields.forEach(function(field) {
        const value = field.input.value.trim();

        if (!field.pattern.test(value)) {
            field.input.classList.add("error");
            isValid = false;
        } else {
            field.input.classList.remove("error");
        }
    });

    if (isValid) {
        const message =
            "Введені дані:\n\n" +
            "ПІБ: " + fullName.value.trim() + "\n" +
            "Варіант: " + variant.value.trim() + "\n" +
            "Телефон: " + phone.value.trim() + "\n" +
            "Факультет: " + faculty.value.trim() + "\n" +
            "Адреса: " + address.value.trim();

        alert(message);
    }
});

//Завдання №2
const table = document.getElementById("numberTable");
const colorPicker = document.getElementById("colorPicker");

let number = 1;

// Створення таблиці 6x6
for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 6; j++) {
        const cell = document.createElement("td");

        cell.textContent = number;

        // Наведення на клітинку №7
        if (number === 7) {
            cell.addEventListener("mouseenter", function() {
                const randomColor =
                    "#" + Math.floor(Math.random() * 16777216)
                    .toString(16).padStart(6, "0");

                cell.style.backgroundColor = randomColor;
            });
        }

        // Одинарне натискання
        cell.addEventListener("click", function() {
            cell.style.backgroundColor = colorPicker.value;
        });

        // Подвійне натискання — варіант №7
        cell.addEventListener("dblclick", function() {
            const selectedColor = colorPicker.value;

            const selectedRow = cell.parentElement;
            const rows = Array.from(table.rows);
            const rowIndex = rows.indexOf(selectedRow);

            // Зміна рядків через один
            for (let k = rowIndex; k < rows.length; k += 2) {
                const cells = rows[k].cells;

                for (let m = 0; m < cells.length; m++) {
                    cells[m].style.backgroundColor =
                        selectedColor;
                }
            }
        });

        row.appendChild(cell);
        number++;
    }

    table.appendChild(row);
}
