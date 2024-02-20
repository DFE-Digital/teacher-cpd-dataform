## Pipeline Monitoring

### Slack Channel: #cpd-dataform-monitoring 

### Pipeline failures 

The teacher-cpd-dataform pipeline pulls out event data that is streamed to BigQuery by dfe-analytics and transforms it into individual tables. The pipeline is run each day at 5am and midday. Alerts are set up through Google Cloud’s Monitoring service. Two “policies” check if the Dataform pipeline has run, one for a successful run and one for a failed run. In either case, an email is sent to the Slack channel #cpd-dataform-monitoring informing us of the status of the pipeline. 

If there is a failure, the cause will be outlined in the Workflow Execution Logs in Dataform and can be further investigated through the “assertions” in that workflow. 

### Assertions and fixing pipeline problems 

Assertions are data quality test queries that find rows that violate one or more rules specified in the query. Within Dataform and the dfe-analytics setup, assertions help spot when your dataSchema has become out of date or has a problem. Fixing them requires updating the dataSchema 

The most common assertions are: 

cpd_entities_are_missing_expected_fields – Data has been received about an entity in the database that is missing a field it was expecting. This failure will generate an error and prevent further queries in your pipeline from running. 

cpd_unhandled_field_or_entity_is_being_streamed – Data has been received about an entity in the database that contains a field (or entire table) it was not expecting. This failure will generate an error but will not prevent further queries in your pipeline from running. However, the new field(s) or table will not be included in dfe-analytics-dataform output until you update your configuration, and the error will continue to reoccur. 

In either case, you should update your dataSchema configuration in dfe_analytics_dataform.js in Dataform to add or remove configuration for that field. 

There is also an assertion called cpd_events_data_not_fresh which will fail if no new events have been streamed in the last day (or number of days specified in your eventsDataFreshnessDays parameter). 

 
