import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const getTheFullYear = ()=> {
    return   new Date().getFullYear();
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Steve Self Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <section>
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Steve Yip Ka Ho</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/resume/Ka_Ho_Yip.pdf" target="_blank" rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Steve Yip Ka Ho
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full Stack developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              A seasoned Full-Stack Developer with expertise in React, Node.js, JAVA, and MongoDB, dedicated to enhancing web functionalities and optimizing user experiences.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/SteveYip?tab=repositories" target="_blank" rel="noreferrer">
                <IoLogoGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500  w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section id="about" className="bg-[#e5e5e5] p-[12px] dark:bg-gray-500">
          <div id="about__container" className="w-7/12 m-auto">
            <div id="about-heading" className="flex justify-center mb-10">
              <h3 className="text-3xl py-3 text-gray-700 dark:text-white text-center ">About Me
                <p className="text-base py-2 leading-8">
                  Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                </p>
              </h3>
            </div>
            <div id="about__content" className="grid grid-cols-[1fr_1fr] gap-[10rem]">
              <div id="about__content-main" className="text-gray-700 dark:text-white">
                <h3 className="text-3xl py-1 mb-10">Get to know me!</h3>
                <p className="about__content-details-para mb-10" >
                  I&#39;m a <strong className="text-[#666] dark:text-[#DED6D6]">Full stack Web Developer</strong> building
                   the Front-end and Back-end of Websites and Web Applications that
                  leads to the success of the overall product.
                </p>
                <p className="about__content-details-para mb-10" >
                I have over <strong className="text-[#666] dark:text-[#DED6D6]">7</strong> years of experience in web development, having previously worked as a Senior Engineer, Full Stack Engineering at WeLend, where I built an online e-shop platform, a lending payments system, a lending registration system, and a core lending system using Next.js, Ruby, Go, MongoDB, and Ruby on Rails. I also utilized Graphql and React to enhance the user experience, making the platform user-friendly and intuitive. I am passionate about staying up-to-date with the latest industry trends and technologies to continuously improve development processes and enhance user experiences.
                </p>
                <p className="about__content-details-para mb-10" >
                I&#39;m open to <strong className="text-[#666] dark:text-[#DED6D6]">Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then donI&#39;t hesitate to contact me.
                </p>
              </div>
              <div id="about__skill" className="text-[#666] dark:text-white">
              <h3 className="text-3xl py-1">My Skills</h3>
              <div className="skills flex flex-wrap">
                <div className="skills__skill">HTML</div>
                <div className="skills__skill">CSS</div>
                <div className="skills__skill">Javscript</div>
                <div className="skills__skill">React.js</div>
                <div className="skills__skill">Next.js</div>
                <div className="skills__skill">Styled components</div>
                <div className="skills__skill">Java</div>
                <div className="skills__skill">Node.js</div>
                <div className="skills__skill">Spring boot</div>
                <div className="skills__skill">PHP</div>
                <div className="skills__skill">MongoDb</div>
              </div>
              </div>
            </div>
          </div>
        </section>
        <section id="job" className="p-[12px]">
        <div id="job__container" className="w-7/12 m-auto">
        <div id="job-heading" className="flex justify-center mb-10">
              <h3 className="text-3xl py-3 dark:text-white text-center ">Job Experience
              </h3>
            </div>
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          <div className="w-full max-w-3xl mx-auto">
                
                <div className="-my-6">
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Senior Full Stack Engineer</div>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50  sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600  ">June, 2022 - Present</time>
                            <div className="text-xl font-bold text-slate-900 dark:text-white">AIA Hong Kong & Macau</div>
                        </div>
                        <div className="text-slate-500">I excel in enhancing system integrations and upgrades. My role involves mapping, documenting, and ensuring system compatibility. I work closely with developers, testers, and users, utilizing JAVA, Spring, Spring Boot, and MongoDB to troubleshoot and optimize technical functionalities. My focus is on maintainable code and software enhancement.</div>
                    </div>
                    
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0"> Senior Engineer, Full Stack Engineer </div>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50  sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600  ">March 2022 - June 2022</time>
                            <div className="text-xl font-bold text-slate-900 dark:text-white">WeLend</div>
                        </div>
                        <div className="text-slate-500">As a Senior Full Stack Engineer at WeLend, I led the development of an innovative e-commerce platform using Next.js, integrating a sophisticated lending payment system crafted with Ruby and Go. I proposed and implemented enhancements for system performance and efficiency. Additionally, I developed a user-centric online lending registration system, utilizing Next.js and Go, to streamline the customer experience. My role also supported the core lending system based on Ruby on Rails and involved enhancing user interfaces with GraphQL and React, focusing on accessibility and ease of use.</div>
                    </div>
                    
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Engineer, Full Stack Engineer</div>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50  sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600  ">March 2021 - March 2022</time>
                            <div className="text-xl font-bold text-slate-900 dark:text-white">WeLend</div>
                        </div>
                        <div className="text-slate-500">In my role as a Full Stack Engineer at WeLend, I was instrumental in creating modern financial platform applications. Utilizing a stack that includes Next.js, Go, MongoDB, and Ruby on Rails, I supported the company’s developmental and testing operations. I developed robust microservices and web services, and led the creation of comprehensive unit testing frameworks to ensure all projects met stringent quality standards. My expertise also extended to optimizing existing systems and processes to enhance functionality and user satisfaction.</div>
                    </div>
                    
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Engineer</div>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50  sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600  ">November 2018 - March 2021</time>
                            <div className="text-xl font-bold text-slate-900 dark:text-white">South China Morning Post </div>
                        </div>
                        <div className="text-slate-500">As an Engineer at South China Morning Post, I focused on enhancing the performance of web application platforms using Vue.js. My responsibilities included creating and managing Google Optimize A/B testing for webpage innovations, significantly increasing audience engagement. I developed APIs using Python, Express.js, and GraphQL to facilitate audience interaction with content. Additionally, I designed and implemented a full-featured authentication system using React and GraphQL, ensuring robust security and user data protection.</div>
                    </div>
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Web Programmer</div>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50  sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600  ">May 2018 - November 2018</time>
                            <div className="text-xl font-bold text-slate-900 dark:text-white">WeMine Ltd</div>
                        </div>
                        <div className="text-slate-500">During my tenure at WeMine Ltd, I was responsible for integrating communication tools like WeChat and Facebook Messenger using PHP, expanding the company’s digital reach. I developed a fast and efficient CMS using React and PHP Laravel, enabling business users to effectively manage customer interactions. My role required a deep understanding of both front-end and back-end development, ensuring seamless integration and functionality across various platforms.</div>
                    </div>
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Back End Web Engineer</div>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50  sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600  ">September 2016 - April 2018</time>
                            <div className="text-xl font-bold text-slate-900 dark:text-white">Prospera International Technology</div>
                        </div>
                        <div className="text-slate-500">At Prospera International Technology, I developed a robust CMS using PHP Laravel, supporting vital business operations and content management. I also created a feature-rich stock exchange webpage for the Southeast Asian market using Sails.js, enhancing financial transparency and user engagement. My work involved extensive backend development, focusing on server-side logic, database management, and API integration, providing a strong foundation for the company’s digital infrastructure.</div>
                    </div>
                </div>
                
            </div>
            </div>
          </div>
        </section>
        <footer className="bg-black text-white">
          <div className="main-containe w-7/12 m-auto">
            <div className="main-footer__upper flex justify-between pt-[8rem] pb-[8rem]">
              <div className="main-footer__row main-footer__row-1 order-2">
                <h2 className="heading heading-sm main-footer__heading-sm ">
                  <span>Social</span>
                </h2>
                <div className="text-3xl flex justify-center gap-16 py-3 text-white-600 dark:text-white-400">
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noreferrer">
                  <AiFillLinkedin />
                </a>
                <a href="https://github.com/SteveYip?tab=repositories" target="_blank" rel="noreferrer">
                  <IoLogoGithub />
                </a>
                </div>
              </div>
              <div className="main-footer__row main-footer__row-2">
                <h2 className="heading heading-sm  text-3xl">Steve Yip Ka Ho</h2>
                <p className="main-footer__short-desc">
                A seasoned Full-Stack Developer with expertise in React, Node.js, JAVA, and MongoDB, dedicated to enhancing web functionalities and optimizing user experiences.
                </p>
              </div>
            </div>
            <div className="main-footer__lower">
              © Copyright &nbsp;
              {getTheFullYear()}
              . Made by &nbsp;
              <a rel="noreferrer" target="_blank" href="#">Steve Yip</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
