import { useState } from "react"
import { useNavigate } from "react-router-dom"

import basedatosusuarios from "../Utils/basedatosusuarios.json"

import Swal from 'sweetalert2'

export function Formulario(){

    const[verCedula, guardarCedula] =  useState("")
    const[verContraseña, guardarContraseña] =  useState("")

    //para navegar entre componentes debo declarar una variable que almanece el hook

    let enrutador=useNavigate()

    function procesarFormulario(evento){
        //qué hago si le hacen clic al botón del formulario?
        evento.preventDefault() //evita que se recargue la pagina al enviar el formulario

        //buscamos coincidencias entre lo que lo que escribe el usuario en el formulario y el json de la BD
        let busqueda = basedatosusuarios.find(function(usuario){
            return(usuario.documento==verCedula)
        })
        if (busqueda==undefined) {
            //acá va el error
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            
        } else {
            //voy a enrutar otro componente (¿Cómo lanzo un componente desde otro otro?)
        enrutador("/home") 
        }
        
        
    }


    return(
        <>
            <section className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-6">
                        <img src="../../src/assets/TIGRE-PNG.png" alt="" className="img-fluid" width={250}/> {/* img-fluid permite que la imagen sea responsive */}
                        <form className="border rounded p-4" onSubmit={procesarFormulario}>
                            <h2>Controla tu salud</h2>
                            
                            <div class="input-group mb-3 mt-5">
                            <span class="input-group-text" id="basic-addon1"> <i class="bi bi-person-vcard-fill"></i> </span>
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Número cédula" 
                                id="identificacion"
                                onChange={function(evento){guardarCedula(evento.target.value)}}
                            />
                            </div>

                            <div class="input-group mb-3 mt-2">
                            <span class="input-group-text" id="basic-addon1"> <i class="bi bi-key-fill"></i> </span>
                            <input 
                                type="password" 
                                class="form-control" 
                                placeholder="Contraseña" 
                                id="contraseña"
                                onChange={function(evento){guardarContraseña(evento.target.value)}}
                            />
                            </div>

                            <button type="submit" className="btn btn-primary"> Ingresar {" "} </button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}