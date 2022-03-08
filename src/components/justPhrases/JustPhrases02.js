import { useState } from 'react';
import classes from '../authorsAndPhrases/AuthorsAndPhrases.module.css'

const ALL_PHRASES = ["¡No contaban con mi astucia!", "Se aprovechan de mi nobleza",
        "Síganme los buenos", "Que no panda el cúnico", "Todos mis movimientos están fríamente calculados",
        "I'll be back", "Hasta la vista, baby",
        "I need your clothes, your boots, and your motorcycle", "You're terminated",
        "May the Force be with you", "I am your father",
        "A long time ago in a galaxy far, far away...", "The dark side is in our blood"];

export function Phrases() {
    const [colorForPhrases, setColorForPhrases] = useState("crimson");

    const phrases = ALL_PHRASES;

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
