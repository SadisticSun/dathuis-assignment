import React, { Fragment } from "react";

const LogoBlock = () => {
    return (
        <Fragment>
            <p>Made with:</p>
            <div className="logo-block">
                <img className="logo" src="/img/node.png" alt="NodeJS" />
                <img className="logo" src="/img/express.png" alt="ExpressJS" />
                <img className="logo" src="/img/graphql.png" alt="GraphQL" />
                <img className="logo" src="/img/react.png" alt="ReactJS" />
            </div>
        </Fragment>
    );
};

export default LogoBlock;
