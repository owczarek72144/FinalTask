package productsearch;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.bytebuddy.dynamic.ClassFileLocator;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pages.LoginPage;
import pages.SearchResultsPage;
import pages.YourAccountPage;


import java.util.concurrent.TimeUnit;

public class PurchaseOfTheProductSteps {
    private WebDriver driver;
    private LoginPage loginPage;
    private YourAccountPage yourAccountPage;
    private SearchResultsPage searchResultsPage;

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get("https://prod-kurs.coderslab.pl/index.php");
        loginPage = new LoginPage(this.driver);
        yourAccountPage = new YourAccountPage(this.driver);
        searchResultsPage  = new SearchResultsPage(driver);

    }

    @After
    public void tearDown(){
        //driver.close();
    }
    @Given("user open browser with my store login page")
    public void openMystorePage() {
        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=authentication&back=my-account");

    }
    @When("user is login to my store with (.*),(.*)")
    public void userLoginToMyStore(String email, String password){


        loginPage.loginAs(email,password);
    }
    @Then("user is loged in with user name (.*)")
    public void userIsLogedInWith(String userName){
        Assert.assertTrue("User name incorrect",loginPage.isLogged(userName));
    }

    @And("^user search product (.*)$")
    public void userSearchProduct(String product) {
        this.yourAccountPage.searchProduct(product);
        this.searchResultsPage.searchProductFromList(product);
    }

}
