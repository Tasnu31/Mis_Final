document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const mealContainer = document.getElementById('mealContainer');
    const mealResults = document.getElementById('mealResults');
    const showAllButton = document.getElementById('showAllButton');
  
    searchInput.addEventListener('input', debounce(searchMeal, 500));

    searchInput.addEventListener('input', debounce(searchMeal, 500));
  
    async function searchMeal() {
      const searchTerm = searchInput.value.trim();
  
      if (searchTerm === '') {
        mealContainer.innerHTML = ''; // Clear previous results
        mealResults.innerHTML = '';
        showAllButton.classList.add('d-none'); // Hide the "SHOW ALL" button
        return;
      }

      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
  
      if (data.meals) {
        mealContainer.innerHTML = ''; // Clear previous results
        mealResults.innerHTML = ''; // Clear previous results
  
        data.meals.slice(0, 5).forEach(meal => {
          const mealCard = createMealCard(meal);
          mealContainer.appendChild(mealCard);
        });