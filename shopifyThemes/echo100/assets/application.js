// Put your application javascript here
const sort_bySelect = document.getElementById('sort_by');

sort_bySelect.addEventListener('change', (event) => {
	const url = new URL(window.location.href);
	url.searchParams.set('sort_by', event.currentTarget.value);

	window.location = url.href;
});
