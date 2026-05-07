# test-react-app

A simple task list app built with React 18 and Vite.

## Features

- View a list of tasks (name and description)
- Add new tasks via a form with name and description fields
- Empty-state message when no tasks exist
- Comes seeded with two sample tasks

## Tech stack

- React 18
- Vite 5
- Plain CSS (no framework)

## Getting started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The app runs at http://localhost:5173/.

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — build for production
- `npm run preview` — preview the production build locally

## Project structure

```
src/
  main.jsx              # React entry point
  App.jsx               # Holds task state and the addTask handler
  index.css             # Global styles
  components/
    TaskForm.jsx        # Name + description input, Add button
    TaskList.jsx        # Renders the list of tasks
```
