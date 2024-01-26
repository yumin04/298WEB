function checkEnterKey(event) {
    if (event.key === 'Enter') {
        // The user pressed Enter, you can capture and handle the input here
        var userInput = document.getElementById('userInput').value;
        if (userInput == 'CPSCWEB') {
            document.getElementById('result').innerText = 'Congratulations! You have finished CPSC 298 Intro to Web Engineering Course!';
        }
        // Add your logic to handle the user input as needed
    }
}
function foundTreasure() {
    document.getElementById('treasure').style.backgroundColor = 'green';
    document.getElementById('result').innerText = 'Congratulations! You found the treasure!\n\n\n...Did you though...';
    var a = document.getElementById('ThirdBackButton');
    a.title = 'YOU MISSED';
}

function highlightB() {
    document.getElementById('SecretCode').style.backgroundColor = 'yellow';
}