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
            type: "story",
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
            type: "poem",
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
            title: "Winter's Whisper",
            date: "December 15, 2025",
            month: "december",
            year: "2025",
            type: "artwork",
            author: "by Kellsby Merryway",
            image: "img/entry-03.jpg",
            content: `
                <p>Winter speaks in hushed tones, painting the world in crystalline beauty. Each snowflake carries a story, each frost pattern tells a tale of nature's artistry.</p>
                
                <p>There's something magical about winter that goes beyond the cold and the snow. It's a season that forces us to slow down, to appreciate the quiet moments, to find beauty in the stark contrast between light and shadow.</p>
                
                <p>Winter teaches us about patience and resilience. The trees stand bare and vulnerable, yet they endure. The ground lies frozen and seemingly lifeless, yet beneath the surface, life waits patiently for spring's return.</p>
                
                <p>I think winter is nature's way of teaching us about rest and renewal. Just as the earth needs this time of dormancy to prepare for the next cycle of growth, we too need moments of quiet reflection to prepare for what comes next.</p>
                
                <p>And maybe that's the greatest gift of winter—not just the beauty of snow-covered landscapes, but the reminder that sometimes the most profound growth happens in the quiet, hidden places of our hearts.</p>
            `
        },
        4: {
            title: "November's Grace",
            date: "November 22, 2025",
            month: "november",
            year: "2025",
            type: "poem",
            author: "by Kellsby Merryway",
            image: "img/entry-01.jpg",
            content: `
                <p>November teaches us the art of letting go, the beauty of surrender, and the wisdom found in autumn's final breath.</p>
                
                <p>There's something profoundly moving about November—the way it stands as autumn's final act, a bridge between the vibrant colors of October and the stark beauty of December. It's a month that asks us to release what no longer serves us, to make space for what's to come.</p>
                
                <p>November teaches us about the grace of endings. The trees, now mostly bare, stand with dignity in their vulnerability. The ground, covered in fallen leaves, becomes a canvas of earth tones and memories. It's a reminder that letting go is not a sign of weakness, but of strength.</p>
                
                <p>I think November is nature's way of teaching us about surrender—not giving up, but giving over. It's about trusting the process, believing that what comes next will be exactly what we need, even if we can't see it yet.</p>
                
                <p>And maybe that's the greatest gift of November—the reminder that sometimes the most beautiful moments come when we stop holding on and start letting go.</p>
            `
        },
        5: {
            title: "October's Enchantment",
            date: "October 18, 2025",
            month: "october",
            year: "2025",
            type: "story",
            author: "by Kellsby Merryway",
            image: "img/entry-02.jpg",
            content: `
                <p>October weaves its magic between summer's warmth and winter's promise, creating moments of pure enchantment in the golden light.</p>
                
                <p>There's something about October that feels like a spell—the way the light slants through the trees, painting everything in warm, golden hues. It's as if the world is caught in a moment of perfect balance, suspended between the fading intensity of summer and the approaching mystery of winter.</p>
                
                <p>October is a month of transformation, a time when the world seems to hold its breath, waiting for the next act to begin. The leaves change color with such intensity, it's as if they're trying to make up for all the beauty they'll lose in the coming months. The air carries a crispness that speaks of change, of endings and new beginnings.</p>
                
                <p>I think October is nature's way of teaching us about the beauty of transition. It's a reminder that change doesn't have to be sudden or jarring—it can be gradual, beautiful, even magical. It's a month that asks us to slow down, to appreciate the moment, to find beauty in the in-between spaces of life.</p>
                
                <p>And maybe that's the greatest enchantment of October—the way it reminds us that sometimes the most beautiful moments happen not at the beginning or the end, but in the delicate space between.</p>
            `
        },
        6: {
            title: "September's Transition",
            date: "September 28, 2025",
            month: "september",
            year: "2025",
            type: "poem",
            author: "by Kellsby Merryway",
            image: "img/entry-01.jpg",
            content: `
                <p>September bridges two worlds with gentle grace, easing us from summer's intensity into autumn's gentle embrace.</p>
                
                <p>There's something about September that feels like a bridge—a graceful span between the intensity of summer and the gentle wisdom of autumn. The heat begins to fade, replaced by cooler breezes that carry the promise of change. It's as if the world is taking a deep breath, preparing for the transformation that autumn will bring.</p>
                
                <p>September teaches us about the beauty of transition. It's a month that doesn't rush from one season to the next, but rather eases us gently, allowing us to adjust to the changing rhythms of nature. The days are still warm enough to enjoy, but there's that hint of crispness in the air that speaks of things to come.</p>
                
                <p>I think September is nature's way of teaching us about grace under pressure. It's a month that shows us how to navigate change with dignity, how to let go of what was while embracing what's to come. It's a reminder that transitions don't have to be jarring—they can be beautiful, even poetic.</p>
                
                <p>And maybe that's the greatest gift of September—the way it teaches us to find beauty in the in-between spaces, to appreciate the journey as much as the destination.</p>
            `
        },
        7: {
            title: "August's Fire",
            date: "August 15, 2025",
            month: "august",
            year: "2025",
            type: "story",
            author: "by Kellsby Merryway",
            image: "img/entry-02.jpg",
            content: `
                <p>August burns with summer's final intensity, a blaze of heat and passion that reminds us to savor every moment of warmth.</p>
                
                <p>August is summer at its most intense, its most passionate. The heat seems to slow everything down, creating a sense of timelessness that's both challenging and beautiful. In August, the world feels alive with energy, with possibility, with the raw power of the sun.</p>
                
                <p>I think August is nature's way of teaching us about intensity—about how to embrace the heat, to find beauty in discomfort, to appreciate the fullness of experience. It's a month that doesn't apologize for being what it is, and there's something admirable about that kind of authenticity.</p>
                
                <p>August reminds me to slow down, to appreciate the moment, to find joy in the simple things—a cold drink, a shady spot, the feeling of the sun on my skin. It's a month that teaches us to be present, to savor what we have while we have it.</p>
                
                <p>And maybe that's the greatest gift of August—the way it forces us to be present, to find beauty in the intensity of the moment, to appreciate the fire that burns within us all.</p>
            `
        },
        8: {
            title: "New Year's Promise",
            date: "January 15, 2025",
            month: "january",
            year: "2025",
            type: "story",
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
            type: "poem",
            author: "by Kellsby Merryway",
            image: "img/entry-02.jpg",
            content: `
                <p>February teaches us about love in all its forms—romance, friendship, and the love we have for ourselves.</p>
                
                <p>February is the month of the heart, not just because of Valentine's Day, but because it's a time when we're most aware of our need for connection. In the middle of winter, when the world feels cold and distant, we're reminded of the warmth that comes from loving and being loved.</p>
                
                <p>I think February is nature's way of teaching us about vulnerability. It's a month that asks us to open our hearts, to risk being hurt, to believe in the power of love even when it seems impossible. It's a reminder that love is worth the risk, that connection is worth the effort.</p>
                
                <p>February reminds me to be kind to myself, to practice self-love, to remember that I am worthy of love and respect. It's a month that teaches us that the most important relationship we have is the one with ourselves.</p>
            `
        },
        10: {
            title: "Rosario's Garden",
            date: "August 23, 2025",
            month: "august",
            year: "2025",
            type: "story",
            author: "by Kellsby Merryway",
            image: "img/entry-01.jpg",
            content: `
                <p>In the heart of the ancient city of Virellis, where cobblestone alleys twisted like secrets and the scent of jasmine hung like whispers in the air, there lived a man named Rosario Delmar—a bachelor of otherworldly charm and disarming grace. Dressed always in immaculate pastel suits, with a rose tucked into his lapel, Rosario was more than just a gardener—he was a legend.</p>
                
                <p>No one knew where he came from, only that he had appeared one spring with a mysterious smile and a cart full of seeds no botanist could name. Within weeks, his private greenhouse, known simply as Rosario's Garden, bloomed with colors and scents so intoxicating, they drew the curious like moths to a flame.</p>
                
                <p>The locals swore his flowers whispered at dusk. Women, men, and wanderers of all kinds would enter the gates of his garden and return changed—delirious, euphoric, sometimes never at all.</p>
                
                <p>Inside the garden were five flower maidens, each rooted in terracotta pots, their bodies curvaceous and green like tender shoots, their faces hidden behind hypnotic, vibrant blossoms. Their petals were unlike anything natural—golden, blue, orange, violet, crimson. They didn't speak, not in words, but through a seductive aura that wrapped around the heart like a vine.</p>
                
                <p>Rosario tended to them with devotion. He spoke to them. Watered them. Danced with them in the moonlight.</p>
                
                <p>Each maiden emitted an energy—a temptation—crafted from the sins of those who gazed upon them:</p>
                
                <p>Amara, with a golden bloom, exuded vanity.</p>
                
                <p>Saphyra, with blue petals, offered a dreamlike escape from reality.</p>
                
                <p>Cindra, orange and fire-bright, stirred unquenchable passion.</p>
                
                <p>Virelle, violet as twilight, offered submission and surrender.</p>
                
                <p>But the red rose maiden—Rosalith—was different.</p>
                
                <p>She was not rooted.</p>
                
                <p>She walked.</p>
                
                <p>Rosalith was Rosario's masterpiece.</p>
                
                <p>He had created her not from seeds, but from a stolen fragment of his own heart. She was temptation personified. The perfect lure.</p>
                
                <p>You see, Rosario was no mere gardener. He was a tender of souls—a being tasked with guarding the threshold between fantasy and desire, but corrupted by his own creations. Every visitor to his garden was unknowingly tested. The more they indulged in the siren-scented illusions, the more they rooted themselves in fantasy… until they were consumed, vanishing into the soil of the garden itself.</p>
                
                <p>Their memories fed the flowers. Their longing kept the blooms vibrant. And Rosalith—his rose queen—watered the illusions with the tears of those who almost escaped.</p>
                
                <p>One day, however, a visitor arrived who didn't fall for the charm. A blind painter named Elian, guided only by scent and sound, felt the garden's pull but resisted its embrace. He sensed the deceit beneath the floral beauty and recognized the longing in Rosalith's presence—not of seduction, but of entrapment.</p>
                
                <p>Elian whispered to her, not as a subject to a goddess, but as a soul to another soul.</p>
                
                <p>"You were meant to bloom free," he said. "Not to lure the lost."</p>
                
                <p>Rosalith hesitated. Something within her stirred—memories of warmth, rebellion, and something more than desire: choice.</p>
                
                <p>That night, for the first time, she wept crimson petals.</p>
                
                <p>Rosario, threatened by the unraveling of his enchantment, tried to stop her—but it was too late. With Elian's help, Rosalith uprooted herself from the lies that held her. The garden trembled. The flower maidens wailed.</p>
                
                <p>And Rosario?</p>
                
                <p>He was swallowed by his own vines, entangled in the very lust he cultivated.</p>
                
                <p>Rosalith and Elian disappeared into the night, leaving the garden to wilt and crumble. All that remains of Rosario's Garden is a rusted gate with petals at its base—petals that whisper only if you listen close:</p>
                
                <p><em>"Beware what blooms from longing, and what roots from lies."</em></p>
                
                <p><strong>The End.</strong></p>
            `
        },
        11: {
            title: "Glowbringer",
            date: "August 27, 2025",
            month: "august",
            year: "2025",
            type: "story",
            author: "by Kellsby Merryway",
            image: "img/entry-02.jpg",
            content: `
                <p>The city of Slumwood was never a place to cry. It just sighed—a deep, long, and tired exhale of a place that had seen too much and fought too long. On this particular night, the sigh was a deep one, a whisper of a city on the brink of giving up.</p>
                
                <p>Fifteen-year-old Kayce Bright zipped his worn hoodie up against the wind, which carried the scent of wet ash and desperation. He navigated the familiar maze of broken fences and flickering streetlights, his sneakers silent against the cracked pavement. The sunset, a faint smear of orange and purple, was quickly consumed by the gray, heavy smoke that never truly cleared. Another fire, another loss no one mourned out loud.</p>
                
                <p>He kept his headphones in, not for the music, but for the silence they promised—a silence that made the city's sadness a little less loud. Without them, it felt like the very air had given up.</p>
                
                <p>Kayce was a wiry kid, all gangly limbs and a sketchbook that always poked from his backpack. He was the kind who smiled easily, but only with purpose, a little light in him that he guarded like a precious secret. It was just enough to share, never enough to waste.</p>
                
                <p>He walked past the corner where Mrs. Riggins' fruit stand used to be before it was looted, past the mural of King Malik—Slumwood's only known activist—now defaced with gang tags. He hated it all, the way his home looked like a place people had forgotten. Still, he walked with a quiet defiance, each step a silent protest against the decay around him.</p>
                
                <p>When he turned the final block toward his building, the world went black.</p>
                
                <p>Not a slow fade, but a sudden, gut-wrenching total blackout.</p>
                
                <p>The streetlights died first, their last flickering breaths plunging the block into darkness. Storefronts went dark, and the little rectangles of light in apartment windows disappeared one by one. The silence was heavier than the darkness, broken only by the distant wail of sirens and the angry pop of gunshots a few blocks over. Kayce's chest tightened.</p>
                
                <p><strong>Aaliyah.</strong></p>
                
                <p>His little sister had gone to her friend Mia's, just two buildings away, two hours ago. Normally, she'd be back by now. But now? In the middle of a blackout? In Slumwood?</p>
                
                <p>Kayce didn't think. He simply ran, the single-minded panic of an older brother overriding everything else.</p>
                
                <p>The wind picked up, carrying the burnt plastic smell of desperation. He sprinted past shuttered storefronts, his eyes straining in the dark, and then he saw them. Three shadows, tall and hooded, moving at the end of the block. They were surrounding someone small, someone pressed against the cold brick of an alley wall.</p>
                
                <p><strong>Aaliyah.</strong></p>
                
                <p>She was clutched in on herself, her backpack held like a shield. The only light was the faint, dying glow of her phone in her hand. One of the figures stepped closer.</p>
                
                <p>"Yo!" Kayce yelled, his voice cracking with adrenaline. "Back off!"</p>
                
                <p>The figures turned slowly, like predators interrupted at a meal. One of them laughed. Another cracked his knuckles, the sound sharp and brutal in the dark. Kayce's heart hammered a frantic rhythm against his ribs. He couldn't fight three grown men. But he stepped forward anyway, his hands balled into fists, his small body a thin shield for his sister.</p>
                
                <p>Then, Aaliyah did something strange. She started to hum. A soft, trembling melody that rose above the sound of the wind.</p>
                
                <p>"Ain't no mountain high enough…" she sang, her voice a small, wavering whisper.</p>
                
                <p>Kayce froze. That was their song. The one their Grandma used to play during the worst of storms, telling them to dance through the dark, to let the rhythm carry them through.</p>
                
                <p>And suddenly, he felt it.</p>
                
                <p>A pulse. A thrum of warmth in his chest, a lightness that rose from deep inside him—from all the memories, the laughter, the sketchbook pages, the fierce love he had for this broken city and the little sister who still saw the good in it.</p>
                
                <p>Then he lit up.</p>
                
                <p><strong>Literally.</strong></p>
                
                <p>A golden light burst from his skin, like sunbeams trapped in a boy's body. The light traced the veins on his arms, making them glow. His hair seemed to float, and his eyes shone like stars, illuminating the alley and chasing the darkness back into the corners.</p>
                
                <p>The attackers stumbled back, blinded and confused. Kayce raised his hand—not to strike, but to protect. A dome of light flared out, pushing the men away and wrapping around Aaliyah like a hug made of pure joy.</p>
                
                <p>For the first time in his life, Kayce wasn't afraid. He was glowing.</p>
                
                <p>The light faded slowly, leaving the alley in a state of confused twilight. The men were gone. Aaliyah ran to him, her eyes wide with shock and wonder.</p>
                
                <p>"Kayce… what was that?" she whispered.</p>
                
                <p>He looked at his hands, still warm, a faint shimmer of light clinging to his skin. "I… I don't know," he said.</p>
                
                <p>But deep down, he did. In a city swallowed by sorrow, he had risen. He was the light in the dark. And this was only the beginning.</p>
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

    // Set the year button text to current year
    const yearButton = document.querySelector('[data-filter="all"]');
    if (yearButton) {
        yearButton.textContent = new Date().getFullYear().toString();
    }

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

    // Entry click functionality - handles both full-page and modal views
    entries.forEach(entry => {
        entry.addEventListener('click', function() {
            const entryId = this.querySelector('.read-more-btn').getAttribute('data-entry');
            const entryData = entriesData[entryId];
            
            if (entryData) {
                // Check entry type to determine view method
                if (entryData.type === 'story' || entryData.type === 'poem') {
                    // For stories and poems, navigate to full page
                    navigateToFullEntry(entryData);
                } else {
                    // For artwork, GIFs, animations - show modal
                    showModal(entryData);
                }
            }
        });
    });

    // Function to navigate to full entry page
    function navigateToFullEntry(entryData) {
        // Create a new page with the full entry content
        const fullPageHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${entryData.title} - Kellsby Merryway</title>
                <meta name="description" content="${entryData.title} by Kellsby Merryway">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body { 
                        font-family: 'Inter', sans-serif; 
                        line-height: 1.6; 
                        color: #333; 
                        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                        min-height: 100vh;
                    }
                    .container { 
                        max-width: 800px; 
                        margin: 0 auto; 
                        padding: 2rem; 
                        background: white; 
                        box-shadow: 0 0 30px rgba(0,0,0,0.1);
                        margin-top: 2rem;
                        margin-bottom: 2rem;
                        border-radius: 12px;
                    }
                    .header { 
                        text-align: center; 
                        margin-bottom: 3rem; 
                        padding-bottom: 2rem; 
                        border-bottom: 2px solid #e0e0e0; 
                    }
                    .title { 
                        font-family: 'Playfair Display', serif; 
                        font-size: 2.5rem; 
                        color: #2c3e50; 
                        margin-bottom: 1rem; 
                        line-height: 1.2; 
                    }
                    .meta { 
                        color: #7f8c8d; 
                        font-size: 1.1rem; 
                        margin-bottom: 0.5rem; 
                    }
                    .author { 
                        color: #34495e; 
                        font-style: italic; 
                        font-size: 1.1rem; 
                    }
                    .content { 
                        font-size: 1.1rem; 
                        line-height: 1.8; 
                        color: #2c3e50; 
                    }
                    .content p { 
                        margin-bottom: 1.5rem; 
                        text-align: justify; 
                    }
                    .back-btn { 
                        display: inline-block; 
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                        color: white; 
                        padding: 12px 24px; 
                        text-decoration: none; 
                        border-radius: 25px; 
                        margin-top: 2rem; 
                        transition: all 0.3s ease; 
                        font-weight: 500; 
                    }
                    .back-btn:hover { 
                        transform: translateY(-2px); 
                        box-shadow: 0 5px 15px rgba(0,0,0,0.2); 
                    }
                    .entry-image { 
                        text-align: center; 
                        margin-bottom: 2rem; 
                    }
                    .entry-image img { 
                        max-width: 100%; 
                        height: auto; 
                        border-radius: 8px; 
                        box-shadow: 0 5px 15px rgba(0,0,0,0.1); 
                    }
                    @media (max-width: 768px) {
                        .container { padding: 1.5rem; margin: 1rem; }
                        .title { font-size: 2rem; }
                        .content { font-size: 1rem; }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1 class="title">${entryData.title}</h1>
                        <div class="meta">${entryData.date}</div>
                        <div class="author">${entryData.author}</div>
                    </div>
                    <div class="entry-image">
                        <img src="${entryData.image}" alt="${entryData.title}" loading="lazy">
                    </div>
                    <div class="content">
                        ${entryData.content}
                    </div>
                    <a href="index.html" target="_self" class="back-btn">← Back to Journal</a>
                </div>
            </body>
            </html>
        `;
        
        // Open in new window/tab
        const newWindow = window.open('', '_blank');
        newWindow.document.write(fullPageHTML);
        newWindow.document.close();
    }

    // Function to show modal for artwork, GIFs, animations
    function showModal(entryData) {
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
