
// ! Таблиця random color

// ! создаем элемент div 
const container = document.createElement("div");
// ! добавляем class
container.classList.add("container");

function random() {
    return Math.floor(Math.random() * (255 - 0)) + 0;
}

function color() {
    return (`${random()}, ${random()}, ${random()}`);
}

for (let i = 1; i <= 9; i++) {
    // ! создаем элемент div 
    const item = document.createElement("div");
    // ! добавляем class
    item.classList.add("item");
    item.style.backgroundColor = `rgb(${color()})`;
    // ! метод замедления
    setInterval(() => {
        item.style.backgroundColor = `rgb(${color()})`;
    }, 2000)

    item.innerText = `${i}`;
    // ! добавляем item в container
    container.append(item);
}

document.body.append(container);


