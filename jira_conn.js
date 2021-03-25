var JiraClient = require("jira-connector");
 
var jira = new JiraClient({
  host: "enterprisedb.atlassian.net",
  basic_auth: {
    email: "gunjan.kumar@enterprisedb.com",
    api_token: "n4F11EkcqRv0wOzTogK66457"
  }
});

jira.issue.getIssue(
  {
    issueKey: "NX-2301" }, function(error, issue) {
    console.log(issue.fields.summary);
var data = issue.fields.summary;
console.log (data);
  }
);
