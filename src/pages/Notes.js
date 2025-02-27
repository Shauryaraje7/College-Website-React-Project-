import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Notes.css"; // Make sure to link the CSS

const notesData = {
 

  BIO1001: [
    { name: "Module 1 ", link: "https://drive.google.com/file/d/1yJggyOh-g4d6P6QeOunleEnMhIzOIWdE/view?usp=drive_link" },
    { name: "Module 2 ", link: "https://drive.google.com/drive/folders/15rm_sDG2OFQEoO4EiLYO6JokSXl0DAUr?usp=sharing" },
    { name: "Module 3 ", link: "https://drive.google.com/drive/folders/1OXmJ8V9Q3vuYW7u-YSDRRRVMjPNXGDa1?usp=sharing" },
    { name: "Module 4 ", link: "https://drive.google.com/drive/folders/1z0-x3jOiPL2bs408uDP8jWY5A7pJv5Mp?usp=sharing" },
    { name: "Module 5 ", link: "https://drive.google.com/drive/folders/1VdZjQOB2bdJ_bQOj9vhCu1KwhaMcEumO?usp=sharing" },
    { name: "Module 6 ", link: "https://drive.google.com/file/d/1Kw-F_kiEnovteE07cG6GbhDgLg2xMLcc/view?usp=sharing" },
    { name: "Books ", link: "https://drive.google.com/drive/folders/1DK3jva3XSWpp2808i5Au_6ofmuDWrww4?usp=sharing" }
  ],
  CSE2001: [
    { name: "Module 1 ", link: "https://drive.google.com/file/d/1SudQcOe5YyyPCgYhmNuDiiY9DfZ8RhaR/view?usp=sharing" },
    { name: "Module 2 ", link: "https://docs.google.com/presentation/d/1COXtNqmDCrcR1jiGOgA62Jf8Es9u23bQ/edit?usp=sharing&ouid=109735578436977481132&rtpof=true&sd=true" },
    { name: "Module 3 ", link: "https://drive.google.com/drive/folders/1bDhA5jau8zIIsBBfDJdG4hwPVTw3JBS6?usp=sharing" },
    { name: "Module 4 ", link: "https://drive.google.com/drive/folders/1MR84ux9VmnKYxgNpI_xJQvnRdH4xWyMU?usp=sharing" },
    { name: "Module 5 ", link: "https://drive.google.com/drive/folders/1tjYduFtIqm9k3A2ZYfBJwgLjcHJyEB4X?usp=sharing" }
  ],
  CSE2002: [
    {name: "Module 1 ", link: "https://drive.google.com/drive/folders/10y1a5S_ipB9r1_YndrZ_sd3Gg3pZs9ty?usp=sharing" },
    { name: "Module 2 ", link: "https://drive.google.com/drive/folders/10y1a5S_ipB9r1_YndrZ_sd3Gg3pZs9ty?usp=sharing" },
    { name: "Module 3 ", link: "https://drive.google.com/file/d/1Xn_eec6kYquJyMSZQ2EyGAgH7FVlq8lB/view?usp=sharing" },
    { name: "Module 4 ", link: "https://drive.google.com/drive/folders/1lqyBh7jNZSu_ia6lsmvyfaR5jIbPiRHC?usp=sharing" },
    { name: "Module 5 ", link: "https://drive.google.com/drive/folders/1AiwvNIiE6sHEhlvQ1DgM0O_Jp-7UmNj_?usp=sharing" }
  ],
  CSE3001: [
    { name: "Module 1 ", link: "https://drive.google.com/file/d/1_-XrMHs4TA5oOzmzt0SwiUazc79C1mQo/view?usp=sharing" },
    { name: "Module 2 ", link: "https://drive.google.com/file/d/1NISia_VIODpMOTwzMgivgdzgenwhBg-1/view?usp=sharing" },
    { name: "Module 3 ", link: "https://drive.google.com/file/d/1SyhvGSGCcoUaejElvEvzSMnGdotF8VZI/view?usp=sharing" },
    { name: "Module 4 ", link: "https://drive.google.com/file/d/1Y_OH-r5ezmv_SsyJqkiQlBAbQPEKDEd0/view?usp=sharing" },
    { name: "Module 5 ", link: "https://drive.google.com/file/d/1siWuonFwXEgsUJlq-rcS2XvgrqipRoUf/view?usp=sharing" },
    { name: "Module 6 ", link: "https://drive.google.com/file/d/1YX2ITUtJjodezagsDA2KkVZPq6keqOXm/view?usp=sharing" },
    { name: "Module 7 ", link: "https://drive.google.com/file/d/1V3I94f3LXLOWg7qnMe_9OuoxzBtxMeN9/view?usp=sharing" },
    { name: "Module 8 ", link: "https://drive.google.com/file/d/1N9R1LPB0woMwkeH7aa5ZFLa7oFolFiG2/view?usp=sharing" },
    { name: "More  ", link: "https://drive.google.com/drive/folders/1E_TiUI7VpQQ4jFuJBY_q08oXQQ3MFiWX?usp=drive_link" }
  ],
  CHY1001: [
    { name: "Module 1 ", link: "https://drive.google.com/drive/folders/1HIduEiGJ6LdTwcOTcXXfN0yMVq_0jIQQ?usp=sharing" },
    { name: "Module 2 ", link: "https://drive.google.com/drive/folders/1nmCrgrKMccCmVKzv5G02hEZco29EynDO?usp=sharing" },
    { name: "Module 3 ", link: "https://drive.google.com/drive/folders/1mFyfHHZF7cgxNkOHh1RcaUlXZNUUQU0K?usp=sharing" },
    { name: "Module 4 ", link: "https://drive.google.com/file/d/1I1iigpsgYRdM-0hG0Z6SVoX-Md0Bsjt2/view?usp=sharing" },
    { name: "Module 5 ", link: "https://drive.google.com/file/d/11csp_vz2KF4pofB5Agce-6MRu0mLwwrG/view?usp=sharing" }
  ],
  MEE2014: [
    { name: "Module 1 ", link: "https://drive.google.com/drive/folders/1FEMLvV6AFy1-_4ibb7pPTbsCD5oGCtUE?usp=sharing" },
    { name: "Module 2 ", link: "https://drive.google.com/file/d/14F5zbG6agzcrfCw3c70mXp8AUAMEkgSy/view?usp=sharing" },
    { name: "Module 3 ", link: "https://drive.google.com/file/d/1fbrRsLulYkGlDfp6JgkObCdBFFCT1udB/view?usp=sharing" },
    { name: "Module 4 ", link: "https://drive.google.com/file/d/15UDzwwvOoA0WlGfPMgm4O5oazsWLFCzx/view?usp=sharing" },
    { name: "Module 5 ", link: "https://drive.google.com/file/d/1OfWrPht-jsOkvLLxUVbYqcr_iuLRddcf/view?usp=sharing" },
    { name: "More ", link: "https://docs.google.com/presentation/d/1bmKdVkVoswt6JAkN2wM57_WZIEUDEY5f/edit?usp=sharing&ouid=109735578436977481132&rtpof=true&sd=true" }
  ],
  MAT3003: [
    { name: "Module 1 ", link: "https://drive.google.com/drive/folders/1fjOhKgR1LXeRVjuN5DHx6dXDnGcAkX-B?usp=sharing" },
    { name: "Module 2 ", link: "https://drive.google.com/drive/folders/1Ik52jVsEv-JS5TuKPiIy5BPP1rZhI-Xg?usp=sharing" },
    { name: "Module 3 ", link: "https://drive.google.com/file/d/199u74bi22poDSzfTi4ImoXW_KSp6CxTx/view?usp=sharing" },
    { name: "Module 4 - coming soon", link: "/pdfs/mat3003_module4.pdf" },
    { name: "Module 5 - coming soon", link: "/pdfs/mat3003_module5.pdf" },
    { name: "Books - Stochastic Processes", link: "https://drive.google.com/drive/folders/1jRrTcErxBqSq0Lf6UvMZp22vXVBfvPec?usp=sharing" }
  ],
  MGT2003: [
    { name: "Module 1 - coming soon", link: "/pdfs/mgt2003_module1.pdf" },
    { name: "Module 2 ", link: "https://drive.google.com/file/d/1NOxRxwEJD1qYNuYyRqCFB-H6CXg16Y46/view?usp=sharing" },
    { name: "Module 3 ", link: "https://drive.google.com/file/d/1zrq1yXuTM-ZOknsNeT9xvEjgI0V9zLX3/view?usp=sharing" },
    { name: "Module 4 ", link: "/pdfs/mgt2003_module4.pdf" },
    { name: "Module 5 - coming soon", link: "" }
  ],
  CSE3006: [
    { name: "Lecture 1 - Computer Networks Overview", link: "/pdfs/cse3006_lecture1.pdf" },
  ],
  CSE3009: [
    { name: "Lecture 1 - Parallel and Distributed Computing", link: "/pdfs/cse3009_lecture1.pdf" },
  ],
  CSE3011: [
    { name: "Module 1", link: "https://drive.google.com/file/d/1kgKkt24MHTAOO9POZUvHTyfeBIqSRnCk/view?usp=sharing" },
    { name: "Module 2", link: "https://drive.google.com/file/d/1xa5zNa9WLbeptNSq_OuqhP8z-UZMJDli/view?usp=sharing" },
    { name: "Module 3", link: "https://drive.google.com/file/d/1DL90jzCYKbUWlwpUtaFyfOSWI7KvBmcK/view?usp=sharing" },
    { name: "Module 4", link: "https://drive.google.com/file/d/18GwfaHn7_OkGP8fZRcm_dT2edHmD5iME/view?usp=sharing" },
    { name: "Module 5", link: "https://drive.google.com/file/d/1_UCsvQiJdT1Z7Hu3uR3YDtTyoalyAkQy/view?usp=sharing" }
  ],
  CSE4001: [
    { name: "Lecture 1 - Internet and Web Programming", link: "/pdfs/cse4001_lecture1.pdf" },
  ],
  ECE2002: [
    { name: "Module 1 to 4", link: "https://drive.google.com/file/d/1YpnxeqEL_CVqu8CmSZwYb4SHVp-DzWg1/view?usp=sharing" },
    { name: "Module 1 to 4 part02", link: "https://drive.google.com/file/d/1iGtCcnUsX4Edv0k9zMNsB4PJAUR2IG7f/view?usp=sharing" },
    { name: "Module 5", link: "https://drive.google.com/file/d/18cOoChzkYxsTv5GMNS0GH4pASQwDw-RB/view?usp=sharing" },
    { name: "Books", link: "https://drive.google.com/drive/folders/1i0yCv0vh8Iw9INPxRyVTBdWZOU_nMmUX?usp=sharing" },
  ],
  ECE3004: [
    { name: "Module 1", link: "https://drive.google.com/drive/folders/1j8xBmnB988NGNPGUNFP4U7MvhJYJex4R?usp=sharing" },
    { name: "Module 2 - coming soon", link: "" },
    { name: "Module 3 - coming soon", link: "" },
    { name: "Module 4 - coming soon", link: "" },
    { name: "Module 5 - coming soon", link: "" }
  ],
  BIO1001: [
    { name: "Module 1", link: "https://drive.google.com/file/d/1yJggyOh-g4d6P6QeOunleEnMhIzOIWdE/view?usp=sharing" },
    { name: "Module 2 ", link: "https://drive.google.com/drive/folders/15rm_sDG2OFQEoO4EiLYO6JokSXl0DAUr?usp=sharing" },
    { name: "Module 3 ", link: "https://drive.google.com/drive/folders/1OXmJ8V9Q3vuYW7u-YSDRRRVMjPNXGDa1?usp=sharing" },
    { name: "Module 4 ", link: "https://drive.google.com/drive/folders/1z0-x3jOiPL2bs408uDP8jWY5A7pJv5Mp?usp=sharing" },
    { name: "Module 5 ", link: "https://drive.google.com/drive/folders/1VdZjQOB2bdJ_bQOj9vhCu1KwhaMcEumO?usp=sharing" },
    { name: "Module 6", link: "https://drive.google.com/file/d/1Kw-F_kiEnovteE07cG6GbhDgLg2xMLcc/view?usp=sharing" },
    { name: "Books", link: "https://drive.google.com/drive/folders/1DK3jva3XSWpp2808i5Au_6ofmuDWrww4?usp=sharing" }
  ],
  BIO1102: [
    { name: "Module 1", link: "https://drive.google.com/file/d/1uqonn8DG6CTqDqyNSBl6HGrdk8VZAs0g/view?usp=sharing" },
    { name: "Module 2 ", link: "https://drive.google.com/file/d/1DF4IhMxmFKTZlBeL9yNiCh5Jk4DimABM/view?usp=sharing" },
    { name: "Module 3 ", link: "https://docs.google.com/presentation/d/161IXn1qFdconahA6j9DV8ZSqPj0ls83_/edit?usp=sharing&ouid=109735578436977481132&rtpof=true&sd=true" },
    { name: "Module 4 ", link: "https://docs.google.com/presentation/d/195PKekTMD6XP0JCVd5LYjM-Buzeh4OJt/edit?usp=sharing&ouid=109735578436977481132&rtpof=true&sd=true"},
    { name: "Module 5 ", link: "https://docs.google.com/presentation/d/16fuyJGcrM0SpXeT6M8OXfVf7R_11Wzw6/edit?usp=sharing&ouid=109735578436977481132&rtpof=true&sd=true" },
    { name: "Module 6 ", link: "https://docs.google.com/presentation/d/1klguuWP-OHp63p7Nwmaj4H9fhOey8Lu6/edit?usp=sharing&ouid=109735578436977481132&rtpof=true&sd=true" }
  ],
  BIO1501: [
    { name: "Module 1", link: "https://drive.google.com/drive/folders/1J_1g58ZZwwyL7JMza3sOH4VFczE5D1so?usp=sharing" },
    { name: "Module 2 ", link: "https://drive.google.com/drive/folders/1Qz5LynBEjbeLtOVuI009N-V4T9BgQQrH?usp=sharing" },
    { name: "Module 3 ", link: "https://drive.google.com/drive/folders/1g7IUOxLM4qNiIC4PyPanOpknZbABfvbO?usp=sharing" },
    { name: "Module 4 ", link: "https://drive.google.com/drive/folders/1CJhCj5Xdw1QBrOrTnJ8HOnK8hD6DXeAS?usp=sharing" },
    { name: "Module 5 ", link: "https://drive.google.com/drive/folders/1RCvw1VuUhdkYvOPo7c291gr2QRBXd-WF?usp=sharing" },
    { name: "Module 6 ", link: "https://drive.google.com/drive/folders/17_QsXj-3uMkzQwb-WwotieuNDyy7qc1_?usp=sharing" },
    { name: "Module 7 ", link: "https://drive.google.com/drive/folders/1IAQu_0hIRXxW3bjAmRBrPfT6TeEgqFwY?usp=sharing" },
    { name: "More ", link: "https://drive.google.com/drive/folders/1NImEGP6yWs5ZKbe6D8xKJm3xTvVZEm4H?usp=drive_link" }
  ],
  BIO2001: [
    { name: "GUYTON AND HAIL TEXTBOOK OF TEDICAL PHYSIOLOGY", link: "https://drive.google.com/file/d/1MUV358UgUbnqlHISuf87b1w_sSqgF6UQ/view?usp=sharing" },
    { name: "Hsc bio", link: "https://drive.google.com/file/d/1PFKHBE5CGyVtE3sQpTGtovhrU9zwr8Zd/view?usp=sharing" }
  ],
  BIO2003: [
    { name: "Module 1", link: "https://drive.google.com/file/d/1m9hSUkWfqQ00r6DUKKc1XG5JAaKBVIrP/view?usp=sharing" },
    { name: "Module 2 ", link: "https://drive.google.com/drive/folders/1cyko9RwYYaTO2TqSjUVGiRodiRTml0RS?usp=sharing" },
    { name: "Module 3 ", link: "https://drive.google.com/file/d/1bLFcoLK_nt6o1zIR7Uwyri60cQF7B5LW/view?usp=sharing" },
    { name: "Module 4 - coming soon ", link: "" },
    { name: "Module 5 - coming soon", link: "" }
  ],
  BIO3014: [
    { name: "Book 01", link: "https://drive.google.com/file/d/1KGqTiK59tmiSR31bZwOKRsMbpcb28uGs/view?usp=sharing" },
    { name: "Cancer Biology Module 1 ", link: "https://drive.google.com/file/d/1epZa3Uukpqw4FhA4MXUvbRkvr-w7X6iY/view?usp=sharing" },
    { name: "Module 2 - coming soon", link: "" },
    { name: "Module 3 - coming soon", link: "" },
    { name: "Module 4 - coming soon", link: "" },
    { name: "Module 5 - coming soon", link: "" }
  ],
  PHY1001: [
    { name: "Module 1", link: "https://drive.google.com/file/d/1-bWQaXW96_2PYqy9xvjXi9V25Sqife9t/view?usp=sharing" },
    { name: "Module 2 ", link: "https://drive.google.com/file/d/13mqxn5beR14z3TmGTyBCbR-DUv6C3igy/view?usp=sharing" },
    { name: "Module 3 ", link: "https://drive.google.com/file/d/1g7okBwaoDXjNCT76RKqOfnFw7EdO6w68/view?usp=sharing" },
    { name: "Module 3.1 ", link: "https://drive.google.com/file/d/1Ve7jYa0_DZ4qAIfgVCSYZs2bAOzRZNGb/view?usp=sharing" },
    { name: "Module 4 ", link: "https://drive.google.com/file/d/1GW1ffrl_B1wpa_OtWvyxf9wEecOfopP3/view?usp=sharing" },
    { name: "Module 5 part01", link: "https://drive.google.com/file/d/1IqvpznArk5_nKCSzr48Zy7c4HBYoGZgd/view?usp=sharing" },
    { name: "Module 5 part02 )", link: "https://drive.google.com/file/d/1Bphub-2MY8aYYa7-9iyrYX8AXlie9FGa/view?usp=sharing" }
  ],
  ECE3004: [
    { name: "Module 1", link: "" },
    { name: "Module 2 ", link: "" },
    { name: "Module 3 ", link: "" },
    { name: "Module 4 ", link: "" },
    { name: "Module 5 ", link: "" }
  ],
  ECE3004: [
    { name: "Module 1", link: "" },
    { name: "Module 2 ", link: "" },
    { name: "Module 3 ", link: "" },
    { name: "Module 4 ", link: "" },
    { name: "Module 5 ", link: "" }
  ],
  ECE3004: [
    { name: "Module 1", link: "" },
    { name: "Module 2 ", link: "" },
    { name: "Module 3 ", link: "" },
    { name: "Module 4 ", link: "" },
    { name: "Module 5 ", link: "" }
  ],
  ECE3004: [
    { name: "Module 1", link: "" },
    { name: "Module 2 ", link: "" },
    { name: "Module 3 ", link: "" },
    { name: "Module 4 ", link: "" },
    { name: "Module 5 ", link: "" }
  ],
  ECE3004: [
    { name: "Module 1", link: "" },
    { name: "Module 2 ", link: "" },
    { name: "Module 3 ", link: "" },
    { name: "Module 4 ", link: "" },
    { name: "Module 5 ", link: "" }
  ],















































  
  CHI2007: [
    { name: "Lecture 1 - Healthcare Information Systems", link: "/pdfs/chi2007_lecture1.pdf" },
  ],
  CSA3004: [
    { name: "Lecture 1 - Data Visualization Techniques", link: "/pdfs/csa3004_lecture1.pdf" },
  ],
  CSA3005: [
    { name: "Lecture 1 - Cloud Computing Fundamentals", link: "/pdfs/csa3005_lecture1.pdf" },
  ],
  CSA3017: [
    { name: "Lecture 1 - Knowledge Engineering Concepts", link: "/pdfs/csa3017_lecture1.pdf" },
  ],
  CSA4003: [
    { name: "Lecture 1 - Data Mining and Warehousing", link: "/pdfs/csa4003_lecture1.pdf" },
  ],
  CSA4011: [
    { name: "Lecture 1 - Information Retrieval and Web Search", link: "/pdfs/csa4011_lecture1.pdf" },
  ],
  CSD4002: [
    { name: "Lecture 1 - Ethical Hacking Overview", link: "/pdfs/csd4002_lecture1.pdf" },
  ],
  CSD4008: [
    { name: "Lecture 1 - Cyber Security Framework", link: "/pdfs/csd4008_lecture1.pdf" },
  ],
  CSD5002: [
    { name: "Lecture 1 - Virtualization Essentials", link: "/pdfs/csd5002_lecture1.pdf" },
  ],
  CSD5008: [
    { name: "Lecture 1 - Forensic Science Introduction", link: "/pdfs/csd5008_lecture1.pdf" },
  ],
  CSE3008: [
    { name: "Lecture 1 - Soft Computing Basics", link: "/pdfs/cse3008_lecture1.pdf" },
  ],
  CSE3010: [
    { name: "Lecture 1 - Computer Vision Overview", link: "/pdfs/cse3010_lecture1.pdf" },
  ],
  CSE3012: [
    { name: "Lecture 1 - Mobile Application Development", link: "/pdfs/cse3012_lecture1.pdf" },
  ],
  CSE3013: [
    { name: "Lecture 1 - Agile Software Development", link: "/pdfs/cse3013_lecture1.pdf" },
  ],
  CSE3014: [
    { name: "Lecture 1 - Medical Imaging Techniques", link: "/pdfs/cse3014_lecture1.pdf" },
  ],
  CSE3015: [
    { name: "Lecture 1 - AWS Cloud Practitioner", link: "/pdfs/cse3015_lecture1.pdf" },
  ],
  CSE3016: [
    { name: "Lecture 1 - AWS Solution Architect", link: "/pdfs/cse3016_lecture1.pdf" },
  ],
  CSE3017: [
    { name: "Lecture 1 - Salesforce Overview", link: "/pdfs/cse3017_lecture1.pdf" },
  ],
  CSE4003: [
    { name: "Lecture 1 - Big Data Analytics", link: "/pdfs/cse4003_lecture1.pdf" },
  ],
  CSE4005: [
    { name: "Lecture 1 - Machine Learning Concepts", link: "/pdfs/cse4005_lecture1.pdf" },
  ],
  CSE4012: [
    { name: "Lecture 1 - Software Defined Networks", link: "/pdfs/cse4012_lecture1.pdf" },
  ],
  CSE4016: [
    { name: "Lecture 1 - Software Project Management", link: "/pdfs/cse4016_lecture1.pdf" },
  ],
  CSE4017: [
    { name: "Lecture 1 - Software Testing", link: "/pdfs/cse4017_lecture1.pdf" },
  ],
  CSG2001: [
    { name: "Lecture 1 - AR and VR Basics", link: "/pdfs/csg2001_lecture1.pdf" },
  ],
  ECE4007: [
    { name: "Lecture 1 - Wireless Sensor Networks", link: "/pdfs/ece4007_lecture1.pdf" },
  ],
  ECE4010: [
    { name: "Lecture 1 - Embedded Systems Overview", link: "/pdfs/ece4010_lecture1.pdf" },
  ],
  ECE6012: [
    { name: "Lecture 1 - Pattern Recognition and Image Analysis", link: "/pdfs/ece6012_lecture1.pdf" },
  ],
  MAT2009: [
    { name: "Lecture 1 - Applied Cryptography", link: "/pdfs/mat2009_lecture1.pdf" },
  ],
  MAT5004: [
    { name: "Lecture 1 - Mathematical Foundations for Cybersecurity", link: "/pdfs/mat5004_lecture1.pdf" },
  ],
  
 

    CHY1001: [
      { name: "Lecture 1 - Introduction to Engineering Chemistry", link: "/pdfs/CHY1001_lecture1.pdf" },
    ],
    MAT1001: [
      { name: "Lecture 1 - Calculus Basics", link: "/pdfs/MAT1001_lecture1.pdf" },
      { name: "Lecture 2 - Laplace Transforms", link: "/pdfs/MAT1001_lecture2.pdf" },
    ],
    MAT2002: [
      { name: "Lecture 1 - Discrete Mathematics and Graph Theory", link: "/pdfs/MAT2002_lecture1.pdf" },
    ],
    MAT3002: [
      { name: "Lecture 1 - Applied Linear Algebra", link: "/pdfs/MAT3002_lecture1.pdf" },
    ],
    MAT3003: [
      { name: "Lecture 1 - Probability, Statistics and Reliability", link: "/pdfs/MAT3003_lecture1.pdf" },
    ],
    PHY1001: [
      { name: "Lecture 1 - Engineering Physics", link: "/pdfs/PHY1001_lecture1.pdf" },
    ],
    CSA2001: [
      { name: "Lecture 1 - Fundamentals in AI & ML", link: "/pdfs/CSA2001_lecture1.pdf" },
    ],
    EEE1001: [
      { name: "Lecture 1 - Electric Circuits and Systems", link: "/pdfs/EEE1001_lecture1.pdf" },
    ],
    MEE2014: [
      { name: "Lecture 1 - Engineering Design and Modelling", link: "/pdfs/MEE2014_lecture1.pdf" },
    ],
    CSE1021: [
      { name: "Lecture 1 - Introduction to Problem Solving and Programming", link: "/pdfs/CSE1021_lecture1.pdf" },
    ],
    CSE2006: [
      { name: "Lecture 1 - Programming in Java", link: "/pdfs/CSE2006_lecture1.pdf" },
    ],
    PLA1004: [
      { name: "Lecture 1 - Competitive Coding Practices", link: "/pdfs/PLA1004_lecture1.pdf" },
    ],
    PLA1006: [
      { name: "Lecture 1 - Lateral Thinking", link: "/pdfs/PLA1006_lecture1.pdf" },
    ],
    SST1003: [
      { name: "Lecture 1 - Professional Communication Skills for Engineers", link: "/pdfs/SST1003_lecture1.pdf" },
    ],
    SST2003: [
      { name: "Lecture 1 - Dynamics of Workplace Communication Skills", link: "/pdfs/SST2003_lecture1.pdf" },
    ],
    CHY1006: [
      { name: "Lecture 1 - Environmental Sustainability", link: "/pdfs/CHY1006_lecture1.pdf" },
    ],
    ENG1004: [
      { name: "Lecture 1 - Effective Technical Communication", link: "/pdfs/ENG1004_lecture1.pdf" },
    ],
    ENG2005: [
      { name: "Lecture 1 - Advanced Technical Communication", link: "/pdfs/ENG2005_lecture1.pdf" },
    ],
    DSN2092: [
      { name: "Lecture 1 - Summer Industrial Internship", link: "/pdfs/DSN2092_lecture1.pdf" },
    ],
    DSN2093: [
      { name: "Lecture 1 - Semester Internship", link: "/pdfs/DSN2093_lecture1.pdf" },
    ],
    DSN2098: [
      { name: "Lecture 1 - Project Exhibition – I", link: "/pdfs/DSN2098_lecture1.pdf" },
    ],
    DSN2099: [
      { name: "Lecture 1 - Project Exhibition – II", link: "/pdfs/DSN2099_lecture1.pdf" },
    ],
    DSN3099: [
      { name: "Lecture 1 - Engineering Project in Community Service", link: "/pdfs/DSN3099_lecture1.pdf" },
    ],
    DSN4091: [
      { name: "Lecture 1 - Capstone Project - Phase 1", link: "/pdfs/DSN4091_lecture1.pdf" },
    ],
    DSN4092: [
      { name: "Lecture 1 - Capstone Project - Phase 2", link: "/pdfs/DSN4092_lecture1.pdf" },
    ],
    CHY2007: [
      { name: "Lecture 1 - Modeling and Simulation of Biological Systems", link: "/pdfs/CHY2007_lecture1.pdf" },
    ],
    MAT2001: [
      { name: "Lecture 1 - Differential and Difference Equations", link: "/pdfs/MAT2001_lecture1.pdf" },
    ],
    MAT2003: [
      { name: "Lecture 1 - Applied Numerical Methods", link: "/pdfs/MAT2003_lecture1.pdf" },
    ],
    MAT2004: [
      { name: "Lecture 1 - Operations Research", link: "/pdfs/MAT2004_lecture1.pdf" },
    ],
    MAT3004: [
      { name: "Lecture 1 - Random Process", link: "/pdfs/MAT3004_lecture1.pdf" },
    ],
    MAT3008: [
      { name: "Lecture 1 - Computational Game Theory", link: "/pdfs/MAT3008_lecture1.pdf" },
    ],
    PHY2011: [
      { name: "Lecture 1 - Biophysics", link: "/pdfs/PHY2011_lecture1.pdf" },
    ],
    BIO1501: [
      { name: "Lecture 1 - Bio Inspired Design", link: "/pdfs/BIO1501_lecture1.pdf" },
    ],
    CDS3005: [
      { name: "Lecture 1 - Foundations of Data Science", link: "/pdfs/CDS3005_lecture1.pdf" },
    ],
    CSD3010: [
      { name: "Lecture 1 - Cyber Physical Systems", link: "/pdfs/CSD3010_lecture1.pdf" },
    ],
    CSG2003: [
      { name: "Lecture 1 - Human Computer Interaction", link: "/pdfs/CSG2003_lecture1.pdf" },
    ],
    EAC4012: [
      { name: "Lecture 1 - Body Area Networks", link: "/pdfs/EAC4012_lecture1.pdf" },
    ],
    ECE4006: [
      { name: "Lecture 1 - Sensors and IoT", link: "/pdfs/ECE4006_lecture1.pdf" },
    ],
    ENG3001: [
      { name: "Lecture 1 - Introduction to Computational Linguistics", link: "/pdfs/ENG3001_lecture1.pdf" },
    ],
    MEA3015: [
      { name: "Lecture 1 - Unmanned Aerial Vehicles", link: "/pdfs/MEA3015_lecture1.pdf" },
    ],
    BMT1013: [
      { name: "Lecture 1 - Human Resource Management", link: "/pdfs/BMT1013_lecture1.pdf" },
    ],
    BMT2017: [
      { name: "Lecture 1 - International Business", link: "/pdfs/BMT2017_lecture1.pdf" },
    ],
    HUM1002: [
      { name: "Lecture 1 - Emotional Intelligence", link: "/pdfs/HUM1002_lecture1.pdf" },
    ],
    HUM2001: [
      { name: "Lecture 1 - Behavioural Science", link: "/pdfs/HUM2001_lecture1.pdf" },
    ],
    MGT1002: [
      { name: "Lecture 1 - Principles of Management and Organizational Behaviour", link: "/pdfs/MGT1002_lecture1.pdf" },
    ],
    MGT2003: [
      { name: "Lecture 1 - Technology Entrepreneurship", link: "/pdfs/MGT2003_lecture1.pdf" },
    ],
    CSE0001: [
      { name: "Lecture 1 - Digital Literacy", link: "/pdfs/CSE0001_lecture1.pdf" },
    ],
    CSE0002: [
      { name: "Lecture 1 - Open Source Software (Linux Administration)", link: "pdfs/CSE0002_lecture1.pd/f" },
    ],
    EXC0001: [
      { name: "Lecture 1 - Extra Curricular Activities", link: "/pdfs/EXC0001_lecture1.pdf" },
    ],
    HUM0002: [
      { name: "Lecture 1 - Swachh Bharat", link: "/pdfs/HUM0002_lecture1.pdf" },
    ],
    HUM0003: [
      { name: "Lecture 1 - Indian Constitution", link: "/pdfs/HUM0003_lecture1.pdf" },
    ],
    HUM0004: [
      { name: "Lecture 1 - Indian Heritage", link: "/pdfs/HUM0004_lecture1.pdf" },
    ],
    UHV0001: [
      { name: "Lecture 1 - Universal Human Values - I", link: "/pdfs/UHV0001_lecture1.pdf" },
    ]
  }



const Notes = () => {
  const { subjectCode } = useParams();
  const notes = notesData[subjectCode] || [];

  return (
    <div className="notes-container">
      <h2>Notes & E-books for {subjectCode}</h2>
      {notes.length > 0 ? (
        <div className="notes-list">
          {notes.map((note, index) => (
            <div key={index} className="note-item">
              <a href={note.link} target="_blank" rel="noopener noreferrer" className="note-link">
                📄 {note.name}
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-notes">No notes available.</p>
      )}
    </div>
  );
};

export default Notes;
