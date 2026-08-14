import type { LanguageCode, PortfolioData } from "@/types/portfolio";

const socialLinks: PortfolioData["profile"]["socialLinks"] = [
  {
    label: "Email: hungtranphu1510@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=hungtranphu1510@gmail.com",
    icon: "email",
  },
  {
    label: "GitHub: nuocmatParis",
    href: "https://github.com/nuocmatParis",
    icon: "github",
  },
  {
    label: "X: @PhantasmalNF",
    href: "https://x.com/PhantasmalNF",
    icon: "x",
  },
  {
    label: "LinkedIn: Tran Phu Hung",
    href: "https://www.linkedin.com/in/hungtp1510/",
    icon: "linkedin",
  },
];

const marqueeSkills = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "Spring Data JPA",
  "Hibernate",
  "REST APIs",
  "MySQL",
  "Microsoft SQL Server",
  "JWT",
  "WebSocket",
  "Git & GitHub",
  "Postman",
  "OpenAPI",
];

const resume = {
  resumeUrl: "/documents/Tran_Phu_Hung_CV.pdf",
  resumeFileName: "Tran_Phu_Hung_CV.pdf",
};

const hrtmsTechnologies = [
  "Java 21",
  "Spring Boot",
  "Spring Security",
  "MySQL",
  "JWT",
  "VNPay",
];

const smartParkingTechnologies = [
  "Arduino Uno",
  "ESP8266",
  "Node.js",
  "WebSocket",
  "Ultrasonic Sensor",
];

export const portfolioDataByLang: Record<LanguageCode, PortfolioData> = {
  EN: {
    meta: {
      title: "Tran Phu Hung - Backend Developer",
      description:
        "Backend developer portfolio featuring Java, Spring Boot, RESTful APIs, secure authentication, payment integration, and multi-step business workflows.",
    },
    profile: {
      name: "Tran Phu Hung",
      title: "Backend Developer",
      handle: "@nuocmatParis",
      status: "Available for Backend Opportunities",
      logoText: "PORTFOLIO",
      biographyTitle: "Who I Am?",
      biography:
        "A Software Engineering student with a strong interest in backend development. I enjoy solving logical problems and transforming ideas into functional, well-structured applications.\n\nMost of my work revolves around Java and Spring Boot, where I’ve explored areas such as application security, payment processing, real-time communication, and complex business operations. I’m constantly learning, experimenting, and improving through every project I build.",
      ...resume,
      socialLinks,
      marqueeSkills,
    },
    labels: {
      navHome: "Home",
      navAbout: "About",
      navProjects: "Projects",
      downloadCv: "Download CV",
      aboutTitle: "About Me",
      aboutSubtitle: "My education, backend skills, and technical background.",
      projectsTitle: "My Projects",
      projectsSubtitle:
        "Backend systems and production-oriented workflows I have built.",
      skillsSectionTitle: "Technical Skills",
      educationSectionTitle: "Education",
      awardsSectionTitle: "Certifications",
    },
    skillGroups: [
      {
        name: "Languages",
        skills: ["Java", "SQL"],
      },
      {
        name: "Backend & APIs",
        skills: [
          "Spring Boot",
          "Spring Security",
          "Spring Data JPA",
          "Hibernate",
          "REST APIs",
        ],
      },
      {
        name: "Databases",
        skills: ["MySQL", "Microsoft SQL Server"],
      },
      {
        name: "Tools & Testing",
        skills: ["Git", "GitHub", "Postman", "OpenAPI"],
      },
    ],
    education: [
      {
        institution: "FPT University",
        institutionUrl: "https://fpt.edu.vn",
        period: "2023 - Present",
        degree: "Bachelor of Software Engineering",
      },
    ],
    awards: [
      {
        title: "Software Engineering: Software Design and Project Management",
        date: "April 2026",
        awarder: "HKUST",
      },
      {
        title: "Web Design for Everybody: Basics of Web Development & Coding",
        date: "July 2025",
        awarder: "University of Michigan",
      },
    ],
    projects: [
      {
        name: "Horse Racing Tournament Management System",
        description:
          "A comprehensive backend system for managing horse racing tournaments, covering participant contracts, race operations, secure payments, and real-time notifications.",
        url: "https://github.com/nuocmatParis/HorseRacing-BE",
        technologies: hrtmsTechnologies,
      },
      {
        name: "Smart Parking IoT",
        description:
          "An IoT parking system for real-time space monitoring and automated gate control.",
        url: "https://github.com/nuocmatParis/smart-parking-iot",
        technologies: smartParkingTechnologies,
      },
    ],
  },
  VN: {
    meta: {
      title: "Trần Phú Hưng - Lập trình viên Backend",
      description:
        "Portfolio Backend với Java, Spring Boot, RESTful API, xác thực bảo mật, tích hợp thanh toán và quy trình nghiệp vụ nhiều bước.",
    },
    profile: {
      name: "Trần Phú Hưng",
      title: "Lập trình viên Backend",
      handle: "@nuocmatParis",
      status: "Tìm cơ hội Thực tập Backend",
      logoText: "PORTFOLIO",
      biographyTitle: "Tôi là ai?",
      biography:
        "Tôi là sinh viên ngành Kỹ thuật Phần mềm với niềm đam mê mạnh mẽ đối với phát triển backend. Tôi yêu thích việc giải quyết các bài toán logic và biến ý tưởng thành các ứng dụng hoạt động hiệu quả, có cấu trúc tốt.\n\nPhần lớn công việc của tôi xoay quanh Java và Spring Boot, nơi tôi đã khám phá các lĩnh vực như bảo mật ứng dụng, xử lý thanh toán, truyền thông thời gian thực và các quy trình nghiệp vụ phức tạp. Tôi không ngừng học hỏi, thử nghiệm và cải thiện bản thân qua từng dự án mà tôi xây dựng.",
      ...resume,
      socialLinks,
      marqueeSkills,
    },
    labels: {
      navHome: "Trang chủ",
      navAbout: "Giới thiệu",
      navProjects: "Dự án",
      downloadCv: "Tải CV",
      aboutTitle: "Về tôi",
      aboutSubtitle: "Học vấn, kỹ năng Backend và nền tảng kỹ thuật của tôi.",
      projectsTitle: "Dự án của tôi",
      projectsSubtitle:
        "Các hệ thống Backend và quy trình nghiệp vụ hướng tới môi trường production tôi đã xây dựng.",
      skillsSectionTitle: "Kỹ năng kỹ thuật",
      educationSectionTitle: "Học vấn",
      awardsSectionTitle: "Chứng chỉ",
    },
    skillGroups: [
      {
        name: "Ngôn ngữ lập trình",
        skills: ["Java", "SQL"],
      },
      {
        name: "Backend & API",
        skills: [
          "Spring Boot",
          "Spring Security",
          "Spring Data JPA",
          "Hibernate",
          "REST APIs",
        ],
      },
      {
        name: "Cơ sở dữ liệu",
        skills: ["MySQL", "Microsoft SQL Server"],
      },
      {
        name: "Công cụ & Kiểm thử",
        skills: ["Git", "GitHub", "Postman", "OpenAPI"],
      },
    ],
    education: [
      {
        institution: "Đại học FPT",
        institutionUrl: "https://fpt.edu.vn",
        period: "2023 - Hiện tại",
        degree: "Cử nhân Kỹ thuật Phần mềm",
      },
    ],
    awards: [
      {
        title: "Kỹ thuật Phần mềm: Thiết kế Phần mềm và Quản lý Dự án",
        date: "Tháng 4/2026",
        awarder: "HKUST",
      },
      {
        title: "Thiết kế Web cho Mọi người: Cơ bản về Phát triển Web và Lập trình",
        date: "Tháng 7/2025",
        awarder: "University of Michigan",
      },
    ],
    projects: [
      {
        name: "Horse Racing Tournament Management System",
        description:
          "Hệ thống Backend toàn diện để quản lý giải đấu đua ngựa, bao gồm hợp đồng người tham gia, vận hành cuộc đua, thanh toán bảo mật và thông báo thời gian thực.",
        url: "https://github.com/nuocmatParis/HorseRacing-BE",
        technologies: hrtmsTechnologies,
      },
      {
        name: "Smart Parking IoT",
        description:
          "Hệ thống bãi đỗ xe IoT giám sát vị trí theo thời gian thực và tự động điều khiển cổng.",
        url: "https://github.com/nuocmatParis/smart-parking-iot",
        technologies: smartParkingTechnologies,
      },
    ],
  },
  JP: {
    meta: {
      title: "チャン・フー・フン - バックエンド開発者",
      description:
        "Java、Spring Boot、RESTful API、セキュア認証、決済連携、複数ステップの業務フローを中心としたバックエンドポートフォリオ。",
    },
    profile: {
      name: "チャン・フー・フン",
      title: "バックエンド開発者",
      handle: "@nuocmatParis",
      status: "バックエンドインターンを希望",
      logoText: "ポートフォリオ",
      biographyTitle: "自己紹介",
      biography:
        "バックエンド開発に強い関心を持つソフトウェア工学専攻の学生です。論理的な問題の解決を楽しみ、アイデアを機能的で優れた構造のアプリケーションへと形にすることに情熱を注いでいます。\n\n私の開発の多くは Java と Spring Boot を中心としており、アプリケーションセキュリティ、決済処理、リアルタイム通信、複雑なビジネスオペレーションなどの分野を探求してきました。すべてのプロジェクトを通じて常に学び、実験し、改善を続けています。",
      ...resume,
      socialLinks,
      marqueeSkills,
    },
    labels: {
      navHome: "ホーム",
      navAbout: "概要",
      navProjects: "プロジェクト",
      downloadCv: "履歴書をダウンロード",
      aboutTitle: "私について",
      aboutSubtitle: "学歴、バックエンドスキル、技術的なバックグラウンド。",
      projectsTitle: "プロジェクト",
      projectsSubtitle:
        "実運用を意識して構築したバックエンドシステムと業務フロー。",
      skillsSectionTitle: "技術スキル",
      educationSectionTitle: "学歴",
      awardsSectionTitle: "資格",
    },
    skillGroups: [
      {
        name: "プログラミング言語",
        skills: ["Java", "SQL"],
      },
      {
        name: "バックエンド & API",
        skills: [
          "Spring Boot",
          "Spring Security",
          "Spring Data JPA",
          "Hibernate",
          "REST APIs",
        ],
      },
      {
        name: "データベース",
        skills: ["MySQL", "Microsoft SQL Server"],
      },
      {
        name: "ツール & テスト",
        skills: ["Git", "GitHub", "Postman", "OpenAPI"],
      },
    ],
    education: [
      {
        institution: "FPT大学",
        institutionUrl: "https://fpt.edu.vn",
        period: "2023年 - 現在",
        degree: "ソフトウェア工学学士課程",
      },
    ],
    awards: [
      {
        title: "ソフトウェア工学：ソフトウェア設計とプロジェクト管理",
        date: "2026年4月",
        awarder: "HKUST",
      },
      {
        title: "Web Design for Everybody：Web開発とコーディングの基礎",
        date: "2025年7月",
        awarder: "University of Michigan",
      },
    ],
    projects: [
      {
        name: "Horse Racing Tournament Management System",
        description:
          "参加者契約、レース運営、安全な決済、リアルタイム通知を含む競馬大会向け総合バックエンドシステム。",
        url: "https://github.com/nuocmatParis/HorseRacing-BE",
        technologies: hrtmsTechnologies,
      },
      {
        name: "Smart Parking IoT",
        description:
          "駐車状況のリアルタイム監視とゲート自動制御を行うIoT駐車場システム。",
        url: "https://github.com/nuocmatParis/smart-parking-iot",
        technologies: smartParkingTechnologies,
      },
    ],
  },
};

export const portfolioData = portfolioDataByLang.EN;
