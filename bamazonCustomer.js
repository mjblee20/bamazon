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
    console.log("You have connected to the bamazon store!");
    // start inquiry
    idCheck();
});

// check product id
function idCheck() {
    // prompt for id of the product customer wishes to buy
    inquirer   
        .prompt({ 
            name: "id",
            type: "input",
            message: "Please enter the product ID you wish to purchase"
        })
        .then(function(answer) {
            console.log(answer, typeof answer);
            let id = answer.id;

            // grab all id num range
            connection.query("SELECT ID FROM bamazon;", function (error, results, fields) {
            
            });
            // if chosen product is valid then continue to check amount wish to purchase
            if () {

            }

            // else console.log the product selected does not exist please choose a valid product ID

        });

    // MySQL queries
    connection.query("SELECT * FROM bamazon;", function (error, results, fields) {
            
    });

    checkAmount();
}
// prompt for how many they'd like to purchase
function checkAmount(obj) {
    let purchaseCount;
    inquirer   
        .prompt(    
        
        )
        .then(function(answer){

        });

    
    // check if stock has enough to be purchased
    if () {
        confirmPurchase(purchaseCount);
    }
    // if not console.log Insufficient Quantity!
    else {
        //
    }
}

function confirmPurchase(count) {
    // update sql database's quantity after purchase
    // MySQL queries
    connection.query("SELECT * FROM bamazon;", function (error, results, fields) {
            
    });
    // do math to figure out the total cost of the purchase
}