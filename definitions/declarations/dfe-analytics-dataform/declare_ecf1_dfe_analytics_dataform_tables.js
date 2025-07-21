const tableNames = [
    "analytics_participants_latest",
    "appropriate_bodies_latest",
    "cohorts_latest",
    "cpd_lead_providers_latest",
    "delivery_partners_latest",
    "events",
    "induction_coordinator_profiles_latest",
    "induction_coordinator_profiles_schools_latest",
    "induction_programmes_latest",
    "induction_records_latest",
    "induction_records_version",
    "inductions_latest",
    "lead_providers_latest",
    "participant_declarations_field_updates",
    "participant_declarations_latest",
    "participant_declarations_version",
    "participant_profile_states_latest",
    "participant_profiles_field_updates",
    "participant_profiles_latest",
    "partnerships_field_updates",
    "partnerships_latest",
    "partnerships_version",
    "pupil_premiums_latest",
    "schedules_latest",
    "school_cohorts_latest",
    "schools_latest",
    "session_details",
    "statement_line_items_latest",
    "statements_latest",
    "teacher_profiles_latest",
    "users_latest"
];

tableNames.forEach(tableName => {
    declare({
        database: "ecf-bq",
        schema: "dfe_analytics_dataform",
        name: tableName + "_ecf1"
    });
});
