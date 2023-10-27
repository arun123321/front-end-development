// JavaScript code to change the navigation bar on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) { // Change the number to determine when the effect should trigger
        header.style.backgroundColor = '#ff7043'; // Change the background color
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)'; // Add a shadow
    } else {
        header.style.backgroundColor = 'rgba(248, 13, 13, 0.616)'; // Restore the original background color
        header.style.boxShadow = 'none'; // Remove the shadow
    }
});
// Get references to the input field and the search button
const searchInput = document.getElementById('menu-search-input');
const searchButton = document.getElementById('menu-search-button');

// Get references to all menu items
const menuItems = document.querySelectorAll('.menu-item');

// Add an event listener to the search button
searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.toLowerCase();

    menuItems.forEach(function(menuItem) {
        const dishName = menuItem.querySelector('h3').textContent.toLowerCase();
        const dishDescription = menuItem.querySelector('p').textContent.toLowerCase();

        if (dishName.includes(searchTerm) || dishDescription.includes(searchTerm)) {
            menuItem.style.display = 'block';
        } else {
            menuItem.style.display = 'none';
        }
    });
});
// JavaScript code to handle the "Add to Cart" functionality
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    let cart = [];

    // Event listener for "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dishName = button.getAttribute('data-dish-name');
            const dishPrice = parseFloat(button.getAttribute('data-dish-price'));

            cart.push({ name: dishName, price: dishPrice });
            updateCart();
        });
    });

   