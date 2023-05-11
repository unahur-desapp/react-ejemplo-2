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
 * 
 * JustPhrases01: lo mismo que AuthorsAndPhrases05b para una única lista de frases
 * JustPhrases02: se piden frases a un servicio - implementación real y fake (trivial switchear).
 * JustPhrases03: borrar frase.
 * JustPhrases04a: agregar frase - con la secuencia didáctica antes de organizar el discurso.
 * JustPhrases04: agregar frase - componente único sin validación.
 * JustPhrases05: agregar frase - componente único, validación con toast.
 * JustPhrases06: agregar frase - componente único, validación mientras se tipea, botón deshabilitado, touched.
 * JustPhrases07: agregar frase - componentes separados.
 * JustPhrases08: agregar frase - componentes separados, AddPhrase comprimido o expandido.
 * 
 * JustPhrasesMui01: Button, TextField, Typography, uso de sx, custom mui theme, un uso de Stack, algo del color system.
 * JustPhrasesMui02: todos los flexbox como Stack.
 * JustPhrasesMui03: se saca el resto del CSS.
 * JustPhrasesMui04: el AddPhrases se va a un Modal.
 * 
 */
import { AuthorsAndPhrases } from "./components/authorsAndPhrases/AuthorsAndPhrases06";
import classes from "./App.module.css";
import { Phrases } from "./components/justPhrasesMui/JustPhrasesMui00";
import { Phrases as PhrasesMUI } from "./components/justPhrasesMui/JustPhrasesMui01";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/scaffold/Header";

export const App = App04;

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
    return <>
        <div className={classes.container}>
            <div className={classes.titleFrame}>
                <h1 className={classes.title}>Frases célebres</h1>
            </div>
            <Phrases />
        </div>
    </>;
}

/*
 * Barra superior con opciones, autores y frases o frases
 */
function App04() {
    return <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <div className={classes.container}>
            {/* <Phrases /> */}
            <AppRouter />
        </div>
    </div>;
}


function AppRouter() {
    return <Routes>
        <Route path="/autores-y-frases" element={
            <>
                <div className={classes.titleFrame}>
                    <h1 className={classes.title}>Autores y frases - refactorizadas</h1>
                </div>
                <AuthorsAndPhrases />
            </>
        } />
        <Route path="/frases" element={
            <>
                <div className={classes.titleFrame}>
                    <h1 className={classes.title}>Frases célebres</h1>
                </div>
                <Phrases />
            </>
        } />
        <Route path="/frasesMui" element={
            <>
                <div className={classes.titleFrame}>
                    <h1 className={classes.title}>Frases célebres</h1>
                </div>
                <PhrasesMUI />
            </>
        } />
        <Route path="*" element={
                <div style={{ textAlign: "center", marginTop: "3rem" }}>
                    Elegir una opción en la barra superior
                </div>
        } />
    </Routes>
}