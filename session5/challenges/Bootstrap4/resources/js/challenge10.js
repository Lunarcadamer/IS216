//================================================
// DO NOT MODIFY THIS CONSTANT VARIABLE
//================================================
const stars_dataset = [
    {
        "Ryan Gosling": [
            "sm_bg_ryan.jpg",
            "I'm going to make a movie about 'Hey Girl.'",
            "https://en.wikipedia.org/wiki/Ryan_Gosling"
        ],
        "Zac Efron": [
            "sm_bg_zac.jpg",
            "A girl can tell I like her when I blush or start telling bad jokes.",
            "https://en.wikipedia.org/wiki/Zac_Efron"
        ],
        "Eminem": [
            "sm_bg_eminem.jpg",
            "I am whatever you say I am; if I wasn't, then why would you say I am.",
            "https://en.wikipedia.org/wiki/Eminem"
        ]
    },
    {
        "Irina Shayk": [
            "sm_bg_irina.jpg",
            "I am trying to concentrate on books. You know, I love Dostoevsky. He's my favorite writer.",
            "https://en.wikipedia.org/wiki/Irina_Shayk"
        ],
        "Anna Kendrick": [
            "sm_bg_anna.jpg",
            "An actor should always let humility outweigh ambition.",
            "https://en.wikipedia.org/wiki/Anna_Kendrick"
        ],
        "Taylor Swift": [
            "sm_bg_taylor.jpg",
            "I'm intimidated by the fear of being average.",
            "https://en.wikipedia.org/wiki/Taylor_Swift"
        ]
    }
];

// [TODO] IMPLEMENT THIS FUNCTION
// When the webpage loads, the web browser will call this function.
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // YOUR CODE GOES HERE
    let gender = Math.floor(Math.random() * 2); // 0 = male, 1 = female

    if (gender == 0) {
        show_male_stars();
    }
    else {
        show_female_stars();
    }
    // Look for "[IMPORTANT]" inside challenge10.html file.
    // It tells you what elements need to be updated by JavaScript functions.

    // [IMPORTANT] Buttons
    //
    // When displaying "male" stars:
    //  - "Show Male Stars" button must be "disabled" (the user cannot click on it)
    //  - "Show Female Stars" button must be activated (the user should be able to click on it)
    //
    // When displaying "female" stars:
    //  - "Show Male Stars" button must be activated (the user should be able to click on it)
    //  - "Show Female Stars" button must be "disabled" (the user cannot click on it)
}



// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Male Stars" button is clicked, the web browser calls this function.
function show_male_stars() {

    // YOUR CODE GOES HERE
    let stars = stars_dataset[0];
    console.log(stars);

    let count = 1;
    for (let star of Object.entries(stars)) {
        console.log(star);

        let name = star[0];
        let img_src = 'images/' + star[1][0];
        let quote = star[1][1];
        let wiki = star[1][2];

        console.log(name);
        console.log(img_src);
        console.log(quote);
        console.log(wiki);

        // Retrieve img
        // 1) Update src
        // 2) Update alt
        document.getElementById("image" + count).setAttribute("src", img_src);
        document.getElementById("image" + count).setAttribute("alt", name);

        // Retrieve carousel slide
        // 1) Update slide_heading
        // 2) Update slide_title
        document.getElementById("slide_heading" + count).innerText = name;
        document.getElementById("slide_title" + count).innerText = quote;

        // Retrieve wiki links <a> tags
        // 1) Update URL
        // 2) Update link text
        document.getElementById("wiki" + count).setAttribute("href", wiki);
        document.getElementById("wiki" + count).innerText = name;

        count++
    }

    document.getElementById("male_button").disabled = true;
    document.getElementById("female_button").disabled = false;
}


// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Female Stars" button is clicked, the web browser calls this function.
function show_female_stars() {

    // YOUR CODE GOES HERE
    let stars = stars_dataset[1];
    console.log(stars);

    let count = 1;
    for (let star of Object.entries(stars)) {
        console.log(star);

        let name = star[0];
        let img_src = 'images/' + star[1][0];
        let quote = star[1][1];
        let wiki = star[1][2];

        console.log(name);
        console.log(img_src);
        console.log(quote);
        console.log(wiki);

        // Retrieve img
        // 1) Update src
        // 2) Update alt
        document.getElementById("image" + count).setAttribute("src", img_src);
        document.getElementById("image" + count).setAttribute("alt", name);

        // Retrieve carousel slide
        // 1) Update slide_heading
        // 2) Update slide_title
        document.getElementById("slide_heading" + count).innerText = name;
        document.getElementById("slide_title" + count).innerText = quote;

        // Retrieve wiki links <a> tags
        // 1) Update URL
        // 2) Update link text
        document.getElementById("wiki" + count).setAttribute("href", wiki);
        document.getElementById("wiki" + count).innerText = name;

        count++
    }

    document.getElementById("male_button").disabled = false;
    document.getElementById("female_button").disabled = true;
}