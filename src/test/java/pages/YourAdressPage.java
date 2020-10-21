package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class YourAdressPage {
    private static WebDriver driver;

    @FindAll(@FindBy(css = "#notifications li"))
    List<WebElement> message;

    @FindAll(@FindBy(className = "address"))
    private List<WebElement> adressList;
    @FindBy(xpath = "//*[@data-link-action='add-address']")
    private WebElement createAdres;

    public YourAdressPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    public String getAdressSaveMessage(){
        if(this.message.size() > 0) {
            return this.message.get(0).getText();
        } else {
            return "";
        }
    }

    public boolean isSaveAdress(String adressAlias) {
       for(WebElement s: this.adressList){
            if(s.findElement(By.tagName("h4")).getText().equals(adressAlias)){
                return true;
            }
        }
        return false;
    }
    public boolean isAdressExists(){
        if(adressList.size() > 0){
            return true;
        } else{
            return false;
        }
    }
    public void goToNewAdressPage(){
        createAdres.click();
    }
    public void deleteAdress(String addedAlias) {
        for(WebElement s: this.adressList){
            if(s.findElement(By.tagName("h4")).getText().equals(addedAlias)){
                List<WebElement> elements = s.findElements(By.tagName("a"));
                for(WebElement e : elements){
                    if(e.getText().contains("Delete")){
                        e.click();
                    }
                }

            }

        }
    }
}
