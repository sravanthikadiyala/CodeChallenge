package ebay.qa.testautomation;

import java.util.List;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	RemoteWebDriver driver;
	
	@Given("^I am a non-registered customer$")
	public void i_am_a_non_registered_customer() throws Throwable {
		System.out.println("I am a non-registered customer");
		System.setProperty("webdriver.chrome.driver", "./resources/chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.manage().window().maximize();

	}

	@Given("^I navigate to www\\.ebay\\.co\\.uk$")
	public void i_navigate_to_www_ebay_co_uk() {
		
		driver.get("https://www.ebay.co.uk");
	    
	}

	@When("^I search for an item$")
	public void i_search_for_an_item() {
		driver.findElementByXPath("//*[@id='gh-ac']").sendKeys("chair");
	    driver.findElementByXPath("//*[@id='gh-btn']").click();

	}

	@Then("^I get a list of matching results$")
	public void i_get_a_list_of_matching_results(){
		List<WebElement> allTitles= driver.findElementsByXPath("//h3[contains(@class,'lvtitle')]/a[contains(@class,'vip')]");
		 System.out.println(allTitles.size());
		 for(WebElement eachTitle:allTitles)
		 {	
			 System.out.println(eachTitle.getText());
			
		 }
	   
	}

	@Then("^the resulting items cards show: postage price, No of bids, price or show BuyItNow tag$")
	public void the_resulting_items_cards_show_postage_price_No_of_bids_price_or_show_BuyItNow_tag() throws Throwable {
	   
		List<WebElement>Price= driver.findElementsByXPath("//li[contains(@class, 'lvprice')]/span[@class='bold']");
		for (WebElement p : Price) {
			System.out.println(p.isDisplayed());
		}
       List<WebElement>Tag=driver.findElementsByXPath("//li[@class='lvformat']");
       for (WebElement t : Tag) {
		System.out.println(t.isDisplayed());
	}
       List<WebElement>PostagePrice=driver.findElementsByXPath("//li[@class='lvshipping']");
       for (WebElement Postage : PostagePrice) {
		System.out.println(Postage.isDisplayed());
	}
	}

	@Then("^I can sort the results by Lowest Price$")
	public void i_can_sort_the_results_by_Lowest_Price() throws Throwable {
		WebElement element=driver.findElementByXPath("//a[text()='Best Match']");
		Actions action= new Actions(driver);
		action.moveToElement(element).build().perform();
		Thread.sleep(3000);
		driver.findElementByXPath("//*[@id='SortMenu']/li[4]/a").click();
	    
	}

	@Then("^the results are listed in the page in the correct order$")
	public void the_results_are_listed_in_the_page_in_the_correct_order() throws Throwable {
		List<WebElement>prices=driver.findElementsByXPath("//li[contains(@class, 'lvprice')]/span[@class='bold']");
		for (WebElement eachprice : prices) {
			System.out.println(eachprice.getText());
		}
	    
	}

	@Then("^I can sort the results by Highest Price$")
	public void i_can_sort_the_results_by_Highest_Price() throws Throwable {
		WebElement element1=driver.findElementByXPath("//a[text()='Lowest price']");
		Actions action1= new Actions(driver);
		action1.moveToElement(element1).build().perform();
		Thread.sleep(3000);
		driver.findElementByXPath("//*[@id='SortMenu']/li[4]/a").click();
	    
	}

	@Then("^I can filter the results by 'Buy it now'$")
	public void i_can_filter_the_results_by_Buy_it_now() {
		driver.findElementByXPath("//a[text()='Buy it now']").click();
	    
	}

	@Then("^all the results shown in the page have the 'Buy it now' tag$")
	public void all_the_results_shown_in_the_page_have_the_Buy_it_now_tag() {
		List<WebElement>allproducts=driver.findElementsByXPath("//div[@id='ResultSetItems']//li[contains(@class,'sresult')]");
		List<WebElement>tagedproducts=driver.findElementsByXPath("//span[contains(@title,'Buy it now')]");
		System.out.println(allproducts.size());
		System.out.println(tagedproducts.size());
		if(allproducts.containsAll(tagedproducts)){
			System.out.println("all the results shown in the page have the 'Buy it now' tag");
		}else{
			System.out.println("all the results shown in the page not have the 'Buy it now' tag");
	}
	 driver.quit();   
	}


    @When("^I enter a search item and select a specific Category$")
    public void i_enter_a_search_item_and_select_a_specific_Category() throws Throwable {
  
	     driver.findElementByXPath("//*[@id='gh-ac']").sendKeys("chair");
         driver.findElementByXPath("//*[@id='gh-btn']").click();
         driver.findElementByXPath("//*[@id='e1-12']/div[2]/div[6]/div[1]/a").click();
    }

    

    @Then("^I can verify that the results shown as per the the selected category$")
    public void i_can_verify_that_the_results_shown_as_per_the_the_selected_category() throws Throwable {
    	
    	JavascriptExecutor js = (JavascriptExecutor) driver;
		 js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		 driver.close();
    }


    @Then("^the results show more than one page$")
    public void the_results_show_more_than_one_page() throws Throwable {
    List<WebElement>PagesLinks=driver.findElementsByXPath("//*[contains(@class, 'pg')]");
    System.out.println(PagesLinks.size());
    }


    @Then("^the user can navigate through the pages to continue looking at the items$")
    public void the_user_can_navigate_through_the_pages_to_continue_looking_at_the_items() throws Throwable {
    	List<WebElement>PagesLinks=driver.findElementsByXPath("//*[contains(@class, 'pg')]");
    	for(int i=1;i<=PagesLinks.size();i++){
    		driver.findElementByXPath("//a[text()='"+i+"']").click();
    		JavascriptExecutor js = (JavascriptExecutor) driver;
   		 js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
    	}
    	driver.quit();
    }
    


}
