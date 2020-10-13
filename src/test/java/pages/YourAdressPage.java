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

    @FindBy(css = "#notifications li")
    WebElement message;

    @FindAll(@FindBy(className = "address"))
    List<WebElement> adressList;

    public YourAdressPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    public String getAdressSaveMessage(){
       return this.message.getText();
    }

    public boolean isSaveAdress(String addedAlias) {
       for(WebElement s: this.adressList){
            if(s.findElement(By.tagName("h4")).getText().equals(addedAlias)){
                return true;
            }
        }
        return false;
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
