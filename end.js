const scoreText = localStorage.getItem('FinalScore');
const finalScore = document.getElementById('finalScore');

if(scoreText >= 5)        
{
    finalScore.innerText = "Congratulation, your score is " + scoreText;
}
else
{
    finalScore.innerText = "Oh, your score is " + scoreText;
}        