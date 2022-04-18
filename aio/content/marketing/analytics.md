# Usage Metrics Gathering

You are able to help the Angular Team to prioritize features and improvements by permitting the Angular team to send command-line command usage statistics to Google.
The Angular Team does not collect usage statistics unless you explicitly choose to join during the Angular CLI installation or upgrade.

## What is collected?

Usage analytics include the commands and selected flags for each execution.
Usage analytics may include the following information:

*   Your operating system \(macOS, Linux distribution, Windows\) and its version
*   Number of CPUs, amount of RAM
*   Node and Angular CLI version \(local version only\)
*   How long each command took to initialize and run
*   Command name that was run
*   For Schematics commands \(add, generate, new and update\), a list of selected flags
*   For build commands \(build, serve\), the number and size of bundles \(initial and lazy\), compilation units, the time it took to build and rebuild, and basic Angular-specific API usage
*   Error code of exceptions and crash data. No stack trace is collected

Only Angular owned and developed schematics and builders are reported.
Third-party schematics and builders do not send data to the Angular Team.

## Opting in

When you install the Angular CLI or upgrade an existing version, you are prompted to allow global collection of usage statistics.
If you say no or skip the prompt, no data is collected.

Starting with version 8, the `ng analytics` Angular CLI command was added.
You may change your decision at any time using the `ng analytics` Angular CLI command.

### Disallow usage analytics

To disallow usage analytics, run the following Angular CLI command.

<code-example format="shell" header="ng analytics: turn off" language="shell">

&num; Disallow all usage analytics.
ng analytics off

</code-example>

### Allow usage analytics

To allow usage analytics, run the following Angular CLI command.

<code-example format="shell" header="ng analytics: turn on" language="shell">

&num; Allow all usage analytics.
ng analytics on

</code-example>

### Prompt user

To prompt the user again about usage analytics, run the following Angular CLI command.

<code-example format="shell" header="ng analytics: send prompt to user" language="shell">

&num; Prompt for all usage analytics.
ng analytics prompt

</code-example>

@reviewed 2022-04-18
