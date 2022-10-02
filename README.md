<table align="right">
  <tr>
    <td>
      <a href="readme-en.md">🇺🇸 English</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="README.md">🇧🇷 Português</a>
    </td>
  </tr>
</table>
<br>

# 🪙 iManager Project Interface

<p align="center">
  <video src="https://user-images.githubusercontent.com/86276393/193448357-c566da3f-dc11-4cc6-b9bb-c28579e27168.mp4">
</p>

> Acesse o projeto online **[AQUI](https://luk4x-imanager.netlify.app/)**

## 🚀 Tecnologias Utilizadas

-   [ReactJS](https://pt-br.reactjs.org)
-   [React Router v5](https://v5.reactrouter.com/web/guides/quick-start)
-   [React Animate On Scroll](https://www.npmjs.com/package/react-animate-on-scroll)
-   [React Animated Number](https://yarnpkg.com/package/react-animated-number)
-   [React Icons](https://react-icons.github.io/react-icons/)
-   [React Responsive Carousel](https://yarnpkg.com/package/react-responsive-carousel)
-   [Custom React Cursor](https://ajmnz.github.io/custom-cursor-react/)
-   [UUID](https://www.uuidgenerator.net/)
-   [Animate.css](https://animate.style/)
-   [GSAP](https://greensock.com/docs/v3/Installation)
-   [CSS Module](https://github.com/css-modules/css-modules) / [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
-   [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) / [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
-   [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
-   [ViteJS](https://vitejs.dev/)
-   [Yarn](https://yarnpkg.com/)

## 📝 Sobre

> Assistir o vídeo acima e/ou acessar o projeto online ajudará na compreensão da explicação!<br>
> **Caso o vídeo apresente algum erro, recarregue a página!**

Esse projeto é a Interface (Desktop-First) da **iManager**, uma Web plataforma de gestão empresarial que realiza o cadastro e a gerência de projetos, e seus respectivos serviços. Os projetos e suas categorias ficam armazenados em sua [API](https://github.com/Luk4x/iManager-json-server) que desenvolvi essencialmente com JSON-Server.

### 📄 Páginas

O projeto tem um total de 6 componentes de páginas, sendo eles:

  - **Home**: Essa é a página inicial do iManager, responsável por introduzir o usuário ao site.
  - **CreateProject**: Essa página é responsável criar um projeto.
  - **Projects**: Essa página é responsável por listar todos os projetos criados pelo usuário, e dar a possibilidade de criação, edição e exclusão dos mesmos.
  - **Project**: Essa página é responsável pela edição das informações básicas de um projeto e pela criação, edição e exclusão de um serviço relativo ao projeto.
  - **Company**: Essa página é responsável por apresentar ao usuário mais informações sobre o iManager como empresa de uma forma mais profunda, organizada e instigante.
  - **Contact**: Essa página é responsável por apresentar formas de contato entre o iManager e seus usuários.

### 📑 Demais Componentes
  
Separados em componentes de **Project**, **Layout** e **Form**, o iManager tem mais 18 componentes, sendo eles:
  
  - **Navbar**: Esse componente é renderizado no **main** do projeto, e reaproveitado em todas as páginas. Ele é relativo a barra de navegação presente em todas as páginas.
  - **Footer**: Esse componente é renderizado no **main** do projeto, e reaproveitado em todas as páginas. Ele é relativo ao rodapé presente em todas as páginas, e nele estão as **minhas redes sociais**.
  - **Container**: Esse componente se consiste num container dinâmico que criei para evitar repetições de código.
  - **DesktopHelpCenterShowCase**: Esse componente é relativo ao monitor que está na página de **Contact**.
  - **MobileAppHelpCenterShowCase**: Esse componente é relativo ao celular que está na página de **Contact**.
  - **SheeleChatBot**: Esse componente é relativo ao ChatBot presente nos componentes de **DesktopHelpCenterShowCase** e **MobileAppHelpCenterShowCase**.
  - **IManagerFooter**: Esse componente é relativo ao rodapé do iManager que aparece nas páginas de **Company** e **Contact**.
  - **LinkButton**: Esse componente é um botão dinâmico de redirecionamento de página.
  - **Loading**: Esse componente é relativo a barra de carregamento que aparece enquanto algumas requisições são feitas. Ex: Ao acessar a página de **Projects**.
  - **Message**: Esse componente é relativo as flash messages que aparecem ao realizar determinadas ações na plataforma. Ex: Ao criar um projeto.
  - **PurpleBackground**: Esse componente é relativo ao background roxo decorativo em quase todas as páginas.
  - **ProjectCard**: Esse componente é relativo aos cards dos projetos presentes na página de **Projects**.
  - **ServiceCard**: Baseado no **ProjectCard**, esse componente é relativo aos cards dos serviços presentes nos projetos.
  - **ProjectForm**: Esse componente é relativo ao formulário de criação/edição de projetos.
  - **ServiceForm** Baseado no **ProjectForm**, esse componente é relativo ao formulário criação/edição de serviços.
  - **Input**: Esse componente se consiste num input dinâmico reaproveitado nos componentes de **ProjectForm** e **ServiceForm**.
  - **Select**: Esse componente se consiste num Select dinâmico reaproveitado nos componentes de **ProjectForm** e **ServiceForm**.
  - **SubmitButton**: Esse componente se consiste num botão dinâmico reaproveitado periodicamente pelo projeto.
  
## 📖 Clonando o Projeto

Para clonar e executar este projeto em seu computador, você precisará do [Git](https://git-scm.com/), [Node.js v16.13.2](https://nodejs.org/en/) ou superior e [Yarn](https://yarnpkg.com/) previamente instalados.<br>
Você também precisará da API do projeto rodando, portanto, antes de continuar por aqui, vá ao [Repositório da API](https://github.com/Luk4x/iManager-json-server) e faça os passos sobre como cloná-la primeiro!<br>
Feito esses dois passos, no terminal:

```bash
# Clone esse repositório com:
> git clone https://github.com/Luk4x/iManager.git

# Entre no repositório com:
> cd iManager

# Instale as dependências com:
> yarn install

# Execute o projeto com:
> yarn dev

# Feito isso, você já poderá acessar o projeto pelo link que aparecerá no terminal! (algo como http://127.0.0.1:5173/ ou http://localhost:5173/)
```

## 🤝 Contato dos Contribuintes

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/lucasmacielf/">
        <img src="https://avatars.githubusercontent.com/Luk4x" width="150px;" alt="Luk4x Github Photo"/><br>
        <sub>
          <b>Lucas Maciel</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
