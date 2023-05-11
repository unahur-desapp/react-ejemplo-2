import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";

import { addPhrase, deletePhrase, getAllPhrases } from "../../services/phrases";
import classes from '../authorsAndPhrases/AuthorsAndPhrases.module.css'

export function Phrases() {
    const [colorForPhrases, setColorForPhrases] = useState("crimson");
    const [phrases, setPhrases] = useState(null);

    const muiTheme = useTheme();
    const isNarrowScreen = useMediaQuery(muiTheme.breakpoints.down('md'));

    console.log('---------------------- ejecutando Phrases')
    console.log(phrases)

    const fetchPhrases = async () => {
        const obtainedPhrases = await getAllPhrases();
        console.log("--------------------  se obtuvieron estas frases")
        console.log(obtainedPhrases);
        setPhrases(obtainedPhrases);
    }
    useEffect(() => {
        setTimeout(async () => {
            fetchPhrases();
        }, 200);
    }, []);

    return <div className={classes.allPhrasesFrame}>
        <div className={`${classes.colorSelectionBar} ${classes.expandedColorSelectionBar}`}>
            {["crimson", "slateblue", "mediumseagreen"].map( color => 
                <Button 
                    key={color} variant="contained" color="relaxed" size={isNarrowScreen ? "medium" : "large"}
                    onClick={() => setColorForPhrases(color)} style={{ color }}
                >
                    {color}
                </Button>
            )}
            <button key="no-mostrar" onClick={() => setColorForPhrases(null)}>No mostrar</button>
        </div>

        {/* add phrase */}
        <AddPhrase onAdd={fetchPhrases} />

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
                    <Typography variant={isNarrowScreen ? "body2" : "bigText"} component="div">{phrase}</Typography>
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

function AddPhrase(props) {
    const [newPhrase, setNewPhrase] = useState("");
    const [touched, setTouched] = useState(false);
    const [isCompressed, setIsCompressed] = useState(true);

    const validationMessage = (newPhrase.length < 5)
        ? "La frase tiene que tener al menos 5 caracteres."
        : (!(newPhrase[0] !== newPhrase[0].toLowerCase() || ["0123456789¿!"].includes(newPhrase[0])))
            ? "La frase debe empezar con mayúscula, dígito o signo que abre (¿!)." : null; // "";

    return isCompressed
        ? <button className={`${classes.plusButton} ${classes.plusButtonFrame}`} onClick={() => setIsCompressed(false)}>
            +
        </button>
        : <div className={classes.addPhraseFrameWithValidation}>
            <div className={classes.addPhraseLine}>
                <span>
                    Nueva frase
                </span>
                <input style={{ width: "50%", marginLeft: "2rem", marginRight: "2rem" }} value={newPhrase}
                    onChange={event => { setNewPhrase(event.target.value); setTouched(true); }}
                />
                <button disabled={!!validationMessage} onClick={async () => {
                    toast.success("Frase agregada.");
                    await addPhrase(newPhrase);
                    await props.onAdd();
                    setNewPhrase("");
                    setTouched(false);
                }}>Agregar</button>
                <div style={{ flexGrow: 1 }} />
                <button className={classes.plusButton} onClick={() => setIsCompressed(true)}>
                    -
                </button>
            </div>
            {touched && validationMessage && <div className={classes.addPhraseValidation}>
                {validationMessage}
            </div>}
        </div>;
}

