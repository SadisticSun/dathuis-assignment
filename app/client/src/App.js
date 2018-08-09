import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Components
import SearchSection from "./components/SearchSection/SearchSection";

// CSS
import "./App.css";

// Apollo Client setup
const client = new ApolloClient({
    uri: "http://localhost:8080/graphql"
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div className="App">
                    <main>
                        <article>
                            
                                <SearchSection />
                           
                        </article>
                    </main>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
