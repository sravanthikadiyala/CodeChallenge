package ebay.qa.test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(
plugin = {"json:build/cucumber.json"},
features = {"features"},
glue= {"ebay.qa.testautomation"},
monochrome = true,
//strict = true,
//dryRun = true,
tags = {"@001,@002,@003"}
)

public class TestRunner {
	
}
