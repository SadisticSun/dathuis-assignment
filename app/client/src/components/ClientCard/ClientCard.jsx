import React from "react";

const ClientCard = props => {
    const client = props.clientData;
    console.log(client);
    return (
        <div className="client-card fadeIn">
            <div className="client-card-photo-container">
                <img
                    className="client-photo"
                    src={client.photo}
                    alt={client.first_name}
                />
            </div>
            <div className="client-card-header">
                <h4 className="client-name">
                    {client.first_name} {client.last_name}
                </h4>
                <h5 className="client-email">{client.email}</h5>
            </div>
            <div className="client-meta">
                <span>{client.gender === "Female" ? 'She is from ' : 'He is from '}
                    <b>{client.origin}</b>
                </span>
            </div>
        </div>
    );
};

export default ClientCard;
