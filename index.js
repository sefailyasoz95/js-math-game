let num1,
	num2,
	correctAnswer,
	operation = "+";

const select = document.getElementById("select");

select.addEventListener("change", (event) => {
	operation =
		event.target.value === "addition"
			? "+"
			: event.target.value === "extraction"
			? "-"
			: event.target.value === "multiplication"
			? "x"
			: "/";
	generateQuestion();
});

function generateQuestion() {
	num1 = Math.floor(Math.random() * 100) + 1;
	num2 = Math.floor(Math.random() * 100) + 1;
	correctAnswer =
		operation === "+" ? num1 + num2 : operation === "-" ? num1 - num2 : operation === "x" ? num1 * num2 : num1 / num2;
	document.getElementById("question").innerText = `What is ${num1} ${operation} ${num2}`;
	document.getElementById("answer").value = "";
	document.getElementById("result").innerText = "";
}

function checkAnswer() {
	const userAnswer = parseInt(document.getElementById("answer").value);
	if (userAnswer === correctAnswer) {
		document.getElementById("result").innerText = "Correct!";
		document.getElementById("result").style.color = "green";
	} else {
		document.getElementById("result").innerText = "Wrong! Try Again.";
		document.getElementById("result").style.color = "red";
		return;
	}
	setTimeout(generateQuestion, 2000);
}

generateQuestion();
