import React, { Component } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput/SearchInput";
// import Header from './components/partials/header/header'

class App extends Component {
    render() {
        return (
            <div className="App">
                <main>
                    <article>
                        <section className="search-section">
                            <SearchInput />
                        </section>
                    </article>
                </main>
            </div>
        );
    }
}

export default App;
