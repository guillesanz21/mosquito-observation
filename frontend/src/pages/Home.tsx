import axios from 'axios'
import React from 'react'
import MyTable from '../components/MyTable'
import { Form } from 'react-bootstrap'
import { createLogicalAnd } from 'typescript'
import ObservationDetail from '../components/ObservationDetail'

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
    const [observationIdDetail, setObservationIdDetail] = React.useState(null as number | null)

    const apiUrl = process.env.REACT_APP_API_URL;
    const apiObservationsUrl = `${apiUrl}/api/observations/`;

    const fetchObservations = async () => {
        let filterQuery = statusFilter !== "" ? `?status=${statusFilter}` : '';
        const { data } = await axios.get(`${apiObservationsUrl}${filterQuery}`);
        setObservations(data);
    };

    React.useEffect(() => {
        fetchObservations();
    }, [statusFilter]);

    React.useEffect(() => {
        const markAsCompleted = async () => {
            if (idToUpdate !== null) {
                await axios.patch(`${apiObservationsUrl}${idToUpdate}/`, {
                    status: 'complete'
                });
                setIdToUpdate(null);
            }
        };

        markAsCompleted().then(() => {
            fetchObservations();
        });
    }, [idToUpdate]);

    React.useEffect(() => {
        const fetchObservationDetail = async () => {
            if (observationIdDetail !== null) {
                const { data } = await axios.get(`${apiObservationsUrl}${observationIdDetail}/`);
                setObservations([data]);
            }
        }
    }, [observationIdDetail]);


    const filterByStatus = async (status: string) => {
        setStatusFilter(status);
    }

    const markAsCompleted = async (id: number) => {
        setIdToUpdate(id);
    }

    const onCloseDetail = () => {
        setObservationIdDetail(null);
        setStatusFilter('');
    }

    const viewDetail = (id: number) => {
        setObservationIdDetail(id);
    }

    const conditionalRender = () => {
        if (observationIdDetail === null) {
            return (
                <div className="observation-table">
                    <div className="filter">
                        <p>Do you want to filter by status?:</p>
                        <Form.Select aria-label="Default select example" onChange={(e) => filterByStatus(e.target.value)}>
                            <option value="">Open this select menu</option>
                            <option value="pending">Pending</option>
                            <option value="in-progress">In progress</option>
                            <option value="complete">Complete</option>
                        </Form.Select>

                    </div>
                    <MyTable observations={observations} markAsCompleted={markAsCompleted} viewDetail={viewDetail} />
                </div>
            )
        } else {
            return (
                <div className="observation-detail">
                    <ObservationDetail observation={observations[0]} onClose={onCloseDetail} />
                </div>
            )
        }
    }

    return (
        <>
            <div id="section">
                <h2>Mosquito Observations</h2>

                <div className="observations">
                    {conditionalRender()}
                </div>
            </div>
        </>
    )
}

export default Home
