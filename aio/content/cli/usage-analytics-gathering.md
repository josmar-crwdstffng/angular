# Gathering and Viewing Usage Analytics

A user may choose to share Angular CLI usage data with [Google Analytics][GoogleSupportAnalyticsAnswer9306384]
Use the `ng analytics` Angular CLI command to [enable usage analytics][AioAnalyticsAllowUsageAnalytics].
The data is also shared with the Angular team, and used to improve the Angular CLI.

The gathering of Angular CLI analytics data is turned off by default, and must be allowed at the project level by each individual user.
You are not able to turn on the option at the project level for all users.

Data gathered is displayed on the Google Analytics site, but is not automatically visible on the Analytics site for your organization.
As an administrator for an Angular development group, you configure your instance of Angular CLI to display the analytics data of usage of the Angular CLI for your team.
This configuration option is separate from other usage analytics that your users may share with Google.

## Enable access to Angular CLI usage data

To configure access to the Angular CLI usage data for a user, use the `ng config` Angular CLI command to add a key to your global [`angular.json` workspace configuration file][AioGuideWorkspaceConfig].
The key goes under `cli.analyticsSharing` at the top level of the file, outside the `projects` sections.
The value of the key is the tracking ID assigned to your organization by Google Analytics.
<!--This ID is a string that looks like `UA-123456-12`.-->

Use a descriptive string as the key value, or be assigned a random key when you run the Angular CLI command.

<code-example format="shell" header="ng config: add configuration key" language="shell">

ng config --global cli.analyticsSharing.{nameOfConfigurationKey} {google-analytics-tracking-id}

</code-example>

To turn off the feature, run the following Angular CLI command.

<code-example format="shell" header="ng config: remove configuration key" language="shell">

ng config --global cli.analyticsSharing undefined

</code-example>

## Per user tracking

Add a custom user ID to the global configuration in order to identify unique usage of commands and flags.
If the user allows Angular CLI analytics for an user-owned project, your analytics view tracks and labels the usage associated with that user.

<code-example format="shell" header="ng config: add custom user ID" language="shell">

ng config --global cli.analyticsSharing.uuid {custom_user_id}

</code-example>

To generate a new random user identifier, run the following Angular CLI command.

<code-example format="shell" header="ng config: add random custom user ID" language="shell">

ng config --global cli.analyticsSharing.uuid ""

</code-example>

<!-- links -->

[AioAnalyticsAllowUsageAnalytics]: analytics#allow-usage-analytics "Allow usage analytics - Usage Metrics Gathering | Angular"

[AioGuideWorkspaceConfig]: guide/workspace-config "Angular workspace configuration | Angular"

<!-- external links -->

[GoogleSupportAnalyticsAnswer9306384]: https://support.google.com/analytics/answer/9306384 "Get started with Analytics | Analytics Help | Google Help"

<!-- end links -->

@reviewed 2022-04-18
