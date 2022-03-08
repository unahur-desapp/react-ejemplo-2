import classes from './AuthorsAndPhrases.module.css'

const CHAPULIN_DATA = {
    title: 'Chapulín colorado',
    imageSrc: "https://res.cloudinary.com/remezcla/images/f_auto,q_auto/v1639757764/production/El_Chapulin_Colorado_Film/El_Chapulin_Colorado_Film.jpeg?_i=AA",
    phrases: ["¡No contaban con mi astucia!", "Se aprovechan de mi nobleza",
        "Síganme los buenos", "Que no panda el cúnico", "Todos mis movimientos están fríamente calculados"],
}

const TERMINATOR_DATA = {
    title: 'Terminator',
    imageSrc: "https://www.cinematographe.it/wp-content/uploads/2019/11/16hVhjMagAdrMG44A86c3YQ.jpeg",
    phrases: ["I'll be back", "Hasta la vista, baby",
        "I need your clothes, your boots, and your motorcycle", "You're terminated"],
}

const STAR_WARS_DATA = {
    title: 'Star Wars',
    imageSrc: "https://www.fanbolt.com/storage/2021/10/Star-Wars-Quotes.jpg",
    phrases: ["May the Force be with you", "I am your father",
        "A long time ago in a galaxy far, far away...", "The dark side is in our blood"],
}


export function AuthorsAndPhrases() {
    return (<>
        <PhrasesBox title={CHAPULIN_DATA.title} imageSrc={CHAPULIN_DATA.imageSrc} phrases={CHAPULIN_DATA.phrases} />
        <PhrasesBox title={TERMINATOR_DATA.title} imageSrc={TERMINATOR_DATA.imageSrc} phrases={TERMINATOR_DATA.phrases} />
        <PhrasesBox title={STAR_WARS_DATA.title} imageSrc={STAR_WARS_DATA.imageSrc} phrases={STAR_WARS_DATA.phrases} />
    </>);
}

function PhrasesBox(props) {
    const { title, imageSrc, phrases } = props;

    return <div className={classes.phraseAuthorBlock}>
        <div className={classes.phraseAuthorInfoFrame}>
            <h2>{title} - {phrases.length} frases</h2>
            <div>
                <img className={classes.image} src={imageSrc} alt="" />
            </div>
        </div>
        <div className={classes.phraseGroupFrame}>
            {phrases.map(phrase => <p key={phrase} className={classes.phrase}>{phrase}</p>)}
        </div>
    </div>
}

