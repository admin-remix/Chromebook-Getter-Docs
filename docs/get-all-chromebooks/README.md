# Basics

The Get All Chromebooks functionality is a quick way to get all devices in your organization with Chromebook Getter.
By using this function you will have no options and the add-on will pull all Chromebooks back.

## How To Use

* Add-ons -> Chromebook Getter -> Get All Chromebooks
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
    if (data.nextPageToken) pullChromebooks(chromebooks, data.nextPageToken)
    if (!data.nextPageToken) return buildDataSheet(chromebooks)
  } catch (error) {
    ERROR_MESSAGE(error)
  }
}

```

## Video Walkthrough

<sup>COMING SOON</sup>

## Known Issues

#### None at this time