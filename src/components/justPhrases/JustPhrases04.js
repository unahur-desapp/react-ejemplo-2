import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addPhrase, deletePhrase, getAllPhrases } from '../../services/phrases';
import classes from '../authorsAndPhrases/AuthorsAndPhrases.module.css'

export const Phrases = PhrasesSeparated;
const AddPhrase = AddPhraseValidationWhileTyping;

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
                setShowAdd(false);
                setNewPhrase("");
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

    return showAdd
        ? <div className={classes.addPhraseFrame} onClick={() => console.log("click en zona agregar frase")}>
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
                } else {
                    toast.error("la frase debe tener al menos 5 caracteres");
                }
            }}>Agregar</button>
            <div style={{ flexGrow: 1 }} />
            <div className={classes.plusButton} onClick={() => {
                setShowAdd(false); setNewPhrase("");
            }}>
                -
            </div>
        </div>
        : <div className={classes.plusButtonFrame}>
            <div className={classes.plusButton} onClick={() => setShowAdd(true)}>
                +
            </div>
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
