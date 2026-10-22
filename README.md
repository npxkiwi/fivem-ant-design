# React Boilerplate for FiveM NUIs
⚠️ This is a modified version of [Zuntie’s Preact FiveM Boilerplate](https://github.com/Zuntie/preact-fivem-boilerplate), converted to **React** by [emptyy](https://github.com/empty-fivem).

The reason for converting it from Preact to React is that I needed to use [Leaflet](https://leafletjs.com/), which doesn’t work properly with Preact.

If you don’t need React, I highly recommend using the original Preact version from [Zuntie](https://github.com/Zuntie/preact-fivem-boilerplate).

## Table of Contents
- [React Boilerplate for FiveM NUIs](#react-boilerplate-for-fivem-nuis)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Usage](#usage)
    - [isEnvBrowser](#isenvbrowser)
    - [SendNuiCallback to the FiveM Client](#sendnuicallback-to-the-fivem-client)
    - [RegisterNUICallback on the FiveM Client](#registernuicallback-on-the-fivem-client)
    - [SendNUIMessage to the React App](#sendnuimessage-to-the-react-app)
  - [Guide](#guide)
  - [License](#license)

## Features
- [Vite](https://vitejs.dev/) for building and dev tooling.
- [zustand](https://github.com/pmndrs/zustand) for easy state-management.
- [TailwindCSS](https://tailwindcss.com) for styling the pages.
- FiveM Integration

## Usage
### isEnvBrowser
This function is used to check whether the React app is running in a browser (for development/testing) or inside FiveM's NUI environment.

```ts
  const isEnvBrowser = () => !window.invokeNative;
  export default isEnvBrowser;
```

- window.invokeNative only exists inside FiveM.
- If it’s missing, we assume the code is running in a normal browser.
- This is useful for development, mock data, or conditional rendering.


### SendNuiCallback to the FiveM Client
Gets data from the FiveM Client.
<br>
**Parameters**
- `endpoint` (Type: String): A string that points to the intended endpoint, e.g., "whoami".

- `data` (Type: Object): An object with the data to be sent (Optional when not using a callback).

- `cb` (Type: Function): A callback that returns the result of the function.

**React app (With Callback)**
```js
SendNuiCallback('whoami', {}, (res) => {
  // do something with the data
})
```
**React app (Without Callback)**
```js
SendNuiCallback('whoami')
```

### RegisterNUICallback on the FiveM Client
Registers a callback on the FiveM Client to call from the UI.
<br>
**Parameters**
- `endpoint` (Type: String): A string that points to the intended endpoint, e.g., "whoami".

- `data` (Type: Object): An object with the data recieved from the SendNuiCallback.

- `cb` (Type: Function): A callback that returns some data to the SendNuiCallback.

**FiveM Script (Client)**
```lua
RegisterNUICallback("whoami", function(data, cb)
    cb('fivem client')
end)
```

### SendNUIMessage to the React App
Sends data to the UI from the FiveM Client.
<br>
**Parameters**
- `type` (Type: String): A string that specifies the type of update to perform. It has the following preset values:

  - `showUI`: Displays the UI.
  - `hideUI`: Hides the UI and triggers a callback to unfocus the UI.

- `data` (Type: Object): An object with the data to send.

**FiveM Script (Client)**
```lua
SendNUIMessage({
  type = "showUI",
  data = {
    value = "FiveM Value"
  }
})
```

## Guide
Clone this repository.

```
git clone https://github.com/empty-fivem/react-fivem-boilerplate
```
<br>
Install NPM dependencies.

```
npm install
```
<br>
Build the application in /web

```
cd web
```
```
npm run build
```
<br>
Automatic builds, that only require a restart of the resource

```
cd web
```
```
npm run build:watch
```
<br>


## License

Copyright (c) 2025 [Zuntie](https://github.com/Zuntie)  
Modifications made in 2025 by [emptyy](https://github.com/empty-fivem)

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in  
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.
