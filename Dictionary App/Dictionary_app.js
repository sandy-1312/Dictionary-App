const input = document.querySelector('input');
const btn = document.querySelector('button');
const dictionaryApp = document.querySelector('.dictionary-app');




//https://api.dictionaryapi.dev/api/v2/entries/en/<word>


async function dictionaryFn(word) {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then (res => res.json())

    return res[0];
}

btn.addEventListener('click', fetchCard);

async function fetchCard(){
    const data = await dictionaryFn(input.value);

    console.log(data);

    let partofSpeecharr = []
    for (let i = 0; i < data.meanings.length; i++) {
        partofSpeecharr.push(data.meanings[i].partOfSpeech);
    }

    dictionaryApp.innerHTML = `
    <div class="card">
                <div class="property">
                    <span>Word:</span>
                    <span>${data.word}</span>
                </div>

                <div class="property">
                    <span>Definition:</span>
                    <span>${data.meanings[0].definitions[0].definition}</span>
                </div>
                <div class="property">
                    <span>Example:</span>
                    <span>${data.meanings[0].definitions[0].example || "No example available."}</span>
                </div>

            </div>
        `

}





