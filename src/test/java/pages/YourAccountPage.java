package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class YourAccountPage {
    private static WebDriver driver;

    public YourAccountPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }
    @FindAll(@FindBy(xpath = "//*[@id='content']/div/div/a/span"))
    List<WebElement> yourAccountPageContent;

    @FindBy(name = "s")
    private WebElement searchForm;

    @FindBy(id = "history-link")
    private WebElement historyLink;


    public void goToYourAdressPage(){
        String infoText;
        String firstAdressText ="ADD FIRST ADDRESS";
        String adressesText = "ADDRESSES";
        for(WebElement s: yourAccountPageContent){
            infoText = s.getText().replaceAll("[^a-zA-Z ]", "");
            if(infoText.contains(firstAdressText)){
                s.click();
                break;
            }
            if(infoText.contains(adressesText)){
                s.click();
                break;
            }
        }
    }
    public void searchProduct(String product){
        this.searchForm.sendKeys(product);
        this.searchForm.submit();
    }
    public void goToOrderHistory(){
        historyLink.click();
    }

}
