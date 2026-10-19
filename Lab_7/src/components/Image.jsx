
import { useState } from "react";

function Image() {

    const [visible, setVisible] = useState(true);
    const [width, setWidth] = useState(800);

    const addImage = () => {
        setVisible(true);
        setWidth(800);
    };

    const increaseImage = () => {
        if (visible) {
            setWidth(width + 100);
        }
    };

    const decreaseImage = () => {
        if (visible) {
            setWidth(Math.max(100, width - 100));
        }
    };

    const removeImage = () => {
        setVisible(false);
    };

    return (
        <section className="image-section">

            {visible && (
                <a
                    href="https://www.barcelona.cat/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="/images/barcelona.jpg"
                        alt="Барселона"
                        style={{
                            width: width,
                            maxWidth: "100%",
                            height: "auto"
                        }}
                    />
                </a>
            )}

            <div className="buttons">
                <button onClick={addImage}>
                    Додати
                </button>

                <button onClick={increaseImage}>
                    Збільшити
                </button>

                <button onClick={decreaseImage}>
                    Зменшити
                </button>

                <button onClick={removeImage}>
                    Видалити
                </button>
            </div>

        </section>
    );
}

export default Image;
