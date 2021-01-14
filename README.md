# e-conomic & sproom hiring task

As a part of the e-conomic/sproom recruitment process we ask our candidates to complete a practical development challenge. The challenge consists of two parts:

1. You solve the provided task, and send the results to us.
2. We host a session where you present your solution to us, and we all have a nice talk about it.

The task is to implement a simple time logger web application that solves the following three user stories:

1. As a freelancer I want to be able to register how I spend time on my _projects_, so that I can provide my _customers_ with an overview of my work.
2. As a freelancer I want to be able to get an _overview of my time registrations per project_, so that I can create correct invoices for my customers.
2. As a freelancer I want to be able to _sort my projects by their deadline_, so that I can prioritise my work.

Individual time registrations should be 30 minutes or longer, and once a project is complete it can no longer receive new registrations. You do not need to create an actual invoice.

We ask that you clone this repository to complete the task, rather than fork it. You can either push it to a repository on your own account, or simply send us the project in a zip if you prefer. We recommend removing installed dependencies such as the `node_modules` directory prior to zipping, to keep the file size down.

When presenting the solution please bring your own laptop if you have one. If you do not, please inform us before the meeting so that we can prepare.

## Considerations

What we're looking for is to see if you have the ability to transform a set of user requirements into a working solution, preferably creating some nice and clean code along the way. We will appreciate if your solution:

-   Works, obviously
-   Contains readable, bug free code
-   Is appropriately covered by tests, in the frontend and backend (where required)
-   Follows sensible structured design patterns and thought proceses
-   Validates user input and contains test coverage for these use cases, at least in the backend
-   The front-end is typed using typescript

We want to see that you have thought about the design of your application, and considered how it might scale as it's complexity increases:

-   Consider how your application might scale as it grows in use, and in number of developers working on it
-   Summarise any significant architectural decisions you take, to discuss in the presentation

## Questions

If you have any questions or concerns please simply ask.

---

We realise there are a lot of moving parts to such an application. To help, we have scaffolded a .NET Core v3.1 solution containing some basic setup to get you started, and a create-react-app base application for the front-end, containing some basic components and bootstrap styling to get you started.

-   You are welcome to change or remove any part of this code, it is meant simply as a starting point
-   Styling and graphical design is not that important, we are assesing your ability to design and architect software - focus on that
-   Do not worry about authentication, imagine your application is already authenticated
-   You do not _need_ to create a database and can hardcode data in the appropriate place in your application, as if it were coming from a database

## Development

To run this project you will need both .NET Core v3.1 and Node installed on your environment.

Server - `dotnet restore` - to restore nuget packages, `dotnet build` - to build the solution, `cd Timelogger.Api && dotnet run` - starts a server on http://localhost:3001. You can download Visual Studio Code. The project was tested on MacOS High Sierra and Windows 10.

The server solution contains an API only with a basic Entity Framework in memory context that acts as a database.

Client - `npm install` to install dependencies, `npm start` runs the create-react-app development server
