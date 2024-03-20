interface Genre {
    id: number;
    name: string;
    // image_background?: string;
  }


async function getGenre(): Promise<Genre[]> {
    // Use an environment variable for your API key
    const apiKey = "7e6ab9a914ff4c4084974b0b17deed1c";
    if (!apiKey) {
        console.error("RAWG API key is not set.");
        return [];
    }

    const url = `https://api.rawg.io/api/games/genre?key=7e6ab9a914ff4c4084974b0b17deed1c`;

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
        return data.results as Genre[];
        
    } catch (error) {
        console.error("Failed to fetch games:", error);
        return [];

        
    }
    
}
 
  export default getGenre;
  