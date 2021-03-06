package org.cuccu.CucumberRunnerTag;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\java\\Runner.feature",glue="org.cuccu.CucumberRunnerTag",dryRun=false,monochrome=true,
plugin= {"pretty","html:target/cucumber-reports","junit:target/cucumber-reports/cucumber.xml"},tags= {"@FunctionalTest"iujumecfrcv})

public class TestRunner{

}
