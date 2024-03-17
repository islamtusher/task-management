import { useState } from "react";
import Button from "../../components/button/Button";
import TaskCard from "../../components/card/TaskCard";
import TopHeader from "../../components/header/TopHeader";
import PageContent from "../../components/pageContent/PageContent";
import ModalContainer from "../../components/modal/ModalContainer";
import ModalHeader from "../../components/modal/ModalHeader";
import { Modal } from "react-bootstrap";

const TaskList = () => {
    const [modalShow, setModalShow] = useState(false)
    const tasks = [
        {
            id: '1',
            name: 'This is a test item',
            time: '10:00 AM',
            assign_date: '10 JAN 2024',
            end_date: '15 JAN 2024',
            description: 'Something will testing here...',
            status: 'Completed'
        }
    ]

    const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

    
    return (
        <div>
            <header>
                <TopHeader title='Tasks'>
                    <Button onClick={handleShow} type='button' className='primary'>Add Task</Button>
                </TopHeader>                
            </header>

            <main>
                <PageContent>
                    {
                        tasks.map((task, index) => <TaskCard key={index} task={task}/> )
                    }
                </PageContent>
            </main>

            {/* {
                <ModalContainer show={modalShow} handleClose={()=>setModalShow(false)}>
                    <ModalHeader>
                        Assign New Task
                    </ModalHeader>
                </ModalContainer>
            } */}
            <Modal
        show={modalShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
};

export default TaskList;