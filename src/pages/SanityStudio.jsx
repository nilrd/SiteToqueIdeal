import React, { useEffect } from 'react'
import { ExternalLink, Settings, Database, AlertCircle } from 'lucide-react'

const SanityStudio = () => {
  useEffect(() => {
    // Configurar título da página
    document.title = 'Sanity Studio - Toque Ideal CMS'
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header do Studio */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Database className="h-8 w-8 text-teal-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Sanity Studio</h1>
                <p className="text-sm text-gray-500">Toque Ideal CMS</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Em Configuração</span>
              </div>
              
              <a
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Voltar ao Site
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status de Configuração */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-lg font-semibold text-yellow-800 mb-2">
                CMS em Configuração
              </h2>
              <p className="text-yellow-700 mb-4">
                O Sanity Studio está sendo configurado para produção. Durante este período, 
                o site continua funcionando normalmente usando dados locais.
              </p>
              
              <div className="bg-yellow-100 rounded-lg p-4">
                <h3 className="font-medium text-yellow-800 mb-2">Próximos Passos:</h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>✅ Estrutura do CMS criada</li>
                  <li>✅ Schemas definidos (Produtos, Blog, Eventos)</li>
                  <li>✅ Integração com o site implementada</li>
                  <li>🔄 Configuração de projeto em produção</li>
                  <li>⏳ Configuração de domínio personalizado</li>
                  <li>⏳ Configuração de autenticação</li>
                  <li>⏳ Migração de dados existentes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Funcionalidades Disponíveis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Gestão de Conteúdo */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="h-6 w-6 text-teal-600" />
              <h2 className="text-xl font-semibold text-gray-900">Gestão de Conteúdo</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">📦 Catálogo de Produtos</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Gerenciar produtos, códigos, dimensões, séries e imagens
                </p>
                <div className="text-xs text-gray-500">
                  Status: Estrutura criada, aguardando configuração
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">📝 Blog e Artigos</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Criar posts, gerenciar autores e categorias
                </p>
                <div className="text-xs text-gray-500">
                  Status: Schemas definidos, pronto para uso
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">📅 Eventos e Feiras</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Cadastrar eventos, datas e localizações
                </p>
                <div className="text-xs text-gray-500">
                  Status: Integração implementada
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">⚙️ Configurações Gerais</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Logo, banners, textos institucionais
                </p>
                <div className="text-xs text-gray-500">
                  Status: Estrutura preparada
                </div>
              </div>
            </div>
          </div>

          {/* Recursos Técnicos */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Database className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Recursos Técnicos</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">🖼️ Upload de Imagens</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Sistema de upload otimizado com CDN
                </p>
                <div className="text-xs text-green-600">
                  Status: ✅ Configurado
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">📝 Editor de Texto Rico</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Editor WYSIWYG para conteúdo formatado
                </p>
                <div className="text-xs text-green-600">
                  Status: ✅ Disponível
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">📧 Formulários de Contato</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Recebimento e gerenciamento de mensagens
                </p>
                <div className="text-xs text-green-600">
                  Status: ✅ Integrado
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">🔄 API em Tempo Real</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Atualizações instantâneas no site
                </p>
                <div className="text-xs text-green-600">
                  Status: ✅ Implementado
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Acesso Temporário */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Acesso ao CMS</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-blue-800 mb-2">Configuração em Andamento</h3>
            <p className="text-blue-700 text-sm mb-4">
              O Sanity Studio será configurado com um projeto em produção e domínio personalizado. 
              Durante este período, o site continua funcionando com dados locais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.open('https://www.sanity.io/manage', '_blank')}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Acessar Sanity.io
              </button>
              
              <button
                onClick={() => window.open('https://www.sanity.io/docs', '_blank')}
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Documentação
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            <p className="mb-2">
              <strong>Projeto ID:</strong> 0i2zof35 (configuração pendente)
            </p>
            <p className="mb-2">
              <strong>Dataset:</strong> production
            </p>
            <p>
              <strong>Ambiente:</strong> Desenvolvimento → Produção
            </p>
          </div>
        </div>

        {/* Informações de Suporte */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Para configuração completa e suporte técnico, entre em contato com a equipe de desenvolvimento.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SanityStudio

