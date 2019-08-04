# Get All Chromebooks

## Overview

The Get All Chromebooks functionality is a quick way to get all devices in your organization with Chromebook Getter.
By using this function you will have no options and the add-on will pull all Chromebooks back.

## How To Use

* Add-ons -> Chromebook Getter -> Chromebook Actions -> Get All Chromebooks
* Depending on how many devices you have, this could take a couple of minutes. Grab some coffee and come back. A dialog box will let you know when data is ready.

## Look Under The Hood

```ts

function pullChromebooks(
  chromebooks: GoogleAppsScript.AdminDirectory.Schema.ChromeOsDevice[] = [],
  nextPageToken: String = null
): void {
  try {
    const data = AdminDirectory.Chromeosdevices.list(CUSTOMER, {
      pageToken: nextPageToken
    })
    if (data && data.chromeosdevices && data.chromeosdevices.length > 0) chromebooks.push(...data.chromeosdevices)
    if (data.nextPageToken) return pullChromebooks(chromebooks, data.nextPageToken)
    if (!data.nextPageToken) return buildDataSheet(chromebooks)
  } catch (error) {
    ERROR_MESSAGE(error)
  }
}

```

## Video Walkthrough
<br />
<iframe width="560" height="315" src="https://www.youtube.com/embed/pUp_qDVhjLU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Known Issues

#### None at this time