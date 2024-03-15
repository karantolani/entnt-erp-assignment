import Card from "./Card.jsx";
import {ReactComponent as ExternalImgSrc} from "../../assets/external-link.svg";
import {useNavigate} from "react-router-dom";

function InfoCard({title, to, value, growth}) {
    const navigate = useNavigate();

    function onInfoCardClick() {
        if (to)
            navigate(to);
    }

    return (
        <Card className="info-card" onClick={onInfoCardClick}>
            <h3 className="card-title-uppercase">{title}</h3>
            {to && <ExternalImgSrc />}
            <h2 className="info-card-value">{value}</h2>
            <span className="info-card-growth">{growth}</span>
        </Card>
    )
}

export default InfoCard;