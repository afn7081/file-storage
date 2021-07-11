import React ,{useRef,useState} from 'react'
import {Form,Button,Card,Alert} from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import {Link,useHistory} from 'react-router-dom'
import CenteredContainer from './CenteredContainer'


export default function Signup() {

const emailRef=useRef()
const passwordRef=useRef()
const passwordConfirmRef=useRef()
const {signup}=useAuth()
const [error,setError]=useState('')

const [loading,setLoading]=useState(false)
const history=useHistory();


async function handleOnsubmit(e){

    e.preventDefault()

    if(passwordRef.current.value!=passwordConfirmRef.current.value){
        return setError('passwords dont match')

        }

   

    try{
        setLoading(true)
    await signup(emailRef.current.value,passwordRef.current.value);
        history.push('/')
        
}   
    catch{
        setError('')
        setError('Failed to create an account')
    }

    setLoading(false)

}


    return (
        <CenteredContainer>
<Card>
     <Card.Body>
        
        <h2 className="text-center mb-4">Signup </h2>
        {error && <Alert variant='danger'>{error}</Alert> }
        <Form onSubmit={handleOnsubmit}>
            <Form.Group id='email'>
        <Form.Label >
            Email
        </Form.Label>
        <Form.Control type="email"  ref={emailRef} required></Form.Control>
        </Form.Group>

        <Form.Group id='password'>
        <Form.Label >
            password
        </Form.Label>
        <Form.Control type="password"  ref={passwordRef} required></Form.Control>
        </Form.Group>

        <Form.Group id='password-confirm'>
        <Form.Label >
            Confirm Password
        </Form.Label>
        <Form.Control type="password"  ref={passwordConfirmRef} required></Form.Control>
        </Form.Group>


        <Button  disabled={loading} className="w-100" type='submit'>Signup</Button>


        </Form>


        </Card.Body>    




</Card>

        <div className="w-100 text-center mt-2">

            Already have an account? <Link to='/login'>Login</Link> 
            
        </div>
        </CenteredContainer>
    )
}
