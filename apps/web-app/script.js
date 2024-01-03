const baseUrl = "https://tibia.bieda.it";
// const baseUrl = "https://localhost:20244";
const api = "api"
const module = "tibia-eocf";
const version = "v1";
const characterController = "characters";
const promptEndpoint = "prompt";
const basicUrl = `${baseUrl}/${api}/${module}/${version}`;

const promptUrl = `${basicUrl}/${characterController}/${promptEndpoint}`;
const characterUrl = `${basicUrl}/${characterController}`;

let searchTimeout;

function delayedSearchCharactersPrompt() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(searchCharactersPrompt, 500);
}

function searchCharactersPrompt() {
    const searchInput = document.getElementById("mySearch").value;

    const searchText = "searchText=";
    const searchParameter = searchText + searchInput;
    const page = "page=";
    const pageValue = 1;
    const pageParameter = page + pageValue;
    const pageSize = "pageSize=";
    const pageSizeValue = 20;
    const pageSizeParameter = pageSize + pageSizeValue;

    const fullRequest = `${promptUrl}?${searchParameter}&${pageParameter}&${pageSizeParameter}`;

    performSearchCharacter(searchInput, fullRequest, displayCharactersPromptResult);
}

function displayCharactersPromptResult(results) {
    const searchResultsContainer = document.getElementById("promptSearchResult");

    results.forEach(function (result) {
        const li = document.createElement("li");
        li.classList.add("darkening");
        const link = document.createElement("a");
        link.textContent = result;

        link.addEventListener("click", function () {
            const fullRequest = `${characterUrl}/${result}`;
            performSearchCharacter(result, fullRequest, displayCharacterResult);
        });

        li.appendChild(link);
        searchResultsContainer.appendChild(li);
    });
}

function searchCharacter() {
    const searchInput = document.getElementById("mySearch").value;
    const fullRequest = `${characterUrl}/${searchInput}`;
    
    performSearchCharacter(searchInput, fullRequest, displayCharacterResult);
}

function performSearchCharacter(name, url, callbackFunction) {
    const characterSearchResults = document.getElementById("characterSearchResults");
    const promptSearchResult = document.getElementById("promptSearchResult");
    
    characterSearchResults.innerHTML = "";
    promptSearchResult.innerHTML = "";
    if (name.length > 1) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const results = JSON.parse(xhr.responseText);
                callbackFunction(results);
            }
        };

        xhr.open("GET", url, true);
        xhr.send();
    }
}

function displayCharacterResult(result) {
    const characterSearchResults = document.getElementById("characterSearchResults");

    const traded = result.traded ? "(traded)" : "";
    let formerWorlds = result.formerWorlds.join(',');
    let formerNames = result.formerNames.join(',');

    const basicDiv = document.createElement("div");
    basicDiv.classList.add("basicInformationCharacterResult");
    basicDiv.innerHTML = `
    <div> Name: ${result.name} ${traded}</div>
    <div> Level: ${result.level}</div>
    <div> Vocation: ${result.vocation}</div>
    <div> World: ${result.world}</div>
    <div> Former Names: ${formerNames}</div>
    <div> Former Worlds: ${formerWorlds}</div>
    <div> Last Login: ${result.lastLogin}</div>
    `;

    characterSearchResults.append(basicDiv);
    
    
    const visibleCharactersDiv = document.createElement("div");
    visibleCharactersDiv.classList.add("visibleCharactersResult");
    visibleCharactersDiv.innerHTML = `<div> Other Visible Characters: </div>`;
 
    result.otherVisibleCharacters.forEach(function (result) {
        const li = document.createElement("li");
        li.classList.add("darkening");
        const link = document.createElement("a");
        link.textContent = result;

        link.addEventListener("click", function () {
            const fullRequest = `${characterUrl}/${result}`;
            performSearchCharacter(result, fullRequest, displayCharacterResult);
        });

        li.appendChild(link);
        visibleCharactersDiv.appendChild(li);
    });

    characterSearchResults.append(visibleCharactersDiv);

    const invisibleCharactersDiv = document.createElement("div");
    invisibleCharactersDiv.classList.add("invisibleCharactersResult");
    invisibleCharactersDiv.innerHTML = `<div> Possible Invisible Characters: </div>`;
    result.possibleInvisibleCharacters.forEach(function (result) {
        const li = document.createElement("div");
        li.classList.add("invisibleCharactersResultTable");

        const link = document.createElement("a");
        link.classList.add("darkening");

        link.textContent = result.otherCharacterName;

        link.addEventListener("click", function () {
            const fullRequest = `${characterUrl}/${result.otherCharacterName}`;
            performSearchCharacter(result.otherCharacterName, fullRequest, displayCharacterResult);
        });

        li.appendChild(link);

        const numberOfMatches = document.createElement("div");
        numberOfMatches.textContent = result.numberOfMatches;
        li.appendChild(numberOfMatches);

        const firstMatchDateOnly = document.createElement("div");
        firstMatchDateOnly.textContent = result.firstMatchDateOnly;
        li.appendChild(firstMatchDateOnly);

        const lastMatchDateOnly = document.createElement("div");
        lastMatchDateOnly.textContent = result.lastMatchDateOnly;
        li.appendChild(lastMatchDateOnly);

        invisibleCharactersDiv.appendChild(li);
    });
    
    characterSearchResults.append(invisibleCharactersDiv);
}
