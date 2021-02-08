document.getElementById("search-btn").addEventListener('click', function () {
    const searchInfo = document.getElementById("search-info").value;
    searchMeal(searchInfo);
    const mealDetail = document.getElementById("meal-details");
    mealDetail.style.display = "none";
});
const searchMeal = search => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => {
            displayMeal(data.meals);
        })
        .catch(error => alert("Can't understand what you want,please try again."))
}
const displayMeal = meals => {
    const mealData = document.getElementById("meal");
    mealData.innerHTML = "";
    meals.forEach(meal => {
        const mealDiv = document.createElement("div");
        mealDiv.className = "meal-div";
        const mealInfo = `
        <img onclick="mealDetails('${meal.strMeal}')" src="${meal.strMealThumb}">
        <h5 onclick="mealDetails('${meal.strMeal}')" class="meal-name">${meal.strMeal}</h5>`;
        mealDiv.innerHTML = mealInfo;
        mealData.appendChild(mealDiv);
    });
}
const mealDetails = searchMealDetails => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMealDetails}`)
        .then(res => res.json())
        .then(data => {
            renderMealInfo(data.meals[0]);
            console.log(data.meals[0]);
        })
}
const renderMealInfo = meal => {
    const mealDetail = document.getElementById("meal-details");
    mealDetail.style.display = "block";
    mealDetail.innerHTML =
        `<img src="${meal.strMealThumb}">
        <h3>Ingredients</h3>
        <ul id="ul">
       
        </ul>`;
    for (let i = 1; i < 20; i++) {
        const ul = document.getElementById("ul");
        let li = document.createElement("li");
        li.innerText = meal[`strMeasure${i}`] + ' ' + meal[`strIngredient${i}`];
        if (meal[`strIngredient${i}`]) {
            ul.appendChild(li);
        }
        else {
            break;
        }
    }
}