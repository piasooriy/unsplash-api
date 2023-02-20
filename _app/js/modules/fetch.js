import renderImage from "./renderimage.js";
const warningElement = document.querySelector('.warning');

export default async function fetchImage(){
	const clientID = 'Pk039TBXTOGzjbbSphQGa6S8b_YLsY1cAsSS2TCERCk';
	const baseUrl = 'https://api.unsplash.com/';
	const options = {
		method: "GET",
		headers: {
			"Accept-version": "v1"		
		}
	}
	const endpointRandom = `${baseUrl}photos/random?client_id=${clientID}`;

	const response = await fetch(endpointRandom, options);
	
	try {
		await handleResponse(response);
	} catch (error) {
		handleError(error)
	}	
}



async function handleResponse(response) {
	if(response.ok) {
		const output = await response.json();	
		renderImage(output.urls.regular, output.alt_description);
	console.log(output)	
	} else if (response.status === 404) {
		throw new Error('URL does not exist');
	} else if ( response.status === 401) {
			throw new Error('Not authorized user');
	} else if ( response.status >= 500){
		throw new Error ('Server nor responding');
	} else {
		throw new Error('Something went wrong');
	}
	console.log(response);
}


function handleError(error) {
	warningElement.classList.toggle('hidden')
		warningElement.textContent = error.message;
}

/* return output; */
/* const result = await fetchImage() */ 


