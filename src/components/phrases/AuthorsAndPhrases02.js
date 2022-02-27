export function AuthorsAndPhrases() {
    return (<>
        <ChapulinPhrases03/>
        <TerminatorPhrases/>
        <StarWarsPhrases/>
    </>
    )
}

function ChapulinPhrases01() {
    return <div className="phraseAuthorBlock">
        <div className="phraseAuthorInfoFrame">
            <h2>Chapulín colorado</h2>
            <div>
                <img className="image" src="https://res.cloudinary.com/remezcla/images/f_auto,q_auto/v1639757764/production/El_Chapulin_Colorado_Film/El_Chapulin_Colorado_Film.jpeg?_i=AA" alt="" />
            </div>
        </div>
        <div className="phraseGroupFrame">
            <p className="phrase">¡No contaban con mi astucia!</p>
            <p className="phrase">Se aprovechan de mi nobleza</p>
            <p className="phrase">Síganme los buenos</p>
            <p className="phrase">Que no panda el cúnico</p>
            <p className="phrase">Todos mis movimientos están fríamente calculados</p>
        </div>
    </div>
}

function ChapulinPhrases02() {
    const phrases = ["¡No contaban con mi astucia!", "Se aprovechan de mi nobleza", 
        "Síganme los buenos", "Que no panda el cúnico", "Todos mis movimientos están fríamente calculados"];

    return <div className="phraseAuthorBlock">
        <div className="phraseAuthorInfoFrame">
            <h2>Chapulín colorado - {phrases.length} frases</h2>
            <div>
                <img className="image" src="https://res.cloudinary.com/remezcla/images/f_auto,q_auto/v1639757764/production/El_Chapulin_Colorado_Film/El_Chapulin_Colorado_Film.jpeg?_i=AA" alt="" />
            </div>
        </div>
        <div className="phraseGroupFrame">
            <p className="phrase">{phrases[0]}</p>
            <p className="phrase">{phrases[1]}</p>
            <p className="phrase">{phrases[2]}</p>
            <p className="phrase">{phrases[3]}</p>
            <p className="phrase">{phrases[4]}</p>
        </div>
    </div>
}

function ChapulinPhrases03() {
    const phrases = ["¡No contaban con mi astucia!", "Se aprovechan de mi nobleza",
        "Síganme los buenos", "Que no panda el cúnico", "Todos mis movimientos están fríamente calculados", "Mis antenitas de vinil ..."];

    return <div className="phraseAuthorBlock">
        <div className="phraseAuthorInfoFrame">
            <h2>Chapulín colorado - {phrases.length} frases</h2>
            <div>
                <img className="image" src="https://res.cloudinary.com/remezcla/images/f_auto,q_auto/v1639757764/production/El_Chapulin_Colorado_Film/El_Chapulin_Colorado_Film.jpeg?_i=AA" alt="" />
            </div>
        </div>
        <div className="phraseGroupFrame">
            {phrases.map(phrase => <p className="phrase" key={phrase}>{phrase}</p>)}
        </div>
    </div>
}

function TerminatorPhrases() {
    return <div className="phraseAuthorBlock">
        <div className="phraseAuthorInfoFrame">
            <h2>Terminator</h2>
            <div>
                <img className="image" src="https://www.cinematographe.it/wp-content/uploads/2019/11/16hVhjMagAdrMG44A86c3YQ.jpeg" alt="" />
            </div>
        </div>
        <div className="phraseGroupFrame">
            <p className="phrase">I'll be back</p>
            <p className="phrase">Hasta la vista, baby</p>
            <p className="phrase">I need your clothes, your boots, and your motorcycle</p>
            <p className="phrase">You're terminated</p>
        </div>
    </div>
}

function StarWarsPhrases() {
    return <div className="phraseAuthorBlock">
        <div className="phraseAuthorInfoFrame">
            <h2>Star Wars</h2>
            <div>
                <img className="image" src="https://www.fanbolt.com/storage/2021/10/Star-Wars-Quotes.jpg" alt="" />
            </div>
        </div>
        <div className="phraseGroupFrame">
            <p className="phrase">May the Force be with you</p>
            <p className="phrase">I am your father</p>
            <p className="phrase">A long time ago in a galaxy far, far away…</p>
            <p className="phrase">The dark side is in our blood</p>
        </div>
    </div>
}