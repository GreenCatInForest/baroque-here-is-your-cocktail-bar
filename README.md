# 🍸 BaroQue - Your Personal Cocktail Bar

> A modern, responsive web application for discovering and saving cocktail recipes with integrated YouTube tutorials

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge&logo=vercel)](https://baroque-here-is-your-cocktail-bar-delta.vercel.app/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[**🚀 View Live Demo**](https://baroque-here-is-your-cocktail-bar-delta.vercel.app/) | [**📧 Contact Me**](mailto:your-email@example.com)

---

## 📸 Screenshots

### Light Theme
![Light Theme Screenshot](./screenshots/light-theme.png)
*Browse cocktails with an elegant light interface*

### Dark Theme
![Dark Theme Screenshot](./screenshots/dark-theme.png)
*Switch to dark mode for comfortable evening browsing*

### Mobile View
![Mobile View](./screenshots/mobile-view.png)
*Fully responsive design works seamlessly on all devices*

> 📝 *Note: Add actual screenshots to a `/screenshots` folder in your repo*

---

## ✨ Features

### 🔍 **Smart Search**
- Search by cocktail name
- Filter by ingredient
- Browse by category
- Search by glass type
- Random cocktail discovery

### 💾 **Personal Collection**
- Save favorite recipes to local storage
- Quick access to saved cocktails
- Remove cocktails from collection
- Persistent storage across sessions

### 🎨 **Modern UI/UX**
- Light/Dark theme toggle with context API
- Mobile-first responsive design
- Smooth animations and transitions
- Conditional rendering based on data availability
- Theme-aware imagery

### 📺 **Video Integration**
- Automatic YouTube cocktail tutorial search
- Watch and learn from expert bartenders
- Integrated video player

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - UI component library
- **Context API** - State management
- **React Hooks** - Modern React patterns (useState, useContext, useEffect)
- **CSS3** - Custom styling with theme variables

### **APIs**
- **[TheCocktailDB API](https://www.thecocktaildb.com/api.php)** - Cocktail recipes and data
- **[YouTube Data API v3](https://developers.google.com/youtube/v3)** - Video tutorials

### **Deployment**
- **Vercel** - Continuous deployment and hosting
- **GitHub** - Version control

### **Browser APIs**
- **LocalStorage** - Client-side data persistence

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- YouTube Data API key (free from Google Cloud Console)

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/GreenCatInForest/baroque-here-is-your-cocktail-bar.git
   cd baroque-here-is-your-cocktail-bar
```

2. **Install dependencies**
```bash
   npm install
```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
```env
   REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key_here
```

   > 🔑 Get your YouTube API key from [Google Cloud Console](https://console.cloud.google.com/)

4. **Start the development server**
```bash
   npm start
```

5. **Open in browser**
   
   Navigate to `http://localhost:3000`

---

## 📁 Project Structure
```
baroque-here-is-your-cocktail-bar/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── CocktailCard.js      # Individual cocktail display
│   │   ├── SearchBar.js         # Search functionality
│   │   ├── ThemeToggle.js       # Light/dark mode switch
│   │   └── VideoPlayer.js       # YouTube integration
│   ├── context/
│   │   └── AppContext.js        # Global state management
│   ├── utils/
│   │   ├── api.js               # API call functions
│   │   └── localStorage.js      # Storage utilities
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .env.example
├── package.json
└── README.md
```

---

## 🎯 Key Features Explained

### Context API Implementation
All application state (theme, saved cocktails, search results) is managed through React Context, eliminating prop drilling and making the app more maintainable.

### Multiple API Endpoints
The app efficiently fetches from 5 different CocktailDB endpoints:
- Search by name
- Search by ingredient
- Filter by category
- Filter by glass
- Random cocktail

### LocalStorage Integration
User preferences and saved cocktails persist across browser sessions using localStorage API, providing a seamless user experience.

---

## 🎨 Theme System

The app features a complete light/dark theme system:
- Toggle between themes with one click
- Different images for each theme
- CSS custom properties for easy theme management
- Theme preference saved in localStorage

---

## 🧪 Usage Examples

### Search for a Cocktail
1. Enter cocktail name in the search bar
2. Browse through results
3. Click on a cocktail to view full recipe

### Save Favorites
1. Click the "Save" button on any cocktail
2. Access saved cocktails from "My Collection"
3. Remove from collection anytime

### Watch Tutorials
1. Select any cocktail
2. Scroll to the video section
3. Watch YouTube tutorials for preparation tips

---

## 🔄 Development Timeline

- **MVP Release:** March 14, 2024
- **Features Added:**
  - ✅ Multi-endpoint API integration
  - ✅ YouTube API integration
  - ✅ Theme toggle with Context
  - ✅ LocalStorage persistence
  - ✅ Responsive mobile design
  - ✅ Conditional rendering
  - ✅ Vercel deployment

---

## 🚧 Roadmap

### Planned Features
- [ ] User authentication
- [ ] Custom cocktail creation
- [ ] Share cocktails via social media
- [ ] Ingredient shopping list
- [ ] Cocktail rating system
- [ ] Advanced filtering (by alcohol content, difficulty)
- [ ] Print recipe functionality

### Technical Improvements
- [ ] TypeScript migration
- [ ] Unit testing (Jest + React Testing Library)
- [ ] Performance optimization
- [ ] Accessibility improvements (WCAG 2.1)
- [ ] PWA conversion for offline use

---

## 🤔 Challenges & Solutions

### Challenge 1: Managing Multiple API Calls
**Problem:** Multiple simultaneous API requests causing performance issues

**Solution:** Implemented efficient data fetching with useEffect cleanup and request debouncing

### Challenge 2: Theme Consistency Across Components
**Problem:** Theme state needed across deeply nested components

**Solution:** Utilized React Context API for global state management, eliminating prop drilling

### Challenge 3: LocalStorage Synchronization
**Problem:** State and localStorage getting out of sync

**Solution:** Created custom hooks for localStorage operations with automatic synchronization

---

## 🧰 Tools & Resources Used

- [TheCocktailDB API Documentation](https://www.thecocktaildb.com/api.php)
- [YouTube Data API v3 Docs](https://developers.google.com/youtube/v3)
- [React Documentation](https://react.dev/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## 📝 API Documentation

### CocktailDB Endpoints Used
```javascript
// Search by name
GET https://www.thecocktaildb.com/api/json/v1/1/search.php?s={name}

// Search by ingredient
GET https://www.thecocktaildb.com/api/json/v1/1/filter.php?i={ingredient}

// Filter by category
GET https://www.thecocktaildb.com/api/json/v1/1/filter.php?c={category}

// Random cocktail
GET https://www.thecocktaildb.com/api/json/v1/1/random.php
```

---

## 🐛 Known Issues

- YouTube API has daily quota limits (plan: implement caching)
- LocalStorage has 5MB limit (sufficient for current use case)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

- GitHub: [@GreenCatInForest](https://github.com/GreenCatInForest)

---

## 🙏 Acknowledgments

- [TheCocktailDB](https://www.thecocktaildb.com/) for the comprehensive cocktail API
- [YouTube](https://www.youtube.com/) for video content
- [Vercel](https://vercel.com/) for seamless deployment

---

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

<div align="center">

Made with ❤️ and 🍸 by Green Cat In Forest

[⬆ Back to Top](#-baroque---your-personal-cocktail-bar)

</div>
