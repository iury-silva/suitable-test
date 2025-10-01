// Handlers para o Mock Service Worker (MSW) do Storybook e testes
import { http, HttpResponse } from "msw";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Mock da empresa
export const mockCompanyData = {
  data: {
    logo: "https://suitablecontents.com/demoburger/1725996506233.png",
    name: "Teste Msw",
    about: "A melhor hamburgueria do Brasil! 🇧🇷🇧🇷",
    primary_color: "#35b545",
    secondary_color: "#10b981",
    is_open: true,
    pick_up_time_minutes: 30,
    delivery_time_minutes: 55,
    background_image: "https://suitablecontents.com/dodos/1733517685476.jpeg",
    phone: "51997339999",
    email: "suitable@suitable.com",
    whatsapp_url: "https://wa.me/555193988138",
    instagram_url: "https://www.instagram.com/",
    facebook_url: "https://www.facebook.com/",
    website_url: "http://",
    address: {
      string: "AV. JOÃO PESSOA, Centro, 825 - 96815775",
      complement: "",
      cep: "96815775",
      number: 825,
      street: "AV. JOÃO PESSOA",
      neighborhood: "Centro",
      city: "Santa Cruz do Sul",
      state: "RS",
    },
    messages: [
      {
        text: "Peça aqui pelo cardápio digital e ganhe 10% de desconto! 🤩 Use o cupom: APP10",
        type: "custom",
        msg_severity: "success",
      },
    ],
    opening_hours: [
      {
        day: 1,
        shift: "Diurno",
        start: "18:00:00",
        end: "23:30:00",
      },
    ],
  },
};

// Mock dos produtos
export const mockProductsData = {
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

export const handlers = [
  // Mock da empresa
  http.get(`${BASE_URL}/core/v2/app/store/config/`, () => {
    return HttpResponse.json(mockCompanyData);
  }),

  // Mock dos produtos
  http.get(`${BASE_URL}/estoque/v2/app/products/list/`, () => {
    return HttpResponse.json(mockProductsData);
  }),
];
