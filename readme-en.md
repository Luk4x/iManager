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

<br>
<p align="center">
  <a href="#-project-video-presentation">Video</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies-used">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-pages">Pages</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-other-components">Components</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-cloning-the-project">Cloning</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contributor-contact">Contact</a>
</p>
<br>

## 📹 Project Video Presentation
<div align="center">
  <video src="https://user-images.githubusercontent.com/86276393/193448357-c566da3f-dc11-4cc6-b9bb-c28579e27168.mp4">
</div>

> **If the video has any errors, reload the page!**<br>
> Access the project online **[HERE](https://luk4x-imanager.netlify.app/)**

## 🚀 Technologies Used

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

## 📝 About

> Watching the video above and/or accessing the project online will help you understand the explanation!

This project is the Interface (Desktop-First) of **iManager**, a business management web platform that performs the registration and management of projects, and their respective services. The projects and their categories are stored in their [API](https://github.com/Luk4x/iManager-json-server) that I developed essentially with JSON-Server.

### 📄 Pages

The project has a total of 6 page components, which are:

  - **Home**: This is the iManager homepage, responsible for introducing the user to the site.
  - **CreateProject**: This page is responsible for creating a project.
  - **Projects**: This page is responsible for listing all the projects created by the user, and giving the possibility of creating, editing and deleting them.
  - **Project**: This page is responsible for editing the basic information of a project and creating, editing and deleting a service related to the project.
  - **Company**: This page is responsible for presenting the user with more information about iManager as a company in a deeper, more organized and thought-provoking way.
  - **Contact**: This page is responsible for presenting forms of contact between iManager and its users.

### 📑 Other Components
  
Separated into **Project**, **Layout** and **Form** components, iManager has 18 more components, which are:
  
  - **Navbar**: This component is rendered in the **main** of the project, and reused on all pages. It is relative to the navigation bar present on all pages.
  - **Footer**: This component is rendered in the **main** of the project, and reused on all pages. It is related to the footer present on all pages, and in it are **my social networks**.
  - **Container**: This component consists of a dynamic container that I created to avoid code repetition.
  - **DesktopHelpCenterShowCase**: This component is relative to the monitor on the **Contact** page.
  - **MobileAppHelpCenterShowCase**: This component is relative to the smartphone on the **Contact** page.
  - **SheeleChatBot**: This component is relative to the ChatBot present in the **DesktopHelpCenterShowCase** and **MobileAppHelpCenterShowCase** components.
  - **IManagerFooter**: This component is relative to the iManager footer that appears on the **Company** and **Contact** pages.
  - **LinkButton**: This component is a dynamic page redirect button.
  - **Loading**: This component is relative to the loading bar that appears while some requests are made. Ex: When accessing the **Projects** page.
  - **Message**: This component is related to the flash messages that appear when performing certain actions on the platform. Ex: When creating a project.
  - **PurpleBackground**: This component is relative to the decorative purple background on almost every page.
  - **ProjectCard**: This component is related to the project cards present on the **Projects** page.
  - **ServiceCard**: Based on **ProjectCard**, this component is related to service cards present in projects.
  - **ProjectForm**: This component is related to the project creation/editing form.
  - **ServiceForm** Based on the **ProjectForm**, this component is related to the service creation/editing form.
  - **Input**: This component consists of a dynamic input reused in the **ProjectForm** and **ServiceForm** components.
  - **Select**: This component consists of a dynamic select reused in the **ProjectForm** and **ServiceForm** components.
  - **SubmitButton**: This component consists of a dynamic button that is periodically reused by the project.
  
## 📖 Cloning the Project

To clone and run this project on your computer you will need [Git](https://git-scm.com/), [Node.js v16.13.2](https://nodejs.org/en/) or higher and [Yarn](https://yarnpkg.com/) previously installed.<br>
You'll also need the project's API running, so before continuing here, go to [API Repository](https://github.com/Luk4x/iManager-json-server) and go through the steps on how to clone it first!<br>
After these two steps, in the terminal:

```bash
# Clone this repository with:
> git clone https://github.com/Luk4x/iManager.git

# Enter the repository with:
> cd iManager

# Install dependencies with:
> yarn install

# Run the project with:
> yarn dev

# Once this is done, you will be able to access the project through the link that will appear in the terminal! (something like http://127.0.0.1:5173/ or http://localhost:5173/)
```

## 🤝 Contributor Contact

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

<p align="right">
  <a href="#-imanager-project-interface">Back to Top</a>
</p>
