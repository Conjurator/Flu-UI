# Flu-UI
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Conjurator/Flu-UI/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/fluui.svg?style=flat)](https://www.npmjs.org/package/fluui)

Flu-UI is a React-based UI components for the web.

## Installation
Flu-UI is available on npm
```bash
npm install fluui
```
## Usage
Here is a simple example.
```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'fluui'
function App() {
  return (
    <Button>
      hello world!
    </Button>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))
```
## Documentation
Checkout our [storybook site](https://conjurator.github.io/Flu-UI/)
## Development
```bash
git clone git@github.com:Conjurator/Flu-UI.git
cd Flu-UI
npm install
npm run storybook
```
## Contributing
We appreciate any issue or pr you make.

## License
[MIT Licensed](https://github.com/Conjurator/Flu-UI/blob/master/LICENSE)
