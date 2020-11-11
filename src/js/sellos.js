const SELLO_1 = {
  nombre: 'SMC Cartex (SN / DN)',
  id:'1',
  descripcion: 'Sello mecánico para bombas centrífugas químicas, bombas de vacío y compresores',
  imagen: '1.png',
  materiales: {
    giratorio: 'Cara del anillo giratorio: TC / SiC',
    estacionario: 'Cara del anillo estacionario: carbono / SiC / TC',
    elastomeros: 'Elastómeros: NBR / EPDM / Viton / Aflas / FFKM',
    resortes: 'Resortes: SS304 / SS316 / HC-276',
    pie: 'Piezas de metal: 410S / SS304 / SS316 / SS316L / Hastelloy'
  },
  parametros: {
    presion: 'Presión: 2.5 MPa o menos.',
    temperatura: 'Temperatura: - 40 ~ 180 ºC',
    velocidad: 'Velocidad lineal: 15 m/s o menos.',
  },
  ambitos: 'Ampliamente utilizado en el tratamiento de aguas, plantas de energía, metalurgia, procesamiento de alimentos, farmacia, ingeniería química, fertilizantes y fabricación de papel. Adecuado para bombas de agua limpia, bombas químicas, bombas de doble succión, bombas de pulpa de papel, compresores y otros dispositivos rotativos. Bueno para reemplazar el empaque de glándulas.'
}
const SELLO_2 = {
  nombre: 'SMC M7N, AKA M74 ',
  id:'2',
  descripcion: 'Sello mecánico para bombas centrífugas químicas, bombas de agua KSB / Kaiquan y bombas de doble succión',
  imagen:'2.png',
  materiales: {
    giratorio: 'Anillo giratorio: SiC / TC',
    estacionario: 'Anillo estacionario: Carbono / SiC / TC',
    elastomeros: 'Elastómeros: NBR / EPDM / Viton / FFKM',
    resortes: 'Resortes: SS304 / SS316 / PH17-4 / HC-276',
    pie: 'Piezas de metal: 410S / SS304 / SS316 / SS316L / Hastelloy'
  },
  parametros: {
    presion: 'Presión: 1.6 MPa o menos.',
    temperatura: 'Temperatura: - 40 ~ 200 ºC',
    velocidad: 'Velocidad lineal: 20 m/s o menos',
  },
  ambitos: 'Ampliamente utilizado en procesamiento químico, refinación de petróleo, ingeniería petroquímica, tratamiento de aguas residuales, farmacia y producción de alimentos. Diseñado para bombas químicas, bombas de agua, bombas de tornillo, bombas de aguas residuales, bombas de doble succión, equipos de fabricación de papel y otros dispositivos rotativos.'
}
const SELLO_3 = {
  nombre: 'SMC HJ92N',
  id:'3',
  descripcion: 'Sello mecánico para equipos de fabricación de papel y otras bombas industriales',
  imagen:'3.png',
  materiales: {
    giratorio: 'Cara del anillo giratorio: carbono / SiC / TC',
    estacionario: 'Cara del anillo estacionario: SiC / TC',
    elastomeros: 'Elastómeros: NBR / EPDM / Viton / Aflas',
    resortes: 'Resortes: SS304 / SS316 / PH17-4',
    pie: 'Piezas de metal: SS304 / SS316 / SS316L'
  },
  parametros: {
    presion: 'Presión: 0 ~ 2.5 MPa',
    temperatura: 'Temperatura: - 40 ~ 230 ºC',
    velocidad: 'Velocidad lineal: 20 m/s o menos.',
  },
  ambitos: 'Ampliamente utilizado en ingeniería química, producción de pulpa, cocción de pulpa y tratamiento de aguas residuales. Diseñado para bombas de pulpa de papel, bombas de aguas residuales, bombas químicas y otros dispositivos rotativos y trabajos.'
}
const SELLO_4 = {
  nombre: 'SMC (MG12/MG13) ',
  id:'4',
  descripcion: 'Sello mecánico para bombas de agua, motores sumergidos y bombas de tuberías',
  imagen:'4.png',
  materiales: {
    giratorio: 'Cara del anillo giratorio: CARBONO / SiC / TC',
    estacionario: 'Cara del anillo estacionario: Al2O2 / SiC / TC',
    elastomeros: 'Elastómeros: NBR / EPDM / Viton',
    resortes: 'Resortes: SS304 / SS316',
    pie: 'Piezas de metal: SS304 / SS316'
  },
  parametros: {
    presion: 'Presión: 1.0 MPa o menos.',
    temperatura: 'Temperatura: - 20 ~ 120 ºC',
    velocidad: 'Velocidad lineal: 10 m/s o menos.',
  },
  ambitos: 'Ampliamente utilizado principalmente en bombas de agua, motores sumergidos, bombas de tuberías, bombas de aguas residuales, equipos de vacío y otros dispositivos rotativos para el tratamiento de aguas residuales, suministro de agua de la ciudad, ingeniería química, farmacia, procesamiento de alimentos y fabricación de papel.'
}
const SELLO_5 = {
  nombre: 'SMC MG1',
  id:'5',
  descripcion: 'Sello mecánico para bombas de agua, bombas centrífugas, motores sumergidos, bombas de vacío y bombas de tuberías',
  imagen:'5.png',
  materiales: {
    giratorio: 'Cara del anillo giratorio: carbono / SiC / TC',
    estacionario: 'Cara del anillo estacionario: Al2O2 / SiC / TC',
    elastomeros: 'Elastómeros: NBR / EPDM / Viton',
    resortes: 'Resortes: SS304 / SS316',
    pie: 'Piezas de metal: SS304 / SS316'
  },
  parametros: {
    presion: 'Presión: 1.0 MPa o menos',
    temperatura: 'Temperatura: - 20 ~ 120 ºC',
    velocidad: 'Velocidad lineal: 10 m/s o menos.',
  },
  ambitos: 'Ampliamente utilizado en bombas de agua, bombas de tuberías, bombas de aguas residuales, motores sumergibles, equipos de vacío y otros dispositivos rotativos para el tratamiento de aguas residuales, suministro de agua de la ciudad, ingeniería química, farmacia, procesamiento de alimentos y fabricación de papel.'
}
const SELLO_6 = {
  nombre: 'SMC TIPO 21',
  id:'6',
  descripcion: 'Sello mecánico para bombas de agua limpia, bombas de tuberías y bombas de vacío',
  imagen:'6.png',
  materiales: {
    giratorio: 'Cara del anillo giratorio:  carbono / SiC / TC',
    estacionario: 'Cara del anillo estacionario: Al2O3 / SiC / TC',
    elastomeros: 'Elastómeros: NBR / EPDM / Viton',
    resortes: 'Resortes: SS304 / SS316',
    pie: 'Piezas de metal: SS304 / SS316'
  },
  parametros: {
    presion: 'Presión: 0.8 MPa o menos',
    temperatura: 'Temperatura: - 20 ~ 120 ºC',
    velocidad: 'Velocidad lineal: 10 m/s o menos.'
  },
  ambitos: 'Ampliamente utilizado en bombas de circulación de aceite y agua, bombas de tuberías y bombas de vacío para industrias como el tratamiento de aguas residuales y la fabricación de papel.'
}
const SELLO_7 = {
  nombre: 'SMC MG9',
  id:'7',
  descripcion: 'Sello mecánico para bombas de agua limpia, bombas de circulación y bombas de vacío',
  imagen:'7.png',
  materiales: {
    giratorio: 'Cara del anillo giratorio:  carbono / SiC / TC',
    estacionario: 'Cara del anillo estacionario: Al2O3 / SiC / TC',
    elastomeros: 'Elastómeros: NBR / EPDM / Viton',
    resortes: 'Resortes: SS304 / SS316',
    pie: 'Piezas de metal: SS304 / SS316'
  },
  parametros: {
    presion: 'Presión: 0.8 MPa o menos',
    temperatura: 'Temperatura: - 20 ~ 90 ºC',
    velocidad: 'Velocidad lineal: 10 m/s o menos.'
  },
  ambitos: 'Ampliamente utilizado en bombas centrífugas, bombas de tuberías, bombas de aguas residuales, motores sumergibles, bombas de tornillo, equipos de vacío y otros dispositivos rotativos para el tratamiento de aguas residuales, suministro de agua de la ciudad, ingeniería química, farmacia, procesamiento de alimentos y fabricación de papel.'
}
const SELLO_8 = {
  nombre: 'SMC 680',
  id:'8',
  descripcion: 'Sello mecánico de fuelle metálico',
  imagen:'8.png',
  materiales: {
    giratorio: 'Cara del anillo giratorio: carbono / SiC / TC',
    estacionario: 'Cara del anillo estacionario: SiC / TC',
    elastomeros: 'Elastómeros: SS316 / AM350 / Inconel 718 / HC-276',
    resortes: 'Resortes: SS304 / SS316 / HC-276',
    pie: 'Piezas de metal: SS316 / SS316L / 4J42 / Hastelloy'
  },
  parametros: {
    presion: 'Presión: - 0.1 ~ 2.5 MPa',
    temperatura: 'Temperatura: - 40 ~ 200 ºC',
    velocidad: 'Velocidad lineal: 15 m/s o menos.'
  },
  ambitos: 'Ampliamente utilizado en ingeniería petroquímica, refinación de petróleo, procesamiento químico, fabricación de fibra química, procesamiento de alimentos y bebidas, farmacia, termoelectricidad y fabricación de papel. Diseñado para bombas químicas, bombas de aceite, bombas de tornillo, compresores y equipos de extracción de aceite.'
}
const SELLO_9 = {
  nombre: 'SMC (M3/M377)',
  id:'9',
  descripcion: 'Sello mecánico M3 y M377 para bombas de agua limpia, bombas de circulación y bombas de vacío',
  imagen:'9.png',
  materiales: {
    giratorio: 'Cara del anillo giratorio: carbono / SiC / TC',
    estacionario: 'Cara del anillo estacionario: carbono / SiC / TC',
    elastomeros: 'Elastómeros:  NBR / Viton / EPDM / PTFE / FFKM',
    resortes: 'Resortes: SS304 / SS316',
    pie: 'Piezas de metal: 410S / SS304 / SS316 / SS316L'
  },
  parametros: {
    presion: 'Presión: 1.0 MPa o menos.',
    temperatura: 'Temperatura: - 20 ~ 180 ºC',
    velocidad: 'Velocidad lineal: 10 m/s o menos.',
  },
  ambitos: 'Ampliamente utilizado en bombas centrífugas químicas, bombas de agua limpia, bombas de aguas residuales, bombas de control de temperatura, bombas sumergidas y bombas de aceite de transferencia de calor. Principalmente utilizado en la refinación de petróleo, ingeniería química, transporte de productos químicos, tratamiento de aguas e industria química de fibras.'
}
const SELLO_10 = {
  nombre: 'SMC (C65/609)',
  id:'10',
  descripcion: 'Sello mecánico con fuelle metálico  para altas temperaturas',
  imagen:'10.png',
  materiales: {
    giratorio: 'Cara del anillo giratorio: carbono / SiC / TC',
    estacionario: 'Cara de anillo estacionaria: SiC / TC',
    elastomeros: 'Elastómeros: grafito expandido',
    resortes: 'Resortes: AM350 / Inconel 718 / HC-276',
    pie: 'Piezas de metal: 410S / SS316L / 4J42 / Hastelloy'
  },
  parametros: {
    presion: 'Presión: - 0.1 a 2.5 MPa o menos',
    temperatura: 'Temperatura: - 75 ~ 400 ºC',
    velocidad: 'Velocidad lineal: 15 m/s o menos',
  },
  ambitos: 'Se utiliza principalmente en bombas químicas, bombas de aceite, bombas de tornillo y equipos de extracción de aceite para industrias como ingeniería química, refinación de petróleo, fibra química, procesamiento de alimentos, farmacia, termoelectricidad y fabricación de papel.'
}
const SELLO_11 = {
  nombre: 'SMC 58U, 58B, 59B, 59U',
  id:'11',
  descripcion: 'Sellos mecánicos para bombas centrífugas químicas, bombas de vacío, compresores y calderas de reacción',
  imagen:'11.png',
  materiales: {
    giratorio: 'Cara del anillo giratorio: carbono / SiC / TC',
    estacionario: 'Cara de anillo estacionaria: Al2O3 / SiC / TC',
    elastomeros: 'Elastómeros: NBR / EPDM / Viton / PTFE / FFKM',
    resortes: 'Resortes: SS304 / SS316 / HC-276',
    pie: 'Piezas de metal: 410S / SS304 / SS316 / SS316L / Hastelloy'
  },
  parametros: {
    presion: 'Presión: 4.0 MPa o menos',
    temperatura: 'Temperatura: - 40 ~ 200 ºC',
    velocidad: 'Velocidad lineal: 25 m/s o menos',
  },
  ambitos: 'Se utiliza principalmente en bombas centrífugas químicas, bombas de vacío, compresores y calderas de reacción para industrias como procesamiento químico, refrigeración, refinación de petróleo, ingeniería petroquímica, tratamiento de aguas residuales, generación de electricidad, fabricación de papel y farmacia..'
}
const SELLO_12 = {
  nombre: 'SMC GR-SA',
  id:'12',
  descripcion: 'Sello mecánico para bombas de aguas residuales',
  imagen:'12.png',
  materiales: {
    giratorio: 'Cara del anillo giratorio: carbono / SiC / TC',
    estacionario: 'Cara de anillo estacionaria: SiC / TC',
    elastomeros: 'Elastómeros: NBR / Viton / EPDM',
    resortes: 'Resortes: SS304 / SS316',
    pie: 'Piezas de metal: 410S / SS304 / SS316'
  },
  parametros: {
    presion: 'Presión: 1.6 MPa o menos',
    temperatura: 'Temperatura: - 20 ~ 120 ºC',
    velocidad: 'Velocidad lineal: 15 m/s o menos',
  },
  ambitos: 'se utiliza principalmente en bombas de aguas residuales, bombas sumergibles, bombas de pulpa de papel y otros dispositivos rotativos para industrias como la construcción de ciudades, minería, plantas de energía y tratamiento de aguas residuales. Este componente puede funcionar como una alternativa al producto de sello original Gorman-Rupp y Grundfos GR-SA o al reemplazo del sello mecánico Tipo 891.'
}
const SELLO_14 = {
  nombre: 'SMC SB2',
  id:'14',
  descripcion: ' Sello mecánico para bombas de pulpa de papel y sistema de desulfuración de gases de combustión',
  imagen:'14.png',
  materiales: {
    giratorio: 'Cara del anillo giratorio: SiC / TC',
    estacionario: 'Cara de anillo estacionaria: carbono / SiC / TC',
    elastomeros: 'Elastómeros: NBR / EPDM / Viton / Aflas',
    resortes: 'Resortes: SS304 / SS316 / HC-276',
    pie: 'Piezas de metal: SS304 / SS316 / SS316L'
  },
  parametros: {
    presion: 'Presión: 1.5 MPa o menos',
    temperatura: 'Temperatura: - 20 ~ 180 ºC',
    velocidad: 'Velocidad lineal: 15 m/s',
  },
  ambitos: 'Diseñado para bombas de pulpa de papel, bombas de condensación, filtros, pantallas de presión y otros dispositivos rotativos para ingeniería química, fabricación de pulpa y filtrado y tratamiento de aguas residuales.'
}
const SELLO_15 = {
  nombre: 'SMC 2100',
  id:'15',
  descripcion: 'Sellos mecánicos para bombas centrífugas químicas, bombas de vacío, compresores y calderas de reacción',
  imagen:'15.png',
  materiales: {
    giratorio: 'Cara del anillo giratorio: carbono / SiC / TC',
    estacionario: 'Cara de anillo estacionaria: Al2O3 / SiC / TC',
    elastomeros: 'Elastómeros: NBR / EPDM / Viton',
    resortes: 'Resortes: SS304 / SS316',
    pie: 'Piezas de metal: SS304 / SS316'
  },
  parametros: {
    presion: 'Presión:1.2 MPa o menos',
    temperatura: 'Temperatura: - 20 ~ 120 ºC',
    velocidad: 'Velocidad lineal: 10 m/s o menos',
  },
  ambitos: 'Se utiliza principalmente en bombas centrífugas, bombas de vacío, motores sumergidos, compresores, equipos de agitación y desaceleradores para el tratamiento de aguas residuales, ingeniería química, farmacia, fabricación de papel y procesamiento de alimentos. Este componente puede funcionar como una alternativa al producto similar de John Crane.'
}

const sellos = [SELLO_1, SELLO_2, SELLO_3, SELLO_4, SELLO_5, SELLO_6, SELLO_7, SELLO_8, SELLO_9, SELLO_10, SELLO_11, SELLO_12, SELLO_14, SELLO_15]

const productos = document.getElementById('productos')
console.log(productos)
const h1 = document.getElementById('titulo')

function anexarSellosDescripcion(SELLO){
  return `<div class="card card-repuesto p-0">
            <!-- Card image -->
            <a href="sellos.html#${SELLO.id}" class="card-imagen position-relative overflow-hidden">
              <img class="card-img-top" src="../src/img/${SELLO.imagen}" alt="SELLO">
              <div class="description">
                <h5 class="text-center font-weight-bold pb-1">${SELLO.nombre}</h5>
                <hr class="w-25 mb-3">
                <p class="text-center font-weight-bold px-3">
                  ${SELLO.descripcion}
                </p>
              </div>
            </a>
            <!-- Card content -->
            <a href="sellos.html#${SELLO.id}" class="card-body descripcion-a">
              <h5 class="my-3 font-weight-bold">${SELLO.nombre}</h5>
            </a>
          </div>` 
}
function anexarSellosTodo(SELLO){
  return `<div id="${SELLO.id}" class="products-grid py-5">
            <div class="imagen-producto card-imagen position-relative overflow-hidden">
              <img class="img-fluid" src="../src/img/${SELLO.imagen}" alt="">
              <div class="description">
                <h5 class="text-center font-weight-bold pb-1">${SELLO.nombre}</h5>
                <hr class="w-25 mb-3">
                <p class="text-center font-weight-bold px-3">
                  ${SELLO.descripcion}
                </p>
              </div>
            </div>
            
            <div class="parrafo-1">
              
              <h5 class="font-weight-bold">Materiales:</h5>
              <ul>
                <li>${SELLO.materiales.giratorio}</li>
                <li>${SELLO.materiales.estacionario}</li>
                <li>${SELLO.materiales.elastomeros}</li>
                <li>${SELLO.materiales.resortes}</li>
                <li>${SELLO.materiales.pie}</li>
              </ul>
            </div>
            <div class="parrafo-2">
              <h5 class="font-weight-bold">Parámetros de operación:</h5>
              <ul>
                <li>${SELLO.parametros.presion}</li>
                <li>${SELLO.parametros.temperatura}</li>
                <li>${SELLO.parametros.velocidad}</li>
              </ul>
            </div>
            <div class="parrafo-3">
              <h5 class="font-weight-bold">Ámbitos de aplicación:</h5>
              <p class="pl-md-3">${SELLO.ambitos}</p>
              
              </div>
          </div>`
}
function crearHtml(SELLO){
  // console.log(SELLO)
  const html = document.implementation.createHTMLDocument();

  if (h1.innerHTML == 'Productos') {
    // console.log(anexarSellosTodo(SELLO))
    html.body.innerHTML = anexarSellosTodo(SELLO)
  }else if (h1.innerHTML == 'Galeria') {
    html.body.innerHTML = anexarSellosDescripcion(SELLO)
  }
  console.log(html.body.children[0])
  productos.append(html.body.children[0])
}

for (let i = 0; i < sellos.length; i++){
  // console.log(sellos[i])
  crearHtml(sellos[i]);
}