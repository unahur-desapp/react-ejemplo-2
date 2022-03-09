const ALL_PHRASES = ["¡No contaban con mi astucia!", "Se aprovechan de mi nobleza",
    "Síganme los buenos", "Que no panda el cúnico", "Todos mis movimientos están fríamente calculados",
    "I'll be back", "Hasta la vista, baby",
    "I need your clothes, your boots, and your motorcycle", "You're terminated",
    "May the Force be with you", "I am your father",
    "A long time ago in a galaxy far, far away...", "The dark side is in our blood", "The world is doomed, R2D2"];

// agregado para JustPhrases02
export async function getAllPhrases() {
    return Promise.resolve(ALL_PHRASES);
}

// agregado para JustPhrases03
// export async function deletePhrase(authorName, phrase) {
//     const author = allPhrases.find(authorBlock => authorBlock.author === authorName);
//     const phraseIndex = author.phrases.indexOf(phrase)
//     console.log(`deleting ${phrase} (index ${phraseIndex}) of author ${authorName}`)
//     author.phrases.splice(phraseIndex, 1);
//     console.log('list of phrases after deletion')
//     console.log(author.phrases)
//     return Promise.resolve();
// }