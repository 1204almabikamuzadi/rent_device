import React,{useState} from 'react'
import Modal from 'react-modal'
Modal.setAppElement("#app")
function PopModal() {
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    return (
        <div>
             <button  onClick={()=>setmodalIsOpen(true)}>open modal</button>
                <Modal isOpen={modalIsOpen} 
                style={{
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.75)'
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      padding: '20px'
                    }
                  }}
                >
                  <h2>Delete User</h2>
                  <h3>This the body</h3>
                  <button onClick={()=>setmodalIsOpen(false)}>Close</button>
                </Modal>

         </div>
    )
}

export default PopModal
