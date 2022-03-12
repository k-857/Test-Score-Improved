var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];
let position = 0;
let maxScore = 0;
let scoreWorks = 0;
let nameWorks = 0;
var $ = function (id)
	{ 
		return document.getElementById(id); 
	};

function addScore()
	{
		const inputScore = parseInt($("score").value);
		const inputName = $("name").value;
		if((inputScore >= 0 && inputScore <= 100) && inputName !== "")
			{
				scores.push(inputScore);
				names.push(inputName);
				$("score").value = "";
				$("name").value = "";
				$("confirmation").innerHTML = "<b>" + inputName + "</b>" + " has submitted a score of " + "<b>" + inputScore + "</b>";
				$("scoreError").innerHTML = "";
				$("nameError").innerHTML = "";
				$("name").focus();
			}
			else
			{
				$("confirmation").innerHTML = "";
				if((inputScore < 0) || (inputScore > 100) || (Number.isInteger(inputScore) == false) || (inputScore == ""))
					{
						$("scoreError").innerHTML = "Please enter a number between 0 and 100";
						scoreWorks = 0;
					}
					else
					{
						$("scoreError").innerHTML = "";
						scoreWorks = 1;
					}

				if(inputName == "")
					{
						$("nameError").innerHTML = "Please enter your name";
						nameWorks = 0;
					}
					else
					{
						$("nameError").innerHTML = "";
						nameWorks = 1;
					}

				if(nameWorks == 1 && scoreWorks == 0)
					{
						$("score").focus();
					}
				if(nameWorks == 0 && scoreWorks == 1)
					{
						$("name").focus();
					}
				if(nameWorks == 0 && scoreWorks == 0)
					{
						$("name").focus();
					}
			}
	};
function displayResults()
	{
		let totalscore = 0;
		let average = 0;
		for(let i=0; i < scores.length; i ++)
			{
				totalscore += scores[i];

				if(scores[i] > maxScore)
					{
						position = i;
						maxScore = scores[i];
					}
			}
		average = (totalscore / scores.length).toFixed(2);
		$("results").innerHTML = "<h2>Results</h2><p>Average Score: " + average + "</p><p>Highest Score: " + names[position] + " with a score of " + maxScore + "</p>";
		$("confirmation").innerHTML = "";
		$("name").focus();
	};
function displayScores()
	{
		let displayString = "<br><tr><th>Names</th><th>Scores</th></tr>";
		for(i=0; i < names.length; i++)
			{
				displayString += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
			}
		$("scores_table").innerHTML = displayString;
		$("confirmation").innerHTML = "";
		$("name").focus();
	};
window.onload = function () 
	{
		$("add").onclick = addScore;
		$("display_results").onclick = displayResults
		$("display_scores").onclick = displayScores;
		$("name").focus();
	};