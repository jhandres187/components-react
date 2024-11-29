export const FourthComponent = () => {

    const handleClickButton = (event, buttonName) => {
        alert(`Has hecho clic en el botón ${buttonName}`);
    }

    const handleDoubleClick = () => {
        alert("Has hecho doble clic");
    }

    const handleMouseOverBox = () => {
        alert("¡Has ENTRADO a la caja!");
    }

    const handleMouseOutBox = () => {
        alert("¡Has SALIDO de la caja!");
    }

    const handleMouseAction = (event, action) => {
        alert(`Has ${action} la caja`);
    }

    const handleFocusOnInput = () => {
        console.log("¡Estás dentro del input, por favor escribe tu nombre!");
    }

    const handleBlurOnInput = () => {
        console.log("¡Estás fuera del input, hasta luego!");
    }
    return (
        <div className="container">
            <h1>Eventos en React</h1>
            <div className="d-flex justify-content-center align-items-center buttons gap-2">
                <div className="w-100">
                    <button
                        className="w-100 btn btn-success"
                        onClick={() => {
                            alert("Hola, has hecho clic en este botón");
                        }}
                    >Clic aquí
                    </button>
                </div>
                <div className="w-100">
                    <button 
                        className="w-100 btn btn-success"
                        onClick={event => handleClickButton(event, "Juan")}
                    >
                        ¡Clic aquí también!
                    </button>
                </div>
                <div className="w-100">
                    <button 
                        className="w-100 btn btn-success w-full"
                        onDoubleClick={handleDoubleClick}
                    >
                        Doble clic aquí
                    </button>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center">
                <div 
                    id="box1"
                    className="mt-4"
                    onMouseEnter={handleMouseOverBox}
                    onMouseLeave={handleMouseOutBox}
                >
                    <p>¡Pasa el mouse sobre este cuadro!</p>
                </div>
                <div 
                    id="box2"
                    className="mt-4"
                    onMouseEnter={event => handleMouseAction(event, "entrado")}
                    onMouseLeave={event => handleMouseAction(event, "salido")}
                >
                    <p>¡Este cuadro también responde al mouse!</p>
                </div>
            </div>

            <div className="input-field mt-4 d-flex justify-content-center">
                <input 
                    type="text"
                    onFocus={handleFocusOnInput}
                    onBlur={handleBlurOnInput}
                />
            </div>
        </div>
    )
}