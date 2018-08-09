import React from "react";

const SearchResults = (props) => {
    const hasError = props.error;
    const isLoading = props.loading;
    const clients = props.results;
    
    if (hasError) {
        return <p>Whoops! :( Something went wrong: {hasError}</p>
    }
    if (isLoading) {
        return <p>Loading...</p>
    }
    if (clients && clients.length > 0) {
        return clients.map(client => {
            return <p key={client.first_name}>{client.first_name}</p>
        })
    }

    return <p></p>
};

export default SearchResults;
