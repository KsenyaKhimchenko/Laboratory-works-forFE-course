
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import GoodsCard from "./components/GoodsCard";

import "./App.css";

function App() {

    const goods = [
        {
            id: 1,
            name: "Навушники",
            price: 2500,
            image: `${import.meta.env.BASE_URL}images/product1.jpg`
        },
        {
            id: 2,
            name: "Смартфон",
            price: 18000,
            image: `${import.meta.env.BASE_URL}images/product2.jpg`
        },
        {
            id: 3,
            name: "Ноутбук",
            price: 35000,
            image: `${import.meta.env.BASE_URL}images/product3.jpg`
        },
        {
            id: 4,
            name: "Смарт-годинник",
            price: 6500,
            image: `${import.meta.env.BASE_URL}images/product4.jpg`
        },
        {
            id: 5,
            name: "Клавіатура",
            price: 3200,
            image: `${import.meta.env.BASE_URL}images/product5.jpg`
        },
        {
            id: 6,
            name: "Комп'ютерна миша",
            price: 1500,
            image: `${import.meta.env.BASE_URL}images/product6.jpg`
        }
    ];

    return (
        <div className="app">

            <h1>Лабораторна робота №7</h1>

            <h2>Завдання 1</h2>

            <Header />
            <Content />
            <Image />

            <h2>Завдання 2. Галерея товарів</h2>

            <div className="goods-gallery">

                {goods.map((item) => (
                    <GoodsCard
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}

            </div>

        </div>
    );
}

export default App;
