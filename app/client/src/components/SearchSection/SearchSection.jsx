import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
// Components
import SearchResults from "../SearchResults/SearchResults";

class SearchSection extends Component {
    state = {
        query: ""
    };

    handleInputChange = () => {
        this.setState({ query: this.search.value });
    };

    setQuery = () => {
        return (
            <Query query={GET_CLIENTS} variables={{ search: this.state.query }}>
                {({ loading, error, data }) => {
                    return (
                        <SearchResults
                            loading={loading}
                            error={error}
                            results={data.clients}
                        />
                    );
                }}
            </Query>
        );
    };

    render() {
        const query = this.setQuery();
        return (
            <section className="search-section">
                <div className="search-input-container">
                    <form>
                        <input
                            className="search-input"
                            type="search"
                            placeholder="Type to search..."
                            ref={input => (this.search = input)}
                            onChange={this.handleInputChange}
                        />
                    </form>
                </div>
                <div className="search-results-container">
                    <div className="search-results">{query}</div>
                </div>
            </section>
        );
    }
}

const GET_CLIENTS = gql`
    query GET_CLIENTS($search: String) {
        clients(search: $search) {
            id
            first_name
            last_name
            origin
            email
            gender
            photo
        }
    }
`;

export default SearchSection;
