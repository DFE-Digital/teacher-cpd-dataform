const dfeAnalyticsDataform = require("dfe-analytics-dataform");

// Repeat the lines below for each and every events table you want dfe-analytics-dataform to process in your Dataform project - distinguish between them by giving each one a different eventSourceName. This will cause all the tables produced automatically by dfe-analytics-dataform to have your suffix included in them to allow users to tell the difference between them.
dfeAnalyticsDataform({
  eventSourceName: "cpd",
  bqEventsTableName: 'events',
  bqDatasetName: 'ecf_events_production',
  urlRegex: 'manage-training-for-early-career-teachers.education.gov.uk',
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
      keyName: "registration_start_date",
      dataType: "timestamp",
      description: ""
    }, {
      keyName: "start_year",
      dataType: "integer",
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
    entityTableName: "declaration_states",
    description: "",
    keys: [{
      keyName: "participant_declaration_id",
      dataType: "string",
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
      description: ""
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
      description: ""
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
    description: "",
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
      description: ""
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
    description: "",
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
      keyName: "npq_course_id",
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
      description: ""
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
      description: ""
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
    entityTableName: "teacher_profiles",
    description: "",
    keys: [{
      keyName: "school_id",
      dataType: "string",
      description: ""
    }, {
      keyName: "trn",
      dataType: "integer",
      description: ""
    }, {
      keyName: "user_id",
      dataType: "string",
      description: ""
    }]
  }]
});
