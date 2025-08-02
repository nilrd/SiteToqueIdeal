import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '0i2zof35',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Queries GROQ para buscar dados
export const queries = {
  // Produtos
  allProducts: `*[_type == "produto"] | order(_createdAt desc) {
    _id,
    nome,
    codigo,
    descricao,
    fotos,
    cor,
    dimensoes,
    serie,
    destaque,
    _createdAt
  }`,
  
  featuredProducts: `*[_type == "produto" && destaque == true] | order(_createdAt desc) {
    _id,
    nome,
    codigo,
    descricao,
    fotos,
    cor,
    dimensoes,
    serie,
    destaque,
    _createdAt
  }`,
  
  // Posts do blog
  allPosts: `*[_type == "post"] | order(dataPublicacao desc) {
    _id,
    titulo,
    slug,
    resumo,
    conteudo,
    imagemPrincipal,
    dataPublicacao,
    autor->{
      nome,
      imagem
    },
    categorias[]->{
      titulo,
      slug
    }
  }`,
  
  // Eventos
  allEvents: `*[_type == "evento"] | order(dataEvento asc) {
    _id,
    titulo,
    dataEvento,
    local,
    descricao,
    imagem,
    _createdAt
  }`,
  
  // Configurações gerais
  siteSettings: `*[_type == "configuracoesGerais"][0] {
    _id,
    logo,
    bannerPrincipal,
    bannerSecundario,
    textoSobre,
    textoMissao,
    textoVisao,
    textoValores,
    telefone,
    email,
    endereco,
    redesSociais
  }`,
  
  // Formulários de contato
  contactForms: `*[_type == "contatoFormulario"] | order(_createdAt desc) {
    _id,
    nome,
    email,
    telefone,
    mensagem,
    _createdAt
  }`
}

