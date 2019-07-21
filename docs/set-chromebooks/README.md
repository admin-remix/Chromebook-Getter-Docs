# Basics

The Set Chromebooks Meta Data funcationality is the only way you will update Chromebook data.
By using this function you will have the option to update the data of every Chromebook on the current Google sheet.

## How To Use

* Add-ons -> Chromebook Getter -> Set Chromebooks Meta Data.
* Confirm that you want to update the deivce using the dialog box.
* Wait for confirmation dialog box.

## Look Under The Hood

```ts

function uploadDataSheet(): void {
  const ok = Browser.msgBox('This will update all Chromebooks on the page with changes, Are you sure?', Browser.Buttons.OK_CANCEL)
  if (ok === 'ok') {
    try {
      const currentSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetName()
      const targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(currentSheet)
      const data = targetSheet.getDataRange().getValues()
      const dataShift = data.slice(1)
      const dataMap = dataShift.map((internalArray, i) => {
        return {
          orgUnitPath: internalArray[0],
          annotatedUser: internalArray[1],
          annotatedLocation: internalArray[2],
          annotatedAssetId: internalArray[3],
          notes: internalArray[4],
          deviceId: internalArray[9]
        }
      })
      dataMap.forEach((dataSet) => {
        AdminDirectory.Chromeosdevices.update(
          dataSet as GoogleAppsScript.AdminDirectory.Schema.ChromeOsDevice,
          CUSTOMER,
          dataSet.deviceId as string)
      })
      Browser.msgBox(`Updated ${dataMap.length} Chromebook(s)`)
    } catch (error) {
      ERROR_MESSAGE(error)
    }
  }
}

```

## Video Walkthrough

<sup>COMING SOON</sup>

## Known Issues

#### Devices Fail To Update

* Ensure the headers are in the first row (row one is not updated)
