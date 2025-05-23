document.addEventListener("DOMContentLoaded", function() {
    window.scrollTo(0, 0);  
});


const cartSection = document.getElementById('cart-section');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalPrice = document.getElementById('cart-total-price');

let cart = [];

function updateCart() {
    let cartSection = document.getElementById("cart-section");

    if (!cartSection) {
        cartSection = document.createElement("section");
        cartSection.id = "cart-section";
        document.body.appendChild(cartSection);
    }

    cartSection.innerHTML = "";

    const cartContainer = document.createElement("div");
    cartContainer.id = "cart-container";
    cartContainer.style.position = "fixed";
    cartContainer.style.top = "50%";
    cartContainer.style.left = "50%";
    cartContainer.style.transform = "translate(-50%, -50%)";
    cartContainer.style.width = "450px";
    cartContainer.style.maxHeight = "80%";
    cartContainer.style.overflowY = "auto";
    cartContainer.style.backgroundColor = "#fff";
    cartContainer.style.borderRadius = "12px";
    cartContainer.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
    cartContainer.style.padding = "30px";
    cartContainer.style.zIndex = "100";
    cartContainer.style.opacity = "0";
    cartContainer.style.transition = "opacity 0.3s ease-in-out";
    cartContainer.style.animation = "cartSlideIn 0.5s ease-out";

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&times;";
    closeButton.style.backgroundColor = "transparent";
    closeButton.style.border = "none";
    closeButton.style.fontSize = "30px";
    closeButton.style.color = "#333";
    closeButton.style.cursor = "pointer";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.addEventListener("click", closeCart);

    cartContainer.appendChild(closeButton);

    if (cart.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.innerText = "Your cart is empty!";
        emptyMessage.style.textAlign = "center";
        emptyMessage.style.fontSize = "18px";
        cartContainer.appendChild(emptyMessage);
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.style.marginBottom = "20px";
            itemDiv.style.borderBottom = "1px solid #ddd";
            itemDiv.style.paddingBottom = "15px";

            itemDiv.innerHTML = `
                <h3 style="font-size: 18px; color: #333; font-weight: bold;">${item.name}</h3>
                <p style="color: #555; font-size: 16px;">Price: $${item.price.toFixed(2)}</p>
                <div style="display: flex; align-items: center; margin-top: 10px;">
                    <button class="quantity-btn" onclick="adjustQuantity('${item.name}', -1)" style="background-color:rgb(201, 136, 117); color: #fff; border: none; padding: 8px 12px; border-radius: 5px; font-size: 18px; cursor: pointer;">-</button>
                    <span class="quantity" style="font-size: 18px; margin: 0 15px;">${item.quantity}</span>
                    <button class="quantity-btn" onclick="adjustQuantity('${item.name}', 1)" style="background-color:rgb(175, 112, 76); color: #fff; border: none; padding: 8px 12px; border-radius: 5px; font-size: 18px; cursor: pointer;">+</button>
                </div>
                <p style="font-weight: bold; font-size: 16px; color: #333;">Total: $${(item.price * item.quantity).toFixed(2)}</p>
            `;

            cartContainer.appendChild(itemDiv);
        });

        const totalValue = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        const totalDiv = document.createElement("div");
        totalDiv.classList.add("cart-total");
        totalDiv.style.marginTop = "20px";
        totalDiv.innerHTML = `
            <h3 style="font-size: 20px; color: #333;">Total Price: $${totalValue.toFixed(2)}</h3>
        `;
        cartContainer.appendChild(totalDiv);

        const paymentDiv = document.createElement("div");
        paymentDiv.style.marginTop = "20px";
        paymentDiv.innerHTML = `
            <h4 style="font-size: 18px; color: #333; margin-bottom: 10px;">Choose Payment Method</h4>
            <select id="payment-method" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; font-size: 16px;">
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
            </select>
            <button style="background-color:rgb(160, 134, 85); color: #fff; padding: 10px 20px; font-size: 18px; border: none; border-radius: 6px; width: 100%; margin-top: 20px; cursor: pointer;" onclick="proceedToCheckout()">Proceed to Checkout</button>
        `;
        cartContainer.appendChild(paymentDiv);
    }

    cartSection.style.display = "flex";
    setTimeout(() => {
        cartContainer.style.opacity = "1";
    }, 50);

    cartSection.appendChild(cartContainer);
}

function adjustQuantity(itemName, delta) {
    const item = cart.find(i => i.name === itemName);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.name !== itemName);
    }

    updateCart();
}

function addToCart(event) {
    const button = event.target;
    const title = button.getAttribute("data-title");
    const price = parseFloat(button.getAttribute("data-price"));

    const existingItem = cart.find(item => item.name === title);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: title,
            price: price,
            quantity: 1
        });
    }

    updateCart();
}

function closeCart() {
    const cartSection = document.getElementById("cart-section");
    if (cartSection) {
        const cartContainer = document.getElementById("cart-container");
        if (cartContainer) cartContainer.style.opacity = "0";

        setTimeout(() => {
            cartSection.style.display = "none";
        }, 300);
    }
}

function proceedToCheckout() {
    const paymentMethod = document.getElementById("payment-method").value;
    alert(`Proceeding with ${paymentMethod}...`);
}

document.querySelectorAll('.shop-item-btn').forEach(button => {
    button.addEventListener('click', addToCart);
});


 document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const messageBox = document.createElement('div');
        messageBox.textContent = "Your message has been successfully sent. We will get back to you soon.";
        messageBox.style.position = 'fixed';
        messageBox.style.top = '20px';
        messageBox.style.right = '20px';
        messageBox.style.backgroundColor = '#be8762';
        messageBox.style.color = 'white';
        messageBox.style.padding = '15px 50px 15px 20px';
        messageBox.style.borderRadius = '8px';
        messageBox.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        messageBox.style.zIndex = '9999';
        messageBox.style.fontFamily = 'Arial, sans-serif';
        messageBox.style.fontWeight = '500';

        const closeBtn = document.createElement('span');
        closeBtn.textContent = '✖';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '8px';
        closeBtn.style.right = '15px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.fontSize = '18px';
        closeBtn.style.color = 'white';
        closeBtn.style.fontWeight = 'bold';

        closeBtn.onclick = () => messageBox.remove();
        messageBox.appendChild(closeBtn);
        document.body.appendChild(messageBox);
        this.reset();
    });