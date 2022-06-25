///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.map(element => element.price).reduce((acc, curr) => acc + curr);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    let appliedCoupon = (cartTotal * (tax + 1)) - couponValue;
    return appliedCoupon;
}

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Party Size: One property will be party size. I chose this property because I believe it will be useful to track a general curve of party sizes to help organize seating. The data type should be a number for math purposes.
    Amount Spent: Another property is amount spent. For a restaurant, it is important to see the average bill amount for each party. The data type should be a number for easier math computation purposes. 
    Time Stayed: Time Stayed could be an important property to track as it allows the restaurant to better understand customer demographics. This data type should also be a number (in minutes) for computation purposes. 
    Returning Customer: Tracking if each party is a returning customer will help understand retention rates. This data type should be a boolean which is efficient for the property in question. 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    partySize: 5,
    amountSpent: 123.45,
    timeStayed: 63,
    returningCustomer: true,
}