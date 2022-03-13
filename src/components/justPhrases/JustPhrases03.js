import { useEffect, useState } from 'react';
import { deletePhrase, getAllPhrases } from '../../services/phrases';
import classes from '../authorsAndPhrases/AuthorsAndPhrases.module.css'

export const Phrases = PhrasesDeleteAndRefresh;

function PhrasesJustDelete() {
    const [colorForPhrases, setColorForPhrases] = useState("crimson");
    const [phrases, setPhrases] = useState(null);

    useEffect(() => {
        const fetchPhrases = async () => {
            const obtainedData = await getAllPhrases();
            setPhrases(obtainedData);
        }
        fetchPhrases();
    }, []);

    return <div className={classes.allPhrasesFrame}>
        <div className={`${classes.colorSelectionBar} ${classes.expandedColorSelectionBar}`}>
            {["crimson", "slateblue", "mediumseagreen"].map(
                color => <button key={color} onClick={() => setColorForPhrases(color)} style={{ color }}>{color}</button>)}
            <button key="no-mostrar" onClick={() => setColorForPhrases(null)}>No mostrar</button>
        </div>
        {!phrases && <div style={{ marginTop: "2rem" }}>
            <div className={`${classes.phrase} ${classes["phrase-tall"]}`}>
                ... cargando frases ...
            </div>
        </div>}
        {phrases && colorForPhrases && <div className={classes.phraseList}>
            {phrases.map(phrase => (
                <div key={phrase}
                    className={`${classes.phrase} ${classes["phrase-tall"]} ${classes["phrase-with-button"]}`}
                    style={{ color: colorForPhrases }}
                >
                    <div>{phrase}</div>
                    <div>
                        <button onClick={() => { deletePhrase(phrase) }}>Eliminar</button>
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


function PhrasesDeleteAndRefresh() {
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
