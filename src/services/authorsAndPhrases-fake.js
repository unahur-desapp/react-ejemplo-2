const CHAPULIN_DATA = {
    author: 'Chapulín colorado',
    imageSrcs: [
        "https://res.cloudinary.com/remezcla/images/f_auto,q_auto/v1639757764/production/El_Chapulin_Colorado_Film/El_Chapulin_Colorado_Film.jpeg?_i=AA",
        "https://pbs.twimg.com/media/ERU824XUEAAghak?format=jpg&name=small",
        "https://peru21.pe/resizer/Q-IjRKP5L20tutWXNbaAx2BdcUc=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FV5WVDR5DVFVVKALI5X5AGSNQA.jpg",
    ],
    phrases: ["¡No contaban con mi astucia!", "Se aprovechan de mi nobleza",
        "Síganme los buenos", "Que no panda el cúnico", "Todos mis movimientos están fríamente calculados"],
}

const TERMINATOR_DATA = {
    author: 'Terminator',
    imageSrcs: [
        "https://www.cinematographe.it/wp-content/uploads/2019/11/16hVhjMagAdrMG44A86c3YQ.jpeg",
        "https://cdn.pastemagazine.com/www/articles/2021/07/03/T2-header.jpg",
    ],
    phrases: ["I'll be back", "Hasta la vista, baby",
        "I need your clothes, your boots, and your motorcycle", "You're terminated"],
}

const STAR_WARS_DATA = {
    author: 'Star Wars',
    imageSrcs: [
        "https://www.fanbolt.com/storage/2021/10/Star-Wars-Quotes.jpg",
        "https://insolenzadir2d2.it/wp-content/uploads/2016/11/r2d2-and-c3po-star-wars.jpg",
        "https://i.insider.com/60ad1c51a412370019d31cf0?width=1000&format=jpeg&auto=webp",
    ],
    phrases: ["May the Force be with you", "I am your father",
        "A long time ago in a galaxy far, far away...", "The dark side is in our blood"],
}

const allPhrases = [CHAPULIN_DATA, TERMINATOR_DATA, STAR_WARS_DATA];

// agregado para AuthorsAndPhrases06
export async function getAllPhrases() {
    return Promise.resolve(allPhrases);
    // comparar con return [CHAPULIN_DATA, TERMINATOR_DATA, STAR_WARS_DATA];
}

// agregado para AuthorsAndPhrases07
export async function deletePhrase(authorName, phrase) {
    const author = allPhrases.find(authorBlock => authorBlock.author === authorName);
    const phraseIndex = author.phrases.indexOf(phrase)
    console.log(`deleting ${phrase} (index ${phraseIndex}) of author ${authorName}`)
    author.phrases.splice(phraseIndex, 1);
    console.log('list of phrases after deletion')
    console.log(author.phrases)
    return Promise.resolve();
}