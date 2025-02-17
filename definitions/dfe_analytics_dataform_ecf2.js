const dfeAnalyticsDataform = require("dfe-analytics-dataform");

// Repeat the lines below for each and every events table you want dfe-analytics-dataform to process in your Dataform project - distinguish between them by giving each one a different eventSourceName. This will cause all the tables produced automatically by dfe-analytics-dataform to have your suffix included in them to allow users to tell the difference between them.
dfeAnalyticsDataform({
    eventSourceName: "ecf2",
    bqEventsTableName: 'events',
    bqDatasetName: 'ecf2_events_staging',
    urlRegex: 'manage-training-for-early-career-teachers.education.gov.uk',
    hiddenPolicyTagLocation: "projects/ecf-bq/locations/europe-west2/taxonomies/6302091323314055162/policyTags/301313311867345339",
    customEventSchema: [],
    dataSchema: [{
            entityTableName: "appropriate_bodies",
            description: "",
            keys: [{
                    keyName: "name",
                    dataType: "string",
                    description: "Name of the Appropriate Body"
                },
                {
                    keyName: "local_authority_code",
                    dataType: "string",
                    description: "Gov.uk local authority code taken from DQT"
                },
                {
                    keyName: "establishment_number",
                    dataType: "integer",
                    description: "A unique identifier given too all appropriate bodies from DQT"
                },
                {
                    keyName: "dfe_sign_in_organisation_id",
                    dataType: "string",
                    description: "A unique organisation identifier taken from DfE Sign-In"
                },
                {
                    keyName: "legacy_id",
                    dataType: "string",
                    description: "A legacy unique organisation identifier taken from DfE Sign-In"
                }
            ]
        },
        {
            entityTableName: "teachers",
            description: "",
            keys: [{
                keyName: 'corrected_name',
                dataType: 'string',
                description: '',
                hidden: true
            }, {
                keyName: 'trn',
                dataType: 'string',
                description: '',
                hidden: true
            }, {
                keyName: 'induction_start_date_submitted_to_trs_at',
                dataType: 'timestamp',
                description: 'Date and time an induction start date was submitted to TRS for an ECT'
            }, {
                keyName: 'search',
                dataType: 'string',
                description: ''
            }, {
                keyName: 'legacy_id',
                dataType: 'string',
                description: ''
            }, {
                keyName: 'legacy_ect_id',
                dataType: 'string',
                description: ''
            }, {
                keyName: 'legacy_mentor_id',
                dataType: 'string',
                description: ''
            }, {
                keyName: 'induction_completion_submitted_to_trs_at',
                dataType: 'timestamp',
                description: ''
            }, {
                keyName: 'qts_awarded_on',
                dataType: 'date',
                description: 'Date an ECT was awarded their QTS'
            }, {
                keyName: 'trs_data_last_refreshed_at',
                dataType: 'timestamp',
                description: ''
            }, {
                keyName: 'trs_first_name',
                dataType: 'string',
                description: '',
                hidden: true
            }, {
                keyName: 'trs_induction_status',
                dataType: 'string',
                description: ''
            }, {
                keyName: 'trs_initial_teacher_training_end_date',
                dataType: 'date',
                description: ''
            }, {
                keyName: 'trs_initial_teacher_training_provider_name',
                dataType: 'string',
                description: ''
            }, {
                keyName: 'trs_last_name',
                dataType: 'string',
                description: '',
                hidden: true
            }, {
                keyName: 'trs_qts_awarded_on',
                dataType: 'date',
                description: ''
            }, {
                keyName: 'trs_qts_status_description',
                dataType: 'string',
                description: ''
            }]
        },
        {
            entityTableName: "induction_periods",
            description: "",
            keys: [{
                keyName: 'appropriate_body_id',
                dataType: 'string',
                description: ''
            }, {
                keyName: 'started_on',
                dataType: 'date',
                description: 'Date an induction period was started on'
            }, {
                keyName: 'finished_on',
                dataType: 'date',
                description: 'Date an induction period was finished on'
            }, {
                keyName: 'induction_programme',
                dataType: 'string',
                description: 'The programme type for an induction period; Full Induction, Core Induction, Do it Yourself'
            }, {
                keyName: 'number_of_terms',
                dataType: 'float',
                description: 'Number of terms served for an induction period'
            }, {
                keyName: 'range',
                dataType: 'string',
                description: 'The date range between the started_on and finished_on dates for an induction period'
            }, {
                keyName: 'teacher_id',
                dataType: 'string',
                description: ''
            }, {
                keyName: 'outcome',
                dataType: 'string',
                description: ''
            }]
        },
        {
            entityTableName: "induction_extensions",
            description: "",
            keys: [{
                keyName: 'number_of_terms',
                dataType: 'float',
                description: 'Number of terms served for an induction period'
            }, {
                keyName: 'teacher_id',
                dataType: 'string',
                description: ''
            }]
        }
    ]
});
