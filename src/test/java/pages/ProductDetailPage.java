package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class ProductDetailPage {
    private static WebDriver driver;

    @FindAll(@FindBy(xpath = "//*[contains(@class,'product-prices')]//span"))
    List<WebElement> prices;

    @FindBy(id = "group_1")
    WebElement sizeSelect;
    @FindBy(id = "quantity_wanted")
    WebElement quantityInput;

    @FindBy(css = "button.add-to-cart")
    WebElement addToCartBtn;

    @FindBy(className = "modal-content")
    WebElement popUp;



    public ProductDetailPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }
    public boolean checkDiscount(String discount){
       
        //jesli argument nie jest podany i prices.size =1 to znaczy ze nie ma rabatu
        if(discount.length() == 0){
            if(prices.size() == 1){
                return true;
            }
        } else{ //jesli argument discount jest podany a prices.size == 1 to znaczy ze nie ma rabatu
            if(prices.size() == 1){
                return false;
            } // jesli argument discount jest podany a lista prices.size > 1 sprawdzanie czy rabat sie zgadza.
            if(prices.size() > 1 ){
                double regularPrice =Double.parseDouble(prices.get(0).getText().replaceAll("[^0-9.]",""));
                double currentPrice =Double.parseDouble(prices.get(1).getText().replaceAll("[^0-9.]",""));
                double discountValue =Double.parseDouble(prices.get(2).getText().replaceAll("[^0-9.]",""));
                if(discountValue == Double.parseDouble(discount)){
                    return true;
                }

            }

        }
        return false;

    }

    public void choiseSize(String size) {
        Select dropSize = new Select(this.sizeSelect);
        dropSize.selectByVisibleText(size);
    }

    public void choiseQuantity(String quantity) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        this.quantityInput.click();
        this.quantityInput.clear();
        this.quantityInput.sendKeys(quantity);
    }

    public void addProductToCart() {
        addToCartBtn.click();
        WebDriverWait waitForPopUp = new WebDriverWait(driver,10);
        waitForPopUp.until(ExpectedConditions.presenceOfElementLocated(By.className("modal-content")));
        popUp.findElement(By.xpath("//*[@id='blockcart-modal']//div/div/a")).click();
    }
}
