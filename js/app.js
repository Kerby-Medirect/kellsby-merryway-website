// app.js - Gallery Version

document.addEventListener('DOMContentLoaded', () => {
    // 1. Gallery Data
    const galleryItems = [
        {
            id: '2025-08-02',
            title: 'A Gentle Home',
            date: 'AUGUST 02, 2025',
            category: 'stories',
            year: '2025',
            image: 'img/a-gentle-home.jpg',
            excerpt: 'A short story about an old house overlooking a quiet cove, built not of stone and wood alone, but of the silent moments that collect over time.',
            content: `
                <p>
                    The old house stood on a hill overlooking a quiet cove, its windows like tired eyes watching the tide. 
                    It wasn't grand, but it was gentle. The floorboards sang a soft tune with every step, and the scent of aged cedar and sea salt was a permanent perfume.
                    This was a home built not of stone and wood alone, but of the silent moments that collect over time.
                </p>
                <p>
                    In the mornings, sunbeams would stretch across the living room like lazy cats, illuminating dust motes dancing in the air. 
                    They would land on the faded floral patterns of an old armchair, making it glow. 
                    Here, every object had a history—a chipped teacup from a long-lost aunt, a shell gathered on a walk with a friend, a book with a spine worn smooth by countless hands. 
                    The house held these stories not as burdens, but as cherished memories.
                </p>
            `
        },
        {
            id: '2025-08-05',
            title: 'Ode to the First Rain',
            date: 'AUGUST 05, 2025',
            category: 'poems',
            year: '2025',
            image: 'img/placeholder.jpg',
            excerpt: 'A poem capturing the moment when the first raindrops break a summer drought, bringing life and renewal to the parched earth.',
            content: `
                <p>
                    The air grew heavy, thick with waiting,<br>
                    A hush fell on the sun-baked ground.<br>
                    Then one drop, two, a hesitant greeting,<br>
                    And a thousand whispers filled the town.
                </p>
                <p>
                    The dust rose up in a fragrant sigh,<br>
                    The leaves began their verdant dance.<br>
                    A new, clean world beneath the sky,<br>
                    A moment born of water's chance.
                </p>
            `
        },
        {
            id: '2025-09-10',
            title: 'The Silent Watchers',
            date: 'SEPTEMBER 10, 2025',
            category: 'comics',
            year: '2025',
            image: 'img/the-silent-watchers.jpg',
            excerpt: 'A mysterious comic strip about silent watchers in the city, exploring themes of vigilance and unseen forces.',
            content: `
                <p>
                    A mysterious comic strip about silent watchers in the city. The hero stands, looking out at the city, 
                    when a sudden shadow falls over the city streets. He turns, ready for the challenge ahead.
                </p>
                <p>
                    This comic explores themes of vigilance and the unseen forces that shape our urban landscapes. 
                    Each panel tells a story of observation and preparation.
                </p>
            `
        },
        {
            id: '2025-10-15',
            title: 'Autumn Whispers',
            date: 'OCTOBER 15, 2025',
            category: 'artwork',
            year: '2025',
            image: 'img/placeholder.jpg',
            excerpt: 'An artistic exploration of autumn colors and the quiet beauty of seasonal change.',
            content: `
                <p>
                    Autumn arrives not with a bang, but with a whisper. The first leaves to change are always the most courageous, 
                    leading the way for their siblings to follow. Gold and crimson paint the landscape in gentle strokes.
                </p>
                <p>
                    There's something magical about watching the world prepare for winter's rest. The trees shed their summer clothes 
                    and stand bare and proud, ready for the cold months ahead.
                </p>
            `
        },
        {
            id: '2026-01-20',
            title: 'Winter Solstice',
            date: 'JANUARY 20, 2026',
            category: 'poems',
            year: '2026',
            image: 'img/placeholder.jpg',
            excerpt: 'A contemplative poem about the shortest day of the year and the promise of returning light.',
            content: `
                <p>
                    The shortest day, the longest night,<br>
                    When shadows stretch across the snow.<br>
                    But in the darkness, hidden light,<br>
                    A promise that the sun will grow.
                </p>
                <p>
                    The earth tilts back toward the sun,<br>
                    Each day a little longer now.<br>
                    The winter's work is nearly done,<br>
                    Spring's seeds are sleeping in the ground.
                </p>
            `
        }
    ];

    // 2. DOM Elements
    const galleryGrid = document.getElementById('galleryGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const yearSelect = document.querySelector('.year-select');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDate = document.getElementById('lightboxDate');
    const lightboxContent = document.getElementById('lightboxContent');
    const closeLightbox = document.querySelector('.close-lightbox');

    // 3. Current Filters
    let currentFilter = 'all';
    let currentYear = 'all';

    // 4. Initialize Gallery
    function initGallery() {
        renderGallery();
        setupEventListeners();
    }

    // 5. Render Gallery
    function renderGallery() {
        const filteredItems = getFilteredItems();
        
        if (filteredItems.length === 0) {
            galleryGrid.innerHTML = `
                <div class="gallery-empty">
                    <h3>No items found</h3>
                    <p>Try adjusting your filters to see more content.</p>
                </div>
            `;
            return;
        }

        galleryGrid.innerHTML = filteredItems.map(item => `
            <div class="gallery-item" data-id="${item.id}" tabindex="0">
                <img src="${item.image}" alt="${item.title}" class="gallery-item-image">
                <div class="gallery-item-content">
                    <h3 class="gallery-item-title">${item.title}</h3>
                    <p class="gallery-item-date">${item.date}</p>
                    <p class="gallery-item-excerpt">${item.excerpt}</p>
                    <div class="gallery-item-meta">
                        <span class="gallery-item-category">${item.category}</span>
                        <span class="gallery-item-year">${item.year}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // 6. Get Filtered Items
    function getFilteredItems() {
        return galleryItems.filter(item => {
            const matchesFilter = currentFilter === 'all' || item.category === currentFilter;
            const matchesYear = currentYear === 'all' || item.year === currentYear;
            return matchesFilter && matchesYear;
        });
    }

    // 7. Setup Event Listeners
    function setupEventListeners() {
        // Filter buttons
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                setActiveFilter(filter);
                currentFilter = filter;
                renderGallery();
            });
        });

        // Year select
        yearSelect.addEventListener('change', (e) => {
            currentYear = e.target.value;
            renderGallery();
        });

        // Gallery item clicks
        galleryGrid.addEventListener('click', (e) => {
            const galleryItem = e.target.closest('.gallery-item');
            if (galleryItem) {
                const itemId = galleryItem.dataset.id;
                openLightbox(itemId);
            }
        });

        // Gallery item keyboard navigation
        galleryGrid.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const galleryItem = e.target.closest('.gallery-item');
                if (galleryItem) {
                    const itemId = galleryItem.dataset.id;
                    openLightbox(itemId);
                }
            }
        });

        // Close lightbox
        closeLightbox.addEventListener('click', closeLightboxModal);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightboxModal();
            }
        });

        // Escape key to close lightbox
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.style.display === 'block') {
                closeLightboxModal();
            }
        });
    }

    // 8. Set Active Filter
    function setActiveFilter(filter) {
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            }
        });
    }

    // 9. Open Lightbox
    function openLightbox(itemId) {
        const item = galleryItems.find(item => item.id === itemId);
        if (!item) return;

        lightboxImage.src = item.image;
        lightboxImage.alt = item.title;
        lightboxTitle.textContent = item.title;
        lightboxDate.textContent = item.date;
        lightboxContent.innerHTML = item.content;

        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // 10. Close Lightbox
    function closeLightboxModal() {
        lightbox.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }

    // 11. Initialize everything
    initGallery();
});