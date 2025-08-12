// Estrutura de dados dos produtos baseada nas novas imagens fornecidas
export const products = [
  {
    code: "603",
    name: "Prato Decorativo Texturizado",
    description: "Prato decorativo em vidro com textura única e acabamento refinado",
    dimensions: "32 cm x 22 cm",
    category: "Decoração",
    colors: [
      {
        name: "VERDE",
        image: "/products/603-VERDE.jpg",
        isPrimary: true
      }
    ],
    styledImage: null, // Código 603 possui apenas uma cor
    featured: true
  },
  {
    code: "800",
    name: "Travessa Folha Decorativa",
    description: "Travessa em formato de folha com detalhes texturizados",
    dimensions: "35 cm x 18 cm",
    category: "Decoração",
    colors: [
      {
        name: "MEL",
        image: "/products/800MEL.jpg",
        isPrimary: true
      },
      {
        name: "VERMELHO",
        image: "/products/800VERMELHO.jpg",
        isPrimary: false
      }
    ],
    styledImage: null,
    featured: true
  },
  {
    code: "1782",
    name: "Conjunto Telhas Decorativas",
    description: "Conjunto de telhas decorativas em vidro com acabamento premium",
    dimensions: "Variadas",
    category: "Decoração",
    colors: [
      {
        name: "MEL",
        image: "/products/1782MEL.jpg",
        isPrimary: true
      },
      {
        name: "PRETO",
        image: "/products/1782PRETO.jpg",
        isPrimary: false
      }
    ],
    styledImage: null,
    featured: true
  },
  {
    code: "1814",
    name: "Bandeja Orgânica",
    description: "Bandeja com formato orgânico e acabamento suave",
    dimensions: "28 cm x 20 cm",
    category: "Decoração",
    colors: [
      {
        name: "BRANCO",
        image: "/products/1814BRANCO.jpg",
        isPrimary: true
      },
      {
        name: "TURQUESA",
        image: "/products/1814TURQUESA.jpg",
        isPrimary: false
      }
    ],
    styledImage: null,
    featured: true
  },
  {
    code: "307",
    name: "Bowl Decorativo Texturizado",
    description: "Bowl com textura radiada e acabamento brilhante",
    dimensions: "25 cm diâmetro",
    category: "Decoração",
    colors: [
      {
        name: "VERMELHO",
        image: "/products/307VERMELHO-.jpg",
        isPrimary: true
      },
      {
        name: "MEL",
        image: "/products/307MEL.jpg",
        isPrimary: false
      }
    ],
    styledImage: null,
    featured: true
  }
];

// Função para obter produtos em destaque (5 produtos para a página inicial)
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured).slice(0, 5);
};

// Função para obter todos os produtos
export const getAllProducts = () => {
  return products;
};

// Função para obter produto por código
export const getProductByCode = (code) => {
  return products.find(product => product.code === code);
};

// Função para obter cor primária de um produto
export const getPrimaryColor = (product) => {
  return product.colors.find(color => color.isPrimary) || product.colors[0];
};

export default products;

