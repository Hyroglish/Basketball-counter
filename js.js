let Away_score = document.getElementById("AwayTeamScore")
let Home_score = document.getElementById("HomeTeamScore")
let score1 = 0
let score2 = 0
function add1_home() {
    score1 += 1
    Home_score.textContent = score1
}
function add2_home() {
    score1 += 2
    Home_score.textContent = score1
}
function add3_home() {
    score1 += 3
    Home_score.textContent = score1
}
function add1_away() {
    score2 += 1
    Away_score.textContent = score2
}
function add2_away() {
    score2 += 2
    Away_score.textContent = score2
}


function add3_away() {
    score2 += 3
    Away_score.textContent = score2
}
