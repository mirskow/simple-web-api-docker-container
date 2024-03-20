document.addEventListener("DOMContentLoaded", ()=>{
	document.getElementById("but").addEventListener("click", async (event)=> {
		event.preventDefault();
		
		const form = document.querySelector('form');
		const formData = new FormData(form);
		
		const response = await fetch('/post/comment', {
			method: "POST",
			body: formData
		})
		.then(response => response.json())
		.then(data => {
		    const newRow = document.createElement('tr');
		    newRow.innerHTML = `
		        <td>${data.date}</td>
		        <td>${data.comment}</td>
		    `;
		    document.querySelector('tbody').appendChild(newRow);
		});
	});
});
