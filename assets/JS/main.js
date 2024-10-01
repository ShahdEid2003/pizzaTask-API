async function pizaa() {
    const data = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const pizza= await data.json();
    const recipes=pizza.recipes;
    const result = recipes.map(function (recipe) {
        return `<div class="pizaa-section">
                    <h2 class="title">${recipe.title}</h2>
                    <img src='${recipe.image_url}'>
                </div>`
    }).join('');
    document.querySelector(".pizza .row").innerHTML = result;
}
pizaa();