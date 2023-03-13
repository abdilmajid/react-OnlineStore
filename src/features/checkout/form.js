import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form , FormGroup, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const CheckoutForm = ({handleSubmit}) => {

  return (
  <div>
    <Form onSubmit={handleSubmit}>
      <FormGroup controlId="formInlineName">
        <label htmlFor="order[name]">Name:</label><br/>
        <Field name="order[name]" component="input" type="text" />
      </FormGroup>
      <FormGroup controlId="formInlineName">
        <label htmlFor="order[email]">Email:</label><br/>
        <Field name="order[email]" component="input" type="email" />
      </FormGroup>
      <div>
        <NavLink to='/cart'>
          <Button className='go-back'>Back</Button>
        </NavLink>        
        <Button type="submit">Submit order</Button>
      </div>
    </Form>
  </div>
  )
}

export default reduxForm({
  form: 'checkout'
})(CheckoutForm);

 