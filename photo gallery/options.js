// List of image categories and their corresponding images
const categories = {
  nature: ['nature1.jpg', 'nature2.jpg', 'nature3.jpg'],
  lights: ['lights1.jpg', 'lights2.jpg', 'lights3.jpg'],
  aesthetic: ['aesthetic1.jpg', 'aesthetic2.jpg', 'aesthetic3.jpg'],
  architecture: ['architecture1.jpg', 'architecture2.jpg', 'architecture3.jpg'],
  peopleandme: ['peopleandme1.jpg', 'peopleandme2.jpg', 'peopleandme3.jpg'],
 
};

// Handle start button click to show options
document.getElementById('startButton').addEventListener('click', function() {
  // Hide the start button and header
  document.getElementById('startButton').style.display = 'none';
  document.querySelector('header').style.display = 'none';

  // Show category options
  const optionsDiv = document.getElementById('options');
  optionsDiv.style.display = 'block';
  
  // Create buttons for each category
  Object.keys(categories).forEach(category => {
    const button = document.createElement('button');
    button.classList.add('option-btn');
    button.id = category;
    button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    optionsDiv.appendChild(button);

    // Attach click event to each button
    button.addEventListener('click', function() {
      displayImages(category); // Show images for the selected category
    });
  });
});

// Function to display images for a specific category
function displayImages(category) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';  // Clear previous gallery
  
  // Get the images for the selected category
  const images = categories[category];
  
  // Show the gallery
  gallery.style.display = 'flex';

  // Create image elements and add them to the gallery
  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = `images/${image}`;  // Assuming images are stored in the 'images' folder
    imgElement.alt = category;
    gallery.appendChild(imgElement);
  });
}
