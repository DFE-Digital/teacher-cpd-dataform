const dfeAnalyticsDataform = require("dfe-analytics-dataform");

// Repeat the lines below for each and every events table you want dfe-analytics-dataform to process in your Dataform project - distinguish between them by giving each one a different eventSourceName. This will cause all the tables produced automatically by dfe-analytics-dataform to have your suffix included in them to allow users to tell the difference between them.
dfeAnalyticsDataform({
    eventSourceName: "npq",
    bqEventsTableName: 'events',
    bqDatasetName: 'npq_events_staging',
    urlRegex: 'manage-training-for-early-career-teachers.education.gov.uk',
    hiddenPolicyTagLocation: "projects/ecf-bq/locations/europe-west2/taxonomies/6302091323314055162/policyTags/301313311867345339",
    dataSchema: [{
            entityTableName: "applications",
            description: "",
            keys: [{
                keyName: "user_id",
                dataType: "string",
                description: "The numerical ID used to join to the users table on the id column."
            },{
                keyName: "course_id",
                dataType: "string",
                description: "The numerical ID used to join to the courses table on the id column."
            },{
                keyName: "lead_provider_id",
                dataType: "string",
                description: "The numerical ID used to join to the lead providers table on the id column."
            },{
                keyName: "ecf_id",
                dataType: "string",
                description: "The GUID for the application. This can be used to join to existing ECF NPQ applications until they are removed. Lead Providers will use this field when calling the API for a specific application."
            },{
                keyName: "headteacher_status",
                dataType: "string",
                description: ""
            },{
                keyName: "eligible_for_funding",
                dataType: "boolean",
                description: ""
            },{
                keyName: "funding_choice",
                dataType: "string",
                description: ""
            },{
                keyName: "ukprn",
                dataType: "string",
                description: ""
            },{
                keyName: "teacher_catchment",
                dataType: "string",
                description: ""
            },{
                keyName: "teacher_catchment_country",
                dataType: "string",
                description: ""
            },{
                keyName: "works_in_school",
                dataType: "boolean",
                description: ""
            },{
                keyName: "employer_name",
                dataType: "string",
                description: ""
            },{
                keyName: "employment_role",
                dataType: "string",
                description: ""
            },{
                keyName: "works_in_nursery",
                dataType: "boolean",
                description: ""
            },{
                keyName: "works_in_childcare",
                dataType: "boolean",
                description: ""
            },{
                keyName: "kind_of_nursery",
                dataType: "string",
                description: ""
            },{
                keyName: "targeted_delivery_funding_eligibility",
                dataType: "boolean",
                description: ""
            },{
                keyName: "funding_eligiblity_status_code",
                dataType: "string",
                description: ""
            },{
                keyName: "work_setting",
                dataType: "string",
                description: ""
            },{
                keyName: "teacher_catchment_synced_to_ecf",
                dataType: "boolean",
                description: ""
            },{
                keyName: "employment_type",
                dataType: "string",
                description: ""
            },{
                keyName: "lead_mentor",
                dataType: "boolean",
                description: ""
            },{
                keyName: "primary_establishment",
                dataType: "boolean",
                description: ""
            },{
                keyName: "number_of_pupils",
                dataType: "integer",
                description: ""
            },{
                keyName: "tsf_primary_eligibility",
                dataType: "boolean",
                description: ""
            },{
                keyName: "tsf_primary_plus_eligibility",
                dataType: "boolean",
                description: ""
            },{
                keyName: "lead_provider_approval_status",
                dataType: "string",
                description: ""
            },{
                keyName: "participant_outcome_state",
                dataType: "string",
                description: ""
            },{
                keyName: "private_childcare_provider_id",
                dataType: "string",
                description: "The numeric ID used for joining to private childcare providers table on the id column."
            },{
                keyName: "itt_provider_id",
                dataType: "string",
                description: "The numeric ID used for joining to itt providers table on the id column."
            },{
                keyName: "school_id",
                dataType: "string",
                description: "The numeric ID used for joining to the schools table on the id column."
            },{
                keyName: "teacher_catchment_iso_country_code",
                dataType: "string",
                description: ""
            },{
                keyName: "targeted_support_funding_eligibility",
                dataType: "boolean",
                description: ""
            },{
                keyName: "notes",
                dataType: "string",
                description: ""
            },{
                keyName: "cohort_id",
                dataType: "string",
                description: "The numeric ID used for joining to the cohorts table on the id column."
            },{
                keyName: "funded_place",
                dataType: "boolean",
                description: ""
            },{
                keyName: "training_status",
                dataType: "string",
                description: ""
            },{
                keyName: "schedule_id",
                dataType: "string",
                description: "The numeric ID used for joining to the schedules table on the id column."
            },{
                keyName: "referred_by_return_to_teaching_adviser",
                dataType: "boolean",
                description: ""
            },{
                keyName: "accepted_at",
                dataType: "timestamp",
                description: ""
            },{
                keyName: "on_submission_trn",
                dataType: "string",
                description: ""
            },{
                keyName: "senco_in_role",
                dataType: "string",
                description: ""
            },{
                keyName: "senco_start_date",
                dataType: "string",
                description: ""
            }]
    }, {
            entityTableName: "application_states",
            description: "This table contains the status changes for training_status on the application.",
            keys: [{
                keyName: "application_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "lead_provider_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "state",
                dataType: "string",
                description: ""
            }, {
                keyName: "reason",
                dataType: "string",
                description: ""
            }, {
                keyName: "ecf_id",
                dataType: "string",
                description: ""
            }]
    }, {
        entityTableName: "cohorts",
        description: "",
        keys: [{
            keyName: "start_year",
            dataType: "integer",
            description: ""
        }, {
            keyName: "registration_start_date",
            dataType: "timestamp",
            description: ""
        }, {
            keyName: "funding_cap",
            dataType: "boolean",
            description: ""
        }, {
            keyName: "ecf_id",
            dataType: "string",
            description: ""
        }]
    }, {
        entityTableName: "course_groups",
        description: "",
        keys: [{
            keyName: "name",
            dataType: "string",
            description: ""
        }]
    }, {
        entityTableName: "courses",
        description: "",
        keys: [{
            keyName: "name",
            dataType: "string",
            description: ""
        }, {
            keyName: "description",
            dataType: "string",
            description: "",
        }, {
            keyName: "position",
            dataType: "integer",
            description: "",
        }, {
            keyName: "display",
            dataType: "boolean",
            description: "",
        }, {
            keyName: "identifier",
            dataType: "string",
            description: "",
        }, {
            keyName: "course_group_id",
            dataType: "string",
            description: "",
        }, {
            keyName: "ecf_id",
            dataType: "string",
            description: "",
        }]
    }, {
        entityTableName: "declarations",
        description: "",
        keys: [{
            keyName: "ecf_id",
            dataType: "string",
            description: "The GUID for the declaration. This can be used to link to existing records in ECF NPQ declarations and will be used by the Lead Providers when calling the API on a specific declaration."
        }, {
            keyName: "application_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "superseded_by_id",
            dataType: "string",
            description: "The ID of the declaration that replaces the current record."
        }, {
            keyName: "lead_provider_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "cohort_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "declaration_type",
            dataType: "string",
            description: ""
        }, {
            keyName: "declaration_date",
            dataType: "timestamp",
            description: ""
        }, {
            keyName: "state",
            dataType: "string",
            description: ""
        }, {
            keyName: "state_reason",
            dataType: "string",
            description: ""
        }]
    }, {
        entityTableName: "itt_providers",
        description: "",
        keys: [{
            keyName: "legal_name",
            dataType: "string",
            description: ""
        }, {
            keyName: "operating_name",
            dataType: "string",
            description: ""
        }, {
            keyName: "removed_at",
            dataType: "timestamp",
            description: ""
        }, {
            keyName: "approved",
            dataType: "boolean",
            description: ""
        }, {
            keyName: "disabled_at",
            dataType: "timestamp",
            description: ""
        }]
    }, {
        entityTableName: "lead_providers",
        description: "",
        keys: [{
            keyName: "name",
            dataType: "string",
            description: ""
        }, {
            keyName: "ecf_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "hint",
            dataType: "string", // NEED TO VERIFY DTYPE
            description: ""
        }]
    }, {
        entityTableName: "local_authorities",
        description: "",
        keys: [{
            keyName: "ukprn",
            dataType: "string",
            description: ""
        }, {
            keyName: "name",
            dataType: "string",
            description: ""
        }, {
            keyName: "address_1",
            dataType: "string",
            description: ""
        }, {
            keyName: "address_2",
            dataType: "string",
            description: ""
        }, {
            keyName: "address_3",
            dataType: "string",
            description: ""
        }, {
            keyName: "town",
            dataType: "string",
            description: ""
        }, {
            keyName: "county",
            dataType: "string",
            description: ""
        }, {
            keyName: "postcode",
            dataType: "string",
            description: ""
        }, {
            keyName: "postcode_without_spaces",
            dataType: "string",
            description: ""
        }, {
            keyName: "high_pupil_premium",
            dataType: "boolean",
            description: ""
        }]
    }, {
        entityTableName: "participant_id_changes",
        description: "",
        keys: [{
            keyName: "user_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "ecf_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "from_participant_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "to_participant_id",
            dataType: "string",
            description: ""
        }]
    }, {
        entityTableName: "participant_outcomes",
        description: "",
        keys: [{
            keyName: "state",
            dataType: "string",
            description: ""
        }, {
            keyName: "completion_date",
            dataType: "date",
            description: ""
        }, {
            keyName: "declaration_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "qualified_teachers_api_request_successful",
            dataType: "boolean",
            description: "TRUE/FALSE if the outcome was successfully sent to the Database of Qualified Teachers (DQT). Field is populated by the service."
        }, {
            keyName: "sent_to_qualified_teachers_api_at",
            dataType: "timestamp",
            description: "The timestamp of when the outcome was sent to the Database of Qualified Teachers (DQT)."
        }, {
            keyName: "ecf_id",
            dataType: "string",
            description: ""
        }]
    }, {
        entityTableName: "participant_outcome_api_requests",
        description: "Table of API requests made by Lead Providers to add a participant outcome to their completed declaration.",
        keys: [{
            keyName: "ecf_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "participant_outcome_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "request_path",
            dataType: "string",
            description: "",
            alias: "api_request_path"
        }, {
            keyName: "status_code",
            dataType: "string",
            description: ""
        }, {
            keyName: "request_headers",
            dataType: "string",
            description: ""
        }, {
            keyName: "request_body",
            dataType: "string",
            description: ""
        }, {
            keyName: "response_body",
            dataType: "string",
            description: ""
        }, {
            keyName: "response_headers",
            dataType: "string",
            description: ""
        }]
    }, {
        entityTableName: "private_childcare_providers",
        description: "",
        keys: [{
            keyName: "provider_urn",
            dataType: "string",
            description: ""
        }, {
            keyName: "provider_name",
            dataType: "string",
            description: ""
        }, {
            keyName: "registered_person_urn",
            dataType: "string",
            description: ""
        }, {
            keyName: "registration_date",
            dataType: "date",
            description: ""
        }, {
            keyName: "provider_status",
            dataType: "string",
            description: ""
        }, {
            keyName: "address_1",
            dataType: "string",
            description: ""
        }, {
            keyName: "address_2",
            dataType: "string",
            description: ""
        }, {
            keyName: "address_3",
            dataType: "string",
            description: ""
        }, {
            keyName: "town",
            dataType: "string",
            description: ""
        }, {
            keyName: "postcode",
            dataType: "string",
            description: ""
        }, {
            keyName: "postcode_without_spaces",
            dataType: "string",
            description: ""
        }, {
            keyName: "region",
            dataType: "string",
            description: ""
        }, {
            keyName: "local_authority",
            dataType: "string",
            description: ""
        }, {
            keyName: "ofsted_region",
            dataType: "string",
            description: ""
        }, {
            keyName: "early_years_individual_registers",
            dataType: "string",
            description: ""
        }, {
            keyName: "provider_early_years_register_flag",
            dataType: "boolean",
            description: ""
        }, {
            keyName: "provider_compulsory_childcare_register_flag",
            dataType: "boolean",
            description: ""
        }, {
            keyName: "places",
            dataType: "integer",
            description: ""
        }, {
            keyName: "disabled_at",
            dataType: "timestamp", // NEED TO VERIFY DTYPE
            description: ""
        }, {
            keyName: "registered_person_name",
            dataType: "string",
            description: "",
            hidden: true
        }]
    }, {
        entityTableName: "registration_interests",
        description: "",
        keys: [{
            keyName: "email",
            dataType: "string",
            description: "",
            hidden: true
        }, {
            keyName: "notified",
            dataType: "boolean", // NEED TO VERIFY DTYPE
            description: ""
        }]
    }, {
        entityTableName: "schedules",
        description: "",
        keys: [{
            keyName: "course_group_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "cohort_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "name",
            dataType: "string",
            description: ""
        }, {
            keyName: "identifier",
            dataType: "string",
            description: ""
        }, {
            keyName: "applies_from",
            dataType: "date",
            description: ""
        }, {
            keyName: "applies_to",
            dataType: "date",
            description: ""
        }, {
            keyName: "allowed_declaration_types",
            dataType: "string",
            isArray: true,
            description: ""
        }, {
            keyName: "ecf_id",
            dataType: "string",
            description: ""
        }]
    }, {
        entityTableName: "schools",
        description: "",
        keys: [{
            keyName: "urn",
            dataType: "string",
            description: ""
        }, {
            keyName: "establishment_number",
            dataType: "integer",
            description: ""
        }, {
            keyName: "name",
            dataType: "string",
            description: ""
        }, {
            keyName: "close_date",
            dataType: "date",
            description: ""
        }, {
            keyName: "ukprn",
            dataType: "string",
            description: ""
        }, {
            keyName: "last_changed_date",
            dataType: "date",
            description: ""
        }, {
            keyName: "address_1",
            dataType: "string",
            description: ""
        }, {
            keyName: "address_2",
            dataType: "string",
            description: ""
        }, {
            keyName: "address_3",
            dataType: "string",
            description: ""
        }, {
            keyName: "town",
            dataType: "string",
            description: ""
        }, {
            keyName: "county",
            dataType: "string",
            description: ""
        }, {
            keyName: "postcode",
            dataType: "string",
            description: ""
        }, {
            keyName: "easting",
            dataType: "integer",
            description: ""
        }, {
            keyName: "northing",
            dataType: "integer",
            description: ""
        }, {
            keyName: "region",
            dataType: "string",
            description: ""
        }, {
            keyName: "country",
            dataType: "string",
            description: ""
        }, {
            keyName: "high_pupil_premium",
            dataType: "boolean",
            description: ""
        }, {
            keyName: "postcode_without_spaces",
            dataType: "string",
            description: ""
        }, {
            keyName: "eyl_funding_eligible",
            dataType: "boolean",
            description: ""
        }]
    }, {
        entityTableName: "statements",
        description: "",
        keys: [{
            keyName: "month",
            dataType: "integer",
            description: ""
        }, {
            keyName: "year",
            dataType: "integer",
            description: ""
        }, {
            keyName: "deadline_date",
            dataType: "date",
            description: ""
        }, {
            keyName: "payment_date",
            dataType: "date",
            description: ""
        }, {
            keyName: "output_fee",
            dataType: "boolean",
            description: ""
        }, {
            keyName: "cohort_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "lead_provider_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "marked_as_paid_at",
            dataType: "timestamp", // NEED TO VERIFY DTYPE
            description: ""
        }, {
            keyName: "state",
            dataType: "string",
            description: ""
        }, {
            keyName: "ecf_id",
            dataType: "string",
            description: ""
        }]
    }, {
        entityTableName: "statement_items",
        description: "",
        keys: [{
            keyName: "statement_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "state",
            dataType: "string",
            description: ""
        }, {
            keyName: "declaration_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "ecf_id",
            dataType: "string",
            description: ""
        }]
    }, {
        entityTableName: "users",
        description: "This table contains a mapping between User ID (numeric) and TRN for users of the NPQ Service. Closest ECF equivalent is Teacher Profiles.",
        keys: [{
            keyName: "ecf_id",
            dataType: "string",
            description: "The GUID for the user. This can be used to link to ECF Teacher Profiles on user_id and will be used by Lead providers to call APIs on specific users."
        }, {
            keyName: "trn",
            dataType: "integer",
            description: ""
        }, {
            keyName: "trn_verified",
            dataType: "boolean",
            description: ""
        }, {
            keyName: "active_alert",
            dataType: "boolean",
            description: ""
        }, {
            keyName: "trn_auto_verified",
            dataType: "boolean",
            description: ""
        }, {
            keyName: "feature_flag_id",
            dataType: "integer", // NEED TO VERIFY DTYPE
            description: ""
        }, {
            keyName: "provider",
            dataType: "string",
            description: ""
        }, {
            keyName: "uid",
            dataType: "string",
            description: ""
        }, {
            keyName: "get_an_identity_id_synced_to_ecf",
            dataType: "boolean",
            description: ""
        }, {
            keyName: "updated_from_tra_at",
            dataType: "timestamp",
            description: ""
        }, {
            keyName: "trn_lookup_status",
            dataType: "string",
            description: ""
        }, {
            keyName: "notify_user_for_future_reg",
            dataType: "boolean",
            description: "TRUE/FALSE if the user requests to be notified about future registration windows."
        }, {
            keyName: "email_updates_status",
            dataType: "string",
            description: ""
        }, {
            keyName: "email_updates_unsubscribe_key",
            dataType: "string", // NEED TO VERIFY DTYPE
            description: ""
        }, {
            keyName: "archived_at",
            dataType: "timestamp",
            description: ""
        }, {
            keyName: "significantly_updated_at",
            dataType: "timestamp",
            description: ""
        }]
    }]
});