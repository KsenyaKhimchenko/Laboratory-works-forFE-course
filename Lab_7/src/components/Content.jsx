
import React from "react";

class Content extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color1: false,
            color2: false
        };
    }

    changeColor1 = () => {
        this.setState({
            color1: !this.state.color1
        });
    };

    changeColor2 = () => {
        this.setState({
            color2: !this.state.color2
        });
    };

    render() {
        return (
            <main>

                <p>
                    Місце народження: 18 листопада 2006 року,
                    м. Київ.
                </p>

                <p>
                    Освіта: Школа №106, м. Київ;
                    <br />
                    Національний технічний університет України
                    «Київський політехнічний інститут
                    імені Ігоря Сікорського».
                </p>

                <p>Хобі:</p>

                <ul>
                    <li>Дайвінг</li>
                    <li>Катання на лижах</li>

                    <li
                        onClick={this.changeColor1}
                        style={{
                            backgroundColor:
                                this.state.color1
                                    ? "blue"
                                    : "yellow",
                            color:
                                this.state.color1
                                    ? "white"
                                    : "black",
                            cursor: "pointer"
                        }}
                    >
                        Стрільба
                    </li>
                </ul>

                <p
                    onClick={this.changeColor2}
                    style={{
                        backgroundColor:
                            this.state.color2
                                ? "green"
                                : "pink",
                        color:
                            this.state.color2
                                ? "white"
                                : "black",
                        cursor: "pointer"
                    }}
                >
                    Улюблені фільми:
                </p>

                <ol>
                    <li>«Дюна», 2021</li>
                    <li>«Інтерстеллар», 2014</li>
                    <li>«Початок», 2010</li>
                </ol>

                <p>
                    <b>Барселона</b> — одне з моїх улюблених
                    міст, у якому я бувала.
                    Це велике та яскраве місто в Іспанії,
                    розташоване на узбережжі Середземного моря.
                    Барселона відома своєю незвичайною
                    архітектурою, зокрема роботами Антоні Гауді,
                    красивими вулицями, пляжами та
                    особливою атмосферою.
                    Найбільше мені сподобалося поєднання
                    історичної архітектури,
                    сучасного міського життя та моря.
                </p>

            </main>
        );
    }
}

export default Content;
