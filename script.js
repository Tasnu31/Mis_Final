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
        mealContainer.innerHTML = ''; 
        mealResults.innerHTML = '';
        showAllButton.classList.add('d-none'); 
        return;
      }

      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
  
      if (data.meals) {
        mealContainer.innerHTML = ''; 
        mealResults.innerHTML = ''; 
  
        data.meals.slice(0, 5).forEach(meal => {
          const mealCard = createMealCard(meal);
          mealContainer.appendChild(mealCard);
        });

        if (data.meals.length > 5) {
            showAllButton.classList.remove('d-none'); 
            showAllButton.addEventListener('click', () => {
              mealResults.innerHTML = ''; 
    
              data.meals.slice(5).forEach(meal => {
                const mealCard = createMealCard(meal);
                mealResults.appendChild(mealCard);
              });
    
              showAllButton.classList.add('d-none'); 
            });
          } else {
            showAllButton.classList.add('d-none'); 
          }
        } else {
          mealContainer.innerHTML = '<p class="text-center">No meals found. Please try a different search term.</p>';
          mealResults.innerHTML = '';
          showAllButton.classList.add('d-none'); 
        }
      }

      function createMealCard(meal) {
        const mealCard = document.createElement('div');
        mealCard.classList.add('card', 'mb-3');
    