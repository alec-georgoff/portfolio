import * as d3 from 'd3';
import rideJson from '../documents/test-ride.json';
import { LineString } from 'geojson';

const RideDisplay = () => {
    const data = rideJson.features[0].geometry as LineString;
    const projection = d3.geoMercator();
    projection.fitSize([600, 600], data);
    projection.angle(0);
    const path = d3.geoPath(projection);
    const str = path(data);

    return (
        <div>
            <svg style={{ width: 600, height: 600 }}>
                <path
                    className="path"
                    d={str?.toString() || undefined}
                    fill="none"
                    stroke="red"
                    pathLength={1}
                />
            </svg>
        </div>
    );
};

export default RideDisplay;
