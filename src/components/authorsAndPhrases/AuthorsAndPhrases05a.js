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


const PhrasesBox = PhrasesBoxBeforeButtons;

export function AuthorsAndPhrases() {
    return (<>
        <PhrasesBox title={CHAPULIN_DATA.title} imageSrcs={CHAPULIN_DATA.imageSrcs} phrases={CHAPULIN_DATA.phrases} />
        <PhrasesBox title={TERMINATOR_DATA.title} imageSrcs={TERMINATOR_DATA.imageSrcs} phrases={TERMINATOR_DATA.phrases} />
        <PhrasesBox title={STAR_WARS_DATA.title} imageSrcs={STAR_WARS_DATA.imageSrcs} phrases={STAR_WARS_DATA.phrases} />
    </>);
}

function PhrasesBoxBeforeButtons(props) {
    const { title, imageSrcs, phrases } = props;
    const [imageIndex, setImageIndex] = useState(0);

    return <div className={classes.phraseAuthorBlock}>
        <div className={classes.phraseAuthorInfoFrame}>
            <h2>{title} - {phrases.length} frases</h2>
            <div className={classes.authorImagesFrame}>
                <div className={classes.authorImageSelectorBar}>
                    <button onClick={() => setImageIndex(0)}>Foto 1</button>
                    <button onClick={() => setImageIndex(1)}>Foto 2</button>
                </div>
                <img className={classes.image2} src={imageSrcs[imageIndex]} alt="" />
            </div>
        </div>
        <div className={classes.phraseGroupFrame}>
            {phrases.map(phrase => <p key={phrase} className={classes.phrase}>{phrase}</p>)}
        </div>
    </div>
}

function PhrasesBoxWithButtons(props) {
    const { title, imageSrcs, phrases } = props;

    return <div className={classes.phraseAuthorBlock}>
        <div className={classes.phraseAuthorInfoFrame}>
            <h2>{title} - {phrases.length} frases</h2>
            <div className={classes.authorImagesFrame}>
                <div className={classes.authorImageSelectorBar}>
                    <button onClick={() => {console.log("eligiendo foto 1")}}>Foto 1</button>
                    <button onClick={() => {console.log("eligiendo foto 2")}}>Foto 2</button>
                    <div>Foto elegida: 2</div>
                </div>
                <img className={classes.image2} src={imageSrcs[1]} alt="" />
            </div>
        </div>
        <div className={classes.phraseGroupFrame}>
            {phrases.map(phrase => <p key={phrase} className={classes.phrase}>{phrase}</p>)}
        </div>
    </div>
}

function PhrasesBoxChangingPhotos(props) {
    const { title, imageSrcs, phrases } = props;
    const [ photoIndex, setPhotoIndex ] = useState(0);

    return <div className={classes.phraseAuthorBlock}>
        <div className={classes.phraseAuthorInfoFrame}>
            <h2>{title} - {phrases.length} frases</h2>
            <div className={classes.authorImagesFrame}>
                <div className={classes.authorImageSelectorBar}>
                    <button onClick={() => { setPhotoIndex(0) }}>Foto 1</button>
                    <button onClick={() => { setPhotoIndex(1) }}>Foto 2</button>
                </div>
                <img className={classes.image2} src={imageSrcs[photoIndex]} alt="" />
            </div>
        </div>
        <div className={classes.phraseGroupFrame}>
            {phrases.map(phrase => <p key={phrase} className={classes.phrase}>{phrase}</p>)}
        </div>
    </div>
}

