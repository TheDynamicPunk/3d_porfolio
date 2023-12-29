import {
    backend,
    creator,
    mentor,
    web,
    python,
    kafka,
    spring,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    git,
    docker,
    target,
    dell,
    pinkishe,
    paisabazaar,
    neargroup,
    hashster,
    linkslater,
    threejs
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mentor",
      icon: creator,
    },
    {
      title: "Speaker",
      icon: mentor,
    },
  ];
  
  const technologies = [
    {
      name: "Java Spring Boot",
      icon: spring,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Kafka",
      icon: kafka,
    },
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Sofware Engineer",
      company_name: "Target Corporation",
      icon: target,
      iconBg: "#ffffff",
      date: "Sep 2021 - Present",
      points: [
        "Worked on a real-time, high-throughput, and horizontally scalable application that rigorously evaluates thousands of rules against a user identity change, effectively identifying and mitigating rogue accesses.",
        "Engineered and implemented streamlined APIs using Java Spring Boot to enhance inter-application functionality, fostering seamless collaboration across systems",
        "Championed application performance optimization through comprehensive code reviews, strategic bottleneck identification, and systematic enhancements to ensure peak system efficiency and adherence to best coding practices.",
        "Guided teams in implementing advanced cybersecurity practices and technologies, enhancing organizational security."
        
      ],
    },
    {
      title: "Associate Engineer Analyst",
      company_name: "Dell",
      icon: dell,
      iconBg: "#ffffff",
      date: "Feb 2021 - Sep 2021",
      points: [
        "Served as a Solutions Architect in Dell's Presales Division, specializing in storage and compute solutions.",
        "Collaborated with prominent corporations including Ford, Google, and Amazon to strategize cloud deployment hardware and scalability solutions."
      ],
    },
    {
      title: "Web Developer",
      company_name: "Pinkishe Foundation",
      icon: pinkishe,
      iconBg: "#ffffff",
      date: "Feb 2020 - July 2020",
      points: [
        "Volunteered to design and maintain the website for Pinkishe Foundation.",
        "Implemented impactful SEO changes, resulting in a remarkable 25% increase in search optimization.",
        "Automated form submissions, streamlining data collection from diverse sources and significantly reducing turnaround times by nearly one day",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Paisabazaar",
      icon: paisabazaar,
      iconBg: "#FFFFFF",
      date: "May 2019 - Jul 2019",
      points: [
        "Fortunate to contribute to the development team of one of India's fastest-growing financial companies as a Junior Web Developer, proficient in React and NodeJS.",
        "Successfully implemented a templating system for client credit reports, guided by my mentor.",
        "Proposed and executed enhancements to the credit report page, subsequently integrated into the production environment."
      ],
    },
    {
      title: "Junior Software Engineer",
      company_name: "Neargroup Chatbots",
      icon: neargroup,
      iconBg: "#FFFFFF",
      date: "Jun 2018 - Jul 2018",
      points: [
        "Acquired comprehensive skills in Java, backend development, and API testing during my tenure.",
        "Contributed end to end, including design and development of the chatbot's Converse by IQ feature."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Ashutosh is a hard worker and quick learner, evident in the high-quality work he produces. A valuable team member!",
      name: "Prashant Pitti",
      designation: "CEO",
      company: "Easemytrip.com",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Ashutosh excels in collaboration, a joy to work with in team or solo. He takes end-to-end ownership of product delivery and is adept at mentoring others. A valuable asset!",
      name: "Team Target",
      designation: "Engineers",
      company: "Target Corporation"
    },
    {
      testimonial:
        "Ashutosh stands out with a keen eye for detail, client-centric approach, and visionary thinking. A pleasure to work with!",
      name: "Meenakshi Gupta",
      designation: "North Indian Head of Affairs",
      company: "Pinkishe Foundation"
    }
  ];
  
  const projects = [
    {
      name: "Links Later",
      description:
        "This is the ultimate solution to conquer tab overload and streamline your browsing experience! Tired of countless tabs for bug tracking or saving links for 'someday'? Look no further. Features include a self-implemented JWT-based authentication system for seamless access, spam-resistant account creation through email verification, and real-time product price tracking for Amazon and Flipkart. The fully responsive design offers desktop and mobile views, and with full PWA functionality, you can create a homescreen shortcut for instant access. Never let your PC suffer tab chaos again! 🚀",
      tags: [
        {
          name: "VanillaJS",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "grey-text-gradient",
        },
        
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
      ],
      image: linkslater,
      source_code_link: "https://github.com/TheDynamicPunk/links-later",
    },
    {
      name: "Hashster",
      description:
        "This is a privacy-focused client-side application I developed, allowing seamless generation and verification of file hashes directly in your browser. This cutting-edge tool prioritizes security by ensuring your files stay local and aren't uploaded to remote servers. Because great solutions shouldn't compromise your privacy! 💪",
      tags: [
        {
          name: "VanillaJS",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: hashster,
      source_code_link: "https://github.com/TheDynamicPunk/Hashster",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };