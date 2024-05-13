## Overview
This outlines instructions for creating the static tables all_gias_ofsted_establishments and open_gias_ofsted_establishments.

## Data sources
There are three data sources for this table:
- GIAS - Establishment downloads - All establishment data - Establishment fields CSV (available [here](https://www.get-information-schools.service.gov.uk/Downloads))
- GIAS - Establishment downloads - Open children's centres data - Children's centre fields CSV (available [here](https://www.get-information-schools.service.gov.uk/Downloads))
- Ofsted - Childcare providers and inspections: management information (download the most recent CSV file titled "*Management information - childcare providers and inspections - most recent inspections data as at DATE*" from [here](https://www.gov.uk/government/statistical-data-sets/childcare-providers-and-inspections-management-information)

## Once downloaded...
... you need to pull the relevant fields from each download into th final table.

Below are the fields included in the final table and whether they are in the original downloads. If they are in the original downloads, the fields to pull the data from are signified by "FIELD NAME". If they are not in the original downloads, manual entry of data is signified by (DATA_TO_ENTER).
| data_source | date_accessed | establishment_urn | phase_of_education | la_name | establishment_type | establishment_subtype | establishment_status | gor_code | gor_name | section41_approved |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GIAS - All establishment data | DATE ACCESSED | Yes: "URN" | Yes: "PhaseOfEducation (name)" | Yes: "LA (name)" | Yes: "EstablishmentTypeGroup (name)" | Yes: "TypeOfEstablishment (name)" | Yes: "EstablishmentStatus (name)" | Yes: "GOR (code)" | Yes: "GOR (name)" | Yes: "Section41Approved (name)" | 
| GIAS - Open children's centre data | DATE ACCESSED | Yes: "URN" | Enter manually: /Children's centre/ | Yes: "LA (name)" | Enter manually: /Children's centre/ | Yes: "TypeOfEstablishment (name)" | Yes: "EstablishmentStatus (name)" | Link using GOR Codes Table | Yes: "GOR (name)" | Enter manually: /Not applicable/ |
| Ofsted - Childcare providers | DATE ACCESSED | Yes: "Provider URN" | Enter manually: /Childcare provider/ | Yes: "Local Authority" | Yes: "Provider Type" | Yes: "Provider Subtype" | Enter manually: /Open/ | Link using GOR Codes Table | Yes: "Region" | Enter manually: /Not applicable/ |

The relevant GOR Codes Table is given below. For the Ofsted data, some records have the region name "*Not Recorded*". In those cases, enter /Not Recorded/ for the field gor_code:
| GOR (name) | GOR (code) |
| --- | --- |
| Not Recorded | Not Recorded | 
| North East | A | 
| North West | B | 
| Yorkshire and the Humber | D | 
| East Midlands | E | 
| West Midlands | F | 
| East of England | G | 
| London | H | 
| South East | J | 
| South West | K | 
| Wales (pseudo) | W | 
| Not Applicable | Z | 


## Once the data has been transferred...
... you then need to keep only those records that meet the following criteria:
- `gor_code NOT IN ('W', 'Z')`

This creates your all_gias_ofsted_establishments table.

**In order to create the table open_gias_ofsted_establishments, save a copy of your all_gias_ofsted_establishments table and perform this additional check**
- `establishment_status IN ('Open', 'Open, but proposed to close')`

This will give you both of the final tables.

## The final step...
... is to upload the tables to BigQuery in the `static_tables` dataset. To do this:
1) Click on the dots next to `static_tables` and click "Create table".`
2) Upload the file you have created, ensure the "File format" is 'CSV' and enter the name of the table you're replacing (either open_gias_ofsted_establishments or all_gias_ofsted_establishments).`
3) Add all the field names in the "Schema" section. **NB:** Make sure the date_accessed field is in a YYYY-MM-DD format in the Excel and you have selected 'DATE' in the "Type" dropdown.
4) Scroll down to "Advanced settings", select 'Overwrite table' in the "Write preference" dropdown and put '1' in "Header rows to skip".`
5) Click "Create table" at the bottom`.

That should have replaced the existing table with all the new data without disrupting links to any Looker dashboards. Well done!

Any questions on these steps or any suggestions to improve the instructions, please reach out to Emilio Campa.
