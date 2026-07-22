const tableNames = [
    "applications_latest",
    "application_events_latest",
    "application_lead_providers_latest",
    "participant_outcomes_latest",
    "institutions_latest",
    "schools_latest",
    "declarations_latest",
    "lead_providers_latest",
    "courses_latest",
    "course_cohorts_latest",
    "cohorts_latest",
    "schedules_latest",
    "course_cohort_providers_latest"
];

tableNames.forEach(tableName => {
    declare({
        database: "ecf-bq",
        schema: "dfe_analytics_dataform",
        name: tableName + "_tte"
    });
});