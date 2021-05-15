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
import org.openqa.selenium.chrome.ChromeOptions;
import pages.*;
import utils.OrderData;


import java.util.concurrent.TimeUnit;

public class PurchaseOfTheProductSteps {
    private WebDriver driver;
    private LoginPage loginPage;
    private YourAccountPage yourAccountPage;
    private SearchResultsPage searchResultsPage;
    private ProductDetailPage productDetailPage;
    private ShoppingCartPage shoppingCartPage;
    private OrderHistoryPage orderHistoryPage;
    private OrderData orderData;

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/drivers/chromedriver");
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
        yourAccountPage = new YourAccountPage(this.driver);
        searchResultsPage  = new SearchResultsPage(driver);
        productDetailPage = new ProductDetailPage(driver);
        shoppingCartPage = new ShoppingCartPage(driver);
        orderHistoryPage = new OrderHistoryPage(driver);


    }

    @After
    public void tearDown(){
        driver.close();
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
    @And("user check discount(.*)")
    public void userCheckDiscount(String discount){
        Assert.assertTrue("Nieprawidłowa wysokość rabatu",productDetailPage.checkDiscount(discount));
    }
    @And("user choise size (.*)")
    public void userChoiseSize(String size){
        productDetailPage.choiseSize(size);

    }

    @And("user will choose the quantity (.*)")
    public void userChoiseQuantity(String quantity){
        productDetailPage.choiseQuantity(quantity);

        Assert.assertTrue("Brak produktu",productDetailPage.checkAvailability());
    }

    @Then("user add product to cart")
    public void addProductToCart(){
        productDetailPage.addProductToCart();
    }

    @And("user go to checkout")
    public void userGoToCheckout(){
        shoppingCartPage.goToCheckout();
    }

    @And("user choise adress by alias (.*)")
    public void userChoiseAdress(String alias){
        shoppingCartPage.choiseAdress(alias);

    }

    @And("user choise shiping method (.*)")
    public void userChoiseShippingMethod(String method){
        shoppingCartPage.choiseShippingMethod(method);
    }

    @And("user choise payment option (.*)")
    public void userChoisePaymentOptionPaymentOption(String paymentOption) {
        shoppingCartPage.choisePaymentOpiton(paymentOption);
    }

    @Then("user order product")
    public void userOrderProduct(){
        shoppingCartPage.orderProduct();
    }
    @Then("take screenshot")
    public void userTakeScreenshot(){
        orderData = shoppingCartPage.getOrderData();
        shoppingCartPage.takeScrenshoot(driver,orderData);

    }

    @And("user go to order history")
    public void userGoToOrderHistory(){
        shoppingCartPage.goToYourAccountPage();
        yourAccountPage.goToOrderHistory();

    }
    @Then("user check order data and order status (.*)")
    public void userCheckOrderData(String status){
        Assert.assertTrue("Nieprawidłowy numer lub status zamówienia",orderHistoryPage.checkOrder(orderData,status));

    }


}
