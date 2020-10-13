package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    private static WebDriver driver;

    @FindBy(name = "email")
    private WebElement loginInput;

    @FindBy(name = "password")
    private WebElement passwordInput;

    @FindBy(id = "submit-login")
    private WebElement submitButton;

    @FindBy(className = "account")
    private WebElement userName;

    public LoginPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }
    public void loginAs(String email,String password){
        loginInput.click();
        loginInput.clear();
        loginInput.sendKeys(email);

        passwordInput.click();
        passwordInput.clear();
        passwordInput.sendKeys(password);

        submitButton.click();
    }
    public boolean isLogged(String userName){
        return this.userName.getText().equals(userName);

    }
}
