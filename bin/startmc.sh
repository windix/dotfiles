#!/bin/bash
sudo /usr/local/McAfee/AntiMalware/VSControl startoas
sudo launchctl load /Library/LaunchDaemons/com.mcafee.agent.macmn.plist
sudo launchctl load /Library/LaunchDaemons/com.mcafee.agent.ma.plist
