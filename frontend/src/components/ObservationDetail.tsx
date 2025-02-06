import React from 'react'
import { Observation } from '../pages/Home'
import { Button } from 'react-bootstrap'

type Props = {
    observation: Observation,
    onClose: () => void
}

const ObservationDetail = ({ observation, onClose }: Props) => {
    return (
        <div>
            <p>Latitude: {observation.gps_latitude}</p>
            <p>Longitude: {observation.gps_longitude}</p>
            <p>Timestamp: {observation.timestamp}</p>
            <p>Status: {observation.status}</p>
            <img src={observation.picture_url} alt="Observation" />
            <Button onClick={onClose}>
                Close
            </Button>
        </div>

    )
}

export default ObservationDetail