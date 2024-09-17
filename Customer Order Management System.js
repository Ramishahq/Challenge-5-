// TAsk 1 Create an Inventory Array of Product Objects:
let inventory = [

        { name: 'Espresso', price: 3, quantity: 10 },
    
        { name: 'Latte', price: 4, quantity: 5 },
    
        { name: 'Cappuccino', price: 4, quantity: 6 },
    
      { name: 'Mocha', price: 5, quantity: 4 }
    
    ];
// Task 2 Create an Orders Array of Order Objects:

 let customerOrders = []
 
 // I would push a sample order as order number 1 in customer order with the name, items and status:

 let customerOrder1 = {
    customerName: "Raiyan Zakir",
    items: [
        {name: "Mocha", quantity: 2},
        {name: "Latte", quantity: 3}
    ],
    status: "Pending"
 };
 // Will log the information after using push formula to see it works or not.
  
 customerOrders.push(customerOrder1);
 console.log(customerOrders);
 
 // output customerName: 'Raiyan Zakir', items: Array(2), status: 'Pending'

