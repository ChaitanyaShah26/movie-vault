# Movie Vault

**Movie Vault** is a sleek, responsive movie discovery application built with **React**, **Vite**, and **React Bootstrap**. It allows users to browse trending films, search for specific titles, and view detailed information like cast, genres, and ratings.

## 🚀 Tech Stack

<p align="center">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=react,vite,reactbootstrap,js,axios,css,html" /> <br/>
    <img src="https://img.shields.io/badge/TMDB-API-000000?style=for-the-badge" alt="TMDB API"/>
</p>


## ✨ Key Features

-   🔥 **Trending Movies** 
-   🔍 **Instant Search** 
-   🎭 **Detailed Insights** 
-   📱 **Fully Responsive**

## 📁 Project Structure

```text
movie-vault/
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # Reusable UI components (MovieCard, DetailsModal)
│   ├── services/          # API configuration and axios instances
│   ├── App.jsx            # Main application logic & layout
│   ├── App.css            # Custom global styling & dark mode themes
│   └── main.jsx           # Entry point
├── .env                   # Environment variables (API Keys)
├── index.html             # HTML template
└── package.json           # Project dependencies & scripts
```

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ChaitanyaShah26/movie-vault.git
cd movie-vault
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
To fetch movie data, you need a **TMDB API Key**.

1.  Go to [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api) and create an account.
2.  Navigate to **Settings > API** to generate your API Key.
3.  Create a `.env` file in the **root directory** of the project:
    ```bash
    touch .env
    ```
4.  Add your API key to the `.env` file using the `VITE_` prefix (required by Vite):
    ```env
    VITE_TMDB_API_KEY=your_actual_api_key_here
    ```

### 4. Start the development server
```bash
npm run dev
```

### 5. View the App
Open your browser and visit:
```
http://localhost:5173
```
OR
```
http://localhost:5173/movie-vault/
```

## 

<p align="center">
  <a href="https://github.com/ChaitanyaShah26" target="_blank">@ChaitanyaShah26</a>
</p>