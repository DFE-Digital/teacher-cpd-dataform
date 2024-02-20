## How to create and enable a personal access token (PAT) to connect Dataform and Github
1. Log into the cpddata GitHub account. This is the machine user account that is used to generate a PAT to connect Dataform to GitHub.
2. Go to settings in your account drop-down in the top right corner of your screen
3. In the settings page, on the very bottom left of the navigation pane, click on developer settings                      
   ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/152412107/beb1b7f8-abea-4d75-8cea-f7809a0d27d7)
4. Go to Tokens (Classic) under Personal Access Tokens                             
    ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/152412107/cf0cfb8c-bc5f-4bde-9124-76cedf2f5cdd)
5. Click on 'Generate New Token (classic)'                
   ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/152412107/1d58a75b-265d-403e-9ff0-122dc0812ada)
6. Name the token and apply the correct settings and create the token                   
   ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/152412107/7b4b1191-b792-4490-94b0-e6f60305a07a)
   ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/152412107/6145bb67-65c0-4536-a402-f6cbde740798)
7. A token will then be created, copy this value. 
8. Go to Dataform and open Secret Manager            
   ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/152412107/41d221d2-66ab-4215-97c9-ce90af8b5b5c)
9. Click on the token name                     
   ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/152412107/217be26c-640f-49db-b844-84adf347af7e)
10. Add new version      
    ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/152412107/a77b7e83-1fe5-4bc1-b9a6-e60d48c0f73c)
11. Paste the value you copied from GitHub into the secret value box and click 'disable all past versions' and click 'add new version'                  
    ![image](https://github.com/DFE-Digital/teacher-cpd-dataform/assets/152412107/f2ee7872-58e3-4cb1-82fa-01071d28d1ad)
12. Now Dataform is connecting to GitHub with this PAT.
