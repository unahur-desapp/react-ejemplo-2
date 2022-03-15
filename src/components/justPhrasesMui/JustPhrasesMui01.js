import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addPhrase, deletePhrase, getAllPhrases } from "../../services/phrases";
import classes from './JustPhrases-mui.module.css'
import { grey } from '@mui/material/colors';
import { useTheme } from "@mui/system";
import useMediaQuery from '@mui/material/useMediaQuery';

export function Phrases() {
    const [colorForPhrases, setColorForPhrases] = useState("crimson");
    const [phrases, setPhrases] = useState(null);

    const muiTheme = useTheme();
    const isShortScreen = useMediaQuery(muiTheme.breakpoints.down('md'));

    console.log('rendering Phrases')
    console.log(isShortScreen)

    const fetchPhrases = async () => {
        const obtainedPhrases = await getAllPhrases();
        setPhrases(obtainedPhrases);
    }
    useEffect(() => {
        setTimeout(async () => {
            fetchPhrases();
        }, 200);
    }, []);

    return <Stack className={classes.allPhrasesFrame}>
        <div className={`${classes.colorSelectionBar} ${classes.expandedColorSelectionBar}`}>
            {["crimson", "slateblue", "mediumseagreen"].map(
                color => <Button variant="contained" color="relaxed" size={isShortScreen ? "small" : "medium"}
                    key={color} onClick={() => setColorForPhrases(color)} 
                    // sx={{ color, backgroundColor: grey[200], "&:hover": { backgroundColor: grey[300] } }} 
                    sx={{ color }}
                >
                    {color}
                </Button>
            )}
            <Button key="no-mostrar" onClick={() => setColorForPhrases(null)} variant="contained" color="relaxed">No mostrar</Button>
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
    </Stack>
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

