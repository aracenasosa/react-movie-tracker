# 🎬 React Movie Tracker

A modern, responsive web application for discovering and exploring movies using The Movie Database (TMDb) API. Browse top-rated films, search for your favorites, and dive deep into detailed information about movies, cast, and crew.

![React](https://img.shields.io/badge/React-16.13.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Summary

React Movie Tracker is a feature-rich single-page application that provides users with an intuitive interface to explore the world of cinema. Built with React and powered by TMDb API, it offers comprehensive movie information including cast details, reviews, recommendations, trailers, and more.

## ✨ Key Features

- **Movie Search & Discovery**: Search for movies or browse top-rated films
- **Detailed Movie Information**: View comprehensive details including plot, ratings, budget, revenue, and popularity
- **Cast & Crew**: Explore actor profiles, filmographies, and social media links
- **User Reviews**: Read community reviews and ratings
- **Video Trailers**: Watch official trailers and promotional videos
- **Recommendations**: Discover similar movies based on your interests
- **Pagination**: Navigate through extensive movie collections
- **Responsive Design**: Optimized for desktop and mobile devices

## 🏗️ Architecture

### Project Structure

```
react-movie-tracker/
├── public/                 # Static assets
│   ├── index.html         # HTML template
│   └── favicon.ico        # App icon
├── src/
│   ├── components/        # React components
│   │   ├── CastCrew/     # Cast and crew display
│   │   ├── Comment/      # Movie reviews
│   │   ├── Details/      # Movie details page
│   │   ├── Footer/       # Footer component
│   │   ├── KnowFor/      # Actor's known works
│   │   ├── Nav/          # Navigation bar
│   │   ├── Pagination/   # Page navigation
│   │   ├── People/       # Actor/person details
│   │   ├── Recommendation/ # Movie recommendations
│   │   └── Search/       # Search and browse interface
│   ├── helpers/
│   │   └── Apis.js       # API integration layer
│   ├── hooks/
│   │   └── CustomHooks.js # Custom React hooks
│   ├── img/              # Image assets
│   ├── App.js            # Main application component
│   └── index.js          # Application entry point
├── package.json          # Dependencies and scripts
└── README.md            # Project documentation
```

### Technology Stack

- **Frontend Framework**: React 16.13.1
- **Routing**: React Router DOM 5.2.0
- **HTTP Client**: Axios 0.20.0
- **UI Framework**: React Bootstrap 1.3.0 + Bootstrap 4.5.3
- **Styling**: CSS Modules
- **Video Player**: React Player 2.6.2
- **Animations**: React CountUp 4.3.3
- **Date Handling**: Moment.js 2.29.1
- **Utilities**: Classnames 2.2.6

### Component Architecture

The application follows a modular component-based architecture:

1. **Container Components**: Handle data fetching and state management
2. **Presentational Components**: Focus on UI rendering
3. **Custom Hooks**: Encapsulate API calls and side effects
4. **Helper Functions**: Centralized API integration

### Data Flow

```
User Interaction → Component → Custom Hook → API Helper → TMDb API
                                    ↓
                              State Update
                                    ↓
                              UI Re-render
```

## 🚀 Deployment

### Deploying to Vercel

This project is configured for easy deployment on Vercel:

1. **Push your code to GitHub**

2. **Import project in Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Environment Variables**
   
   In your Vercel project settings, add the following environment variables:
   ```
   REACT_APP_TMDB_API_KEY=your_api_key_here
   REACT_APP_TMDB_BASE_URL=https://api.themoviedb.org/3
   ```

4. **Deploy**
   
   Vercel will automatically build and deploy your application. Every push to your main branch will trigger a new deployment.

### Manual Deployment

Alternatively, you can deploy using Vercel CLI:

```bash
npm install -g vercel
vercel --prod
```

## 🚀 Installation

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn package manager
- TMDb API key (get one at [themoviedb.org](https://www.themoviedb.org/settings/api))

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-movie-tracker.git
   cd react-movie-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Key**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Open `.env` and replace `your_api_key_here` with your TMDb API key:
   ```env
   REACT_APP_TMDB_API_KEY=your_api_key_here
   REACT_APP_TMDB_BASE_URL=https://api.themoviedb.org/3
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Available Scripts

- **`npm start`**: Runs the app in development mode
- **`npm test`**: Launches the test runner
- **`npm run build`**: Builds the app for production
- **`npm run eject`**: Ejects from Create React App (one-way operation)

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder, ready for deployment.

## 🎯 Functionality

### Home Page (Search)
- Search for movies by title
- Browse top-rated movies when search is empty
- View total results count with animated counter
- Paginated results for easy navigation
- Movie cards with poster, title, and rating

### Movie Details Page
- High-resolution backdrop and poster images
- Comprehensive movie information:
  - Title, release date, and runtime
  - Genres and production countries
  - Plot overview and tagline
  - Budget, revenue, and popularity metrics
  - Vote count and ratings
- Interactive action buttons (list, favorite, tag, star)
- Top billed cast with profile images
- Crew information (director, writer, etc.)
- User reviews with expandable content
- Video trailers and promotional content
- Movie recommendations
- Keywords and tags
- External links to official websites

### Cast & Crew Page
- Complete cast list with character names
- Crew members organized by department
- Profile images and role information
- Links to individual person pages

### Person Details Page
- Biography and personal information
- Profile photo
- Known for section with filmography
- Social media links (Twitter, Instagram, Facebook)
- Complete movie credits

### Reviews Page
- Full list of user reviews
- Author information
- Expandable review content
- Publication dates

### Recommendations Page
- Grid of similar movies
- Poster images and titles
- Direct links to movie details

## 🔌 API Integration

The application integrates with The Movie Database (TMDb) API v3:

- **Search Movies**: `/search/movie`
- **Top Rated**: `/movie/top_rated`
- **Movie Details**: `/movie/{id}`
- **Credits**: `/movie/{id}/credits`
- **Keywords**: `/movie/{id}/keywords`
- **Reviews**: `/movie/{id}/reviews`
- **Recommendations**: `/movie/{id}/recommendations`
- **Videos**: `/movie/{id}/videos`
- **Person Details**: `/person/{id}`
- **Person Credits**: `/person/{id}/combined_credits`
- **External IDs**: `/person/{id}/external_ids`

## 🎨 Design Features

- Clean, modern interface inspired by TMDb
- Responsive grid layouts
- Smooth animations and transitions
- Loading states with animated logo
- Fallback images for missing content
- Hover effects and interactive elements
- Mobile-friendly navigation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Movie data provided by [The Movie Database (TMDb)](https://www.themoviedb.org/)
- Built with [Create React App](https://create-react-app.dev/)
- Icons from [Font Awesome](https://fontawesome.com/)

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Note**: This application uses the TMDb API but is not endorsed or certified by TMDb.
