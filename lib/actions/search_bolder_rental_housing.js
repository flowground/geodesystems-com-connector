/**
 * Auto-generated action file for "RAMADDA" API.
 *
 * Generated at: 2019-05-07T14:40:51.741Z
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
 * Operation: 'search_bolder_rental_housing'
 * Endpoint Path: '/repository/search/type/bolder_rental_housing'
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
    "search.db_bolder_rental_housing.propaddr1",
    "search.db_bolder_rental_housing.name",
    "search.db_bolder_rental_housing.company",
    "search.db_bolder_rental_housing.persontype",
    "search.db_bolder_rental_housing.licenseexp",
    "search.db_bolder_rental_housing.asrid",
    "search.db_bolder_rental_housing.licensenum",
    "search.db_bolder_rental_housing.neighbrhd",
    "search.db_bolder_rental_housing.rentaltype",
    "search.db_bolder_rental_housing.complexnm",
    "search.db_bolder_rental_housing.bldgtype",
    "search.db_bolder_rental_housing.dwellunits",
    "search.db_bolder_rental_housing.roomunits",
    "search.db_bolder_rental_housing.engcompl",
    "search.db_bolder_rental_housing.person_1",
    "search.db_bolder_rental_housing.ppl1_coname",
    "search.db_bolder_rental_housing.ppl1_role",
    "search.db_bolder_rental_housing.person_2",
    "search.db_bolder_rental_housing.ppl2_coname",
    "search.db_bolder_rental_housing.ppl2_role",
    "search.db_bolder_rental_housing.location"
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
    "search_db_bolder_rental_housing_propaddr1": "search.db_bolder_rental_housing.propaddr1",
    "search_db_bolder_rental_housing_name": "search.db_bolder_rental_housing.name",
    "search_db_bolder_rental_housing_company": "search.db_bolder_rental_housing.company",
    "search_db_bolder_rental_housing_persontype": "search.db_bolder_rental_housing.persontype",
    "search_db_bolder_rental_housing_licenseexp": "search.db_bolder_rental_housing.licenseexp",
    "search_db_bolder_rental_housing_asrid": "search.db_bolder_rental_housing.asrid",
    "search_db_bolder_rental_housing_licensenum": "search.db_bolder_rental_housing.licensenum",
    "search_db_bolder_rental_housing_neighbrhd": "search.db_bolder_rental_housing.neighbrhd",
    "search_db_bolder_rental_housing_rentaltype": "search.db_bolder_rental_housing.rentaltype",
    "search_db_bolder_rental_housing_complexnm": "search.db_bolder_rental_housing.complexnm",
    "search_db_bolder_rental_housing_bldgtype": "search.db_bolder_rental_housing.bldgtype",
    "search_db_bolder_rental_housing_dwellunits": "search.db_bolder_rental_housing.dwellunits",
    "search_db_bolder_rental_housing_roomunits": "search.db_bolder_rental_housing.roomunits",
    "search_db_bolder_rental_housing_engcompl": "search.db_bolder_rental_housing.engcompl",
    "search_db_bolder_rental_housing_person_1": "search.db_bolder_rental_housing.person_1",
    "search_db_bolder_rental_housing_ppl1_coname": "search.db_bolder_rental_housing.ppl1_coname",
    "search_db_bolder_rental_housing_ppl1_role": "search.db_bolder_rental_housing.ppl1_role",
    "search_db_bolder_rental_housing_person_2": "search.db_bolder_rental_housing.person_2",
    "search_db_bolder_rental_housing_ppl2_coname": "search.db_bolder_rental_housing.ppl2_coname",
    "search_db_bolder_rental_housing_ppl2_role": "search.db_bolder_rental_housing.ppl2_role",
    "search_db_bolder_rental_housing_location": "search.db_bolder_rental_housing.location"
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
        operationId: 'search_bolder_rental_housing',
        pathName: '/repository/search/type/bolder_rental_housing',
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