import { useState } from 'react';
import classes from './AuthorsAndPhrases.module.css'

const CHAPULIN_DATA = {
    id: 1,
    title: 'Chapulín colorado',
    imageSrc: "https://res.cloudinary.com/remezcla/images/f_auto,q_auto/v1639757764/production/El_Chapulin_Colorado_Film/El_Chapulin_Colorado_Film.jpeg?_i=AA",
    phrases: ["¡No contaban con mi astucia!", "Se aprovechan de mi nobleza",
        "Síganme los buenos", "Que no panda el cúnico", "Todos mis movimientos están fríamente calculados"],
}

const TERMINATOR_DATA = {
    id: 2,
    title: 'Terminator',
    imageSrc: "https://www.cinematographe.it/wp-content/uploads/2019/11/16hVhjMagAdrMG44A86c3YQ.jpeg",
    phrases: ["I'll be back", "Hasta la vista, baby",
        "I need your clothes, your boots, and your motorcycle", "You're terminated"],
}

const STAR_WARS_DATA = {
    id: 3,
    title: 'Star Wars',
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1920px-Star_Wars_Logo.svg.png",
    phrases: ["May the Force be with you", "I am your father",
        "A long time ago in a galaxy far, far away...", "The dark side is in our blood"],
}

const PhrasesBox = PhrasesBoxBeforeButtons;

export function AuthorsAndPhrases() {
    return (<>
        <PhrasesBox title={CHAPULIN_DATA.title} imageSrc={CHAPULIN_DATA.imageSrc} phrases={CHAPULIN_DATA.phrases} />
        <PhrasesBox title={TERMINATOR_DATA.title} imageSrc={TERMINATOR_DATA.imageSrc} phrases={TERMINATOR_DATA.phrases} />
        <PhrasesBox title={STAR_WARS_DATA.title} imageSrc={STAR_WARS_DATA.imageSrc} phrases={STAR_WARS_DATA.phrases} />
    </>);
}

function PhrasesBoxBeforeButtons(props) {
    const { title, imageSrc, phrases } = props;

    return <div className={classes.phraseAuthorBlock2}>
        <div className={classes.phraseAuthorInfoFrame}>
            <h2 className='authorTitle'>{title} - {phrases.length} frases</h2>
            <div>
                <img className={classes.image} src={imageSrc} alt="" />
            </div>
        </div>
        <div className={`${classes.phraseGroupFrame} ${classes.phraseGroupWithColorChange}`}>
            <div className={classes.colorSelectionBar}>
                <button>Color 1</button>
                <button>Color 2</button>
                <button>Color 3</button>
            </div>
            <div className={classes.phraseGroupUnderColorChange}>
                {phrases.map(phrase => <div key={phrase} className={`${classes.phrase} ${classes["phrase-div"]}`}>{phrase}</div>)}
            </div>
        </div>
    </div>
}

function PhrasesBoxWithButtons(props) {
    const { title, imageSrc, phrases } = props;

    return <div className={classes.phraseAuthorBlock2}>
        <div className={classes.phraseAuthorInfoFrame}>
            <h2 className='authorTitle'>{title} - {phrases.length} frases</h2>
            <div>
                <img className={classes.image} src={imageSrc} alt="" />
            </div>
        </div>
        <div className={`${classes.phraseGroupFrame} ${classes.phraseGroupWithColorChange}`}>
            <div className={classes.colorSelectionBar}>
                <button onClick={() => console.log("Cambiando a crimson")} style={{ color: "crimson" }}>crimson</button>
                <button onClick={() => console.log("Cambiando a slateblue")} style={{ color: "slateblue" }}>slateblue</button>
                <button onClick={() => console.log("Cambiando a black")} style={{ color: "black" }}>black</button>
            </div>
            <div>
                Color elegido: crimson
            </div>
            <div className={classes.phraseGroupUnderColorChange}>
                {phrases.map(phrase => <div key={phrase} className={`${classes.phrase} ${classes["phrase-div"]}`}>{phrase}</div>)}
            </div>
        </div>
    </div>
}

function PhrasesBoxWithState(props) {
    const { title, imageSrc, phrases } = props;
    const [colorForPhrases, setColorForPhrases] = useState("black");
 
    return <div className={classes.phraseAuthorBlock2}>
        <div className={classes.phraseAuthorInfoFrame}>
            <h2 className='authorTitle'>{title} - {phrases.length} frases</h2>
            <div>
                <img className={classes.image} src={imageSrc} alt="" />
            </div>
        </div>
        <div className={`${classes.phraseGroupFrame} ${classes.phraseGroupWithColorChange}`}>
            <div className={classes.colorSelectionBar}>
                <button onClick={() => setColorForPhrases("crimson")} style={{ color: "crimson" }}>crimson</button>
                <button onClick={() => setColorForPhrases("slateblue")} style={{ color: "slateblue" }}>slateblue</button>
                <button onClick={() => setColorForPhrases("black")} style={{ color: "black" }}>black</button>
            </div>
            <div>
                Color elegido: {colorForPhrases}
            </div>
            <div className={classes.phraseGroupUnderColorChange}>
                {phrases.map(phrase => <div key={phrase} className={`${classes.phrase} ${classes["phrase-div"]}`}>{phrase}</div>)}
            </div>
        </div>
    </div>
}

function PhrasesBoxActuallyChangingColors(props) {
    const { title, imageSrc, phrases } = props;
    const [colorForPhrases, setColorForPhrases] = useState("crimson");

    return <div className={classes.phraseAuthorBlock2}>
        <div className={classes.phraseAuthorInfoFrame}>
            <h2 className='authorTitle'>{title} - {phrases.length} frases</h2>
            <div>
                <img className={classes.image} src={imageSrc} alt="" />
            </div>
        </div>
        <div className={`${classes.phraseGroupFrame} ${classes.phraseGroupWithColorChange}`}>
            <div className={classes.colorSelectionBar}>
                {["crimson", "slateblue", "mediumseagreen"].map(
                    color => <button key={color} onClick={() => setColorForPhrases(color)} style={{ color }}>{color}</button>)}
                <button key="no-mostrar" onClick={() => setColorForPhrases(null)}>No mostrar</button>
            </div>
            {colorForPhrases && <div className={classes.phraseGroupUnderColorChange}>
                {phrases.map(phrase => (
                    <div key={phrase} className={`${classes.phrase} ${classes["phrase-div"]}`} style={{ color: colorForPhrases }}>
                        {phrase}
                    </div>
                ))}
            </div>}
            {!colorForPhrases && <div style={{ marginTop: "2rem"}}>
                <div className={`${classes.phrase} ${classes["phrase-div"]}`}>
                    ... elegir un color para ver las frases ...
                </div>
            </div>}
        </div>
    </div>
}
