// [IMPORTANT]
// DO NOT MODIFY challenge12.html content
// YOU MUST WORK WITH WHAT IS GIVEN TO YOU



// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
let highlighted = false;

function highlight_words() {

    // YOUR CODE GOES HERE
    let paragraphs = document.querySelectorAll('#book_chapter p');

    if (!highlighted) {
        let word_len = prompt('Enter word length');
        for (para of paragraphs) {
            let output = '';
            let text = para.innerText.split(' ');
            for (word of text) {
                if (word.length > word_len) {
                    output += `<span style="background-color:yellow;">${word}</span> `;
                }
                else {
                    output += `${word} `;
                }
            }
            para.innerHTML = output;
        }
        highlighted = true;
        
    } else {
        for (para of paragraphs) {         
            para.innerHTML = para.innerHTML.replaceAll(`<span style="background-color:yellow;">`, "").replace("</span>", "");
        }
        highlighted = false;
    }
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_num_words() {
    
    // YOUR CODE GOES HERE
    let paragraphs = document.querySelectorAll('#book_chapter p');
    
    //console.log(paragraphs)

    for (let paragraph of paragraphs) {
        let num_words = paragraph.innerText.split(' ').length;
        //console.log(num_words);

        if (paragraph.parentElement.children[0].innerText == '') {
            paragraph.parentElement.children[0].innerHTML = `<strong>(${num_words} words)</strong>`;
        }
        else {
            // <span> num words inside here </span>
            // Remove the text inside
            paragraph.parentElement.children[0].innerHTML = '';
        }
    }
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_emoticons() {

    // YOUR CODE GOES HERE
    let paragraphs = document.querySelectorAll('#book_chapter p');

    var emoji = {
        ",": "&#11088;",
        "?": "&#10067;",
        "!": "&#10071;"
    };

    for (let para of paragraphs) {
        if (para.innerHTML.includes("⭐") || para.innerHTML.includes("❓") || para.innerHTML.includes("❗")) {
            para.innerHTML = para.innerHTML
            .replaceAll(" ⭐", ",")
            .replaceAll(" ❓", "?")
            .replaceAll(" ❗", "!");
        }
        else {
            para.innerHTML = para.innerHTML
                .replace(/\,/g, ' &#11088')
                .replace(/\?/g, ' &#10067')
                .replace(/\!/g, ' &#10071');
        }
    }
}