[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Client-side Routing

## Quick Recap

Let's revisit our comparison of MPAs and SPAs

<table align="center">
    <tr>
        <th wdith="600px" align="center"><img src="./assets/mpa_1.gif" /></th>
        <td>
            <p>Let’s say you visit a website and view a painting of a house and a tree. Traditional multi-page websites paint the entire picture for you on the server and send it over to your browser.</p>
        </td>
    </tr>
    <tr>
        <th wdith="600px" align="center"><img src="./assets/spa_1.gif" /></th>
        <td>
            <p>An SPA gives you the paint-by-numbers guide for the site, including the repeating guides you’ll likely be using, and then pipes in the right paint (data and content) to fill out the template.</p>
            <br/>
            <p>Either way, you see the same tree. But the speed of single page applications comes in when you request new content — like clicking on “next,” filtering results, opening an email, or in our case, asking to see a different tree.</p>
        </td>
    </tr>
    <tr>
        <th wdith="600px" align="center"><img src="./assets/mpa_2.gif" /></th>
        <td>
            <p>On a traditional website, your request for a new tree would cause the server to repaint the entire picture and send it back.</p>
        </td>
    </tr>
    <tr>
        <th wdith="600px" align="center"><img src="./assets/spa_2.gif" /></th>
        <td>
            <p>With a single page application, the server says, “Hey, I’ve got a new tree for you, but you’ve already got the house so just leave that the same.” Then, it sends the page updated instructions for a new tree and the paint to make it.</p>
            <br/>
            <p>By transferring the painting work (or page rendering) from the server to the client, the page can be dynamically rewritten instead of going through an entire reload. <strong>This makes things a whole lot faster.</strong></p>
        </td>
    </tr>
</table>

## Background

Up to this point, our React applications have been limited in size, allowing us to use basic control flow in our components' render methods to determine what gets rendered to our users. However, as our React applications grow in size and scope, we need an easier and more robust way of rendering different components.

Additionally, we will need the ability to set information in the url parameters to make it easier for users to identify where they are in the application.

Our MPAs already provided this utility via routing. However, we still want to build an SPA, so how can we have multiple routes and "pages" in just one page?

- **React Router** (client-side)
- **Express API** (server-side)

## Client-side Routing

Rather than have the routing handled by the client-server request-response cycle, we can use the DOM to handle routing right within the client's browser.

Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests to update the page with new information.

This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.

### Explore Sites with Client-side Routing

Take a look at the below sites. Despite having a navigation menu and unique links, notice how the site doesn't refresh when requesting a new page. These sites are SPAs with client-side routing.

- [caferati.me](https://caferati.me/)

- [kenjimmy.me](https://kenjimmy.me/)

- [joshwcomeau.com](https://www.joshwcomeau.com/)

### Pros & Cons of Client-Side Rendering

<table align="center">
    <tr>
        <th><h4>Pros</h4></th>
        <th><h4>Cons</h4></th>
    </tr>
    <tr>
        <td>Routing `between components is fast as the amount of data that renders is less`. The rest of the data is rendered by the DOM, and even when there's tons of HTML and CSS to render, the DOM handles that part in the blink of an eye.</td>
		
        <td>The `initialloading time is considerably large as all the routes, components, and HTML have to be loaded at once when the application first mounts`. The whole website or web app needs to be loaded on the first request.</td>
    </tr>
    <tr>
        <td>For `better user experience`, animations and transitions can be easily implemented when switching between different components.</td>
        <td>There is `unnecessary data download` time for unusable views that cannot be anticipated on the first render of the application.</td>
    </tr>
</table>

**Deciding whether to handle a certain functionality on the client side or the server side depends on several factors**.

Here are some considerations to help you make that decision:

**Security**: Security-sensitive operations, such as `authentication`, `authorization`, and `sensitive data processing`, are generally `better handled on the server side`. Server-side processing allows you to enforce security measures and prevent potential vulnerabilities that could arise from handling them on the client side.

**Performance**: Consider the impact on performance when deciding whether to handle functionality on the client or server side. `Client-side processing can provide a more responsive and interactive user experience, as it eliminates the need for frequent server requests`. However, certain operations may require server-side processing for better performance, such as complex computations, large-scale data manipulation, or resource-intensive tasks.

**Data sensitivity and privacy**: Evaluate the sensitivity of the data involved in a particular functionality. If you're `dealing with sensitive or private information, it's generally safer to handle it on the server side`, where you have more control over access, encryption, and data protection.

**Offline capability**: Consider whether `your application needs to function offline or in low-connectivity scenarios`. `Client-side processing allows for better offline support` since the logic and data can be cached and accessed locally. Server-side processing heavily relies on a continuous network connection.

**Development complexity and maintenance**: Think about the complexity of implementing and maintaining certain functionality on the client side versus the server side. Client-side processing may require additional effort to handle various browser compatibility issues, whereas server-side processing allows for more centralized control and easier maintenance.

**Compatibility with existing systems**: Consider the compatibility with any existing systems or APIs you need to integrate with. If you have pre-existing server-side systems, it may make sense to handle certain functionalities on the server side to leverage those systems effectively.

In practice, `a combination of client-side and server-side processing is often used to achieve the desired functionality and balance between performance, security, and user experience`. It's important to carefully analyze the requirements of your application and consider the trade-offs associated with client-side and server-side processing before making a decision.

## React Router App Structure

React Router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform.

Using React Router allows us to further segment & organize our app structure between Pages & Components

Let's get set up with a new app, a React bitcoin price checker! Here is a [live site](https://vigorous-bell-39e27b.netlify.app/) that demonstrates what we're going to build today. The data we'll be using for this app comes from the [Coindesk API](https://api.coindesk.com/v1/bpi/currentprice/usd.json).

Try swapping out `usd` with different currency abbreviation into the URL, such as `jpy` for Japanese Yen or `euro` for Euro.

The four main ones we're going to use today are:

```jsx
<Routes />
<Route />
<Link />
<Navigate />
```

```jsx
import { Routes, Route, Link } from "react-router-dom";
```

**Link** - a component for setting the URL and providing navigation between different components in our app without triggering a page refresh. It takes a
`to` property, which sets the URL to whatever path is defined within it. Link can also be used inside of any component that is connected to a `Route`.

```js
// the link component produces an a element
<Link to="/">Root</Link>
<Link to="/example">Example</Link>
```

**Routes** - a component that allows us to add `Route` components to our app. All `Route` components must be nested within a `Routes` component. Automatically picks the `Route` that best matches the current URL.

**Route** - a component that renders a specified component (using the `element` prop) based on the current url (`path`) we're at. `path` should probably match a `<Link to="">` defined somewhere.

```js
// routes render the specified component we pass as the element prop.
<Routes>
  <Route path="/" element={<Component />} />
  <Route path="/example" element={<Example />} />
</Routes>
```

In each `<Route>` component, the `element` prop is used to specify the component that should be rendered when the path is matched.

**Navigate** - a component that allows us to recirect a user to different path.

```jsx
<Route path="/currency" element={<Navigate to="/currencies" />} />
```
