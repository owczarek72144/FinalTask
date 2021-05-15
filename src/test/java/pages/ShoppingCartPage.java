package pages;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.Screenshot;
import ru.yandex.qatools.ashot.shooting.ShootingStrategies;
import utils.OrderData;

import javax.imageio.ImageIO;
import java.io.File;
import java.io.IOException;
import java.util.List;

public class ShoppingCartPage {
    private WebDriver driver;
    @FindBy(css = "div.card.cart-summary > div a")
    WebElement checkout;

    @FindBy(id = "checkout-addresses-step")
    WebElement checkoutAdressStep;

    @FindAll(@FindBy(xpath = "//*[@id='delivery-addresses']//article"))
    //@FindAll(@FindBy(className ="address-item" ))
    List<WebElement> adressList;

    @FindBy(name = "confirm-addresses")
    WebElement adressContinueBtn;

    @FindAll(@FindBy(css = "div.row.delivery-option"))
    List<WebElement> deliveryOptions;
    //div.row.delivery-option

    @FindBy(name = "confirmDeliveryOption")
    WebElement confirmDeliveryContinueBtn;

    @FindAll(@FindBy(xpath = "//*[contains(@for,'payment-option')]"))
    List<WebElement> paymentOptions;

    @FindBy(id = "conditions_to_approve[terms-and-conditions]")
    WebElement terms;

    @FindBy(id = "payment-confirmation")
    WebElement paymentCorfirmationBtn;

    @FindBy(xpath = "//*[@id='order-items']/div/table/tbody/tr[3]/td[2]")
    WebElement orderTotal;

    @FindBy(xpath = "//*[@id='order-details']/ul/li[1]")
    WebElement orderReference;

    @FindBy(className = "account")
    WebElement accountPageLink;

    public ShoppingCartPage(WebDriver driver){
        PageFactory.initElements(driver,this);
    }

    public void takeScrenshoot(WebDriver webdriver,OrderData orderData){
        Screenshot screenshot=new AShot().shootingStrategy(ShootingStrategies.viewportPasting(1000)).takeScreenshot(webdriver);
        try {
            ImageIO.write(screenshot.getImage(),"PNG",new File(System.getProperty("user.dir") +"\\media\\"+orderData.getOrderReference()+ +System.currentTimeMillis()+".png"));
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

//        File srcFile = ((TakesScreenshot) webdriver).getScreenshotAs(OutputType.FILE);
//        try {
//            FileUtils.copyFile(srcFile,new File( System.getProperty("user.dir") +"\\media\\"+ +System.currentTimeMillis()+".png"));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
    }
    public void goToCheckout() {
        checkout.click();
    }

    public void choiseAdress(String alias) {
       // List<WebElement> adressList= driver.findElements(By.xpath("//*[@id='delivery-addresses']//article"));
        getCheckoutAdressStep().click();
        System.out.println(adressList.toString());
      for(WebElement s : adressList){
            if(s.getText().contains(alias)){
                s.click();
                adressContinueBtn.click();
                break;
            }
        }
    }

    private WebElement getCheckoutAdressStep() {
        return checkoutAdressStep;
    }

    public void choiseShippingMethod(String method) {
        for(WebElement s: deliveryOptions){
            if(s.getText().contains(method)){
                s.click();
                confirmDeliveryContinueBtn.click();
                break;
            }
        }
    }

    public void choisePaymentOpiton(String paymentOption) {
        for(WebElement s: paymentOptions){
            if(s.getText().contains(paymentOption)){
                s.click();
                break;
            }
        }
    }

    public void orderProduct() {
        terms.click();
        paymentCorfirmationBtn.click();
    }

    public OrderData getOrderData() {
        OrderData orderData = new OrderData(this.orderTotal.getText(),this.orderReference.getText().replaceAll("Order reference: ",""));
        return orderData;
    }

    public void goToYourAccountPage() {
        accountPageLink.click();
    }
}
