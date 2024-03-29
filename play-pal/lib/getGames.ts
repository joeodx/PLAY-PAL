import axios from "axios"

// Define an interface for the game data you expect. This is a simple example;
// you should adjust it according to the actual data structure returned by RAWG.
interface Game {
    id: number;
    name: string;
    background_image: string;
    genres: Genre[];
  }

interface Genre {
    id: number;
    name: string;
}

  
  // This is a simplified example function to fetch games from RAWG.
  async function getGames(): Promise<Game[]> {
      // Use an environment variable for your API key
      const apiKey = "7e6ab9a914ff4c4084974b0b17deed1c";
      if (!apiKey) {
          console.error("RAWG API key is not set.");
          return [];
      }
  
      const url = `https://api.rawg.io/api/games?key=7e6ab9a914ff4c4084974b0b17deed1c`;
  
      const options: RequestInit = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      };
  
      try {
          const response = await fetch(url, options);
          if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          // Assuming the data structure has a `results` array field based on RAWG's typical response.
          // Adjust this according to the actual structure.
          return data.results as Game[];
          
      } catch (error) {
          console.error("Failed to fetch games:", error);
          return [];

          
      }
    }


const actionGenre ="action"

async function filterGamesByGenre(): Promise<void> {
    try {
        const games = await getGames()

        const actionGames = games.filter(game => game.genres.some(genre => genre.name.toLowerCase() === actionGenre.toLowerCase()))
        console.log(`Games in the ${actionGenre} genre`)
        actionGames.forEach(game => console.log(game.name))
    }
    catch (error) {
        console.error("Error filtering games by genre", error);
    }
}

filterGamesByGenre()
  
export default getGames
 