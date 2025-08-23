// app.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. Journal Post Data
    const journalPosts = [
        {
            id: '2025-08-02',
            date: 'AUGUST 02, 2025',
            title: 'A Gentle Home',
            author: 'A SHORT STORY BY KELLSBY MERRYWAY',
            month: 'AUGUST',
            year: '2025',
            content: `
                <p>
                    The old house stood on a hill overlooking a quiet cove, its windows like tired eyes watching the tide. 
                    It wasn’t grand, but it was gentle. The floorboards sang a soft tune with every step, and the scent of aged cedar and sea salt was a permanent perfume.
                    This was a home built not of stone and wood alone, but of the silent moments that collect over time.
                </p>
                <img src="img/a-gentle-home.jpg" alt="Placeholder image for a gentle home.">
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
            date: 'AUGUST 05, 2025',
            title: 'Ode to the First Rain',
            author: 'A POEM BY KELLSBY MERRYWAY',
            month: 'AUGUST',
            year: '2025',
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
                    A moment born of water’s chance.
                </p>
            `
        },
        {
            id: '2025-09-10',
            date: 'SEPTEMBER 10, 2025',
            title: 'The Silent Watchers',
            author: 'A COMIC BY KELLSBY MERRYWAY',
            month: 'SEPTEMBER',
            year: '2025',
            content: `
                <p>
                    A mysterious comic strip about silent watchers in the city. The hero stands, looking out at the city, 
                    when a sudden shadow falls over the city streets. He turns, ready for the challenge ahead.
                </p>
                <img src="img/the-silent-watchers.jpg" alt="The Silent Watchers - Comic Strip">
                <p>
                    This comic explores themes of vigilance and the unseen forces that shape our urban landscapes. 
                    Each panel tells a story of observation and preparation.
                </p>
            `
        },
    ];
    
    // A list of all months for a complete sidebar
    const allMonths = [
        'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
        'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];


    // 2. DOM Elements to Manipulate
    const sidebarToc = document.querySelector('.sidebar-toc');
    const postContainer = document.querySelector('.journal-post-container');

    // 3. Render all posts for a selected month
    function renderPostsForMonth(year, month) {
        // Find all posts that match the selected year and month
        let postsForMonth;
        if (month === 'all') {
            postsForMonth = journalPosts.filter(p => p.year === year);
        } else {
            postsForMonth = journalPosts.filter(p => p.year === year && p.month === month);
        }

        // Clear the post container before adding new content
        postContainer.innerHTML = '';

        if (postsForMonth.length > 0) {
            postsForMonth.forEach(post => {
                const postHTML = `
                    <div class="post-entry">
                        <p class="post-date">${post.date}</p>
                        <h2 class="post-title">${post.title}</h2>
                        <p class="post-author">${post.author}</p>
                        <div class="post-content">
                            ${post.content}
                        </div>
                    </div>
                `;
                // Append the new post's HTML to the container
                postContainer.innerHTML += postHTML;
            });
            
            // Remove the 'selected' class from any currently selected link
            const currentSelected = document.querySelector('.month-nav a.selected');
            if (currentSelected) {
                currentSelected.classList.remove('selected');
            }

            // Find the link corresponding to the current month and add the 'selected' class
            const newSelectedLink = document.querySelector(
                `.month-nav a[data-year="${year}"][data-month="${month}"]`
            );
            if (newSelectedLink) {
                newSelectedLink.classList.add('selected');
            }
        }
    }

    // 4. Generate the sidebar navigation dynamically
    function generateSidebar() {
        const postsByDate = {};
        journalPosts.forEach(post => {
            if (!postsByDate[post.year]) postsByDate[post.year] = {};
            if (!postsByDate[post.year][post.month]) postsByDate[post.year][post.month] = [];
            postsByDate[post.year][post.month].push(post);
        });

        let sidebarHTML = '';
        const currentYear = '2025';

        if (postsByDate[currentYear]) {
            sidebarHTML += `<div class="year">${currentYear}</div>`;
            sidebarHTML += `<nav class="month-nav"><ul>`;
            
            // Add "View All Posts" option
            sidebarHTML += `
                <li>
                    <a href="#" class="view-all-link" data-year="${currentYear}" data-month="all">
                        VIEW ALL POSTS
                    </a>
                </li>
            `;

            allMonths.forEach(month => {
                const postsExistForMonth = postsByDate[currentYear][month] && postsByDate[currentYear][month].length > 0;
                const linkClass = postsExistForMonth ? '' : 'disabled';
                const postCount = postsExistForMonth ? postsByDate[currentYear][month].length : 0;

                sidebarHTML += `
                    <li>
                        <a href="#" class="${linkClass}" data-year="${currentYear}" data-month="${month}">
                            ${month}${postCount > 0 ? ` <span class="post-count">(${postCount})</span>` : ''}
                        </a>
                    </li>
                `;
            });
            sidebarHTML += `</ul></nav>`;
        }
        
        sidebarToc.innerHTML = sidebarHTML;
    }

    // 5. Handle all clicks on the sidebar using event delegation
    sidebarToc.addEventListener('click', (e) => {
        const clickedLink = e.target.closest('a');
        if (clickedLink && !clickedLink.classList.contains('disabled')) {
            e.preventDefault();
            
            const year = clickedLink.dataset.year;
            const month = clickedLink.dataset.month;
            
            renderPostsForMonth(year, month);
        }
    });

    // 6. Initial Page Load Logic
    generateSidebar();
    
    // Default to the first post's month when the page loads
    if (journalPosts.length > 0) {
        renderPostsForMonth(journalPosts[0].year, journalPosts[0].month);
    }
});