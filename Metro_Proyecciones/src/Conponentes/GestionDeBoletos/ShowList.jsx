import React from 'react';


const ShowList = ({ shows, setSelectedShow, selectedShow }) => {
    return (
        <div className="show-list-container">
            <table>
                <thead>
                    <tr>
                        <th>TÍTULO</th>
                        <th>FECHA Y HORA</th>
                        <th>LUGARES DISPONIBLES</th>
                    </tr>
                </thead>
                <tbody>
                    {shows.map((show, index) => (
                        <tr 
                            key={index} 
                            className={selectedShow === index ? 'selected' : ''} 
                            onClick={() => setSelectedShow(index)}
                        >
                            <td>{show.title}</td>
                            <td>{`${show.date} ${show.time}`}</td>
                            <td>{show.availableSeats}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowList;
