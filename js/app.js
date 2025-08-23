// Creative Journal Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Theme Management
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add a subtle animation effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    });
    
    // Sample entry data - you can expand this with your actual content
    const entriesData = {
        1: {
            title: "The Silent Watchers",
            date: "December 15, 2024",
            month: "december",
            year: "2024",
            author: "by Kellsby Merryway",
            image: "img/entry-01.jpg",
            content: `
                <p>In the quiet corners of forgotten rooms, they wait. Not with patience, but with purpose. The silent watchers see what we choose to ignore, hear what we refuse to acknowledge. They are the keepers of our secrets, the guardians of our truths.</p>
                
                <p>I've often wondered what they think of us, these spectral sentinels who observe our daily rituals with such intensity. Do they judge our choices? Do they mourn our losses? Or do they simply exist, eternal witnesses to the human condition?</p>
                
                <p>Perhaps the most unsettling thing about them isn't their presence, but their silence. In a world filled with noise—endless notifications, constant chatter, the hum of technology—their quiet observation feels almost sacred. They remind us that some things are meant to be felt, not spoken.</p>
                
                <p>I've learned to appreciate their company. In moments of solitude, when the weight of existence feels too heavy to bear alone, knowing they're there offers a strange kind of comfort. They don't offer solutions or advice, but their steady presence reminds me that I'm not truly alone.</p>
                
                <p>And maybe that's enough. Maybe the silent watchers are exactly what we need—not to guide us, but to witness our journey. To see us stumble and rise, to celebrate our victories and mourn our defeats, all without saying a word.</p>
                
                <p>In the end, perhaps we're all silent watchers in our own way, observing the lives of others while living our own. And maybe that's the most beautiful thing of all.</p>
            `
        },
        2: {
            title: "A Gentle Home",
            date: "December 10, 2024",
            month: "december",
            year: "2024",
            author: "by Kellsby Merryway",
            image: "img/entry-02.jpg",
            content: `
                <p>Home is not a place, but a feeling. It's the warmth that wraps around you like a familiar blanket, the comfort of knowing you belong somewhere, anywhere, everywhere. A gentle home holds your dreams and catches your tears.</p>
                
                <p>I've lived in many places throughout my life—small apartments with creaky floors, houses with gardens that needed tending, rooms that felt temporary and uncertain. But home has always been more than four walls and a roof. It's been the feeling of safety, of being understood, of belonging.</p>
                
                <p>My grandmother used to say that a home is made by the people who live in it, not by the building itself. She was right, of course. I've felt more at home in a tiny studio apartment filled with love than in a mansion filled with silence. It's the laughter, the conversations, the shared meals, the quiet moments of companionship that transform a space into a sanctuary.</p>
                
                <p>I think about what makes a home gentle. It's not about perfection or luxury, but about creating a space where people can be themselves without fear of judgment. It's about soft lighting and comfortable furniture, about books on shelves and art on walls, about the little details that make a space feel personal and lived-in.</p>
                
                <p>Most importantly, a gentle home is a place where emotions are welcome. Where tears can fall without shame, where joy can bubble up without restraint, where anger can be expressed and then released. A home that's gentle with your heart.</p>
                
                <p>I'm learning to create that kind of home for myself and for others. It's not always easy—life has a way of making things complicated and messy—but it's worth the effort. Because everyone deserves a place where they can rest, where they can heal, where they can grow.</p>
                
                <p>And maybe that's the true meaning of home—not just a place to live, but a place to become.</p>
            `
        },
        3: {
            title: "Whispers of Color",
            date: "December 5, 2024",
            month: "december",
            year: "2024",
            author: "by Kellsby Merryway",
            image: "img/entry-03.jpg",
            content: `
                <p>Colors speak in whispers, telling stories that words cannot capture. Each hue carries emotion, each shade holds memory. In the dance of light and pigment, we find the language of the soul.</p>
                
                <p>I've always been fascinated by how colors affect our emotions and perceptions. There's something almost magical about the way a particular shade can transport us to a specific moment in time, or evoke feelings we didn't even know we had.</p>
                
                <p>Take blue, for instance. Not just any blue, but the deep, rich blue of twilight—the color that appears just before the world goes dark. It's a color that speaks of endings and beginnings, of the quiet moments between day and night when anything seems possible. It's the color of hope and melancholy, of dreams and memories.</p>
                
                <p>Or red—not the harsh, aggressive red of warning signs, but the warm, inviting red of autumn leaves or ripe strawberries. It's a color that speaks of passion and warmth, of life and energy. It's the color of love and courage, of fire and heart.</p>
                
                <p>Green is the color of growth and renewal, of nature's endless cycle of death and rebirth. It's the color of patience and persistence, of standing firm in the face of change. It's the color of wisdom and balance, of harmony and peace.</p>
                
                <p>Yellow is the color of joy and optimism, of sunlight streaming through windows and daffodils in spring. It's the color of creativity and inspiration, of new ideas and fresh perspectives. It's the color of happiness and hope.</p>
                
                <p>But colors don't exist in isolation. They interact with each other, creating harmonies and contrasts that tell even more complex stories. A blue and green together might speak of ocean depths and forest shadows, while red and yellow together might speak of warmth and energy, of summer days and golden sunsets.</p>
                
                <p>I think that's why I love working with color so much. It's a way of communicating without words, of expressing emotions and ideas that are too complex or too subtle for language alone. It's a way of creating beauty and meaning in a world that sometimes feels chaotic and uncertain.</p>
                
                <p>And maybe that's the greatest gift that colors give us—not just beauty, but understanding. A way to see the world more clearly, to feel more deeply, to connect with ourselves and others in ways that words alone cannot achieve.</p>
                
                <p>So I listen to the whispers of color, and I try to understand what they're telling me. About the world, about myself, about the endless possibilities that exist when we open our eyes and our hearts to the beauty that surrounds us.</p>
            `
        },
        4: {
            title: "Autumn's Embrace",
            date: "November 20, 2024",
            month: "november",
            year: "2024",
            author: "by Kellsby Merryway",
            image: "img/entry-01.jpg",
            content: `
                <p>The trees shed their summer clothes, revealing the raw beauty beneath. Autumn teaches us that letting go can be as beautiful as holding on.</p>
                
                <p>There's something profoundly moving about watching the world transform itself, season by season. In autumn, nature shows us the art of graceful surrender. The leaves don't cling desperately to their branches; they let go with a final burst of color, painting the ground in brilliant hues before returning to the earth.</p>
                
                <p>I think autumn is nature's way of teaching us about change. It's not always comfortable or easy, but it's necessary for growth. Just as the trees must lose their leaves to prepare for winter's rest, we too must sometimes let go of what we're holding onto to make room for new possibilities.</p>
                
                <p>The beauty of autumn lies not just in its colors, but in its wisdom. It reminds us that endings can be beautiful, that loss can be transformative, that change is not the enemy of beauty but often its source.</p>
            `
        },
        5: {
            title: "October Dreams",
            date: "October 15, 2024",
            month: "october",
            year: "2024",
            author: "by Kellsby Merryway",
            image: "img/entry-02.jpg",
            content: `
                <p>October carries a special magic, a time when the world feels suspended between summer's warmth and winter's promise.</p>
                
                <p>There's something about October that feels like a dream—the way the light slants through the trees, the crispness in the air, the way everything seems to glow with an inner light. It's as if the world is holding its breath, waiting for something magical to happen.</p>
                
                <p>Perhaps it's the way October bridges two worlds—the fading warmth of summer and the approaching mystery of winter. It's a month of transition, of change, of possibility. In October, anything seems possible, and the world feels full of promise.</p>
                
                <p>I love how October makes me feel—alive and hopeful, ready for whatever comes next. It's a month that reminds me that change is beautiful, that endings are beginnings, and that magic is always possible if we're open to seeing it.</p>
            `
        },
        6: {
            title: "September's Song",
            date: "September 25, 2024",
            month: "september",
            year: "2024",
            author: "by Kellsby Merryway",
            image: "img/entry-01.jpg",
            content: `
                <p>September sings a gentle lullaby, easing us from summer's intensity into autumn's gentle embrace.</p>
                
                <p>There's something about September that feels like a transition, a bridge between two worlds. The heat of summer begins to fade, replaced by cooler breezes that carry the promise of change. It's as if the world is taking a deep breath, preparing for the transformation that autumn will bring.</p>
                
                <p>I love how September feels—still warm enough to enjoy the outdoors, but with that hint of crispness that speaks of things to come. It's a month that reminds me that change doesn't have to be sudden or jarring. Sometimes it comes gently, like a song that gradually shifts from one key to another.</p>
                
                <p>September teaches us patience. It shows us that good things take time, that the best transitions are the ones that happen gradually, allowing us to adjust and appreciate each moment as it comes.</p>
            `
        },
        7: {
            title: "August Heat",
            date: "August 10, 2024",
            month: "august",
            year: "2024",
            author: "by Kellsby Merryway",
            image: "img/entry-02.jpg",
            content: `
                <p>August holds the year's warmth like a precious gem, reminding us to savor every moment of summer's final days.</p>
                
                <p>August is summer at its most intense, its most vibrant. The heat seems to slow everything down, creating a sense of timelessness that's both frustrating and beautiful. In August, the world feels alive with energy, with possibility, with the raw power of the sun.</p>
                
                <p>I think August is nature's way of teaching us about intensity—about how to embrace the heat, to find beauty in discomfort, to appreciate the fullness of experience. It's a month that doesn't apologize for being what it is, and there's something admirable about that kind of authenticity.</p>
                
                <p>August reminds me to slow down, to appreciate the moment, to find joy in the simple things—a cold drink, a shady spot, the feeling of the sun on my skin. It's a month that teaches us to be present, to savor what we have while we have it.</p>
            `
        },
        8: {
            title: "New Year's Promise",
            date: "January 15, 2025",
            month: "january",
            year: "2025",
            author: "by Kellsby Merryway",
            image: "img/entry-01.jpg",
            content: `
                <p>A new year brings fresh possibilities, like a blank canvas waiting for the first stroke of color.</p>
                
                <p>There's something magical about January—the way it feels like a fresh start, a chance to begin again. It's as if the universe gives us permission to reinvent ourselves, to try new things, to dream bigger dreams.</p>
                
                <p>I think January is nature's way of teaching us about hope. Even in the depths of winter, when the world seems cold and dark, there's the promise of spring just around the corner. It's a reminder that nothing lasts forever, that change is always possible.</p>
                
                <p>January reminds me to be brave, to take risks, to believe in the impossible. It's a month that says, "Why not?" when the rest of the year might say, "Why bother?" It's a month of potential, of promise, of possibility.</p>
            `
        },
        9: {
            title: "February's Heart",
            date: "February 14, 2025",
            month: "february",
            year: "2025",
            author: "by Kellsby Merryway",
            image: "img/entry-02.jpg",
            content: `
                <p>February teaches us about love in all its forms—romance, friendship, and the love we have for ourselves.</p>
                
                <p>February is the month of the heart, not just because of Valentine's Day, but because it's a time when we're most aware of our need for connection. In the middle of winter, when the world feels cold and distant, we're reminded of the warmth that comes from loving and being loved.</p>
                
                <p>I think February is nature's way of teaching us about vulnerability. It's a month that asks us to open our hearts, to risk being hurt, to believe in the power of love even when it seems impossible. It's a reminder that love is worth the risk, that connection is worth the effort.</p>
                
                <p>February reminds me to be kind to myself, to practice self-love, to remember that I am worthy of love and respect. It's a month that teaches us that the most important relationship we have is the one with ourselves.</p>
            `
        }
    };

    // DOM Elements
    const navButtons = document.querySelectorAll('.nav-btn');
    const entries = document.querySelectorAll('.entry');
    const modal = document.getElementById('entryModal');
    const modalClose = document.querySelector('.modal-close');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalContent = document.getElementById('modalContent');

    // Filter functionality
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter entries
            entries.forEach(entry => {
                if (filter === 'all') {
                    // Show entries from current year (2025) when "Year" is selected
                    const currentYear = new Date().getFullYear().toString();
                    const entryYear = entry.querySelector('.entry-date').textContent.split(', ')[1];
                    if (entryYear === currentYear) {
                        entry.style.display = 'block';
                        entry.style.animation = 'fadeInUp 0.6s ease-out';
                    } else {
                        entry.style.display = 'none';
                    }
                } else if (entry.getAttribute('data-month') === filter) {
                    entry.style.display = 'block';
                    entry.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    entry.style.display = 'none';
                }
            });
        });
    });

    // Modal functionality
    entries.forEach(entry => {
        entry.addEventListener('click', function() {
            const entryId = this.querySelector('.read-more-btn').getAttribute('data-entry');
            const entryData = entriesData[entryId];
            
            if (entryData) {
                // Populate modal with entry data
                modalImage.src = entryData.image;
                modalImage.alt = entryData.title;
                modalTitle.textContent = entryData.title;
                modalDate.textContent = entryData.date;
                modalAuthor.textContent = entryData.author;
                modalContent.innerHTML = entryData.content;
                
                // Show modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                // Add fade-in animation
                modal.style.opacity = '0';
                modal.style.transform = 'scale(0.9)';
                
                setTimeout(() => {
                    modal.style.transition = 'all 0.3s ease';
                    modal.style.opacity = '1';
                    modal.style.transform = 'scale(1)';
                }, 10);
            }
        });
    });

    // Close modal
    modalClose.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.transition = 'all 0.3s ease';
        modal.style.opacity = '0';
        modal.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        // Removed scroll effect to keep navigation connected to header
        // Navigation now stays visually connected to the header
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            console.log('Image loaded successfully:', this.src);
        });
        
        img.addEventListener('error', function() {
            console.error('Image failed to load:', this.src);
            this.style.display = 'none';
            // Show fallback title if logo fails
            const fallbackTitle = this.nextElementSibling;
            if (fallbackTitle && fallbackTitle.classList.contains('site-title')) {
                fallbackTitle.style.display = 'block';
            }
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });

    // Header text is now clean and simple

    // Initialize the page
    console.log('Creative Journal Website loaded successfully!');
    console.log('Theme toggle functionality enabled');
});
