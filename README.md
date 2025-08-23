# Kellsby Merryway - Creative Journal Website

A beautiful, responsive website that showcases your creative writing and artwork in an elegant, gallery-style layout.

## ✨ Features

- **Beautiful Design**: Clean, modern interface with elegant typography
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Interactive Gallery**: Click on entries to read full content in a modal
- **Category Filtering**: Filter entries by writing, artwork, or mixed media
- **Author Attribution**: Each entry shows "by Kellsby Merryway"
- **Date Stamps**: Every piece includes the creation date
- **Smooth Animations**: Elegant transitions and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🎨 Website Structure

```
kellsby-merryway-website/
├── index.html          # Main website page
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── app.js          # Interactive functionality
├── img/                # Your artwork and images
│   ├── entry-01.jpg    # Image for "The Silent Watchers"
│   ├── entry-02.jpg    # Image for "A Gentle Home"
│   └── entry-03.jpg    # Image for "Whispers of Color"
└── README.md           # This file
```

## 🚀 How to Customize

### 1. Add Your Artwork
Replace the placeholder files in the `img/` folder with your actual artwork:
- **entry-01.jpg** - Artwork for "The Silent Watchers"
- **entry-02.jpg** - Artwork for "A Gentle Home"  
- **entry-03.jpg** - Artwork for "Whispers of Color"

**Recommended image specifications:**
- Size: 600x400 pixels or larger
- Format: JPG, PNG, or WebP
- Quality: High resolution for crisp display

### 2. Update Content
Edit `js/app.js` to change the sample content:

```javascript
const entriesData = {
    1: {
        title: "Your Title Here",
        date: "Your Date Here",
        author: "by Kellsby Merryway",
        image: "img/your-image.jpg",
        content: `
            <p>Your creative writing content here...</p>
            <p>More paragraphs...</p>
        `
    },
    // Add more entries...
};
```

### 3. Add More Entries
To add new entries:

1. **Add the HTML** in `index.html`:
```html
<article class="entry" data-category="writing">
    <div class="entry-image">
        <img src="img/entry-04.jpg" alt="Description" loading="lazy">
    </div>
    <div class="entry-content">
        <h2 class="entry-title">Your New Title</h2>
        <div class="entry-meta">
            <span class="entry-date">January 1, 2025</span>
            <span class="entry-author">by Kellsby Merryway</span>
        </div>
        <p class="entry-excerpt">Brief excerpt...</p>
        <button class="read-more-btn" data-entry="4">Read Full Entry</button>
    </div>
</article>
```

2. **Add the data** in `js/app.js`:
```javascript
4: {
    title: "Your New Title",
    date: "January 1, 2025",
    author: "by Kellsby Merryway",
    image: "img/entry-04.jpg",
    content: `Your full content here...`
}
```

3. **Add your image** to the `img/` folder

### 4. Customize Colors and Styling
Edit `css/styles.css` to change:
- Color scheme
- Typography
- Layout spacing
- Animations

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy your site

### Deploy to Any Hosting Service
1. Upload all files to your web hosting
2. Ensure the file structure is maintained
3. Your site will be live!

## 📱 Responsive Design

The website automatically adapts to:
- **Desktop**: Full layout with side-by-side content
- **Tablet**: Adjusted spacing and navigation
- **Mobile**: Single-column layout with touch-friendly buttons

## 🎯 Categories

Entries can be categorized as:
- **Writing**: Pure text-based creative pieces
- **Artwork**: Visual art pieces
- **Mixed Media**: Combinations of writing and art

## 🔧 Technical Details

- **HTML5**: Semantic, accessible markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript**: Vanilla JS for interactivity
- **Fonts**: Google Fonts (Playfair Display + Inter)
- **Icons**: CSS-based design elements
- **Animations**: CSS transitions and keyframes

## 💡 Tips for Best Results

1. **Image Quality**: Use high-resolution images for crisp display
2. **Content Length**: Keep excerpts under 150 words for best card layout
3. **Consistent Dates**: Use a consistent date format (Month Day, Year)
4. **Category Accuracy**: Tag entries correctly for proper filtering
5. **Regular Updates**: Add new content regularly to keep your journal fresh

## 🎨 Customization Ideas

- Change the color scheme to match your artistic style
- Add more categories (poetry, photography, sketches)
- Include social media links
- Add a contact form
- Create an "About" page
- Add music or audio elements

## 📞 Support

This website is built with clean, standard web technologies. If you need help customizing it, you can:
- Edit the HTML, CSS, and JavaScript files directly
- Use any text editor or code editor
- Deploy to any web hosting service

---

**Created with ❤️ for Kellsby Merryway's Creative Journal**

*Your creativity deserves a beautiful home on the web.*
