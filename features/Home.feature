Feature: MS Teams Home Page Test Cases


    @HomeScenario
    Scenario: Login to MS Teams with valid UserName and Valid Password
        Given I Navigate to MSTeams login page
        When I Enter a Valid User Name & Click Next
        And I Enter Valid Password & Click Next
        Then Stay_SignedIn Page is Displayed
        When  On Click Yes on Stay_SignedIn Page and Select WebApp from App Promotion page
        Then Signed In Successfully
        When  I Click on Station Dropwdown
        Then List of Stations are Displayed



