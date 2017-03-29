# Food Oasis

Overview
-----
This is the Food Oasis frontend application repository.

Usage
-----
### Setup & Requirements

### Configuration

### Commands
|Script|Description|
|---|---|
|`npm start`|Spins up an Express server|
|`npm run build` |Builds the application to `./dist`.|
|`npm run dev`|Used for local development. Builds and runs the application on `webpack-dev-server`.|
|`npm run test`|Runs tests.|
|`npm run test:watch`|Same as `npm run test` but watches for changes and re-runs tests.|
|`npm run lint`|Runs ESLint on the all `.js` files in the `./src` and `./tests` folders.|

### Environment Variables


Project Structure
---------

```
.
├── src                      # Main application folder
│   └── actions              # Action creators
│   └── components           # All react components
│   │   └── common           # Common components
│   │   └── layouts          # Layouts
│   │   └── views            # Components for each route / page
│   └── containers           # Redux connect wrapped components
│   └── decorators           # Higher-order component decorators
│   └── reducers             # Reducers
│   └── styles               # Base and component styles
│   └── utils                # Helpers and constants
│   └── index.html           # Index file where compiled JS and CSS is injected and served
│   └── index.js             # Entry point of application
├── static                   # Static files
├── tests                    # Integration and unit tests
├── webpack                  # Webpack configuration files
├── server.js                # Express server
```

### Components vs. Views vs. Layouts

**TL;DR:** They're all components.

This distinction may not be important for you, but as an explanation: A **Layout** is something that describes an entire page structure, such as a fixed navigation, viewport, sidebar, and footer. Most applications will probably only have one layout, but keeping these components separate makes their intent clear. **Views** are components that live at routes, and are generally rendered within a **Layout**. What this ends up meaning is that, with this structure, nearly everything inside of **Components** ends up being a dumb component.

Webpack
-------

Testing
-------

Deployment
-------
