import { useEffect, useState } from 'react';
import { getAllPhrases } from '../../services/authorsAndPhrases';
import classes from './AuthorsAndPhrases.module.css'

export function AuthorsAndPhrases() {
    const [authorsAndPhrases, setAuthorsAndPhrases] = useState([]);

    useEffect(() => {
        const fetchAuthorsAndPhrases = async () => {
            const obtainedData = await getAllPhrases();
            setAuthorsAndPhrases(obtainedData);
        }
        fetchAuthorsAndPhrases();
    }, []);

    return <>
        {authorsAndPhrases.map(authorData => 
            <PhrasesBox key={authorData.author} title={authorData.author} imageSrcs={authorData.imageSrcs} phrases={authorData.phrases} />
        )}
    </>;
}

function PhrasesBox(props) {
    const { title, imageSrcs, phrases } = props;
    const [photoIndex, setPhotoIndex] = useState(0);
    const [colorForPhrases, setColorForPhrases] = useState("crimson");

    return <div className={classes.phraseAuthorBlock2}>
        <div className={classes.phraseAuthorInfoFrame}>
            <h2 className='authorTitle'>{title} - {phrases.length} frases</h2>
            <div className={classes.authorImagesFrame}>
                <div className={classes.authorImageSelectorBar}>
                    { imageSrcs.map((element, ix) => {
                        return <button key={ix} onClick={() => { setPhotoIndex(ix) }}>Foto {ix+1}</button>
                    })}
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
