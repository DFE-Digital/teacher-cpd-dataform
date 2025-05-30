const dfeAnalyticsDataform = require("dfe-analytics-dataform");

// Repeat the lines below for each and every events table you want dfe-analytics-dataform to process in your Dataform project - distinguish between them by giving each one a different eventSourceName. This will cause all the tables produced automatically by dfe-analytics-dataform to have your suffix included in them to allow users to tell the difference between them.
dfeAnalyticsDataform({
    eventSourceName: "cpd",
    bqEventsTableName: 'events',
    bqDatasetName: 'ecf_events_production',
    expirationDays: false,
    urlRegex: 'manage-training-for-early-career-teachers.education.gov.uk',
    hiddenPolicyTagLocation: "projects/ecf-bq/locations/europe-west2/taxonomies/6302091323314055162/policyTags/301313311867345339",
    enableSessionTables: false,
    enableSessionDetailsTable: true,
    customEventSchema: [{
        eventType: "persist_api_request",
        description: "Custom event set-up for API Requests as of 04/11/2024",
        keys: [{
            keyName: "cpd_lead_provider_id",
            dataType: "string",
            description: ""
        }, {
            keyName: "request_body",
            dataType: "string",
            description: ""
        }, {
            keyName: "request_headers",
            dataType: "string",
            description: ""
        }, {
            keyName: "request_method",
            alias: "api_request_method",
            dataType: "string",
            description: ""
        }, {
            keyName: "request_path",
            alias: "api_request_path",
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
        }, {
            keyName: "status_code",
            dataType: "integer",
            description: ""
        }, {
            keyName: "user_description",
            dataType: "string",
            description: ""
        }]
    }],
    dataSchema: [{
            entityTableName: "appropriate_bodies",
            description: "",
            keys: [{
                keyName: "body_type",
                dataType: "string",
                description: ""
            }, {
                keyName: "disable_from_year",
                dataType: "integer",
                description: ""
            }, {
                keyName: "listed",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "listed_for_school_type_codes",
                dataType: "string",
                description: ""
            }, {
                keyName: "selectable_by_schools",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "name",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "cohorts",
            description: "",
            keys: [{
                keyName: "academic_year_start_date",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "automatic_assignment_period_end_date",
                dataType: "date",
                description: ""
            }, {
                keyName: "npq_registration_start_date",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "payments_frozen_at",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "registration_start_date",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "start_year",
                dataType: "integer",
                description: ""
            }, {
                keyName: "detailed_evidence_types",
                dataType: "string",
                description: ""
            }, {
                keyName: "mentor_funding",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "cohorts_lead_providers",
            description: "",
            keys: [{
                keyName: "cohort_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "lead_provider_id",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "cpd_lead_providers",
            description: "",
            keys: [{
                keyName: "name",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "delivery_partners",
            description: "",
            keys: [{
                keyName: "name",
                dataType: "string",
                description: ""
            }, {
                keyName: "discarded_at",
                dataType: "timestamp",
                description: ""
            }]
        },
        {
            entityTableName: "induction_coordinator_profiles",
            description: "",
            keys: [{
                keyName: "reminder_email_sent_at",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "user_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "discarded_at",
                dataType: "timestamp",
                description: ""
            }]
        },
        {
            entityTableName: "induction_coordinator_profiles_schools",
            description: "",
            keys: [{
                keyName: "induction_coordinator_profile_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "school_id",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "induction_programmes",
            description: "",
            keys: [{
                keyName: "core_induction_programme_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "delivery_partner_to_be_confirmed",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "partnership_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "school_cohort_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "training_programme",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "induction_records",
            description: "",
            keys: [{
                keyName: "appropriate_body_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "end_date",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "induction_programme_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "induction_status",
                dataType: "string",
                description: ""
            }, {
                keyName: "mentor_profile_id",
                dataType: "string",
                description: "The participant_profile_id of an ECT's mentor. This field is always NULL for mentors. With regards to how the addition of a mentor triggers the creation of a new induction record: If the mentor is selected when adding an ECT to the service, then the induction record will be created with the mentor on it. If the mentor is changed/selected later the a new induction record is created"
            }, {
                keyName: "participant_profile_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "preferred_identity_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "schedule_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "school_transfer",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "start_date",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "training_status",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "lead_providers",
            description: "",
            keys: [{
                keyName: "cpd_lead_provider_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "name",
                dataType: "string",
                description: ""
            }, {
                keyName: "vat_chargeable",
                dataType: "boolean",
                description: ""
            }]
        },
        {
            entityTableName: "local_authorities",
            description: "",
            keys: [{
                keyName: "code",
                dataType: "integer",
                description: ""
            }, {
                keyName: "name",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "nomination_emails",
            description: "",
            keys: [{
                keyName: "notify_status",
                dataType: "string",
                description: ""
            }, {
                keyName: "sent_to",
                dataType: "string",
                description: "",
                hidden: true
            }, {
                keyName: "sent_at",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "opened_at",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "school_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "partnership_notification_email_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "notify_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "delivered_at",
                dataType: "timestamp",
                description: ""
            }]
        },
        {
            entityTableName: "npq_applications",
            description: "",
            keys: [{
                keyName: "active_alert",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "cohort_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "eligible_for_funding",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "eligible_for_funding_updated_at",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "eligible_for_funding_updated_by_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "employer_name",
                dataType: "string",
                description: ""
            }, {
                keyName: "employment_role",
                dataType: "string",
                description: ""
            }, {
                keyName: "employment_type",
                dataType: "string",
                description: ""
            }, {
                keyName: "funded_place",
                dataType: "string",
                description: ""
            }, {
                keyName: "funding_choice",
                dataType: "string",
                description: ""
            }, {
                keyName: "funding_eligiblity_status_code",
                dataType: "string",
                description: ""
            }, {
                keyName: "headteacher_status",
                dataType: "string",
                description: ""
            }, {
                keyName: "itt_provider",
                dataType: "string",
                description: ""
            }, {
                keyName: "kind_of_nursery",
                dataType: "string",
                description: ""
            }, {
                keyName: "lead_mentor",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "lead_provider_approval_status",
                dataType: "string",
                description: ""
            }, {
                keyName: "notes",
                dataType: "string",
                description: ""
            }, {
                keyName: "npq_course_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "npq_lead_provider_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "number_of_pupils",
                dataType: "integer",
                description: ""
            }, {
                keyName: "participant_identity_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "primary_establishment",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "private_childcare_provider_urn",
                dataType: "string",
                description: ""
            }, {
                keyName: "school_ukprn",
                dataType: "integer",
                description: ""
            }, {
                keyName: "school_urn",
                dataType: "string",
                description: ""
            }, {
                keyName: "targeted_delivery_funding_eligibility",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "targeted_support_funding_eligibility",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "teacher_catchment",
                dataType: "string",
                description: ""
            }, {
                keyName: "teacher_catchment_country",
                dataType: "string",
                description: ""
            }, {
                keyName: "teacher_catchment_iso_country_code",
                dataType: "string",
                description: ""
            }, {
                keyName: "teacher_reference_number",
                dataType: "string",
                description: ""
            }, {
                keyName: "teacher_reference_number_verified",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "tsf_primary_eligibility",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "tsf_primary_plus_eligibility",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "works_in_childcare",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "works_in_nursery",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "referred_by_return_to_teaching_adviser",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "works_in_school",
                dataType: "boolean",
                description: ""
            }]
        },
        {
            entityTableName: "npq_courses",
            description: "",
            keys: [{
                keyName: "identifier",
                dataType: "string",
                description: ""
            }, {
                keyName: "name",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "npq_lead_providers",
            description: "",
            keys: [{
                keyName: "cpd_lead_provider_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "name",
                dataType: "string",
                description: ""
            }, {
                keyName: "vat_chargeable",
                dataType: "boolean",
                description: ""
            }]
        },
        {
            entityTableName: "participant_declarations",
            description: "This comes from reporting from lead providers",
            keys: [{
                keyName: "course_identifier",
                dataType: "string",
                description: ""
            }, {
                keyName: "cpd_lead_provider_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "declaration_date",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "declaration_type",
                dataType: "string",
                description: ""
            }, {
                keyName: "delivery_partner_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "evidence_held",
                dataType: "string",
                description: ""
            }, {
                keyName: "mentor_user_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "participant_profile_id",
                dataType: "string",
                description: "This field matches the participant profile id of participant profiles within the CPD service. It also matches the application id for NPQ participants which is used as their participant profile id for that NPQ."
            }, {
                keyName: "pupil_premium_uplift",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "sparsity_uplift",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "state",
                dataType: "string",
                description: ""
            }, {
                keyName: "superseded_by_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "type",
                dataType: "string",
                description: ""
            }, {
                keyName: "user_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "cohort_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "voided_at",
                dataType: "timestamp",
                description: "Populated if voided by a DfE user only (finance or admin console)"
            }, {
                keyName: "voided_by_user_id",
                dataType: "string",
                description: "DfE user that voided the declaration via the finance/admin console"
            }]
        },
        {
            entityTableName: "participant_id_changes",
            description: "",
            keys: [{
                keyName: "from_participant_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "to_participant_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "user_id",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "participant_outcome_api_requests",
            description: "",
            keys: [{
                keyName: "participant_outcome_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "request_body",
                dataType: "string",
                description: ""
            }, {
                keyName: "request_headers",
                dataType: "string",
                description: ""
            }, {
                keyName: "request_path",
                alias: "request_directory",
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
            }, {
                keyName: "status_code",
                dataType: "integer",
                description: ""
            }]
        },
        {
            entityTableName: "participant_outcomes",
            description: "",
            keys: [{
                keyName: "completion_date",
                dataType: "date",
                description: ""
            }, {
                keyName: "participant_declaration_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "qualified_teachers_api_request_successful",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "sent_to_qualified_teachers_api_at",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "state",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "participant_profile_schedules",
            description: "",
            keys: [{
                keyName: "participant_profile_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "schedule_id",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "participant_profile_states",
            description: "",
            keys: [{
                keyName: "cpd_lead_provider_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "participant_profile_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "reason",
                dataType: "string",
                description: ""
            }, {
                keyName: "state",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "participant_profiles",
            description: "These profiles are generated simultaneously to a first induction record for an ECF participant. They are generated for an NPQ participant when a lead provider accepts their NPQ application, the NPQ application id is used as the primary key (id) for this table when an NPQ profile is created. This table's primary key (id) matches the participant_profile_id found in declaration reporting from lead_providers",
            keys: [{
                keyName: "cohort_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "core_induction_programme_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "induction_completion_date",
                dataType: "date",
                description: ""
            }, {
                keyName: "induction_start_date",
                dataType: "date",
                description: ""
            }, {
                keyName: "mentor_completion_date",
                dataType: "date",
                description: "The date a mentor completed training. When a declaration is submitted for a mentor the mentor_completion_date will equal the declaration_date. When a declaration is voided the completed date will be cleared. Completed dates for early roll-out mentors will be set to 19 April 2021 regardless of any completed declarations.",
            }, {
                keyName: "mentor_completion_reason",
                dataType: "string",
                description: "The reason the mentor_completion_date field is filled. Possible values: completed_during_early_roll_out, completed_declaration_received, started_not_completed (if the training this declaration is for is deemed 'complete' but the overall ECF mentor training is not complete).",
            }, {
                keyName: "mentor_profile_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "notes",
                dataType: "string",
                description: ""
            }, {
                keyName: "participant_identity_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "profile_duplicity",
                dataType: "string",
                description: ""
            }, {
                keyName: "pupil_premium_uplift",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "request_for_details_sent_at",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "schedule_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "school_cohort_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "school_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "sparsity_uplift",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "status",
                dataType: "string",
                description: ""
            }, {
                keyName: "teacher_profile_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "training_status",
                dataType: "string",
                description: ""
            }, {
                keyName: "type",
                dataType: "string",
                description: ""
            }, {
                keyName: "school_ukprn",
                dataType: "string",
                description: ""
            }, {
                keyName: "school_urn",
                dataType: "string",
                description: ""
            }, {
                keyName: "cohort_changed_after_payments_frozen",
                dataType: "boolean",
                description: ""
            }]
        },
        {
            entityTableName: "partnerships",
            description: "",
            keys: [{
                keyName: "challenge_deadline",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "challenge_reason",
                dataType: "string",
                description: ""
            }, {
                keyName: "challenged_at",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "cohort_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "delivery_partner_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "lead_provider_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "pending",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "relationship",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "report_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "school_id",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "provider_relationships",
            description: "",
            keys: [{
                keyName: "cohort_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "delivery_partner_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "lead_provider_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "discarded_at",
                dataType: "timestamp",
                description: ""
            }]
        },
        {
            entityTableName: "pupil_premiums",
            description: "",
            keys: [{
                keyName: "pupil_premium_incentive",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "school_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "sparsity_incentive",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "start_year",
                dataType: "integer",
                description: ""
            }]
        },
        {
            entityTableName: "schedules",
            description: "",
            keys: [{
                keyName: "name",
                dataType: "string",
                description: ""
            }, {
                keyName: "schedule_identifier",
                dataType: "string",
                description: ""
            }, {
                keyName: "type",
                dataType: "string",
                description: ""
            }, {
                keyName: "cohort_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "identifier_alias",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "school_cohorts",
            description: "",
            keys: [{
                keyName: "appropriate_body_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "cohort_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "core_induction_programme_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "default_induction_programme_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "induction_programme_choice",
                dataType: "string",
                description: ""
            }, {
                keyName: "opt_out_of_updates",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "school_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "estimated_mentor_count",
                dataType: "integer",
                description: ""
            }, {
                keyName: "estimated_teacher_count",
                dataType: "integer",
                description: ""
            }]
        },
        {
            entityTableName: "school_local_authorities",
            description: "",
            keys: [{
                keyName: "end_year",
                dataType: "integer",
                description: ""
            }, {
                keyName: "local_authority_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "school_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "start_year",
                dataType: "integer",
                description: ""
            }]
        },
        {
            entityTableName: "school_local_authority_districts",
            description: "",
            keys: [{
                keyName: "end_year",
                dataType: "integer",
                description: ""
            }, {
                keyName: "local_authority_district_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "school_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "start_year",
                dataType: "integer",
                description: ""
            }]
        },
        {
            entityTableName: "school_mentors",
            description: "",
            keys: [{
                keyName: "participant_profile_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "preferred_identity_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "remove_from_school_on",
                dataType: "date",
                description: ""
            }, {
                keyName: "school_id",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "schools",
            description: "",
            keys: [{
                keyName: "address_line1",
                dataType: "string",
                description: ""
            }, {
                keyName: "address_line2",
                dataType: "string",
                description: ""
            }, {
                keyName: "address_line3",
                dataType: "string",
                description: ""
            }, {
                keyName: "administrative_district_code",
                dataType: "string",
                description: ""
            }, {
                keyName: "administrative_district_name",
                dataType: "string",
                description: ""
            }, {
                keyName: "name",
                dataType: "string",
                description: ""
            }, {
                keyName: "postcode",
                dataType: "string",
                description: ""
            }, {
                keyName: "primary_contact_email",
                dataType: "string",
                description: "",
                hidden: true
            }, {
                keyName: "school_phase_name",
                dataType: "string",
                description: ""
            }, {
                keyName: "school_phase_type",
                dataType: "integer",
                description: ""
            }, {
                keyName: "school_status_code",
                dataType: "integer",
                description: ""
            }, {
                keyName: "school_status_name",
                dataType: "string",
                description: ""
            }, {
                keyName: "school_type_code",
                dataType: "integer",
                description: ""
            }, {
                keyName: "school_type_name",
                dataType: "string",
                description: ""
            }, {
                keyName: "school_website",
                dataType: "string",
                description: ""
            }, {
                keyName: "secondary_contact_email",
                dataType: "string",
                description: "",
                hidden: true
            }, {
                keyName: "section_41_approved",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "slug",
                dataType: "string",
                description: ""
            }, {
                keyName: "ukprn",
                dataType: "string",
                description: ""
            }, {
                keyName: "urn",
                dataType: "integer",
                description: ""
            }, {
                keyName: "domains",
                dataType: "string",
                description: ""
            }, {
                keyName: "network_id",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "support_queries",
            description: "",
            keys: [{
                keyName: "subject",
                dataType: "string",
                description: "the subject of the ticket selected by the user from pre-provided options"
            }, {
                keyName: "user_id",
                dataType: "string",
                description: "foreign key to the user within ECF"
            }, {
                keyName: "zendesk_ticket_id",
                dataType: "string",
                description: "foreign key to the Zendesk ticket within Zendesk"
            }]
        },
        {
            entityTableName: "teacher_profiles",
            description: "",
            keys: [{
                keyName: "school_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "trn",
                dataType: "string",
                description: ""
            }, {
                keyName: "user_id",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "statement_line_items",
            description: "",
            keys: [{
                keyName: "participant_declaration_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "statement_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "state",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "email_associations",
            description: "",
            keys: [{
                keyName: "email_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "name_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "name",
                dataType: "string",
                description: ""
            }, {
                keyName: "object_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "object_type",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "emails",
            description: "",
            keys: [{
                keyName: "delivered_at",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "from",
                dataType: "string",
                description: "",
                alias: "from_email"
            }, {
                keyName: "to",
                dataType: "string",
                description: "",
                alias: "to_email",
                hidden: true
            }, {
                keyName: "personalisation",
                dataType: "string",
                description: "",
                hidden: true
            }, {
                keyName: "status",
                dataType: "string",
                description: ""
            }, {
                keyName: "tags",
                dataType: "string",
                description: ""
            }, {
                keyName: "template_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "template_version",
                dataType: "string",
                description: ""
            }, {
                keyName: "uri",
                dataType: "string",
                description: ""
            }]
        },
        {
            entityTableName: "statements",
            description: "",
            keys: [{
                keyName: "name",
                dataType: "string",
                description: ""
            }, {
                keyName: "type",
                dataType: "string",
                description: ""
            }, {
                keyName: "output_fee",
                dataType: "date",
                description: ""
            }, {
                keyName: "cpd_lead_provider_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "cohort_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "deadline_date",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "payment_date",
                dataType: "timestamp",
                description: ""
            }]
        },
        {
            entityTableName: "analytics_participants",
            description: "",
            keys: [{
                keyName: "active",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "cohort",
                dataType: "integer",
                description: ""
            }, {
                keyName: "eligible_for_funding",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "establishment_phase_name",
                dataType: "string",
                description: ""
            }, {
                keyName: "external_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "manually_validated",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "mentor_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "nino_entered",
                dataType: "string",
                description: ""
            }, {
                keyName: "participant_profile_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "participant_type",
                dataType: "string",
                description: ""
            }, {
                keyName: "pupil_premium",
                dataType: "string",
                description: ""
            }, {
                keyName: "real_time_attempts",
                dataType: "integer",
                description: ""
            }, {
                keyName: "real_time_success",
                dataType: "string",
                description: ""
            }, {
                keyName: "schedule_identifier",
                dataType: "string",
                description: ""
            }, {
                keyName: "school_name",
                dataType: "string",
                description: ""
            }, {
                keyName: "school_urn",
                dataType: "string",
                description: ""
            }, {
                keyName: "sparsity",
                dataType: "string",
                description: ""
            }, {
                keyName: "training_status",
                dataType: "string",
                description: ""
            }, {
                keyName: "trn_verified",
                dataType: "boolean",
                description: ""
            }, {
                keyName: "user_created_at",
                dataType: "timestamp",
                description: ""
            }, {
                keyName: "user_id",
                dataType: "string",
                description: ""
            }, {
                keyName: "validation_submitted_at",
                dataType: "timestamp",
                description: ""
            }]
        },
            {
            entityTableName: "users",
            description: "",
            keys: [ {
                keyName: "full_name",
                dataType: "string",
                description: "",
                hidden: true
            }, {
                keyName: "created_at",
                alias: "user_created_at",
                dataType: "date",
                description: ""
            }, {
                keyName: "updated_at",
                alias: "user_updated_at",
                dataType: "date",
                description: ""
            }
]
        }
    ]
});
