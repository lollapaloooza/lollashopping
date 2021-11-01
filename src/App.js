import {useEffect} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {connect} from "react-redux";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {createStructuredSelector} from "reselect";
import {checkUserSession} from "./redux/user/user.actions";

import './App.css';
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";

const App = ({checkUserSession, currentUser}) =>  {

    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route exact path='/checkout' component={CheckoutPage}/>
                <Route exact path='/signin'
                       render={()=>
                               currentUser ?
                                   (<Redirect to='/'/>) :
                                   (<SignInAndSignUp/>)}/>
            </Switch>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
