const animeList = [];
const animeGenders = [];

function setAnimeGenders(){
    animeGenders[0] = "Drama";
    animeGenders[1] = "Action";
    animeGenders[2] = "Adventure";
    animeGenders[3] = "Fantasy";
    animeGenders[4] = "Sci-Fi";
    animeGenders[5] = "Romance";
    animeGenders[6] = "Sport";
    animeGenders[7] = "Slice of Life";
    animeGenders[8] = "Isekai";
    let options = "";
    for (const animeGender of animeGenders) {
        options += `<option id="${animeGender}">${animeGender}</option>`;
    }
    document.getElementById("genders").innerHTML = options;
}
