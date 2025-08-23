// Creative Journal Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Sample entry data - you can expand this with your actual content
    const entriesData = {
        1: {
            title: "The Silent Watchers",
            date: "December 15, 2024",
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
                if (filter === 'all' || entry.getAttribute('data-category') === filter) {
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
        const header = document.querySelector('.header');
        const nav = document.querySelector('.navigation');
        
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.background = 'rgba(255, 255, 255, 0.9)';
        }
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });

    // Initialize the page
    console.log('Creative Journal Website loaded successfully!');
});
