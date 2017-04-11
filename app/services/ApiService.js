class ApiService {
    fetchPlayers() {
        return fetch('https://34.253.162.101:8443/players')
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

  fetchGames() {
    return fetch('https://34.253.162.101:8443/games')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) =>  response.json()
      )
      .catch(() => console.error("Failed to get games."));
  }
}

export default new ApiService();
