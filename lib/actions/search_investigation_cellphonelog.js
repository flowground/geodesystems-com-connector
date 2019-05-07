/**
 * Auto-generated action file for "RAMADDA" API.
 *
 * Generated at: 2019-05-07T14:40:51.771Z
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
 * Operation: 'search_investigation_cellphonelog'
 * Endpoint Path: '/repository/search/type/investigation_cellphonelog'
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
    "search.db_investigation_cellphonelog.from_name",
    "search.db_investigation_cellphonelog.from_number",
    "search.db_investigation_cellphonelog.to_name",
    "search.db_investigation_cellphonelog.to_number",
    "search.db_investigation_cellphonelog.time",
    "search.db_investigation_cellphonelog.duration",
    "search.db_investigation_cellphonelog.type",
    "search.db_investigation_cellphonelog.location",
    "search.db_investigation_cellphonelog.tower_city",
    "search.db_investigation_cellphonelog.tower_state",
    "search.db_investigation_cellphonelog.tower_zipcode",
    "search.db_investigation_cellphonelog.tag",
    "search.db_investigation_cellphonelog.notes"
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
    "search_db_investigation_cellphonelog_from_name": "search.db_investigation_cellphonelog.from_name",
    "search_db_investigation_cellphonelog_from_number": "search.db_investigation_cellphonelog.from_number",
    "search_db_investigation_cellphonelog_to_name": "search.db_investigation_cellphonelog.to_name",
    "search_db_investigation_cellphonelog_to_number": "search.db_investigation_cellphonelog.to_number",
    "search_db_investigation_cellphonelog_time": "search.db_investigation_cellphonelog.time",
    "search_db_investigation_cellphonelog_duration": "search.db_investigation_cellphonelog.duration",
    "search_db_investigation_cellphonelog_type": "search.db_investigation_cellphonelog.type",
    "search_db_investigation_cellphonelog_location": "search.db_investigation_cellphonelog.location",
    "search_db_investigation_cellphonelog_tower_city": "search.db_investigation_cellphonelog.tower_city",
    "search_db_investigation_cellphonelog_tower_state": "search.db_investigation_cellphonelog.tower_state",
    "search_db_investigation_cellphonelog_tower_zipcode": "search.db_investigation_cellphonelog.tower_zipcode",
    "search_db_investigation_cellphonelog_tag": "search.db_investigation_cellphonelog.tag",
    "search_db_investigation_cellphonelog_notes": "search.db_investigation_cellphonelog.notes"
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
        operationId: 'search_investigation_cellphonelog',
        pathName: '/repository/search/type/investigation_cellphonelog',
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