import React from 'react';
import Header from '../components/header/header.jsx';
import Nav from '../components/nav/nav.jsx';
import Content from '../components/content/content.jsx';
import { Provider } from 'react-redux';
import todoApp from '../reducers/index.jsx';
import { createStore } from 'redux';
let store = createStore(todoApp)


class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Content />
            </Provider>
        );
    }

    // render() {
    //     return (
    //         <div className='main'>
    //             <Header />
    //             <Nav />
    //             <Content />
    //         </div>
    //     );
    // }
}

export default App;