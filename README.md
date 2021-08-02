<img width="1676" alt="Screen Shot 2021-08-02 at 6 45 12 PM" src="https://user-images.githubusercontent.com/63320350/127932868-88815899-95c6-4910-b3d4-d043b1d7e432.png">

# Getting Started

NPM install to install all the dependencies

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive coverage mode.
I would like to have more coverage but I ran out of time from some technical difficulties.

## Decisions

I know we weren't supposed to spend too much time styling but that's against my nature so put in an extra couple hours and used the following tools to make it much simpler of a process.

- Styled Components:
  - Easily reusable. Although I didn't have time to organize, I often will put many different styled components in directory of it's own and reuse the styles over and over again.
  - Scoped View: I love being able to style in my react / jsx files - it saves so much time from going back and forth between files and also prevents naming conflicts. Also, it gives the power of inline styling without the downside.
  - Can easily implement conditional stylijng outside of the component.
  - Sass out of the box
- Material UI
  - Consistent style throughout the app and other sites
  - Easily customizable
  - Well documented

# State Management

I mostly used Context API to manage state and it worked out pretty well. I used the useState hook a couple times to manage local state within a component and when I was creating my explanation modals I would pass that state down one level. For some reason, I also had to use useState to manage the state of the stars in my email rows.

### Fetches

Please note that I created a custom hook called UseFetchData that can be used by all of the implemented Get requests. If I was to implement other HTTP Request methods, I'd likely have to create a different hook or just add the functionality within the components.

My biggest priority was to ensure I got all the GET fetches implemented because without those, there wasn't much of an app. The biggest priorities within those were folders and mail then contacts. Settings and Filters were pretty easy to implement.

After that I implemneted the following:

- Composing a new email - this seems like a pretty big feature for an email product and I had already designed the button so it was pretty easy to implement the functionality.
- Create Contact - This also felt like a pretty important feature to the end user and again only took an extra couple lines of code.
- Delete Email - A user should be able to permanently delete an email from our database so I made this a priority. Again, I already had all the buttons in place.
- Starred and Important - These felt like something a user would want and use often. I know that I do.

\*\*\*If I could do it over, I'd probably focus on prioritizing moving a message to another folder. That takes a little bit more finessing with props and is an important feature for users who use their inbox as a task list.
