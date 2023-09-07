// Iteration 1: Names and Input

// 1.1

const hacker1 = "Tiago";

// 1.2

console.log("The driver's name is " + hacker1);

// 1.3

const hacker2 = "Leila";

// 1.4

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

// 2.1

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loops

// 3.1

let result = ""

for (const value of hacker1.toUpperCase()) {
    result += value + " ";
}

console.log(result);

// 3.2

let result = ""

for (let i = hacker2.length - 1; i >= 0; i -= 1) {
    result += hacker2[i]
}

console.log(result);

// 3.3

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1

const longText = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`

const spacesTrim = longText.trim().split(" ")
console.log(spacesTrim.length);

const etArray = longText.match(/et/g);
console.log(etArray.length);

// Bonus 2

const phraseToCheck = "step on no pets";
let palindrome = true;

for (let i = 0, j = phraseToCheck.length - 1; i < j; i += 1, j -= 1) {
    if (phraseToCheck[i] !== phraseToCheck[j]) {
        palindrome = false;
    }
}

if (palindrome === true) {
    console.log("The string is a palindrome.")
} else {
    console.log("The string is NOT a palindrom.")
}