import Header from '../Conponentes/header'
import './../assets/css/RegistrarFuncion.css'
import ConfirmacionDeFuncion from '../Conponentes/CreacionDeFunciones/ConfirmacionDeFuncion'
import { useState } from 'react'



const RegistrarFuncion = () => {
    const [confirmacion, setConfirmacion] = useState(false)

    const handleClickCancelar = () =>{
        setConfirmacion(false)
        console.log('click')
    }

    const handleClickConfirmar = () =>{
        console.log('Funcion registrada en la base de datos')
        setConfirmacion(false)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setConfirmacion(!confirmacion)
    }
    return (
        <>
            <Header nombreTitulo={'Registrar Función'} />
            <section className='box-contenido'>
                <form className='main-content'>
                    <fieldset className='registro-funcion-form-nombre'>
                        <label htmlFor="nombreFuncion">Nombre</label>
                        <input 
                        className='input-text input-text-nombre'
                        id="nombreFuncion" 
                        type="text" 
                        placeholder="The GoodFather"
                    />
                    </fieldset>

                    <fieldset className='registro-funcion-form-fecha'>
                        <label htmlFor="fecha">Fecha</label>
                        <input name="fecha" type="text" className='input-text-fecha'/>
                        <input name="fecha" type="text" className='input-text-fecha'/>
                        <input name="fecha" type="text" className='input-text-fecha'/>                        
                    </fieldset> 

                    <fieldset className='registro-funcion-form-horario'>
                        <label >Horario</label>
                        <button type="button" >10:00 </button>
                        <button type="button" >13:00 </button>
                        <button type="button" >16:00 </button>
                        <button type="button" >19:00 </button>
                    </fieldset>
                    
                    <fieldset className='registro-funcion-form-boleto'>
                        <label htmlFor="costoBoleto">Costo De Boleto</label>
                        <input id="costoBoleto" type="text" className='input-text'/>
                    </fieldset>

                    <fieldset className='registro-funcion-form-duracion'>
                        <label htmlFor="duracion">Duración</label>
                        <input id="duracion" type="text" className='input-text'/>
                        <span>Min</span>
                    </fieldset>

                    <fieldset className='registro-funcion-form-submit'>
                        <button>Cancelar</button>
                        <input type="submit" value="Siguiente" onClick={handleClick}/>

                    </fieldset>
                </form>
            </section>

            {confirmacion?    
                <ConfirmacionDeFuncion
                nombrePelicula={'El hombre de la mancha'}
                costoBoleto={'100'}
                Horario={'10:00'}
                DuracionF={'120'}
                FechaF={'2022-01-01'}
                codigoFuncion={'123456789'}
                handleClickCancelar={handleClickCancelar}
                handleClickConfirmar={handleClickConfirmar}
                />
                :
                <></>
            }
            
        </>
    )
}

export default RegistrarFuncion