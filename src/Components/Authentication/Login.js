import React ,{useRef,useState} from 'react'
import {Form,Button,Card,Alert} from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import {Link,useHistory} from 'react-router-dom'
import CenteredContainer from './CenteredContainer'


export default function Login() {

const emailRef=useRef()
const passwordRef=useRef()

const {login,currentUser}=useAuth()
const [error,setError]=useState('')

const [loading,setLoading]=useState(false)
const history=useHistory();


async function handleOnsubmit(e){

    e.preventDefault()
  //  console.log(currentUser.email)

    try{
        setLoading(true)
    await login(emailRef.current.value,passwordRef.current.value);
       history.push('/')
       console.log("user")
}
    catch{
        setError('')
        setError('Failed to login')
    }

    setLoading(false)

}


    return (
        <CenteredContainer>
<Card>
     <Card.Body>
        
        <h2 className="text-center mb-4">Log in </h2>
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




        <Button  disabled={loading} className="w-100" type='submit'>Login</Button>


        </Form>


        </Card.Body>    




</Card>

        <div className="w-100 text-center mt-2">

            Need an account?<Link to='/signup'>Sign up</Link>
            
        </div>
        </CenteredContainer>
    )
}
