export interface Event {
  id: string;
  title: string;
  date: string;
  category: 'Workshop' | 'Competition' | 'Seminar' | 'Hackathon' | 'Lecture';
  description: string;
  longDescription: string;
  venue: string;
  image: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  images: { url: string; caption: string }[];
}

export interface ChapterLeader {
  name: string;
  role: string;
  photo: string;
  description: string;
}

export interface Chapter {
  id: string;
  name: string;
  code: string;
  description: string;
  vision: string;
  mission: string;
  objectives: string[];
  images: string[];
  leaders: ChapterLeader[];
}

export interface MainLeader {
  name: string;
  role: string;
  photo: string;
  department: string;
  linkedin?: string;
  email?: string;
}

export interface ContactInfo {
  ieeeLead: string;
  collegeEmail: string;
  phone: string;
  address: string;
  linkedin: string;
  instagram: string;
}

export const eventsData: Event[] = [
  {
    id: 'ev-1',
    title: 'NMIET Hack-a-Thon 2026',
    date: 'March 14-15, 2026',
    category: 'Hackathon',
    description: 'A 24-hour national level hackathon challenge to solve real-world problems in smart cities, health tech, and sustainability.',
    longDescription: 'NMIET Hack-a-Thon 2026 is our flagship hacking event. Bring your team, code for 24 hours straight, and pitch your solutions to a panel of expert judges from industry leaders. Mentors will be available throughout the night to guide your development. Cash prizes, certificates, and potential incubation opportunities await the winners.',
    venue: 'Main Seminar Hall & Central Computing Lab',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ev-2',
    title: 'Workshop on Generative AI & LLMs',
    date: 'April 05, 2026',
    category: 'Workshop',
    description: 'Hands-on training session on fine-tuning large language models and building custom RAG pipelines.',
    longDescription: 'This workshop provides a deep dive into the world of Generative AI. Designed for students who have basic programming knowledge, it covers API integrations, local model execution (Ollama), Retrieval-Augmented Generation (RAG), and vector databases. Participants will build and deploy their own AI chat assistant by the end of the day.',
    venue: 'CSE Department Lab 3',
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ev-3',
    title: 'National Coding Showdown',
    date: 'April 22, 2026',
    category: 'Competition',
    description: 'An intense competitive programming competition designed to test data structures and algorithmic efficiency.',
    longDescription: 'Gear up for the annual National Coding Showdown! Hosted on HackerRank, this event features 8 algorithmic challenges ranging from easy to expert difficulty. Compete against hundreds of students nationwide to claim the title of NMIET\'s Ultimate Coder.',
    venue: 'Online & AIDS Lab',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ev-4',
    title: 'IEEE Awareness & Orientation Session',
    date: 'May 02, 2026',
    category: 'Seminar',
    description: 'Introductory seminar showcasing the global benefits, research publishing avenues, and networking opportunities of IEEE membership.',
    longDescription: 'New to IEEE? Join our awareness session to understand how the world\'s largest professional organization can benefit your academic career. Learn about student paper publishing, travel grants, IEEE Xplore digital library access, global competitions (like IEEEXtreme), and how to apply for leadership roles in our student branch.',
    venue: 'Academic Block Auditorium',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ev-5',
    title: 'Next-Gen Cybersecurity Paradigms',
    date: 'May 18, 2026',
    category: 'Lecture',
    description: 'An expert guest lecture focusing on Zero-Trust architectures and security patterns in cloud systems.',
    longDescription: 'We are hosting a distinguished cybersecurity specialist to present on the shifting landscape of enterprise security. Learn about zero-trust design patterns, IAM best practices, threat modeling, and career trajectories in digital forensics and information security.',
    venue: 'MBA Seminar Hall',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ev-6',
    title: 'AI/ML Project Exhibition',
    date: 'June 10, 2026',
    category: 'Competition',
    description: 'Showcase your innovation project to academic peers and engineering experts in our annual exhibition.',
    longDescription: 'The AI/ML Project Exhibition is a stage for students to display their working software and hardware systems. Projects will be evaluated on technical sophistication, novel design, documentation quality, and presentation clarity. Top projects will be nominated for the regional IEEE Student Project Funding.',
    venue: 'College Central Lawn & Foyer',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
  }
];

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'album-1',
    title: 'Inauguration of IEEE Student Branch',
    images: [
      { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80', caption: 'Opening ceremony and welcome address' },
      { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80', caption: 'Student branch registration desk and orientation' },
      { url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', caption: 'Students engaging in the inaugural session' },
      { url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80', caption: 'Interaction with faculty and branch leaders' }
    ]
  },
  {
    id: 'album-2',
    title: 'Quantum Computing Workshop',
    images: [
      { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80', caption: 'Expert speaker explaining quantum concepts' },
      { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', caption: 'Students learning practical quantum workflows' },
      { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', caption: 'Hands-on session with modern computing tools' },
      { url: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80', caption: 'Interactive Q&A session with attendees' }
    ]
  },
  {
    id: 'album-3',
    title: 'Blood Donation Camp',
    images: [
      { url: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80', caption: 'Volunteers organizing the donation camp setup' },
      { url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80', caption: 'Students giving blood with care and enthusiasm' },
      { url: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80', caption: 'Medical staff supporting the event smoothly' },
      { url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80', caption: 'Team photo after a successful donation drive' }
    ]
  }
];

export const chaptersData: Chapter[] = [
  {
    id: 'ch-cse',
    name: 'Computer Science and Engineering',
    code: 'CSE',
    description: 'Explore the IEEE community for Computer Science and Engineering students, focusing on software development, cloud systems, and compiler design.',
    vision: 'To build a community of innovative software engineers and researchers capable of addressing global computational challenges.',
    mission: 'To provide high-quality learning resources, competitive programming bootcamps, and platforms for software development to student members.',
    objectives: [
      'Conduct hands-on sessions on modern programming languages and frameworks.',
      'Organize competitive coding competitions to boost algorithmic thinking.',
      'Host system architecture seminars led by expert industrial developers.',
      'Encourage open-source software contributions and collaborative research.'
    ],
    images: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80'
    ],
    leaders: [
      {
        name: 'Amit Verma',
        role: 'Chapter Chair',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
        description: 'Final Year CSE student specialized in Distributed Systems and Cloud computing. Open-source enthusiast.'
      },
      {
        name: 'Priya Sharma',
        role: 'Technical Lead',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80',
        description: 'Pre-final Year CSE student interested in algorithms, operating systems, and full-stack software development.'
      }
    ]
  },
  {
    id: 'ch-csea',
    name: 'Computer Science & Engineering (AI)',
    code: 'CSE AI',
    description: 'Focusing on artificial intelligence, neural networks, and prompt engineering, training students to pioneer next-generation autonomous systems.',
    vision: 'To establish NMIET as a hub of excellence for artificial intelligence training and ethical machine learning applications.',
    mission: 'To bridge academic curricula with active industry developments in AI/ML through hands-on model training, deployment, and optimization.',
    objectives: [
      'Run crash courses on PyTorch, TensorFlow, and deep learning architectures.',
      'Demonstrate local execution of large language models and prompt setups.',
      'Analyze the societal impacts and ethics of AI and agentic systems.',
      'Collaborate on practical computer vision and NLP college applications.'
    ],
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503676260728-1d2f0b8f3f3d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80'
    ],
    leaders: [
      {
        name: 'Rohan Deshmukh',
        role: 'Chapter Chair',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
        description: 'Final Year CSE AI student working on autonomous agent pipelines and deep reinforcement learning.'
      },
      {
        name: 'Anjali Patil',
        role: 'Technical Lead',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80',
        description: 'Third-year CSE AI enthusiast focused on Natural Language Processing (NLP) and fine-tuning foundations.'
      }
    ]
  },
  {
    id: 'ch-aids',
    name: 'Artificial Intelligence & Data Science',
    code: 'AIDS',
    description: 'Empowering students with data engineering, database design, statistical models, and advanced machine learning skills.',
    vision: 'To empower students to become skilled data engineers and analytical experts who can extract insights from unstructured big data.',
    mission: 'To cultivate technical capabilities in predictive modeling, statistical testing, vector representations, and data visualization tools.',
    objectives: [
      'Train students in advanced SQL, NoSQL databases, and vector storage engines.',
      'Practice data preparation, exploratory data analysis, and predictive workflows.',
      'Organize Datathons to solve analytics problems for public/social datasets.',
      'Explain practical business intelligence and analytics dashboards.'
    ],
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80'
    ],
    leaders: [
      {
        name: 'Siddharth Joshi',
        role: 'Chapter Chair',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80',
        description: 'Final Year AIDS student with double internships in Big Data engineering and pipeline automation.'
      },
      {
        name: 'Sneha Nair',
        role: 'Event Lead',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80',
        description: 'Pre-final Year student specialized in data visualization, analytics stories, and event planning.'
      }
    ]
  },
  {
    id: 'ch-it',
    name: 'Information Technology',
    code: 'IT',
    description: 'Engaging with web development, enterprise systems, system administration, cybersecurity, and DevOps workflows.',
    vision: 'To shape future IT professionals skilled in modern secure system management, DevOps operations, and cloud solutions.',
    mission: 'To offer training on automated deployment, cloud configuration (AWS/Azure), containerization, and enterprise security tools.',
    objectives: [
      'Instruct on Linux systems administration, Docker container setups, and shell scripting.',
      'Run workshops on continuous integration/continuous deployment (CI/CD) practices.',
      'Promote secure design coding paradigms and defense-in-depth principles.',
      'Support students in building production-ready scalable web architectures.'
    ],
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517430816045-df4b8defddb0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1558494949cc5c3f1c1b8b3b7a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=900&q=80'
    ],
    leaders: [
      {
        name: 'Vikram Singh',
        role: 'Chapter Chair',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400&q=80',
        description: 'Final Year IT student. Devops practitioner experienced with AWS, Docker, Kubernetes, and Terraform.'
      },
      {
        name: 'Neha Kulkarni',
        role: 'Vice Chair',
        photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&h=400&q=80',
        description: 'Pre-final Year IT student focused on cybersecurity, penetration testing, and secure system configurations.'
      }
    ]
  },
  {
    id: 'ch-ce',
    name: 'Computer Engineering',
    code: 'CE',
    description: 'Combining hardware architecture and software systems. Exploring IoT, embedded controllers, and hardware-software integration.',
    vision: 'To build a strong base for cyber-physical systems development, IoT designs, and hardware-software collaborative architectures.',
    mission: 'To provide experiential lab opportunities in robotics, Arduino/Raspberry Pi programming, and low-level firmware development.',
    objectives: [
      'Conduct hardware tinkering sessions, circuit assembly, and micro-controller coding.',
      'Design IoT systems that sense environmental parameters and actuate responses.',
      'Explore firmware engineering, RTOS operations, and hardware debugging tools.',
      'Prepare students for embedded developer careers in telecomm and automation.'
    ],
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80'
    ],
    leaders: [
      {
        name: 'Aditya Gupta',
        role: 'Chapter Chair',
        photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&h=400&q=80',
        description: 'Final Year Computer Engineering student. Built smart agricultural monitoring systems using ESP32.'
      },
      {
        name: 'Tanvi Deshpande',
        role: 'Technical Lead',
        photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&h=400&q=80',
        description: 'Third-year CE student interested in firmware, embedded systems, and robotics controls.'
      }
    ]
  }
];

export const mainTeamData: MainLeader[] = [
  {
    name: 'Dr. Rajesh Patil',
    role: 'IEEE Branch Counselor',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
    department: 'Computer Science Department',
    linkedin: 'https://linkedin.com',
    email: 'rajesh.patil@nmiet.edu.in'
  },
  {
    name: 'Aryan Kulkarni',
    role: 'Student Branch Chairperson',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=400&q=80',
    department: 'Computer Science & Engineering',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Shreya Kadam',
    role: 'Student Branch Vice Chairperson',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80',
    department: 'Information Technology',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Rahul Mehta',
    role: 'Secretary',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
    department: 'Artificial Intelligence & Data Science',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Yash Vardhan',
    role: 'Technical Head',
    photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&h=400&q=80',
    department: 'Computer Science & Engineering (AI)',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Megha Deshmukh',
    role: 'Event Head',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
    department: 'Computer Engineering',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Karan Shah',
    role: 'Public Relations Head',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&h=400&q=80',
    department: 'Information Technology',
    linkedin: 'https://linkedin.com'
  }
];

export const contactDetails: ContactInfo = {
  ieeeLead: 'Dr. Rajesh Patil (IEEE Branch Counselor, NMIET)',
  collegeEmail: 'ieee@nmiet.edu.in',
  phone: '+91 20 2765 4321',
  address: 'IEEE Student Branch NMIET, Nutan Maharashtra Institute of Engineering and Technology, Talegaon Dabhade, Pune, Maharashtra 410507, India',
  linkedin: 'https://www.linkedin.com/in/ieee-nmiet-student-branch-b35911421?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  instagram: 'https://www.instagram.com/ieee.nmiet?igsh=MXZ0cThqbjB4c2kwZg=='
};
