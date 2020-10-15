import React from 'react';

import './burgerImage.css';
import burgerImage from '../../assets/logoBQ.f69cefa4.svg';


const BurgerImage = (props) => (
    <div className="burgerImg">
        <img src={burgerImage} className="burgerImg" />
    </div>

);



export default BurgerImage;