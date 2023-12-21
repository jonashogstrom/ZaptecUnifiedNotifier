# ZaptecSlackNotifier


![image](https://github.com/PierreGode/ZaptecSlackNotifier/assets/8579922/badc54dc-ca64-4c54-9ad3-786d857eadc3)

![image](https://github.com/PierreGode/ZaptecTeamsNotifier/assets/8579922/4045aa5a-f37a-4df1-8192-ee26e2a8e7b2)

Send notifications of availible Zaptec chargers that are availible in your Zaptec account to Slack or Teams


Node.js & npm: This is the runtime environment for executing JavaScript code server-side.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/J3J2EARPK)


## Clone this repository
```
git clone https://github.com/PierreGode/ZaptecUnifiedNotifier.git
```
```
cd ZaptecUnifiedNotifier
```
## Prerequisites
Before you proceed, ensure you have the following:
```
sudo apt-get install npm
```
```
npm install axios @slack/web-api
```

```
npm install dotenv
```

## Setup
Create a .env file: At the root of your project, create a file named .env
```
touch .env
```

Add your secrets/configuration: Inside this file, you can set your environment variables as key-value pairs:
# Zaptec Credentials
```
ZAPTEC_USERNAME=myUsername
ZAPTEC_PASSWORD=myPassword
```
# Slack Configuration
```
SLACKBOT_NAME=ZaptecBot
SLACKBOT_ICON=https://raw.githubusercontent.com/PierreGode/ZaptecSlackNotifier/main/images/zaptec.png
SLACK_WEBHOOK_URL=myWebhookURL
SLACK_TOKEN=BotUserOAuthToken
SLACK_WEBHOOK_PRIVATE_URL=myPrivateWebhookURL
```

# Microsoft Teams Configuration
```
TEAMS_WEBHOOK_URL=myTeamsWebhookURL
TEAMS_WEBHOOK_PRIVATE_URL=myPrivateTeamsWebhookURL
```
```
# General Settings
COMPANY_NAME=word
EXCLUDE_DEVICES=devicename1,devicename2
```

# Note Descriptions
# COMPANY_NAME: Removes specified word from status (e.g., 'company' from 'company 01').
# SLACK_WEBHOOK_PRIVATE_URL: Posts charge complete notifications privately. Defaults to SLACK_WEBHOOK_URL if not set.
# TEAMS_WEBHOOK_PRIVATE_URL: Same as SLACK_WEBHOOK_PRIVATE_URL but for Teams.
# SLACKBOT_ICON/SLACKBOT_NAME: Customize Slack message appearance.
# EXCLUDE_DEVICES: Exclude specific devices from notifications.

# Security Note: Avoid storing sensitive information in plaintext. Use secure methods for production.

## Running the Notifier
Once you've set up the configurations, run the notifier using:
```
node node.js
```
preferably setup an @reboot sleep 60 && /usr/local/bin/node /home/pi/ZaptecSlackNotifier/node.js >> /var/log/slack.log 2>&1 in crontab
