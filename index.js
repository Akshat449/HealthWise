// Simple carousel navigation
const reviewsContainer = document.getElementById('reviewsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.indicator-dot');

let currentIndex = 0;
const cardWidth = 360; // Should match your CSS card width + gap
const cardCount = document.querySelectorAll('.review-card').length;

// Update active dot
function updateDots(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Next button click
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cardCount;
    reviewsContainer.scrollTo({
        left: currentIndex * (cardWidth + 30), // 30 is the gap
        behavior: 'smooth'
    });
    updateDots(currentIndex);
});

// Previous button click
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cardCount) % cardCount;
    reviewsContainer.scrollTo({
        left: currentIndex * (cardWidth + 30),
        behavior: 'smooth'
    });
    updateDots(currentIndex);
});

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        reviewsContainer.scrollTo({
            left: currentIndex * (cardWidth + 30),
            behavior: 'smooth'
        });
        updateDots(currentIndex);
    });
});

// Update dots on scroll
reviewsContainer.addEventListener('scroll', () => {
    const scrollPosition = reviewsContainer.scrollLeft;
    currentIndex = Math.round(scrollPosition / (cardWidth + 30));
    updateDots(currentIndex);
});