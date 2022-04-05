const warningBtn = document.querySelector(".btn__warning");
const alertBox = document.querySelector(".alert__box");

// add event listener

warningBtn.addEventListener("click", showAlert);

function showAlert() {
	alertBox.classList.toggle("alert__box-visibility");
	// timeout();
	// alertBox.classList.remove('hidden');
	// alertBox.classList.add("block");
}
``