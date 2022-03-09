import { useEffect, useState } from 'react';
import { getAllPhrases } from '../../services/phrases';
import classes from '../authorsAndPhrases/AuthorsAndPhrases.module.css'


export function Phrases() {
    const [colorForPhrases, setColorForPhrases] = useState("crimson");
    const [phrases, setPhrases] = useState([]);

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
        {colorForPhrases && <div className={classes.phraseList}>
            {phrases.map(phrase => (
                <div key={phrase} className={`${classes.phrase} ${classes["phrase-tall"]}`} style={{ color: colorForPhrases }}>
                    {phrase}
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
