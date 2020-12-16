function renderBoard(selector, size) {
    let HTML = '';
    const height = 100 / size;


    /*let whiteBlackHTML = '';
    for (let i = 0; i < size; i++) {
        const color = i % 2 === 0 ? 'white' : 'black';
        whiteBlackHTML += `<div class = "cell ${color}"></div>`;
    }
    console.log(whiteBlackHTML)

    let blackWhiteHTML = '';
    for (let i = 0; i < size; i++) {
        const color = i % 2 === 0 ? 'black' : 'white';
        blackWhiteHTML += `<div class = "cell ${color}"></div>`
    }

    console.log(blackWhiteHTML)
*/

    for (let i = 0; i < size; i++) {
        //const cells = i % 2 === 0 ? whiteBlackHTML : blackWhiteHTML;
        HTML += `< div class="row"
                    style = "height"> cells </div > `;
    }

    const DOM = document.querySelector(selector)
    DOM.innerHTML = HTML;
}

export { renderBoard }