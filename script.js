function addFood() {
    const input = document.getElementById('foodInput');
    const foodItem = input.value.trim();

    if (foodItem === '') {
        alert('Please enter a food item');
        return;
    }

    const ul = document.getElementById('foodList');
    const li = document.createElement('li');
    li.textContent = foodItem;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = function() {
        ul.removeChild(li);
    };

    li.appendChild(removeBtn);
    ul.appendChild(li);

    input.value = '';
}
document.getElementById('order-form').addEventListener('input', updateTotalPrice);

function updateTotalPrice() {
    const quantity = parseFloat(document.getElementById('product-quantity').value) || 0;
    const pricePerUnit = parseFloat(document.getElementById('product-price').value) || 0;
    const totalPrice = quantity * pricePerUnit;
    document.getElementById('total-price').textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}
