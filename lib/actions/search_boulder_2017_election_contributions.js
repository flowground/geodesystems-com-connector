/**
 * Auto-generated action file for "RAMADDA" API.
 *
 * Generated at: 2019-05-07T14:40:51.743Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / geodesystems-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'search_boulder_2017_election_contributions'
 * Endpoint Path: '/repository/search/type/boulder_2017_election_contributions'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "text",
    "name",
    "description",
    "fromdate",
    "todate",
    "createdate.from",
    "createdate.to",
    "changedate.from",
    "changedate.to",
    "group",
    "filesuffix",
    "maxlatitude",
    "minlongitude",
    "minlatitude",
    "maxlongitude",
    "max",
    "skip",
    "search.db_boulder_2017_election_contributions.committee",
    "search.db_boulder_2017_election_contributions.last_name",
    "search.db_boulder_2017_election_contributions.first_name",
    "search.db_boulder_2017_election_contributions.street",
    "search.db_boulder_2017_election_contributions.city",
    "search.db_boulder_2017_election_contributions.state",
    "search.db_boulder_2017_election_contributions.zip",
    "search.db_boulder_2017_election_contributions.contribution_type",
    "search.db_boulder_2017_election_contributions.from_candidate",
    "search.db_boulder_2017_election_contributions.date",
    "search.db_boulder_2017_election_contributions.amount",
    "search.db_boulder_2017_election_contributions.match_amount",
    "search.db_boulder_2017_election_contributions.ytd_amount",
    "search.db_boulder_2017_election_contributions.location"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "text": "text",
    "name": "name",
    "description": "description",
    "fromdate": "fromdate",
    "todate": "todate",
    "createdate_from": "createdate.from",
    "createdate_to": "createdate.to",
    "changedate_from": "changedate.from",
    "changedate_to": "changedate.to",
    "group": "group",
    "filesuffix": "filesuffix",
    "maxlatitude": "maxlatitude",
    "minlongitude": "minlongitude",
    "minlatitude": "minlatitude",
    "maxlongitude": "maxlongitude",
    "max": "max",
    "skip": "skip",
    "search_db_boulder_2017_election_contributions_committee": "search.db_boulder_2017_election_contributions.committee",
    "search_db_boulder_2017_election_contributions_last_name": "search.db_boulder_2017_election_contributions.last_name",
    "search_db_boulder_2017_election_contributions_first_name": "search.db_boulder_2017_election_contributions.first_name",
    "search_db_boulder_2017_election_contributions_street": "search.db_boulder_2017_election_contributions.street",
    "search_db_boulder_2017_election_contributions_city": "search.db_boulder_2017_election_contributions.city",
    "search_db_boulder_2017_election_contributions_state": "search.db_boulder_2017_election_contributions.state",
    "search_db_boulder_2017_election_contributions_zip": "search.db_boulder_2017_election_contributions.zip",
    "search_db_boulder_2017_election_contributions_contribution_type": "search.db_boulder_2017_election_contributions.contribution_type",
    "search_db_boulder_2017_election_contributions_from_candidate": "search.db_boulder_2017_election_contributions.from_candidate",
    "search_db_boulder_2017_election_contributions_date": "search.db_boulder_2017_election_contributions.date",
    "search_db_boulder_2017_election_contributions_amount": "search.db_boulder_2017_election_contributions.amount",
    "search_db_boulder_2017_election_contributions_match_amount": "search.db_boulder_2017_election_contributions.match_amount",
    "search_db_boulder_2017_election_contributions_ytd_amount": "search.db_boulder_2017_election_contributions.ytd_amount",
    "search_db_boulder_2017_election_contributions_location": "search.db_boulder_2017_election_contributions.location"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['basic'] = {username: cfg.username, password: cfg.password};;

    let callParams = {
        spec: spec,
        operationId: 'search_boulder_2017_election_contributions',
        pathName: '/repository/search/type/boulder_2017_election_contributions',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}