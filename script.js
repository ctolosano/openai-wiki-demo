const btsearch = document.getElementById("btsearch");

btsearch.addEventListener("click", () => {
	let input = document.getElementById("search").value;
	console.log(input);

	const elements = document.querySelectorAll(
		"p, h1, h2, h3, h4, h5, h6, ul, ol, li"
	);
	elements.forEach((element) => {
		element.innerHTML = element.textContent;
	});

	if (input !== "") {
		let regExp = new RegExp(input, "gi");
		let firstHighlightedElement = null;

		elements.forEach((element) => {
			let innerHTML = element.innerHTML;

			element.innerHTML = innerHTML.replace(regExp, (match) => {
				if (!firstHighlightedElement) {
					firstHighlightedElement = element;
				}
				return `<mark>${match}</mark>`;
			});
		});

		if (firstHighlightedElement) {
			firstHighlightedElement.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		}
	}
});
