const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	//Add your code here
	let item = document.querySelectorAll('.item');
	let price = document.querySelectorAll(".price");

	let sum = 0;
	for(let t of price){
		sum += parseInt(t.innerText);
	}

	let table = document.querySelector("table");
	let newRow = document.createElement("tr");
	newRow.setAttribute('id', "ans");
	let col1 = document.createElement("td");
	col1.innerText = "Total sum is: ";
	let col2 = document.createElement("td");
	col2.innerText = sum;

	newRow.appendChild(col1);
	newRow.appendChild(col2);
	table.appendChild(newRow);
	
};

getSumBtn.addEventListener("click", getSum);

