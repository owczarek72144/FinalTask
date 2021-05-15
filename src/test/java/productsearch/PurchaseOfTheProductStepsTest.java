package productsearch;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/cucumber/feature/purchase-feature/purchase-of-the-product.feature",
        plugin = {"pretty","html:out"})


public class PurchaseOfTheProductStepsTest {
}
