

import { Fragment } from "react";
import DashboardCard from "../../components/card/DashboardCard";
import TopHeader from "../../components/header/TopHeader";
import PageContent from "../../components/pageContent/PageContent";


const Dashboard = () => {
    return (
        <Fragment>
            <header>
                <TopHeader title='Dashboard' />
            </header>
            
            <main>
                <PageContent>
                    <DashboardCard name='Total Task' />
                </PageContent>
            </main>
            
            <footer></footer>
        </Fragment>
    );
};

export default Dashboard;