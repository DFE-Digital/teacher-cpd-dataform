const tableNames = [
    "persist_api_request"
];

tableNames.forEach(tableName => {
    declare({
        database: "ecf-bq",
        schema: "dfe_analytics_dataform",
        name: tableName + "_ecf1_sandbox"
    });
});
