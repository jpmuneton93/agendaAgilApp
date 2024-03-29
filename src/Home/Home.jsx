import "./Home.css"

import basedatos from "../Utils/basedatos.json"

export function Home() {

  console.log(basedatos[0])


    return (  //ZONA DE RENDERIZADO

      <>
        <section className="container mt-5">
        
          {/* mt-5  = margin top 5rem ;  my = margin  y (top and bottom) ; mx = margin x (left and right) ; ms = margin start ; me = margin end */}
          <div className="row">
            {/* div.col-12.col-md-6 */}

            <div className="col-12 col-md-6">
                <h3 className="fuente">Servicios a un clic</h3>
                <h2 className="text-muted"> HOLA <span className="fuente"> <b><u> {basedatos[0].nombreUsuario} </u></b></span></h2>

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
                    <i class="bi bi-heart-pulse-fill fs-1 fuente"></i>
                    </div>

                    <div className="col-12 col-md-10 mt-5">
                        <br />
                        <p>MÉDICO DE FAMILIA</p>
                        <p> {basedatos[0].medicoDeFamilia} </p>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 col-md-2 mt-5">
                    <i class="bi bi-person-circle fs-1 fuente"></i>
                    </div>

                    <div className="col-12 col-md-10 mt-5">
                        <br />
                        <p>TIPO DE AFILIADO</p>
                        <p> {basedatos[0].grupoDeIngreso} </p>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 col-md-2 mt-5">
                    <i class="bi bi-suitcase-lg-fill fs-1 fuente"></i>
                    </div>

                    <div className="col-12 col-md-10 mt-5">
                        <br />
                        <p>ESTADO DE AFILIACION</p>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 col-md-2 mt-5">
                    <i class="bi bi-building fs-1 fuente"></i>
                    </div>

                    <div className="col-12 col-md-10 mt-5">
                        <div className="row"> </div>
                        <p>IPS ACTUAL</p>
                        <p> {basedatos[0].ips} </p>
                    </div>
                </div>


            </div>
          </div>
        </section>

        <hr />

        <section className="container my-5">
          <div className="row">
            <div className="col-12 col-md-5">
              <h5>PACIENTE {basedatos[0].nombreUsuario}, éstas son tus próximas citas:</h5>

            </div>
          </div>
        </section>

        <hr />

        <section className="container">
          <div className="row row-cols-1 row-cols-md-3">
            {
              basedatos[0].citasMedicas.map(function(cita){
                return (
                  <div className="col">
                    <div className="card h-100 shadow px-2">
                      <h3> {cita.especialidad} </h3>
                      <h4> Fecha: {cita.fecha} </h4>
                      <h5> {cita.direccion} </h5>

                    </div>
                  </div>
                )
              })
            }

          </div>
        </section>

        
      </>
    );
    
}