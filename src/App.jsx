import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDollarSign,
  Code2,
  Cpu,
  ExternalLink,
  Fingerprint,
  Gem,
  Globe2,
  Layers3,
  LockKeyhole,
  Menu,
  MessageSquare,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import nftMallImage from "./assets/projects/nft-mall.png";
import paymentImage from "./assets/projects/payment.png";
import rwaWalletImage from "./assets/projects/rwa-wallet.png";
import smartOtcSwapPlatformImage from "./assets/projects/smartotc-swap-platform.png";
import smfiMusicFiImage from "./assets/projects/smfi-musicfi.png";
import buyzoneLogo from "./assets/logos/buyzone.jpg";
import hubpayLogo from "./assets/logos/hubpay.png";
import realsunLogo from "./assets/logos/realsun.png";
import realsunWalletLogo from "./assets/logos/realsun-wallet.png";
import smfiLogo from "./assets/logos/smfi.png";

const navItems = [
  { label: "Home", labelKo: "홈", href: "#home" },
  { label: "Projects", labelKo: "프로젝트", href: "#projects" },
  { label: "Services", labelKo: "서비스", href: "#services" },
  { label: "Technology", labelKo: "기술", href: "#technology" },
  { label: "Portfolio", labelKo: "포트폴리오", href: "#projects" },
  { label: "Blog", labelKo: "인사이트", href: "#insights" },
  { label: "Work With Us", labelKo: "협업", href: "#work" },
  { label: "Contact", labelKo: "문의", href: "#contact" },
];

const pageText = {
  en: {
    consultation: "Request a Consultation",
    heroBadge: "Real Web3 products, not token-only promises",
    heroTitle: "We Build Real Web3, Blockchain, RWA, and Payment Platforms",
    heroLead:
      "We are a Web3 build-up team experienced in developing mainnets, digital wallets, token systems, NFT platforms, RWA investment platforms, P2P token marketplaces, and point-based payment ecosystems.",
    heroBody:
      "From early-stage ideas to launch-ready products, we support technical architecture, smart contracts, web platforms, tokenomics, and investor-ready materials.",
    portfolio: "View Portfolio",
    launchPipeline: "Launch pipeline",
    active: "Active",
    productBadge: "Product showcase",
    productTitle: "Live Product Showcase",
    productCopy:
      "Real product screenshots, brand marks, and market-ready explanations for RWA wallet, NFT mall, MusicFi, SmartOTC marketplace, and payment membership ecosystem.",
    featuredCta: "Explore Live Product",
    whatItDoes: "What it does",
    visitProject: "Visit Project",
    manualTitle: "RealSun Platform Full Manual References",
    manualLink: "View Full Manual",
    aboutBadge: "Structured for market launch",
    aboutTitle: "We Are Not Just Developers. We Are Web3 Business Builders.",
    aboutLead:
      "A crypto project is not completed by simply issuing a token. It requires a full ecosystem: wallet, platform, user flow, payment structure, token economy, operation policy, security, and transaction logic.",
    aboutBody:
      "Based on real project experience, we transform ideas into structured services, design them for development, and deliver results that can be presented to the market.",
    servicesBadge: "Build services",
    servicesTitle: "Our Services",
    servicesCopy:
      "Practical services for teams that need the business model, the platform, and the investor story to move together.",
    techBadge: "Technical capability",
    techTitle: "Technology Capabilities",
    techCopy:
      "We connect the essential technologies required for blockchain projects into one practical service flow.",
    insightsBadge: "Blog thinking",
    insightsTitle: "Built Around Real Launch Questions",
    workBadge: "Who we work with",
    workTitle: "Who We Work With",
    workCopy:
      "We work with clients and partners building real blockchain utility, tokenized assets, platform economies, and launch-ready Web3 products.",
    contactBadge: "Project inquiry",
    contactTitle: "Start Your Project With Us",
    contactCopy:
      "Even if your idea is not fully organized yet, that is okay. Share your current situation, and we will help define the project structure, development scope, budget, timeline, and launch strategy.",
    sendInquiry: "Send Project Inquiry",
    footerA: "We Build Web3 Projects From Idea to Launch.",
    footerB: "Blockchain, RWA, NFT, token, wallet, and payment platforms built for real-world use.",
  },
  ko: {
    consultation: "상담 요청하기",
    heroBadge: "토큰 발행을 넘어 실제 Web3 제품을 만듭니다",
    heroTitle: "Web3, 블록체인, RWA, 결제 플랫폼을 실제 서비스로 구축합니다",
    heroLead:
      "메인넷, 디지털 지갑, 토큰 시스템, NFT 플랫폼, RWA 투자 플랫폼, P2P 토큰 마켓플레이스, 포인트 기반 결제 생태계를 개발한 경험을 보유한 Web3 빌드업 팀입니다.",
    heroBody:
      "초기 아이디어부터 출시 가능한 제품까지 기술 아키텍처, 스마트컨트랙트, 웹 플랫폼, 토크노믹스, 투자자용 자료를 함께 설계합니다.",
    portfolio: "포트폴리오 보기",
    launchPipeline: "출시 파이프라인",
    active: "진행 중",
    productBadge: "제품 쇼케이스",
    productTitle: "실제 제품 쇼케이스",
    productCopy:
      "RWA 지갑, NFT 몰, MusicFi, SmartOTC 마켓플레이스, 결제 멤버십 생태계를 실제 화면과 브랜드 로고, 시장 관점의 설명으로 보여드립니다.",
    featuredCta: "라이브 제품 보기",
    whatItDoes: "제품 역할",
    visitProject: "프로젝트 방문",
    manualTitle: "RealSun 플랫폼 전체 매뉴얼",
    manualLink: "전체 매뉴얼 보기",
    aboutBadge: "시장 출시를 위한 구조화",
    aboutTitle: "우리는 단순 개발사가 아니라 Web3 비즈니스 빌더입니다.",
    aboutLead:
      "크립토 프로젝트는 토큰 발행만으로 완성되지 않습니다. 지갑, 플랫폼, 사용자 흐름, 결제 구조, 토큰 경제, 운영 정책, 보안, 거래 로직이 하나의 생태계로 연결되어야 합니다.",
    aboutBody:
      "실제 프로젝트 경험을 기반으로 아이디어를 서비스 구조로 전환하고, 개발 가능한 형태로 설계하며, 시장에 제시할 수 있는 결과물로 만듭니다.",
    servicesBadge: "구축 서비스",
    servicesTitle: "서비스",
    servicesCopy:
      "비즈니스 모델, 플랫폼, 투자자 스토리가 함께 움직여야 하는 팀을 위한 실무형 Web3 개발 서비스입니다.",
    techBadge: "기술 역량",
    techTitle: "기술 역량",
    techCopy:
      "블록체인 프로젝트에 필요한 핵심 기술을 하나의 실전 서비스 흐름으로 연결합니다.",
    insightsBadge: "인사이트",
    insightsTitle: "실제 출시 질문에서 시작합니다",
    workBadge: "협업 대상",
    workTitle: "함께 일하는 팀",
    workCopy:
      "블록체인 유틸리티, 토큰화 자산, 플랫폼 경제, 출시 가능한 Web3 제품을 구축하는 고객 및 파트너와 함께합니다.",
    contactBadge: "프로젝트 문의",
    contactTitle: "프로젝트를 시작해 보세요",
    contactCopy:
      "아이디어가 완전히 정리되지 않아도 괜찮습니다. 현재 상황을 공유해 주시면 프로젝트 구조, 개발 범위, 예산, 일정, 출시 전략을 함께 정의합니다.",
    sendInquiry: "프로젝트 문의 보내기",
    footerA: "아이디어부터 출시까지 Web3 프로젝트를 구축합니다.",
    footerB: "블록체인, RWA, NFT, 토큰, 지갑, 결제 플랫폼을 실제 사용을 위해 만듭니다.",
  },
};

const manualLinks = [
  "https://blog.naver.com/healthinfogec/224281081641",
  "https://blog.naver.com/healthinfogec/224281082351",
  "https://blog.naver.com/healthinfogec/224281130689",
  "https://blog.naver.com/healthinfogec/224281376780",
  "https://blog.naver.com/healthinfogec/224281391969",
  "https://blog.naver.com/healthinfogec/224281412051",
  "https://blog.naver.com/healthinfogec/224281447786",
  "https://blog.naver.com/healthinfogec/224281541893",
  "https://blog.naver.com/healthinfogec/224281558581",
  "https://blog.naver.com/healthinfogec/224281687333",
];

const projects = [
  {
    name: "VAISEN Mainnet",
    nameKo: "VAISEN 메인넷",
    tag: "EVM Mainnet",
    tagKo: "EVM 메인넷",
    featured: true,
    icon: Network,
    description:
      "An EVM-based proprietary mainnet project including MetaMask connectivity, block explorer, API documentation, wallet service, and POS payment integration.",
    descriptionKo:
      "MetaMask 연결, 블록 익스플로러, API 문서, 지갑 서비스, POS 결제 연동을 포함한 EVM 기반 자체 메인넷 프로젝트입니다.",
    useCases: ["Governments", "Enterprises", "Stablecoins", "Digital asset services"],
    useCasesKo: ["정부", "기업", "스테이블코인", "디지털 자산 서비스"],
  },
  {
    name: "NFT Mall",
    nameKo: "NFT 몰",
    tag: "RWA / NFT Mall",
    tagKo: "RWA / NFT 몰",
    featured: true,
    icon: Sparkles,
    url: "https://realsun.info",
    image: nftMallImage,
    logo: realsunLogo,
    brand: "RealSun",
    productLine: "Solar RWA + NFT",
    productLineKo: "태양광 RWA + NFT",
    description:
      "A RealSun RWA showcase and NFT mall that presents real solar power plant data, operational performance, solar asset photos, and NFT-based participation in the energy ecosystem.",
    descriptionKo:
      "실제 태양광 발전소 데이터, 운영 성과, 현장 사진, NFT 기반 참여 모델을 보여주는 RealSun RWA 쇼케이스이자 NFT 몰입니다.",
    analysis:
      "The product turns solar infrastructure into a digital investment experience: visitors can review plant status, inspect generation data, learn the asset story, and move toward NFT purchase or RWA participation.",
    analysisKo:
      "태양광 인프라를 디지털 투자 경험으로 전환합니다. 사용자는 발전소 상태와 발전 데이터를 확인하고, 자산 스토리를 이해한 뒤 NFT 구매 또는 RWA 참여 흐름으로 이동할 수 있습니다.",
    useCases: ["Solar plant showcase", "RWA investor journey", "NFT purchase flow", "Operational transparency"],
    useCasesKo: ["태양광 발전소 쇼케이스", "RWA 투자자 여정", "NFT 구매 흐름", "운영 투명성"],
    links: manualLinks,
  },
  {
    name: "RWA Wallet",
    nameKo: "RWA 지갑",
    tag: "RWA Wallet",
    tagKo: "RWA 지갑",
    icon: WalletCards,
    url: "https://wallet.realsun.info",
    image: rwaWalletImage,
    logo: realsunWalletLogo,
    brand: "RealSun Wallet",
    productLine: "RSP Balance + Transfer",
    productLineKo: "RSP 잔액 + 전송",
    description:
      "A RealSun wallet for RSP balance management, QR send/receive, token purchase, P2P movement, DEX access, withdrawals, and transaction history.",
    descriptionKo:
      "RSP 잔액 관리, QR 송수신, 토큰 구매, P2P 이동, DEX 접근, 출금, 거래 내역을 지원하는 RealSun 지갑입니다.",
    analysis:
      "The wallet is the user account layer for the RWA ecosystem. It gives users a clear balance view, separates locked and available balances, and exposes the main actions needed to buy, transfer, trade, or withdraw RSP.",
    analysisKo:
      "RWA 생태계의 사용자 계정 레이어입니다. 잠금 잔액과 사용 가능 잔액을 분리해 보여주고, RSP 구매, 전송, 거래, 출금에 필요한 핵심 액션을 한 화면에 제공합니다.",
    useCases: ["RSP balance ledger", "QR transfer", "P2P wallet flow", "DEX and withdrawal"],
    useCasesKo: ["RSP 잔액 원장", "QR 전송", "P2P 지갑 흐름", "DEX 및 출금"],
  },
  {
    name: "SmartOTC Swap Platform",
    nameKo: "SmartOTC 스왑 플랫폼",
    tag: "SmartOTC",
    tagKo: "SmartOTC",
    icon: CircleDollarSign,
    url: "https://buyzone.io",
    image: smartOtcSwapPlatformImage,
    logo: buyzoneLogo,
    brand: "BuyZone",
    productLine: "P2P Token Marketplace",
    productLineKo: "P2P 토큰 마켓플레이스",
    description:
      "A SmartOTC marketplace for listing, browsing, and buying ERC-20 tokens through direct P2P swap-style flows across supported EVM chains.",
    descriptionKo:
      "지원되는 EVM 체인에서 ERC-20 토큰을 직접 P2P 스왑 방식으로 등록, 탐색, 구매할 수 있는 SmartOTC 마켓플레이스입니다.",
    analysis:
      "BuyZone focuses on over-the-counter token distribution: sellers can list token supply, set token pricing, expose affiliate rewards, and let buyers browse live listings without a traditional exchange order book.",
    analysisKo:
      "BuyZone은 OTC 방식의 토큰 유통에 초점을 둡니다. 판매자는 공급량과 가격, 제휴 보상을 설정하고 구매자는 기존 거래소 오더북 없이 실시간 리스팅을 탐색할 수 있습니다.",
    useCases: ["P2P token listings", "Seller pricing", "Affiliate rewards", "Wallet-based settlement"],
    useCasesKo: ["P2P 토큰 리스팅", "판매자 가격 설정", "제휴 보상", "지갑 기반 정산"],
  },
  {
    name: "Payment",
    nameKo: "결제",
    tag: "HUBpay",
    tagKo: "HUBpay",
    icon: Globe2,
    url: "https://hubmembership.info",
    image: paymentImage,
    logo: hubpayLogo,
    brand: "HUBpay",
    productLine: "Membership Payment",
    productLineKo: "멤버십 결제",
    description:
      "A HUBpay membership wallet for Hpoint balances, charging, token/payment transition, money transfer, gifts, shopping mall access, merchants, coupons, and referral status.",
    descriptionKo:
      "Hpoint 잔액, 충전, 토큰/결제 전환, 송금, 선물, 쇼핑몰, 가맹점, 쿠폰, 추천 상태를 관리하는 HUBpay 멤버십 지갑입니다.",
    analysis:
      "The product packages payment utility into a member dashboard. It combines point balance, crypto/token balances, charging, transfers, merchant access, and user benefits into one practical payment ecosystem.",
    analysisKo:
      "결제 유틸리티를 멤버 대시보드 안에 패키징한 제품입니다. 포인트 잔액, 토큰 잔액, 충전, 전송, 가맹점 접근, 사용자 혜택을 하나의 결제 생태계로 묶습니다.",
    useCases: ["Hpoint payment wallet", "Charging and transfer", "Merchant utility", "Membership rewards"],
    useCasesKo: ["Hpoint 결제 지갑", "충전 및 전송", "가맹점 유틸리티", "멤버십 보상"],
  },
  {
    name: "SMFI : MusicFi",
    nameKo: "SMFI : MusicFi",
    tag: "MusicFi",
    tagKo: "MusicFi",
    icon: Gem,
    url: "https://smfi.io",
    image: smfiMusicFiImage,
    logo: smfiLogo,
    brand: "SOCIALMUSICFI",
    productLine: "Stream + NFT + Battle",
    productLineKo: "스트리밍 + NFT + 배틀",
    description:
      "A SocialMusicFi platform where users stream music, discover trending tracks, upload content, collect music NFTs, and participate in battle-style engagement.",
    descriptionKo:
      "음악 스트리밍, 트렌딩 트랙 탐색, 콘텐츠 업로드, 음악 NFT 수집, 배틀형 참여를 지원하는 SocialMusicFi 플랫폼입니다.",
    analysis:
      "SMFI connects creator content with Web3 reward mechanics. The interface emphasizes discovery, new releases, most-loved tracks, uploads, NFT ownership, and gamified fan participation.",
    analysisKo:
      "SMFI는 창작자 콘텐츠와 Web3 보상 메커니즘을 연결합니다. 탐색, 신곡, 인기 트랙, 업로드, NFT 소유권, 게임화된 팬 참여가 중심입니다.",
    useCases: ["Music streaming", "Creator upload", "Music NFTs", "Fan battle and rewards"],
    useCasesKo: ["음악 스트리밍", "크리에이터 업로드", "음악 NFT", "팬 배틀 및 보상"],
  },
  {
    name: "I Love Korea",
    nameKo: "아이 러브 코리아",
    tag: "Settlement",
    tagKo: "정착 플랫폼",
    icon: BriefcaseBusiness,
    description:
      "A settlement platform for foreigners in Korea, combining jobs, hospitals, housing, visas, community, and point-based rewards.",
    descriptionKo:
      "일자리, 병원, 주거, 비자, 커뮤니티, 포인트 보상을 결합한 한국 내 외국인 정착 플랫폼입니다.",
  },
];

const services = [
  "Web3 Business Planning",
  "Tokenomics Design",
  "Smart Contract Development",
  "ERC-20 / NFT Issuance",
  "Wallet-Connected Platform Development",
  "RWA Platform Development",
  "P2P Token Trading Systems",
  "Point & Reward Systems",
  "Landing Page / IR Deck Creation",
  "Blockchain Consulting",
  "MVP Development",
  "Investor Demo Development",
];

const servicesKo = [
  "Web3 비즈니스 기획",
  "토크노믹스 설계",
  "스마트컨트랙트 개발",
  "ERC-20 / NFT 발행",
  "지갑 연동 플랫폼 개발",
  "RWA 플랫폼 개발",
  "P2P 토큰 거래 시스템",
  "포인트 및 보상 시스템",
  "랜딩페이지 / IR 덱 제작",
  "블록체인 컨설팅",
  "MVP 개발",
  "투자자 데모 개발",
];

const technologies = [
  "EVM-Based Mainnet Architecture",
  "MetaMask / Trust Wallet Integration",
  "ERC-20 / ERC-721 / ERC-1155",
  "Smart Contract Design",
  "Web3 Wallet Login",
  "Point and Token Ledger Systems",
  "NFT Marketplace",
  "P2P Trading and Escrow Logic",
  "Admin Dashboard",
  "API-Based Platform Integration",
  "Token Burn and Reward Policies",
  "Web3 Game Economy Systems",
];

const technologiesKo = [
  "EVM 기반 메인넷 아키텍처",
  "MetaMask / Trust Wallet 연동",
  "ERC-20 / ERC-721 / ERC-1155",
  "스마트컨트랙트 설계",
  "Web3 지갑 로그인",
  "포인트 및 토큰 원장 시스템",
  "NFT 마켓플레이스",
  "P2P 거래 및 에스크로 로직",
  "관리자 대시보드",
  "API 기반 플랫폼 연동",
  "토큰 소각 및 보상 정책",
  "Web3 게임 경제 시스템",
];

const audiences = [
  "Companies launching crypto projects",
  "Teams preparing token issuance",
  "Brands building NFT platforms",
  "Businesses tokenizing real-world assets",
  "Platforms adopting point and reward systems",
  "Teams developing Web3 games",
  "Projects preparing investor-ready IR materials",
  "Startups needing fast MVP development",
];

const audiencesKo = [
  "크립토 프로젝트를 출시하는 기업",
  "토큰 발행을 준비하는 팀",
  "NFT 플랫폼을 구축하는 브랜드",
  "실물 자산을 토큰화하는 비즈니스",
  "포인트 및 보상 시스템을 도입하는 플랫폼",
  "Web3 게임을 개발하는 팀",
  "투자자용 IR 자료를 준비하는 프로젝트",
  "빠른 MVP 개발이 필요한 스타트업",
];

const stats = [
  { value: "EVM", label: "mainnet architecture", labelKo: "메인넷 아키텍처" },
  { value: "RWA", label: "asset-backed platforms", labelKo: "자산 기반 플랫폼" },
  { value: "P2P", label: "token marketplace logic", labelKo: "토큰 마켓 로직" },
  { value: "IR", label: "investor-ready materials", labelKo: "투자자용 자료" },
];

const insights = [
  "A token launch needs product logic, operating policy, and transaction design.",
  "RWA projects work best when asset revenue, user flow, and reward rules are clear.",
  "Investor demos should explain the economy before asking users to trust the technology.",
];

const insightsKo = [
  "토큰 출시는 제품 로직, 운영 정책, 거래 설계가 함께 있어야 완성됩니다.",
  "RWA 프로젝트는 자산 수익, 사용자 흐름, 보상 규칙이 명확할수록 강해집니다.",
  "투자자 데모는 기술 신뢰를 요구하기 전에 경제 구조를 먼저 설명해야 합니다.",
];

const CONTACT_EMAIL = "Anantasuk000@gmail.com";

function textFor(language, english, korean) {
  return language === "ko" && korean ? korean : english;
}

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));

    if (!elements.length) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add("reveal-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollReveal();

  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [form, setForm] = useState({
    name: "",
    email: "",
    messenger: "",
    projectType: "",
    budget: "",
    stage: "",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const subjectName = form.name.trim() || "New Lead";
    const subject = `Project Inquiry from ${subjectName}`;
    const body = [
      `Name / Company: ${form.name}`,
      `Email: ${form.email}`,
      `Phone / Messenger: ${form.messenger}`,
      `Project Type: ${form.projectType}`,
      `Estimated Budget: ${form.budget}`,
      `Current Stage: ${form.stage}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) {
      return;
    }

    window.location.href = mailtoHref;
  };

  const closeMenu = () => setMenuOpen(false);
  const t = pageText[language];

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white">
      <div className="site-shell" aria-hidden="true" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyanfire/35 bg-cyanfire/10 text-cyanfire shadow-glow">
              <Blocks size={22} />
            </span>
            <span className="font-display text-lg font-semibold tracking-normal text-white">
              Web3 Builders
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={`${item.label}-${item.href}`} className="nav-link" href={item.href}>
                {textFor(language, item.label, item.labelKo)}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle language={language} onChange={setLanguage} />
            <a className="rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-cyanfire" href="#contact">
              {t.consultation}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle language={language} onChange={setLanguage} compact />
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-ink/95 px-4 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              <LanguageToggle language={language} onChange={setLanguage} compact />
              {navItems.map((item) => (
                <a key={`${item.label}-mobile`} className="mobile-nav-link" href={item.href} onClick={closeMenu}>
                  {textFor(language, item.label, item.labelKo)}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative isolate min-h-screen px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div data-reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyanfire/30 bg-cyanfire/10 px-4 py-2 text-sm font-medium text-cyan-100">
                <Zap size={16} className="text-cyanfire" />
                {t.heroBadge}
              </div>
              <h1 className="max-w-5xl font-display text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
                {t.heroTitle}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {t.heroLead}
              </p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400">
                {t.heroBody}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="primary-button" href="#contact">
                  {t.consultation}
                  <ArrowRight size={18} />
                </a>
                <a className="secondary-button" href="#projects">
                  {t.portfolio}
                  <ChevronRight size={18} />
                </a>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="stat-card rounded-lg border border-white/10 bg-white/[0.04] p-4"
                    style={{ "--delay": `${240 + index * 80}ms` }}
                  >
                    <div className="font-display text-2xl font-semibold text-white">{stat.value}</div>
                    <div className="mt-1 text-xs leading-5 text-slate-400">{textFor(language, stat.label, stat.labelKo)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative" data-reveal style={{ "--delay": "140ms" }}>
              <div className="hero-visual">
                <div className="visual-topbar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
                  <EcosystemNode icon={Network} title="Mainnet" detail="EVM chain, explorer, APIs" tone="cyan" delay="0ms" />
                  <EcosystemNode icon={WalletCards} title="Wallet" detail="MetaMask, Trust Wallet, points" tone="violet" delay="420ms" />
                  <EcosystemNode icon={Gem} title="NFT / RWA" detail="Assets, revenue, ownership logic" tone="mint" delay="760ms" />
                  <EcosystemNode icon={CircleDollarSign} title="Payment" detail="P2P, POS, settlement flows" tone="cyan" delay="1120ms" />
                </div>
                <div className="mx-5 mb-5 rounded-lg border border-white/10 bg-ink/70 p-5 sm:mx-6 sm:mb-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-300">{t.launchPipeline}</span>
                    <span className="rounded-md bg-mintfire/12 px-2.5 py-1 text-xs font-semibold text-mintfire">{t.active}</span>
                  </div>
                  <div className="space-y-3">
                    {(language === "ko" ? ["아키텍처", "스마트컨트랙트", "플랫폼 UX", "투자자 데모"] : ["Architecture", "Smart Contracts", "Platform UX", "Investor Demo"]).map((item, index) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="grid h-6 w-6 place-items-center rounded-md bg-white/10 text-xs text-cyan-100">
                          {index + 1}
                        </span>
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                          <div className="pipeline-fill h-full rounded-full bg-gradient-to-r from-cyanfire via-mintfire to-violetfire" style={{ "--target-width": `${88 - index * 11}%`, "--delay": `${index * 180}ms` }} />
                        </div>
                        <span className="w-28 text-right text-xs text-slate-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-spacing border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div data-reveal>
                <SectionEyebrow icon={ShieldCheck}>{t.aboutBadge}</SectionEyebrow>
              </div>
              <div data-reveal style={{ "--delay": "120ms" }}>
                <h2 className="section-title">{t.aboutTitle}</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  {t.aboutLead}
                </p>
                <p className="mt-5 text-base leading-7 text-slate-400">
                  {t.aboutBody}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-spacing">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="section-heading" data-reveal>
              <SectionEyebrow icon={Layers3}>{t.productBadge}</SectionEyebrow>
              <h2 className="section-title">{t.productTitle}</h2>
              <p className="section-copy">
                {t.productCopy}
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {projects.filter((project) => project.featured).map((project, index) => (
                <ProjectCard key={project.name} project={project} featured delay={index * 120} language={language} text={t} />
              ))}
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.filter((project) => !project.featured).map((project, index) => (
                <ProjectCard key={project.name} project={project} delay={index * 90} language={language} text={t} />
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-spacing border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="section-heading" data-reveal>
              <SectionEyebrow icon={Rocket}>{t.servicesBadge}</SectionEyebrow>
              <h2 className="section-title">{t.servicesTitle}</h2>
              <p className="section-copy">
                {t.servicesCopy}
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div key={service} className="service-card" data-reveal style={{ "--delay": `${index * 45}ms` }}>
                  <Check size={18} className="shrink-0 text-mintfire" />
                  <span>{language === "ko" ? servicesKo[index] : service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="technology" className="section-spacing">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div data-reveal>
                <SectionEyebrow icon={Cpu}>{t.techBadge}</SectionEyebrow>
                <h2 className="section-title mt-5">{t.techTitle}</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  {t.techCopy}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {technologies.map((technology, index) => (
                  <div key={technology} className="tech-card" data-reveal style={{ "--delay": `${index * 45}ms` }}>
                    <span className="tech-index">{String(index + 1).padStart(2, "0")}</span>
                    <span>{language === "ko" ? technologiesKo[index] : technology}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="insights" className="section-spacing border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="section-heading" data-reveal>
              <SectionEyebrow icon={MessageSquare}>{t.insightsBadge}</SectionEyebrow>
              <h2 className="section-title">{t.insightsTitle}</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {insights.map((insight, index) => (
                <article
                  key={insight}
                  className="insight-card rounded-lg border border-white/10 bg-panel/80 p-6 transition hover:-translate-y-1 hover:border-cyanfire/40"
                  data-reveal
                  style={{ "--delay": `${index * 90}ms` }}
                >
                  <Code2 className="mb-5 text-cyanfire" size={24} />
                  <p className="leading-7 text-slate-300">{language === "ko" ? insightsKo[index] : insight}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section-spacing">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div data-reveal>
                <SectionEyebrow icon={Fingerprint}>{t.workBadge}</SectionEyebrow>
                <h2 className="section-title mt-5">{t.workTitle}</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  {t.workCopy}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {audiences.map((audience, index) => (
                  <div key={audience} className="audience-card" data-reveal style={{ "--delay": `${index * 55}ms` }}>
                    <ArrowRight size={16} className="text-cyanfire" />
                    <span>{language === "ko" ? audiencesKo[index] : audience}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-spacing pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="contact-panel" data-reveal>
              <div>
                <SectionEyebrow icon={LockKeyhole}>{t.contactBadge}</SectionEyebrow>
                <h2 className="section-title mt-5">{t.contactTitle}</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  {t.contactCopy}
                </p>
                <div className="contact-highlights mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {["Architecture review", "Token logic", "MVP scope", "Investor demo"].map((item, index) => (
                    <div key={item} className="mini-card rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300" style={{ "--delay": `${index * 100}ms` }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name / Company" name="name" value={form.name} onChange={handleChange} required />
                  <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                </div>
                <Field label="Phone / Messenger" name="messenger" value={form.messenger} onChange={handleChange} />
                <div className="grid gap-4 sm:grid-cols-2">
                  <SelectField label="Project Type" name="projectType" value={form.projectType} onChange={handleChange} required options={["Mainnet", "Wallet", "RWA Platform", "NFT Platform", "P2P Marketplace", "Payment / Point System", "Consulting", "Other"]} />
                  <SelectField label="Estimated Budget" name="budget" value={form.budget} onChange={handleChange} options={["Not decided", "Under $10k", "$10k - $30k", "$30k - $75k", "$75k+"]} />
                </div>
                <SelectField label="Current Stage" name="stage" value={form.stage} onChange={handleChange} options={["Idea only", "Planning", "Prototype", "Existing product", "Preparing launch", "Need investor materials"]} />
                <label className="grid gap-2">
                  <span className="form-label">Message</span>
                  <textarea
                    className="form-input min-h-36 resize-y"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you want to build, where the project is now, and what kind of support you need."
                    required
                  />
                </label>
                <button className="primary-button justify-center border-0" type="submit">
                  {t.sendInquiry}
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>{t.footerA}</p>
          <p>{t.footerB}</p>
        </div>
      </footer>
    </div>
  );
}

function SectionEyebrow({ children, icon: Icon }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-cyan-100">
      <Icon size={16} className="text-cyanfire" />
      {children}
    </div>
  );
}

function LanguageToggle({ language, onChange, compact = false }) {
  return (
    <div className={compact ? "language-toggle language-toggle-compact" : "language-toggle"} aria-label="Language selector">
      {[
        { id: "en", label: "EN" },
        { id: "ko", label: "KR" },
      ].map((option) => (
        <button
          key={option.id}
          type="button"
          className={language === option.id ? "language-option language-option-active" : "language-option"}
          onClick={() => onChange(option.id)}
          aria-pressed={language === option.id}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function EcosystemNode({ icon: Icon, title, detail, tone, delay = "0ms" }) {
  return (
    <div className={`ecosystem-node tone-${tone}`} style={{ "--float-delay": delay }}>
      <div className="mb-5 flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white">
          <Icon size={22} />
        </span>
        <span className="h-2 w-2 rounded-full bg-current" />
      </div>
      <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
    </div>
  );
}

function ProjectCard({ project, featured = false, delay = 0, language = "en", text = pageText.en }) {
  const Icon = project.icon;
  const name = textFor(language, project.name, project.nameKo);
  const tag = textFor(language, project.tag, project.tagKo);
  const productLine = textFor(language, project.productLine, project.productLineKo);
  const description = textFor(language, project.description, project.descriptionKo);
  const analysis = textFor(language, project.analysis, project.analysisKo);
  const useCases = language === "ko" && project.useCasesKo ? project.useCasesKo : project.useCases;
  const domain = project.url ? new URL(project.url).hostname.replace(/^www\./, "") : "";

  return (
    <article
      className={featured ? "project-card project-card-featured" : "project-card"}
      data-reveal
      style={{ "--delay": `${delay}ms` }}
    >
      <div className="project-brand-row">
        <div className="project-brand">
          <div className="project-logo-wrap">
            {project.logo ? (
              <img className="project-logo" src={project.logo} alt={`${project.brand || name} logo`} loading="lazy" />
            ) : (
              <Icon size={24} />
            )}
          </div>
          <div>
            <p className="project-brand-name">{project.brand || name}</p>
            {productLine && <p className="project-product-line">{productLine}</p>}
          </div>
        </div>
        <span className="project-tag">
          {tag}
        </span>
      </div>

      {project.image && (
        <a href={project.url} target="_blank" rel="noreferrer" className="project-shot-link" aria-label={`Open ${name}`}>
          <img className="project-shot" src={project.image} alt={`${name} screenshot`} loading="lazy" />
          <span className="project-shot-badge">
            <ExternalLink size={13} />
            {domain}
          </span>
        </a>
      )}

      <h3 className="font-display text-2xl font-semibold tracking-normal text-white">{name}</h3>
      <p className="mt-4 leading-7 text-slate-300">{description}</p>

      {analysis && (
        <div className="project-analysis">
          <p className="project-analysis-label">{text.whatItDoes}</p>
          <p>{analysis}</p>
        </div>
      )}

      {project.url && (
        <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
          {featured ? text.featuredCta : text.visitProject}
          <ExternalLink size={14} />
        </a>
      )}

      {useCases && (
        <div className="mt-6 flex flex-wrap gap-2">
          {useCases.map((item) => (
            <span key={item} className="rounded-md bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-300">
              {item}
            </span>
          ))}
        </div>
      )}

      {project.links && (
        <div className="mt-7">
          <p className="mb-3 text-sm font-semibold text-white">{text.manualTitle}</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {project.links.map((link, index) => (
              <a
                key={link}
                className="manual-link"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                {text.manualLink} {index + 1}
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function Field({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <label className="grid gap-2">
      <span className="form-label">{label}</span>
      <input
        className="form-input"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={label}
      />
    </label>
  );
}

function SelectField({ label, name, value, onChange, options, required = false }) {
  return (
    <label className="grid gap-2">
      <span className="form-label">{label}</span>
      <select className="form-input" name={name} value={value} onChange={onChange} required={required}>
        <option value="">{required ? `Select ${label}` : "Optional"}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default App;
