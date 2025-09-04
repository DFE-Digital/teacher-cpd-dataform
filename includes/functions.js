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
/* This function allows you to extract the value from a key:value pair inside a field that contains a single element array of Json strings */
/* You need to  identify the field which contains the array of strings and the key within that.  */
function extractValueFromSingleElementArrayofJSONStrings(singleElementArrayFieldName, key) {
    return `JSON_VALUE(${singleElementArrayFieldName}[SAFE_OFFSET(0)], '$.${key}')`;
}

function yearStartDateToAcademicYearString(year) {
    /* Convert a date to a string representing the academic year that starts during the calendar year that date falls within. */
    /* For example, convert 2025-03-28 to the string '2025-26'. */
    return `FORMAT_DATE("%G", ${year}) || '-' || FORMAT_DATE("%g", DATE_ADD(${year}, INTERVAL 1 YEAR))`;
}

module.exports = {
    contentGroupPath,
    extractValueFromSingleElementArrayofJSONStrings,
    yearStartDateToAcademicYearString
};
