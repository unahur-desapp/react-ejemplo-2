import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addPhrase, deletePhrase, getAllPhrases } from '../../services/phrases';
import classes from '../authorsAndPhrases/AuthorsAndPhrases.module.css'


// PhrasesWithAddInSameComponent - versión sencilla, toda en un único componente. El form para nueva frase aparece fijo.
// PhrasesSeparated - se separa AddPhrase en un componente aparte, hay que mandar fetchPhrases por prop
// PhrasesSeparated2 - renderizado condicional a que muestre las frases (esto para meterlo más adelante)
export const Phrases = PhrasesSeparated2;

// AddPhraseFirstVersion - Botón + para renderización condicional del form para nueva frase, se esconde cuando se acepta la nueva frase.
//      - validación cuando se le da Enter, uso de toast
// AddPhraseValidationWhileTyping - varias cosas
//      - validación mientras se tipea (debate controlled vs uncontrolled), aparece en un div aparte
//      - agregar validación "empieza con mayúscula" - ¿cómo saber que empieza con mayúscula? - regexp
//      - se agrega botón - para cerrar el form para agregar frase, al agregar una frase no se cierra. Ver uso de flex-grow para empujar a los costados.
// AddPhraseValidationAfterFirstKeystroke - varias cosas
//      - no validar hasta que se toque un caracter
//      - No repetir lógica de validación
//      - deshabilitar el botón si es inválido
//      - renderizar el + y el - como botones, para que ande bien el tabOrder

const AddPhrase = AddPhraseValidationAfterFirstKeystroke;

function AddPhraseFirstVersion(props) {
    const { fetchPhrases } = props;
    const [showAdd, setShowAdd] = useState(false);
    const [newPhrase, setNewPhrase] = useState("");  // qué pasa si se deja undefined ...

    return showAdd
    ? <div className={classes.addPhraseFrame}>
        <span>
            Nueva frase
        </span>
        <input value={newPhrase} onChange={event => setNewPhrase(event.target.value)}
                style={{ width: "40%", marginLeft: "2rem", marginRight: "2rem" }}
        />
        <button onClick={async () => {
            if (newPhrase && newPhrase.length > 5) {
                await addPhrase(newPhrase);
                toast.success("Frase agregada");
                await fetchPhrases();
                setNewPhrase("");
                // setShowAdd(false);
            } else {
                toast.error("la frase debe tener al menos 5 caracteres");
            }
        }}>Agregar</button>
    </div>
    : <div className={classes.plusButtonFrame}>
        <div className={classes.plusButton} onClick={() => setShowAdd(true)}>
            +
        </div>
    </div>
}

function AddPhraseValidationWhileTyping(props) {
    const { fetchPhrases } = props;
    const [showAdd, setShowAdd] = useState(false);
    const [newPhrase, setNewPhrase] = useState("");  // qué pasa si se deja undefined ...

    // Cómo saber si una letra es mayúscula - todo un tema
    // cfr https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip, 
    // ver la respuesta de KooiInc, hay muchas otras
    //
    // const isProperStartChar = char => (char >= 'A' && char <= 'Z') || char === '¿' || char === '¡' || (char >= '0' && char <= '9');
    // const isProperStartChar = char => /([A-Z]|[0-9]|¿|!)/.test(char);
    const isProperStartChar = char => /([A-Z]|[0-9]|¿|!|[\u0080-\u024F])/.test(char) && char.toUpperCase() === char;

    const validationMessage = newPhrase.length < 5 
        ? "La frase debe tener al menos 5 caracteres" 
        : newPhrase.length > 0 && !isProperStartChar(newPhrase[0]) ? "La frase debe empezar con mayúscula, número o signo de apertura ¿ ¡" : null;

    return showAdd
        ? <div className={classes.addPhraseFrameWithValidation}>
            <div className={classes.addPhraseLine}>
                <span>
                    Nueva frase
                </span>
                <input value={newPhrase} onChange={event => setNewPhrase(event.target.value)}
                    style={{ width: "40%", marginLeft: "2rem", marginRight: "2rem" }}
                />
                <button onClick={async () => {
                    if (newPhrase.length > 5) {
                        await addPhrase(newPhrase);
                        toast.success("Frase agregada");
                        await fetchPhrases();
                        setNewPhrase("");
                    } else {
                        toast.error("La frase debe tener al menos 5 caracteres");
                    }
                }}>Agregar</button>
                <div style={{ flexGrow: 1 }} />
                <div className={classes.plusButton} onClick={() => {
                    setShowAdd(false); setNewPhrase("");
                }}>
                    -
                </div>
            </div>
            {validationMessage && <div className={classes.addPhraseValidation}>
                {validationMessage}
            </div>}
            
        </div>
        : <div className={classes.plusButtonFrame}>
            <div className={classes.plusButton} onClick={() => setShowAdd(true)}>
                +
            </div>
        </div>
}

/*
 * En rigor varias cosas
 * - no validar hasta que se toque un caracter
 * - No repetir lógica de validación
 * - deshabilitar el botón si es inválido
 * - renderizar el + y el - como botones, para que ande bien el tabOrder
 */
function AddPhraseValidationAfterFirstKeystroke(props) {
    const { fetchPhrases } = props;
    const [showAdd, setShowAdd] = useState(false);
    const [newPhrase, setNewPhrase] = useState(""); 
    const [touched, setTouched] = useState(false);  

    const isProperStartChar = char => /([A-Z]|[0-9]|¿|!|[\u0080-\u024F])/.test(char) && char.toUpperCase() === char;

    const validationMessage = newPhrase.length < 5
        ? "La frase debe tener al menos 5 caracteres"
        : newPhrase.length > 0 && !isProperStartChar(newPhrase[0]) ? "La frase debe empezar con mayúscula, número o signo de apertura ¿ ¡" : null;

    return showAdd
        ? <div className={classes.addPhraseFrameWithValidation}>
            <div className={classes.addPhraseLine}>
                <span>
                    Nueva frase
                </span>
                <input value={newPhrase} onChange={event => {
                    setNewPhrase(event.target.value);
                    setTouched(true);
                }}
                    style={{ width: "40%", marginLeft: "2rem", marginRight: "2rem" }}
                />
                <button disabled={!!validationMessage} onClick={async () => {
                    if (!validationMessage) {
                        await addPhrase(newPhrase);
                        toast.success("Frase agregada");
                        await fetchPhrases();
                        setNewPhrase("");
                    } else {
                        toast.error(validationMessage);
                    }
                }}>Agregar</button>
                <div style={{ flexGrow: 1 }} />
                <button className={classes.plusButton} onClick={() => {
                    setShowAdd(false); setNewPhrase(""); setTouched(false);
                }}>
                    -
                </button>
            </div>
            {touched && validationMessage && <div className={classes.addPhraseValidation}>
                {validationMessage}
            </div>}

        </div>
        : <div className={classes.plusButtonFrame}>
            <button className={classes.plusButton} onClick={() => setShowAdd(true)}>
                +
            </button>
        </div>
}


function PhrasesWithAddInSameComponent() {
    const [colorForPhrases, setColorForPhrases] = useState("crimson");
    const [phrases, setPhrases] = useState([]);
    const [newPhrase, setNewPhrase] = useState("");  // qué pasa si se deja undefined ...

    const fetchPhrases = async () => {
        const obtainedData = await getAllPhrases();
        setPhrases(obtainedData);
    }

    useEffect(() => {
        fetchPhrases();
    }, []);

    return <div className={classes.allPhrasesFrame}>
        {/* color change buttons */}
        <div className={`${classes.colorSelectionBar} ${classes.expandedColorSelectionBar}`}>
            {["crimson", "slateblue", "mediumseagreen"].map(
                color => <button key={color} onClick={() => setColorForPhrases(color)} style={{ color }}>{color}</button>)}
            <button key="no-mostrar" onClick={() => setColorForPhrases(null)}>No mostrar</button>
        </div>

        {/* add phrase */}
        <div className={classes.addPhraseFrame}>
            <span>
                Nueva frase
            </span>
            <input value={newPhrase} onChange={event => setNewPhrase(event.target.value)}
                style={{ width: "500px", marginLeft: "2rem", marginRight: "2rem" }}
            />
            <button onClick={async () => {
                await addPhrase(newPhrase);
                await fetchPhrases();
                // setNewPhrase("");
            }}>Agregar</button>
        </div>

        {/* show phrases */}
        {colorForPhrases && <div className={classes.phraseList}>
            {phrases.map(phrase => (
                <div key={phrase}
                    className={`${classes.phrase} ${classes["phrase-tall"]} ${classes["phrase-with-button"]}`}
                    style={{ color: colorForPhrases }}
                >
                    <div>{phrase}</div>
                    <div>
                        <button onClick={async () => { 
                            await deletePhrase(phrase);
                            await fetchPhrases();
                        }}>Eliminar</button>
                    </div>
                </div>
            ))}
        </div>}
        {!colorForPhrases && <div style={{ marginTop: "2rem" }}>
            <div className={`${classes.phrase} ${classes["phrase-tall"]}`}>
                ... elegir un color para ver las frases ...
            </div>
        </div>}
    </div>
}

function PhrasesSeparated() {
    const [colorForPhrases, setColorForPhrases] = useState("crimson");
    const [phrases, setPhrases] = useState([]);

    const fetchPhrases = async () => {
        const obtainedData = await getAllPhrases();
        setPhrases(obtainedData);
    }

    useEffect(() => {
        fetchPhrases();
    }, []);

    return <div className={classes.allPhrasesFrame}>
        <div className={`${classes.colorSelectionBar} ${classes.expandedColorSelectionBar}`}>
            {["crimson", "slateblue", "mediumseagreen"].map(
                color => <button key={color} onClick={() => setColorForPhrases(color)} style={{ color }}>{color}</button>)}
            <button key="no-mostrar" onClick={() => setColorForPhrases(null)}>No mostrar</button>
        </div>
        <AddPhrase fetchPhrases={fetchPhrases} />
        {colorForPhrases && <div className={classes.phraseList}>
            {phrases.map(phrase => (
                <div key={phrase}
                    className={`${classes.phrase} ${classes["phrase-tall"]} ${classes["phrase-with-button"]}`}
                    style={{ color: colorForPhrases }}
                >
                    <div>{phrase}</div>
                    <div>
                        <button onClick={async () => {
                            await deletePhrase(phrase);
                            await fetchPhrases();
                        }}>Eliminar</button>
                    </div>
                </div>
            ))}
        </div>}
        {!colorForPhrases && <div style={{ marginTop: "2rem" }}>
            <div className={`${classes.phrase} ${classes["phrase-tall"]}`}>
                ... elegir un color para ver las frases ...
            </div>
        </div>}
    </div>
}

/*
 * No muestra el AddPhrase si no se están viendo las frases
 */
function PhrasesSeparated2() {
    const [colorForPhrases, setColorForPhrases] = useState("crimson");
    const [phrases, setPhrases] = useState([]);

    const fetchPhrases = async () => {
        const obtainedData = await getAllPhrases();
        setPhrases(obtainedData);
    }

    useEffect(() => {
        fetchPhrases();
    }, []);

    return <div className={classes.allPhrasesFrame}>
        <div className={`${classes.colorSelectionBar} ${classes.expandedColorSelectionBar}`}>
            {["crimson", "slateblue", "mediumseagreen"].map(
                color => <button key={color} onClick={() => setColorForPhrases(color)} style={{ color }}>{color}</button>)}
            <button key="no-mostrar" onClick={() => setColorForPhrases(null)}>No mostrar</button>
        </div>
        {colorForPhrases && <AddPhrase fetchPhrases={fetchPhrases} />}
        {colorForPhrases && <div className={classes.phraseList}>
            {phrases.map(phrase => (
                <div key={phrase}
                    className={`${classes.phrase} ${classes["phrase-tall"]} ${classes["phrase-with-button"]}`}
                    style={{ color: colorForPhrases }}
                >
                    <div>{phrase}</div>
                    <div>
                        <button onClick={async () => {
                            await deletePhrase(phrase);
                            await fetchPhrases();
                        }}>Eliminar</button>
                    </div>
                </div>
            ))}
        </div>}
        {!colorForPhrases && <div style={{ marginTop: "2rem" }}>
            <div className={`${classes.phrase} ${classes["phrase-tall"]}`}>
                ... elegir un color para ver las frases ...
            </div>
        </div>}
    </div>
}
