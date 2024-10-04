import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Routing from './router/routing.jsx';
//import { MantineProvider } from '@mantine/core';
//import '@mantine/core/styles.css';
import { useEffect } from 'react';

function App() {

    // useEffect(() => {
    //     function handleContextMenu(e) {
    //       e.preventDefault(); // prevents the default right-click menu from appearing
    //     }
    //     // add the event listener to the component's root element
    //     const rootElement = document.getElementById('my-component');
    //     rootElement.addEventListener('contextmenu', handleContextMenu);
    //     // remove the event listener when the component is unmounted
    
    //     return () => {
    //       rootElement.removeEventListener('contextmenu', handleContextMenu);
    //     };
    //   }, []);

    return (
        <>
            <div className="App" id="my-component">
                {/* <MantineProvider> */}
                    <Router>
                        <Switch>
                            <Routing />
                        </Switch>
                    </Router>
                {/* </MantineProvider> */}
            </div>
        </>
    )
}

export default App
