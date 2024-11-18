# RESOLVE CODEBASE

This project is based on requirements requested by a client and consists of three main dirs:
1. `app` - Your web app, built with [React](https://react.dev/reference/react) and [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).
2. `e2e-tests` - [Playwright](https://playwright.dev/) tests for the React web app.
3. `blog` - Your blog / docs, built with [Astro](https://docs.astro.build) based on [Starlight](https://starlight.astro.build/).

For more details, check READMEs of each respective directory!

## Setup Instructions

To run your new app, follow the instructions below:

  1. Position into app's root directory:
    cd resolve/app

  2. Run the development database (and leave it running):
    wasp db start

  3. Open new terminal window (or tab) in that same dir and continue in it.

  4. Apply initial database migrations:
    wasp db migrate-dev

  5. Create initial dot env file from the template:
    cp .env.server.example .env.server

  6. Last step: run the app!
    wasp start

Check the links for additional guidance and the link to documentation!
