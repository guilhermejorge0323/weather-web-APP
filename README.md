# ☁️ Weather Web App

Um dashboard de clima moderno e responsivo desenvolvido com **React 19**, **Vite** e **Tailwind CSS**. O projeto consome a API da OpenWeather para fornecer dados em tempo real, previsões detalhadas e índices de qualidade do ar.

---

## 🚀 Demonstração Live
Confira o projeto online e funcional:  
👉 [https://guilhermejorge0323.github.io/weather-web-APP/](https://guilhermejorge0323.github.io/weather-web-APP/)

---

## 🎨 Design e Concepção
O design deste projeto nasceu de uma abordagem inovadora utilizando **Inteligência Artificial**:
1.  **Template Inicial:** Utilizei uma IA de geração de design para o **Figma** para criar o conceito visual e o layout dos cards.
2.  **Desenvolvimento:** A partir desse template estático, desenvolvi toda a estrutura de componentes React, garantindo a fidelidade visual e a responsividade do dashboard.

---

## 🤖 AI-Assisted Development (Gemini)
Este projeto contou com a colaboração estratégica do **Gemini** (IA da Google) como um parceiro de **Pair Programming**:
- **Resolução de Erros Críticos:** Debugamos juntos erros de infraestrutura como *MIME type mismatch* e *Mixed Content* durante o deploy no GitHub Pages.
- **Refatoração de Lógica:** Otimizamos a busca tripla de APIs (`weather`, `forecast`, `air_pollution`) usando `Promise.all`.
- **Performance:** Implementamos uma estratégia de cache com `localStorage` para carregamento instantâneo.

---

## ✨ Funcionalidades e Observações Técnicas
- 📍 **Geolocalização em Tempo Real:** Identifica sua cidade automaticamente ao abrir o app.
- 🔍 **Busca Inteligente:** Pesquisa global por nome de cidade com tratamento de erros.
- 📊 **Métricas Dinâmicas:** Temperatura, umidade, vento e **Qualidade do Air (AQI)** consumidos via API.
- 📅 **Previsão de 5 Dias:** Visualização da evolução do clima ao longo da semana.
- ⚠️ **Nota sobre o Índice UV:** Devido às limitações da versão gratuita da API utilizada, a métrica de **Índice UV** permanece como um elemento de interface estático, servindo como demonstração de layout para futuras expansões (ex: integração com One Call API).

---

## 🛠️ Tecnologias e Ferramentas
- **Frontend:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **API:** [OpenWeatherMap API](https://openweathermap.org/api)

---

## ⚙️ Como Executar Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/guilhermejorge0323/weather-web-APP.git](https://github.com/guilhermejorge0323/weather-web-APP.git)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione sua chave:
    ```env
    VITE_API_KEY=[SUA CHAVE]
    ```

4.  **Inicie o servidor:**
    ```bash
    npm run dev
    ```

---

## 👤 Autor
**Guilherme Jorge** - *Software Developer & Tech Student*
- **GitHub:** [@guilhermejorge0323](https://github.com/guilhermejorge0323)

---
*Este projeto demonstra a capacidade de integrar design gerado por IA com lógica de programação robusta e moderna.*