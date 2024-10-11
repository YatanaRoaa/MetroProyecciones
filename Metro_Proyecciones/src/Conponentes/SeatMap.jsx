import React from 'react';
import '../assets/css/SeatMap.css';

const SeatMap = ({ selectedSeats, setSelectedSeats }) => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const columns = Array.from({ length: 11 }, (_, i) => i + 1);

    const toggleSeatSelection = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    return (
        <div className="seat-map-container">
            {rows.map((rowLabel) => (
                <div key={rowLabel} className="seat-row">
                    <div className="seat-row-label">{rowLabel}</div>
                    {columns.map((colNumber) => {
                        const seatId = `${rowLabel}${colNumber}`;
                        return (
                            <button
                                key={seatId}
                                className={`seat ${selectedSeats.includes(seatId) ? 'selected' : ''}`}
                                onClick={() => toggleSeatSelection(seatId)}
                            >
                                {colNumber}
                            </button>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default SeatMap;
