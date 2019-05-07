/**
 * Auto-generated action file for "RAMADDA" API.
 *
 * Generated at: 2019-05-07T14:40:51.745Z
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
 * Operation: 'search_boulder_county_voter_details'
 * Endpoint Path: '/repository/search/type/boulder_county_voter_details'
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
    "search.db_boulder_county_voter_details.first_name",
    "search.db_boulder_county_voter_details.last_name",
    "search.db_boulder_county_voter_details.registration_date",
    "search.db_boulder_county_voter_details.last_updated_date",
    "search.db_boulder_county_voter_details.residential_address",
    "search.db_boulder_county_voter_details.residential_city",
    "search.db_boulder_county_voter_details.mailing_zip_code",
    "search.db_boulder_county_voter_details.voter_status",
    "search.db_boulder_county_voter_details.party",
    "search.db_boulder_county_voter_details.gender",
    "search.db_boulder_county_voter_details.birth_year",
    "search.db_boulder_county_voter_details.precinct_code",
    "search.db_boulder_county_voter_details.congressional",
    "search.db_boulder_county_voter_details.state_senate",
    "search.db_boulder_county_voter_details.state_house",
    "search.db_boulder_county_voter_details.municipality",
    "search.db_boulder_county_voter_details.city_ward_district",
    "search.db_boulder_county_voter_details.school_district",
    "search.db_boulder_county_voter_details.location"
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
    "search_db_boulder_county_voter_details_first_name": "search.db_boulder_county_voter_details.first_name",
    "search_db_boulder_county_voter_details_last_name": "search.db_boulder_county_voter_details.last_name",
    "search_db_boulder_county_voter_details_registration_date": "search.db_boulder_county_voter_details.registration_date",
    "search_db_boulder_county_voter_details_last_updated_date": "search.db_boulder_county_voter_details.last_updated_date",
    "search_db_boulder_county_voter_details_residential_address": "search.db_boulder_county_voter_details.residential_address",
    "search_db_boulder_county_voter_details_residential_city": "search.db_boulder_county_voter_details.residential_city",
    "search_db_boulder_county_voter_details_mailing_zip_code": "search.db_boulder_county_voter_details.mailing_zip_code",
    "search_db_boulder_county_voter_details_voter_status": "search.db_boulder_county_voter_details.voter_status",
    "search_db_boulder_county_voter_details_party": "search.db_boulder_county_voter_details.party",
    "search_db_boulder_county_voter_details_gender": "search.db_boulder_county_voter_details.gender",
    "search_db_boulder_county_voter_details_birth_year": "search.db_boulder_county_voter_details.birth_year",
    "search_db_boulder_county_voter_details_precinct_code": "search.db_boulder_county_voter_details.precinct_code",
    "search_db_boulder_county_voter_details_congressional": "search.db_boulder_county_voter_details.congressional",
    "search_db_boulder_county_voter_details_state_senate": "search.db_boulder_county_voter_details.state_senate",
    "search_db_boulder_county_voter_details_state_house": "search.db_boulder_county_voter_details.state_house",
    "search_db_boulder_county_voter_details_municipality": "search.db_boulder_county_voter_details.municipality",
    "search_db_boulder_county_voter_details_city_ward_district": "search.db_boulder_county_voter_details.city_ward_district",
    "search_db_boulder_county_voter_details_school_district": "search.db_boulder_county_voter_details.school_district",
    "search_db_boulder_county_voter_details_location": "search.db_boulder_county_voter_details.location"
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
        operationId: 'search_boulder_county_voter_details',
        pathName: '/repository/search/type/boulder_county_voter_details',
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