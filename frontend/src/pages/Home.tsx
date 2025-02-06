import axios from 'axios'
import React from 'react'
import MyTable from '../components/MyTable'

type Props = {}
export type Observation = {
    id: number,
    gps_latitude: string,
    gps_longitude: string,
    picture_url: string,
    timestamp: string,
    status: string
}


const Home = (props: Props) => {
    const [observations, setObservations] = React.useState([] as Observation[])
    const [idToUpdate, setIdToUpdate] = React.useState(null as number | null)

    const apiUrl = process.env.REACT_APP_API_URL;
    const apiObservationsUrl = `${apiUrl}/api/observations/`;

    React.useEffect(() => {
        const fetchObservations = async () => {
            const { data } = await axios.get(apiObservationsUrl);
            setObservations(data);
        };

        fetchObservations();
    }, []);

    return (
        <>
            <div id="section">
                <h2>Mosquito Observations</h2>
                <MyTable observations={observations} />
            </div>
        </>
    )
}

export default Home
