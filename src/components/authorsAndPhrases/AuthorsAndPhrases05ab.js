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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1920px-Star_Wars_Logo.svg.png",
        "https://insolenzadir2d2.it/wp-content/uploads/2016/11/r2d2-and-c3po-star-wars.jpg",
    ],
    phrases: ["May the Force be with you", "I am your father",
        "A long time ago in a galaxy far, far away...", "The dark side is in our blood"],
}

const PhrasesBox = PhrasesBoxActuallyChangingColors;

export function AuthorsAndPhrases() {
    return (<>
        <PhrasesBox title={CHAPULIN_DATA.title} imageSrcs={CHAPULIN_DATA.imageSrcs} phrases={CHAPULIN_DATA.phrases} />
        <PhrasesBox title={TERMINATOR_DATA.title} imageSrcs={TERMINATOR_DATA.imageSrcs} phrases={TERMINATOR_DATA.phrases} />
        <PhrasesBox title={STAR_WARS_DATA.title} imageSrcs={STAR_WARS_DATA.imageSrcs} phrases={STAR_WARS_DATA.phrases} />
    </>);
}

function PhrasesBoxBeforeButtons(props) {
    const { title, imageSrc, phrases } = props;
    const [photoIndex, setPhotoIndex] = useState(0);

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
    const { title, imageSrcs, phrases } = props;
    const [photoIndex, setPhotoIndex] = useState(0);

    return <div className={classes.phraseAuthorBlock2}>
        <div className={classes.phraseAuthorInfoFrame}>
            <h2 className='authorTitle'>{title} - {phrases.length} frases</h2>
            <div className={classes.authorImagesFrame}>
                <div className={classes.authorImageSelectorBar}>
                    <button onClick={() => { setPhotoIndex(0) }}>Foto 1</button>
                    <button onClick={() => { setPhotoIndex(1) }}>Foto 2</button>
                </div>
                <img className={classes.image2} src={imageSrcs[photoIndex]} alt="" />
            </div>
        </div>
        <div className={`${classes.phraseGroupFrame} ${classes.phraseGroupWithColorChange}`}>
            <div className={classes.colorSelectionBar}>
                <button onClick={() => console.log("Cambiando a crimson")} style={{ color: "crimson" }}>crimson</button>
                <button onClick={() => console.log("Cambiando a slateblue")} style={{ color: "slateblue" }}>slateblue</button>
                <button onClick={() => console.log("Cambiando a mediumseagreen")} style={{ color: "mediumseagreen" }}>mediumseagreen</button>
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
    const { title, imageSrcs, phrases } = props;
    const [photoIndex, setPhotoIndex] = useState(0);
    const [colorForPhrases, setColorForPhrases] = useState("black");
 
    return <div className={classes.phraseAuthorBlock2}>
        <div className={classes.phraseAuthorInfoFrame}>
            <h2 className='authorTitle'>{title} - {phrases.length} frases</h2>
            <div className={classes.authorImagesFrame}>
                <div className={classes.authorImageSelectorBar}>
                    <button onClick={() => { setPhotoIndex(0) }}>Foto 1</button>
                    <button onClick={() => { setPhotoIndex(1) }}>Foto 2</button>
                </div>
                <img className={classes.image2} src={imageSrcs[photoIndex]} alt="" />
            </div>
        </div>
        <div className={`${classes.phraseGroupFrame} ${classes.phraseGroupWithColorChange}`}>
            <div className={classes.colorSelectionBar}>
                <button onClick={() => setColorForPhrases("crimson")} style={{ color: "crimson" }}>crimson</button>
                <button onClick={() => setColorForPhrases("slateblue")} style={{ color: "slateblue" }}>slateblue</button>
                <button onClick={() => setColorForPhrases("mediumseagreen")} style={{ color: "mediumseagreen" }}>mediumseagreen</button>
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
    const { title, imageSrcs, phrases } = props;
    const [photoIndex, setPhotoIndex] = useState(0);
    const [colorForPhrases, setColorForPhrases] = useState("crimson");

    return <div className={classes.phraseAuthorBlock2}>
        <div className={classes.phraseAuthorInfoFrame}>
            <h2 className='authorTitle'>{title} - {phrases.length} frases</h2>
            <div className={classes.authorImagesFrame}>
                <div className={classes.authorImageSelectorBar}>
                    <button onClick={() => { setPhotoIndex(0) }}>Foto 1</button>
                    <button onClick={() => { setPhotoIndex(1) }}>Foto 2</button>
                </div>
                <img className={classes.image2} src={imageSrcs[photoIndex]} alt="" />
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
