# How to create a new model in AM Browser

When you create a new model, you should specify below items: 

- Display name on header `Hello`
- Router name `localhost:8001/hello`
- Right level of Router `0: admin  1:power  2: normal`
- Entry component `React component`

You may follow these steps:

## Modify codes

1. Specify router right level in `app/rest.js`
    ```
    function getHeadNav(rights) {
        return {
            ...
            hello: rights.index < 2,
            ...
        };
    }
    ```
    > **rights.index < 2** means **admin** and **power** user can access this module
    
1. Specify router display on header in `src/js/components/NavHeader.js`
    ```
    const defaultLinks = [
      ...
      {to: '/hello', text: 'Hello'},
      ...
    ];
    ```
1. Create component under folder `src/js/components`
    - Create sub folder `hello`
    - Create `index.js` 
    - Paste below sample contents
    
    ```
    import React, { Component } from 'react';
    import { Box } from 'grommet';
    
    export default class Hello extends Component {
        render() {
            return(
                <Box>
                    Hello AM Browser
                </Box>
            );
        }
    }
    
    ```
    
    > file path ***src/js/components/hello/index.js***
    
1. Bind router to above component in `src/js/Routes.js`
   ```
   import Hello from './components/hello/index';
   ...
   
   export const getRoutes = (headerNavs) => {
   ...
        const allRoutes = [
        ...
        {path: 'hello', component: Hello},
        ...
        ];
   ...
   }
   
   ```
## Restart server

- Restart node server `node app/server.js`
- Rebuild front end js `gulp dev` or `gulp dist`

Or simple `npm start`
