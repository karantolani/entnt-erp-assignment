import "./Dashboard.css";
import InfoCard from "../components/card/InfoCard.jsx";
import SalesOverviewCard from "../components/card/SalesOverviewCard.jsx";
import Page from "../components/Page.jsx";

function Dashboard() {
    return (
        <Page heading="Dashboard" className="Dashboard">
            <InfoCard title="Total Products" value="1000" growth="+23.8%" to="products"/>
            <InfoCard title="Last 30 Days Orders" value="500" growth="+50%" to="orders"/>
            <InfoCard title="Total Customers" value="732" growth="+40%"/>
            <InfoCard title="Total Income" value="$505,532.80" growth="+50%"/>
            <SalesOverviewCard />
        </Page>
    )
}

export default Dashboard;