# Mart Best Practice

## Data set-up

Mart data set-up is dictated by the primary purpose of the mart. **Marts primarily used for querying within BigQuery** that join together separate tables, giving a snapshot of data that has multi-purpose uses for data requests, should contain as many columns from the underlying tables as might be needed in future. **The goal is to create the smallest numbers of marts that can be flexibly used to meet the greatest possible number of data requests.** 

Separate marts should be created **where their primary purpose is to be used in LookerStudio. These should contain *only* the fields required for the LookerStudio dashboard they are designing the mart for.** Care should be taken to avoid creating too large marts for this purpose as that can slow down LookerStudio.

Where there is overlap between these two use cases, it can be helpful to create a single larger mart for BigQuery that spans multiple data needs and multiple marts used for LookerStudio that are trimmed down versions of the BigQuery mart.

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

## Mart folder structure

**Mart folders are split by purpose** *(BigQuery, LookerStudio, TAD)* and **then by programme**. Cross-programme marts should sit in the correct purpose folder, outside of the programme folders

