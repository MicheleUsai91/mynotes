var gridTemplate = "<div class='cell'><h2 onclick='openAllPagesByName('CONTENT_CATEGORY')'>CONTENT_CATEGORY</h2><ul>ITEM</ul></div>"
var itemTemplate = "<li><a href='ITEM_LINK' target='_blank' name='CONTENT_CATEGORY'>ITEM_NAME</a></li>"

async function readJson(jsonPath) {
	try {
		const response = await fetch(jsonPath);
		if (!response.ok) throw new Error('Network response was not ok');
		return await response.json();
	} catch (error) {
		console.error('Error reading JSON file:', error);
	}
}

document.addEventListener("DOMContentLoaded", async function () {
	let textarea = document.getElementById("content");
    let bookmarks = await readJson("./Data/bookmarks.json");
    let news = await readJson("./Data/news.json");
    let reminders = await readJson("./Data/reminders.json");
	console.log(bookmarks, news, reminders);
	textarea.innerHTML = gridTemplate;
})