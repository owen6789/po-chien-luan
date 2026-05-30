window.siteData = {
  profile: {
    name: "Po-Chien Luan",
    role: "Ph.D. Student in Robotics",
    affiliation: "École Polytechnique Fédérale de Lausanne",
    affiliationLogo: "assets/Logo_EPFL_2019.svg.png",
    location: "Lausanne, Switzerland",
    email: "po-chien.luan@epfl.ch",
    photo: "assets/profile.jpg",
    cv: "assets/CV.pdf",
    kicker: "Robotics and Computer Vision Researcher",
    headline: "Building world models and social-aware systems for robotics.",
    contactText: "I am open to research conversations and collaborations around world models, human motion, social navigation, and robotic perception.",
    opportunityTitle: "Open to Opportunities",
    opportunityText: "I am actively looking for full-time positions or internships in computer vision.",
    meta: [],
    links: [
      { label: "Email", icon: "mail", url: "mailto:po-chien.luan@epfl.ch" },
      { label: "Google Scholar", icon: "scholar", url: "https://scholar.google.com/citations?user=Y2Oth4MAAAAJ&hl=en" },
      { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/po-chien-luan-9a8b7b217" },
      { label: "GitHub", icon: "github", url: "https://github.com/owen6789" },
      { label: "CV", icon: "cv", url: "assets/CV.pdf" }
    ]
  },
  bio: [
    {
      segments: [
        "I am a Ph.D. student in Robotics with the ",
        { label: "Visual Intelligence for Transportation Lab (VITA)", url: "https://www.epfl.ch/labs/vita/" },
        " at EPFL, advised by ",
        { label: "Prof. Alexandre Alahi", url: "https://people.epfl.ch/alexandre.alahi" },
        " and ",
        { label: "Dr. Zimin Xia", url: "https://ziminxia.github.io/" },
        ", and collaborating with ",
        { label: "Honda R&D", url: "https://global.honda/en/RandD/" },
        ". My research focuses on world models, human motion, state space models, and 3D computer vision."
      ]
    },
    "Before joining EPFL, I received my M.S. and B.S. in Electrical Engineering from National Cheng Kung University (NCKU), where I worked on, humanoid robots, robotic hands, electromyographic gesture classification, control, and learning-based robotics."
  ],
  interests: [
    "World Models",
    "Human Motion",
    "State Space Models",
    "3D Computer Vision",
    "Spatial Intelligence"
  ],
  news: [
    { date: "2026", text: "Stable Video Infinity was accepted to ICLR 2026 as an oral presentation." },
    { date: "2026", text: "Deformable Gaussian Occupancy: Decoupling Rigid and Nonrigid Motion with Factorized Distillation was accepted to CVPR 2026." },
    { date: "2025", text: "Unified Human Localization and Trajectory Prediction with Monocular Vision was accepted to ICRA 2025." },
    { date: "2025", text: "Sim-to-Real Causal Transfer was accepted to CVPR 2025." }
  ],
  publicationFilters: [
    "All",
    "World Models",
    "3D Computer Vision",
    "Computer Vision",
    "Video Generation",
    "Human Motion"
  ],
  publications: [
    {
      title: "Drift-Resistant Navigation World Model with Anchored Epipolar Guidance",
      authors: "Po-Chien Luan, Zimin Xia†, Wuyang Li, Yang Gao, Alexandre Alahi",
      note: "† Corresponding author",
      venue: "arXiv 2026",
      category: "World Models",
      categories: ["World Models", "3D Computer Vision"],
      image: "assets/wm.gif",
      imageShape: "wide",
      summary: "A drift-resistant navigation world model that predicts sparse future anchors and uses bidirectional epipolar constraints to reduce perceptual and geometric drift in long-horizon visual prediction.",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2605.24761" },
        { label: "Project", url: "https://vita-epfl.github.io/DR-NWM.io/" }
      ]
    },
    {
      title: "Social-Mamba: Socially-Aware Trajectory Forecasting with State-Space Models",
      authors: "Po-Chien Luan, Wuyang Li†, Yang Gao, Alexandre Alahi",
      note: "† Corresponding author",
      venue: "arXiv 2026",
      category: "Human Motion",
      categories: ["Human Motion", "Computer Vision"],
      image: "assets/publications/social-mamba-framework.png",
      imageShape: "wide",
      summary: "A trajectory forecasting framework that structures agents into an ego-centric social grid and uses Cycle Mamba with temporal, egocentric, and goal-centric scans to model social interactions efficiently.",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2605.15424" },
        { label: "Code", url: "https://github.com/vita-epfl/Social-Mamba" }
      ]
    },
    {
      title: "Unified Human Localization and Trajectory Prediction with Monocular Vision",
      authors: "Po-Chien Luan*, Yang Gao*, Céline Demonsant, Alexandre Alahi",
      venue: "ICRA 2025",
      category: "Computer Vision",
      categories: ["Computer Vision", "Human Motion"],
      image: "assets/monotransmotion.png",
      imageShape: "wide",
      summary: "A monocular vision framework that estimates human localization and future trajectories from a single camera by connecting 2D pose observations with trajectory prediction.",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2503.03535" },
        { label: "Code", url: "https://github.com/vita-epfl/MonoTransmotion" }
      ]
    },
    {
      title: "Sim-to-Real Causal Transfer: A Metric Learning Approach to Causally-Aware Interaction Representations",
      authors: "Ahmad Rahimi*, Po-Chien Luan*, Yuejiang Liu*, Frano Rajič, Alexandre Alahi",
      venue: "CVPR 2025",
      category: "Computer Vision",
      categories: ["Computer Vision", "Human Motion"],
      image: "assets/publications/causal-sim2real.png",
      imageShape: "wide",
      summary: "A metric learning approach that learns causally aware interaction representations in simulation and transfers them to real-world trajectory understanding.",
      links: [
        { label: "Paper", url: "https://openaccess.thecvf.com/content/CVPR2025/html/Rahimi_Sim-to-Real_Causal_Transfer_A_Metric_Learning_Approach_to_Causally-Aware_Interaction_CVPR_2025_paper.html" },
        { label: "Code", url: "https://github.com/vita-epfl/CausalSim2Real" }
      ]
    },
    {
      title: "Stable Video Infinity: Infinite-Length Video Generation with Error Recycling",
      authors: "Wuyang Li, Wentao Pan, Po-Chien Luan, Yang Gao, Alexandre Alahi",
      venue: "ICLR 2026 Oral",
      category: "Video Generation",
      categories: ["Video Generation", "Computer Vision"],
      video: "assets/svi.mp4",
      imageShape: "wide",
      summary: "An infinite-length video generation method that recycles prediction errors to maintain temporal stability and extend video synthesis to long horizons.",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2510.09212" },
        { label: "Project", url: "https://stable-video-infinity.github.io/homepage/" },
        { label: "Code", url: "https://github.com/vita-epfl/Stable-Video-Infinity" }
      ]
    },
    {
      title: "Deformable Gaussian Occupancy: Decoupling Rigid and Nonrigid Motion with Factorized Distillation",
      authors: "Yang Gao, Wuyang Li†, Po-Chien Luan, Alexandre Alahi",
      note: "† Corresponding author",
      venue: "CVPR 2026",
      category: "3D Computer Vision",
      categories: ["3D Computer Vision", "Computer Vision"],
      image: "assets/publications/dego.png",
      imageShape: "wide",
      summary: "DeGO models dynamic 3D scenes with deformable Gaussian occupancy and decouples rigid from nonrigid motion. Factorized foundation-model distillation improves temporal consistency and weakly supervised occupancy prediction, especially for human-centric instances.",
      links: [
        { label: "Code", url: "https://github.com/vita-epfl/DeGO" }
      ]
    },
    {
      title: "EverAnimate: Minute-Scale Human Animation via Latent Flow Restoration",
      authors: "Wuyang Li, Yang Gao, Mariam Hassan, Lan Feng, Wentao Pan, Po-Chien Luan, Alexandre Alahi",
      venue: "arXiv 2026",
      category: "Video Generation",
      categories: ["Video Generation", "Computer Vision"],
      video: "assets/EverAnimate.mp4",
      imageShape: "wide",
      summary: "A long-horizon human animation method that restores latent flow trajectories with persistent context memory to preserve motion, identity, and visual quality over minute-scale generation.",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2605.15042" },
        { label: "Project", url: "https://everanimate.github.io/homepage/" }
      ]
    },
    {
      title: "OmniTraj: Pre-Training on Heterogeneous Data for Adaptive and Zero-Shot Human Trajectory Prediction",
      authors: "Yang Gao, Po-Chien Luan, Kaouther Messaoud, Lan Feng, Alexandre Alahi",
      venue: "CVPR Workshop on Precognition, 2026",
      category: "Human Motion",
      categories: ["Human Motion", "Computer Vision"],
      image: "assets/omnitraj.png",
      imageShape: "wide",
      summary: "A pre-training approach for adaptive and zero-shot human trajectory prediction across heterogeneous datasets, varying frame rates, input lengths, and unseen settings.",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2507.23657" },
        { label: "Code", url: "https://github.com/vita-epfl/omnitraj" }
      ]
    },
    {
      title: "Multi-Transmotion: Pre-trained Model for Human Motion Prediction",
      authors: "Yang Gao, Po-Chien Luan, Alexandre Alahi",
      venue: "CoRL 2024",
      category: "Human Motion",
      categories: ["Human Motion", "Computer Vision"],
      image: "assets/multi-transmotion.png",
      imageShape: "wide",
      summary: "A pre-trained model for human motion prediction that learns transferable motion representations for forecasting future human movement in robotics contexts.",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2411.02673" },
        { label: "Code", url: "https://github.com/vita-epfl/multi-transmotion" }
      ]
    }
  ],
  timeline: [
    {
      date: "Sep. 2022-present",
      title: "Ph.D. in Robotics, EPFL",
      description: "École Polytechnique Fédérale de Lausanne. Advisor: Prof. Alexandre Alahi. Collaboration with Honda R&D."
    },
    {
      date: "Jul. 2021-May 2022",
      title: "Graduate Research Assistant, AIM-HI",
      description: "Advanced Institute of Manufacturing with High-tech Innovations. Advisors: Prof. Her-Terng Yau and Prof. Ping-Huan Kuo. Published 9 journal papers."
    },
    {
      date: "Sep. 2018-Aug. 2020",
      title: "M.S. in Electrical Engineering, NCKU",
      description: "Thesis: IFB-PSO for optimized realization of an anthropomorphic robotic hand and electromyographic hand gesture classification using lifelong learning."
    },
    {
      date: "Sep. 2014-Jul. 2018",
      title: "B.S. in Electrical Engineering, NCKU",
      description: "National Cheng Kung University, Taiwan."
    }
  ],
  teaching: [
    "Lead Teaching Assistant, Deep Learning for Autonomous Vehicles, EPFL, 2026",
    "Teaching Assistant, Deep Learning for Autonomous Vehicles, EPFL, 2023-2024",
    "Teaching Assistant, Control Engineering Laboratory Course, NCKU, 2019"
  ],
  talks: [
    "Reviewer: CVPR, ECCV, IROS, RA-L, T-ITS, TRC, T-IE, T-II, T-CYB"
  ],
  service: [
    "Programming: Python, C/C++, MATLAB, Java",
    "Deep Learning: PyTorch, Hugging Face, Weights & Biases (W&B)",
    "Robotics / Simulation: ROS 1, Gazebo, Webots",
    "Development Tools: Git"
  ],
  awards: [
    "EPFL-Taiwan Ministry of Education (MoE) Scholarship, 2022-2026; one of 5 awards annually",
    "Excellent Teaching Assistant Award, Control Engineering Laboratory, NCKU EE, 2020",
    "FIRA RoboWorld Cup Androsot: 1st Place, 2019",
    "FIRA RoboWorld Cup HuroCup (Adult Robots All-Round): 1st Place, 2018",
    "KAIST AI World Cup (AI Soccer): 4th Place, 2018"
  ],
  lastUpdated: "May 2026"
};
