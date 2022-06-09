const title = document.getElementById('title');

async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split('');
    let i = 0;
    while(i < 0 letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++
    }
    return;
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function deleteSentence(eleRef) {
    const sentence = $(eleRef).innerHTML();
    const letters = sentence.split('');
    let i = 0;
    while(letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        $(eleRef).innerHTML(letters.join(''));
    }
}

async function carousel(carouselList, eleRef) {
    let i = 0;
    while(true) {
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if (i >= carouselList.length) {i = 0;}
    }
}

$(title).ready(async function() {
    await typeSentence('cd index', #sentence);
    await waitForMs(2000);
    deleteSentence('#sentence');
})



