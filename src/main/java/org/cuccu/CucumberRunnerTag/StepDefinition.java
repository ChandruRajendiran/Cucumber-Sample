package org.cuccu.CucumberRunnerTag;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
static WebDriver driver;

@Before

public void executeDriver() {
	// TODO Auto-generated method stub
	System.setProperty("webdriver.chrome.driver", "D:\\java\\CucumberRunnerTag\\driver\\chromedriver.exe");
	 driver=new ChromeDriver();
	
}
	
	@Given("the user is on the telecom home page")
	public void the_user_is_on_the_telecom_home_page() {
		
		driver.get("http://demo.guru99.com/");
		
		
		driver.manage().window().maximize();

		driver.findElement(By.xpath("//a[text()='Telecom Project']")).click();
	}

	@When("the uer enters the customer details with firstname lastname")
	public void the_uer_enters_the_customer_details_with_firstname_lastname(io.cucumber.datatable.DataTable dataTable) throws InterruptedException {
		List<String> custlist=dataTable.asList(String.class);
		
		driver.findElement(By.xpath("//a[text()='Add Customer']")).click();
		
		driver.findElement(By.id("fname")).sendKeys(custlist.get(0));
		
		driver.findElement(By.id("lname")).sendKeys(custlist.get(1));
		
		driver.findElement(By.id("email")).sendKeys(custlist.get(2));
		
		driver.findElement(By.xpath("//textarea[@placeholder='Enter your address']")).sendKeys(custlist.get(3));
		driver.findElement(By.id("telephoneno")).sendKeys(custlist.get(4));
		Thread.sleep(2000);
		
		driver.findElement(By.xpath("//input[@name='submit']")).submit();
		
	}

	@Then("they should be able to get the confirmation")
	public void they_should_be_able_to_get_the_confirmation() {
		String s=driver.getCurrentUrl();
		
		System.out.println(s);
	}
	@After
	public void close() {
		// TODO Auto-generated method stub
driver.close();
	}
}
