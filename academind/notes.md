TODO: Read the article about how the web works: https://academind.com/tutorials/how-the-web-works 

# SECTION 1: Introduction

## 2. What is JavaScript?

- JavaScript is a dynamic, weakly typed programming language which is compiled at runtime. It can be executed as part of a webpage in a browser or directly on any machine (“host environment”)
- JS helps to make the response(HTMl) monre 'reactive'

Javascript:

- It is a dynamic, weakly-typed programming language;
- Interpreted, "on the fly" compiled language;
- "Hosted language": rungs in different envirorments (e.g. in browser);
- Most prominet use-case: Run code in browser (on a webpage);

## 5. How JavaScript Is Executed

- To my code works and then the effects on webpage be executed, there has to be a JavaScritp Engine between them, it means between My code and the Effects.
  1. The JavaScript Engine is built-into the Browser and in chrome for example it is V8.
  2. The V8 at first parse the code (analize it), Compile to Machine Code (so that it can be faster to execute) then Execute Machine code. All of that on a single thread (de uma vez só / num único fio)

## 6. Dynamic vs Weakly Typed Languages

- Dynamic means that it is parsed and interpreted and compiled at runtime and that therefore it is able to do certain things that other programming languages are not allowed to do.
- Weakly typed Programming Language: Data types are assumed automacically. In short, I don't have to define the type of data. So it can change!

## 7. JavaScript Executes In A Hosted Environment

- Js can run in a Browser-side and 'other' (e.g. Server-side)

  - Browser-side:

    - Javascript was invented to create more dynamic website by executing in the browser!
    - It can manipulate the HTML code, CSS, send bg Http requests and much more
    - It CAN NOT access the local filesystem, interact with operating system etc.

  - Other
    - Google's js engine (v8) was extracted to run js anywhere (called "Node.js")
    - Node.js can be executed on any machine and is therefore often used to build web backends (server-side js)
    - Node.js CAN access the local filesystem, interact with the operating system etc. It CAN NOT manipulate HTML or CSS.

## 8. Course Outline - What's In This Course?

    1) Core Basics
        - Geeting Started
        - Language Basics
        - Efficient Development & Debugging
        - Control Structures (if, loops, ..)
        - Behind the scenes of JS
        - A Closer Look at Function DOM Basics
        - Arrays & Iterables
        - Objects

    2) Building a Strong Foundation
        - Classes & OPP
        - Constructor Functions & Prototypes
        - More about DOM & Browser APIs
        - Events
        - Functions Deep Dive
        - More about Numbers & Strings
        - Asynchronous Code
        - Background Htto (Ajax)

    3) Advanced Concepsts
        - Third Party Library
        - JS Modules
        - Tooling (Webpack, Babel)
        - Working with Broser Storage
        - Browser Support
        - JS Frameworks
        - Meta-programming
        - NodeJs introduction
        - Security
        - Deployment
        - Performance Optimizations & Memory Leaks

## 9. How To Get The Most Out Of This Course

    - Watch the Videos (At my speed)
    - Code Along (Pause and Rewind)
    - Practice (Assignments, Practice Projects, Quizzes)
    - Debug and Serach (Use attached Code, Google, Udemy Search)
    - Ask and Answear (Ask in Q&A section, but also help others!)

## 11. JavaScript vs Java

    - Totally independent programming languages with different syntax and principles
        * JAVA: Object-orientend strongly types
        * JS: Flexible, wakly types

    - Javascript was name Javascript to "sound cool"

    - JS does NOT run in the browser, JavaScript does


    - Which company build Javascript?
        JavaScript is a client scripting language that is used for creating web pages. It is a standalone language developed in Netscape.

- Client-sde (Browser)

  - it is the origin of JS
  - Different broswer vendors provide their own JS executation engines (e.g.g V8)
  - Allows interaction with web page and browser APIs (e.g. get user location)

- Server-side (NodeJs)

  - Why not use JS outside of the browser? Allows for code and knowledge reusage!
  - Extracted V8 engine to run JS anywhere
  - Special non-browser APIs (e.g. to work with file system, incoming Http requests)

- Obs: Syntax, concepts, core features etc, are exactly the same!

## 12. A Brief History Of JavaScript

    1995 - Nescpate introduces "Livescript" / "Javascript"

    1996 - Microsoft releases its own version for IE

    Late 1996 - Javascript submitted to ECMA International Start standardization

    1997 : 2005 - Standardization efforts, Microsoft didn' really join and support the standardized JS version though

    2006 : 2011 - Huge progress in JavaScript ecosystem, Microsoft eventually joined forces

    ECMA = European Computer Manufactures Association (The organization witch will stand resposible for standardizing javascript)

- Important:

* ECMA script has is own langauge "ECMAScript language". It isn't directly used but broser vendors (Google with Chroma, Mozila with Firefox etc) implement the standar into their JS engines. So the browsers implement the the most famous implementation of ECMAScript, which is the Javascript. Both of languages are Under active development.

## 13. Setting Up a Development Environment
    - TIP: use incognito tab to avoid distraction from crhome extensions 


# HOW THE WEB WORKS - The Big Picture

- DNS (Domain Name System) is responbsible for translating the human readbale name (for example, www.amazon.com) to machine readble IP addresses (for example, 192.0.02.44).

- When I make a request for the page, this request is a package of data (includng URL, Methods, Status Code, Remote Addres, Referrer Policy). There are meta data as well.

- Then I receive a response (a package of data too)

* The tree languages
    - HTML: Hypertext Markup Langauge (The website's structure)
    - CSS: Cascading Style Sheets (Making it look good)
    - Javascrpt: Adding Logic to a website

* All this data transfer (HTML, CSS and JS) is standardized, just like how request and response should look like.That is all defined by the technology HTTP (Hypertext Transfer Protocol)

    - HTTPS: Hypertext Transfer Protocol Secure (The same but in a encipted form). Modern websites use it.

* There are other technologies involved with it, just like frameworks for the Backend and the Frontend. They help us not to write/code all the logic (the declarative code), it means I just need to say what I want and what and when to changes and the frameroks take over and does the rest.

    - JSON: Javascript Object Notation - A Data Format (is used when there is only a request and not a response)


Obs: I created this line using Codespaces*