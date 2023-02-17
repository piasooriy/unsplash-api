export default function renderImage(image, altText) {
   const imageContainer = document.getElementById('image__container');
   const imageElement = document.createElement('img');
   imageElement.setAttribute('src', image);
   imageElement.setAttribute('alt', altText);
   imageContainer.appendChild(imageElement)
}
