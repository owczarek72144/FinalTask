package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.Random;

public class NewAdressPage {
    private static WebDriver driver;

    @FindBy(name = "alias")
    WebElement aliasInput;

    @FindBy(name ="company")
    WebElement companyInput;

    @FindBy(name = "vat_number")
    WebElement vatNumberInput;

    @FindBy(name = "address1")
    WebElement adressInput;

    @FindBy(name = "address2")
    WebElement adressComplementInput;

    @FindBy(name = "city")
    WebElement cityImput;
    @FindBy(name = "postcode")
    WebElement postcodeInput;

    @FindBy(name = "id_country")
    WebElement contrySelect;

    @FindBy(name = "phone")
    WebElement phoneImput;

    @FindBy(name = "submitAddress")
    WebElement submitBtn;


    public NewAdressPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }
    public void fillNewAdressForm(String alias,String adress,String city,
                                  String postcode,String country,String phone){

        this.aliasInput.click();
        this.aliasInput.clear();
        this.aliasInput.sendKeys(alias);

        this.adressInput.click();
        this.adressInput.clear();
        this.adressInput.sendKeys(adress);


        this.cityImput.click();
        this.cityImput.clear();
        this.cityImput.sendKeys(city);

        this.postcodeInput.click();
        this.postcodeInput.clear();
        this.postcodeInput.sendKeys(postcode);

        Select dropCountry = new Select(this.contrySelect);
        dropCountry.selectByVisibleText(country);

        this.phoneImput.click();
        this.phoneImput.clear();
        this.phoneImput.sendKeys(phone);



    }

    public void saveAdress() {
        this.submitBtn.submit();
    }
}
