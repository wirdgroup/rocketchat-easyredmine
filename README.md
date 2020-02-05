# Overview
We started using: RrocketChat: as an internal communication tool @ [WIRDGroup] (https://github.com/wirdgroup) and we needed to integrate with our project management tool: EasyRedmine:<br>
rocketchat_easyredmine_outgoing.js is a script which allows you to link the hastag of an issuse easyredmine in the following chans:
```
all_direct_messages, all_public_channels, all_private_groups
```

## Installation

### Rocket.Chat

1. Login as admin user and go to:
_Administration => Integrations => New Integration => Outgoing WebHook_

2. Event Trigger: **Message Sent**

3. Enabled: **True**

4. Set all channel, icons, etc. as you need/preference

5. Trigger Words (optional): **#**

6. URL: **http(s)://YOUR_URL_EASYREDMINE/issues/**

7. Impersonate User: **False**

8. Paste contents of [rocketchat_easyredmine_outgoing.js](https://github.com/wirdgroup/rocketchat-easyredmine/rocketchat_easyredmine_outgoing.js) into the _Script_ field. <br>**!! DON'T FORGET TO FILL IN THE API KEY OF AN EASYREDMINE USER !!**
```
let key = 'INSERTYOURAPIKEY';
```

### Demonstration
**Send Link issue**<br>
<img src=https://github.com/wirdgroup/rocketchat-easyredmine/screenshots/rocketchat_easyredmine_1.png><br>
<img src=https://github.com/wirdgroup/rocketchat-easyredmine/screenshots/rocketchat_easyredmine_2.png>
