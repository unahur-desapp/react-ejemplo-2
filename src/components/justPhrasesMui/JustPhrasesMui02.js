import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addPhrase, deletePhrase, getAllPhrases } from "../../services/phrases";
import classes from './JustPhrases-mui-2.module.css'
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

    return <Stack direction="column" className={classes.allPhrasesFrame}>
        <Stack direction="row" justifyContent="space-between" className={classes.colorSelectionBar}>
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
        </Stack>

        {/* add phrase */}
        <AddPhrase onAdd={fetchPhrases} />

        {!phrases && <Box style={{ marginTop: "2rem" }}>
            <Typography variant="bigText" className={classes["phrase-tall"]}>
                ... cargando frases ...
            </Typography>
        </Box>}
        {phrases && colorForPhrases && <Stack direction="column" className={classes.phraseList}>
            {phrases.map(phrase => (
                <Stack key={phrase} direction="row" justifyContent="space-between" 
                    className={`${classes["phrase-tall"]} ${classes["phrase-with-button"]}`}
                    style={{ color: colorForPhrases }}
                >
                    <Typography variant="bigText">{phrase}</Typography>
                    <Button variant="contained" color="relaxed" size="small" endIcon={<DeleteIcon />} onClick={async () => {
                        await deletePhrase(phrase);
                        await fetchPhrases();
                    }}>Eliminar</Button>
                </Stack>
            ))}
        </Stack>}
        {phrases && !colorForPhrases && <Box style={{ marginTop: "2rem" }}>
            <Box className={`${classes.phrase} ${classes["phrase-tall"]}`}>
                ... elegir un color para ver las frases ...
            </Box>
        </Box>}
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
        : <Stack direction="row" alignItems="baseline" className={classes.addPhraseFrame}>
            <Typography variant="subtitle1">
                Nueva frase
            </Typography>
            <TextField variant="standard" style={{ width: "50%", marginLeft: "2rem", marginRight: "2rem" }} 
                value={newPhrase} onChange={event => { setNewPhrase(event.target.value); setTouched(true); }}
                error={touched && validationMessage} helperText={touched && validationMessage}
            />
            <Button variant="contained" color="relaxed" size="small" disabled={!!validationMessage} onClick={async () => {
                toast.success("Frase agregada.");
                await addPhrase(newPhrase);
                await props.onAdd();
                setNewPhrase("");
                setTouched(false);
            }}>Agregar</Button>
            <Box style={{ flexGrow: 1 }} />
            <button className={classes.plusButton} onClick={() => setIsCompressed(true)}>
                -
            </button>
        </Stack>;
}

