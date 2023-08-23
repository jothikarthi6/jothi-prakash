import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    java,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    capgemini,
    neuulabs,
    livewire,
    proctoring,
    inventory,
    portfolioim,
    threejs,
    jothiprakashcv,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  
    
    
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,

    },
    
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Capgemini",
      icon: capgemini,
      iconBg: "#383E56",
      date: "February 2023 - August 2023",
      points: [
        "Designed and implemented adding attribute management functionality in SAP Hybris E-commerce.",
        "Customizing attributes for improved performance and user experience mainly using Spring Boot and Core Java.",
        "Enhanced PLP ,PDP and Registeration details by using technologies are hybris E-commerce, java, incorporating search filters, sorting options, and improving the overall userinterface.",
        "Eclipse | Intellij | Core Java and Hybris suite for customization, extensions, add-ons, and Spring Boot framework to optimize the presentation layer,service layer, and persistence layer.",
      ],
    },
    {
      title: "Quality Analyst",
      company_name: "Neuu Labs",
      icon:     neuulabs,
      iconBg: "#E6DEDD",
      date: "Feb 2018 - Jan 2019",
      points: [
        "To Work with development and maintaining applications using php database and other related technologies.",
        "Collaborating with cross-functional teams including hardware, software connection, and debugging a high-quality products.",
        "Implementing responsive design to work with a api products and hardware boards finally testing a working flow of projects.",
        "Deployment a projects and tracking a customer support tickets such as Unix,Phpmyadmin, Pilog, VNC Server, and TeamViewer..",
      ],
    },
    {
      title: "Data Analyst Intern",
      company_name: "Live Wire",
      icon: livewire,
      iconBg: "#383E56",
      date: "Feb 2022 - June 2022",
      points: [
        "Developed a final year projects online proctoring using machine learning.",
        "Collaborated with a multidisciplinary team to develop real-time facial recognition and behavior analysis models to detect potential cheating behaviors.",
        "Leveraged computer vision techniques such as Convolutional Neural Networks (CNNs) to extract features from facial images for user authentication.",
        "To gather a knowledge of few technologies Integrated gaze tracking feature to monitortest-takers eye movement,mobile phone detection, and attention using machine learning techniques.",
        
        
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Online Proctoring",
      description:
        "AI-based platform that allows users to monitoring online exams,Integrated gaze tracking feature to monitortest-takers eye movement,mobile phone detection, providing a convenient and efficient to monitor a online interviews and exams.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Jupiter",
          color: "pink-text-gradient",
        },
      ],
      image: proctoring,
      source_code_link: "https://github.com/jothikarthi6/Online-proctoring-using-machine-learning",
    },
    {
      name: "Product Inventory",
      description:
        "Web application that enables users to search for customer sale detilas, view estimated sales history, create and update a customer details implemented the functionality to add, view, and manage products,roviding a user-friendly interface.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "HTML-CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: inventory,
      source_code_link: "https://github.com/jothikarthi6/Product-Inventory-Management",
    },
    {
      name: "Portfolio",
      description:
        "Incorporating a blend of React I successfully crafted and brought to life a dynamic portfolio profile website.This website not only showcases my skills and achievements but also provides visitors with an engaging and user-friendly experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "HTML-CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: portfolioim,
      source_code_link: "https://github.com/jothikarthi6/jothi-prakash",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
