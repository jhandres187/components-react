
export const FirstComponent = () => {

    const instructorName = "Inés María Oliveros";

    const linkGithub  = "https://github.com/inesmariao";

    const studentDetails = {
        firstName: "Jhonny",
        lastName: "Ibañez",
        phone: "3015107279",
        linkLinkedin: "https://www.linkedin.com/in/jhonny-andres-ibanez/"
    };

    console.log(studentDetails);

    return (
        <>
            <h1>
                Welcome to My First React Component
            </h1>
            <section className="container mt-4">
                <h2>
                    Temas de React
                </h2>
                <ul>
                    <li>
                        Componentes
                    </li>
                    <li>
                        Eventos
                    </li>
                    <li>
                        State Hooks
                    </li>
                    <li>
                        Props
                    </li>
                </ul>
            </section>
            <section className="container py-2">
                <h2>
                    Datos del Docente
                </h2>
                <p>
                    Full Name: <strong>
                        {instructorName}
                    </strong>
                </p>
                <p>
                    GitHub: {linkGithub} 
                </p>
            </section>
            <div className="container py-2">
                <h2>
                    Datos del Estudiante
                </h2>
                <p>
                    Nombre: <strong>
                        {studentDetails.firstName}
                    </strong>
                </p>
                <p>
                    Apellido: {studentDetails.lastName} 
                </p>
                <p>
                    Celular: {studentDetails.phone} 
                </p>
                <p>
                    LinkedIn: <a href={studentDetails.linkLinkedin}>{studentDetails.linkLinkedin}</a> </p>
            </div>
            <div className="container mt-2 pt-2">
                <h2>
                    Objeto Completo
                </h2>
                <pre>{JSON.stringify(studentDetails)} </pre>
            </div>
        </>
    )
}