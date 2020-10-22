package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class SearchResultsPage {
    private static WebDriver driver;


    @FindAll(@FindBy(xpath = "//*[@id='js-product-list']/div/article"))
    List<WebElement> productList;

    public SearchResultsPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }



    public void searchProductFromList(String product){
        for(WebElement s:productList){
            if(s.findElement(By.tagName("h2")).getText().toUpperCase().equals(product.toUpperCase())){
                s.click();
                break;
            }
        }
    }
}
