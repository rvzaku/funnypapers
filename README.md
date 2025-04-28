# Avni's Exam Support Website

A beautiful, responsive website created with love by Atharv to support and motivate Avni during her exams.

## Features

- 💕 Loving, motivational messages
- 📚 Exam timeline with countdown timers
- 🌙 Dark mode toggle for late-night studying
- 📝 Feedback form after each exam
- ✨ Beautiful animations and particle effects
- 📱 Fully responsive design for all devices

## Getting Started

### Prerequisites

- Just a web browser! No need for any special software.

### Setup

1. Clone this repository
   ```bash
   git clone https://github.com/yourusername/avni-exam-support.git
   ```

2. Customize the website (optional)
   - Update the email in `script.js` by changing the value in the `updateFormEmail()` function
   - Add more personal messages in the HTML
   - Adjust colors in the CSS variables (`:root` section in `styles.css`)

3. Deploy to GitHub Pages
   - Go to your repository settings
   - Navigate to "Pages" under "Code and automation"
   - Select "main" branch as the source
   - Click "Save"
   - Your site will be published at `https://yourusername.github.io/avni-exam-support/`

## Customization Guide

### Adding More Love Messages

Edit the `index.html` file and locate the "Love Notes For You" section. Add more messages using this format:

```html
<div class="love-message" data-aos="fade-up">
    <p>Your new love message here.</p>
</div>
```

### Changing Colors

Open `styles.css` and modify the CSS variables in the `:root` section:

```css
:root {
    --primary-color: #e4a9c1; /* Pink color */
    --secondary-color: #a1c4fd; /* Light blue color */
    --accent-color: #8675ef; /* Purple color */
    /* Other variables */
}
```

### Updating Form Email

Open `script.js` and locate the `updateFormEmail()` function. Replace the placeholder email with your actual email:

```javascript
form.action = "https://formsubmit.co/your-actual-email@example.com";
```

## Future Improvements

- Add a photo gallery of memories together
- Include audio messages or a playlist of meaningful songs
- Create a "Good Luck" message section where friends can add supportive notes
- Add confetti animations for when an exam is completed
- Create a "Stress Relief" section with breathing exercises or funny memes

## License

This project was created with love for personal use. Feel free to adapt it for your own loved ones!

---

Created with �� by Atharv for Avni 