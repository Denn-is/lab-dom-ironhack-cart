// ITERATION 1
// work with console.dir() to print the list that lets you see whay you can select
// use .innerText, .valueAsNumber,
// to update a node:

function updateSubtotal($product) {
	const $priceNode = $product.querySelector(".price span");
	const $quantityNode = $product.querySelector(".quantity input");

	console.dir($quantityNode);

	const priceValue = Number($priceNode.innerText);
	const quantityValue = $quantityNode.valueAsNumber;

	const subtotalValue = priceValue * quantityValue;

	console.log("subtotalValue:", subtotalValue);

	const $subtotalNode = $product.querySelector(".subtotal span");

	$subtotalNode.innerText = subtotalValue;

	return subtotalValue;
}

// ITERATION 2
function calculateAll() {
	const $productNode = document.getElementsByClassName("product");

	let sumCard = 0;

	for (let $product of $productNode) {
		sumCard += updateSubtotal($product);
	}
	$calculateTrigger.addEventListener("click", calculateAll);

	// why use "getElelementsbyCLassName" instead of "querySelectorAll"?

	// ITERATION 3
	//...
}

const $calculateTrigger = document.getElementById("calculate");

$calculateTrigger.addEventListener("click", calculateAll);

// ITERATION 4

function addProductRemoveListener($removeButton) {
	// ...
}

// ITERATION 5

function createProduct(event) {
	// ...
}
