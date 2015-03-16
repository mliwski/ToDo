## Instructions to create your own Google APIs Project
 1. Go to https://console.developers.google.com/project
 1. Click "Create Project"
 1. Choose Name and projectId (i.e. ToDo, todo-0001)
 1. When project is created, go to Project -> APIs & auth -> APIs, Turn on Tasks API and turn off automatically turned on APIs (less to mess out when playing ;) )
 1. Go to Credentials (sibling to APIs) and click "Create new Client ID"
 1. Choose "Web application" and go to Content Screen
 1. Fill at least mandatory fields (email address and product name) and click "Save"
 1. On "Create Client ID" PopUp set your "authorized javascript origin" and "authorized redirect uris" (for development purposes I choose https://localhost for both), click "Create Client ID"
 1. Congratulations now you are on the first step to use google apis.

\* On Credentials page (redirected when "Create new Client ID" PopUp is filled) copy CLIENT ID to paste on configurations and use your own clientId
