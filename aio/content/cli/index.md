# CLI Overview and Command Reference

The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell.

## Install Angular CLI

Major versions of Angular CLI follow the supported major version of Angular, but minor versions are able to be separately released.

Install the Angular CLI using the `npm` package manager.

<code-example format="shell" header="npm install: install the Angular CLI" language="shell">

npm install -g &commat;angular/cli<aio-angular-dist-tag class="pln"></aio-angular-dist-tag>

</code-example>

For details about changes between versions, and information about updating from previous releases, see the [Releases][GithubAngularAngularCliReleases] on GitHub.

## Basic workflow

Invoke the tool on the command-line through the `ng` Angular CLI.
Online help is available on the command-line.
Enter the following command to list commands or options for a specific command with a short description; for example, [ng generate][AioCliGenerate].

<code-example format="shell" header="Open help or help for the generate Angular CLI command" language="shell">

ng help
ng generate --help

</code-example>

To create, build, and serve a new, basic Angular project on a development server, go to the parent directory of your new workspace and run the following commands.

<code-example format="shell" header="Create a new Angular project and start web server" language="shell">

ng new {name-of-project}
cd {name-of-project}
ng serve

</code-example>

<div class="alert is-helpful">

When you run the following Angular CLI command, Angular creates a new directory in the current working directory; the new directory is named `{name-of-project}`.

<code-example format="shell" header="ng new: create a new Angular project" language="shell">

ng new {name-of-project}

</code-example>

To be able to create files inside your new directory, verify you have sufficient rights to the current working directory before you run the Angular CLI command.

If the current working directory is not the right place for your project, run the following command to change to a more appropriate directory.

<code-example format="shell" header="cd: Change current directory" language="shell">

cd {path/to/other/directory}

</code-example>

</div>

1.  Run the [ng serve][AioCliServe] Angular CLI command to build an application and serve it locally.

    <code-example format="shell" header="ng serve: Build your application and start the web server" language="shell">

    ng serve

    </code-example>

    While the [ng serve][AioCliServe] Angular CLI command is active, the web server automatically rebuilds the application and reloads the page when you change any of the source files.

1.  In your browser, open `http://localhost:4200` to see the new application run.

## Workspaces and project files

The [ng new][AioCliNew] Angular CLI command creates an *Angular workspace* directory and generates a new application skeleton.
A workspace may contain multiple applications and libraries.
The initial application created by the [ng new][AioCliNew] Angular CLI command is at the top level of the workspace.
When you generate an additional application or library in a workspace, it goes into a `projects` subdirectory.

A newly generated application contains the source files for a root module, with a root component and template.
Each application has a `src` directory that contains the logic, data, and assets.

You are able to directly edit the generated files, or add to and modify the files using Angular CLI commands.
Use the [ng generate][AioCliGenerate] Angular CLI command to add new files for additional components and services, and code for new pipes, directives, and so on.
Angular CLI commands, such as [ng add][AioCliAdd] and [ng generate][AioCliGenerate], that create or operate on applications and libraries, must be run from within a workspace or project directory.

To learn more about workspaces and project files, see [Workspace and project file structure][AioGuideFileStructure].

### Workspace and project configuration

A single workspace configuration file, `angular.json`, is created at the top level of the workspace.
This is where you set per-project defaults for Angular CLI command options, and specify configurations to use when the Angular CLI builds a project for different targets.

The [ng config][AioCliConfig] Angular CLI command lets you set and retrieve configuration values from the command-line, or you are able to directly edit the `angular.json` file.

<div class="alert is-helpful">

**NOTE**: <br />
Option names in the configuration file must use [camelCase][AioGuideGlossaryCaseTypes], while option names supplied to commands must be dash-case.

</div>

To learn more about workspace and project configuration, see [Angular workspace configuration][AioGuideWorkspaceConfig].

## Angular CLI command-language syntax

Command syntax is shown as follows:

<code-example format="shell" header="ng: Angular CLI command syntax" hideCopy language="shell">

ng {commandNameOrAlias} {requiredArguments} [{optionalArguments}] [{options}]
   &bsol;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;/ &bsol;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;/ &bsol;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;/ &bsol;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;&lowbar;/
    &verbar;                    &verbar;                   &verbar;                     &verbar;

</code-example>

*   Most commands, and some options, have aliases.
    Aliases are shown in the syntax statement for each command.

*   Option names are prefixed with a double dash \(`--`\) characters.
    Option aliases are prefixed with a single dash \(`-`\) character.
    Arguments are not prefixed.
    For example:

    <code-example format="shell" header="ng build: build production application" language="shell">

    ng build {name-of-application} -c production

    </code-example>

*   Typically, the name of a generated artifact is specified as an argument to the command or specified with the `--name` option.

*   Argument and option names are specified in either [camelCase or dash-case][AioGuideGlossaryCaseTypes].
    `--myOptionName` is equivalent to `--my-option-name`.

### Boolean options

Boolean options have two forms.

| Forms              | Details |
|:---                |:---     |
| `--this-option`    | Sets the flag to `true`  |
| `--no-this-option` | Sets the flag to `false` |

If neither option is supplied, the flag remains in the default state.
The default state is listed in the reference documentation.

### Relative paths

Options that use files are specified as absolute paths, or as paths relative to the current working directory, which is generally either the workspace or project root.

### Schematics

The [ng generate][AioCliGenerate] and [ng add][AioCliAdd] Angular CLI commands take, as an argument, the artifact or library to be generated or added to the current project.
In addition to any general options, each artifact or library defines any associated options in a *schematic*.
Schematic options are supplied to the command in the same format as immediate command options.

<!-- links -->

[AioCliAdd]: cli/add "ng add | CLI | Angular"

[AioCliConfig]: cli/config "ng config | Angular"

[AioCliGenerate]: cli/generate "ng generate | CLI | Angular"

[AioCliNew]: cli/new "ng new | CLI | Angular"

[AioCliServe]: cli/serve "ng serve | CLI | Angular"

[AioGuideFileStructure]: guide/file-structure "Workspace and project file structure | Angular"

[AioGuideGlossaryCaseTypes]: guide/glossary#case-types "case types - Glossary | Angular"

[AioGuideWorkspaceConfig]: guide/workspace-config "Angular workspace configuration | Angular"

<!-- external links -->

[GithubAngularAngularCliReleases]: https://github.com/angular/angular-cli/releases "Releases | angular/angular-cli | GitHub"

<!-- end links -->

@reviewed 2022-04-18
