import '../assets/css/Gestiondeboletos.css';
import { useState } from 'react';
import Header from '../Conponentes/header';
import MiniMenu from '../Conponentes/MiniMenu';
import ShowList from '../Conponentes/ShowList';
import SeatMap from '../Conponentes/SeatMap';
import ActionButtons from '../Conponentes/ActionButtons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ConfirmationScreen from '../Conponentes/ConfirmationScreen';

const Gestiondeboletos = () => {
    const [selectedShow, setSelectedShow] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]); 
    const [seatCount, setSeatCount] = useState(0);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [searchQuery, setSearchQuery] = useState(''); 
    const [selectedDate, setSelectedDate] = useState(null); 
    const ticketPrice = 50.00;

    const shows = [
        { title: 'The Roblox', date: '11-10-2024', time: '16:00 PM', availableSeats: 20 },
        { title: 'The Furros', date: '12-10-2024', time: '19:00 PM', availableSeats: 48 },
        { title: 'The Zotopia', date: '14-10-2024', time: '10:00 AM', availableSeats: 50 },
    ];

    
    const filteredShows = shows.filter(show => {
        const matchesTitle = show.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDate = selectedDate ? show.date === selectedDate.toLocaleDateString('en-GB') : true;
        return matchesTitle && matchesDate;
    });

    const handleSeatChange = (delta) => {
        setSeatCount(Math.max(0, seatCount + delta));
    };

    const toggleSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    };

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    const handleNextClick = () => {
        if (selectedShow && selectedSeats.length > 0) { 
            setShowConfirmation(true);
        } else {
            alert("Seleccione una función y al menos un asiento.");
        }
    };

    const handleBack = () => {
        setShowConfirmation(false);
    };

    const handleConfirm = () => {
        alert('Compra confirmada');
        setShowConfirmation(false);
    };

    return (
        <>
            <div className="header-container">
                <MiniMenu />
                <Header nombreTitulo={'Venta de Boletos'} />
            </div>
            <section className='gestion-boletos'>
                <div className='gestion-boletos-contenido'>
                    <div className="gestion-boletos-showlist">
                        <div className="showlist-filters">
                            <button className="filter-button" onClick={toggleSearchBar}>Buscar Título</button>
                            <button className="filter-button" onClick={toggleCalendar}>Buscar Fecha</button>
                        </div>
                        {showSearchBar && (
                            <input 
                                type="text" 
                                className="search-bar" 
                                placeholder="Ingrese el título..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} 
                            />
                        )}
                        {showCalendar && (
                            <div className="datepicker-container">
                                <DatePicker 
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)} 
                                    inline
                                />
                            </div>
                        )}
                        <ShowList 
                            shows={filteredShows} 
                            selectedShow={selectedShow} 
                            setSelectedShow={setSelectedShow} 
                        />
                    </div>

                    <div className="gestion-boletos-seat-selection-container">
                        <div className="seat-selection-info">
                            <div className="seat-selection-header">
                                <h2>Número de Asientos: {selectedSeats.length}</h2>
                                <h2>Precio del Boleto: ${(selectedSeats.length * ticketPrice).toFixed(2)}</h2>
                            </div>
                            <SeatMap selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
                        </div>
                    </div>
                </div>
                <ActionButtons onNext={handleNextClick} />
            </section>

            {showConfirmation && (
                <ConfirmationScreen
                    title={selectedShow?.title || "Función no seleccionada"}
                    seats={selectedSeats}
                    time={selectedShow?.time || "Hora no disponible"}
                    total={(selectedSeats.length * ticketPrice).toFixed(2)}
                    codes={selectedSeats.map((seat, index) => `050505505${index + 1}`)}
                    onBack={handleBack}
                    onConfirm={handleConfirm}
                />
            )}
        </>
    );
};

export default Gestiondeboletos;

