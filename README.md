<div align="center">

# 📱 Sistema de Biblioteca Comunitária - Mobile

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![Versão](https://img.shields.io/badge/Versão-1.0.0-blue)
![React Native](https://img.shields.io/badge/React%20Native-0.73.2-blue)
![Expo](https://img.shields.io/badge/Expo-52.0.0-purple)
![License](https://img.shields.io/badge/Licença-MIT-green)

*Uma solução mobile para democratizar o acesso à literatura em comunidades*

</div>

## 📋 Índice

- [💡 Visão Geral](#-visão-geral)
- [🎯 Problema e Solução](#-problema-e-solução)
- [🛠️ Funcionalidades](#️-funcionalidades)
- [💻 Stack Tecnológica](#-stack-tecnológica)
- [📊 Arquitetura](#-arquitetura)
- [🚀 Instalação e Execução](#-instalação-e-execução)
- [📱 Screenshots](#-screenshots)
- [👥 Equipe](#-equipe)
- [📄 Licença](#-licença)
- [🤝 Como Contribuir](#-como-contribuir)

## 💡 Visão Geral

O **Sistema de Biblioteca Comunitária Mobile** é um aplicativo desenvolvido com React Native para democratizar o acesso à literatura através de um gerenciamento eficiente de bibliotecas comunitárias, focando em regiões de baixa renda e organizações com recursos limitados.

## 🎯 Problema e Solução

### 🔍 Contexto

| Aspecto | Descrição |
|---------|------------|
| **Público-alvo** | Associações comunitárias, ONGs e bibliotecas de bairro |
| **Foco geográfico** | Regiões de baixa renda e periferias urbanas |
| **Cenário operacional** | Funcionamento com recursos limitados e equipes voluntárias |

### ⚠️ Desafios Atuais

- 📕 **Controle de acervo ineficiente**: Perda de livros e dificuldade em rastrear o patrimônio
- 🔍 **Busca manual**: Tempo excessivo para localizar obras específicas
- ⏱️ **Processos burocráticos**: Empréstimos e devoluções com registros em papel
- 📉 **Barreira ao conhecimento**: Dificuldade de acesso à informação sobre disponibilidade
- 📊 **Ausência de métricas**: Impossibilidade de analisar padrões de leitura da comunidade

### ✅ Nossa Solução

Um aplicativo mobile completo que oferece:

- 🔄 **Acesso offline** com sincronização quando conectado
- 📱 **Interface intuitiva** para voluntários e usuários
- 🔍 **Busca avançada** no acervo com múltiplos filtros
- 📷 **Scanner de QR Code** para identificação rápida de livros
- 📣 **Notificações push** para lembrete de devoluções

## 🛠️ Funcionalidades

### 📚 Módulo de Acervo

- ✏️ Cadastro completo de obras (título, autor, editora, ano, categoria, código)
- 🏷️ Leitura de QR Code para rastreamento rápido
- 🔍 Busca avançada com filtros múltiplos
- 📊 Estatísticas de utilização e popularidade
- 📂 Categorização flexível e personalizada

### 👥 Módulo de Usuários

- 👤 Cadastro simplificado de leitores
- 📝 Histórico completo de leituras e preferências
- 🔔 Sistema de notificações push
- ⭐ Programa de fidelidade e gamificação
- 🔒 Níveis de acesso para administradores e voluntários

### 📒 Módulo de Empréstimos

- ⏱️ Controle de prazos com alertas automáticos
- 📱 Renovação online sem necessidade de presença física
- 📊 Relatórios de atrasos e frequência
- 🔄 Fila de espera para títulos populares
- 📈 Dashboard com métricas de utilização

## 💻 Stack Tecnológica

### Frontend
- 📱 **React Native** - Framework para desenvolvimento mobile
- 🚀 **Expo** - Plataforma para desenvolvimento e distribuição
- 🧭 **React Navigation** - Navegação entre telas
- 🎨 **StyleSheet** - Estilização de componentes

### Backend & Integração
- 🔄 **API RESTful** - Comunicação com servidor
- 💾 **AsyncStorage** - Armazenamento local
- 📡 **Fetch API** - Requisições HTTP

### Ferramentas & Infraestrutura
- 📦 **npm/yarn** - Gerenciamento de dependências
- 🔧 **Expo CLI** - Ferramentas de linha de comando
- 🖥️ **Expo Go** - Teste em dispositivos reais
- 🔄 **Git** - Controle de versão

## 📊 Arquitetura

O aplicativo segue uma arquitetura de componentes com a seguinte estrutura:

```
src/
├── navigation/       # Configuração de navegação entre telas
├── screens/          # Telas principais do aplicativo
├── components/       # Componentes reutilizáveis
├── services/         # Serviços de API e integração
├── hooks/            # Hooks personalizados
├── context/          # Contextos para gerenciamento de estado
└── utils/            # Funções utilitárias
```

## 📋 Requisitos do Sistema

| Componente | Requisito Mínimo | Recomendado |
|------------|------------------|-------------|
| **Android** | 5.0+ (Lollipop) | 8.0+ (Oreo) |
| **iOS** | 11.0+ | 13.0+ |
| **Node.js** | 14+ | 16+ |
| **Expo CLI** | 4.0+ | 6.0+ |
| **RAM** | 2GB | 4GB |
| **Espaço em disco** | 500MB | 1GB |

## 🚀 Instalação e Execução

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/felixskmarcio/sistema-de-biblioteca-comunitaria-mobile.git
cd sistema-de-biblioteca-comunitaria-mobile
```

### 2️⃣ Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as configurações necessárias.

### 4️⃣ Execute o aplicativo

```bash
npm start
# ou
yarn start
```

### 5️⃣ Teste no dispositivo

Escaneie o QR code com o aplicativo Expo Go (Android) ou Câmera (iOS).

Alternativamente, execute em um emulador:

```bash
npm run android
# ou
npm run ios
```

## 👥 Equipe

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/felixskmarcio">
        <img src="https://avatars.githubusercontent.com/u/32266467?v=4" width="100px;" alt=""/><br />
        <b>Marcio Eduardo Felix</b>
      </a>
      <div>Desenvolvedor</div>
    </td>
    <td align="center">
      <a href="https://github.com/GustavoHFMO">
        <img src="https://avatars.githubusercontent.com/u/12481911?v=4" width="100px;" alt=""/><br />
        <b>Gustavo Miranda</b>
      </a>
      <div>Orientador</div>
    </td>
  </tr>
</table>

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Veja como você pode ajudar:

1. 🍴 Faça um fork do projeto
2. 🔄 Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. 💾 Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. 📤 Push para a branch (`git push origin feature/nova-funcionalidade`)
5. 🔁 Abra um Pull Request

Para mais detalhes, consulte o arquivo [CONTRIBUTING.md](CONTRIBUTING.md).

---

<div align="center">

📱 **Contato**: [felixskmarcio2@gmail.com](mailto:felixskmarcio2@gmail.com)

⭐ **Deixe uma estrela se este projeto te ajudou!**

</div>
