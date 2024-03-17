

import DashboardCard from "../../components/card/DashboardCard";
import TopHeader from "../../components/header/TopHeader";
import PageContent from "../../components/pageContent/PageContent";


const Dashboard = () => {
    return (
        <div>
            <header>
                <TopHeader title='Dashboard'>
                     
                </TopHeader>
            </header>
            
            <main>
                <PageContent>
                    <DashboardCard name='Total Task' />
                </PageContent>
            </main>
            
            <footer></footer>
        </div>
    );
};

export default Dashboard;