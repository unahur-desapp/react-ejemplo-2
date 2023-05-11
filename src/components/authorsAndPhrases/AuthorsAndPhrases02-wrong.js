export function AuthorsAndPhrases02() {
    return (<>
        <ChapulinPhrases/>
        <TerminatorPhrases/>
        <StarWarsPhrases/>
    </>
    )
}

function ChapulinPhrases() {
    return <div className="phrases-phraseAuthorBlock">
        <div className="phrases-phraseAuthorInfoFrame">
            <h2 >Chapulín colorado</h2>
            <div>
                <img className="phrases-image" src="https://res.cloudinary.com/remezcla/images/f_auto,q_auto/v1639757764/production/El_Chapulin_Colorado_Film/El_Chapulin_Colorado_Film.jpeg?_i=AA" alt="" />
            </div>
        </div>
        <div className="phrases-phraseGroupFrame">
            <p className="phrases-phrase">¡No contaban con mi astucia!</p>
            <p className="phrases-phrase">Se aprovechan de mi nobleza</p>
            <p className="phrases-phrase">Síganme los buenos</p>
            <p className="phrases-phrase">Que no panda el cúnico</p>
            <p className="phrases-phrase">Todos mis movimientos están fríamente calculados</p>
        </div>
    </div>
}

function TerminatorPhrases() {
    return <div className="phrases-phraseAuthorBlock">
        <div className="phrases-phraseAuthorInfoFrame">
            <h2>Terminator</h2>
            <div>
                <img className="phrases-image" src="https://www.cinematographe.it/wp-content/uploads/2019/11/16hVhjMagAdrMG44A86c3YQ.jpeg" alt="" />
            </div>
        </div>
        <div className="phrases-phraseGroupFrame">
            <p className="phrases-phrase">I'll be back</p>
            <p className="phrases-phrase">Hasta la vista, baby</p>
            <p className="phrases-phrase">I need your clothes, your boots, and your motorcycle</p>
            <p className="phrases-phrase">You're terminated</p>
        </div>
    </div>
}

function StarWarsPhrases() {
    <div className="phrases-phraseAuthorBlock">
        <div className="phrases-phraseAuthorInfoFrame">
            <h2>Star Wars</h2>
            <div>
                <img className="phrases-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1920px-Star_Wars_Logo.svg.png" alt="" />
            </div>
        </div>
        <div className="phrases-phraseGroupFrame">
            <p className="phrases-phrase">May the Force be with you</p>
            <p className="phrases-phrase">I am your father</p>
            <p className="phrases-phrase">A long time ago in a galaxy far, far away…</p>
            <p className="phrases-phrase">The dark side is in our blood</p>
        </div>
    </div>
}