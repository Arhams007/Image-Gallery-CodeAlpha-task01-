let currentIndex = 0;
const images = [
  'assets/image1.jpg',
  'assets/image2.jpg',
  'assets/image3.jpg',
  'assets/image4.jpg',
  'assets/image5.jpg'
];

function showImage(index) {
  currentIndex = index;
  document.getElementById('mainImage').src = images[currentIndex];
  document.getElementById('galleryViewer').style.display = 'flex';
}

function closeViewer() {
  document.getElementById('galleryViewer').style.display = 'none';
}

function navigate(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  document.getElementById('mainImage').src = images[currentIndex];
}
