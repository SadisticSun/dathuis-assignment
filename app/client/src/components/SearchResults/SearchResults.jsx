import React from "react";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import ClientCard from "../ClientCard/ClientCard";

const SearchResults = props => {
    const hasError = props.error;
    const isLoading = props.loading;
    const clients = props.results;

    if (hasError) {
        return (
            <Error
                message="Whoops! :( Something went wrong.."
                error={hasError}
            />
        );
    }

    if (isLoading) {
        return <Loading />;
    }

    if (clients && clients.length > 0) {
        return clients.map(client => {
            return <ClientCard key={client.id} clientData={client} />;
        });
    }

    if (clients && clients.length === 0) {
        return <p className="default fadeIn">Nothing found.</p>;
    }

    return (
        <p className="default fadeIn">
            Search for a valid client name, last name or place of origin.
        </p>
    );
};

export default SearchResults;
