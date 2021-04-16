@Smoke 
Feature: Varify the Techfios login 

Background: 
	Given on the Techfios login page 
	
Scenario: valid use should able to login with valid credentials 
	When  enters username 
	And  enters password  
	And clicks on login  
	Then should be on dashboard  
	