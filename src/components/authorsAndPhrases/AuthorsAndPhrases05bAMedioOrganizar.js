import { useState } from 'react';
import classes from './AuthorsAndPhrases.module.css'

const CHAPULIN_DATA = {
    title: 'Chapulín colorado',
    imageSrcs: [
        "https://res.cloudinary.com/remezcla/images/f_auto,q_auto/v1639757764/production/El_Chapulin_Colorado_Film/El_Chapulin_Colorado_Film.jpeg?_i=AA",
        "https://pbs.twimg.com/media/ERU824XUEAAghak?format=jpg&name=small",
        "https://elcomercio.pe/resizer/ndsPchTHlIlk5uVBeYPlkyRECaM=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/WPCSYPOK3BFHTOCVQHWMS66FII.jpg",
    ],
    phrases: ["¡No contaban con mi astucia!", "Se aprovechan de mi nobleza",
        "Síganme los buenos", "Que no panda el cúnico", "Todos mis movimientos están fríamente calculados"],
}

const TERMINATOR_DATA = {
    title: 'Terminator',
    imageSrcs: [
        "https://www.cinematographe.it/wp-content/uploads/2019/11/16hVhjMagAdrMG44A86c3YQ.jpeg",
        "https://cdn.pastemagazine.com/www/articles/2021/07/03/T2-header.jpg",
    ],
    phrases: ["I'll be back", "Hasta la vista, baby",
        "I need your clothes, your boots, and your motorcycle", "You're terminated"],
}

const STAR_WARS_DATA = {
    title: 'Star Wars',
    imageSrcs: [
        "https://www.fanbolt.com/storage/2021/10/Star-Wars-Quotes.jpg",
        "https://insolenzadir2d2.it/wp-content/uploads/2016/11/r2d2-and-c3po-star-wars.jpg",
    ],
    phrases: ["May the Force be with you", "I am your father",
        "A long time ago in a galaxy far, far away...", "The dark side is in our blood"],
}


export function AuthorsAndPhrases() {
    return (<>
        <PhrasesBox title={CHAPULIN_DATA.title} imageSrcs={CHAPULIN_DATA.imageSrcs} phrases={CHAPULIN_DATA.phrases} />
        <PhrasesBox title={TERMINATOR_DATA.title} imageSrcs={TERMINATOR_DATA.imageSrcs} phrases={TERMINATOR_DATA.phrases} />
        <PhrasesBox title={STAR_WARS_DATA.title} imageSrcs={STAR_WARS_DATA.imageSrcs} phrases={STAR_WARS_DATA.phrases} />
    </>);
}

function PhrasesBox(props) {
    const { title, imageSrcs, phrases } = props;
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [colorForPhrases, setColorForPhrases] = useState("crimson");

    const colorStyle = { color: colorForPhrases };
    const noPhrasesStyle = { marginTop: "2rem" };

    return <div className={classes.phraseAuthorBlock}>
        <div className={classes.phraseAuthorInfoFrame}>
            <h2>{title} - {phrases.length} frases</h2>
            <div className={classes.authorImagesFrame}>
                <div className={classes.authorImageSelectorBar}>
                    <button onClick={() => { setSelectedImageIndex(0) }}>Foto 1</button>
                    <button onClick={() => { setSelectedImageIndex(1) }}>Foto 2</button>
                    <div>Foto elegida: {selectedImageIndex + 1}</div>
                </div>
                <img className={classes.image2} src={imageSrcs[selectedImageIndex]} alt="" />
            </div>
        </div>
        <div className={`${classes.phraseGroupFrame}`}>
            <div>
                <button onClick={() => setColorForPhrases("crimson")} style={{ color: "crimson" }}>crimson</button>
                <button onClick={() => setColorForPhrases("slateblue")} style={{ color: "slateblue" }}>slateblue</button>
                <button onClick={() => setColorForPhrases("mediumseagreen")} style={{ color: "mediumseagreen" }}>mediumseagreen</button>
                <button onClick={() => setColorForPhrases(null)}>No mostrar</button>
            </div>
            {colorForPhrases && <div>
                {phrases.map(phrase =>
                    <div key={phrase} className={`${classes.phrase} ${classes["phrase-div"]}`} style={colorStyle}>
                        {phrase}
                    </div>
                )}
            </div>}
            {!colorForPhrases && <div className={`${classes.phrase} ${classes["phrase-div"]}`} style={noPhrasesStyle}>
                ... elegir un color para ver las frases ...
            </div>}
        </div>
    </div>
}

