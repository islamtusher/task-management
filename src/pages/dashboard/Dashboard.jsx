
import { Button, Modal } from "react-bootstrap";
import DashboardCard from "../../components/card/DashboardCard";
import TopHeader from "../../components/header/TopHeader";
import PageContent from "../../components/pageContent/PageContent";
import { useState } from "react";


const Dashboard = () => {
    const [modalShow, setModalShow] = useState(false)
     const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
    return (
        <div>
            <header>
                <TopHeader title='Dashboard'>
                     <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>

                </TopHeader>
            </header>
            
            <main>
                <PageContent>
                    <DashboardCard name='Total Task' />
                </PageContent>
            </main>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            <footer></footer>
        </div>
    );
};

export default Dashboard;