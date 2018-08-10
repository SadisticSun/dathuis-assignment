import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

// Components
import Author from "../Author/Author";
import LogoBlock from '../LogoBlock/LogoBlock';
import SearchResults from "../SearchResults/SearchResults";

class SearchSection extends Component {
    state = {
        query: "",
        searchLimit: 10
    };

    handleSearchInput = () => {
        this.setState({
            query: this.searchInput.value
        });
    };

    handleSearchLimitChange = () => {
        this.setState({
            searchLimit: this.searchLimitInput.value
        });
    };

    setQuery = () => {
        return (
            <Query
                query={GET_CLIENTS}
                variables={{
                    search: this.state.query,
                    limit: this.state.searchLimit
                }}
            >
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
                <Author />
                <LogoBlock />
                <div className="search-input-container">
                    <form className="search-form fadeIn">
                        <input
                            className="search-input"
                            type="search"
                            placeholder="Type to search..."
                            ref={input => (this.searchInput = input)}
                            onChange={this.handleSearchInput}
                        />

                        <input
                            className="search-limit"
                            type="number"
                            ref={input => (this.searchLimitInput = input)}
                            onChange={this.handleSearchLimitChange}
                            min="1"
                            max="100"
                            placeholder="10"
                            value={this.state.searchLimit}
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
    query GET_CLIENTS($search: String, $limit: String) {
        clients(search: $search, limit: $limit) {
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
