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
        <p className="phrase">No contaban con mi astucia</p>
        <p className="phrase">Se aprovechan de mi nobleza</p>
        <p className="phrase">Síganme los buenos</p>
        <p className="phrase">Que no panda el cúnico</p>
    </div>;
}

function App05() {
    return <div className="container">
        <div className="titleFrame">
            <h1 className="title">Frases célebres</h1>
        </div>
        <div className="phraseAuthorBlock">
            <div className="phraseAuthorInfoFrame">
                <h2>Chapulín colorado</h2>
                <div>
                    <img className="image" src="https://res.cloudinary.com/remezcla/images/f_auto,q_auto/v1639757764/production/El_Chapulin_Colorado_Film/El_Chapulin_Colorado_Film.jpeg?_i=AA"  alt=""/>
                </div>
            </div>
            <div className="phraseGroupFrame">
                <p className="phrase">¡No contaban con mi astucia!</p>
                <p className="phrase">Se aprovechan de mi nobleza</p>
                <p className="phrase">Síganme los buenos</p>
                <p className="phrase">Que no panda el cúnico</p>
            </div>
        </div>
        <div className="phraseAuthorBlock">
            <div className="phraseAuthorInfoFrame">
                <h2>Terminator</h2>
                <div>
                    <img className="image" src="https://www.cinematographe.it/wp-content/uploads/2019/11/16hVhjMagAdrMG44A86c3YQ.jpeg"  alt=""/>
                </div>
            </div>
            <div className="phraseGroupFrame">
                <p className="phrase">I'll be back</p>
                <p className="phrase">Hasta la vista, baby</p>
                <p className="phrase">I need your clothes, your boots, and your motorcycle</p>
                <p className="phrase">You're terminated</p>
            </div>
        </div>
        <div className="phraseAuthorBlock">
            <div className="phraseAuthorInfoFrame">
                <h2>Star Wars</h2>
                <div>
                    <img className="image" src="https://www.fanbolt.com/storage/2021/10/Star-Wars-Quotes.jpg" alt=""/>
                </div>
            </div>
            <div className="phraseGroupFrame">
                <p className="phrase">May the Force be with you</p>
                <p className="phrase">I am your father</p>
                <p className="phrase">A long time ago in a galaxy far, far away…</p>
                <p className="phrase">The dark side is in our blood</p>
            </div>
        </div>
    </div>;
}

/*
 * Para ir poniendo los flexbox progresivamente e ir viendo el efecto   
 */
function App05NoFlexbox() {
    return <div className="containerPrueba">
        <div className="titleFramePrueba">
            <h1 className="title">Frases célebres</h1>
        </div>
        <div className="phraseAuthorBlockPrueba">
            <div className="phraseAuthorInfoFramePrueba">
                <h2>Chapulín colorado</h2>
                <div>
                    <img className="image" src="https://res.cloudinary.com/remezcla/images/f_auto,q_auto/v1639757764/production/El_Chapulin_Colorado_Film/El_Chapulin_Colorado_Film.jpeg?_i=AA" alt="" />
                </div>
            </div>
            <div className="phraseGroupFramePrueba">
                <p className="phrase">¡No contaban con mi astucia!</p>
                <p className="phrase">Se aprovechan de mi nobleza</p>
                <p className="phrase">Síganme los buenos</p>
                <p className="phrase">Que no panda el cúnico</p>
            </div>
        </div>
        <div className="phraseAuthorBlockPrueba">
            <div className="phraseAuthorInfoFramePrueba">
                <h2>Terminator</h2>
                <div>
                    <img className="image" src="https://www.cinematographe.it/wp-content/uploads/2019/11/16hVhjMagAdrMG44A86c3YQ.jpeg" alt="" />
                </div>
            </div>
            <div className="phraseGroupFramePrueba">
                <p className="phrase">I'll be back</p>
                <p className="phrase">Hasta la vista, baby</p>
                <p className="phrase">I need your clothes, your boots, and your motorcycle</p>
                <p className="phrase">You're terminated</p>
            </div>
        </div>
        <div className="phraseAuthorBlockPrueba">
            <div className="phraseAuthorInfoFramePrueba">
                <h2>Star Wars</h2>
                <div>
                    <img className="image" src="https://www.fanbolt.com/storage/2021/10/Star-Wars-Quotes.jpg" alt="" />
                </div>
            </div>
            <div className="phraseGroupFramePrueba">
                <p className="phrase">May the Force be with you</p>
                <p className="phrase">I am your father</p>
                <p className="phrase">A long time ago in a galaxy far, far away…</p>
                <p className="phrase">The dark side is in our blood</p>
            </div>
        </div>
    </div>;
}

export const App = App05;
