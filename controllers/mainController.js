const res = require("express/lib/response");
const path = require("path");

const productos = [
  {
    id: 1,
    nombre: "Carpaccio fresco",
    imagen: "/images/Carpaccio-de-salmon.jpg",
    descripcion: "Entrada Carpaccio de salmón con cítricos",
    precio: "65.50",
  },
  {
    id: 2,
    nombre: "Risotto de berenjena",
    imagen: "/images/Risotto-berenjena-queso-cabra.jpg",
    descripcion: "Risotto de berenjena y queso de cabra",
    precio: "47.00",
  },
  {
    id: 3,
    nombre: "Mousse de arroz",
    imagen: "/images/Mousse-de-arroz-con-leche.jpg",
    descripcion: "Mousse de arroz con leche y aroma de azahar",
    precio: "27.50",
  },
  {
    id: 4,
    nombre: "Espárragos blancos",
    imagen: "/images/esparragos.png",
    descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio: "37.50",
  },
];

const controller = {
  index: (req, res) => {
    res.render("index", { productos: productos });
  },
  detalleMenu: (req, res) => {
        const id = req.params.id;
        let productosDetalle = productos.find((producto) => producto.id == id);
        res.render("detalleMenu", { productosDetalle });
      }
    };

module.exports = controller;
