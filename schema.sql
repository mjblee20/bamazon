DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE bamazonCust(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price INT default 20,
    stock_quantity INT default 0,
    PRIMARY KEY (item_id)
);

INSERT INTO bamazonCust(product_name, department_name, price, stock_quantity)
VALUES("Murderous Monkey", "Toys", 30, 150);

INSERT INTO bamazonCust(product_name, department_name, price, stock_quantity)
VALUES("God of War", "Video Games", 60, 30);

INSERT INTO bamazonCust(product_name, department_name, price, stock_quantity)
VALUES("Super Confy Sofa", "Furnishing", 30, 65);

INSERT INTO bamazonCust(product_name, department_name, price, stock_quantity)
VALUES("StarCraft II", "Video Games", 60, 500);

INSERT INTO bamazonCust(product_name, department_name, price, stock_quantity)
VALUES("Metal Spoons", "Utensils", 15, 100);

INSERT INTO bamazonCust(product_name, department_name, price, stock_quantity)
VALUES("Fancy Coat", "Clothing", 300, 18);

INSERT INTO bamazonCust(product_name, department_name, price, stock_quantity)
VALUES("Super Cool Pants", "Clothing", 180, 43);

INSERT INTO bamazonCust(product_name, department_name, price, stock_quantity)
VALUES("Hermes 32cm Lime Matte Alligator Kelly Bag", "Women Fashion", 72600, 1);

INSERT INTO bamazonCust(product_name, department_name, price, stock_quantity)
VALUES("PS4 Pro", "Electronics", 350, 200);

INSERT INTO bamazonCust(product_name, department_name, price, stock_quantity)
VALUES("Love Potion", "Scientific", 10, 1000);

SELECT * FROM bamazonCust;