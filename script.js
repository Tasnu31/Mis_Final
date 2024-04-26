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