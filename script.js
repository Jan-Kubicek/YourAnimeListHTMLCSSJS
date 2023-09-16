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

function add(){
    if(!validation()){
        alert("Name of Anime or Episodes is not in right format");
    }
    if(validation()){
        alert("Validation was successfully ");
        const name = document.getElementById("nameOfAnime").value;

        //Code here
        document.getElementById("nameOfAnime").value = "";
        document.getElementById("numberOfEpisodes").value ="";
    }
}

function validation(){
    const name = document.getElementById("nameOfAnime").value;
    const errorSymbols =["@","#","{","}","[","]","<",">","/","(",")","%"];
    let isNameInRightFormat = name.length == 0 ? false : true;
    const episodes = document.getElementById("numberOfEpisodes").value;
    const isEpisodesInRightFormat =  episodes.includes("/") ? true : false;
    for(let i = 0 ; i < name.length; i ++){
        for(let j = 0; j < errorSymbols.length; j++){
            if(name.indexOf(errorSymbols[j]) > 0){
                isNameInRightFormat = false;
            }
        }
    }
    if( isNameInRightFormat == isEpisodesInRightFormat){
        return true;
    }
    else{
        return false;
    }
}