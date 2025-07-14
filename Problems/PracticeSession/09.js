function reverseEachWord(sentence) {
    return sentence
        .split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
}

// Example usage:
const input = "Hello World";
console.log(reverseEachWord(input)); // "olleH dlroW"
