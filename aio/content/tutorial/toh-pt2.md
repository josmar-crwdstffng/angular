# Display a selection list

In this page, you will expand the Tour of Heroes application to display a list of heroes, and allow users to select a hero and display the details of the hero.

<div class="alert is-helpful">

For the sample application that this page describes, see the <live-example></live-example>.

</div>

## Create mock heroes

you will need some heroes to display.

Eventually you will get them from a remote data server.
For now, you will create some *mock heroes* and pretend they came from the server.

Create a file called `mock-heroes.ts` in the `src/app/` folder.
Define a `HEROES` constant as an array of ten heroes and export it.
The file should look like this.

<code-example header="src/app/mock-heroes.ts" path="toh-pt2/src/app/mock-heroes.ts"></code-example>

## Displaying heroes

Open the `HeroesComponent` class file and import the mock `HEROES`.

<code-example header="src/app/heroes/heroes.component.ts (import HEROES)" path="toh-pt2/src/app/heroes/heroes.component.ts" region="import-heroes"></code-example>

In the same file \(`HeroesComponent` class\), define a component property called `heroes` to expose the `HEROES` array for binding.

<code-example header="src/app/heroes/heroes.component.ts" path="toh-pt2/src/app/heroes/heroes.component.ts" region="component"></code-example>

### List heroes with `*ngFor`

Open the `HeroesComponent` template file and make the following changes:

1.  Add an `<h2>` at the top.
1.  Below it add an HTML unordered list \(`<ul>`\) element.
1.  Add an `li` element within the `ul` element.
1.  Add a `button` element inside the `li` element that displays properties of a `hero` inside of `span` elements.
1.  Add CSS classes for styling \(you will shortly add the CSS styles\).

Make it look like this:

<code-example header="heroes.component.html (heroes template)" path="toh-pt2/src/app/heroes/heroes.component.1.html" region="list"></code-example>

That displays an error since the property 'hero' does not exist.
To have access to each individual hero and list them all, add an `*ngFor` to the `<li>` to iterate through the list of heroes:

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="li"></code-example>

The [`*ngFor`](guide/built-in-directives#ngFor) is the *repeater* directive in Angular.
It repeats the host element for each element in a list.

The syntax in this example is as follows:

| Syntax   | Details |
|:---      |:---     |
| `<li>`   | The host element.                                                                  |
| `heroes` | Holds the mock heroes list from the `HeroesComponent` class, the mock heroes list. |
| `hero`   | Holds the current hero object for each iteration through the list.                 |

<div class="alert is-important">

Do not forget the asterisk \(`*`\) character in front of `ngFor`.
It is a critical part of the syntax.

</div>

After the browser refreshes, the list of heroes appears.

<div class="callout is-helpful">

<header>Interactive elements</header>

**NOTE**: <br />
Inside the `<li>` element, we've wrapped the hero's details in a `<button>` element. Later on we make the hero clickable, and it is better for accessibility purposes to use natively interactive HTML elements (e.g. `<button>`) instead of adding event listeners to non-interactive ones (e.g. `<li>`).

For more details on accessibility, see [Accessibility in Angular](guide/accessibility).

</div>

<a id="styles"></a>

### Style the heroes

The heroes list should be attractive and should respond visually when users
hover over and select a hero from the list.

In the [first tutorial](tutorial/toh-pt0#app-wide-styles), you set the basic styles for the entire application in `styles.css`.
That stylesheet did not include styles for this list of heroes.

You could add more styles to `styles.css` and keep growing that stylesheet as you add components.

You may prefer instead to define private styles for a specific component and keep everything a component needs &mdash;the code, the HTML, and the CSS&mdash; together in one place.

This approach makes it easier to re-use the component somewhere else and deliver the intended appearance of the component even if the global styles are different.

You define private styles either inline in the `@Component.styles` array or as stylesheet file(s) identified in the `@Component.styleUrls` array.

When the CLI generated the `HeroesComponent`, it created an empty `heroes.component.css` stylesheet for the `HeroesComponent` and pointed to it in `@Component.styleUrls` like this.

<code-example header="src/app/heroes/heroes.component.ts (@Component)" path="toh-pt2/src/app/heroes/heroes.component.ts" region="metadata"></code-example>

Open the `heroes.component.css` file and paste in the private CSS styles for the `HeroesComponent`.
you will find them in the [final code review](#final-code-review) at the bottom of this guide.

<div class="alert is-important">

Styles and stylesheets identified in `@Component` metadata are scoped to that specific component.
The `heroes.component.css` styles apply only to the `HeroesComponent` and do not affect the outer HTML or the HTML in any other component.

</div>

## Viewing details

When the user clicks a hero in the list, the component should display the details of the selected hero at the bottom of the page.

In this section, you listen for the hero item click event and update the hero detail.

### Add a click event binding

Add a click event binding to the `<button>` in the `<li>` like this:

<code-example header="heroes.component.html (template excerpt)" path="toh-pt2/src/app/heroes/heroes.component.1.html" region="selectedHero-click"></code-example>

This is an example of the [event binding](guide/event-binding) syntax in Angular.

The parentheses around `click` tell Angular to listen for the `click` event of the `<button>` element.
When the user clicks in the `<button>`, Angular executes the `onSelect(hero)` expression.

In the next section, define an `onSelect()` method in `HeroesComponent` to display the hero that was defined in the `*ngFor` expression.

### Add the click event handler

Rename the `hero` property of the component to `selectedHero`, but do not assign it.
There is no *selected hero* when the application starts.

Add the following `onSelect()` method, which assigns the clicked hero from the template to the `selectedHero` of the component.

<code-example header="src/app/heroes/heroes.component.ts (onSelect)" path="toh-pt2/src/app/heroes/heroes.component.ts" region="on-select"></code-example>

### Add a details section

Currently, you have a list in the component template.
To click on a hero on the list and reveal details about that hero, you need a section for the details to render in the template.
Add the following to `heroes.component.html` beneath the list section:

<code-example header="heroes.component.html (selected hero details)" path="toh-pt2/src/app/heroes/heroes.component.html" region="selectedHero-details"></code-example>

The hero details should only be displayed when a hero is selected.
When a component is created initially, there is no selected hero, so you add the `*ngIf` directive to the `div` element that wraps the hero details, to instruct Angular to render the section only when the `selectedHero` property is actually defined.
The `selectedHero` property is actually defined after it is selected by choosing a hero.

<div class="alert is-important">

Do not forget the asterisk \(`*`\) character in front of `ngIf`.
It is a critical part of the syntax.

</div>

### Style the selected hero

To help identify the selected hero, you can use the `.selected` CSS class in the [styles you added earlier](#styles).
To apply the `.selected` class to the `<li>` when the user clicks it, use class binding.

<div class="lightbox">

<img alt="Selected hero with dark background and light text that differentiates it from unselected list items" src="generated/images/guide/toh/heroes-list-selected.png">

</div>

The [class binding](guide/attribute-binding#class-binding) in Angular can add and remove a CSS class conditionally.
Add `[class.some-css-class]="some-condition"` to the element you want to style.

Add the following `[class.selected]` binding to the `<button>` in the `HeroesComponent` template:

<code-example header="heroes.component.html (toggle the 'selected' CSS class)" path="toh-pt2/src/app/heroes/heroes.component.1.html" region="class-selected"></code-example>

When the current row hero is the same as the `selectedHero`, Angular adds the `selected` CSS class.
When the two heroes are different, Angular removes the class.

The finished `<li>` looks like this:

<code-example header="heroes.component.html (list item hero)" path="toh-pt2/src/app/heroes/heroes.component.html" region="li"></code-example>

<a id="final-code-review"></a>

## Final code review

Here are the code files discussed on this page, including the `HeroesComponent` styles.

<code-tabs>
    <code-pane header="src/app/mock-heroes.ts" path="toh-pt2/src/app/mock-heroes.ts"></code-pane>
    <code-pane header="src/app/heroes/heroes.component.ts" path="toh-pt2/src/app/heroes/heroes.component.ts"></code-pane>
    <code-pane header="src/app/heroes/heroes.component.html" path="toh-pt2/src/app/heroes/heroes.component.html"></code-pane>
    <code-pane header="src/app/heroes/heroes.component.css" path="toh-pt2/src/app/heroes/heroes.component.css"></code-pane>
</code-tabs>

## Summary

*   The Tour of Heroes application displays a list of heroes with a detail view
*   The user can select a hero and see details of that hero
*   You used `*ngFor` to display a list
*   You used `*ngIf` to conditionally include or exclude a block of HTML
*   You can toggle a CSS style class with a `class` binding.

    <code-example format="typescript" language="typescript">

    header="src/app/heroes/heroes.component.html (the template of the HeroesComponent)"

    </code-example>

@reviewed 2022-02-28
