import { Injectable } from '@angular/core';

@Injectable()
export class SociosService {

private socios:Socio []= [
    {
      categoria: 'secciones.socios.cat-serviciosTuristicos',
      etiqueta_filtro: "servicios_turisticos",
      titulo: "Lanín Turismo",
      detalle: 'secciones.socios.det-agencia',
      img: "./assets/img/lanin.webp",
      url: "https://www.sanmartindelosandesbureau.com/lanin"
    },
    {
      categoria: 'secciones.socios.cat-serviciosTuristicos',
      etiqueta_filtro: "servicios_turisticos",
      titulo: "Pireco Turismo",
      detalle: 'secciones.socios.det-agencia',
      img: "./assets/img/pireco.webp",
      url: "http://www.pirecoturismo.com/"
    },
    {
      categoria: 'secciones.socios.cat-serviciosTuristicos',
      etiqueta_filtro: "servicios_turisticos",
      titulo: "El Claro",
      detalle: 'secciones.socios.det-agencia',
      img: "./assets/img/elclaro.webp",
      url: "http://www.elclaroturismo.com.ar/en/"
    },
    {
      categoria: 'secciones.socios.cat-serviciosTuristicos',
      etiqueta_filtro: "servicios_turisticos",
      titulo: "Destino Andino",
      detalle: 'secciones.socios.det-agencia',
      img: "./assets/img/destinoandino.webp",
      url: "https://destinoandino.tur.ar/"
    },
    {
      categoria: 'secciones.socios.cat-serviciosTuristicos',
      etiqueta_filtro: "servicios_turisticos",
      titulo: "Lácar & Nonthue",
      detalle: 'secciones.socios.det-excursiones',
      img: "./assets/img/lacarnonthue.webp",
      url: "https://lagolacarynonthue.com/"
    },
    {
      categoria: 'secciones.socios.cat-serviciosTuristicos',
      etiqueta_filtro: "servicios_turisticos",
      titulo: "Corbet Rides",
      detalle: 'secciones.socios.det-cabalgatas',
      img: "./assets/img/cabalgata.jpg",
      url: ""
    },
    {
      categoria: 'secciones.socios.cat-hoteles',
      etiqueta_filtro: "hoteles",
      titulo: "Loi Suites",
      detalle: 'secciones.socios.det-hotel5',
      img: "./assets/img/loisuites.webp",
      url: "http://loisuites.com.ar/es/hotel/loi-suites-chapelco-hotel"
    },
    {
      categoria: 'secciones.socios.cat-hoteles',
      etiqueta_filtro: "hoteles",
      titulo: "Hotel Antiguos",
      detalle: 'secciones.socios.det-hotel3',
      img: "./assets/img/antiguos.webp",
      url: "http://www.hotelantiguos.com.ar/es/"
    },
    {
      categoria: 'secciones.socios.cat-hoteles',
      etiqueta_filtro: "hoteles",
      titulo: "Complejo Aspen",
      detalle: 'secciones.socios.det-hotel2Hoteria3',
      img: "./assets/img/aspen.webp",
      url: "https://www.hotelaspen.com.ar/"
    },
    {
      categoria: 'secciones.socios.cat-hoteles',
      etiqueta_filtro: "hoteles",
      titulo: "Hostería Monte Verde",
      detalle: 'secciones.socios.det-hosteria3',
      img: "./assets/img/monteverde.webp",
      url: "http://www.hosteriamonteverde.com.ar/"
    },
    {
      categoria: 'secciones.socios.cat-hoteles',
      etiqueta_filtro: "hoteles",
      titulo: "Hotel Le Village",
      detalle: 'secciones.socios.det-hotel3',
      img: "./assets/img/levillagehotel.webp",
      url: "http://www.hotellevillage.com.ar/"
    },
    {
      categoria: 'secciones.socios.cat-hoteles',
      etiqueta_filtro: "hoteles",
      titulo: "Melewe",
      detalle: 'secciones.socios.det-apart3',
      img: "./assets/img/melewe.webp",
      url: "http://www.melewe.com.ar/site/index/sanmartin"
    },
    {
      categoria: 'secciones.socios.cat-organizadores',
      etiqueta_filtro: "organizadores",
      titulo: "SHE Eventos",
      detalle: 'secciones.socios.det-opc',
      img: "./assets/img/she.webp",
      url: "http://sheventos.com.ar/"
    },
    {
      categoria: 'secciones.socios.cat-organizadores',
      etiqueta_filtro: "organizadores",
      titulo: "Eureka Eventos",
      detalle: 'secciones.socios.det-organizador',
      img: "./assets/img/eureka.webp",
      url: "https://www.holaeureka.com/"
    },
    {
      categoria: 'secciones.socios.cat-organizadores',
      etiqueta_filtro: "organizadores",
      titulo: "Deborah Dalbene",
      detalle: 'secciones.socios.det-organizador',
      img: "./assets/img/deborah.webp",
      url: ""
    },
    {
      categoria: 'secciones.socios.cat-organizadores',
      etiqueta_filtro: "organizadores",
      titulo: "Kitty Hue",
      detalle: 'secciones.socios.det-organizador',
      img: "./assets/img/kittyhue.webp",
      url: "https://www.facebook.com/kittyhueeventos/"
    },
    {
      categoria: 'secciones.socios.cat-organizadores',
      etiqueta_filtro: "organizadores",
      titulo: "NQN Eventos",
      detalle: 'secciones.socios.det-organizador',
      img: "./assets/img/nqneventos.webp",
      url: ""
    },
    {
      categoria: 'secciones.socios.cat-organizadores',
      etiqueta_filtro: "organizadores",
      titulo: "María José Revuelta",
      detalle: 'secciones.socios.det-coordinador',
      img: "./assets/img/silueta.webp",
      url: ""
    },
    {
      categoria: 'secciones.socios.cat-organizadores',
      etiqueta_filtro: "organizadores",
      titulo: "Paula Bertorello",
      detalle: 'secciones.socios.det-coordinador',
      img: "./assets/img/silueta.webp",
      url: ""
    },
    {
      categoria: 'secciones.socios.cat-salones',
      etiqueta_filtro: "salones",
      titulo: "Pórtico",
      detalle: 'secciones.socios.det-salon',
      img: "./assets/img/portico.webp",
      url: "http://www.porticoeventos.com.ar/contacto.htm"
    },
    {
      categoria: 'secciones.socios.cat-salones',
      etiqueta_filtro: "salones",
      titulo: "Le Village",
      detalle: 'secciones.socios.det-salon',
      img: "./assets/img/levillageeventos.webp",
      url: "https://www.hotellevillage.com.ar/eventos.html"
    },
    {
      categoria: 'secciones.socios.cat-catering',
      etiqueta_filtro: "varios",
      titulo: "Unser",
      detalle: 'secciones.socios.det-pasateleria',
      img: "./assets/img/unser.webp",
      url: "http://www.unsertraum.com.ar/"
    }
  ];


  constructor() {
    console.log("servicio listo para usar");
    }

  getSocios():Socio[]{
    return this.socios;
  }

  getSocio( idx: string ){
    return this.socios[idx];
  }

  buscarSocios( termino:string ){
    let sociosArr:Socio[]=[];
    termino=termino.toLowerCase();

    for (let socio of this.socios){
      let nombre=socio.titulo.toLowerCase();
      if (nombre.indexOf ( termino ) >= 0 ){
        sociosArr.push( socio )

      }
    }
    return sociosArr;
  }


}

export interface Socio {
  categoria: string;
  etiqueta_filtro: string;
  titulo: string;
  detalle: string;
  img: string;
  url: string;


}
