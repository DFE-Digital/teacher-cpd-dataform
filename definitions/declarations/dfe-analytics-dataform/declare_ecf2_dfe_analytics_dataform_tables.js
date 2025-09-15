const tableNames = [
    "appropriate_bodies_latest",
    "events",
    "induction_periods_field_updates",
    "induction_periods_latest",
    "induction_periods_version",
    "session_details",
    "teachers_latest"
];

tableNames.forEach(tableName => {
    declare({
        database: "ecf-bq",
        schema: "dfe_analytics_dataform",
        name: tableName + "_ecf2"
    });
});
