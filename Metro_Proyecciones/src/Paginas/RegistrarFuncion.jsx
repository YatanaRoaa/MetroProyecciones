import Header from '../Conponentes/header'
import './../assets/css/RegistrarFuncion.css'

const RegistrarFuncion = () => {
    return (
        <>
            <Header nombreTitulo={'Registrar Función'} />
            <section className='registro-funcion'>
                <form className='registro-funcion-form'>
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
                        <input type="submit" value="Enviar" />

                    </fieldset>
                </form>
            </section>
        </>
    )
}

export default RegistrarFuncion