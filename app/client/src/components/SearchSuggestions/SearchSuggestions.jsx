import React from "react";

const SearchSuggestions = props => {
    const options = props.results.map(result => (
        <li key={result.id.$oid}>{result.first_name}</li>
    ));
    return <ul>{options}</ul>;
};

export default SearchSuggestions;
