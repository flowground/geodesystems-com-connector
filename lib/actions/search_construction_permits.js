/**
 * Auto-generated action file for "RAMADDA" API.
 *
 * Generated at: 2019-05-07T14:40:51.749Z
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
 * Operation: 'search_construction_permits'
 * Endpoint Path: '/repository/search/type/construction_permits'
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
    "search.db_construction_permits.address",
    "search.db_construction_permits.case_status",
    "search.db_construction_permits.category",
    "search.db_construction_permits.building_uses_and_work_scopes",
    "search.db_construction_permits.permit_types",
    "search.db_construction_permits.total_project_value",
    "search.db_construction_permits.total_subpermit_value",
    "search.db_construction_permits.applied",
    "search.db_construction_permits.approved",
    "search.db_construction_permits.issued",
    "search.db_construction_permits.co_date",
    "search.db_construction_permits.completion_date",
    "search.db_construction_permits.new_res_unit",
    "search.db_construction_permits.existing_res_unit",
    "search.db_construction_permits.affordable_hsg_unit",
    "search.db_construction_permits.new_sf",
    "search.db_construction_permits.remodel_sf",
    "search.db_construction_permits.narrative_description",
    "search.db_construction_permits.primary_first_name",
    "search.db_construction_permits.primary_last_name",
    "search.db_construction_permits.primary_company",
    "search.db_construction_permits.contractor_first_name",
    "search.db_construction_permits.contractor_last_name",
    "search.db_construction_permits.contractor_company",
    "search.db_construction_permits.owner1_first_name",
    "search.db_construction_permits.owner1_last_name",
    "search.db_construction_permits.owner1_company",
    "search.db_construction_permits.owner2_first_name",
    "search.db_construction_permits.owner2_last_name",
    "search.db_construction_permits.owner2_company"
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
    "search_db_construction_permits_address": "search.db_construction_permits.address",
    "search_db_construction_permits_case_status": "search.db_construction_permits.case_status",
    "search_db_construction_permits_category": "search.db_construction_permits.category",
    "search_db_construction_permits_building_uses_and_work_scopes": "search.db_construction_permits.building_uses_and_work_scopes",
    "search_db_construction_permits_permit_types": "search.db_construction_permits.permit_types",
    "search_db_construction_permits_total_project_value": "search.db_construction_permits.total_project_value",
    "search_db_construction_permits_total_subpermit_value": "search.db_construction_permits.total_subpermit_value",
    "search_db_construction_permits_applied": "search.db_construction_permits.applied",
    "search_db_construction_permits_approved": "search.db_construction_permits.approved",
    "search_db_construction_permits_issued": "search.db_construction_permits.issued",
    "search_db_construction_permits_co_date": "search.db_construction_permits.co_date",
    "search_db_construction_permits_completion_date": "search.db_construction_permits.completion_date",
    "search_db_construction_permits_new_res_unit": "search.db_construction_permits.new_res_unit",
    "search_db_construction_permits_existing_res_unit": "search.db_construction_permits.existing_res_unit",
    "search_db_construction_permits_affordable_hsg_unit": "search.db_construction_permits.affordable_hsg_unit",
    "search_db_construction_permits_new_sf": "search.db_construction_permits.new_sf",
    "search_db_construction_permits_remodel_sf": "search.db_construction_permits.remodel_sf",
    "search_db_construction_permits_narrative_description": "search.db_construction_permits.narrative_description",
    "search_db_construction_permits_primary_first_name": "search.db_construction_permits.primary_first_name",
    "search_db_construction_permits_primary_last_name": "search.db_construction_permits.primary_last_name",
    "search_db_construction_permits_primary_company": "search.db_construction_permits.primary_company",
    "search_db_construction_permits_contractor_first_name": "search.db_construction_permits.contractor_first_name",
    "search_db_construction_permits_contractor_last_name": "search.db_construction_permits.contractor_last_name",
    "search_db_construction_permits_contractor_company": "search.db_construction_permits.contractor_company",
    "search_db_construction_permits_owner1_first_name": "search.db_construction_permits.owner1_first_name",
    "search_db_construction_permits_owner1_last_name": "search.db_construction_permits.owner1_last_name",
    "search_db_construction_permits_owner1_company": "search.db_construction_permits.owner1_company",
    "search_db_construction_permits_owner2_first_name": "search.db_construction_permits.owner2_first_name",
    "search_db_construction_permits_owner2_last_name": "search.db_construction_permits.owner2_last_name",
    "search_db_construction_permits_owner2_company": "search.db_construction_permits.owner2_company"
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
        operationId: 'search_construction_permits',
        pathName: '/repository/search/type/construction_permits',
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