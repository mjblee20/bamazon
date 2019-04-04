// npm packages
const inquirer = require("inquirer");
const mysql = require("mysql");

// global variables


// creating location to connect with mysql database
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "bamazon_db"
  });

// connect to described sql server
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    // connection success
    console.log("You have connected to the bamazon store!");
    displayItems();
});

// display all items and descriptions using mysql
function displayItems() {
    // console.log("===== displayItems ===== ");
    connection.query("SELECT * from bamazonCust;", function(err, res) {
        if (err) throw err;
        // creating table
        console.log("===================================================================================================================");
        for (let i = 0; i < res.length; i++) {
            console.log(`Item ID: ${res[i].item_id} || Product Name: ${res[i].product_name} || Department Name: ${res[i].department_name}|| Price: ${res[i].price} ||  Stock Quantity: ${res[i].stock_quantity}`);
        }
        console.log("===================================================================================================================");
        idCheck();
    })
}
1
// check product id
function idCheck() {
    // prompt for id of the product customer wishes to buy
    inquirer   
        .prompt({ 
            name: "id",
            type: "input",
            message: "Please enter the product ID you wish to purchase?",
            validate: function(name) {
                return !isNaN(name);
            }
        })
        .then(function(answer) {

            let itemid = parseInt(answer.id);
            
            // if chosen product is valid then continue to check amount wish to purchase
            connection.query("SELECT * from bamazonCust;", function(err, res) {
                if (err) throw err;
                let exist = false;
                let item;

                for (let i = 0; i < res.length; i++) {
                    if (itemid === res[i].item_id) {
                        exist = true;
                        item = res[i];
                    }
                }
                if (exist) {
                    checkAmount(item);
                } else {
                    console.log("The ID selected does not exist. Please select a valid ID.");
                    idCheck();
                }
            })
        });
}
// prompt for how many they'd like to purchase
function checkAmount(obj) {
    inquirer   
        .prompt({  
            name: "count",
            type: "input",
            message: "How many would you like to purchase?",
            validate: function(name) {
                return !isNaN(name);
            }
        })
        .then(function(answer){
            let purchaseCount = parseInt(answer.count);
            if ((purchaseCount) <= obj.stock_quantity) {
                    confirmPurchase(purchaseCount, obj);
                }
                // if not console.log Insufficient Quantity!
                else {
                    console.log("Sorry, we currently do not have that many. Please try a more reasonable amount.");
                    checkAmount(obj);
                }
        });
}

function confirmPurchase(count, obj) {
    obj.stock_quantity -= count;
    // update sql database's quantity after purchase
    connection.query("UPDATE bamazonCust SET ? WHERE item_id = ?", [obj, obj.item_id] ,function (err) {
        if (err) throw err;
    });
    // do math to figure out the total cost of the purchase
    console.log("   ==============================");
    console.log("   Your total cost will be $", obj.price * count);
    console.log("   ==============================");
    buyAgain();
}

// end step
function buyAgain() {
    // prompts if user wishes to purchase another item
    inquirer
        .prompt({
            name: "confirm",
            type: "confirm",
            message: "Would you like to continue shopping?"
        })
        .then(function(answer){
            if (answer.confirm) {
                displayItems();
            }
            else {
                console.log("Bye! See you next time!");
                connection.end();
            }
        })
}