var votes = {};

function submitVote() {
    var selectedHero = document.getElementById("heroSelection").value;

    if (selectedHero) {
        if (votes[selectedHero]) {
            votes[selectedHero]++;
        } else {
            votes[selectedHero] = 1;
        }

        alert("Vote submitted for " + selectedHero + "!");

        document.getElementById("heroSelection").value = "";

        updateVotingResults();
    } else {
        alert("Please select a hero before submitting your vote.");
    }
}

function updateVotingResults() {
    document.getElementById("votingResultsSection").style.display = "block";

    var resultsHTML = "<ul>";
    for (var hero in votes) {
        resultsHTML += "<li>" + hero + ": " + votes[hero] + " votes</li>";
    }
    resultsHTML += "</ul>";


    document.getElementById("votingResults").innerHTML = resultsHTML;
}
