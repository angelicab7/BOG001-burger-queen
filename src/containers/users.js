import React, {Component} from 'react';
import BurgerImage from '../components/BurgerImage/burgerImage';

class Users extends Component { //create new component
    render(){
        return(
            <div>
                <h1>Waiter and cheff!</h1>
                <p>Awesome users on board!</p>
                <BurgerImage/>
            </div>

        );
    }
}

export default Users;

