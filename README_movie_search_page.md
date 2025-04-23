
# Movie Search Page

A ReactJS-based web application that allows users to search for movies and display detailed information such as the movie title, release date, ratings, genre, and more using the **TMDb API**.

## Features

- Search for movies by title
- Display detailed information such as:
  - Title
  - Release Date
  - Overview (Plot)
  - Genre(s)
  - Rating
  - Movie Poster
- Paginated results for large data sets
- Mobile-friendly and responsive design

## Technologies Used

- **ReactJS** for building the user interface
- **TMDb API** to fetch movie data
- **Axios** for making API requests
- **CSS/Styled Components** for styling
- **React Router** for routing and navigation

## How to Run

### 1. Clone the repository

Clone this repository to your local machine:

```bash
git clone https://github.com/toga3c/movie-search-page.git
```

### 2. Install dependencies

Navigate to the project folder and install the necessary dependencies:

```bash
cd movie-search-page
npm install
```

### 3. Get your TMDb API Key

You need a TMDb API key to fetch movie data. To get your API key:

- Visit [TMDb's website](https://www.themoviedb.org/).
- Create an account or log in.
- Go to your account settings and generate an API key from the API section.

### 4. Set up your API key

Create a `.env` file in the root of your project (same level as `package.json`), and add your API key like so:

```
REACT_APP_TMDB_API_KEY=your_api_key_here
```

### 5. Start the application

Once everything is set up, run the following command to start the development server:

```bash
npm start
```

This will open the app in your default browser at `http://localhost:3000`.

---

## Example Usage

1. Type a movie title in the search bar.
2. Click the search button or press enter.
3. The app will display the movie details, including title, overview, genre, and rating.

---

## Contribution

Feel free to fork the project, submit issues, or send pull requests to improve it!

---

## License

This project is open source and available under the [MIT License](LICENSE).
