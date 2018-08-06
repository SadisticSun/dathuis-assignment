import React, { Component } from "react";
import axios from "axios";
import SearchSuggestions from "../SearchSuggestions/SearchSuggestions";
export default class SearchInput extends Component {
    state = {
        query: "",
        results: []
    };

    handleInputChange = () => {
        console.log(this.state.query);
        this.setState({ query: this.search.value }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getData();
                }
            } else if (!this.state.query) {
            }
        });
    };

    getData = () => {
        axios
            .get("/api/data")
            .then(res => res.data)
            .then(data => {
                const formattedQuery = this.state.query.toLowerCase();
                const filteredData = data
                    .filter(item => {
                        const formattedItem = item.first_name.toLowerCase();
                        return formattedItem.indexOf(formattedQuery) !== -1;
                    })
                    .slice(0, 10);
                return filteredData;
            })
            .then(filteredData =>
                this.setState({
                    results: filteredData
                })
            );
    };

    render() {
        return (
            <div>
                <form className="search-input-container">
                    <input
                        className="search-input"
                        type="search"
                        placeholder="Type to search..."
                        ref={input => (this.search = input)}
                        onChange={this.handleInputChange}
                    />
                </form>
                <SearchSuggestions results={this.state.results} />
            </div>
        );
    }
}
