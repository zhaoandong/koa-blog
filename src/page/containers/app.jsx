import React from 'react'
import Header from '../components/header/header.jsx'
import Nav from '../components/nav/nav.jsx'
import Content from '../components/content/content.jsx'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import todoApp from '../reducers/index.jsx'
import { createStore, applyMiddleware } from 'redux'
import { getAll, actions } from '../actions/index.jsx'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const store = createStore(
  todoApp,
  applyMiddleware(...middleware)
)


store.dispatch(getAll())

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <div className='main'>
                    <Content />
                </div>
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