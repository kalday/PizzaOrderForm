/*
    Date: 2 June 2021
    Author: Kyra Elyse Alday
    Topic: Assignment 02 - PizzasOnly
    Description: Pt 2 Write Script from Pseudocode 
 */

"use strict";

// ========== VARIABLES ========== //
const message = document.getElementById("message");     // area to display message
const button = document.getElementById("button");      // button to inititate calculation

const numPizzas = document.getElementById("quantity"); // user input for number of pizzas

// pizza prices
let pizza1 = 6.45;
let pizza2 = 12;
let pizza3 = 14;

// ========== CLICK EVENTS ========== //
button.addEventListener("click", calculateCost);

// ========== FUNCTIONS ========== //
function calculateCost() // calculateCost: calculates cheapest price for number of pizzas input 
{
    // validate input
    if (numPizzas.value <= 0)
    {
        alert("ERROR: Invalid Input");
    }
    // calculate price
    else
    {
        // declare variables
        let totalCost;          // total cost of pizzas
        let remainder;          // reaminder following division 

        if (numPizzas.value === 1) 
        {
            totalCost = pizza1;
        }
        else if (numPizzas.value === 2)
        {
            totalCost = pizza2;
        }
        else if (numPizzas.value === 3)
        {
            totalCost = pizza3;
        }
        else
        {
            totalCost = Math.floor((numPizzas.value / 3)) * pizza3;
            remainder = numPizzas.value % 3;
            
            if (remainder === 1)
            {
                totalCost += 6.45;
            }
            else if (remainder === 2)
            {
                totalCost += 12;
            }
            else 
            {
                totalCost += 0;     // no remainder - no value change  
            }
        }

        // print cost 
        message.innerHTML = "Optimised Cost: $" + totalCost;
    }
}