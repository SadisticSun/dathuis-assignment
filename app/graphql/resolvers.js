const ClientData = require('../data/clients.json')

function assertNotNull(val) {
    return val !== null;
}

function searchResolver(parent, args) {
    if (args.search.length < 1) return;

    const searchQuery = args.search.toLowerCase();
    const searchLimit = args.limit || 10;

    let results = [];

    for (let i = 0; i < searchLimit; i++) {
        let formattedFirstName = assertNotNull(ClientData[i].first_name) ? ClientData[i].first_name.toLowerCase() : '';
        let formattedLastName = assertNotNull(ClientData[i].last_name) ? ClientData[i].last_name.toLowerCase() : '';
        let formattedOrigin = assertNotNull(ClientData[i].origin) ? ClientData[i].origin.toLowerCase() : '';


        if (formattedFirstName.indexOf(searchQuery) > -1 ||
            formattedLastName.indexOf(searchQuery) > -1 ||
            formattedOrigin && formattedOrigin.indexOf(searchQuery) > -1) {
            results.push(ClientData[i])
        }
    }

    results = results.map(result => ({
        ...result,
        id: result.id.$oid,
    }));

    return results;
}




module.exports = searchResolver;