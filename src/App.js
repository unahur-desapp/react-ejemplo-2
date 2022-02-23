/*
 * El ejemplo más simple: un div.
 * React acepta una notación que se parece mucho a HTML ... pero no es HTML.
 * Se llama JSX.
 * 
 * Un componente devuelve una expresión escrita en este pseudo-HTML.
 */
function App01() {
    return <div>
        Hola
    </div>;
}

/*
 * En lo que se devuelve tien que haber un único elemento principal.
 * Si en lo que quiero devolver no hay eso, se puede usar un Fragment, 
 * que se nota <>...</>.
 * Ya vemos que JSX no es exactamente igual a HTML.
 */
function App02() {
    return <>
        <h1>Frases célebres</h1>
        <ul>
            <li>No contaban con mi astucia</li>
            <li>Se aprovechan de mi nobleza</li>
            <li>Síganme los buenos</li>
            <li>Que no panda el cúnico</li>
        </ul>
    </>;
}

/*
 * Puedo referirme a clases de CSS ... pero el atributo se llama className, no class.
 * Otra diferencia entre JSX y HTML.
 * También se puede poner style ... ya vamos a volver sobre esto.
 */
function App03() {
    return <div className="frame">
        <h1 className="title">Frases célebres</h1>
        <ul>
            <li className="phrase">No contaban con mi astucia</li>
            <li className="phrase">Se aprovechan de mi nobleza</li>
            <li className="phrase">Síganme los buenos</li>
            <li className="phrase">Que no panda el cúnico</li>
        </ul>
    </div>;
}

/*
 * Ufa, tuve que cambiar uno por uno los li en p ...
 */
function App04() {
    return <div className="frame">
        <h1 className="title">Frases célebres</h1>
        <ul>
            <p className="phrase">No contaban con mi astucia</p>
            <p className="phrase">Se aprovechan de mi nobleza</p>
            <p className="phrase">Síganme los buenos</p>
            <p className="phrase">Que no panda el cúnico</p>
        </ul>
    </div>;
}

export const App = App04;
