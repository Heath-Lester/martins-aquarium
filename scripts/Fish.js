// This provides a function to extract the properties of an object and places them into an HTML format

export const Fish = (fish) => {
    return `
    <div class="fishList__fish">
        <img src="${fish.image}">
        <h3>${fish.name}</h3>
            <ul class="fish__info">
                <li>${fish.species}</li>
                <li>${fish.length}</li>
                <li>${fish.location}</li>
                <li>${fish.diet}</li>
            </ul>
    </div>
        `
}