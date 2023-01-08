let homeCountEl = document.getElementById("scoreHome");
let awayCountEl = document.getElementById("scoreAway");
let homeScore = 0;
let awayScore = 0;

function plusOneHome()
{
    homeScore += 1;
    homeCountEl.textContent = homeScore;
}

function plusTwoHome()
{
    homeScore += 2;
    homeCountEl.textContent = homeScore;
}

function plusThreeHome()
{
    homeScore += 3;
    homeCountEl.textContent = homeScore;
}

function plusOneAway()
{
    awayScore += 1;
    awayCountEl.textContent = awayScore;
}

function plusTwoAway()
{
    awayScore += 2;
    awayCountEl.textContent = awayScore;
}

function plusThreeAway()
{
    awayScore += 3;
    awayCountEl.textContent = awayScore;
}

function newGame()
{
    homeScore = 0;
    awayScore = 0;
    
    homeCountEl.textContent = homeScore;
    awayCountEl.textContent = awayScore;
}