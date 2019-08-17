# Get Chromebooks

## Overview

The Get Chromebooks functionality is the core way that you will interact with Chromebook Getter.
By using this function you will have the option to get a single organizational unit or an organizational unit and all its child organizational units.

## How To Use

* Add-ons -> Chromebook Getter -> Chromebook Actions -> Get Chromebooks
* Use the Dropdown menu to choose the organizational unit you need Chromebook data for.
* If needing child organizational units select the check box.
* Press blue 'Get Chromebooks' button or 'Download Icon'.
* Depending on how many devices you have, this could take a couple of minutes. Grab some coffee and come back. A dialog box will let you know when data is ready.

## Look Under The Hood

```ts

function multipleOrgGet(orgToGet: string, getSubOrgs: boolean = false) {
  try {
    // https://issuetracker.google.com/issues/63418725
    const RemoveFirstSlash: string = orgToGet.substring(1)
    const chromebooks: GoogleAppsScript.AdminDirectory.Schema.ChromeOsDevices[] = []
    let OrgsAndSubOrgs: GoogleAppsScript.AdminDirectory.Schema.OrgUnit[]
    
    if (getSubOrgs === true) {
      const ParentOrg = AdminDirectory.Orgunits.get(CUSTOMER, [RemoveFirstSlash])
      const ChildrenOrgs = AdminDirectory.Orgunits.list(CUSTOMER, {
        type: ALL,
        orgUnitPath: ParentOrg.orgUnitId 
      }).organizationUnits
      if (ChildrenOrgs && ChildrenOrgs.length > 0) {
        OrgsAndSubOrgs = [ParentOrg, ...ChildrenOrgs]
      } else {
        OrgsAndSubOrgs = [ParentOrg]
      }     
    } else {
      // HANDLE MAIN ORG
      if (!RemoveFirstSlash) {
        OrgsAndSubOrgs = [{ orgUnitPath: '/' }]
      } else {
        OrgsAndSubOrgs = [AdminDirectory.Orgunits.get(CUSTOMER, [RemoveFirstSlash])]
      }   
    }

    buildDataSheet(
      chromebooks
        .concat(...OrgsAndSubOrgs.map(orgUnit => getChromebooksInOrg(orgUnit.orgUnitPath)))
    )

  } catch (error) {
    ERROR_MESSAGE(error)
  }
}

```

## Video Walkthrough

<sup>COMING SOON</sup>

## Known Issues

#### My Sidebar says 'Loading'

* Ensure your district web filter has the following url unblocked `https://cdn.jsdelivr.net/npm/vue/dist/vue.js`
* Ensure that you are a domain super admin.
* Uninstall Chromebook Getter and close your web browser, reinstall Chromebook Getter.

#### Recent Users Only Shows The Last User

* chromebookinventory showed me all of the last users?
* This is known by the core team, we have no plans to change this funcationality currently. (7/20/2019)

#### <del>Exception: tha data validation rule has more items than the limit of 500. Use the "List from a range" criteria instead.</del>

* <del>This error only happens for users with over 500 org units.
* This issue is caused by a hard limit of app script data validation rules having a limit of 500.
* We are looking into a fix for this issue (7/25/2019)</del>
* <del>Patch Issued (8/1/2019) bypassing features for users with more than 500 orgs.<del>
* Issue resolved for all users (8/17/2019)

#### <del>Certain Organizational Units Will Not Pull Data or Say No Data</del>

* <del>We are currently investigating this issue and have been able to recreate this issue locally. (7/20/2019)</del>
* Resolved (7/24/2019)
