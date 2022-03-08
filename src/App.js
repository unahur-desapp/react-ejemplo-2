/*
 * AuthorsAndPhrases01: se separa un componente con toda la parte de autores y frases de cada uno.
 * AuthorsAndPhrases02: se define un componente separado para cada autor.
 * AuthorsAndPhrases03: se define un componente genérico para mostrar la info relacionada con un autor.
 * AuthorsAndPhrases04: se definen archivos específicos de CSS para cada component
 * AuthorsAndPhrases05a: botones de cambio de foto, useState.
 * AuthorsAndPhrases05b: botones de cambio de color, useState, style, bastante magia de flex, renderizado condicional.
 * AuthorsAndPhrases05bAMedioOrganizar: faltan varios cambios necesarios en el CSS, para que se pueda ver el efecto de ir agregándolos.
 * AuthorsAndPhrases06: se piden frases a un servicio - implementación real y fake (trivial switchear).
 * AuthorsAndPhrases07: borrar frase.
 * AuthorsAndPhrases08: 
 * 
 * Phrases01: lo mismo que AuthorsAndPhrases05b para una única lista de frases
 * 
 */
import { AuthorsAndPhrases } from "./components/authorsAndPhrases/AuthorsAndPhrases07";
import classes from "./App.module.css";
import { Phrases } from "./components/justPhrases/JustPhrases01";

export const App = App03;

/*
 * Este es el sucesor de App05 en AppAutonomous.js.
 * Se separa la información sobre autores y frases, y se lleva a un componente separado.
 */
function App01() {
    return <div className="container">
        <div className="titleFrame">
            <h1 className="title">Autores y frases - refactorizadas</h1>
        </div>
        <AuthorsAndPhrases />
    </div>;
}

/*
 * Idem App01 usando los estilos definidos en App.module.css
 */
function App02() {
    return <div className={classes.container}>
        <div className={classes.titleFrame}>
            <h1 className={classes.title}>Autores y frases - refactorizadas</h1>
        </div>
        <AuthorsAndPhrases />
    </div>;
}

/*
 * Muestra una única lista con todas las frases
 */
function App03() {
    return <div className={classes.container}>
        <div className={classes.titleFrame}>
            <h1 className={classes.title}>Frases célebres</h1>
        </div>
        <Phrases />
    </div>;
}

