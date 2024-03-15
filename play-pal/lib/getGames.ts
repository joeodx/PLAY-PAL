
async function getGames () {

const options: RequestInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 7e6ab9a914ff4c4084974b0b17deed1c`,
    },
};


const response = await fetch("https://api.rawg.io/api", options);
const data = (await response.json()) as RequestInit;
console.log(data);
return data;


}

export default getGames;