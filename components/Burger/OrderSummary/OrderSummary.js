import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
   componentWillUpdate() {
      console.log('[OrderSummary] WillUpdate');
   }
   render() {
      const ingredientSummary = Object.keys(this.props.ingredients)
         .map(k => {
             return (
                <li key={k}><span style={{textTransform: 'capitalize'}}>{k}</span>: {this.props.ingredients[k]}</li>
             );
         });
      return (
       <Aux>
         <h3>Your Order</h3>
         <p>A delicious burger with the following ingredients:</p>
         <ul>
           {ingredientSummary}
         </ul>
         <p><strong>Total Price: ${this.props.price}</strong></p>
         <p>Continue to Checkout?</p>
         <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
         <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
       </Aux>
     );
   }
} 

export default OrderSummary;
