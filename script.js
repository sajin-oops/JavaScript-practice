let item = {
  name:"iphone",
  price:50000,
  quantity:2
}
console.log(item)
// - output -{name: 'iphone', price: 50000, quantity: 2}

//ANOTHER WAY OF CREATING OBJECT

let item2 = new Object();
item2.name = "macbook pro"
item2.processor = "m2"
item2.quantity=1
console.log(item2)
// output - {name: 'macbook pro', processor: 'm2', quantity: 1}


//-accessing object
// - dot notation
console.log(item.name)
console.log(item2.processor)
console.log(item.price)
console.log(item.quantity) 

item.quantity = 6
console.log(item.quantity) 

// ADDING NEW PROPERTIES

item.owner = "sajin"
console.log(item)
// - {name: 'iphone', price: 50000, quantity: 6, owner: 'sajin'}

// - SQUARE BRACKET NOTATION
console.log(item['price'])
item['price'] = 75000
// old price = 50000
console.log(item['price'])
// new price 
// - output 75000 


