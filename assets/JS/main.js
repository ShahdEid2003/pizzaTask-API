async function pizaa() {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
    const recipes = data.recipes;
    const result = recipes.map(function (recipe) {
        return `<div class="pizaa-section">
                    <h2 class="title">${recipe.title}</h2>
                    <img src='${recipe.image_url}'>
                </div>`
    }).join('');
    document.querySelector(".pizza .row").innerHTML = result;
}
pizaa();