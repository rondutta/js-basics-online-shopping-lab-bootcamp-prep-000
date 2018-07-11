var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let obj = new Object();
 obj.itemName = item;
 obj.itemPrice = parseInt(Math.random()*100);
 cart.push(obj)
 return `${obj.itemName} has been added to your cart.`
}

function viewCart() {
 var output = [];
  if (cart.length ==0) {
    return "Your shopping cart is empty."
  } else if (cart.length==1) {
    output.push(` ${cart[0].itemName} at $${cart[0].itemPrice}`)
  } else if (cart.length==2) {
    output.push(` ${cart[0].itemName} at $${cart[0].itemPrice}`)
    output.push(` and ${cart[1].itemName} at $${cart[1].itemPrice}`)
  } else {
    for (let i=0; i<cart.length; i++) {
      if (i+1 == cart.length) {
        output.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`)
      } else {
        output.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
    }
  }
  return `In your cart, you have${output.toString()}.`

}

function total() {
  var total = 0;
  for (let i=0; i<cart.length; i++) {
    total = total + cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
