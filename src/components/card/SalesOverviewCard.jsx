import Card from "./Card.jsx";
import {Line} from "react-chartjs-2";
import {CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Title, Tooltip} from "chart.js";


Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
            data: [55, 23, 96, 24, 42, 11, 20, 81, 63, 22, 30, 90],
            // you can set indiviual colors for each bar
            borderColor: "#1ba39c",
            borderWidth: 2,
        }
    ]
}

function SalesOverviewCard() {
    return (
        <Card className="sales-card">
            <h3 className="card-heading">Sales Overview</h3>
            <Line
                data={data}
                height={"70px"}
                width={"100vw"}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false,
                            font: {
                                family: "'Open Sans', sans-serif;"
                            }
                        }
                    }
                }} />
        </Card>
    )
}

export default SalesOverviewCard;