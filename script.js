const quantityInput = document.querySelector('.form-control');
const incrementBtn = document.querySelector('.input-group-text:first-of-type');
const decrementBtn = document.querySelector('.input-group-text:last-of-type');
const payButton = document.querySelector('.intaSendPayButton');

function calculateTotalPrice(quantity) {
  const pricePerPineapple = parseFloat(payButton.dataset.amount);
  const totalPrice = quantity * pricePerPineapple;
  return totalPrice;
}

function updateBookingPrice(totalPrice) {
  payButton.dataset.amount = totalPrice.toFixed(2);
}

incrementBtn.addEventListener('click', () => {
  let quantity = parseInt(quantityInput.value);
  quantity++;
  quantityInput.value = quantity;
  const totalPrice = calculateTotalPrice(quantity);
  updateBookingPrice(totalPrice);
});

decrementBtn.addEventListener('click', () => {
  let quantity = parseInt(quantityInput.value);
  if (quantity > 1) {
    quantity--;
  }
  quantityInput.value = quantity;
  const totalPrice = calculateTotalPrice(quantity);
  updateBookingPrice(totalPrice);
});



