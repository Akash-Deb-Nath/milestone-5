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
        .catch(error => alert("Don't get this meal"))
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
        <ul>
        <li>${meal.strIngredient1}</li>
        <li>${meal.strIngredient2}</li>
        <li>${meal.strIngredient3}</li>
        <li>${meal.strIngredient4}</li>
        <li>${meal.strIngredient5}</li>
        <li>${meal.strIngredient6}</li>
        <li>${meal.strIngredient7}</li>
        <li>${meal.strIngredient8}</li>
        <li>${meal.strIngredient9}</li>
        <li>${meal.strIngredient10}</li>
      </ul>`;
}