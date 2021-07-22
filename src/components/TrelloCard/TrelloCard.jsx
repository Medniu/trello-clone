import React from "react"

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import "./TrelloCard.css";

const TrelloCard = ({ title, text, color }) => {

    return (
        <div className="card">
            <Card>
                <Typography>
                    {title}
                </Typography>
            </Card>
        </div>
    );
}

export default TrelloCard;