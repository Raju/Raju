/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Lottie from "lottie-react";

import "./Layout.scss";
import groovyWalkAnimation from "../../assets/lottie/groovyWalk.json";
// import downloadIcon from "../../assets/lottie/downloadIcon.json";
// import hireMe from "../../assets/lottie/hireMe.json";

const Layout = () => {
  console.log(`Layout works!`);

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center">
        { /* Section Left */ }
        <section className="section--left col d-flex flex-column text-center">
          <h1 className="heading--name">
            <span className="heading--name__first">{ `RAJU` }</span>
            <span className="heading--name__last">{ `DHAMI` }</span>
          </h1>
          <h2 className="subheading--role"> { `Senior Full Stack Software Engineer` } </h2>
          <Lottie loop animationData={ groovyWalkAnimation } />
        </section>
        { /* Section Right */ }
        <section className="section--right col-7 d-flex flex-column ms-3 me-3">
          <h1 className="fs-1">{ `Hi there! 👋🏻` }</h1>
          <h2 className="text-body-secondary mb-4">{ `Welcome to my Universe! 🧑‍💻` }</h2>
          <article className="mt-1 mb-4">
            <p className="h4">
              { `I currently live on a blue planet called EARTH, which circles around a red ball of fire called SUN.` }
            </p>
            <p className="h4 mb-2">
              { `On this planet I build things and work as a Full-Stack Developer at Falabella India.` }
            </p>
          </article>
          { /* Skills */ }
          <h2 className="text-body-secondary mt-2">{ `Skills ⚒️` }</h2>
          <article>
            <img alt="HTML5" src="https://img.shields.io/badge/HTML-E34F26.svg?logo=html5&logoColor=white&style=for-the-badge" />
            <img alt="CSS3" src="https://img.shields.io/badge/CSS-1572B6.svg?logo=css3&logoColor=white&style=for-the-badge" />
            <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-EDD718.svg?logo=javascript&logoColor=black&style=for-the-badge" />
            <img alt="React" src="https://img.shields.io/badge/React-20232A.svg?logo=react&logoColor=61DAFB&style=for-the-badge" />
            <img alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC.svg?logo=typescript&logoColor=white&style=for-the-badge" />
            <img alt="NodeJS" src="https://img.shields.io/badge/NodeJS-43853D.svg?logo=Node.js&logoColor=white&style=for-the-badge" />
            <img alt="ExpressJS" src="https://img.shields.io/badge/Express-20232A.svg?logo=Node.js&logoColor=whitee&style=for-the-badge" />
            <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-13AA52.svg?logo=mongodb&logoColor=white&style=for-the-badge" />
            <img alt="MongooseJS" src="https://img.shields.io/badge/Mongoose-880000.svg?logo=Node.js&logoColor=white&style=for-the-badge" />
          </article>
          { /* Ask Me */ }
          <h2 className="text-body-secondary mt-2">{ `Talks about 🎙️` }</h2>
          <article className="mt-1 mb-4">
            <p className="h4">
              { `Ask me anything related to HTML5, CSS3, JavaScript, React...` }
            </p>
          </article>
          { /* Ask Me */ }
          <h2 className="text-body-secondary mt-2">{ `Connect 🙇🏻` }</h2>
          <article className="mt-1 mb-4">
            <div>
              <a href="https://twitter.com/" target="_blank" rel="noopener">
                <img src="https://img.shields.io/badge/TWITTER-1DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" />
              </a>
              <a href="https://www.linkedin.com/in/imrajudhami/" target="_blank" rel="noopener">
                <img src="https://img.shields.io/badge/LINKEDIN-0077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
              </a>
              <a href="mailto:imrajudhami@gmail.com" target="_blank" rel="noopener">
                <img src="https://img.shields.io/badge/GMAIL-D14836.svg?&style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
              </a>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Layout;
