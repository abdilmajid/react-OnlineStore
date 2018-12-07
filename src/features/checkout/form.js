import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form , FormGroup, Button, ControlLabel} from 'react-bootstrap';


function CheckoutForm(props) {
  const { handleSubmit } = props

  return (
  <div>
    <Form onSubmit={handleSubmit}>
      <FormGroup controlId="formInlineName">
        <label htmlFor="order[name]">Your name:</label><br/>
        <Field name="order[name]" component="input" type="text" />
      </FormGroup>

      <FormGroup controlId="formInlineName">
        <label htmlFor="order[email]">Email:</label><br/>
        <Field name="order[email]" component="input" type="email" />
      </FormGroup>

      <div>
        <Button type="submit">Submit order</Button>
      </div>
    </Form>
  </div>
  )
}

CheckoutForm = reduxForm({
  form: 'checkout'
})(CheckoutForm)

export default CheckoutForm