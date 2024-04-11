# Mart Best Practice

## Data set-up

Marts are designed for three primary purposes. Data set-up is dictated by the primary purpose of the mart: 
  - For use in **BigQuery**:
    - These are **fundamental building block marts**, pulling together data from multiple tables in a single mart. They give a snapshot of data that has multi-purpose uses for data requests and should contain as many columns from the underlying tables as might be needed in future.
    - Primarily optimised to be manipulated in multiple ways, not necessarily to be streamlined and efficient. **The goal is to create the smallest numbers of marts that can be flexibly used to meet the greatest possible number of data requests.**
    - These mart files are stored in the **'bigquery_marts' folder** and the appropriate programme sub-folder in Dataform and their **name begins with the programme they're designed for 'npq' or 'ecf'**. 
  - For use in **LookerStudio**:
    - LookerStudio marts are designed building on the BigQuery marts above.
    - **Primary purpose should be use in LookerStudio**
    - These should contain *only* the fields required for the LookerStudio dashboard they are designing the mart for, to meet the particular requirements unique to a single (or multiple) dashboards.
    - Care should be taken to avoid creating too large marts for this purpose as that can slow down LookerStudio.
    - These are saved in the looker_studio_marts folder and  the appropriate programme sub-folder in Dataform. Their **name begins with 'ls_' and then the programme type if relevant**. 
  - For **TAD** Use:
    - These marts are for use by the TAD team and are trimmed down versions of the BigQuery marts above.
    - Special care needs to be taken with these marts to ensure that only the necessary fields are included and that their definitions are specific and accurate. Omit anything that might cause confusion. Be especially careful with descriptions, do not leave room for ambiguity.
    - These are set up with a special schema configuration at the top of the dataform file that ensures the resulting table shows up in the TAD dataset.
    - The dataform file is saved in the **tad_marts** folders and the **file name is prefaced with 'tad_'**.

Where there is overlap between the first two use cases, it can be helpful to create a single larger mart for BigQuery that spans multiple data needs and multiple marts used for LookerStudio that are trimmed down versions of the BigQuery mart.

## Mart folder structure

**Mart folders are split by purpose** *(BigQuery, LookerStudio, TAD)* and **then by programme**. Cross-programme marts should sit in the correct purpose folder, outside of the programme folders

## SQL Structure

CTE's should be used wherever possible to make the code easy to read and to aid QA. It is preferable to have longer names of tables within the the queries to preserve clarity and ensure the approach taken to create the mart can be easily followed.

## Mart metadata

Mart descriptions are fundamental reference documentation and should be completed in a way to help future users.

Mart **overall descriptions should clearly describe the use case for which the mart has been created and give brief context for the approach that has been taken to create the mart**.

**Mart field descriptions should be as descriptive as possible** in terms of *use case, origin, meaning and relationship with other fields in other tables*

## Mart naming conventions

Marts created for use in LookerStudio should start with 'ls'. 

Marts should contain the name of the programme they're created for (ECF or NPQ), if only created for one programme. 

Each mart name should contain a limited description of what it does.

**Structure: 'ls(if relevant)_programme(NPQ or ECF)_description'**

