import { useEffect, useState } from 'react';
import { getAllPhrases } from '../../services/phrases';
import classes from '../authorsAndPhrases/AuthorsAndPhrases.module.css'


export function Phrases() {

    /* versiones que no funcionan */
    
    // const obtainedPhrases = await getAllPhrases();
    // console.log(obtainedPhrases);
    // setPhrases(obtainedPhrases);

    // let phrases = [];
    // const fetchPhrases = async () => {
    //     const obtainedPhrases = await getAllPhrases();
    //     console.log(obtainedPhrases);
    //     phrases = obtainedPhrases;
    // }
    // fetchPhrases();

    // const [phrases, setPhrases] = useState([]);
    // const fetchPhrases = async () => {
    //     const obtainedPhrases = await getAllPhrases();
    //     console.log("--------------------  se obtuvieron estas frases")
    //     console.log(obtainedPhrases);
    //     setPhrases(obtainedPhrases);
    // }
    // if (phrases.length === 0) {
    //     fetchPhrases();
    // }


    const [colorForPhrases, setColorForPhrases] = useState("crimson");
    const [phrases, setPhrases] = useState(null);


    const fetchPhrases = async () => {
        const obtainedData = await getAllPhrases();
        setPhrases(obtainedData);
    }

    useEffect(() => {
        setTimeout(async () => {
            fetchPhrases();
        }, 1200); 
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
                <div key={phrase} className={`${classes.phrase} ${classes["phrase-tall"]}`} style={{ color: colorForPhrases }}>
                    {phrase}
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
