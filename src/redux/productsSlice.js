import { createSlice } from "@reduxjs/toolkit";

import product1 from "./../images/product-01.jpg";
import product2 from "./../images/product-02.jpg";
import product3 from "./../images/product-03.jpg";
import product4 from "./../images/product-04.jpg";
import product5 from "./../images/product-05.jpg";
import product6 from "./../images/product-06.jpg";
import product7 from "./../images/product-07.jpg";
import product8 from "./../images/product-08.jpg";
import product9 from "./../images/product-09.jpg";
import product10 from "./../images/product-10.jpg";
import product11 from "./../images/product-11.jpg";
import product12 from "./../images/product-12.jpg";
import product13 from "./../images/product-13.jpg";
import product14 from "./../images/product-14.jpg";
import product15 from "./../images/product-15.jpg";
import product16 from "./../images/product-16.jpg";

const products = createSlice({
  name: "products",
  initialState: [
    { img: product1, title: "Esprit Ruffle Shirt", price: "16.64" },
    { img: product2, title: "Herschel Supply", price: "35.31" },
    { img: product3, title: "Only Check Trouser", price: "25.50" },
    { img: product4, title: "Classic Trench Coat", price: "75.00" },
    { img: product5, title: "Front Pocket Jumper", price: "34.75" },
    { img: product6, title: "Vintage Inspired Classic", price: "93.20" },
    { img: product7, title: "Shirt in Stretch Cotton", price: "52.66" },
    { img: product8, title: "Pieces Metallic Printed", price: "18.96" },
    { img: product9, title: "Converse All Star Hi Plimsolls", price: "75.00" },
    { img: product10, title: "Femme T-Shirt In Stripe", price: "25.85" },
    { img: product11, title: "Herschel Supply", price: "63.16" },
    { img: product12, title: "Herschel Supply", price: "63.15" },
    { img: product13, title: "T-Shirt with Sleeve", price: "18.49" },
    { img: product14, title: "Pretty Little Thing", price: "54.79" },
    { img: product15, title: "Mini Silver Mesh Watch", price: "86.85" },
    { img: product16, title: "Square Neck Back ", price: "29.64" },
  ],
  reducers: {},
});

export default products.reducer;
