import type { ProductsResponse } from "@/types/products";

export const sampleProducts: ProductsResponse = {
  products: [
    {
      id: 10004,
      product_type: "product",
      name: "BBQ Brasa",
      details:
        "Pão brioche, hambúrguer 160g, picles, queijo prato, bacon, alface, tomate e maionese da casa.",
      url_image: "https://suitablecontents.com/demoburger/1713450812264.jpeg",
      category_id: 10002,
      category_name: "Hambúrgueres",
      category_image_url:
        "https://suitablecontents.com/demoburger/1713451545360.jpeg",
      category_order: 1,
      price: 31.9,
      promotional_price: 25,
      internal_code: "1",
      tags: [],
      is_kilo: false,
      order: 6,
    },
    {
      id: 2,
      product_type: "product",
      name: "Vegetariano",
      details:
        "Pão brioche, hambúrguer artesanal de grão de bico, queijo prato e maionese da casa, alface e tomate",
      url_image: "https://suitablecontents.com/demoburger/1732540586647.webp",
      category_id: 10002,
      category_name: "Hambúrgueres",
      category_image_url:
        "https://suitablecontents.com/demoburger/1713451545360.jpeg",
      category_order: 1,
      price: 19,
      promotional_price: 0,
      internal_code: "30",
      tags: ["vegetarian"],
      is_kilo: false,
      order: 3,
    },
    {
      id: 3,
      product_type: "product",
      name: "Almofadinhas de queijo gouda",
      details:
        "Essa porção veio diretamente dos céus!\nAlmofadinhas de queijo gouda, crocantes por fora e cremosa por dentro, simplesmente perfeito! Com 8un, e acompanha um potinho com a nossa deliciosa maio caseira.",
      url_image: "https://suitablecontents.com/demoburger/1732542470080.webp",
      category_id: 10042,
      category_name: "Acompanhamentos",
      category_image_url:
        "https://suitablecontents.com/demoburger/1752586054306.webp",
      category_order: 2,
      price: 22,
      promotional_price: null,
      internal_code: null,
      tags: [],
      is_kilo: false,
      order: 5,
    },
  ],
};
