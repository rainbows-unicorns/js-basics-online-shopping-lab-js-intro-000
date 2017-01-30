var cart = [];

function setCart(newCart)
{
  cart = newCart;
}

function getCart()
{
  return cart;
}

function addToCart(item)
{
  
  var price = Math.floor(Math.random() * 101);

  cart.push({item:price});
  console.log(`${item} has been added to cart.`);
  return cart;
}

function viewCart()
{
  if (cart == null)
  {
    console.log(`Your shopping cart is empty.`)
  }
  else
  {
    for (var i = 0; i < cart.length; i++)
    {
      for (var item in cart[i])
      {
      console.log(`In your cart, you have ${[item:price].}`)
      }
    }
  }
  return cart;
}

function removeFromCart(item)
{

  {
    if ({item:price}] === null;
      console.log(`That item is not in your cart.`);
    else
    {
      cart.pop({item:price});
      console.log(`${item} has been added to cart.`);
    }
  }
  return cart;
}


function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
