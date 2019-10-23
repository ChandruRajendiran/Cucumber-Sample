
@FunctionalTest
Feature: Booking confirmation page

  @SmokeTest
  Scenario:  Verify the page components
    Given the user is on the telecom home page
    When the uer enters the customer details with firstname lastname
    |Chandr|Raj|chandru@gmail.com|test|1224|
    Then they should be able to get the confirmation
    
    
    @RegressionTest
    Scenario:  Verify the page components
    Given the user is on the telecom home page
    When the uer enters the customer details with firstname lastname
    |Kumar|Raj|raj@gmail.com|test|1224|
    Then they should be able to get the confirmation 
    
    
    @End2End
    
    Scenario: Verify teh page compnents three
     Given the user is on the telecom home page
    When the uer enters the customer details with firstname lastname
    |Ajay|Raj|Ajay@gmail.com|test|1224|
    Then they should be able to get the confirmation 
    
    
    

  