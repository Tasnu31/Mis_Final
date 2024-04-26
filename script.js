document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const mealContainer = document.getElementById('mealContainer');
    const mealResults = document.getElementById('mealResults');
    const showAllButton = document.getElementById('showAllButton');
  
    searchInput.addEventListener('input', debounce(searchMeal, 500));