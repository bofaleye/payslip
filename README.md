# Introduction
A  [wireframe and flowchart](https://www.figma.com/file/SJno1ppYfRWPT0NiMY7D05/PaySlip?type=whiteboard&node-id=1-2&t=0JpuYZcP3CmE6uYd-0)  to conceptualize what was implemented

[demo link](https://www.loom.com/share/d9e6a0dd5a8045dcb94dad2a4c2238d7?sid=98607759-a89a-45df-9180-3b7369f3c6eb)

This application was created using:
- CRA : Provides a way to quickly spin up a [non production](https://react.dev/learn/start-a-new-react-project) react application
- Capacitor: For native Android and IOS plugins. 
- Ionic react and router: To give a native mobile feeling to the user interface and navigation experience. Tailwind css was also added for easy customization of components

# Minimum requirements
- JDK 17
- Node 18.19.0

## Available Scripts to start the app

In the project directory, run:

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
  They will the app, launch your emulator and  install the app on it.
  the app can also be  deployed to your connected mobile device  

## things to improve on:
- More unit test coverage
- Functional test using cypress
- UI compatibility test on wide variety of devices.
- Improved accessibility for color contrast and voice readers
- An improved web view for the  detail page.
- Home page pagination and scroll to load more on mobile
- Filter and search feature for payslips
- Better SEO
- A more robust model for payslip to include  information like 'Amount'
