const tableNames = [
    "appropriate_bodies_latest",
    "events",
    "induction_periods_field_updates",
    "induction_periods_latest",
    "induction_periods_version",
    "session_details",
    "teachers_latest",
    "induction_extensions_latest",
    "gias_schools_latest",
    "schools_latest",
    "training_periods_latest",
    "school_partnerships_latest",
    "mentorship_periods_latest_latest",
    "mentor_at_school_periods_latest",
    "lead_providers_latest",
    "ect_at_school_periods_latest",
    "delivery_partners_latest",
    "delcarations_latest",
    "contract_periods_latest",
    "active_lead_providers_latest",
    "statements_latest",
    "lead_provider_delivery_partnerships_latest",
    "schedules_latest",
    "users_latest"
];

tableNames.forEach(tableName => {
    declare({
        database: "ecf-bq",
        schema: "dfe_analytics_dataform",
        name: tableName + "_ecf2_sandbox"
    });
});
