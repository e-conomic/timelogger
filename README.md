# e-conomic hiring task

As a part of the e­conomic recruitment process we ask our candidates to complete a practical development challenge. The challenge consists of two parts:

1. You solve the provided task, and send the results to us.
2. We host a session where you present your solution to us, and we all have a nice talk about it.

The task is to implement a simple time logger web application that solves the following two user stories:

1. As a freelancer I want to be able to register the time I spend on my projects, so that I can create correct invoices for my customers.
2. As a freelancer I want to be able to get an overview of my time registrations, so that I can create correct invoices for my customers.

We ask that you clone this repository to complete the task, rather than fork it. You can either push it to a repository on your own account, or simply send us the project in a zip if you prefer.

When presenting the solution please bring your own laptop if you have one. If you do not, please inform us before the meeting so that we can prepare.

## Considerations

Keep in mind that we do not expect your code to be production ready. What we're looking for is to see if you have the ability to transform a set of user requirements into a working tool, preferably creating some nice and clean code along the way. We will appreciate if your solution:

- Works, obviously
- Contains readable, bug free code
- Tested
- Follows sensible structured patterns and thought
- Implement input validation and add test coverage for these use cases

We want to see that you have thought about the design of your application, and considered how it might scale.

- Consider how your application might scale as it grows in use, and in number of developers working on it
- Summarise any major architectural decisions you take with notes or diagrams, to discuss in the presentation

## Questions

If you have any questions or concerns please simply ask.

---

We realise there are a lot of moving parts to such an application. To help, we have scaffolded a .NET Core 2.1 solution containing some basic setup to get you started, and a create-react-app base application, containing some basic components and bootstrap styling to get you started.

- Styling and graphical design is not that important, we are assesing your ability to craft software and understand the basics - focus on that
- Do not worry about authentication, imagine your application is already authenticated and simply send a dummy user id between server and client

You are of course welcome to replace or change any part of the scaffolded code, it exists simply as a time saver.

## Development

Server - restore the nuget packages, run the solution in visual studio. You can download Visual Studio Community for free.

The server solution contains an an API only with a basic Entity Framework in memory context that acts as a database.

Client - `npm install` to install depednencies, `npm start` runs the create-react-app development server

Basic project setup using bootstrap styling 