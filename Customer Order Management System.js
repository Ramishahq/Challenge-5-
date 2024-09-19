// TAsk 1 Create an Inventory Array of Product Objects:
let inventory = [

        { name: 'Espresso', price: 3, quantity: 10 },
    
        { name: 'Latte', price: 4, quantity: 5 },
    
        { name: 'Cappuccino', price: 4, quantity: 6 },
    
      { name: 'Mocha', price: 5, quantity: 4 }
    
    ];
// Task 2 Create an Orders Array of Order Objects:

 let customerOrders = []
 
// Task 3: Create a Function to Place an Order
function placeOrder( customerName,orderItems) {
// used`for…of-loop to iterates over iterable objects like arrays, strings, etc.)

   for (let orderedItem of orderItems) {
    // now to find the product in the inventory using find formula

let product = inventory.find (item=> item.name === orderedItem.name);

// Next to check if we have the product or we have enough in stock
if (product.quantity>= orderedItem.quantity)
    {
 //we will have to deduct the ordered quantity from the inventory stock
    product.quantity -= orderedItem.quantity;
    }else { 
    console.log(`Error: ${orderedItem.name} is out of stock.`);
}
}
// if all items are found we will add order by using push method in the ordered array.

customerOrders.push(
    { customerName: customerName,
        items: orderItems,
        status: " Pending "}
);

}
// testing the placeOder funstion with an example order
let customerName1 = 'Raiyan Zakir'
let orderedItems1 = [
    {name: "Latte", quantity: 3},
];

//testing the placeOrder function to test the error message. 

let customerName2 = 'Shrabasty Habil'
let orderedItems2 = [
    {name: 'Mocha', quantity: 10},
    
];
placeOrder(customerName1, orderedItems1);

placeOrder(customerName2, orderedItems2);

console.log(customerOrders);
// output customerName1 "Raiyan Zakir"
//items {name: 'Latte', quantity: 3}
//status " Pending "

// output customerName2 "Shrabasty Habil"
//items {name: 'Mocha', quantity: 10}
//status " Pending "
// output Error: Mocha is out of stock.



