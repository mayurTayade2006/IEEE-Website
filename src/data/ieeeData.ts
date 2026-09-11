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
  tagline?: string;
  description: string;
  vision: string;
  mission: string;
  objectives: string[];
  images: string[];
  leaders: ChapterLeader[];
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  description: string;
}

export interface FunctionalTeam {
  id: string;
  name: string;
  tagline: string;
  description: string;
  responsibilities: string[];
  lead: TeamMember;
  members: TeamMember[];
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
  },
  {
    id: 'ev-7',
    title: 'Hands-on Workshop: Ganesha Idol Making',
    date: 'September 11, 2026',
    category: 'Workshop',
    description: 'Eco-friendly Ganesha idol making workshop with expert Mr. Ajay Ghuge to celebrate sustainability and creativity.',
    longDescription: 'Participate in the hands-on Eco-Friendly Ganesha Idol Making Workshop organized by PCET-NMIET and IEEE Student Branch. Guided by expert art teacher Mr. Ajay Ghuge, learn traditional clay sculpting techniques with zero environmental impact. Best Eco-Friendly Ganesh Idol Making Group will be awarded special prizes!',
    venue: 'Wing-B Lawn, NMIET',
    image: '/gallery/ganesh_idol_making_poster.jpg'
  },
  {
    id: 'ev-8',
    title: 'Hands-on Workshop: Prompt Engineering',
    date: 'September 12, 2026',
    category: 'Workshop',
    description: 'Master prompt craft, LLM interaction paradigms, and generative AI reasoning with Dr. Naresh Kaushik.',
    longDescription: 'Organized by IEEE Student Branch NMIET, this interactive hands-on workshop led by Dr. Naresh Kaushik (Assistant Professor, uGDX School of Technology) equips students with foundational and advanced prompt engineering strategies, few-shot prompting, chain-of-thought paradigms, and LLM optimization.',
    venue: 'Online (Google Meet)',
    image: '/gallery/prompt_engineering_poster.jpg'
  }
];

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'album-1',
    title: 'Inauguration of IEEE Student Branch',
    images: [
      { url: '/gallery/innoguration/inno.jpg', caption: 'Opening ceremony and welcome address' },
      { url: '/gallery/spm1.JPG', caption: 'Sarswati Pujan' },
      { url: '/gallery/rangoliie.jpg', caption: 'Rangoli of inaugural session' },
      { url: '/gallery/regamag1.jpg', caption: 'Student branch registration desk and orientation' },
      { url: '/gallery/prep2ab.jpg', caption: 'Letters and managing documents in the inaugural session' },
      { url: '/gallery/Techprepm.jpg', caption: 'Technical and Social media team performing in the inaugural session' },
      { url: '/gallery/particieee.jpg', caption: 'Students engaging in the inaugural session' },
      { url: '/gallery/innoguration/student enjoy.jpg', caption: 'Students engaging in the inaugural session' },
      { url: '/gallery/ieeeteam.jpg', caption: 'IEEE Team in the inaugural session' }
    ]
  },
  {
    id: 'album-2',
    title: 'Quantum Computing Workshop',
    images: [
      { url: '/gallery/Quantum Session/Quantums.jpg', caption: 'Expert speaker explaining quantum concepts' },
      { url: '/gallery/Quantum Session/image.png', caption: 'Expert speaker explaining quantum concepts' },
      { url: '/gallery/Quantum Session/interaction.jpg', caption: 'Quiz Competation instrctions.' },
      { url: '/gallery/Quantum Session/Quant_Qui1.jpg', caption: 'Quiz Competation in the Quantum session' },
      { url: '/gallery/Quantum Session/QuizS.jpg', caption: 'Students Response and pic' },
      { url: '/gallery/Quantum Session/winnerbes.jpg', caption: 'Quiz winner in the Quantum Quiz' },
    ]
  },
  {
    id: 'album-3',
    title: 'Blood Donation Camp',
    images: [
      { url: '/gallery/Blood Donation/discussion.jpg', caption: 'Team members and co-coordinators discussing event planning and coordination' },
      { url: '/gallery/Blood Donation/bl inno.jpg', caption: 'Inauguration ceremony officially marking the commencement of the event' },
      { url: '/gallery/Blood Donation/blood don regi desk.jpg', caption: 'Registration desk the donation camp setup' },
      { url: '/gallery/Blood Donation/faculty visit to donor.jpg', caption: 'Visitors interacting and meeting with team and blood donors' },
      { url: '/gallery/Blood Donation/Blood d mam Arr.jpg', caption: 'Management team & Co-ordinator supporting and coordinating the event successfully' },
      { url: '/gallery/Blood Donation/nutrition desk.jpg', caption: 'Nutrition and body wellness consultation services desk' },
      { url: '/gallery/Blood Donation/blcamp.jpg', caption: 'Students giving blood with care and enthusiasm' },
      { url: '/gallery/Blood Donation/eye checkup.jpg', caption: 'Students receiving eye checkups at the medical desk' },
      { url: '/gallery/ieeeteam.jpg', caption: 'Team photo after a successful donation drive' }
    ]
  },
  {
    id: 'album-4',
    title: 'Ganesha Idol Making Workshop',
    images: [
      { 
        url: '/gallery/ganesh_idol_making_poster.jpg', 
        caption: 'Hands-on Workshop on Divine Creations: Eco-Friendly Ganesha Idol Making Workshop with Expert Mr. Ajay Ghuge' 
      }
    ]
  },
  {
    id: 'album-5',
    title: 'Prompt Engineering Workshop',
    images: [
      { 
        url: '/gallery/prompt_engineering_poster.jpg', 
        caption: 'Hands-on Workshop on Prompt Engineering with Resource Person Dr. Naresh Kaushik' 
      }
    ]
  }
];

export const chaptersData: Chapter[] = [
  {
    id: 'ch-cs',
    name: 'Computer Society',
    code: 'CS',
    tagline: 'Innovate • Investigate • Impact',
    description: 'Founded in 1946, the IEEE Computer Society is the premier community for computing professionals and students, advancing theory, software engineering, architecture, and technology innovations worldwide.',
    vision: 'To build a vibrant community of innovative software engineers, competitive programmers, and researchers addressing real-world challenges.',
    mission: 'To foster technical excellence, collaborative coding, open-source development, and professional growth across modern computer science disciplines.',
    objectives: [
      'Conduct hands-on masterclasses on full-stack development and modern architectures.',
      'Host competitive programming contests and coding hackathons.',
      'Organize industry mentorship sessions with leading software developers.',
      'Encourage open-source contributions and research publications.'
    ],
    images: [
      '/chapters/cs_poster.png'
    ],
    leaders: [
      {
        name: 'Om Rathod',
        role: 'CS Chairperson',
        photo: '/team/cs/om_rathod.png',
        description: 'Leading teams, shaping impactful initiatives, and turning vision into action.'
      },
      {
        name: 'Parikshit Bakal',
        role: 'CS Vice-Chair',
        photo: '/team/cs/parikshit_bakal.png',
        description: 'Contributing through teamwork, technical leadership, and collaborative results.'
      },
      {
        name: 'Mayur Tayade',
        role: 'CS Secretary',
        photo: '/team/cs/mayur_tayade.png',
        description: 'Passionate about turning ideas into organized, impactful initiatives.'
      },
      {
        name: 'Pranav Swami',
        role: 'CS Treasurer',
        photo: '/team/cs/pranav_swami.png',
        description: 'Managing branch finance, allocations, and event budget coordination.'
      },
      {
        name: 'Ved Sakarkar',
        role: 'CS Webmaster',
        photo: '/team/cs/ved_sakarkar.png',
        description: 'Focused on building responsive, engaging, and reliable web experiences.'
      }
    ]
  },
  {
    id: 'ch-cis',
    name: 'Computer Intelligence Society',
    code: 'CIS',
    tagline: 'Innovate • Intelligent • Impact',
    description: 'Empowering students to innovate in artificial intelligence, neural computing, deep learning, agentic pipelines, and machine intelligence paradigms.',
    vision: 'To establish NMIET as a center of innovation in computational intelligence, intelligent agent systems, and ethical AI applications.',
    mission: 'To bridge academic foundations with modern industry breakthroughs through hands-on model training, neural architectures, and intelligent solutions.',
    objectives: [
      'Conduct workshops on deep learning frameworks, PyTorch, and neural computation.',
      'Build hands-on pipelines for LLMs, Retrieval-Augmented Generation (RAG), and agents.',
      'Organize AI hackathons to solve complex domain-specific challenges.',
      'Analyze ethics, interpretability, and societal impacts of autonomous AI systems.'
    ],
    images: [
      '/chapters/cis_poster.png'
    ],
    leaders: [
      {
        name: 'Parth Muley',
        role: 'CIS Chair',
        photo: '/team/cis/parth_muley.png',
        description: 'Leading computational intelligence research, agentic pipelines, and chapter growth.'
      },
      {
        name: 'Khushi Upadhyay',
        role: 'CIS Vice Chair',
        photo: '/team/cis/khushi_upadhyay.png',
        description: 'Driving AI initiatives, student workshops, and technical development.'
      },
      {
        name: 'Sanskruti Shedge',
        role: 'CIS Secretary',
        photo: '/team/cis/sanskruti_shedge.png',
        description: 'Managing chapter communications, operations, and organizational coordination.'
      },
      {
        name: 'Prem Swami',
        role: 'CIS Treasurer',
        photo: '/team/cis/prem_swami.png',
        description: 'Overseeing financial planning, allocations, and event execution.'
      },
      {
        name: 'Vaishnavi Sargar',
        role: 'CIS Webmaster',
        photo: '/team/cis/vaishnavi_sargar.png',
        description: 'Developing digital platforms, interactive interfaces, and chapter web assets.'
      },
      {
        name: 'Atharva Sharma',
        role: 'CIS Team Member',
        photo: '/team/cis/atharva_sharma.png',
        description: 'Contributing to machine learning projects, datathons, and workshop support.'
      }
    ]
  },
  {
    id: 'ch-ras',
    name: 'Robotics & Automation Society',
    code: 'RAS',
    tagline: 'Innovate • Intelligent • Impact',
    description: 'Fostering practical expertise in autonomous robotics, embedded microcontrollers, ROS architectures, sensor integration, and intelligent cyber-physical systems.',
    vision: 'To build a robust ecosystem for autonomous robotics development, embedded engineering, and automated cyber-physical systems.',
    mission: 'To provide experiential tinkering labs in robotics, ROS simulation, Arduino/Raspberry Pi prototyping, and automated controls.',
    objectives: [
      'Conduct hardware workshops on microcontrollers, sensor interfacing, and actuator drives.',
      'Explore ROS (Robot Operating System), SLAM algorithms, and autonomous navigation.',
      'Organize robotics competitions and line-follower/obstacle-avoidance challenges.',
      'Prepare students for careers in industrial automation, robotics, and cybernetics.'
    ],
    images: [
      '/chapters/ras_poster.png'
    ],
    leaders: [
      {
        name: 'Mokshada Naphade',
        role: 'RAS Chair',
        photo: '/team/ras/mokshada_naphade.png',
        description: 'Directing robotics initiatives, automation research, and chapter projects.'
      },
      {
        name: 'Shrikant More',
        role: 'RAS Vice Chair',
        photo: '/team/ras/shrikant_more.png',
        description: 'Guiding hardware implementations, mechanical prototyping, and design.'
      },
      {
        name: 'Aarya Deshmukh',
        role: 'RAS Secretary',
        photo: '/team/ras/aarya_deshmukh.png',
        description: 'Facilitating smooth chapter administration, documentation, and coordination.'
      },
      {
        name: 'Purva Yadav',
        role: 'RAS Treasurer',
        photo: '/team/ras/purva_yadav.png',
        description: 'Managing chapter finances, components inventory, and event budgeting.'
      },
      {
        name: 'Abhirop Mandal',
        role: 'RAS Webmaster',
        photo: '/team/ras/abhirop_mandal.png',
        description: 'Building interactive chapter portals and digital project portfolios.'
      },
      {
        name: 'Shruti Sonar',
        role: 'RAS Team Member',
        photo: '/team/ras/shruti_sonar.png',
        description: 'Actively designing embedded circuits and microcontroller prototypes.'
      },
      {
        name: 'Anushka Bansode',
        role: 'RAS Team Member',
        photo: '/team/ras/anushka_bansode.png',
        description: 'Contributing to autonomous controls, sensor integration, and team projects.'
      }
    ]
  },
  {
    id: 'ch-sps',
    name: 'Signal Processing Society',
    code: 'SPS',
    tagline: 'Innovate • Intelligent • Impact',
    description: 'Advancing the theory and application of digital signal, speech, audio, image, and biomedical signal processing along with communication technologies.',
    vision: 'To cultivate skilled engineers in digital signal processing, multimedia communications, biomedical data extraction, and real-time DSP systems.',
    mission: 'To deliver hands-on training in DSP algorithms, filter synthesis, transformation techniques, and next-gen communication protocols.',
    objectives: [
      'Instruct on DSP algorithms, MATLAB/Python signal toolboxes, and digital filters.',
      'Conduct workshops on speech synthesis, audio processing, and biomedical signals.',
      'Explore computer vision transformations, FFT algorithms, and signal restoration.',
      'Support students in developing real-time embedded DSP applications.'
    ],
    images: [
      '/chapters/sps_poster.png'
    ],
    leaders: [
      {
        name: 'Praharsh Patil',
        role: 'SPS Chair',
        photo: '/team/sps/praharsh_patil.png',
        description: 'Leading DSP research, technical workshops, and chapter activities.'
      },
      {
        name: 'Manas Patil',
        role: 'SPS Vice-Chair',
        photo: '/team/sps/manas_patil.png',
        description: 'Coordinating signal analysis projects and hands-on laboratory sessions.'
      },
      {
        name: 'Chaitali Divekar',
        role: 'SPS Secretary',
        photo: '/team/sps/chaitali_divekar.png',
        description: 'Managing branch documentation, event logistics, and member relations.'
      },
      {
        name: 'Tejaswini Patil',
        role: 'SPS Treasurer',
        photo: '/team/sps/tejaswini_patil.png',
        description: 'Handling financial administration and chapter event budgeting.'
      },
      {
        name: 'Sakshi Babar',
        role: 'SPS Webmaster',
        photo: '/team/sps/sakshi_babar.png',
        description: 'Designing web assets, digital presence, and technical showcase pages.'
      },
      {
        name: 'Sandyarani bukke',
        role: 'SPS Team Member',
        photo: '/team/sps/sandyarani_bukke.png',
        description: 'Engaging in multimedia signal processing and filter design research.'
      }
    ]
  },
  {
    id: 'ch-smc',
    name: 'System Man and Cybernetic Society',
    code: 'SMC',
    tagline: 'Innovate • Intelligent • Impact',
    description: 'Pioneering systems science, cybernetics, human-machine systems, computational cybernetics, and complex adaptive system architectures.',
    vision: 'To develop analytical expertise in complex systems design, human-machine interactions, and intelligent cybernetic feedback systems.',
    mission: 'To provide experiential learning in systems engineering, human-in-the-loop systems, cybernetic modeling, and predictive analytics.',
    objectives: [
      'Train students in systems science, feedback control, and cybernetic architectures.',
      'Explore human-machine interfaces, assistive technologies, and usability engineering.',
      'Organize datathons and systems simulation challenges on complex datasets.',
      'Bridge hardware-software systems with cognitive and cybernetic computing.'
    ],
    images: [
      '/chapters/smc_poster.png'
    ],
    leaders: [
      {
        name: 'Lisha Talale',
        role: 'SMC Chair',
        photo: '/team/smc/lisha_talale.png',
        description: 'Leading systems science initiatives, human-machine systems, and chapter strategy.'
      },
      {
        name: 'Yash Madane',
        role: 'SMC Vice-Chair',
        photo: '/team/smc/yash_madane.png',
        description: 'Assisting in chapter coordination and cybernetic project development.'
      },
      {
        name: 'Mansi Khairnar',
        role: 'SMC Secretary',
        photo: '/team/smc/mansi_khairnar.png',
        description: 'Overseeing chapter operations, event planning, and records.'
      },
      {
        name: 'Pratik Sonawane',
        role: 'SMC Treasurer',
        photo: '/team/smc/pratik_sonawane.png',
        description: 'Directing chapter budgeting, funds allocation, and accounts.'
      },
      {
        name: 'Shubham Aher',
        role: 'SMC Webmaster',
        photo: '/team/smc/shubham_aher.png',
        description: 'Building web experiences and digital interfaces for SMC.'
      },
      {
        name: 'Shrutika Patil',
        role: 'SMC Team Member',
        photo: '/team/smc/shrutika_patil.png',
        description: 'Contributing to cybernetic systems research and collaborative projects.'
      }
    ]
  }
];

export const mainTeamData: MainLeader[] = [
  {
    name: 'Dr. Seema Mahalungkar',
    role: 'IEEE Branch Counselor',
    photo: '/teams/execom/dr_seema_mahalungkar.png',
    department: 'Branch Counselor & Faculty Advisor',
    linkedin: 'https://linkedin.com',
    email: 'seema.mahalungkar@nmiet.edu.in'
  },
  {
    name: 'Parth Muley',
    role: 'Student Branch Chair',
    photo: '/teams/execom/parth_muley.png',
    department: 'Branch Chairperson',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Mayur Tayade',
    role: 'Student Branch Webmaster',
    photo: '/teams/execom/mayur_tayade.png',
    department: 'Branch Webmaster',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Om Rathod',
    role: 'Student Branch Vice-Chair',
    photo: '/teams/execom/om_rathod.png',
    department: 'Branch Vice Chairperson',
    linkedin: 'https://www.linkedin.com/in/omr3106/'
  },
  {
    name: 'Mokshada Naphade',
    role: 'Student Branch Secretary',
    photo: '/teams/execom/mokshada_naphade.png',
    department: 'Branch Secretary',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Atharva Sharma',
    role: 'Student Branch Treasurer',
    photo: '/teams/execom/atharva_sharma.png',
    department: 'Branch Treasurer',
    linkedin: 'https://linkedin.com'
  }
];

export const functionalTeamsData: FunctionalTeam[] = [
  {
    id: 'team-social',
    name: 'Social Media Team',
    tagline: 'Innovate • Collaborate • Impact',
    description: 'The creative voice and visual storyteller of IEEE NMIET, handling digital branding, content creation, social campaigns, event promotions, and community outreach across Instagram, LinkedIn, and online portals.',
    responsibilities: [
      'Create compelling digital content, promotional graphics, and video reels for branch activities.',
      'Manage official IEEE NMIET social media handles and drive student engagement.',
      'Provide live coverage, photography, and highlights during hackathons and workshops.',
      'Promote IEEE global technical initiatives, student benefits, and branch milestones.'
    ],
    lead: {
      name: 'Shruti Sonar',
      role: 'Social Media Lead',
      photo: '/teams/social/shruti_sonar.png',
      description: 'Directing digital content strategy, branding, and social engagement across platforms.'
    },
    members: [
      {
        name: 'Neha Ghodke',
        role: 'Team Member',
        photo: '/teams/social/neha_ghodke.png',
        description: 'Contributing to creative graphics, posters, and visual branding.'
      },
      {
        name: 'Chaitali Divekar',
        role: 'Team Member',
        photo: '/teams/social/chaitali_divekar.png',
        description: 'Managing content calendars, copywriting, and event announcements.'
      },
      {
        name: 'Tejaswini Patil',
        role: 'Team Member',
        photo: '/teams/social/tejaswini_patil.png',
        description: 'Creating video content, reels, and multimedia promotional assets.'
      },
      {
        name: 'Shravani Nangare',
        role: 'Team Member',
        photo: '/teams/social/shravani_nangare.png',
        description: 'Assisting in audience engagement, community queries, and storytelling.'
      },
      {
        name: 'Yogesh Gate',
        role: 'Team Member',
        photo: '/teams/social/yogesh_gate.png',
        description: 'Supporting photography, live event documentation, and visual layouts.'
      },
      {
        name: 'Pratiksha Kokane',
        role: 'Team Member',
        photo: '/teams/social/pratiksha_kokane.png',
        description: 'Crafting engaging social media posts and event promotional campaigns.'
      }
    ]
  },
  {
    id: 'team-tech',
    name: 'Tech Team',
    tagline: 'Innovate • Investigate • Impact',
    description: 'The technical backbone of IEEE NMIET, architecting digital platforms, building web applications, maintaining server infrastructure, and powering coding hackathons and branch systems.',
    responsibilities: [
      'Design, build, and maintain official IEEE NMIET web platforms and applications.',
      'Deploy automated registration portals, scoring dashboards, and hackathon platforms.',
      'Manage cloud hosting, databases, domain infrastructure, and CI/CD pipelines.',
      'Conduct technical mentoring and internal coding masterclasses for branch members.'
    ],
    lead: {
      name: 'Mayur Tayade',
      role: 'Tech Lead',
      photo: '/teams/tech/mayur_tayade.png',
      description: 'Leading web architecture, full-stack development, and digital infrastructure.'
    },
    members: [
      {
        name: 'Shubham Aher',
        role: 'Tech Member',
        photo: '/teams/tech/shubham_aher.png',
        description: 'Focused on frontend development, UI/UX implementation, and responsive design.'
      },
      {
        name: 'Yogesh Gate',
        role: 'Tech Member',
        photo: '/teams/tech/yogesh_gate.png',
        description: 'Working on backend APIs, database integration, and performance optimization.'
      },
      {
        name: 'Yash Madane',
        role: 'Tech Member',
        photo: '/teams/tech/yash_madane.png',
        description: 'Building interactive web components, client applications, and bug testing.'
      },
      {
        name: 'Abhishek Shelar',
        role: 'Tech Member',
        photo: '/teams/tech/abhishek_shelar.png',
        description: 'Contributing to software testing, version control workflows, and tooling.'
      },
      {
        name: 'Sujal Khot',
        role: 'Technical Co-ordinator',
        photo: '/teams/tech/sujal_khot.png',
        description: 'Coordinating technical tasks, sprint planning, and infrastructure support.'
      }
    ]
  },
  {
    id: 'team-research',
    name: 'Research Team',
    tagline: 'Innovate • Collaborate • Impact',
    description: 'Fostering a culture of academic rigor, technical research, and intellectual innovation, guiding students in publishing papers, filing patents, and contributing to IEEE conferences and journals.',
    responsibilities: [
      'Mentor students in academic paper writing, literature review, and IEEE formatting.',
      'Guide research projects in AI, IoT, cybersecurity, signal processing, and robotics.',
      'Coordinate student paper submissions to regional and national IEEE conferences.',
      'Organize technical research symposiums and expert journal discussion sessions.'
    ],
    lead: {
      name: 'Om Rathod',
      role: 'Research Lead',
      photo: '/teams/research/om_rathod.png',
      description: 'Leading research initiatives, conference submissions, and paper publication mentorship.'
    },
    members: [
      {
        name: 'Anuj Patil',
        role: 'Research Member',
        photo: '/teams/research/anuj_patil.png',
        description: 'Investigating emerging software paradigms and data science methodologies.'
      },
      {
        name: 'Anushka Bansode',
        role: 'Research Member',
        photo: '/teams/research/anushka_bansode.png',
        description: 'Conducting literature surveys and research in embedded & autonomous systems.'
      },
      {
        name: 'Anushka Singh',
        role: 'Research Member',
        photo: '/teams/research/anushka_singh.png',
        description: 'Assisting in technical documentation, data analysis, and academic writing.'
      },
      {
        name: 'Dhruva Jangam',
        role: 'Research Member',
        photo: '/teams/research/dhruva_jangam.png',
        description: 'Exploring intelligent computation architectures and experimental modeling.'
      },
      {
        name: 'Yash Jadhav',
        role: 'Research Member',
        photo: '/teams/research/yash_jadhav.png',
        description: 'Contributing to algorithmic benchmarking and research project prototypes.'
      }
    ]
  },
  {
    id: 'team-events',
    name: 'Event Organisation & Management Team',
    tagline: 'Plan • Coordinate • Execute • Create Impact',
    description: 'The dynamic operational force orchestrating all IEEE NMIET events, workshops, national hackathons, expert seminars, and student orientation drives from inception to flawless execution.',
    responsibilities: [
      'Plan end-to-end schedules, venues, audio-visual setups, and event logistics.',
      'Manage attendee registrations, volunteer delegations, and hospitality services.',
      'Coordinate guest speakers, industry experts, judges, and dignitaries.',
      'Ensure smooth execution, crowd management, and certificate distribution.'
    ],
    lead: {
      name: 'Atharva Sharma',
      role: 'Event Lead',
      photo: '/teams/events/atharva_sharma.png',
      description: 'Directing event operations, stage management, and volunteer coordination.'
    },
    members: [
      {
        name: 'Ved Sakarkar',
        role: 'Team Member',
        photo: '/teams/events/ved_sakarkar.png',
        description: 'Managing technical logistics, venue setups, and coordination.'
      },
      {
        name: 'Lokesh Pawar',
        role: 'Team Member',
        photo: '/teams/events/lokesh_pawar.png',
        description: 'Handling participant desks, registration flow, and on-ground logistics.'
      },
      {
        name: 'Sarthak Ghogare',
        role: 'Team Member',
        photo: '/teams/events/sarthak_ghogare.png',
        description: 'Assisting in venue setup, stage arrangements, and equipment coordination.'
      },
      {
        name: 'Gaurav Salunke',
        role: 'Team Member',
        photo: '/teams/events/gaurav_salunke.png',
        description: 'Supporting volunteer operations, attendee assistance, and scheduling.'
      },
      {
        name: 'Tanmay Agre',
        role: 'Team Member',
        photo: '/teams/events/tanmay_agre.png',
        description: 'Coordinating workshop materials, seating, and participant support.'
      },
      {
        name: 'Khushi Upadhayay',
        role: 'Team Member',
        photo: '/teams/events/khushi_upadhayay.png',
        description: 'Managing hospitality, guest reception, and dignitary coordination.'
      },
      {
        name: 'Ishwari Nerkar',
        role: 'Team Member',
        photo: '/teams/events/ishwari_nerkar.png',
        description: 'Overseeing certificates, felicitation arrangements, and attendee relations.'
      },
      {
        name: 'Parikshit Bakal',
        role: 'Team Member',
        photo: '/teams/events/parikshit_bakal.png',
        description: 'Directing on-stage flow, audio-visual coordination, and timing.'
      },
      {
        name: 'Sanskriti Shedge',
        role: 'Team Member',
        photo: '/teams/events/sanskriti_shedge.png',
        description: 'Managing event announcements, communications, and scheduling.'
      },
      {
        name: 'Manas Patil',
        role: 'Team Member',
        photo: '/teams/events/manas_patil.png',
        description: 'Supporting participant crowd management and event flow.'
      },
      {
        name: 'Praharsh Patil',
        role: 'Team Member',
        photo: '/teams/events/praharsh_patil.png',
        description: 'Assisting in competition rounds, evaluation desks, and scoring setups.'
      },
      {
        name: 'Pratik Sonawane',
        role: 'Team Member',
        photo: '/teams/events/pratik_sonawane.png',
        description: 'Handling resources, budgeting allocations, and procurement for events.'
      }
    ]
  }
];

export const contactDetails: ContactInfo = {
  ieeeLead: 'Dr. Seema Mahalungkar (IEEE Branch Counselor, NMIET)',
  collegeEmail: 'ieee@nmiet.edu.in',
  phone: '+91 99750 22999',
  address: 'IEEE Student Branch NMIET, Nutan Maharashtra Institute of Engineering and Technology, Talegaon Dabhade, Pune, Maharashtra 410507, India',
  linkedin: 'https://www.linkedin.com/company/ieee-nmiet/',
  instagram: 'https://www.instagram.com/ieee.nmiet?igsh=MXZ0cThqbjB4c2kwZg=='
};
