import React from 'react';


const SeatSelection = ({ seatCount, handleSeatChange, ticketPrice }) => {
    return (
        <div className="seat-selection-container">
            <h2>NÚMERO DE ASIENTOS: {seatCount}</h2>
            <div className="seat-controls">
                <button onClick={() => handleSeatChange(-1)}>-</button>
                <button onClick={() => handleSeatChange(1)}>+</button>
            </div>
            <h2>PRECIO DE BOLETO: ${(seatCount * ticketPrice).toFixed(2)}</h2>
        </div>
    );
};

export default SeatSelection;
