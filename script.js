const animeList = [];
const animeGenders = [];
let isAnimeAdded = false;

class animeConstructor {
    constructor(name, episodes, score, gender) {
        this.name = name;
        this.episodes = episodes;
        this.score = score;
        this.gender = gender;
    }
    getName(){return this.name;}
    getEpisodes(){return this.episodes;}
    getScore(){return this.score;}
    getGender(){return this.gender;}
}

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
        return;
    }
    if(isAnimeAdded){
        const numberOfRows = document.getElementById("mytbody").rows.length;
        for(let j = 0; j < numberOfRows; j++){
            for(const row of document.getElementById("mytbody").rows){
                document.getElementById("mytbody").deleteRow(row);  
            }
        }
    }
    alert("Validation was successfully ");
    const name = document.getElementById("nameOfAnime").value;
    const episodes = document.getElementById("numberOfEpisodes").value;
    const score = Number(document.getElementById("scoreOfAnime").value); //! it doesnt return right value
    const gender = document.getElementById("genders").value;
    let anime = new animeConstructor(name,episodes,score,gender);
    animeList.push(anime);

    const table = document.getElementById("mytbody");
    for(let i = 0 ; i < animeList.length; i++){
        const row = table.insertRow(-1);
        const cellID = row.insertCell(0);       cellID.innerHTML = i;
        const cellName = row.insertCell(1);     cellName.innerHTML = animeList[i].name;
        const cellEpisodes = row.insertCell(2); cellEpisodes.innerHTML = animeList[i].episodes;
        const cellScore = row.insertCell(3);    cellScore.innerHTML = animeList[i].score;
        const cellGender = row.insertCell(4);   cellGender.innerHTML = animeList[i].gender;
        const cellFind = row.insertCell(5);     cellFind.innerHTML = `<input type="button" value="Find" class="findButton" id="find${i}" onclick="find(${i})"></td>`;
        const cellDelete = row.insertCell(6);   cellDelete.innerHTML = `<td><input type="button" value="X" class="remove" id="remove${i}" onclick="removeRow()"></td>`;
        isAnimeAdded = true;
    } 
    document.getElementById("nameOfAnime").value = "";
    document.getElementById("numberOfEpisodes").value ="";
}

function validation(){
    const name = document.getElementById("nameOfAnime").value;
    const errorSymbols =["@","#","{","}","[","]","<",">","/","(",")","%"];
    let isNameInRightFormat = name.length == 0 ? false : true;
    const episodes = document.getElementById("numberOfEpisodes").value;
    let isEpisodesInRightFormat =  episodes.includes("/") ? true : false;
    const regExp = /[a-zA-Z]/g;   
    isEpisodesInRightFormat = regExp.test(episodes) ? false : true;
    for(let i = 0 ; i < name.length; i ++){
        for(let j = 0; j < errorSymbols.length; j++){
            if(name.indexOf(errorSymbols[j]) > 0){
                isNameInRightFormat = false;
            }
        }
    }
    return isNameInRightFormat == true && isEpisodesInRightFormat == true ? true : false;
}

function find(i){
    const idOfRow = i;
    const nameOfAnimeInSelectedRow = animeList[i].name;
    const hyperlink = "https://myanimelist.net/anime.php?cat=anime&q="+nameOfAnimeInSelectedRow;
    const text = "Do you want to see information about your selected anime?";
    if(confirm(text) == true){
        window.open(hyperlink,'_blank');
    }
}