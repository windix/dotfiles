#!/bin/bash
sudo /usr/local/McAfee/AntiMalware/VSControl stopoas
sudo launchctl unload /Library/LaunchDaemons/com.mcafee.agent.macmn.plist
sudo launchctl unload /Library/LaunchDaemons/com.mcafee.agent.ma.plist
