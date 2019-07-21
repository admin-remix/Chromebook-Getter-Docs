# Basics

The Get Chromebooks funcationality is the core way that you will interact with Chromebook Getter.
By using this function you will have the option to get a single organizational unit or a organizational unit and all its child organizational units.

## How To Use

* Add-ons -> Chromebook Getter -> Get Chromebooks
* Use the Dropdown menu to choose the organizational unit you need Chromeobook data for.
* If needing child oranizational units select the check box.
* Press blue 'Get Chromebooks' button.
* Depending on how many devices you have this could take a couple minutes, grab some coffee and come back. A dialog box will let you know when data is ready.

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

## Known Issues

#### My Sidebar says 'Loading'

* Ensture your district web filter has the following url unblocked `https://cdn.jsdelivr.net/npm/vue/dist/vue.js`
* Ensure that you are a domain super admin.
* Uninstall Chromebook Getter and close your web browser, reinstall Chromebook Getter.

#### Certain Organizational Units Will Not Pull Data or Say No Data

* We are currently investigating this issue and have been able to recreate this issue locally. (7/20/2019)

#### Recent Users Only Shows The Last User

* chromebookinventory showed me all the last users?
* This is known by the core team, we have no plans to change this funcationality currently. (7/20/2019)
