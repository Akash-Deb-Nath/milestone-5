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
        <ul>
        <li>${meal.strMeasure1}${meal.strIngredient1}</li>
        <li>${meal.strMeasure2}${meal.strIngredient2}</li>
        <li>${meal.strMeasure3}${meal.strIngredient3}</li>
        <li>${meal.strMeasure4}${meal.strIngredient4}</li>
        <li>${meal.strMeasure5}${meal.strIngredient5}</li>
        <li>${meal.strMeasure6}${meal.strIngredient6}</li>
        <li>${meal.strMeasure7}${meal.strIngredient7}</li>
        <li>${meal.strMeasure8}${meal.strIngredient8}</li>
        <li>${meal.strMeasure9}${meal.strIngredient9}</li>
        <li>${meal.strMeasure10}${meal.strIngredient10}</li>
      </ul>`;
}