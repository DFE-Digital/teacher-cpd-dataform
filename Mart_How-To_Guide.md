# Mart Creation How-To Guide
1. Navigate to the teacher-cpd-dataform repository in Dataform:
   ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/145556040/56e4a6c1-7b89-4e9e-ac01-702db4bcc5b5)
2. Select your development work space:
   ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/145556040/06587e2f-f06a-4fea-bef4-d1cf8d3a31ae)
3. Navigate to the appropriate subfolder within definitions > marts:
   ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/145556040/5adc06e4-3b28-42c2-8f05-098d0aa835d8)
4. Hover over the three dots to the right of the desired subfolder and click 'Create File':
   ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/145556040/09b0e94c-ba7e-4e17-b9f9-33c02b8ffa6e)
5. Name your new mart using the correct naming structure. Be sure to to include '.sqlx' at the end of the file name to create the correct file type:
   ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/145556040/183a2d80-4f44-4cff-a935-1053dbfa73e9)
6. Copy and paste the template config below, replacing the 'xxxxx' values with the desired values:
```
config {
    type: "table",
    assertions: {
        uniqueKey: ["xxxxx"]
    },
    bigquery: {
        partitionBy: "",
        clusterBy: ["xxxxx", "xxxxx", "xxxxx","xxxxx"]
    },
    description: "xxxxx ",
    columns: {
        xxxxx: "xxxxx",
        xxxxx: "xxxxx"
    }
}
```
7. Input SQL query below the configuration above. Ensure you change the FROM clause so that it's formatted in javascript. Replace 'xxxxx' with the value post 'ecf-bq.dataform.'
```
${ref('xxxxx')}
```
8. When you're done writing your code, ensure you format and run your code to check it works:
   ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/145556040/3e7ec2ac-6984-4036-b299-876c4cef2d87)
9. Run an execution to confirm the new mart runs successfully, this will create the mart in your development branch table in bigquery:
   ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/145556040/7ea0306f-1795-48c9-81c5-e40ebb9f3c00)
   ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/145556040/20d91019-f0e6-4a4c-89fa-22d9ff95748a)
10. Commit changes to your development branch in Dataform:
    ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/145556040/c83caff3-a49d-4c8b-b77b-d8e18a5a8e68)
11. Add clear notes about what actions you have taken in the commit:
    ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/145556040/c3d6f6b5-199a-42aa-bf37-3fa5e57a80d4)
12. Push changes to your development branch in Github
13. Create Pull Request in Github for changes that have been made.
14. Assign reviewer
15. Make any requested/desired changes in dataform, commit changes, and push changes to Github development branch. This will automatically update the pull request.
16. When your reviewer approves your pull request and merges the changes, the new mart will be available in BigQuery once a workflow execution runs. 



