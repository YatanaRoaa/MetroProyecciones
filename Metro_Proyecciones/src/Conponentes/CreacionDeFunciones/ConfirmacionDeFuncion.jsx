import '../../assets/css/confirmacionDeFuncion.css'
import { Link } from 'react-router-dom'
const ConfirmacionDeFuncion = ({
    nombrePelicula,
    costoBoleto,
    Horario,
    DuracionF,
    FechaF,
    codigoFuncion
}) => {
    return (
        <>
            <section className='confirmacion-de-funcion'>
                <div className='confirmacion-contenido'>
                    <div className="confirmacion-nombre">
                        <p className='p-descripcion'>Titulo de la Función</p>
                        <p className='p-datos'>{nombrePelicula}</p>
                    </div>
                    <div className="confirmacion-boleto">
                        <p className='p-descripcion'>Costo de boleto</p>
                        <p className='p-datos'>{costoBoleto}</p>
                    </div>
                    <div className="confirmacion-horario">
                        <p className='p-descripcion'>Horario</p>
                        <p className='p-datos'>{Horario}</p>
                    </div>
                    <div className="confirmacion-Duracion">
                        <p className='p-descripcion'>Duracion</p>
                        <p className='p-datos'>{DuracionF}</p>
                    </div>
                    <div className="confirmacion-fecha">
                        <p className='p-descripcion'>Fecha</p>
                        <p className='p-datos'>{FechaF}</p>
                    </div >
                    <div className="confirmacion-funcion">
                        <p className='p-descripcion'>Codigo de funcion</p>
                        <p className='p-datos'>{codigoFuncion}</p>
                    </div>
                    <div className="confirmacion-confirmar">
                         <Link to="/" ><button className='button-cancelar'>Cancelar</button></Link>   
                        <button className='button-confirmar'>Confirmar</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ConfirmacionDeFuncion