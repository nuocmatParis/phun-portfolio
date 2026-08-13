import type { LanguageCode } from "@/components/LanguageSwitcher";
import type { PortfolioData } from "@/types/portfolio";

export const portfolioDataByLang: Record<LanguageCode, PortfolioData> = {
  EN: {
    meta: {
      title: "Portfolio - Software Engineer",
      description:
        "Personal portfolio showcasing software engineering projects, technical experience, and skills.",
      url: "https://example.com",
    },
    profile: {
      name: "Tran Phu Hung",
      title: "Full-Stack Software Engineer",
      handle: "@nuocmatParis",
      status: "Available for New Opportunities",
      logoText: "PORTFOLIO",
      biographyTitle: "Who I Am?",
      biography:
        "I am a passionate software engineer specializing in building high-performance web applications, scalable backend services, and user-centric interfaces. Dedicated to clean code, robust architecture, and continuous learning in modern tech stacks.",
      resumeUrl: "/documents/resume-placeholder.pdf",
      resumeFileName: "Resume_Placeholder.pdf",
      socialLinks: [
        {
          label: "email",
          href: "mailto:your.email@example.com",
          icon: "email",
        },
        {
          label: "linkedin",
          href: "https://linkedin.com/in/yourprofile",
          icon: "linkedin",
        },
        {
          label: "github",
          href: "https://github.com/yourusername",
          icon: "github",
        },
        {
          label: "telegram",
          href: "https://t.me/yourusername",
          icon: "telegram",
        },
      ],
      marqueeSkills: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Python",
        "Go",
        "Tailwind CSS",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "AWS",
        "Git & GitHub",
        "GraphQL",
        "REST APIs",
      ],
    },
    labels: {
      navHome: "Home",
      navAbout: "About",
      navProjects: "Projects",
      downloadCv: "Download CV",
      aboutTitle: "About Me",
      aboutSubtitle: "My professional background, experience, and skills.",
      projectsTitle: "My Projects",
      projectsSubtitle:
        "A collection of my work, experiments, and contributions.",
      experienceSectionTitle: "Experience",
      skillsSectionTitle: "Skills",
      educationSectionTitle: "Education",
      awardsSectionTitle: "Awards",
      keyResponsibilities: "Key Responsibilities:",
      showMore: "Show more",
      showLess: "Show less",
    },
    experiences: [
      {
        startDate: "Jan 2025",
        endDate: "Present",
        duration: "Present",
        current: true,
        position: "Senior Software Engineer",
        company: "Tech Company Inc.",
        companyUrl: "https://example.com",
        location: "San Francisco, CA",
        locationType: "Remote / Hybrid",
        summary:
          "Leading front-end and full-stack development for core web applications and platform services.",
        responsibilities: [
          "Architected modern responsive user interfaces using Next.js, React, and TypeScript.",
          "Optimized client and server performance, cutting initial bundle size and load latency.",
          "Collaborated with cross-functional product and design teams to deliver seamless user experiences.",
        ],
      },
      {
        startDate: "Jun 2023",
        endDate: "Dec 2024",
        duration: "1 yr 7 mos",
        position: "Software Engineer",
        company: "Innovations Lab",
        companyUrl: "https://example.com",
        location: "New York, NY",
        locationType: "Hybrid",
        summary:
          "Built distributed backend microservices and interactive dashboard components.",
        responsibilities: [
          "Developed scalable API endpoints utilizing Node.js and PostgreSQL.",
          "Implemented CI/CD deployment pipelines using GitHub Actions and Docker.",
          "Mentored junior developers and conducted peer code reviews.",
        ],
      },
    ],
    skillGroups: [
      {
        name: "Frontend Development",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
      },
      {
        name: "Backend & Systems",
        skills: ["Node.js", "Express", "Python", "Go", "REST & GraphQL"],
      },
      {
        name: "Databases & Storage",
        skills: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
      },
      {
        name: "DevOps & Tools",
        skills: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD Pipelines"],
      },
    ],
    education: [
      {
        institution: "State University",
        institutionUrl: "https://example.com",
        period: "2020 - 2024",
        degree: "B.S. in Computer Science",
        description:
          "Specialized in Software Engineering and Distributed Systems. Graduated with Honors.",
      },
    ],
    awards: [
      {
        title: "Best Innovation Award",
        date: "October 2024",
        awarder: "Global Developer Hackathon",
      },
      {
        title: "Dean's Honor List",
        date: "2020 - 2024",
        awarder: "School of Computer Science",
      },
    ],
    projects: [
      {
        name: "Project One",
        description: "Scalable E-Commerce & Analytics Platform",
        url: "https://example.com/project-one",
        highlights: [
          "Engineered a high-performance web platform supporting real-time inventory management.",
          "Integrated secure payment processing and responsive customer-facing dashboard.",
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      },
      {
        name: "Project Two",
        description: "Developer Automation & Workflow Tooling",
        url: "https://github.com/yourusername/project-two",
        highlights: [
          "Created custom CLI tool to streamline project setup and deployment tasks.",
          "Reduced setup time for new development environments by over 60%.",
        ],
        technologies: ["Node.js", "TypeScript", "Docker", "CLI"],
      },
      {
        name: "Project Three",
        description: "Real-Time Collaborative Web Application",
        url: "https://github.com/yourusername/project-three",
        highlights: [
          "Built WebSockets-based messaging and state synchronization service.",
          "Deployed containerized application with automated health checks.",
        ],
        technologies: ["React", "Go", "WebSockets", "Docker"],
      },
    ],
  },
  VN: {
    meta: {
      title: "Hồ sơ cá nhân - Kỹ sư phần mềm",
      description:
        "Trang giới thiệu cá nhân trình bày dự án, kinh nghiệm và kỹ năng kỹ thuật.",
      url: "https://example.com",
    },
    profile: {
      name: "Trần Phú Hưng",
      title: "Kỹ sư phần mềm Full-Stack",
      handle: "@nuocmatParis",
      status: "Sẵn sàng cho các cơ hội mới",
      logoText: "PORTFOLIO",
      biographyTitle: "Tôi là ai?",
      biography:
        "Tôi là một kỹ sư phần mềm nhiệt huyết, chuyên xây dựng các ứng dụng web hiệu năng cao, dịch vụ backend quy mô lớn và giao diện tối ưu cho người dùng. Đam mê mã nguồn sạch, kiến trúc vững chắc và không ngừng học hỏi các công nghệ hiện đại.",
      resumeUrl: "/documents/resume-placeholder.pdf",
      resumeFileName: "Resume_Placeholder.pdf",
      socialLinks: [
        {
          label: "email",
          href: "mailto:your.email@example.com",
          icon: "email",
        },
        {
          label: "linkedin",
          href: "https://linkedin.com/in/yourprofile",
          icon: "linkedin",
        },
        {
          label: "github",
          href: "https://github.com/yourusername",
          icon: "github",
        },
        {
          label: "telegram",
          href: "https://t.me/yourusername",
          icon: "telegram",
        },
      ],
      marqueeSkills: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Python",
        "Go",
        "Tailwind CSS",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "AWS",
        "Git & GitHub",
        "GraphQL",
        "REST APIs",
      ],
    },
    labels: {
      navHome: "Trang chủ",
      navAbout: "Giới thiệu",
      navProjects: "Dự án",
      downloadCv: "Tải CV",
      aboutTitle: "Về tôi",
      aboutSubtitle: "Hành trình nghề nghiệp, kinh nghiệm và kỹ năng của tôi.",
      projectsTitle: "Dự án của tôi",
      projectsSubtitle:
        "Tổng hợp các sản phẩm, thử nghiệm và đóng góp của tôi.",
      experienceSectionTitle: "Kinh nghiệm làm việc",
      skillsSectionTitle: "Kỹ năng chuyên môn",
      educationSectionTitle: "Học vấn",
      awardsSectionTitle: "Giải thưởng",
      keyResponsibilities: "Nhiệm vụ chính:",
      showMore: "Xem thêm",
      showLess: "Thu gọn",
    },
    experiences: [
      {
        startDate: "Thg 1 2025",
        endDate: "Hiện tại",
        duration: "Hiện tại",
        current: true,
        position: "Kỹ sư phần mềm cao cấp",
        company: "Công ty Công nghệ Inc.",
        companyUrl: "https://example.com",
        location: "San Francisco, CA",
        locationType: "Remote / Hybrid",
        summary:
          "Dẫn dắt phát triển Front-end và Full-stack cho các ứng dụng web cốt lõi và dịch vụ nền tảng.",
        responsibilities: [
          "Thiết kế kiến trúc giao diện người dùng hiện đại, đáp ứng tốt với Next.js, React và TypeScript.",
          "Tối ưu hóa hiệu năng client và server, giảm kích thước bundle và độ trễ tải trang.",
          "Phối hợp chặt chẽ với các đội ngũ sản phẩm và thiết kế để mang lại trải nghiệm người dùng mượt mà.",
        ],
      },
      {
        startDate: "Thg 6 2023",
        endDate: "Thg 12 2024",
        duration: "1 năm 7 tháng",
        position: "Kỹ sư phần mềm",
        company: "Innovations Lab",
        companyUrl: "https://example.com",
        location: "New York, NY",
        locationType: "Hybrid",
        summary:
          "Phát triển dịch vụ microservices backend phân tán và các thành phần bảng điều khiển tương tác.",
        responsibilities: [
          "Phát triển các API có khả năng mở rộng cao sử dụng Node.js và PostgreSQL.",
          "Triển khai quy trình tự động hóa CI/CD sử dụng GitHub Actions và Docker.",
          "Hướng dẫn các lập trình viên trẻ và thực hiện đánh giá mã nguồn đồng nghiệp.",
        ],
      },
    ],
    skillGroups: [
      {
        name: "Phát triển Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
      },
      {
        name: "Backend & Hệ thống",
        skills: ["Node.js", "Express", "Python", "Go", "REST & GraphQL"],
      },
      {
        name: "Cơ sở dữ liệu & Lưu trữ",
        skills: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
      },
      {
        name: "DevOps & Công cụ",
        skills: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD Pipelines"],
      },
    ],
    education: [
      {
        institution: "Trường Đại học Quốc gia",
        institutionUrl: "https://example.com",
        period: "2020 - 2024",
        degree: "Cử nhân Khoa học Máy tính",
        description:
          "Chuyên ngành Công nghệ Phần mềm và Hệ thống Phân tán. Tốt nghiệp loại Ưu.",
      },
    ],
    awards: [
      {
        title: "Giải thưởng Sáng tạo Xuất sắc",
        date: "Tháng 10 2024",
        awarder: "Cuộc thi Hackathon Toàn cầu",
      },
      {
        title: "Danh sách Danh dự Ban Giám hiệu",
        date: "2020 - 2024",
        awarder: "Khoa Khoa học Máy tính",
      },
    ],
    projects: [
      {
        name: "Dự án Một",
        description: "Nền tảng Thương mại Điện tử & Phân tích Dữ liệu",
        url: "https://example.com/project-one",
        highlights: [
          "Phát triển nền tảng web hiệu năng cao hỗ trợ quản lý kho hàng thời gian thực.",
          "Tích hợp thanh toán an toàn và bảng điều khiển trực quan cho khách hàng.",
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      },
      {
        name: "Dự án Hai",
        description: "Công cụ Tự động hóa Quy trình Phát triển",
        url: "https://github.com/yourusername/project-two",
        highlights: [
          "Xây dựng công cụ CLI tùy chỉnh giúp tối ưu hóa công việc thiết lập và triển khai dự án.",
          "Giảm thời gian cài đặt môi trường phát triển mới hơn 60%.",
        ],
        technologies: ["Node.js", "TypeScript", "Docker", "CLI"],
      },
      {
        name: "Dự án Ba",
        description: "Ứng dụng Web Tương tác Thời gian thực",
        url: "https://github.com/yourusername/project-three",
        highlights: [
          "Xây dựng dịch vụ nhắn tin và đồng bộ trạng thái dựa trên WebSockets.",
          "Triển khai ứng dụng container hóa với cơ chế kiểm tra sức khỏe tự động.",
        ],
        technologies: ["React", "Go", "WebSockets", "Docker"],
      },
    ],
  },
  JP: {
    meta: {
      title: "ポートフォリオ - ソフトウェアエンジニア",
      description:
        "開発プロジェクト、技術経験、スキルを掲載した個人ポートフォリオ。",
      url: "https://example.com",
    },
    profile: {
      name: "チャン・フー・フン",
      title: "フルスタックソフトウェアエンジニア",
      handle: "@nuocmatParis",
      status: "新しい機会を求めています",
      logoText: "ラエクセラ",
      biographyTitle: "自己紹介",
      biography:
        "高性能なWebアプリケーション、拡張性の高いバックエンドサービス、ユーザー中心のインターフェース構築を専門とするソフトウェアエンジニアです。クリーンコード、堅牢なアーキテクチャ、モダンな技術スタックの継続的な学習に専念しています。",
      resumeUrl: "/documents/resume-placeholder.pdf",
      resumeFileName: "Resume_Placeholder.pdf",
      socialLinks: [
        {
          label: "email",
          href: "mailto:your.email@example.com",
          icon: "email",
        },
        {
          label: "linkedin",
          href: "https://linkedin.com/in/yourprofile",
          icon: "linkedin",
        },
        {
          label: "github",
          href: "https://github.com/yourusername",
          icon: "github",
        },
        {
          label: "telegram",
          href: "https://t.me/yourusername",
          icon: "telegram",
        },
      ],
      marqueeSkills: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Python",
        "Go",
        "Tailwind CSS",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "AWS",
        "Git & GitHub",
        "GraphQL",
        "REST APIs",
      ],
    },
    labels: {
      navHome: "ホーム",
      navAbout: "概要",
      navProjects: "実績",
      downloadCv: "履歴書をダウンロード",
      aboutTitle: "私について",
      aboutSubtitle: "職歴、実務経験、およびスキルセット。",
      projectsTitle: "制作実績",
      projectsSubtitle:
        "開発プロジェクト、実験的プロダクト、および貢献実績。",
      experienceSectionTitle: "職歴・経歴",
      skillsSectionTitle: "スキル",
      educationSectionTitle: "学歴",
      awardsSectionTitle: "受賞歴",
      keyResponsibilities: "主な担当業務:",
      showMore: "詳細を表示",
      showLess: "折りたたむ",
    },
    experiences: [
      {
        startDate: "2025年1月",
        endDate: "現在",
        duration: "在職中",
        current: true,
        position: "シニアソフトウェアエンジニア",
        company: "Tech Company Inc.",
        companyUrl: "https://example.com",
        location: "サンフランシスコ, CA",
        locationType: "リモート / ハイブリッド",
        summary:
          "コアWebアプリケーションおよびプラットフォームサービスのフロントエンドおよびフルスタック開発をリード。",
        responsibilities: [
          "Next.js、React、TypeScriptを使用して、モダンでレスポンシブなUIアーキテクチャを設計。",
          "クライアントおよびサーバーのパフォーマンスを最適化し、初期バンドルサイズと読み込み遅延を削減。",
          "プロダクトチームおよびデザインチームと連携し、シームレスなユーザー体験を提供。",
        ],
      },
      {
        startDate: "2023年6月",
        endDate: "2024年12月",
        duration: "1年7ヶ月",
        position: "ソフトウェアエンジニア",
        company: "Innovations Lab",
        companyUrl: "https://example.com",
        location: "ニューヨーク, NY",
        locationType: "ハイブリッド",
        summary:
          "分散バックエンドマイクロサービスおよびインタラクティブなダッシュボードコンポーネントを構築。",
        responsibilities: [
          "Node.jsとPostgreSQLを活用した拡張可能なAPIエンドポイントの開発。",
          "GitHub ActionsおよびDockerを使用したCI/CDデプロイパイプラインの構築。",
          "ジュニアエンジニアのメンターおよびコードレビューの実施。",
        ],
      },
    ],
    skillGroups: [
      {
        name: "フロントエンド開発",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
      },
      {
        name: "バックエンド & システム",
        skills: ["Node.js", "Express", "Python", "Go", "REST & GraphQL"],
      },
      {
        name: "データベース & ストレージ",
        skills: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
      },
      {
        name: "DevOps & 開発ツール",
        skills: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD Pipelines"],
      },
    ],
    education: [
      {
        institution: "州立大学",
        institutionUrl: "https://example.com",
        period: "2020年 - 2024年",
        degree: "コンピュータサイエンス学士",
        description:
          "ソフトウェア工学および分散システムを専攻。優秀な成績で卒業。",
      },
    ],
    awards: [
      {
        title: "最優秀イノベーション賞",
        date: "2024年10月",
        awarder: "グローバルハッカソン",
      },
      {
        title: "学部長栄誉賞 (Dean's List)",
        date: "2020年 - 2024年",
        awarder: "コンピュータサイエンス学部",
      },
    ],
    projects: [
      {
        name: "プロジェクト 1",
        description: "大規模Eコマース & アナリティクスプラットフォーム",
        url: "https://example.com/project-one",
        highlights: [
          "リアルタイム在庫管理をサポートする高性能Webプラットフォームを構築。",
          "安全な決済処理およびレスポンシブな顧客向けダッシュボードを統合。",
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      },
      {
        name: "プロジェクト 2",
        description: "開発者向け自動化 & ワークフローツール",
        url: "https://github.com/yourusername/project-two",
        highlights: [
          "プロジェクト構築とデプロイ作業を効率化するカスタムCLIツールを作成。",
          "新規開発環境のセットアップ時間を60%以上削減。",
        ],
        technologies: ["Node.js", "TypeScript", "Docker", "CLI"],
      },
      {
        name: "プロジェクト 3",
        description: "リアルタイム協調型Webアプリケーション",
        url: "https://github.com/yourusername/project-three",
        highlights: [
          "WebSocketsベースのメッセージングおよび状態同期サービスを構築。",
          "自動ヘルスチェックを備えたコンテナ化アプリケーションのデプロイ。",
        ],
        technologies: ["React", "Go", "WebSockets", "Docker"],
      },
    ],
  },
};

export const portfolioData = portfolioDataByLang.EN;
