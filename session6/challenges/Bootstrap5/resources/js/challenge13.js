// KrazyStars API v1.0 - Documentation
// http://krazywoman.com/krazystars/


// When the webpage loads
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // YOUR CODE GOES HERE
    let gender = 'm'; // male
    if( Math.random() < 0.5 ) {
        gender = 'f'; // female
    }
    
    callAPI(gender)
    process_buttons(gender)
    
}

function callAPI(gender) {
    // Call API
    let url = "http://krazywoman.com/krazystars/api/star/search.php?g=" + gender
    axios.get(url)
    .then(response => {
        //console.log(response)
        displayData(response)
    })
    .catch(error => {
        console.log(error.message)
    });
}

function displayData(response) {
    //console.log(response.data.records)
    celebs = response.data.records

    let wiki_links_str = ''
    let imdb_links_str = ''
    let slideshow = ''
    let active = 'active'
    for (celeb of celebs) {
        //console.log(celeb['photo_background_url'])
        slideshow += `
        <div class="carousel-item ${active}">
            <img id="image${celeb['id']}" src="${celeb['photo_background_url']}" alt="">
            <div class="carousel-caption">
                <h2 class="star_h2" id="slide_heading3" style="padding: 5px; background-color: grey; color: white">${celeb['fullname']}</h2>
                <p id="slide_title3" style="padding: 5px; background-color: black; color: white">${celeb['quote']}</p>
            </div>
        </div>`

        active = ''
        wiki_links_str += `<a id="wiki${celeb['id']}" class="dropdown-item" href="${celeb['wikipedia_url']}" target="_blank">${celeb['fullname']}</a>`
        imdb_links_str += `<a id="imdb${celeb['id']}" class="dropdown-item" href="${celeb['imdb_url']}" target="_blank">${celeb['fullname']}</a>`
    }

    document.getElementById("wiki_links").innerHTML = wiki_links_str;
    document.getElementById("imdb_links").innerHTML = imdb_links_str;
    document.getElementById("slide_show").innerHTML = slideshow;
}

// This function is called when user clicks on "Show Male Stars" button.
function show_male_stars() {

    // YOUR CODE GOES HERE
    callAPI('m')
    process_buttons('m')
}


// This function is called when user clicks on "Show Female Stars" button.
function show_female_stars() {

    // YOUR CODE GOES HERE
    callAPI('f')
    process_buttons('f')
}

// Active/Disable buttons
function process_buttons(gender) {
    // Disable the other gender button
    // Enable the current gender button
    if( gender == 'm' ) {
        // current gender is male
        document.getElementById("male_button").disabled = true;
        document.getElementById("female_button").disabled = false;
    }
    else {
        // current gender is female
        document.getElementById("male_button").disabled = false;
        document.getElementById("female_button").disabled = true;
        //console.log("Hello");
    }
}