package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.OrderData;

import java.util.List;

public class OrderHistoryPage {
    private static WebDriver driver;

    public OrderHistoryPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(this.driver,this);
    }

    @FindAll(@FindBy(xpath = "//*[@id='content']/table/tbody/tr"))
    List<WebElement> orders;

    public boolean checkOrder(OrderData orderData,String status){
        String orderText;
        for(WebElement s: orders){
            orderText = s.getText();
            if(orderText.contains(orderData.getOrderReference()) && orderText.contains(orderData.getOrderTotal()) && orderText.contains(status)){
                return true;
            }
        }
        return false;

    }
}
