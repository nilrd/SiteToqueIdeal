import React, { useEffect } from 'react'
import { ExternalLink, Settings, Database, Users } from 'lucide-react'

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Painel de Administração
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Gerencie o conteúdo do seu site através do CMS Sanity Studio
          </p>
        </div>

        {/* Status do CMS */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Database className="h-6 w-6 text-teal-600" />
            <h2 className="text-xl font-semibold text-gray-900">Status do CMS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="font-medium text-yellow-800">Em Configuração</span>
              </div>
              <p className="text-yellow-700 text-sm mt-1">
                CMS sendo configurado para produção
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-medium text-green-800">Site Funcionando</span>
              </div>
              <p className="text-green-700 text-sm mt-1">
                Catálogo usando dados locais
              </p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="font-medium text-blue-800">Fallback Ativo</span>
              </div>
              <p className="text-blue-700 text-sm mt-1">
                Sistema robusto garantido
              </p>
            </div>
          </div>
        </div>

        {/* Acesso ao CMS */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Settings className="h-6 w-6 text-teal-600" />
            <h2 className="text-xl font-semibold text-gray-900">Acesso ao CMS</h2>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Sanity Studio (Em Desenvolvimento)</h3>
              <p className="text-gray-600 text-sm mb-4">
                Interface de administração para gerenciar produtos, blog, eventos e configurações do site.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Próximos Passos:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Configurar projeto Sanity em produção</li>
                  <li>• Configurar domínio personalizado</li>
                  <li>• Configurar autenticação (Google/GitHub)</li>
                  <li>• Migrar dados do catálogo atual</li>
                </ul>
              </div>

              <button
                onClick={() => window.open('https://www.sanity.io/manage', '_blank')}
                className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors mr-3"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Acessar Sanity.io
              </button>
              
              <a
                href="/studio"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Settings className="h-4 w-4 mr-2" />
                Abrir Studio Local
              </a>
            </div>
          </div>
        </div>

        {/* Funcionalidades Disponíveis */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-6 w-6 text-teal-600" />
            <h2 className="text-xl font-semibold text-gray-900">Funcionalidades do CMS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Gestão de Conteúdo</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Catálogo de Produtos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Blog e Artigos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Eventos e Feiras</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Configurações Gerais</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Recursos Técnicos</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Upload de Imagens</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Editor de Texto Rico</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Formulários de Contato</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>API em Tempo Real</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Para configuração e suporte técnico, entre em contato com a equipe de desenvolvimento.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Admin

