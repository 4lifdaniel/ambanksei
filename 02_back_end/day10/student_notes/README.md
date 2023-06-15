![General Assembly](/ga_cog.png)

# Intro to the Internet

## Define what a server is

A server is just a computer that is always turned on and connected to the internet

## Diagram the request response cycle

![Request Response Cycle](https://cdn.zapier.com/storage/photos/9ec65c79de8ae54080c1b417540469a6.png)

There four different types of requests we can make which correspond to four basic ways we can manipulate data

- POST (Create data)
- GET (Read data)
- PUT/PATCH (Update data)
- DELETE (Destroy data)

## Describe the different parts of a URL

URL stands for Uniform Resource Locator, and it's just a string of text characters used by Web browsers, email clients and other software to format the contents of an internet request message.

Let's breakdown the contents of a URL:

```
    http://www.example.org:3000/hello/world/foo.html?foo=bar&baz=bat#footer
    \___/  \_____________/ \__/ \_________________/ \_____________/ \____/
  protocol  host/domain    port        path          query-string  hash/fragment
```

| Element          | About                                                                                                                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| protocol         | the most popular application protocol used on the world wide web is HTTP. Other familiar types of application protocols include FTP, SSH, GIT, FILE, HTTPS                                                          |
| host/domain name | the host or domain name is looked up in DNS to find the IP address of the host - the server that's providing the resource                                                                                           |
| port             | a server can have multiple applications listening on multiple ports. This allows users to access a different application on the same host                                                                           |
| path             | web servers can organize resources into what is effectively files in directories; the path indicates to the server which file from which directory the client wants                                                 |
| query-string     | the client can pass parameters to the server through the query-string (in a GET request method); the server can then use these to customize the response - such as values to filter a search result                 |
| hash/fragment    | this URL fragment is generally used by the client to identify some portion of the content in the response; interestingly, a broken hash will not break the whole link - it isn't the case for the previous elements |

## Explain what Node.js is and why it's useful

- Node is just a command line application that reads a JavaScript file and executes it within the context of the terminal.
  - until recently, JavaScript could only be executed within a browsers.
- Node allows JavaScript to become the first programming language that can be executed in both the browser and in a terminal application.
  - Makes it easier to find a developer who can build all aspects of a web application.
- Asynchronous
  - Uses event handlers (just like click, hover, etc) so you can tell an application to run code while waiting for other commands to finish executing.
    - previously, long running commands like updating a database would have to finish before the application could continue running.

## how the internet works

1. Request starts at local computer.
1. Goes to Router (can have multiple computers hooked up to it, forming a Local Area Network).
1. Goes to Modem.
1. Goes ISP (internet service provider).
1. ISP is connected to other ISPs and similar institutions.
   - we're in the actual net at this point.
1. If the ISP isn't connected to the Network containing the final destination.
   - it will ask the networks it is connected to if they are connected to the final destination's network.
   - this process continues, building up a path to the final destination.
     - each path to the final destination contains how many nodes it must visit to get to destination.
     - can determine shortest path to final destination.
1. Once connection to final destination is made, it goes to final destination's network (ISP).
1. From ISP it goes to the modem.
1. From the modem, it goes to the router.
1. From the router, it goes to the host computer.

### HTTP Status Codes

When requests and responsese are made 2 things are sent

- headers
- body

### HTTP Status Codes

When requests and responsese are made 2 things are sent

- headers
- body

#### What is the Resolution Process:

1. If computer can't find IP in cache, it asks The Resolving Name Server (configured in OS).
1. If RNS doesn't have info in memory, it will ask the Root Name Servers.
1. Root Name Server know where TLD (Top Level Domain) servers are (.com, .edu, .gov, etc).
1. TLDs know where Authoritative Name Servers are (example.com).
1. Authoritative Name Servers knows the IP address of final destination.
1. Resolving Name Server gives IP to the operating system.

#### How does the Authoritative Name Server know IP address?

1. When a domain is purchased:
   - the registrar (company that registers the domain name, e.g. godaddy) is told which Authoritative Name Severs to use.
   - The Authoritative Name Server is also told which IP address to use.
1. The registrar then notifies the organization responsible for TLD name servers (the registry).
1. The registry tells the TLD name servers (.com, .net, etc) which Authoritative Name Servers to use for that new domain.

# Intro to Express

## Describe what is a back end

So far, you've been working on the `front end`, you've been building things with HTML, CSS and JavaScript that appear in a browser.

Now we'll start learning about the back end and how that is tied to the front end.

A backend typically consists of a server (takes client requests and sends responses), an application (the logic of what to do with the request - get flight information/get directions to somewhere/ etc.) and a database (store, retrieve, update information/data etc.)

- Node.js is an application that lets us run JavaScript outside of the browser and in the terminal. We'll use node.js to build simple servers that will respond to browser requests.

- Built into Node.js is something called npm, which stands for `Node Package Manager`, which will manage Node Packages

- Node packages are libraries (or frameworks - see below) of code that provide useful functionality. Much like jQuery for the browser, node packages help us write sophisticated programs with a lot of useful functionality right out of the box. These packages are published at [www.npmjs.com](https://www.npmjs.com/)

These chunks of code fall into one of two categories

- Libraries:
  - A collection of functions, objects, and even other libraries that you call.
  - It has no idea what you're going to build.
- Frameworks:
  - Is essentially just a library.
  - Is also a pre-conceived skeleton for an application.
  - It knows what you're going to build and is somewhat opinionated about how you should do it.

We'll be working with one package throughout this unit called `express` - which calls itself a `framework AND unopinionated` ¯\_(ツ)\_/¯

[express](https://www.npmjs.com/package/express) is a `Fast, unopinionated, minimalist web framework for node`.

At first, we'll be running our express server in terminal and we'll interact with it in our browser. Our browser will send requests to our express app, and our express app will send responses back to our own browser.

## Reference:

- [HTTP Headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [DNS Explained](https://www.youtube.com/watch?v=72snZctFFtA)
- [How Packet Travels in Network](https://www.youtube.com/watch?v=xIuBmOufbls)
