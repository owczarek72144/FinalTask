package bddpagefactory;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/cucumber/feature/new-adress-feature/mystore-new-adress.feature",
        plugin = {"pretty","html:out"})

public class NewAdressStepsTest {
}
