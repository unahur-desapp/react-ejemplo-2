import { useEffect, useState } from 'react';
import { addPhrase, deletePhrase, getAllPhrases } from '../../services/phrases';
import classes from '../authorsAndPhrases/AuthorsAndPhrases.module.css'


export function Phrases() {
    const [colorForPhrases, setColorForPhrases] = useState("crimson");
    const [phrases, setPhrases] = useState(null);
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
                style={{ width: "50%", marginLeft: "2rem", marginRight: "2rem" }}
            />
            <button onClick={async () => {
                await addPhrase(newPhrase);
                await fetchPhrases();
                setNewPhrase("");
            }}>Agregar</button>
        </div>

        {/* "loading ..." message */}
        {!phrases && <div style={{ marginTop: "2rem" }}>
            <div className={`${classes.phrase} ${classes["phrase-tall"]}`}>
                ... cargando frases ...
            </div>
        </div>}

        {/* show phrases */}
        {phrases && colorForPhrases && <div className={classes.phraseList}>
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
        {phrases && !colorForPhrases && <div style={{ marginTop: "2rem" }}>
            <div className={`${classes.phrase} ${classes["phrase-tall"]}`}>
                ... elegir un color para ver las frases ...
            </div>
        </div>}
    </div>
}


