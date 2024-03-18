"use strict";
// 12= Task
// Printing each person's name, also print same message to each person but personalized with their name. with using (\n) linebraker.
let Names = ["Neha", "Anum", "Maira", "Nida"];
for (let Name of Names) {
    console.log(`${"\n"} Hello ${Name} , ${"\n"} "Would you like to learn something new in typescript`);
}
// 13 =
// List of transportation, to print a statement on series about these items.
let transports = ["Mahindra scorpio", "Audi", "BMW", "Bugatti"];
transports.forEach(transport => {
    console.log(`I would like to own a ${transport}`);
});
// 14=> Task
// Ivitation to have a yummy dinner part.
let guest = ["Nida", "Maira", "Reshma", "Ummara"];
guest.forEach(guests => {
    console.log(`Dear ${guests}, would you like to join me for 'yummy dinner party'?`);
});
// => I wasn't satisfied with this nonspace meassage than i triend (\n) linebraker.
let guests = ["Nida", "Maira", "Reshma", "Ummara"];
guests.forEach(guest => {
    console.log(`${"\n"} Dear ${guest}, ${"\n"} would you like to join me for 'yummy dinner party'?`);
});