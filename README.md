# SheetsBackend
An Angular frontend with Google Sheets backend

## Install
Run npm install from the repository directory to install dependencies

## Create Google sheet
Create a new blank spreadsheet on Google Drive
Enter a title for the spreadsheet
Copy the values from employees.txt into the new spreadsheet and save

## Create web extention
Click Extensions -> Apps Script
Copy the contens of scripts/code.gs into the editor
Replace the <spreadsheet id> token on line two with the id of the spreadsheet. 
To get this, examine the URL of the spreadsheet, it should be in the format of `https://docs.google.com/spreadsheets/d/<spreadsheet id>/edit`
e.g. in the url `https://docs.google.com/spreadsheets/d/123x4ABcDEfGhiJk5L6MnO78QRS9tu0w_XyOZ1ABcd2E/edit` the id is **123x4ABcDEfGhiJk5L6MnO78QRS9tu0w_XyOZ1ABcd2E**

## Deploy as web app
Click Deploy -> New Deployment
Click the gear icon next to Select type, and select Web app
Enter a description
Ensure your google id is selected as "Execute as"
Change "Who has access" to "Anyone"
Click Deploy

When you see the message "The Web App requires you to authorize access to your data." click "Authorize access" and select your google login on the pop up screen
If you get the error that "Google has't verified this app", click "Advanced" and then "Go to <your spreadsheet title> (unsafe)"
Click "Allow" on the sign in with Google screen

If the "Manage deployments" dialog isn't shown, click Deploy -> Manage deployments to display it
Click "Copy" under the URL value and paste it on line eight of the src/app/employees.service.ts file, replacing the <web app url> token

## Run application
Enter ng serve from the command line in the repository directory
When the server starts, open http://localhost:4200/ in a browser and confirm the same values from the spreadsheet are displayed
