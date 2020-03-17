// Script para fazer o o BootStrap Dropdown funcionar sem precisar importar o BS.js
document.addEventListener("DOMContentLoaded", () => {
	for (let dropdown of document.querySelectorAll('[data-toggle="dropdown"]')) {
		dropdown.onclick = function () {
			for (let dropdownMenu of document.querySelectorAll(`[aria-labelledby="${dropdown.id}"]`)) {
				dropdownMenu.classList.toggle('show')
				dropdownMenu.onclick = () => dropdownMenu.classList.toggle('show')
			}
		}
	}
})