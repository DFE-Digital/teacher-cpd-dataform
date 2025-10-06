/* JavaScript functions which generate SQL used in multiple places in this Dataform repository. */
/* See https://cloud.google.com/dataform/docs/javascript-in-dataform#create-custom-function for more information. */

function contentGroupPath(path) {
    /* Group URL path into content groups - for example, replace /schools/u655yb5uvu6/page with /schools/[grouped]/page */
    /* This allows similar pages to be grouped in metrics instead of considering them separately. */
    /* Conceptually similar to Google Analytics content groups. */
    return `
      ARRAY_TO_STRING(ARRAY(
      SELECT
        CASE
          WHEN (REGEXP_CONTAINS(page_path_component, "^[a-zA-Z0-9-]*[0-9][a-zA-Z0-9-]*$") AND LENGTH(page_path_component) > 3) OR REGEXP_CONTAINS(page_path_component, "^[0-9]+$") THEN "[grouped]"
          ELSE page_path_component
      END
      FROM
        UNNEST(SPLIT(${path}, "/")) AS page_path_component ), "/", "")
      `;
}

function extractValueFromSingleElementArrayofJSONStrings(singleElementArrayFieldName, key) {
    /* This function allows you to extract the value from a key:value pair inside a field that contains a single element array of Json strings */
    /* You need to  identify the field which contains the array of strings and the key within that.  */
    return `JSON_VALUE(${singleElementArrayFieldName}[SAFE_OFFSET(0)], '$.${key}')`;
}

function yearStartDateToAcademicYearString(year) {
    /* Convert a date to a string representing the academic year that starts during the calendar year that date falls within. */
    /* For example, convert 2025-03-28 to the string '2025-26'. */
    return `FORMAT_DATE("%G", ${year}) || '-' || FORMAT_DATE("%g", DATE_ADD(${year}, INTERVAL 1 YEAR))`;
}

function correctOrderDeclarationsTypesShouldBeReceived() {
    /*This function sets out the correct sequence of declarations should be evidenced in by declaration type so that later in the code the actual sequence declarations were evidenced in can be compared to the correct sequence.*/
    /*The proper sequence changed after 01/08/2025 shifting the order from S-R1-R2-R3-R4-E1-E2-E3-C to S-R1-R2-R3-R4-C-E1-E2-E3 (moving completed declarations earlier in the correct sequence). */
    /*This means that when a declaration was received impacts the correct sequence for C-E1-E2-E3 declarations. The table adds dates to set when a particular sequence position was valid to cross check with when a declaration was received */

    return `(SELECT
    *
  FROM
    UNNEST([ STRUCT(DATE '2021-09-01' AS declaration_date_start,
        DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY) AS declaration_date_end,
        'started' AS declaration_type,
        1 AS expected_declaration_sequence_position), STRUCT(DATE '2021-09-01',
        DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY),
        'retained-1',
        2), STRUCT(DATE '2021-09-01',
        DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY),
        'retained-2',
        3), STRUCT(DATE '2021-09-01',
        DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY),
        'retained-3',
        4), STRUCT(DATE '2021-09-01',
        DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY),
        'retained-4',
        5), STRUCT(DATE '2025-08-01',
        DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY),
        'completed',
        6), STRUCT(DATE '2025-08-01',
        DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY),
        'extended-1',
        7), STRUCT(DATE '2025-08-01',
        DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY),
        'extended-2',
        8), STRUCT(DATE '2025-08-01',
        DATE_ADD(CURRENT_DATE(), INTERVAL 1 DAY),
        'extended-3',
        9), STRUCT(DATE '2021-09-01',
        DATE '2025-07-31',
        'completed',
        9), STRUCT(DATE '2021-09-01',
        DATE '2025-07-31',
        'extended-1',
        6), STRUCT(DATE '2021-09-01',
        DATE '2025-07-31',
        'extended-2',
        7), STRUCT(DATE '2021-09-01',
        DATE '2025-07-31',
        'extended-3',
        8) ]))`;
}

function orderedCohortMilestonesWithStartAndEndDates(ctx) {
    /*This generates a list of milestone periods based on the standard final dates of milestone periods and calculates what their first date of the milestone period would be. It also numbers the milestones in ascending order of milestone end date. */
    return `
    (SELECT
    DATE_ADD(LAG(CAST(CONCAT(cohort_year,'-',milestone_months) AS date)) OVER (ORDER BY CAST(CONCAT(cohort_year,'-',milestone_months) AS date)), INTERVAL 1 DAY) AS milestone_start,
    CAST(CONCAT(cohort_year,'-',milestone_months) AS date) AS milestone_end,
    row_number () OVER (ORDER BY CAST(CONCAT(cohort_year,'-',milestone_months) AS date) ASC) AS milestone_order
  FROM
    UNNEST(['10-31','12-31','03-31','07-31']) AS milestone_months
  CROSS JOIN (
    SELECT
      DISTINCT(start_year)+1 AS cohort_year
    FROM
      ${ctx.ref("cohorts_latest_ecf1")}) AS cohorts
  QUALIFY
    milestone_start IS NOT NULL)`;
}

function stateToStateHierarchy(stateField) {
    return `
      CASE ${stateField}
          WHEN 'paid' THEN 7
          WHEN 'payable' THEN 6
          WHEN 'eligible' THEN 5
          WHEN 'submitted' THEN 4
          WHEN 'clawed_back' THEN 3
          WHEN 'awaiting_clawback' THEN 2
          WHEN 'voided' THEN 1
          ELSE 0
      END
    `;
}

function declarationTypeToDeclarationTypeHierarchy(declarationTypeField) {
    return `
      CASE ${declarationTypeField}
          WHEN 'completed' THEN 12
          WHEN 'extended-6' THEN 11
          WHEN 'extended-5' THEN 10
          WHEN 'extended-4' THEN 9
          WHEN 'extended-3' THEN 8
          WHEN 'extended-2' THEN 7
          WHEN 'extended-1' THEN 6
          WHEN 'retained-4' THEN 5
          WHEN 'retained-3' THEN 4
          WHEN 'retained-2' THEN 3
          WHEN 'retained-1' THEN 2
          WHEN 'started' THEN 1
          ELSE 0
      END
    `;
}

module.exports = {
    contentGroupPath,
    extractValueFromSingleElementArrayofJSONStrings,
    yearStartDateToAcademicYearString,
    correctOrderDeclarationsTypesShouldBeReceived,
    orderedCohortMilestonesWithStartAndEndDates,
    stateToStateHierarchy,
    declarationTypeToDeclarationTypeHierarchy
};
