document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function(event) {
            event.preventDefault();
            const productId = this.getAttribute('data-id'); // get the unique id of the product
            window.location.href = `product.html?id=${productId}`;
        });
    });
});



