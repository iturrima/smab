import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

private blog:Blognew []= [
    {
      tituloCalculo: "Water Content Calculator",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg1.jpg"
    },
    {
      tituloCalculo: "Geotechnical Index Properties",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg2.jpg"
    },
    {
      tituloCalculo: "Density Calculator",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg3.jpg"
    },
    {
      tituloCalculo: "Particle Size Analysis",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg2.jpg"
    },
    {
      tituloCalculo: "Soil Plasticity",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg3.jpg"
    },
    {
      tituloCalculo: "Proctor Calculator",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg1.jpg"
    },
    {
      tituloCalculo: "2D Compaction Curve",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg3.jpg"
    },
    {
      tituloCalculo: "Density Growth Curve",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg2.jpg"
    },
    {
      tituloCalculo: "3D Compaction Forestcast",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg1.jpg"
    }
  ];


  constructor() {
    console.log("servicio listo para usar");
    }

  getBlog():Blognew[]{
    return this.blog;
  }

  getBlognew( idx: string ){
    return this.blog[idx];
  }

  buscarBlog( termino:string ){
    let blogArr:Blognew[]=[];
    termino=termino.toLowerCase();

    for (let blognew of this.blog){
      let nombre=blognew.tituloCalculo.toLowerCase();
      if (nombre.indexOf ( termino ) >= 0 ){
        blogArr.push( blognew )

      }
    }
    return blogArr;
  }


}

export interface Blognew {
  tituloCalculo: string;
  detalleCalculo: string;
  img: string;


}
