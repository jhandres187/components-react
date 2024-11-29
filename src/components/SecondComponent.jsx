
export const BookListComponent = () => {

    const bookTitles = [
        "El Hobbit",
        "El Señor de los Anillos: La Comunidad del Anillo",
        "El Señor de los Anillos: Las Dos Torres",
        "El Señor de los Anillos: El Retorno del Rey",
        "Crónica del Asesino de Reyes: El Nombre del Viento",
        "Crónica del Asesino de Reyes: El Temor de un Hombre Sabio",
        "Juego de Tronos",
        "Un Juego de Tronos: Canción de Hielo y Fuego",
        "El Nombre del Viento"
    ];

    return (
        <>
            <h1>Listado de Libros Fantásticos</h1>
            <section className="book-list py-2">
                <ul>
                    {
                        bookTitles.map((title, index) => {
                            return <li key={index}>{title}</li>
                        })
                    }
                </ul>
            </section>
        </>
    )
}
