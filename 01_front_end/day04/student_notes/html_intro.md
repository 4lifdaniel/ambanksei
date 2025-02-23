# Intro to HTML

| Learning Objectives - SWBAT: |
|---|
| Build a Basic HTML Web Page From Scratch |
| Understand the Syntax of HTML |
| Assign Attributes to Elements |
| Correctly Indent and Nest HTML |
| Identify the Purpose of HTML5 Semantic Elements |

## Road Map
1. Setup
2. HTML in Context
3. Essential HTML5 Boilerplate
4. HTML Fundamentals
5. HTML Nesting
6. Malformed HTML
7. Semantic HTML
8. Essential Questions

## 1. Setup

Open VS Code and create a new file called `index.html`

## 2. HTML in Context

### The 3 fundamental client-side technologies of a web app:

<img src="https://i.imgur.com/V6RS1AE.png">

##### HTML (Hypertext Markup Language)
- Purpose: Content and overall Structure of a web page
- Current Version: HTML5
- Standards Body: [World Wide Web Consortium (W3C)](https://www.w3.org/)

##### CSS (Cascading Style Sheets)
- Purpose: Styling & Layout of a web page
- Current Version: CSS3, with new "modules" still being added
- Standards Body: [CSS Working Group of the W3C](https://www.w3.org/Style/CSS/)

##### JavaScript (ECMAScript)
- Purpose: Behavior of a web page
- Current Versions: [Best shown here](https://en.wikipedia.org/wiki/ECMAScript) with [browser compliance status here](http://kangax.github.io/compat-table/es2016plus/)
- Standards Body: [ECMA International - TC39 Task Group](http://ecma-international.org/memento/tc39.htm)

## 3. Essential HTML5 Boilerplate

Most websites and applications have a default HTML file named **index.html**.

**Boilerplate** is the markup that would exist in every web page, i.e., the starting point.


Now that the we have an empty page, we can leverage a tool included in VS Code, [Emmet](https://docs.emmet.io/), to generate our boilerplate...

Type `!` then `[tab]` - voila! Windows: `!` and `Enter`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```
## 4. HTML Fundamentals

### HTML Documents

HTML Documents consist of **elements** that define the structure and content of a web page.

The HTML specification does not specify how elements and their content should be displayed, instead, it's left up to the specific browsers on how to display a certain type of element. For example, some browsers may display an `<h1>` element with a different font size or varying amounts of padding.

The W3C specification recommends that we use lowercase when typing the tag & attribute names.
	
### Elements

An **Element** consists of a *Tag* and its contents (if any), which may include other elements.
  
Let's add the "largest heading" element, `<h1>`, to the page:
```html
<body>
  <h1>To-Do List</h1>
</body>
```
> All of the page's content is added between the `<body>` tags.

Most elements have an opening and closing tag so that we can include nested content within them like the<br>`<h1>...</h1>`<br>we just added.

Some elements, by design, do not have any nested elements or content - these elements are known as [empty elements](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element) and they do not have closing tags.<br>Examples include the `<img>` and `<br>` elements

Let's add an `<input>`, also an empty element, to the page:
```html
<body>
  <h1>To-Do List</h1>
  <input>
</body>
```
> Prior to HTML5, empty tags typically had a slash before the last angle bracket like this `<input />`, however, since HTML5, it is preferable to omit the slash.

Some elements are considered "valid" only when nested within certain parent elements.  For example, a table cell, `<td>` element, would be pointless unless nested inside of a `<tr>` row element.

> Note: Unlike with JavaScript, our browsers will not complain if we make mistakes in HTML or CSS. It just transparently does its best to correct our mistakes.
	
Elements are typically classified as either [block](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) or [inline](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) elements:
  - **Block** elements occupy the entire horizontal space of their parent, i.e., they don't allow other elements to sit next to them on the same line (unless they are styled to do so).

      Examples: `<div>`, `<h1>`, `<p>`, `<section>`
      
  - **Inline** elements only occupy the space required to contain their content and happily sit side-by-side with other inline elements.

      Examples: `<span>`, `<input>`, `<img>`, `<button>`
      
      > Note: Inline elements cannot have their height and width set in CSS unless they have their `display` CSS property set to `inline-block`, i.e. `display: inline-block;`

      Let's wrap the **To-Do** text with a `<span>` which would allow us to target that text separately for styling purposes:
      ```html
      <body>
        <h1><span>To-Do</span> List</h1>
        <input>
      </body>
      ```

### Attributes

Elements may contain **attributes** that provide additional information about an element.

Attributes are placed within the **opening** tag and are typically `name="value"` pairs without space between them.
> Always use double-quotes in HTML.

Some attributes do not have values assigned to them - these are called [boolean attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#boolean_attributes).

Examples: `required`, `checked`, `selected`, `disabled`

The most common attribute is `class` used to assign CSS classes to elements.

The `id` attribute is used to more easily target a specific element (or its contents) for styling or for access by JavaScript.  The value of an `id` attribute should be unique in the document. However, there is no need to use the `id` attribute in most cases because it's possible to target elements in many other ways using CSS selectors as you will soon see.

Let's add a `<section>` element to the page that includes an `id`:
```html
<body>
  <h1><span>To-Do</span> List</h1>
  <input>
  <section id="todos-container">
    <!-- To-Dos below -->
  </section>
</body>
```
Note the syntax of `<!--  -->` for adding comments to HTML which can span multiple lines too! Don't forget that our code editors will automatically comment line(s) of code for us by pressing `command + /` or `ctrl + /` (Windows).

### Whitespace

Multiple spaces created using the `spacebar`, `tab` and `return` keys are rendered as a single space character between elements and text "words".

You can create extra space using CSS or by using the `&nbsp;` (non-breaking space) [HTML Entity](https://developer.mozilla.org/en-US/docs/Glossary/Entity).

## 5. HTML Nesting

Just like with JavaScript, the proper indentation of nested HTML is important for readability and to help prevent errors:

<img src="https://i.imgur.com/M3BC6nl.png">

> The choice between using 2-space or 4-space indentation is up to you (or your employers).

When an element contains another element, the contained element is considered to be *nested* inside the outer element.

Although it's a best practice to indent nested elements, the `<head>`, and `<body>` tags are rarely indented despite being children of the `<html>` element because it saves what is considered to be an unnecessary level of indentation.

### Describing Nested Relationships:

- **Descendant** / **Ancestor**<br>
An element is considered a *descendant* if it is nested anywhere, regardless of level, within its *ancestor*.

- **Child**/ **Parent**<br>An element is considered a *child* if it is a **direct** descendant of its *parent*.

- **Siblings**<br>Two or more elements are considered *siblings* if they have the same *parent*.

## 6. Malformed HTML

The browser won't complain if we improperly structure the HTML - it just won't necessarily display what you are expecting it to.

One easy mistake to make is to "overlap" tags instead of nesting them.  Here's an example of malformed HTML:

```HTML
<p>This is <strong>important text</p></strong>
```

The above HTML is malformed because the `<strong>` element is intended to be a child of the `<p>` tag, however, the closing `</strong>` is outside of the closing `</p>` tag. 

Errors in complex HTML can be hard to find so it's not uncommon for Developers to use other tools to help them find errors. Here is a link to a website that finds errors in HTML that you paste in:

[http://www.dirtymarkup.com/](http://www.dirtymarkup.com/)

## 7. Semantic HTML

Prior to HTML5, we had to use block elements, such as `<div>` elements, in numerous scenarios.

Semantic HTML refers to the use of HTML elements that convey meaning and structure to both the browser and developers. By using semantic elements, you can improve the accessibility, maintainability, and search engine optimization (SEO) of your web pages.

But now we use [Semantic Elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements) that convey the **purpose** of their content instead:

<img src="https://i.imgur.com/2jxmD28.png">

### Benefits for the Developer:

Semantic HTML makes the developer's intentions more clear.  

For example, when we see a `<nav>` element, we know that it's going to contain navigation-related markup, whereas, we'd have to look closely at a generic `<div>` to realize it's being used for the same purpose.

### Benefits for the User:

Semantic HTML improves accessibility for the vision impaired because screen readers can do their job better.

The use of semantic HTML can result in more accurate web searches via better [SEO (search engine optimization)](https://developers.google.com/search/docs/beginner/seo-starter-guide).

### Common Semantic Elements:

Listed below are some of the more common semantic HTML tags...

#### 👉 YOU DO: Click on the semantic elements of your choice to research their purpose (3 mins)

- [`<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)
- [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
- [`<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
- [`<aside>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)
- [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
- [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
- [`<nav>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)

