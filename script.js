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
        removeAll();
        importAnimes();
    }
    alert("Validation was successfully ");
    const name = document.getElementById("nameOfAnime").value;
    const episodes = document.getElementById("numberOfEpisodes").value;
    const score = Number(document.getElementById("scoreOfAnime").value);
    const gender = document.getElementById("genders").value;
    const anime = new animeConstructor(name,episodes,score,gender);
    animeList.push(anime);
    removeAll();
    importAnimes();
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
        for (const errorSymbol of errorSymbols) {
            if(name.indexOf(errorSymbol) > 0){
                isNameInRightFormat = false;
            }
        }
    }
    return isNameInRightFormat == true && isEpisodesInRightFormat == true ? true : false;
}

function find(i){
    const nameOfAnimeInSelectedRow = animeList[i].name;
    const hyperlink = "https://myanimelist.net/anime.php?cat=anime&q="+nameOfAnimeInSelectedRow;
    const text = "Do you want to see information about your selected anime?";
    if(confirm(text) == true){
        window.open(hyperlink,'_blank');
    }
}

function removeRow(i){
    const text = "Are you sure that, you want to remove this anime?";
    if(confirm(text) == true){
        animeList.splice(i,1);
    }
    removeAll();
    importAnimes();
}

function clearTable(){
    const text = "Are you sure that, you want to remove all anime?";
    if(confirm(text) == true){
        animeList.length = 0;
    }
    removeAll();
    importAnimes();
}

function removeAll(){
    const numberOfRows = document.getElementById("mytbody").rows.length;
    for(let j = 0; j < numberOfRows; j++){
        for(const row of document.getElementById("mytbody").rows){
            document.getElementById("mytbody").deleteRow(row);  
        }
    }
}

function importAnimes(){
    const table = document.getElementById("mytbody");
    for(let i = 0 ; i < animeList.length; i++){
        const row = table.insertRow(-1);
        const cellID = row.insertCell(0);       cellID.innerHTML = i;
        const cellName = row.insertCell(1);     cellName.innerHTML = animeList[i].name;
        const cellEpisodes = row.insertCell(2); cellEpisodes.innerHTML = animeList[i].episodes;
        const cellScore = row.insertCell(3);    cellScore.innerHTML = animeList[i].score;
        const cellGender = row.insertCell(4);   cellGender.innerHTML = animeList[i].gender;
        const cellFind = row.insertCell(5);     cellFind.innerHTML = `<input type="button" value="Find" class="findButton" id="find${i}" onclick="find(${i})"></td>`;
        const cellDelete = row.insertCell(6);   cellDelete.innerHTML = `<td><input type="button" value="X" class="remove" id="remove${i}" onclick="removeRow(${i})"></td>`;
        isAnimeAdded = true;
    } 
}

function sortIDs(){

    removeAll();
    importAnimes();
}

function sortNames(){

    removeAll();
    importAnimes();
}   

function sortNumberOfEpisodes(){

    removeAll();
    importAnimes();
}

function sortScores(){
    //*     From highest to lowest
    for(let i = 0; i < animeList.length; i ++){
        for(let j = 0; j < animeList.length; i++){
            if(animeList[j].score < animeList[j+1].score){
                const anime = Object.assign({},animeList[j]);
                animeList[j] = animeList[j+1];
                animeList[j+1] = anime;
            }
        }
    }
    if(animeList[0].score < animeList[animeList.length].score){
        const anime = Object.assign({},animeList[0]);
        animeList[0] = animeList[animeList.length];
        animeList[animeList.length] = anime;
    }
    removeAll();
    importAnimes();
}

function sortGenders(){

    removeAll();
    importAnimes();
}