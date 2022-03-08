import { useEffect, useState } from 'react';
import { deletePhrase, getAllPhrases } from '../../services/phrases';
import classes from './AuthorsAndPhrases.module.css'

export const AuthorsAndPhrases = AuthorsAndPhrasesWithCallback;
const PhrasesBox = PhrasesBoxDeleteBEAndRefetch;


function AuthorsAndPhrasesPreviousVersion() {
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

function AuthorsAndPhrasesWithCallback() {
    const [authorsAndPhrases, setAuthorsAndPhrases] = useState([]);

    const fetchAuthorsAndPhrases = async () => {
        const obtainedData = await getAllPhrases();
        console.log('obtained phrases')
        setAuthorsAndPhrases(obtainedData);
    }

    useEffect(() => {
        fetchAuthorsAndPhrases();
    }, []);

    return <>
        {authorsAndPhrases.map(authorData =>
            <PhrasesBox key={authorData.author} title={authorData.author} imageSrcs={authorData.imageSrcs} 
                phrases={authorData.phrases} updateData={fetchAuthorsAndPhrases} />
        )}
    </>;
}


function PhrasesBoxJustDelete(props) {
    const { title, imageSrcs, phrases } = props;
    const [photoIndex, setPhotoIndex] = useState(0);
    const [colorForPhrases, setColorForPhrases] = useState("crimson");

    return <div className={classes.phraseAuthorBlock2}>
        <div className={classes.phraseAuthorInfoFrame}>
            <h2 className='authorTitle'>{title} - {phrases.length} frases</h2>
            <div className={classes.authorImagesFrame}>
                <div className={classes.authorImageSelectorBar}>
                    {imageSrcs.map((element, ix) => {
                        return <button key={ix} onClick={() => { setPhotoIndex(ix) }}>Foto {ix + 1}</button>
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
                    <div key={phrase}
                        className={`${classes.phrase} ${classes["phrase-div"]} ${classes["phrase-with-button"]}`}
                        style={{ color: colorForPhrases }}
                    >
                        <div>{phrase}</div>
                        <div>
                            <button onClick={() => {
                                deletePhrase(title, phrase)
                            }}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>}
            {!colorForPhrases && <div style={{ marginTop: "2rem" }}>
                <div className={`${classes.phrase} ${classes["phrase-div"]}`}>
                    ... elegir un color para ver las frases ...
                </div>
            </div>}
        </div>
    </div>
}

function PhrasesBoxDeleteBEAndRefetch(props) {
    const { title, imageSrcs, phrases, updateData } = props;

    // Hay que definirlo como state para poder modificar el valor que viene como props
    const [phrasesForRender, setPhrasesForRender] = useState(phrases);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [colorForPhrases, setColorForPhrases] = useState("crimson");

    const doDeletePhrase = async (authorTitle, phrase) => {
        await deletePhrase(authorTitle, phrase);

    };

    return <div className={classes.phraseAuthorBlock2}>
        <div className={classes.phraseAuthorInfoFrame}>
            <h2 className='authorTitle'>{title} - {phrases.length} frases</h2>
            <div className={classes.authorImagesFrame}>
                <div className={classes.authorImageSelectorBar}>
                    {imageSrcs.map((element, ix) => {
                        return <button key={ix} onClick={() => { setPhotoIndex(ix) }}>Foto {ix + 1}</button>
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
                    <div key={phrase}
                        className={`${classes.phrase} ${classes["phrase-div"]} ${classes["phrase-with-button"]}`}
                        style={{ color: colorForPhrases }}
                    >
                        <div>{phrase}</div>
                        <div>
                            <button onClick={async () => {
                                await deletePhrase(title, phrase);
                                await updateData();
                            }}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>}
            {!colorForPhrases && <div style={{ marginTop: "2rem" }}>
                <div className={`${classes.phrase} ${classes["phrase-div"]}`}>
                    ... elegir un color para ver las frases ...
                </div>
            </div>}
        </div>
    </div>
}
