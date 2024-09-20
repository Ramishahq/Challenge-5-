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
// checking if all ordered item are in stock or not.

   for (let orderedItem of orderItems) {

let item = inventory.find (item=> item.name === orderedItem.name);

// Next to check if we have the product or we have enough in stock

        if (item === null) {
            console.log(`Error: ${orderedItem.name} Item is not found in inventory.`);
            return; 
            // It will Stop processing if item is not found
        }
     // If the the item is less or out of stock 

     if (item.quantity < orderedItem.quantity) {
        console.log(`Error: ${orderedItem.name} is out of stock or not enough quantity available.`);
        return; // Stop processing if not enough stock
    }
}
// If items are available we will update the stock
 //we will have to deduct the ordered quantity from the inventory stock
 for (let orderedItem of orderItems) {
    let item = inventory.find(item => item.name === orderedItem.name);
 item.quantity -= orderedItem.quantity;
   
}
// Check inventory 
console.log(inventory);
// output
//name: 'Espresso', price: 3, quantity: 10}
//name: 'Latte', price: 4, quantity: 2}
//name: 'Cappuccino', price: 4, quantity: 6}
//name: 'Mocha', price: 5, quantity: 4}

// if all items are found we will add order by using push method in the ordered array.

customerOrders.push(
    { customerName: customerName,
        items: orderItems,
        status: " Pending "
    }
);
console.log (`Order was placed succesfully for customerName ${customerName} `);
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
// output Order was placed succesfully for customer Raiyan Zakir 


placeOrder(customerName2, orderedItems2);
// output Error: Mocha is out of stock or not enough quantity available

console.log(customerOrders);
// output customerName1 "Raiyan Zakir"
//items {name: 'Latte', quantity: 3}
//status " Pending "

// output customerName2 "Shrabasty Habil"
//items {name: 'Mocha', quantity: 10}
//status " Pending "
// output Error: Mocha is out of stock.





