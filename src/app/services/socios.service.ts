import { Injectable } from '@angular/core';

@Injectable()
export class SociosService {

private socios:Socio []= [
    {
      categoria: "Servicios Turísticos",
      etiqueta_filtro: "servicios_turisticos",
      titulo: "Lanín Turismo",
      detalle: "Agencia de viajes y turismo",
      img: "./assets/img/lanin.webp",
      url: "https://www.sanmartindelosandesbureau.com/lanin"
    },
    {
      categoria: "Servicios Turísticos",
      etiqueta_filtro: "servicios_turisticos",
      titulo: "Pireco Turismo",
      detalle: "Agencia de viajes y turismo",
      img: "./assets/img/pireco.webp",
      url: "http://www.pirecoturismo.com/"
    },
    {
      categoria: "Servicios Turísticos",
      etiqueta_filtro: "servicios_turisticos",
      titulo: "El Claro",
      detalle: "Agencia de viajes y turismo",
      img: "./assets/img/elclaro.webp",
      url: "http://www.elclaroturismo.com.ar/en/"
    },
    {
      categoria: "Servicios Turísticos",
      etiqueta_filtro: "servicios_turisticos",
      titulo: "Destino Andino",
      detalle: "Agencia de viajes y turismo",
      img: "./assets/img/destinoandino.webp",
      url: "https://destinoandino.tur.ar/"
    },
    {
      categoria: "Servicios Turísticos",
      etiqueta_filtro: "servicios_turisticos",
      titulo: "Lácar & Nonthue",
      detalle: "Excursiones Turísticas de Navegación Lacustre",
      img: "./assets/img/lacarnonthue.webp",
      url: "https://lagolacarynonthue.com/"
    },
    {
      categoria: "Servicios Turísticos",
      etiqueta_filtro: "servicios_turisticos",
      titulo: "Corbet Rides",
      detalle: "Cabalgatas",
      img: "./assets/img/cabalgata.jpg",
      url: ""
    },
    {
      categoria: "Hoteles",
      etiqueta_filtro: "hoteles",
      titulo: "Loi Suites",
      detalle: "Hotel *****",
      img: "./assets/img/loisuites.webp",
      url: "http://loisuites.com.ar/es/hotel/loi-suites-chapelco-hotel"
    },
    {
      categoria: "Hoteles",
      etiqueta_filtro: "hoteles",
      titulo: "Hotel Antiguos",
      detalle: "Hotel ***",
      img: "./assets/img/antiguos.webp",
      url: "http://www.hotelantiguos.com.ar/es/"
    },
    {
      categoria: "Hoteles",
      etiqueta_filtro: "hoteles",
      titulo: "Complejo Aspen",
      detalle: "Hotel ** y Hostería ***",
      img: "./assets/img/aspen.webp",
      url: "https://www.hotelaspen.com.ar/"
    },
    {
      categoria: "Hoteles",
      etiqueta_filtro: "hoteles",
      titulo: "Hostería Monte Verde",
      detalle: "Hostería ***",
      img: "./assets/img/monteverde.webp",
      url: "http://www.hosteriamonteverde.com.ar/"
    },
    {
      categoria: "Hoteles",
      etiqueta_filtro: "hoteles",
      titulo: "Hotel Le Village",
      detalle: "Hotel ***",
      img: "./assets/img/levillagehotel.webp",
      url: "http://www.hotellevillage.com.ar/"
    },
    {
      categoria: "Hoteles",
      etiqueta_filtro: "hoteles",
      titulo: "Melewe",
      detalle: "Apart Hotel ***",
      img: "./assets/img/melewe.webp",
      url: "http://www.melewe.com.ar/site/index/sanmartin"
    },
    {
      categoria: "Organizadores",
      etiqueta_filtro: "organizadores",
      titulo: "SHE Eventos",
      detalle: "OPC y Organizador de Eventos",
      img: "./assets/img/she.webp",
      url: "http://sheventos.com.ar/"
    },
    {
      categoria: "Organizadores",
      etiqueta_filtro: "organizadores",
      titulo: "Eureka Eventos",
      detalle: "OPC y Organizador de Eventos",
      img: "./assets/img/eureka.webp",
      url: "https://www.holaeureka.com/"
    },
    {
      categoria: "Organizadores",
      etiqueta_filtro: "organizadores",
      titulo: "Deborah Dalbene",
      detalle: "Organizador de Eventos",
      img: "./assets/img/deborah.webp",
      url: ""
    },
    {
      categoria: "Organizadores",
      etiqueta_filtro: "organizadores",
      titulo: "Kitty Hue",
      detalle: "Organizador de Eventos",
      img: "./assets/img/kittyhue.webp",
      url: "https://www.facebook.com/kittyhueeventos/"
    },
    {
      categoria: "Organizadores",
      etiqueta_filtro: "organizadores",
      titulo: "NQN Eventos",
      detalle: "Organizador de Eventos",
      img: "./assets/img/nqneventos.webp",
      url: ""
    },
    {
      categoria: "Organizadores",
      etiqueta_filtro: "organizadores",
      titulo: "María José Revuelta",
      detalle: "Coordinador de Sala",
      img: "./assets/img/silueta.webp",
      url: ""
    },
    {
      categoria: "Organizadores",
      etiqueta_filtro: "organizadores",
      titulo: "Paula Bertorello",
      detalle: "Coordinador de Sala",
      img: "./assets/img/silueta.webp",
      url: ""
    },
    {
      categoria: "Salones",
      etiqueta_filtro: "salones",
      titulo: "Pórtico",
      detalle: "Salón para Eventos",
      img: "./assets/img/portico.webp",
      url: "http://www.porticoeventos.com.ar/contacto.htm"
    },
    {
      categoria: "Salones",
      etiqueta_filtro: "salones",
      titulo: "Le Village",
      detalle: "Salón para Eventos",
      img: "./assets/img/levillageeventos.webp",
      url: "https://www.hotellevillage.com.ar/eventos.html"
    },
    {
      categoria: "Catering",
      etiqueta_filtro: "varios",
      titulo: "Unser",
      detalle: "Pastelería",
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
