import axios from 'axios'
import React from 'react'
import MyTable from '../components/MyTable'
import { Form } from 'react-bootstrap'
import { createLogicalAnd } from 'typescript'

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
    const [statusFilter, setStatusFilter] = React.useState('')
    const [idToUpdate, setIdToUpdate] = React.useState(null as number | null)

    const apiUrl = process.env.REACT_APP_API_URL;
    const apiObservationsUrl = `${apiUrl}/api/observations/`;

    React.useEffect(() => {
        const fetchObservations = async () => {
            let filterQuery = statusFilter !== "" ? `?status=${statusFilter}` : '';
            console.log(`${apiObservationsUrl}${filterQuery}`)
            const { data } = await axios.get(`${apiObservationsUrl}${filterQuery}`);
            setObservations(data);
        };

        fetchObservations();
    }, [statusFilter]);


    const filterByStatus = async (status: string) => {
        setStatusFilter(status);
    }

    return (
        <>
            <div id="section">
                <h2>Mosquito Observations</h2>

                <div className="filter">
                    <p>Do you want to filter by status:</p>
                    <Form.Select aria-label="Default select example" onChange={(e) => filterByStatus(e.target.value)}>
                        <option value="">Open this select menu</option>
                        <option value="pending">Pending</option>
                        <option value="in-progress">In progress</option>
                        <option value="complete">Complete</option>
                    </Form.Select>

                </div>
                <MyTable observations={observations} />
            </div>
        </>
    )
}

export default Home
