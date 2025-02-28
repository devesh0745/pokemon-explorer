Pokémon List App
This is a simple Next.js application that fetches a list of Pokémon from the PokéAPI and displays them. Users can search for Pokémon by name, and the list updates dynamically based on the search query. The app uses Server-Side Rendering (SSR) to fetch data on the server, ensuring faster load times and better SEO.

Features
Displays a list of Pokémon fetched from the PokéAPI.
Search functionality to filter Pokémon by name.
Search query is handled via URL query parameters.
SSR is used for fetching Pokémon data.
Technologies Used
Next.js (React framework)
Tailwind CSS (for styling)
PokéAPI (for Pokémon data)
Setup Instructions
To run this project locally, follow these steps:

1. Clone the repository
bash
Copy
Edit
git clone https://github.com/devesh0745/pokemon-explorer.git
2. Install dependencies
Navigate into the project directory and install the necessary packages:

bash
Copy
Edit
cd pokemon-list-app
npm install
3. Run the development server
Start the development server to see the app running locally:

bash
Copy
Edit
npm run dev
The application should now be running at http://localhost:3000.

Usage
Visit the homepage to see the list of Pokémon.
You can search for Pokémon by typing the name in the search input field. The list will dynamically update to show results based on your search query.
Clicking the "X" button will reset the search query and show the full list of Pokémon again.
