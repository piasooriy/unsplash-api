import renderImage from "./renderImage.js";
const warningElement = document.querySelector('.warning');
export default async function fetchImage() {
   const clientID = 'qu3HF_uf8XdgTgDds6FLhcBxopwa86ZBtLXJBobqtRY';
   const baseUrl = 'https://api.unsplash.com/';
   const options = {
      method: "GET",
      headers: {
         "Accept-Version": "v1"
      }     //method "get" er default
   }
   const endpointRandom = `${baseUrl}photos/random?client_id=${clientID}`;
   const response = await fetch(endpointRandom, options);
      try {
         await handleResponse(response);
      } catch (error) {
         handleError(error);
      }
      // console.log(response);
      // return output;
   }
   async function handleResponse(response) {
      if(response.ok) {
         const output = await response.json();
         renderImage(output.urls.regular, output.alt_description);
      console.log(output)
   } else if (response.status === 404) {
      throw new Error('URL is not existing');
   } else if (response.status === 401) {
      throw new Error('Not authorized user');
   } else if (response.status >= 500) {
      throw new Error('Server not responding');
   } else {
      throw new Error('Something went wrong');
   }
   console.log(response)
}
function handleError(error) {
   warningElement.classList.toggle ('hidden');
   warningElement.textContent = error.message
}