import React, { useState } from 'react';
import Header from '../Conponentes/header';
import FilterButtons from '../Conponentes/GestionDeBoletos/FilterButtons';
import ShowList from '../Conponentes/GestionDeBoletos/ShowList';
import SeatSelection from '../Conponentes/GestionDeBoletos/SeatSelection'
import SeatMap from '../Conponentes/GestionDeBoletos/SeatMap';
import ActionButtons from '../Conponentes/GestionDeBoletos/ActionButtons';
import '../Conponentes/GestionDeBoletos/cabeza.css';

const Gestiondeboletos = () => {
    const [selectedShow, setSelectedShow] = useState(null);
    const [seatCount, setSeatCount] = useState(0);
    const ticketPrice = 50.00;

    const shows = [
        { title: 'The Godfather', date: '11-10-2024', time: '16:00 PM', availableSeats: 20 },
        { title: 'The Godfather', date: '12-10-2024', time: '19:00 PM', availableSeats: 48 },
        { title: 'The Godfather', date: '14-10-2024', time: '10:00 AM', availableSeats: 50 },
    ];

    const handleSeatChange = (delta) => {
        setSeatCount(Math.max(0, seatCount + delta));
    };

    return (
        <div className="gestion-boletos-page">
            <TicketHeader />
            <FilterButtons />
            <ShowList shows={shows} setSelectedShow={setSelectedShow} selectedShow={selectedShow} />
            <SeatSelection seatCount={seatCount} handleSeatChange={handleSeatChange} ticketPrice={ticketPrice} />
            <SeatMap />
            <ActionButtons />
        </div>
    );
};

export default Gestiondeboletos;
