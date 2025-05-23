# Resize Confluence Roadmap planner - Google Chrome extension
A google chrome extension to resize Confluence's Roadmap planner by Atlassian modal window, so that it is more usable.

## ☕ Support
If you like what I do, consider to [ ![BuyMeACoffee](https://raw.githubusercontent.com/pachadotdev/buymeacoffee-badges/main/bmc-white.svg)](https://www.buymeacoffee.com/martinbortel)


## **Caution**
_There is a known issue - when browser window is resized while the modal window is active, the resizing feature breaks._

## Installation
```sh
git clone git@github.com:martinbortel/Confluence-Roadmap-planner.git
# add $PWD/Confluence-Roadmap-planner to Google Chrome as follows in [Load the Extensions in Chrome]
```

## Load the Extension in Chrome
1) Open Chrome and go to `chrome://extensions/`.
2) Enable **Developer mode** (top right corner).
3) Click **Load unpacked** and select your extension folder.
4) Open a Confluence page with the roadmap dialog and check if it resizes.

## Update
1) Pull changes from git
```sh
git pull
```
2) Open `Resize Confluence Roadmap Dialog` details in `chrome://extensions`
3) Click reload button (top right corner of the details page) - _Version should change and a notification appear in bottom left corner saying 'Reloaded'_ 


## Change log
1.4.0
 - add Q1/Q2/Q3/Q4 into the timeline for better visibility (in edit mode)