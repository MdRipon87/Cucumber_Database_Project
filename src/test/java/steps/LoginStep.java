package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.DatabasePage;
import page.LoginPage;
import utill.BrowserFactory;

public class LoginStep {
	WebDriver driver;
	LoginPage login;
	DatabasePage dashboard;

	@Before
	public void beforeRun() {
		driver = BrowserFactory.initialization();
		login = PageFactory.initElements(driver, LoginPage.class);
		dashboard = PageFactory.initElements(driver, DatabasePage.class);
	}

	@Given("^on the Techfios login page$")
	public void on_the_Techfios_login_page() throws Throwable {
		driver.get("https://techfios.com/billing/?ng=login/");
	}

	@When("^enters username$")
	public void enters_username() throws Throwable {
		login.enterName(dashboard.getData("username"));

	}

	@When("^enters password$")
	public void enters_password() throws Throwable {
		login.enterPassword(dashboard.getData("password"));
	}

	@When("^clicks on login$")
	public void clicks_on_login() throws Throwable {
		login.clickSigninButton();
	}

	@Then("^should be on dashboard$")
	public void should_be_on_dashboard() throws Throwable {
		login.validateDashboardHeader();
	}

}
