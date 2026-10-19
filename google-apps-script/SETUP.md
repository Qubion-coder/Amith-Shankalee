1. Open the Google Sheet:
   https://docs.google.com/spreadsheets/d/1LfNrietRs02HX439SHtG86yjRzrleCFNJb5Dnw2cwGE/edit
2. Open Extensions > Apps Script.
3. Replace the script content with the code from google-apps-script/code.gs and save.
4. Select the `setup` function in the toolbar and click Run. Approve the permissions
   prompt. This creates the RSVP tab with headers. The tab is also created
   automatically on the first submission if you skip this step.
5. Click Deploy > New deployment.
6. Select type: Web app.
7. Execute as: Me.
8. Who has access: Anyone.
9. Deploy and copy the Web App URL (ends in /exec).
10. Put that URL in `scriptUrl` in src/components/RSVPForm.tsx.

RSVP columns: Timestamp | Full Name | Attendance | Guests | Message

Notes:
- If you update the Apps Script code later, use Deploy > Manage deployments >
  Edit > Version: New version, so the URL stays the same.
