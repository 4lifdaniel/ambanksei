## Single Page Application

Single Page Applications (SPAs) are pervasive in our world today. In fact, many major mobile applications and websites are SPAs. SPAs are a great tool for making incredibly engaging and unique experiences for website users.

### Background

In the early days of the internet websites were just static HTML & CSS pages. As people became more creative and programming languages became more advanced, websites evolved to boast animations, JavaScript DOM interactions, and so on. Browser and servers also became more perfomant and capable. Frameworks and libraries for web development emerged allowing developers to more easily build complex applications. However, despite advancements in browser and server techonologies, load times were still a big problem.

According to Google Research, if a page takes more than or around `200 milliseconds` to load, it has a high impact on the business and sales.

A huge leap forward in the world of web development was the creation of Single Page Applications, or SPAs.

### What is a Single Page Application?

With a traditional `Multi-Page Application` every time you clicked something, a `new page gets loaded from the server`. A Single Page Application is exactly what it sounds like - `a application with just one page`. However, what may not be obvious is that very complex and feature-rich websites are just one page apps.

E.g: Netflix, Facebook Airbnb, Twitter, Gmail

How are these apps SPAs? Don't that have navigation menus and tons of pages?

In reality, these websites are in fact just one page that renders different components. This way, the browser will only reload the data which the user has requested, and not an entire new page.

### Single Page Applications vs. Multi-Page Applications

As discussed MPAs will render an entirely new page every time the client sends a request to the server. SPAs will only render specific pieces, or components of a page.

#### Advantages of Single Page Applications:

**Enhanced User Experience**: SPAs provide a smooth and responsive user experience by dynamically updating content without requiring full page reloads. This creates a more interactive and desktop-like feel for users.

**Improved Performance**: Since SPAs load the entire web application initially and subsequently update content dynamically, they can reduce the amount of data transferred between the client and the server. This can lead to faster load times and improved performance.

**Reduced Server Load**: SPAs can offload some of the server processing to the client's browser, reducing the server load and allowing it to focus on serving data rather than generating HTML.

**Code Reusability**: SPAs typically use APIs to communicate with the server, allowing the same backend to be shared across multiple platforms (web, mobile, desktop). This can lead to code reusability and easier maintenance.

**Native App-Like Experience**: SPAs can be wrapped in hybrid mobile applications using frameworks like React Native or Cordova, providing a native-like experience across different platforms.

#### Disadvantages of Single Page Applications:

**Increased Initial Load Time**: Since SPAs load the entire application upfront, the initial load time can be longer compared to traditional multi-page applications. This can be a concern, especially for users on slower internet connections or with limited device resources.

**SEO Challenges**: Search engine optimization (SEO) can be more challenging with SPAs because most search engine crawlers struggle with JavaScript-rendered content. Proper implementation of server-side rendering or using tools like prerendering is necessary to ensure search engine visibility.

**JavaScript Dependence**: SPAs rely heavily on JavaScript, which means users must have JavaScript enabled in their browsers. If JavaScript is disabled or not supported, the SPA may not work at all.

**Memory Consumption**: As SPAs keep the entire application in memory, memory consumption can be higher compared to traditional multi-page applications, especially if the application grows in size or complexity.

**Complexity of Implementation**: Building and maintaining SPAs can be more complex compared to traditional web applications. The development process may require expertise in front-end frameworks, APIs, state management, and handling asynchronous operations.

It's important to consider these advantages and disadvantages when deciding whether to use a Single Page Application approach for a particular project, as the suitability may vary depending on the specific requirements and constraints.

### SPA Reference:

- [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application)
- [SPA and MPA Pros and Cons](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)

## Intro to ReactJS

React was originally created by Facebook engineers in 2011 to improve the performance of its web app. Since its initial release as an open source project in 2013, React has become a dominant tool in the market for creating richly interactive web interfaces.

### Why React?

React is the most popular front-end library for building user interfaces in modern single page applications. React and React-based frameworks are widely used in the tech stacks of well-known companies.

React was initially motivated by the need to improve the performance of complex, dynamic, data-rich, web application interfaces. At the same time, the engineers at Facebook were also looking to make their web app more easily maintainable, scalable, extensible and testable. There are 3 key aspects of React that evolved to solve these challenges.

1. The Virtual DOM.
2. A component-based architecture.
3. The introduction of JSX.

Lets see in detailed about each one of the above key ascpects:

1. **Virtual DOM**: A virtual DOM is a lightweight JavaScript representation of the Document Object Model (DOM) used in web framework React. Updating the virtual DOM is comparatively faster than updating the actual DOM (via JavaScript).

#### What is the difference between DOM and Virtual DOM?

```
The main difference between DOM and Virtual DOM is that DOM is the actual tree structure that represents the web page, while Virtual DOM is an abstract representation of the DOM that is used by React to optimize the rendering process.
```

2. **Component-based architecture**: Components are a way to split the UI of your application into independent, reuseable pieces. As developers, this helps us reduce duplication in our code and it makes it easier for us to reason about each piece of our UI in isolation from the larger, more complex, overall application.

3. **The introduction of JSX**: JSX is a `JavaScript Extension Syntax` used in React to easily write HTML and JavaScript together. JSX makes it easier to write and add HTML in React. Strictly speaking, JSX isn't exclusively a React syntax, but it was built by the folks at Facebook and introduced with an early version of React. JSX is a syntax extension to JavaScript that allows us to write code that looks a lot like HTML inside of our JavaScript files.

### Create a react app

```bash
npx create-react-app react-intro
```

**npx**: npx is a `command-line utility` that comes bundled with Node.js. It a`llows you to run executables directly without the need to install them globally`. In this case, it is used to execute the `create-react-app` command.

**create-react-app**: `create-react-app` is a `command-line tool provided by Facebook to generate a new React application` with a pre-configured development environment. It sets up the necessary project structure, build configurations, and development server for you.

**react-intro**: `react-intro` is the `name of the directory` or folder that will be created for your new React application. You can choose any name you prefer for your project.

When you run the `npx create-react-app react-intro` command, it performs the following steps:

1. Checks if you have the `create-react-app` package installed globally. If not, it will download it temporarily.

2. Creates a new directory named `react-intro` (or any name you provided) in the current directory.

3. Sets up the initial project structure and installs the necessary dependencies.

4. Configures a development server for your React application.

5. Generates sample files and boilerplate code to get you started with a basic React application.

Once the command finishes executing, you can navigate into the newly created react-intro directory and start building your React application. It will have a basic setup and configuration, allowing you to write React components and develop your application without worrying about the initial setup complexities.

### ReactJS Reference:

- [React Github](https://github.com/facebook/react)
- [What is React](https://generalassembly.wistia.com/medias/lr8idjxtx8)
- [Virtual DOM](https://www.codecademy.com/article/react-virtual-dom)
- [React Component](https://generalassembly.wistia.com/medias/h64z7lp1ir)
- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [React Create App](https://beta.reactjs.org/learn/start-a-new-react-project)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related)
