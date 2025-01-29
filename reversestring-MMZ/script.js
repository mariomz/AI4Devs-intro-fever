// Function to reverse a given string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Function to handle button click
function reverseAndDisplay() {
    let input = document.getElementById("inputText").value;
    let reversed = reverseString(input);
    document.getElementById("outputText").textContent = reversed;
}
