const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

get_meal_btn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php', {
        method: 'GET',
    })
        .then(res => res.json())
        .then(res => {
            createMeal(res.meals[0]);
        })
        .catch(e => {
            console.warn(e);
        });
});
const createMeal = meal => {
	const newInnerHTML = `
			<div>
				<h4>${meal.strMeal}</h4>
			</div>
	`;
	meal_container.innerHTML = newInnerHTML;
};