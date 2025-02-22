function selectOption(option, price) {
    document.querySelectorAll('.option').forEach(el => {
        el.classList.remove('selected');
    });
    option.classList.add('selected');
    document.getElementById('total-price').innerText = `DKK ${price}`;
}
