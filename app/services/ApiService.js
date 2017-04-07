class ApiService {
    fetchPlayers() {
        return fetch('http://34.253.162.101:8080/players')
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) =>  response.json()
            )
            .catch(() => console.error("Failed to get players."));
    }
}

export default new ApiService();
