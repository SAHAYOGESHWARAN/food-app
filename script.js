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

document.getElementById('add-food-btn').addEventListener('click', addFood);

function addFood() {
    const foodNameInput = document.getElementById('food-name');
    const foodName = foodNameInput.value.trim();

    if (foodName) {
        const foodList = document.getElementById('food-list');

        // Create list item
        const li = document.createElement('li');
        li.textContent = foodName;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            foodList.removeChild(li);
        });

        li.appendChild(removeButton);
        foodList.appendChild(li);

        // Clear input
        foodNameInput.value = '';
    } else {
        alert('Please enter a food name.');
    }
}
