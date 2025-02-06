import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { Observation } from '../pages/Home';

type MyTableProps = {
    observations: Observation[],
}

const MyTable = ({ observations }: MyTableProps) => {
    // Render the table
    const renderTable = () => {
        return observations.map((item, index) => {
            return (
                <tr key={index}>
                    {/* TODO: Date from timestamp to YYYY-MM-HH - HH-MM */}
                    <td>{item.timestamp}</td>
                    <td>{item.gps_latitude}</td>
                    <td>{item.gps_longitude}</td>
                    <td>{item.timestamp}</td>
                    <td>{item.status}</td>
                    <td>
                        <Button>Mark as completed</Button>
                    </td>
                </tr>
            )
        });
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderTable()}
            </tbody>
        </Table>
    )
}

export default MyTable