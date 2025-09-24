const tableNames = [
    "application_states_latest",
    "applications_field_updates",
    "applications_latest",
    "cohorts_latest",
    "courses_latest",
    "declarations_latest",
    "events",
    "lead_providers_latest",
    "participant_outcome_api_requests_latest",
    "participant_outcomes_latest",
    "persist_api_request",
    "private_childcare_providers_latest",
    "schedules_latest",
    "schools_latest",
    "session_details",
    "statement_items_latest",
    "statements_latest",
    "users_latest",
    "users_version",
    "delivery_partners_latest"
];

tableNames.forEach(tableName => {
    declare({
        database: "ecf-bq",
        schema: "dfe_analytics_dataform",
        name: tableName + "_npq"
    });
});

declare({
        database: "ecf-bq",
        schema: "dfe_analytics_dataform",
        name: "npq_entity_field_updates"
    });