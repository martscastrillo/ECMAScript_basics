const click = document.getElementById('click');
click.addEventListener("click", async function () {
	const module = await import('./module.js');
	console.log(module);
	module.hello();
})