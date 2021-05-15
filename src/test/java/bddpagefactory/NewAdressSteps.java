package bddpagefactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import pages.LoginPage;
import pages.NewAdressPage;
import pages.YourAccountPage;
import pages.YourAdressPage;

import java.util.Random;
import java.util.concurrent.TimeUnit;

public class NewAdressSteps {
    private LoginPage loginPage;
    private NewAdressPage newAdressPage;
    private YourAccountPage yourAccountPage;
    private YourAdressPage yourAdressPage;
    private WebDriver driver;
    private String addedAlias;

    private String generateAlias(String textAlias){
        String alias = textAlias;
        Random random = new Random();
        alias += String.valueOf(random.nextInt(20000));
        return alias;
    }


    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/drivers/chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless"); //for headless mode
        options.addArguments("--window-size=800,600");//The invisible browser window is only 800x600 in size
        options.addArguments("start-maximized"); // open Browser in maximized mode
        options.addArguments("disable-infobars"); // disabling infobars
        options.addArguments("--disable-extensions"); // disabling extensions
        options.addArguments("--disable-gpu"); // applicable to windows os only
        options.addArguments("--disable-dev-shm-usage"); // overcome limited resource problems
        options.addArguments("--no-sandbox");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get("https://prod-kurs.coderslab.pl/index.php");
        loginPage = new LoginPage(this.driver);
        newAdressPage = new NewAdressPage(this.driver);
        yourAdressPage = new YourAdressPage(this.driver);
        yourAccountPage  = new YourAccountPage(this.driver);

    }

    @After
    public void tearDown(){
        driver.close();
    }
    @Given("user open browser with my store login page")
    public void openMystorePage() {
        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=authentication&back=my-account");

    }
    @When ("user is login to my store with (.*),(.*)")
    public void userLoginToMyStore(String email, String password){


        loginPage.loginAs(email,password);
    }
    @Then("user is loged in with user name (.*)")
    public void userIsLogedInWith(String userName){
        Assert.assertTrue("User name incorrect",loginPage.isLogged(userName));
    }
    @And("user go to the your adress page")
    public void goToTheYourAdressPage(){
        yourAccountPage.goToYourAdressPage();
        if(yourAdressPage.isAdressExists() == true){
            yourAdressPage.goToNewAdressPage();
        }
    }

  @When("user fill (.*),(.*),(.*),(.*),(.*),(.*)")
    public void userFillNewAdressForm(String alias,String adress,String city,
                                      String postcode,String country,String phone){
        this.addedAlias = generateAlias(alias);

        newAdressPage.fillNewAdressForm(addedAlias,adress,city,postcode,country,phone);
    }
    @And ("user save adress")
    public void userSaveAdress(){
        newAdressPage.saveAdress();
    }
    @Then("succes message displayed (.*)")
    public void successMessageDisplayed(String message){
        Assert.assertEquals(message,yourAdressPage.getAdressSaveMessage());
    }
    @And("user will check saved adresss")
    public void chceckSavedAdress(){
        Assert.assertTrue("Adress not saved",yourAdressPage.isSaveAdress(this.addedAlias));
    }
    @And("user is on the Your addresses page")
    public void userOnTheYourAdressesPage(){
        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=addresses");
    }

    @And("user choise added adress and delete it")
    public void userChoiseAdedAdressAndDelete() {
        yourAdressPage.deleteAdress(this.addedAlias);

    }

    @And("^user will check deleted adresss$")
    public void userWillCheckDeletedAdresss() {
        Assert.assertFalse("Adress not deleted",yourAdressPage.isSaveAdress(this.addedAlias));
    }
}