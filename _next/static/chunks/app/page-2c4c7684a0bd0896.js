(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5131:function(e,t,s){Promise.resolve().then(s.bind(s,4934))},4934:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return w}});var i=s(7437),a=s(6648);let n={java:{title:"Java",image:"svg/java.svg"},dart:{title:"Dart",image:"svg/dart.svg"},javaScript:{title:"JavaScript",image:"svg/javascript.svg"},typeScript:{title:"TypeScript",image:"svg/typescript-icon.svg"},react:{title:"React",image:"svg/react.svg"},nextJS:{title:"Next.js",image:"svg/nextjs-icon.svg"},python:{title:"Python",image:"svg/python.svg"},pyqt:{title:"PyQt",image:"svg/PyQt.svg"},nodeJS:{title:"Node.js",image:"svg/nodejs-icon.svg"},flutter:{title:"Flutter",image:"svg/flutter.svg"},mysql:{title:"MySQL",image:"svg/mysql.svg"},html:{title:"HTML",image:"svg/html-5.svg"},css:{title:"CSS",image:"svg/css-3.svg"},tailwindcss:{title:"Tailwind CSS",image:"svg/tailwindcss-icon.svg"},bootstrap:{title:"Bootstrap",image:"svg/bootstrap.svg"},laravel:{title:"Laravel",image:"svg/laravel.svg"},php:{title:"PHP",image:"svg/php.svg"},electron:{title:"Electron.js",image:"svg/electron.svg"},godot:{title:"Godot",image:"svg/godot.svg"},unity:{title:"Unity",image:"svg/unity.svg"}};var o=()=>(0,i.jsx)("section",{className:"min-w-full min-h-screen flex justify-center bg-background mb-1",id:"profile",children:(0,i.jsxs)("div",{className:"flex  flex-col-reverse lg:flex-row  w-full justify-end lg:justify-center p-10 lg:p-[5em] z-10",id:"hero",children:[(0,i.jsxs)("div",{className:"text-white lg:my-auto flex flex-col w-full",children:[(0,i.jsx)("h3",{className:"text-[40px] lg:text-[70px] font-bold",children:"Jovian Charles D. Ca\xf1edo"}),(0,i.jsx)("h4",{className:"text-[20px] lg:text-[50px]",children:"An aspiring software developer"}),(0,i.jsx)("p",{className:"max-w-[90%] font-extralight my-2 lg:my-10",children:"I am an enthusiastic student with a strong passion for software development. Driven by curiosity and a desire to learn, I am eager to explore the intricacies of creating dynamic and user-friendly websites. My goal is to contribute to the everevolving world of web technologies and build impactful digital experiences."}),(0,i.jsx)("div",{className:"flex gap-3 flex-wrap",children:Object.keys(n).map((e,t)=>(0,i.jsx)(a.default,{src:n[e].image,width:30,height:30,alt:n[e].title,title:n[e].title,className:"w-[20px] lg:w-[30px]"},t))})]}),(0,i.jsx)(u,{})]})}),l=s(2265),r=e=>{let{activeSection:t}=e,[s,a]=(0,l.useState)(!1),n=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=e=>{n.current&&!n.current.contains(e.target)&&a(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[n]),(0,i.jsxs)("nav",{className:"bg-[var(--background)] z-50  justify-center sticky w-full top-0 flex min-h-[50px] items-center",ref:n,children:[(0,i.jsxs)("button",{className:"hamburger-menu z-40 bg-[var(--background)]  flex flex-col gap-[5px] justify-center lg:hidden items-center ml-3 mr-auto",onClick:()=>{console.log("hello"),a(e=>!e)},children:[(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{})]}),(0,i.jsx)("div",{className:"aboslute left-0 top-0 w-screen h-[50px] z-50 bg-[var(--background)] lg:hidden"}),(0,i.jsxs)("ul",{className:"flex flex-col lg:opacity-1  [&:a]:font-extralight lg:opacity-100 absolute lg:top-0 lg:static transition-all  duration-300 ease-in-out lg:flex-row shadow w-full justify-center bg-[var(--background)] ".concat(s?"top-[50px] opacity-100":"top-[-500px] opacity-0"),children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#profile",className:"nav-item font-light flex  ".concat("profile"===t&&"nav-item-active"),onClick:()=>a(!1),children:"Home"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#projects",className:"nav-item ".concat("projects"===t&&"nav-item-active"),onClick:()=>a(!1),children:"Projects"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#certifications",className:"nav-item ".concat("certifications"===t&&"nav-item-active"),onClick:()=>a(!1),children:"Certifications"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#certificates-achievements",className:"nav-item ".concat("certificates-achievements"===t&&"nav-item-active"),onClick:()=>a(!1),children:"Certificates and Achievements"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#contacts",className:"nav-item ".concat("contacts"===t&&"nav-item-active"),onClick:()=>a(!1),children:"Contacts"})})]})]})},c=s(8662);s(2339);var p=e=>{var t;let{onImageTrigger:s,index:n,className:o,project:r}=e,p=(0,l.useRef)(null);(0,l.useRef)(null);let[d,g]=(0,l.useState)(!1),[m,h]=(0,l.useState)(0),[x,f]=(0,l.useState)(!1);return p.current,(0,l.useEffect)(()=>{let e=setInterval(()=>{d?h(e=>e+1):h(0)},1e3);return()=>clearInterval(e)}),(0,l.useEffect)(()=>{m>=3&&!x&&(f(!0),console.log(n),s(n))},[m>=3]),(0,i.jsxs)("div",{className:"".concat(o,"  duration-300 ease-in-out items-center ").concat(!x&&"justify-center"," ").concat(m>=1&&m<3&&!x?"image-container-hover":"justify-start lg:justify-center"," \n       ").concat(x?"to z-50 px-6  lg:px-24 w-screen  h-screen bg-[var(--background)] flex flex-col lg:flex-row  lg:gap-10 absolute top-0 left-0 pop-up-image ":"image-container w-[60vmin] h-[75vmin] lg:w-[41vmin] lg:h-[56vmin] overflow-hidden p-[10px] items-center relative rounded flex object-cover"," "),children:[(0,i.jsx)("button",{className:"static mr-auto mt-[7em] lg:absolute  lg:left-20 lg:top-10 pointer-events-auto hover:scale-105 ease-in-out duration-300 ".concat(!x&&"hidden"),onClick:()=>{console.log("clicked"),f(!1),s(-1)},children:(0,i.jsx)("span",{className:"material-symbols-outlined text-[20px] lg:text-[40px]",children:"arrow_back"})}),x?(0,i.jsx)(c.lr,{className:"lg:w-[80vmin]",showArrows:!1,autoPlay:!0,infiniteLoop:!0,showThumbs:!1,interval:2e3,transitionTime:500,children:null===(t=r.images)||void 0===t?void 0:t.map((e,t)=>(0,i.jsx)("div",{className:"",children:(0,i.jsx)(a.default,{src:e,alt:"profile-pic",loading:"eager",className:"object-contain w-[50vmin] h-[50vmin]",draggable:"false",width:500,height:600},t)},t))}):(0,i.jsxs)("div",{className:"!rounded  ".concat(x?"w-[90vmin]":"image w-[58vmin] h-[73vmin] lg:w-[39vmin] lg:h-[54vmin] overflow-hidden  !absolute select-none !object-cover object-right  pointer-events-auto !transition-transform !duration-500 !ease-in-out !transform"," ").concat(0==m&&"shadow-gray-400 shadow"),children:[(0,i.jsx)(a.default,{onMouseEnter:()=>{g(!0)},onMouseLeave:()=>{g(!1),h(0)},ref:p,width:500,height:600,src:r.image,alt:"profile-pic",className:" ".concat(x?"w-[90vmin]":"image h-[90%] select-none !object-cover object-right  pointer-events-auto !transition-transform !duration-500 !ease-in-out !transform"),draggable:"false"}),(0,i.jsx)("div",{className:"h-[10%] bg-white flex justify-center items-center ",children:(0,i.jsx)("h1",{className:"text-[10px] lg:text-lg text-black  font-extralight  ",children:r.title})})]}),(0,i.jsxs)("div",{className:"flex-col lg:p-10 lg:max-w-[70vmin] ".concat(x?"flex":"hidden"),children:[(0,i.jsx)("h1",{className:"text-[30px] lg:text-[50px]",children:r.title}),(0,i.jsx)("p",{className:"text-[10px] lg:text-[15px]",children:r.description}),(0,i.jsxs)("div",{className:"flex gap-3 mt-4 items-end pointer-events-auto",children:[(0,i.jsx)("h3",{children:"Language and Frameworks used: "}),r.techStack.map((e,t)=>(0,i.jsx)(a.default,{src:e.image,width:20,height:20,alt:e.title,title:e.title},t))]})]})]})};let d=[{title:"Activity Proposal System",description:"A system that allows students to propose activities to the school. It is made with Java and JavaFx and uses MySQL as its database.",image:"images/projects/activity_proposal_system/activity_proposal_1.png",images:["images/projects/activity_proposal_system/activity_proposal_1.png","images/projects/activity_proposal_system/activity_proposal_2.png","images/projects/activity_proposal_system/activity_proposal_3.png"],techStack:[n.java,n.mysql]},{title:"BookHub",description:"A mobile borrowing system made in Flutter that allows users to search and borrow books from the schools library. It uses google books api as a mock book database.",image:"images/projects/bookhub/bookhub_1.png",images:["images/projects/bookhub/bookhub_1.png","images/projects/bookhub/bookhub_3.png","images/projects/bookhub/bookhub_4.png","images/projects/bookhub/bookhub_5.png","images/projects/bookhub/bookhub_6.png","images/projects/bookhub/bookhub_7.png","images/projects/bookhub/bookhub_8.png","images/projects/bookhub/bookhub_9.png","images/projects/bookhub/bookhub_10.png","images/projects/bookhub/bookhub_11.png"],techStack:[n.dart,n.flutter]},{title:"Cookery App",description:"A desktop application made with Python and PyQt5 that allows users to search and borrow utensils and kitchenware.",image:"images/projects/cookery_app/cookery_app_1.png",images:["images/projects/cookery_app/cookery_app_1.png","images/projects/cookery_app/cookery_app_2.png","images/projects/cookery_app/cookery_app_3.png","images/projects/cookery_app/cookery_app_4.png","images/projects/cookery_app/cookery_app_5.png","images/projects/cookery_app/cookery_app_6.png","images/projects/cookery_app/cookery_app_7.png","images/projects/cookery_app/cookery_app_8.png","images/projects/cookery_app/cookery_app_9.png","images/projects/cookery_app/cookery_app_10.png"],techStack:[n.python,n.pyqt]},{title:"CPExpeditions",description:"A website made with Laravel it found inspiration to Google Scholar Website. It is an app exclusive to JRU students that allows them to upload their research papers and projects, or search other research and thesis.",image:"images/projects/cpexpeditions/cpexpeditions_1.png",images:["images/projects/cpexpeditions/cpexpeditions_1.png","images/projects/cpexpeditions/cpexpeditions_2.png","images/projects/cpexpeditions/cpexpeditions_3.png","images/projects/cpexpeditions/cpexpeditions_4.png","images/projects/cpexpeditions/cpexpeditions_5.png"],techStack:[n.laravel,n.html,n.css,n.mysql]},{title:"Diagnosys",description:"A website made with Vanilla Php and Mysql that allows patients to book an appointment and requests on a clinic. It features a request and appointment system and allows the patient to view their medical records online.",image:"images/projects/diagnosys/diagnosys_1.png",images:["images/projects/diagnosys/diagnosys_1.png","images/projects/diagnosys/diagnosys_2.png","images/projects/diagnosys/diagnosys_3.png","images/projects/diagnosys/diagnosys_4.png","images/projects/diagnosys/diagnosys_5.png","images/projects/diagnosys/diagnosys_6.png","images/projects/diagnosys/diagnosys_7.png"],techStack:[n.php,n.mysql,n.bootstrap]},{title:"Godot Game",description:"A game made with Godot Engine. It is a 2D top-down shooter game that features a player that can shoot and kill enemies.",image:"images/projects/godot/godot_game_1.jpg",images:["images/projects/godot/godot_game_1.jpg","images/projects/godot/godot_game_2.jpg"],techStack:[n.godot]},{title:"JRU Booking System",description:"A desktop app made using python and tkinter that allows students to book a room in the school. It features a room reservation system and a room management system.",image:"images/projects/jru/jru_1.png",images:["images/projects/jru/jru_1.png"],techStack:[n.python]},{title:"M and S Inventory System",description:"A desktop app for a pomelo warehousing business it allows the workers/users to track, sort, and manage the inventory of the business. It is made with TailwindCss, Nextjs, ReactJs, Electronjs and MySql.",image:"images/projects/m&s/m&s_5.png",images:["images/projects/m&s/m&s_1.png","images/projects/m&s/m&s_2.png","images/projects/m&s/m&s_3.png","images/projects/m&s/m&s_4.png","images/projects/m&s/m&s_5.png","images/projects/m&s/m&s_6.png","images/projects/m&s/m&s_7.png"],techStack:[n.nextJS,n.react,n.html,n.css,n.electron,n.tailwindcss]}];var g=()=>{let e=(0,l.useRef)(null),t=e.current,[s,a]=(0,l.useState)(0),[n,o]=(0,l.useState)(0),[r,c]=(0,l.useState)(0),[g,m]=(0,l.useState)(-1),h=e=>{if(0==n)return;null==t||t.getBoundingClientRect().x,null==t||t.getBoundingClientRect().width;let s=0;if(e.nativeEvent instanceof TouchEvent){if(0==e.nativeEvent.touches.length)return;s=n-e.nativeEvent.touches[0].clientX}else s=n-e.nativeEvent.clientX;let i=-(s/(window.innerWidth/2)*50),o=(null==t?void 0:t.querySelectorAll(".image"))||[],l=r+i;for(let e of(a(l=Math.max(l=Math.min(l,0),-100)),null==t||t.animate({transform:"translateX(".concat(l,"%)")},{duration:1200,fill:"forwards"}),o))e.animate({objectPosition:"".concat(Math.floor(l)+100,"% 50%")},{duration:1200,fill:"forwards"})},x=e=>{e.nativeEvent instanceof TouchEvent?o(e.nativeEvent.touches[0].clientX):o(e.nativeEvent.clientX)},f=(0,l.useCallback)(e=>{o(0),c(s)},[s]);(0,l.useEffect)(()=>(window.addEventListener("mouseup",f),()=>window.removeEventListener("mouseup",f)),[f]),(0,l.useEffect)(()=>(window.addEventListener("touchend",f),()=>window.removeEventListener("touchend",f)),[f]);let u=e=>{m(e)};return(0,i.jsxs)("section",{className:"flex flex-col w-full h-screen relative overflow-hidden",id:"projects",draggable:"false",onMouseMove:h,onMouseDown:x,onTouchStart:x,onTouchMove:h,children:[(0,i.jsx)("h1",{className:"text-white  text-5xl lg:text-6xl  mt-[60px] pointer-events-none select-none ml-3 lg:ml-8",children:"My Projects"}),(0,i.jsx)("h1",{className:"text-white text-[10px] lg:text-[1rem] font-light pointer-events-none select-none ml-3 lg:ml-8",children:"(Drag to move. Hover or tap to view more.)"}),(0,i.jsx)("div",{id:"project-track","data-mouse-down-at":"0",draggable:"false",className:"flex gap-3 absolute left-[20%] top-[30%]   translate-x-0 w-max pointer-events-none select-none   ".concat(-1!=g?"!top-0 !left-0 !translate-x-0 !translate-y-0 w-[100vh]":""),ref:e,children:d.map((e,t)=>(0,i.jsx)(p,{project:e,onImageTrigger:u,index:t,className:"".concat(-1==g?"":g!=t?"hidden":"")},t))})]})},m=e=>{let{isVisited:t,setIsVisited:s}=e,[a,n]=(0,l.useState)(0),o=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=setInterval(()=>{n(e=>e+1)},2e3);return()=>clearInterval(e)},[]),(0,l.useEffect)(()=>{5==a&&(s(!0),localStorage.setItem("isVisited","true"))},[a]),(0,i.jsxs)("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full \n      ",id:"intro",ref:o,children:[(0,i.jsx)("h1",{className:"font-bold opacity-0 text-[100px] lg:text-[200px] ".concat(0==a?"animate-[intro-animation_2s_ease-in-out_forwards]":"hidden"),children:"Hi"}),(0,i.jsx)("h2",{className:"font-bold text-[50px] lg:text-[100px]  ".concat(a>=1&&a<3?"animate-intro-animation":"hidden"),children:"I'm Jovian Charles D. Ca\xf1edo"}),(0,i.jsx)("h2",{className:"font-bold text-[50px] lg:text-[100px] ".concat(a>=3&&a<5?"animate-intro-animation":"hidden"),children:"An aspiring developer"})]})},h=()=>(0,i.jsxs)("section",{id:"certifications",className:"min-w-screen min-h-screen pt-[50px] flex flex-col  mt-1 p-5 ",children:[(0,i.jsx)("h1",{className:"text-4xl lg:text-6xl lg:text-[60px] font-bold mb-10 ",children:"Certifications"}),(0,i.jsxs)("div",{className:"flex flex-col  w-full justify-center  gap-10 font-light  text-pretty",children:[(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row lg:w-[90vmin] gap-10 items-center",children:[(0,i.jsx)(a.default,{src:"/images/certifications/html_css.png",width:500,height:500,alt:"html_css",className:"rounded-lg w-[200px] h-[200px]"}),(0,i.jsxs)("div",{className:"flex flex-col  max-w-full",children:[(0,i.jsx)("h2",{children:"IT Specialist - HTML and CSS"}),(0,i.jsxs)("p",{className:" text-pretty",children:["Issued by Certiport ",(0,i.jsx)("br",{}),"I am certified IT Specialist in HTML and CSS where I demonstrated knowledge in frontend development. Studying for this certificate allows me to learn how websites interact with it's users."]}),(0,i.jsx)("a",{href:"https://www.credly.com/badges/d13049c9-3105-4654-9546-5cceee396523/linked_in_profile",className:"mt-10 text-[var(--orange)] underline",target:"_blank",rel:"noopener noreferrer",children:"View It On Credly"})]})]}),(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row lg:w-[90vmin] gap-10 items-center",children:[(0,i.jsx)(a.default,{src:"/images/certifications/database.png",width:500,height:500,alt:"html_css",className:"rounded-lg w-[200px] h-[200px]"}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("h2",{children:"IT Specialist - Databases"}),(0,i.jsxs)("p",{children:["Issued by Certiport ",(0,i.jsx)("br",{}),"I am certified IT Specialist in Databases this badge demonstrate foundational knowledge of how to design and query relational databases, such as MySQL, Microsoft SQL Server, or Oracle."]}),(0,i.jsx)("a",{href:"https://www.credly.com/badges/fdd1ce6d-af0c-4115-aea8-681b38673300/linked_in_profile",target:"_blank",rel:"noopener noreferrer",className:"mt-10 text-[var(--orange)] underline",children:"View It On Credly"})]})]})]})]});let x=[{image:"images/certifications/certificate of mentor.jpg",title:"CCE Skills Clinic Mentor",description:"The CCE Skills Clinic provides a collaborative and supportive environment for students to develop and enhance their coding abilities. It highlights my responsibilities like providing one-on-one guidance and project feedback, and the positive impact I had on student learning. "},{image:"images/certifications/certificate of participation psits.jpg",title:"PSITE Certificate of Participation 2024",description:"I received a certificate of participation for being the representative of University Of Mindanao in IT Olympiad 2024 - Programming Competition hosted in Mapua Malayan Colleges Mindanao. PSITS is an annual event that showcases the skills and talents of IT students from different schools in the Philippines. "},{image:"images/certifications/stacktrek.png",title:"StackTrek",description:"Certificate of completion for those who joined the 40 minutes workshop using Python."},{image:"images/certifications/mcits.jpg",title:"Certificate of Participation MCITS 2023",description:"This certificate of participation is for joining IT Olympiad in hosted by Ateneo De Davao University in 2023. I entered as the University of Mindanao's representative in the Programming Competition."},{image:"images/certifications/pom.jpg",title:"Programmer of the Month of December 2024",description:"Won programmer of the month for December 2024 for completing the most number of weekly challenges of CCE Skills Clinic."}];var f=()=>(0,i.jsxs)("section",{id:"certificates-achievements",className:"min-h-screen w-full pt-[50px] p-8  mb-10",children:[(0,i.jsx)("h1",{className:"text-4xl lg:text-6xl font-bold mb-8",children:"Certificates and Achievements"}),(0,i.jsx)("div",{className:"flex flex-col gap-5",children:x.map((e,t)=>(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row gap-10 ",children:[(0,i.jsx)(a.default,{src:e.image,width:500,height:500,alt:e.title,className:"rounded-lg w-[200px] h-[200px]"}),(0,i.jsxs)("div",{className:"flex flex-col gap-3 lg:max-w-[70vmin] ",children:[(0,i.jsx)("h2",{className:"text-3xl",children:e.title}),(0,i.jsx)("p",{children:e.description})]})]},t))})]}),u=()=>(0,i.jsx)("div",{className:"lg:w-[50%] z-[-1]",children:(0,i.jsxs)("svg",{className:" w-[75vmin] mx-auto lg:ml-[-200px]",id:"sw-js-blob-svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsxs)("defs",{children:[(0,i.jsxs)("linearGradient",{id:"sw-gradient",x1:"0",x2:"1",y1:"1",y2:"0",children:[(0,i.jsx)("stop",{id:"stop1",stopColor:"rgba(248, 117, 55, 1)",offset:"0%"}),(0,i.jsx)("stop",{id:"stop2",stopColor:"rgba(251, 168, 31, 1)",offset:"100%"})]}),(0,i.jsx)("clipPath",{id:"blob-clip-path",children:(0,i.jsx)("path",{fill:"url(#sw-gradient)",transform:"translate(50 50)",children:(0,i.jsx)("animate",{attributeName:"d",dur:"10s",repeatCount:"indefinite",values:"      M23.3,-30.3C28.6,-23.3,30.3,-14.5,31.1,-6C32,2.4,32,10.4,29.2,18.3C26.4,26.2,20.8,34,13,37.7C5.2,41.4,-4.8,41,-12.6,37C-20.4,33.1,-26,25.7,-30.2,17.8C-34.3,9.8,-37,1.4,-37,-7.8C-36.9,-17.1,-34.1,-27.3,-27.5,-34.1C-20.9,-40.9,-10.5,-44.4,-0.7,-43.5C9,-42.7,18,-37.4,23.3,-30.3Z;      M20.9,-26.8C26.8,-20,31,-13.1,32.8,-5.4C34.7,2.4,34.3,11,30.1,16.8C26,22.6,18.3,25.7,9.9,29.8C1.6,34,-7.3,39.2,-15.1,37.9C-22.9,36.6,-29.6,28.8,-32.3,20.4C-35.1,12.1,-33.8,3.2,-32.5,-5.9C-31.1,-15,-29.5,-24.2,-24.1,-31C-18.7,-37.8,-9.3,-42.1,-0.9,-41.1C7.5,-40,15.1,-33.5,20.9,-26.8Z;      M20.3,-25.9C25.4,-19.9,27.9,-12.6,29.2,-5.2C30.5,2.3,30.6,10,28.2,18.2C25.8,26.4,20.9,35.2,13.5,38.4C6.1,41.7,-3.7,39.6,-11.2,35C-18.7,30.5,-23.7,23.6,-28.1,16.2C-32.5,8.7,-36.2,0.9,-35.5,-6.8C-34.9,-14.5,-29.8,-22,-23.2,-27.8C-16.5,-33.5,-8.3,-37.4,-0.3,-37.1C7.6,-36.7,15.2,-31.9,20.3,-25.9Z;      M24.1,-31.3C29.2,-24.5,29.6,-14.9,30,-6.2C30.5,2.4,30.8,10.2,28.1,17.5C25.4,24.8,19.7,31.7,12.4,34.5C5.1,37.3,-3.8,36,-11.8,32.9C-19.7,29.7,-26.8,24.6,-31.6,17.6C-36.4,10.6,-38.8,1.7,-37.2,-6.3C-35.5,-14.3,-29.7,-21.4,-22.8,-27.8C-15.9,-34.2,-7.9,-40,0.8,-41C9.6,-42,19.1,-38.1,24.1,-31.3Z;      M23.3,-30.3C28.6,-23.3,30.3,-14.5,31.1,-6C32,2.4,32,10.4,29.2,18.3C26.4,26.2,20.8,34,13,37.7C5.2,41.4,-4.8,41,-12.6,37C-20.4,33.1,-26,25.7,-30.2,17.8C-34.3,9.8,-37,1.4,-37,-7.8C-36.9,-17.1,-34.1,-27.3,-27.5,-34.1C-20.9,-40.9,-10.5,-44.4,-0.7,-43.5C9,-42.7,18,-37.4,23.3,-30.3Z;      "})})})]}),(0,i.jsx)("path",{id:"clippath",fill:"url(#sw-gradient)",transform:"translate(50 50)",children:(0,i.jsx)("animate",{attributeName:"d",dur:"10s",repeatCount:"indefinite",values:"      M23.3,-30.3C28.6,-23.3,30.3,-14.5,31.1,-6C32,2.4,32,10.4,29.2,18.3C26.4,26.2,20.8,34,13,37.7C5.2,41.4,-4.8,41,-12.6,37C-20.4,33.1,-26,25.7,-30.2,17.8C-34.3,9.8,-37,1.4,-37,-7.8C-36.9,-17.1,-34.1,-27.3,-27.5,-34.1C-20.9,-40.9,-10.5,-44.4,-0.7,-43.5C9,-42.7,18,-37.4,23.3,-30.3Z;      M20.9,-26.8C26.8,-20,31,-13.1,32.8,-5.4C34.7,2.4,34.3,11,30.1,16.8C26,22.6,18.3,25.7,9.9,29.8C1.6,34,-7.3,39.2,-15.1,37.9C-22.9,36.6,-29.6,28.8,-32.3,20.4C-35.1,12.1,-33.8,3.2,-32.5,-5.9C-31.1,-15,-29.5,-24.2,-24.1,-31C-18.7,-37.8,-9.3,-42.1,-0.9,-41.1C7.5,-40,15.1,-33.5,20.9,-26.8Z;      M20.3,-25.9C25.4,-19.9,27.9,-12.6,29.2,-5.2C30.5,2.3,30.6,10,28.2,18.2C25.8,26.4,20.9,35.2,13.5,38.4C6.1,41.7,-3.7,39.6,-11.2,35C-18.7,30.5,-23.7,23.6,-28.1,16.2C-32.5,8.7,-36.2,0.9,-35.5,-6.8C-34.9,-14.5,-29.8,-22,-23.2,-27.8C-16.5,-33.5,-8.3,-37.4,-0.3,-37.1C7.6,-36.7,15.2,-31.9,20.3,-25.9Z;      M24.1,-31.3C29.2,-24.5,29.6,-14.9,30,-6.2C30.5,2.4,30.8,10.2,28.1,17.5C25.4,24.8,19.7,31.7,12.4,34.5C5.1,37.3,-3.8,36,-11.8,32.9C-19.7,29.7,-26.8,24.6,-31.6,17.6C-36.4,10.6,-38.8,1.7,-37.2,-6.3C-35.5,-14.3,-29.7,-21.4,-22.8,-27.8C-15.9,-34.2,-7.9,-40,0.8,-41C9.6,-42,19.1,-38.1,24.1,-31.3Z;      M23.3,-30.3C28.6,-23.3,30.3,-14.5,31.1,-6C32,2.4,32,10.4,29.2,18.3C26.4,26.2,20.8,34,13,37.7C5.2,41.4,-4.8,41,-12.6,37C-20.4,33.1,-26,25.7,-30.2,17.8C-34.3,9.8,-37,1.4,-37,-7.8C-36.9,-17.1,-34.1,-27.3,-27.5,-34.1C-20.9,-40.9,-10.5,-44.4,-0.7,-43.5C9,-42.7,18,-37.4,23.3,-30.3Z;   "})}),(0,i.jsx)("image",{xlinkHref:"/images/profile_pic.png",width:"80%",height:"80%",y:"10%",x:"5%",clipPath:"url(#blob-clip-path)"})]})}),v=()=>(0,i.jsxs)("section",{id:"contacts",className:"flex flex-col  items-center w-full h-[90vh]",children:[(0,i.jsx)("h1",{className:"text-white  text-5xl lg:text-6xl lg:mt-[25vmin] mb-[20vmin] pointer-events-none select-none ml-3 lg:ml-8",children:"Contacts"}),(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row gap-10  justify-center items-center",children:[(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center ",children:[(0,i.jsx)("div",{className:"flex justify-center w-16 h-16 ",children:(0,i.jsx)(a.default,{src:"svg/google-gmail.svg",width:30,height:30,alt:"google icon",className:""})}),(0,i.jsx)("p",{children:"Email"}),(0,i.jsx)("p",{className:"font-extralight text-[var(--orange)]",children:"joviancharles1210@gmail.com"})]}),(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center ",children:[(0,i.jsx)("a",{href:"www.linkedin.com/in/jovian-charles-ca\xf1edo",className:"flex justify-center w-16 h-16",children:(0,i.jsx)(a.default,{src:"svg/linkedin-icon.svg",width:30,height:30,alt:"google icon",className:""})}),(0,i.jsx)("p",{children:"LinkedIn"}),(0,i.jsx)("p",{className:"font-extralight text-sm",children:(0,i.jsx)("a",{href:"www.linkedin.com/in/jovian-charles-ca\xf1edo",className:"text-[var(--orange)] underline",children:"www.linkedin.com/in/jovian-charles-ca\xf1edo"})})]}),(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,i.jsx)("a",{href:"https://github.com/Charles787205",className:"flex justify-center w-16 h-16",children:(0,i.jsx)(a.default,{src:"svg/github-icon.svg",width:30,height:30,alt:"google icon",className:"rounded-full bg-white w-10 h-10 p-[1px] shadow shadow-white"})}),(0,i.jsx)("p",{children:"Github"}),(0,i.jsx)("p",{className:"font-extralight",children:(0,i.jsx)("a",{href:"https://github.com/Charles787205",className:"text-[var(--orange)] underline",children:"https://github.com/Charles787205"})})]}),(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center ",children:[(0,i.jsx)("a",{href:"",className:"flex justify-center items-center w-16 h-16",children:(0,i.jsx)("span",{className:"material-symbols-outlined text-[30px] text-gray- bg-green-500 rounded-full p-2",children:"smartphone"})}),(0,i.jsx)("p",{children:"Contact Number"}),(0,i.jsx)("p",{className:"font-extralight text-[var(--orange)]",children:"+63 915 678 7205"})]})]})]}),j=()=>(0,i.jsx)("footer",{className:"flex justify-center",children:(0,i.jsx)("div",{className:"font-extralight",children:(0,i.jsx)("p",{children:"\xa9 2024 Jovian Charles Ca\xf1edo. All rights reserved."})})});function w(){let e;let[t,s]=(0,l.useState)(!0);(0,l.useEffect)(()=>{window.localStorage&&(localStorage.setItem("theme","light"),localStorage.getItem("isVisited")||s(!1))},[]);let a=e=>{s(e)};(0,l.useRef)(null);let[n,c]=(0,l.useState)("profile");(0,l.useEffect)(()=>{var t;e=document.querySelectorAll(".main > section"),null===(t=document.querySelector("main"))||void 0===t||t.addEventListener("scroll",p)},[t]);let p=()=>{e.forEach(e=>{e.getBoundingClientRect().top<=window.innerHeight/2&&e.getBoundingClientRect().bottom>=window.innerHeight/2&&(c(e.id),console.log(e.id))})};return(0,i.jsx)("main",{className:"main snap-none lg:snap-y lg:snap-mandatory ",children:t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{activeSection:n}),(0,i.jsx)(o,{}),(0,i.jsx)(g,{}),(0,i.jsx)(h,{}),(0,i.jsx)(f,{}),(0,i.jsx)(v,{}),(0,i.jsx)("div",{className:"h-[300px] lg:hidden"}),(0,i.jsx)(j,{})]}):(0,i.jsx)(m,{isVisited:t,setIsVisited:e=>{a(e)}})})}}},function(e){e.O(0,[746,691,971,23,744],function(){return e(e.s=5131)}),_N_E=e.O()}]);