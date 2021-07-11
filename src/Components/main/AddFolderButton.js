import React,{useState} from 'react'

import{Button,Modal,Form} from 'react-bootstrap'
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import {faFolderPlus}from '@fortawesome/free-solid-svg-icons'
import { database} from '../../firebase'
import{useAuth}from '../../contexts/AuthContext'
import { ROOT_FOLDER } from '../../hooks/useFolder'



export default function AddFolderButton({currentFolder}) {
  const {currentUser}=useAuth()
  const [open,setOpen]=useState(false)
  const [name,setName]=useState('')
 

  function openModal(){
      setOpen(true)
  }
  function closeModal(){
    setOpen(false)
  }

  function handleSubmit(e){

    e.preventDefault()

    //create folder in data base
    if(currentFolder==null)return
  
    const path=[...currentFolder.path]

    if(currentFolder!==ROOT_FOLDER){
      path.push({name:currentFolder.name,id:currentFolder.id})
    }

    database.folders.add(
      {
        name:name,
        parentId:currentFolder.id,
        userId:currentUser.uid,
        path:path,
        createdAt:database.getCurrentTimestamp()
      }
    ) 
    console.log(currentFolder)
 
    setName("")
    closeModal()


  }


    




  
    return (
      <>
      <Button onClick={openModal} variant="outline-success"
      size='sm'  >  
      <FontAwesomeIcon icon={faFolderPlus}/>
      </Button>
      <Modal show={open}>
    <Form onSubmit={handleSubmit}>

      <Modal.Body>
        <Form.Group >
          <Form.Label>Folder Name</Form.Label>
          <Form.Control
          type="text"
          
          required

          value={name}
          onChange={e=>setName(e.target.value)}
          />

        </Form.Group>


      </Modal.Body>
    <Modal.Footer>
      <Button variant='secondary' onClick={closeModal}>
      Close
      </Button>
      <Button variant='success' type='submit'>
      Add Folder
      </Button>
    </Modal.Footer>



    </Form>
    </Modal>
      </>
      )


}
