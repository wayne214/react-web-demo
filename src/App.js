import Header from "./common/header";
import {Provider} from 'react-redux';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "./pages/home";
import Detail from "./pages/detail";


import store from "./store";

function App() {
  return (
    <Provider store={store}>
        <div>

            <BrowserRouter>
                <div>
                    {/*<nav>*/}
                    {/*    <ul>*/}
                    {/*        <li>*/}
                    {/*            <Link to="/">Home</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link to="/about">About</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link to="/users">Users</Link>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}
                    <Header />
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/detail" exact>
                            <Detail />
                        </Route>
                    </Switch>
                </div>

            </BrowserRouter>
        </div>
    </Provider>
  );
}

export default App;
