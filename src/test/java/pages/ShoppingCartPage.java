package pages;

import cucumber.api.java.en.And;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ShoppingCartPage {
    private WebDriver driver;
    @FindBy(css = "div.card.cart-summary > div a")
    WebElement checkout;

    public ShoppingCartPage(WebDriver driver){
        PageFactory.initElements(driver,this);
    }

    public void goToCheckout() {
        checkout.click();
    }
}
