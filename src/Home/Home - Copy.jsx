import "./Home.css"
import { inventario } from "../Utils/medicamentos"

export function Home() {

    //ZONA DE MANIPULACION DE DATOS

    let nombrePaciente="Juan Pablo Muñetón Giraldo"
    let sedePaciente="Suramericana"
    console.log(inventario)

    /* Los arreglos los puedo manipular para controlar qué información voy a presentar
    
    1. FUNCION DE FILTRADO DE DATOS
    Condición de filtrado (Pregunta (SI/NO))
    */

    let resultado = inventario.filter (function (auxiliar) {
        return (auxiliar.nombre=="acetaminofen" && auxiliar.dosis==10)
    })

    console.log(resultado)


    return (  //ZONA DE RENDERIZADO

      <>
        <section className="container mt-5">
        
          {/* mt-5  = margin top 5rem ;  my = margin  y (top and bottom) ; mx = margin x (left and right) ; ms = margin start ; me = margin end */}
          <div className="row">
            {/* div.col-12.col-md-6 */}

            <div className="col-12 col-md-6">
                <h3 className="fuente">Servicios a un clic</h3>
                <h2 className="text-muted"> HOLA <span className="fuente"> <b><u> {nombrePaciente} </u></b></span></h2>

              {/* alt + z para organizar el texto */}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                dicta nemo, saepe reiciendis distinctio unde, delectus veritatis
                amet, consectetur quidem soluta? Repellat, debitis rem!
                Obcaecati, officiis. Et quisquam, exercitationem accusamus
                voluptas at reprehenderit cumque autem eaque porro corrupti eius
                culpa rem esse? Iste facilis eaque, nulla repellendus quos aut
                eum?
              </p>
            </div>

            <div className="col-12 col-md-6">
              <select class="form-select" aria-label="Default select example">
                <option selected>Tu Grupo Familiar</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              

                <div className="row">
                    <div className="col-12 col-md-2 mt-5">
                    <i class="bi bi-person-walking fs-1 fuente"></i>
                    </div>

                    <div className="col-12 col-md-10 mt-5">
                        <br />
                        <p>Doctor Miguel Restrepo Toriyama</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-2 mt-5">
                    <i class="bi bi-person-circle fs-1 fuente"></i>
                    </div>

                    <div className="col-12 col-md-10 mt-5">
                        <br />
                        <p>TIPO DE AFILIADO</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-2 mt-5">
                    <i class="bi bi-suitcase-lg-fill fs-1 fuente"></i>
                    </div>

                    <div className="col-12 col-md-10 mt-5">
                        <br />
                        <p>ESTADO DE AFILIACION</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-2 mt-5">
                    <i class="bi bi-building fs-1 fuente"></i>
                    </div>

                    <div className="col-12 col-md-10 mt-5">
                        <div className="row"> </div>
                        <p>IPS ACTUAL</p>
                    </div>
                </div>



            </div>
          </div>
        </section>
      </>
    );
    
}