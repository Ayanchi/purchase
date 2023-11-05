import * as React from "react";
import {useParams} from "react-router-dom"

const MonitoringInside = () => {
    const { id } = useParams();
    return (
        <div>
            id = {id}
        </div>
    );
};

export default MonitoringInside;