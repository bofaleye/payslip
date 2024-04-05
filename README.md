# Introduction
A  [wireframe and flowchart](https://www.figma.com/file/SJno1ppYfRWPT0NiMY7D05/PaySlip?type=whiteboard&node-id=1-2&t=0JpuYZcP3CmE6uYd-0)  to conceptualize what was implemented

This application was created using:
- CRA :provides a way to quickly spin up a [non production](https://react.dev/learn/start-a-new-react-project) react application
- Capacitor was used in building it natively for Android and IOS. 
- Ionic react and router packages to give a native mobile feeling to the user interface and navigation experience. Tailwind css was also added for easy customization of components

# Minimum requirements
- JDK 17
- Node 18.19.0


## Available Scripts to start the app

In the project directory, you can run:

### `npm install`

then

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### run `npm test` to run the unit test
 unit test uses 
 - React Testing Library
 - Jest
setup guide [here](https://ionicframework.com/docs/react/testing/unit-testing/setup)
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Running and building IOS and Android
  do the following in exact order
  #### `npm run build`
  #### `npx cap copy`
  #### `npx cap run android` or `npx cap run ios`

## things to improve on:
- More unit test coverage
- Functional test using cypress

