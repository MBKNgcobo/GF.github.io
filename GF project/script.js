// Track user activities
function trackActivity(activity) {
  // Send activity data to the server
  // Example code: send to a server-side script or API endpoint
  fetch('/api/track-activity', {
    method: 'POST',
    body: JSON.stringify({ activity }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    // Handle the response
    if (response.ok) {
      console.log('Activity tracked successfully.');
    } else {
      console.error('Failed to track activity.');
    }
  })
  .catch(error => {
    console.error('Failed to track activity:', error);
  });
}

// Banner image carousel
const carouselImages = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showNextImage() {
  carouselImages[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImages[currentIndex].classList.add('active');
}

setInterval(showNextImage, 5000);

// Search form
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const searchQuery = searchInput.value;
  searchMovies(searchQuery);
});

function searchMovies(query) {
  // Perform movie search logic here
  // Example code: console.log('Search query:', query);
  console.log('Search query:', query);
}

// Example usage
document.addEventListener('click', function(event) {
  const target = event.target;
  
  if (target.matches('.movie-card img')) {
    const movieName = target.nextElementSibling.innerText;
    trackActivity('Clicked on movie: ' + movieName);
  }
});
