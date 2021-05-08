import React from 'react';
import {Switch, Route} from "react-router-dom";
// import {useSelector} from "react-redux";
// import {Redirect} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Products from './containers/Products/Products';
import AddProduct from "./containers/AddProduct/AddProduct";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import ProductPage from './containers/ProductPage/ProductPage';

// const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
//     return isAllowed ?
//         <Route {...props} /> :
//         <Redirect to={redirectTo}/>
// };

const App = () => {
    // const user = useSelector(state => state.users.user);
    return (
            <Layout>
                <Switch>
                  <Route exact path={['/', '/products']} render={() => <Products/>}/>
                  <Route exact path='/products/:id' render={() => <ProductPage/>}/>
                  <Route exact path='/register' render={() => <Register/>}/>
                  <Route exact path='/login' render={() => <Login/>}/>
                  <Route exact path='/add' render={() => <AddProduct/>}/>
               
                        {/* <ProtectedRoute
                            isAllowed={user !== null}
                            redirectTo={"/login"}
                            path="/"
                            exact
                            component={Products}
                        />
                        <Route path="/products/new" exact component={NewProduct}/>
                        <ProtectedRoute
                            isAllowed={!user}
                            redirectTo={"/"}
                            path="/register"
                            exact
                            component={Register}
                        />
                        <ProtectedRoute
                            isAllowed={!user}
                            redirectTo={"/"}
                            path="/login"
                            exact
                            component={Login}
                        /> */}
                </Switch>
            </Layout>
    );
};

export default App;