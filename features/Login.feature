Feature: MS Teams Login Page Test Cases


    @LoginScenario
    Scenario: Login to MS Teams with valid UserName and Invalid Password
        Given I Navigate to MSTeams login page
        When I Enter a Valid User Name & Click Next
        And  I Enter InValid Password & Click Next
        Then Incorrect Password Error Message is Displayed


     @LoginScenario
    Scenario: Login to MS Teams with Incorrect UserName
        Given I Navigate to MSTeams login page
        When I Enter a InCorrect User Name & Click Next
        Then Incorrect UserName Error Message is Displayed


    @LoginScenario
    Scenario: Login to MS Teams with Invalid UserName
        Given I Navigate to MSTeams login page
        When I Enter InValid User Name & Click Next
        Then Invalid UserName Error Message is Displayed


    @LoginScenario
    Scenario: Login to MS Teams with valid UserName and Valid Password
        Given I Navigate to MSTeams login page
        When I Enter a Valid User Name & Click Next
        And I Enter Valid Password & Click Next
        Then Stay_SignedIn Page is Displayed
        When  On Click Yes on Stay_SignedIn Page and Select WebApp from App Promotion page
        Then Signed In Successfully
        When  I SignOut from the application
        Then Signed Out Successfully



