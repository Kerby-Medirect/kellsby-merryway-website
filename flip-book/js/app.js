// app.js

document.addEventListener('DOMContentLoaded', () => {
    const books = document.querySelectorAll('.book');
    const bookContent = document.querySelector('.book-content');

    let currentOpenPageIndex = 0; // Represents the index of the *first unflipped page* (0-indexed).
                                  // 0: cover is closed (first page is index 0)
                                  // 1: cover is open, showing page 1 (book at index 0 is flipped)
                                  // 2: page 1 is open, showing page 2 (book at index 1 is flipped)

    // 1. Initialize Z-indexes: Higher index for pages closer to the physical front of the book
    // For 4 books: book[0] (cover) -> z-index 4, book[1] -> z-index 3, book[2] -> z-index 2, book[3] -> z-index 1
    books.forEach((book, index) => {
        book.style.zIndex = books.length - index;
    });

    // Function to flip to the next page
    function flipNext() {
        if (currentOpenPageIndex < books.length) { // Can't go past the last 'book'
            const bookToFlip = books[currentOpenPageIndex];

            // Temporarily boost z-index while flipping
            bookToFlip.style.zIndex = books.length + 10; // Ensure it's on top during animation

            bookToFlip.style.transform = 'rotateY(-180deg)';
            bookToFlip.classList.add('flipped');

            // Listen for the end of the transition for final z-index adjustment
            bookToFlip.addEventListener('transitionend', function handler() {
                // Once flipped, its z-index can return to its sequential order relative to *unflipped* pages,
                // but still be above pages that were flipped before it.
                // A simpler approach: keep its z-index slightly higher than unflipped pages below it.
                bookToFlip.style.zIndex = currentOpenPageIndex; // Lower than higher-indexed unflipped pages

                // Remove the event listener to prevent multiple firings
                bookToFlip.removeEventListener('transitionend', handler);
            });

            currentOpenPageIndex++; // Move to the next "open" page index

            // Adjust book-content transform when the first page (cover) is opened
            if (currentOpenPageIndex === 1) { // When cover (index 0) has just flipped
                bookContent.classList.add('trnsf');
                bookContent.classList.remove('trnsf-reset');
            }
        }
    }

    // Function to flip to the previous page
    function flipPrevious() {
        if (currentOpenPageIndex > 0) { // Cannot go before the cover
            currentOpenPageIndex--; // Move back to the previous "open" page index

            const bookToUnflip = books[currentOpenPageIndex]; // This is the book we need to unflip

            // Temporarily boost z-index while unflipping
            bookToUnflip.style.zIndex = books.length + 10; // Ensure it's on top during animation

            bookToUnflip.style.transform = 'rotateY(0deg)';
            bookToUnflip.classList.remove('flipped');

            // Listen for the end of the transition for final z-index adjustment
            bookToUnflip.addEventListener('transitionend', function handler() {
                // Once unflipped, its z-index should return to its initial sequential order
                bookToUnflip.style.zIndex = books.length - currentOpenPageIndex; // Return to initial stack order

                // Remove the event listener
                bookToUnflip.removeEventListener('transitionend', handler);
            });


            // Adjust book-content transform when returning to the cover (index 0)
            if (currentOpenPageIndex === 0) { // When returning to the cover (index 0 is the cover)
                bookContent.classList.remove('trnsf');
                bookContent.classList.add('trnsf-reset');
            }
        }
    }

    // Event listener for clicks on the entire book content area
    bookContent.addEventListener('click', (event) => {
        const bookContentRect = bookContent.getBoundingClientRect();
        const clickX = event.clientX - bookContentRect.left;

        // Determine if click was on left (previous) or right (next) side of the visible book area
        if (clickX < bookContentRect.width / 2) {
            // Clicked on the left side
            flipPrevious();
        } else {
            // Clicked on the right side
            flipNext();
        }
    });
});