# TAD Big Query Access Instructions
1. Grant the correct permissions in the TAD dataset in BigQuery
![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/145556040/3ca27e0e-aba0-4554-b08b-3ed375ef90d1)
2. Assign the role 'BigQuery Data Editor' to the individual
![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/145556040/cf95159a-e92f-4da4-b4e1-0aa3c87dfe58)
3. In the IAM permissions center in the Google Cloud center, grant the 'BigQuery Job User' role to the individual
![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/145556040/64f54602-cb4f-4b64-8435-c6957dbe7d88)
4. The user will need to download the bigrquery and gargle packages in R.
5. They will need to use this code below to connect
  ``` # connection to ecf-bq ----------------------------------------------------
library(DBI)
library(bigrquery)
bq_con <- dbConnect(
  bigrquery::bigquery(),
  project = "ecf-bq",
  dataset = "TAD",
  billing = "`Department for Education - CTS`"
)
### Sample code to check it's working ###
bq_tb <- bq_dataset_query(x = "ecf-bq.TAD",
                        query = "SELECT * FROM ecf-bq.TAD.participant_declarations WHERE lead_provider_name = 'Capita'")
example_bq_data <- bq_table_download(bq_tb,
                                     n_max = 10) ```
6. They can now use this package to query the tables
