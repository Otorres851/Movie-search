# 🎬 Movie Search Application

This project is a movie search application built with Next.js, React, and Tailwind CSS. It utilizes the OMDB API to fetch movie data and display details.

## 📋 Table of Contents

- [🚀 Installation](#-installation)
- [📖 Usage](#-usage)
- [🧩 Components](#-components)
  - [🎥 Movie](#-movie)
  - [📄 MovieDetailPage](#-moviedetailpage)
  - [📜 MoviesList](#-movieslist)
  - [🔤 Title](#-title)
- [🔧 Environment Variables](#-environment-variables)
- [📚 Documentation](#-documentation)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/Otorres851/Movie-search.git
cd movies-app
```

2. Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Create a ".env.local" file in the root directory and add your OMDB API key:

```bash
NEXT_PUBLIC_API_KEY=your_omdb_api_key
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## 📖 Usage
The application allows users to search for movies and view details for each movie. It consists of the following components:

## 🧩 Components

### 🎥 Movie
Description: Displays a movie card with a poster, title, and year.
Functionality: Clicking on the card navigates to the movie's detail page.

### 📄 MovieDetailPage
Description: Fetches and displays detailed information about a movie using the movie's ID from the URL.
Functionality: Shows movie title, ID, year, poster, and plot.

### 📜 MoviesList
Description: Displays a list of movie cards.
Functionality: Uses the Movie component to display each movie.

### 🔤 Title
Description: Displays a title.
Functionality: Can be used to display titles in different sections of the application.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 🔧 Environment Variables
You need to set up the following environment variable in your .env.local file:

```bash
- NEXT_PUBLIC_API_KEY: Your OMDB API key.
```

## 📚 Documentation 
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://legacy.reactjs.org/docs/getting-started.html)
- [OMDB API Documentation](https://www.omdbapi.com/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🤝 Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.

## 📜 License
This project is licensed under the GNU GENERAL PUBLIC LICENSE. See the LICENSE file for details.