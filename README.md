# Azure Communication Services - Calling Web SDK Demo

A simple web application demonstrating how to integrate the Azure Communication Services (ACS) Calling Web SDK to make voice and video calls between users.

## Prerequisites

To run this application, you'll need the following:

- **Azure Communication Services account**:
  - An Azure Communication Services (ACS) account and user credentials to get a user-access-token
  - You can create an ACS resource in the Azure portal and generate tokens for user authentication

- **Web browser**:
  - A modern web browser (such as Google Chrome, Microsoft Edge, or Firefox) to run the application

- **Node.js and npm**:
  - Node.js (version 12 or above) and npm (Node Package Manager) installed on your local machine
  - Used to manage dependencies and run the development server

## Installation

### 1. Clone this repository
```bash
git clone https://github.com/HimanshuChelani27/video-call-communication-acs
cd video-call-communication-acs
```

### 2. Install dependencies
Use npm to install the required dependencies for the project.
```bash
npm install
```

### 3. Set up Azure Communication Services
- Create an Azure Communication Services resource in the Azure Portal if you don't have one
- Generate an access token for a user in the ACS resource. This will be used for authenticating users and enabling communication

### 4. Update the index.html file
Replace the placeholder for user-access-token in the index.html file with your valid Azure Communication Services user access token.

```html
<input id="user-access-token" type="text" placeholder="User access token" style="margin-bottom:1em; width: 500px;"/>
```

### 5. Start the development server
Run the following command to start the development server with HTTPS support:
```bash
npm run start
```

The application will now be accessible in your web browser at https://localhost:8080.

## Usage

### 1. Initialize Call Agent
- Enter a valid user access token in the User access token input field
- Click **Initialize Call Agent** to initialize the call agent with the token

### 2. Start a Call
- After initializing the call agent, enter the recipient's ACS user ID (in the format `8:acs:resourceId_userId`) in the "Enter callee's Azure Communication Services user identity" input field
- Click **Start Call** to initiate a video call to the recipient

### 3. Accept an Incoming Call
- When a call is incoming, the **Accept Call** button will be enabled
- Click the button to accept the incoming call

### 4. Start/Stop Video
- Once the call is connected, you can start your local video stream by clicking **Start Video**
- To stop your local video stream, click **Stop Video**

### 5. Hang Up
- To end the call, click **Hang Up Call**

### 6. Video Streams
- Once the call is connected, you'll be able to see the video streams of the local and remote participants in the video containers

## Features

- **One-on-one Video Calling**: Place one-to-one video calls to other users in Azure Communication Services
- **Incoming and Outgoing Calls**: Handle incoming and outgoing calls
- **Start and Stop Local Video Stream**: Enable and disable local video stream for the call
- **Display Remote Participants**: Show video streams of remote participants when available
- **Real-Time Updates**: Automatically update the UI when the call state changes (e.g., call connected, call ended)

## Development

### Run the Development Server
To start the development server and test changes locally, run:
```bash
npm run start
```

### Build the Project
To create a production-ready build of the application, run:
```bash
npm run build
```
This will output the compiled files into the `dist` folder.

### Webpack Configuration
This project uses Webpack to bundle and serve the application. You can find the Webpack configuration in `webpack.config.js`. It includes:
- Entry point: `index.js`
- Output: Compiled files in `dist` folder
- Development server: Served at https://localhost:8080

### Copy Plugin
The copy-webpack-plugin is used to copy the index.html file to the dist directory during the build process.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- **Azure Communication Services**: For providing the APIs that enable video and audio calls
- **Webpack**: For bundling the application and enabling fast development builds
