Steps to get tasks
------------------

##Authenticacion##
https://accounts.google.com/o/oauth2/auth?scope=email https://www.googleapis.com/auth/tasks&redirect_uri=http://localhost/oauth2callback&response_type=token&client_id=364497781357-mdeekpgeb2bso2acdjs1oe0aa7tep448.apps.googleusercontent.com

##Redirects to##
http://localhost/oauth2callback#access_token=ya29.LQExaZJfR_-H3_jaUep2aVWfqallUlcSRXnujWJoQ_TfczhQTfd8Ck91DXx6p93Fi6-p6fAqWQ-rIw&token_type=Bearer&expires_in=3600 

##Token validation##
https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=ya29.LQExaZJfR_-H3_jaUep2aVWfqallUlcSRXnujWJoQ_TfczhQTfd8Ck91DXx6p93Fi6-p6fAqWQ-rIw

##List tasks##
https://www.googleapis.com/tasks/v1/users/@me/lists
WITH HEADERS
Authorization=Bearer Bearer ya29.LQExaZJfR_-H3_jaUep2aVWfqallUlcSRXnujWJoQ_TfczhQTfd8Ck91DXx6p93Fi6-p6fAqWQ-rIw


Grunt
-----
http://gruntjs.com/getting-started
http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/
