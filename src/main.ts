import './styles/main.css';
import { HeroAnimation } from './scripts/hero-animation';

// Define types for translations
interface Translation {
  [key: string]: string;
}

interface Translations {
  [lang: string]: Translation;
}

// Translation object
const translations: Translations = {
  ar: {
    // Main titles
    pageTitle: "AbdeSsamad Cloud - التقنية بلا حدود | حلول سحابية متكاملة",
    logo: "AbdeSsamad Cloud",
    
    // Main menu
    navHome: "الرئيسية",
    navFeatures: "المميزات",
    navStats: "الإحصائيات",
    navPricing: "الأسعار",
    navTestimonials: "آراء العملاء",
    navFaq: "الأسئلة الشائعة",
    navServices: "خدماتنا",
    navAbout: "من نحن",
    navBlog: "المدونة",
    navContact: "تواصل معنا",
    accountBtn: "حسابي",
    
    // Language toggle button
    langToggle: "EN",
    
    // Hero section
    heroTitle: "حلول سحابية تُعيد تعريف السرعة والذكاء",
    heroDesc: "AbdeSsamad Cloud تقدم بيئة تقنية متكاملة تجمع بين الكفاءة والأمان وسهولة التوسع. اكتشف عالمًا جديدًا من الحلول السحابية المصممة خصيصًا لاحتياجاتك.",
    heroCta1: "ابدأ رحلتك الآن",
    heroCta2: "اكتشف المميزات",
    
    // Statistics section
    stat1: "خادم نشط",
    stat2: "عميل راضٍ",
    stat3: "مركز بيانات عالمي",
    stat4: "% وقت تشغيل",
    
    // Features section
    featuresTitle: "المميزات التقنية",
    feature1Title: "أداء استثنائي",
    feature1Desc: "سرعة معالجة عالية تضمن استجابة فورية لأي تطبيق أو خدمة. بنية تحتية متطورة توفر أداءً لا مثيل له.",
    feature2Title: "أمان مطلق",
    feature2Desc: "نظام أمان مدمج بتشفير متقدم يحمي بياناتك على مدار الساعة. طبقات حماية متعددة تضمن أقصى درجات الأمان.",
    feature3Title: "تكامل سحابي كامل",
    feature3Desc: "ربط فوري مع مختلف الأنظمة والخدمات السحابية دون تعقيد. تكامل سلس مع أدواتك المفضلة.",
    feature4Title: "توسع مرن",
    feature4Desc: "قم بتوسيع مواردك بسهولة مع نمو أعمالك. تكاليف مرنة تتناسب مع احتياجاتك الفعلية.",
    feature5Title: "دعم فني متميز",
    feature5Desc: "فريق دعم فني متخصص متاح على مدار الساعة لمساعدتك في حل أي تحديات قد تواجهك.",
    feature6Title: "تقارير متقدمة",
    feature6Desc: "احصل على تقارير مفصلة عن أداء خدماتك واستهلاك الموارد لاتخاذ قرارات مستنيرة.",
    
    // Pricing section
    pricingTitle: "خطط الأسعار",
    pricingTag1: "الأكثر اقتصاداً",
    pricingTag2: "الخيار الأمثل",
    pricingTag3: "للمؤسسات الكبرى",
    pricingPlan1: "الباقة الأساسية",
    pricingPlan2: "الباقة الاحترافية",
    pricingPlan3: "باقة المؤسسات",
    pricingPeriod: "/شهر",
    pricingFeature1: "10GB مساحة تخزين",
    pricingFeature2: "دعم فني عبر البريد",
    pricingFeature3: "لوحة تحكم أساسية",
    pricingFeature4: "نسخ احتياطي أسبوعي",
    pricingFeature5: "شهادة SSL مجانية",
    pricingFeature6: "50GB مساحة تخزين",
    pricingFeature7: "دعم فني مباشر 24/7",
    pricingFeature8: "تكامل API متقدم",
    pricingFeature9: "نسخ احتياطي يومي",
    pricingFeature10: "مراقبة أداء متقدمة",
    pricingFeature11: "CDN مجاني",
    pricingFeature12: "مساحة تخزين غير محدودة",
    pricingFeature13: "دعم فني مخصص",
    pricingFeature14: "أمان متقدم وشبكة خاصة",
    pricingFeature15: "إدارة سحابية مخصصة",
    pricingFeature16: "تقارير أداء مفصلة",
    pricingFeature17: "SLA بنسبة 99.9%",
    pricingButton1: "ابدأ الآن",
    pricingButton2: "اشترك الآن",
    pricingButton3: "تواصل معنا",
    
    // Testimonials section
    testimonialsTitle: "ماذا يقول عملاؤنا",
    testimonial1: "\"لقد غيرت AbdeSsamad Cloud طريقة عملنا بالكامل. السرعة والموثوقية استثنائية، وفريق الدعم دائماً متاح للمساعدة.\"",
    testimonial2: "\"نستخدم خدمات AbdeSsamad Cloud منذ أكثر من عام، ولم نواجه أي توقف. الأداء المتميز والتكلفة المعقولة جعلانا نوسع خدماتنا.\"",
    testimonial3: "\"الباقة الاحترافية من AbdeSsamad Cloud وفرت لنا كل ما نحتاجه لتشغيل تطبيقاتنا. التكامل السلس مع أدواتنا الحالية كان مذهلاً.\"",
    client1Name: "أحمد السيد",
    client1Role: "مدير تقنية المعلومات، شركة التقنية المتطورة",
    client2Name: "فاطمة محمد",
    client2Role: "مؤسسة متجر إلكتروني، نماء",
    client3Name: "خالد العلي",
    client3Role: "مطور برمجيات، تكامل للحلول",
    
    // FAQ section
    faqTitle: "الأسئلة الشائعة",
    faqQuestion1: "كيف يمكنني نقل موقعي الحالي إلى AbdeSsamad Cloud؟",
    faqAnswer1: "نقدم خدمة نقل مجانية لجميع العملاء الجدد. فريقنا الفني سينقل موقعك بالكامل مع الحفاظ على جميع البيانات والإعدادات دون أي توقف يذكر للخدمة.",
    faqQuestion2: "هل يمكنني الترقية أو خفض الباقة لاحقاً؟",
    faqAnswer2: "نعم، يمكنك الترقية أو خفض الباقة في أي وقت. التغييرات تُطبق فوراً، ونحن نحسب الفروق بشكل تناسبي لضمان العدالة.",
    faqQuestion3: "ما هي سياسة الاسترجاع؟",
    faqAnswer3: "نقدم ضمان استرجاع الأموال خلال 30 يومًا من الاشتراك إذا لم تكن راضيًا عن خدماتنا. اتصل بفريق الدعم لمعرفة التفاصيل.",
    faqQuestion4: "هل تدعمون التكامل مع خدمات الطرف الثالث؟",
    faqAnswer4: "نعم، نقدم تكاملًا سلسًا مع مجموعة واسعة من الخدمات مثل GitHub، Docker، Jenkins، وأدوات CI/CD الأخرى عبر واجهات برمجة التطبيقات المتقدمة.",
    
    // Blog section
    blogTitle: "أحدث المقالات",
    blogTitle1: "مستقبل الحوسبة السحابية في العالم العربي",
    blogDesc1: "كيف ستغير الحلول السحابية طريقة عمل الشركات في المنطقة خلال السنوات القادمة.",
    blogTitle2: "أفضل ممارسات الأمان في البيئة السحابية",
    blogDesc2: "نصائح عملية لتعزيز أمن بياناتك وتطبيقاتك في السحابة.",
    blogTitle3: "كيف تحسن أداء تطبيقاتك السحابية",
    blogDesc3: "استراتيجيات وتقنيات مجربة لتحسين سرعة واستجابة تطبيقاتك.",
    blogReadMore: "اقرأ المزيد",
    
    // CTA section
    ctaTitle: "جاهز لبدء رحلتك السحابية؟",
    ctaDesc: "انضم إلى أكثر من 15,000 عميل يثقون بـ AbdeSsamad Cloud لحلولهم السحابية.",
    ctaButton: "ابدأ الآن مجانًا لمدة 14 يومًا",
    
    // Footer
    footerDesc: "نقدم حلول سحابية متكاملة تجمع بين الكفاءة والأمان وسهولة التوسع.",
    footerLinks1: "روابط سريعة",
    footerLinks2: "الخدمات",
    footerLinks3: "اتصل بنا",
    service1: "الاستضافة السحابية",
    service2: "التخزين السحابي",
    service3: "قواعد البيانات",
    service4: "شبكات CDN",
    service5: "الأمان السحابي",
    footerAddress: "الرياض، المملكة العربية السعودية",
    footerCopyright: "© 2025 AbdeSsamad Cloud — التقنية بلا حدود. جميع الحقوق محفوظة.",

    // New Pages
    aboutTitle: "من نحن",
    aboutDesc: "نحن فريق من الخبراء المتحمسين لبناء مستقبل رقمي أفضل.",
    servicesTitle: "خدماتنا",
    servicesDesc: "حلول تقنية متكاملة لتنمية أعمالك.",
    contactTitle: "تواصل معنا",
    contactDesc: "نحن هنا للإجابة على استفساراتك ومساعدتك في البدء.",
    blogPageTitle: "المدونة",
    blogPageDesc: "أحدث الأخبار والتقنيات في عالم الحوسبة السحابية.",
    
    // About Page Details
    ourStoryTitle: "قصتنا",
    ourStoryText1: "تأسست AbdeSsamad Cloud برؤية واضحة: تمكين الشركات والأفراد من الاستفادة القصوى من قوة الحوسبة السحابية. نحن نؤمن بأن التقنية يجب أن تكون سهلة الوصول، آمنة، وموثوقة للجميع.",
    ourStoryText2: "منذ انطلاقنا، عملنا بجد لبناء بنية تحتية عالمية المستوى تخدم آلاف العملاء حول العالم. نحن نفخر بفريقنا المتنوع من المهندسين والمطورين الذين يعملون ليل نهار لضمان استمرارية أعمالكم.",
    teamTitle: "فريقنا القيادي",
    teamRole1: "المدير التنفيذي",
    teamRole2: "مديرة التقنية",
    teamRole3: "مدير العمليات",
    teamRole4: "مديرة التسويق",
    
    // Services Page Details
    serviceDesc1: "استضافة عالية الأداء مع وقت تشغيل مضمون بنسبة 99.9%. خوادمنا مجهزة بأحدث التقنيات لضمان سرعة موقعك.",
    serviceDesc2: "مساحة تخزين آمنة وقابلة للتوسع لجميع ملفاتك وبياناتك. وصول سريع وآمن من أي مكان في العالم.",
    serviceDesc3: "قواعد بيانات مدارة بالكامل تدعم SQL و NoSQL. نسخ احتياطي تلقائي واستعادة البيانات بنقرة زر.",
    serviceDesc4: "شبكة توصيل محتوى عالمية لتسريع تحميل موقعك للمستخدمين في جميع أنحاء العالم.",
    serviceDesc5: "حماية متقدمة ضد هجمات DDoS والبرمجيات الخبيثة. جدران حماية وتشفير للبيانات لضمان سلامة أعمالك.",
    serviceTitle6: "DevOps & CI/CD",
    serviceDesc6: "أدوات متكاملة للمطورين لتسريع عملية التطوير والنشر. تكامل مع GitHub و GitLab.",
    
    // Contact Page Details
    contactInfoTitle: "معلومات الاتصال",
    contactAddressTitle: "العنوان",
    contactEmailTitle: "البريد الإلكتروني",
    contactPhoneTitle: "الهاتف",
    contactHoursTitle: "ساعات العمل",
    contactHours: "الأحد - الخميس: 9:00 ص - 6:00 م",
    contactFormTitle: "أرسل لنا رسالة",
    formName: "الاسم الكامل",
    formNamePlaceholder: "أدخل اسمك",
    formEmail: "البريد الإلكتروني",
    formEmailPlaceholder: "أدخل بريدك الإلكتروني",
    formSubject: "الموضوع",
    formSubjectPlaceholder: "موضوع الرسالة",
    formMessage: "الرسالة",
    formMessagePlaceholder: "اكتب رسالتك هنا...",
    formSubmit: "إرسال الرسالة"
  },
  en: {
    // Main titles
    pageTitle: "AbdeSsamad Cloud - Technology Without Limits | Integrated Cloud Solutions",
    logo: "AbdeSsamad Cloud",
    
    // Main menu
    navHome: "Home",
    navFeatures: "Features",
    navStats: "Statistics",
    navPricing: "Pricing",
    navTestimonials: "Testimonials",
    navFaq: "FAQ",
    navServices: "Services",
    navAbout: "About Us",
    navBlog: "Blog",
    navContact: "Contact Us",
    accountBtn: "My Account",
    
    // Language toggle button
    langToggle: "AR",
    
    // Hero section
    heroTitle: "Cloud Solutions That Redefine Speed and Intelligence",
    heroDesc: "AbdeSsamad Cloud offers an integrated technical environment that combines efficiency, security, and ease of expansion. Discover a new world of cloud solutions designed specifically for your needs.",
    heroCta1: "Start Your Journey Now",
    heroCta2: "Discover Features",
    
    // Statistics section
    stat1: "Active Servers",
    stat2: "Satisfied Clients",
    stat3: "Global Data Centers",
    stat4: "% Uptime",
    
    // Features section
    featuresTitle: "Technical Features",
    feature1Title: "Exceptional Performance",
    feature1Desc: "High processing speed ensures instant response for any application or service. Advanced infrastructure provides unparalleled performance.",
    feature2Title: "Absolute Security",
    feature2Desc: "Built-in security system with advanced encryption protects your data 24/7. Multiple protection layers ensure maximum security.",
    feature3Title: "Full Cloud Integration",
    feature3Desc: "Instant connection with various cloud systems and services without complexity. Seamless integration with your favorite tools.",
    feature4Title: "Flexible Scaling",
    feature4Desc: "Easily expand your resources as your business grows. Flexible costs that match your actual needs.",
    feature5Title: "Premium Technical Support",
    feature5Desc: "Specialized technical support team available 24/7 to help you solve any challenges you may face.",
    feature6Title: "Advanced Reports",
    feature6Desc: "Get detailed reports about your services performance and resource consumption to make informed decisions.",
    
    // Pricing section
    pricingTitle: "Pricing Plans",
    pricingTag1: "Most Economical",
    pricingTag2: "Optimal Choice",
    pricingTag3: "For Large Enterprises",
    pricingPlan1: "Basic Package",
    pricingPlan2: "Professional Package",
    pricingPlan3: "Enterprise Package",
    pricingPeriod: "/month",
    pricingFeature1: "10GB Storage Space",
    pricingFeature2: "Email Technical Support",
    pricingFeature3: "Basic Control Panel",
    pricingFeature4: "Weekly Backup",
    pricingFeature5: "Free SSL Certificate",
    pricingFeature6: "50GB Storage Space",
    pricingFeature7: "24/7 Direct Technical Support",
    pricingFeature8: "Advanced API Integration",
    pricingFeature9: "Daily Backup",
    pricingFeature10: "Advanced Performance Monitoring",
    pricingFeature11: "Free CDN",
    pricingFeature12: "Unlimited Storage Space",
    pricingFeature13: "Dedicated Technical Support",
    pricingFeature14: "Advanced Security & Private Network",
    pricingFeature15: "Custom Cloud Management",
    pricingFeature16: "Detailed Performance Reports",
    pricingFeature17: "99.9% SLA",
    pricingButton1: "Start Now",
    pricingButton2: "Subscribe Now",
    pricingButton3: "Contact Us",
    
    // Testimonials section
    testimonialsTitle: "What Our Clients Say",
    testimonial1: "\"AbdeSsamad Cloud completely changed how we work. The speed and reliability are exceptional, and the support team is always available to help.\"",
    testimonial2: "\"We've been using AbdeSsamad Cloud services for over a year, and we haven't experienced any downtime. The excellent performance and reasonable cost made us expand our services.\"",
    testimonial3: "\"The Professional package from AbdeSsamad Cloud provided us with everything we need to run our applications. The seamless integration with our existing tools was amazing.\"",
    client1Name: "Ahmed Al-Sayed",
    client1Role: "IT Manager, Advanced Technology Company",
    client2Name: "Fatima Mohammed",
    client2Role: "E-commerce Store Founder, Namaa",
    client3Name: "Khalid Al-Ali",
    client3Role: "Software Developer, Integration Solutions",
    
    // FAQ section
    faqTitle: "Frequently Asked Questions",
    faqQuestion1: "How can I transfer my current site to AbdeSsamad Cloud?",
    faqAnswer1: "We offer free transfer service for all new clients. Our technical team will transfer your entire site while maintaining all data and settings with minimal service interruption.",
    faqQuestion2: "Can I upgrade or downgrade my package later?",
    faqAnswer2: "Yes, you can upgrade or downgrade your package at any time. Changes are applied immediately, and we calculate differences proportionally to ensure fairness.",
    faqQuestion3: "What is the refund policy?",
    faqAnswer3: "We offer a 30-day money-back guarantee from subscription if you're not satisfied with our services. Contact the support team for details.",
    faqQuestion4: "Do you support integration with third-party services?",
    faqAnswer4: "Yes, we offer seamless integration with a wide range of services like GitHub, Docker, Jenkins, and other CI/CD tools through advanced APIs.",
    
    // Blog section
    blogTitle: "Latest Articles",
    blogTitle1: "The Future of Cloud Computing in the Arab World",
    blogDesc1: "How cloud solutions will change the way companies work in the region in the coming years.",
    blogTitle2: "Best Security Practices in Cloud Environment",
    blogDesc2: "Practical tips to enhance the security of your data and applications in the cloud.",
    blogTitle3: "How to Improve Your Cloud Applications Performance",
    blogDesc3: "Proven strategies and techniques to improve the speed and responsiveness of your applications.",
    blogReadMore: "Read More",
    
    // CTA section
    ctaTitle: "Ready to Start Your Cloud Journey?",
    ctaDesc: "Join over 15,000 clients who trust AbdeSsamad Cloud for their cloud solutions.",
    ctaButton: "Start Now Free for 14 Days",
    
    // Footer
    footerDesc: "We provide integrated cloud solutions that combine efficiency, security, and ease of expansion.",
    footerLinks1: "Quick Links",
    footerLinks2: "Services",
    footerLinks3: "Contact Us",
    service1: "Cloud Hosting",
    service2: "Cloud Storage",
    service3: "Databases",
    service4: "CDN Networks",
    service5: "Cloud Security",
    footerAddress: "Riyadh, Kingdom of Saudi Arabia",
    footerCopyright: "© 2025 AbdeSsamad Cloud — Technology Without Limits. All rights reserved.",

    // New Pages
    aboutTitle: "About Us",
    aboutDesc: "We are a team of experts passionate about building a better digital future.",
    servicesTitle: "Our Services",
    servicesDesc: "Integrated technical solutions to grow your business.",
    contactTitle: "Contact Us",
    contactDesc: "We are here to answer your inquiries and help you get started.",
    blogPageTitle: "Blog",
    blogPageDesc: "Latest news and technologies in the cloud computing world.",
    
    // About Page Details
    ourStoryTitle: "Our Story",
    ourStoryText1: "AbdeSsamad Cloud was founded with a clear vision: to empower businesses and individuals to make the most of cloud computing power. We believe technology should be accessible, secure, and reliable for everyone.",
    ourStoryText2: "Since our inception, we have worked hard to build world-class infrastructure serving thousands of clients worldwide. We are proud of our diverse team of engineers and developers working day and night to ensure your business continuity.",
    teamTitle: "Our Leadership Team",
    teamRole1: "CEO",
    teamRole2: "CTO",
    teamRole3: "COO",
    teamRole4: "CMO",
    
    // Services Page Details
    serviceDesc1: "High-performance hosting with 99.9% guaranteed uptime. Our servers are equipped with the latest technologies to ensure your site speed.",
    serviceDesc2: "Secure and scalable storage space for all your files and data. Fast and secure access from anywhere in the world.",
    serviceDesc3: "Fully managed databases supporting SQL and NoSQL. Automatic backup and data restoration with a click.",
    serviceDesc4: "Global Content Delivery Network to accelerate your site loading for users worldwide.",
    serviceDesc5: "Advanced protection against DDoS attacks and malware. Firewalls and data encryption to ensure your business safety.",
    serviceTitle6: "DevOps & CI/CD",
    serviceDesc6: "Integrated tools for developers to accelerate development and deployment. Integration with GitHub and GitLab.",
    
    // Contact Page Details
    contactInfoTitle: "Contact Information",
    contactAddressTitle: "Address",
    contactEmailTitle: "Email",
    contactPhoneTitle: "Phone",
    contactHoursTitle: "Working Hours",
    contactHours: "Sunday - Thursday: 9:00 AM - 6:00 PM",
    contactFormTitle: "Send Us a Message",
    formName: "Full Name",
    formNamePlaceholder: "Enter your name",
    formEmail: "Email",
    formEmailPlaceholder: "Enter your email",
    formSubject: "Subject",
    formSubjectPlaceholder: "Message subject",
    formMessage: "Message",
    formMessagePlaceholder: "Write your message here...",
    formSubmit: "Send Message"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Hero Animation if on home page
  if (document.getElementById('hero-animation')) {
    new HeroAnimation('hero-animation');
  }

  // DOM Elements
  const colorPickerBtn = document.getElementById('colorPickerBtn');
  const darkModeBtn = document.getElementById('darkModeBtn');
  const langToggle = document.getElementById('langToggle');
  const colorPalette = document.getElementById('colorPalette');
  const backToTopBtn = document.getElementById('backToTop');
  const faqItems = document.querySelectorAll('.faq-item');
  const floatingSettingsBtn = document.getElementById('floatingSettingsBtn');
  
  // Default Language
  let currentLang = localStorage.getItem('language') || 'ar';
  
  // Load Language
  loadLanguage(currentLang);
  
  // Toggle Color Palette
  if (colorPickerBtn) {
    colorPickerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      colorPalette?.classList.toggle('hidden');
    });
  }
  
  // Floating Settings Button
  if (floatingSettingsBtn) {
    floatingSettingsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (colorPalette) {
        colorPalette.classList.toggle('hidden');
        if (!colorPalette.classList.contains('hidden')) {
            const rect = floatingSettingsBtn.getBoundingClientRect();
            colorPalette.style.top = 'auto';
            colorPalette.style.bottom = (window.innerHeight - rect.top + 10) + 'px';
            colorPalette.style.left = rect.left + 'px';
            colorPalette.style.right = 'auto';
        }
      }
    });
  }
  
  // Generate Color Options
  const colors = [
    { name: 'blue', hex: '#0078d4', dark: '#005a9e' },
    { name: 'green', hex: '#28a745', dark: '#1e7e34' },
    { name: 'purple', hex: '#6f42c1', dark: '#59359a' },
    { name: 'orange', hex: '#fd7e14', dark: '#e36209' },
    { name: 'red', hex: '#dc3545', dark: '#c82333' },
    { name: 'teal', hex: '#20c997', dark: '#198754' },
    { name: 'pink', hex: '#d63384', dark: '#a61e4d' },
    { name: 'indigo', hex: '#6610f2', dark: '#520dc2' },
    { name: 'gold', hex: '#ffc107', dark: '#d39e00' }
  ];

  if (colorPalette) {
    colorPalette.innerHTML = ''; // Clear existing
    colors.forEach(color => {
      const option = document.createElement('div');
      option.className = 'color-option';
      option.setAttribute('data-color', color.name);
      option.style.backgroundColor = color.hex;
      option.addEventListener('click', () => {
        changeThemeColor(color.name);
        document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        colorPalette.classList.add('hidden');
      });
      colorPalette.appendChild(option);
    });
  }
  
  // Dark Mode Toggle
  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', function(this: HTMLElement) {
      document.body.classList.toggle('dark-mode');
      
      const icon = this.querySelector('i');
      if (icon) {
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            this.setAttribute('title', currentLang === 'ar' ? 'الوضع النهاري' : 'Light Mode');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            this.setAttribute('title', currentLang === 'ar' ? 'الوضع الليلي' : 'Dark Mode');
        }
      }
      
      localStorage.setItem('darkMode', String(document.body.classList.contains('dark-mode')));
    });
  }
  
  // Language Toggle
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      loadLanguage(currentLang);
      localStorage.setItem('language', currentLang);
    });
  }
  
  function changeThemeColor(colorName: string) {
    const color = colors.find(c => c.name === colorName) || colors[0];
    
    // Update primary colors
    document.documentElement.style.setProperty('--primary', color.hex);
    document.documentElement.style.setProperty('--primary-dark', color.dark);
    
    // Update hero gradient colors for light mode
    document.documentElement.style.setProperty('--hero-bg-start', color.hex);
    document.documentElement.style.setProperty('--hero-bg-end', color.dark);
    
    // Also update dark mode hero colors by calculating darker versions
    const darkerStart = adjustColorBrightness(color.hex, -30);
    const darkerEnd = adjustColorBrightness(color.dark, -10);
    document.documentElement.style.setProperty('--hero-bg-start-dark', darkerStart);
    document.documentElement.style.setProperty('--hero-bg-end-dark', darkerEnd);
    
    localStorage.setItem('themeColor', colorName);
  }
  
  // Helper function to adjust color brightness
  function adjustColorBrightness(hex: string, percent: number): string {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
      (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
      (B < 255 ? B < 1 ? 0 : B : 255))
      .toString(16).slice(1);
  }
  
  function loadPreferences() {
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      const icon = darkModeBtn?.querySelector('i');
      if (icon && darkModeBtn) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        darkModeBtn.setAttribute('title', currentLang === 'ar' ? 'الوضع النهاري' : 'Light Mode');
      }
    }
    
    const savedColor = localStorage.getItem('themeColor') || 'blue';
    changeThemeColor(savedColor);
    
    // Mark the active color option
    setTimeout(() => {
      const option = document.querySelector(`.color-option[data-color="${savedColor}"]`);
      if (option) option.classList.add('active');
    }, 100);
  }
  
  function loadLanguage(lang: string) {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
      const key = element.getAttribute('data-key');
      if (key && translations[lang][key]) {
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
          if (element.hasAttribute('placeholder')) {
            element.setAttribute('placeholder', translations[lang][key]);
          } else {
             element.value = translations[lang][key];
          }
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });
    
    if(translations[lang].pageTitle) {
        document.title = translations[lang].pageTitle;
    }
    
    if (darkModeBtn) {
      darkModeBtn.setAttribute('title', lang === 'ar' ? 
        (document.body.classList.contains('dark-mode') ? 'الوضع النهاري' : 'الوضع الليلي') : 
        (document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode'));
    }

    const langText = langToggle?.querySelector('.lang-text');
    if (langText) {
        langText.textContent = lang === 'ar' ? 'EN' : 'AR';
    }
  }
  
  loadPreferences();
  
  document.addEventListener('click', (event) => {
    if (colorPalette && !colorPalette.contains(event.target as Node) && event.target !== colorPickerBtn && event.target !== floatingSettingsBtn) {
      colorPalette.classList.add('hidden');
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
      const targetId = this.getAttribute('href');
      if(targetId === '#' || !targetId) return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        e.preventDefault();
        const offset = window.innerWidth >= 769 ? 80 : 20;
        window.scrollTo({
          top: (targetElement as HTMLElement).offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    const heroContent = document.querySelector('.hero-content') as HTMLElement;
    if (heroContent) {
      heroContent.style.transform = `translateY(${rate * 0.4}px)`;
    }
    
    if (backToTopBtn) {
        if (scrolled > 300) {
        backToTopBtn.classList.add('visible');
        } else {
        backToTopBtn.classList.remove('visible');
        }
    }
  });
  
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  if (faqItems.length > 0) {
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if(question) {
            question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
            });
        }
      });
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });

  const counters = document.querySelectorAll('.counter');
  const speed = 200;
  
  const startCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +(counter.getAttribute('data-target') || 0);
        const count = +(counter as HTMLElement).innerText;
        
        const inc = target / speed;
        
        if (count < target) {
          (counter as HTMLElement).innerText = Math.ceil(count + inc).toString();
          setTimeout(updateCount, 1);
        } else {
          (counter as HTMLElement).innerText = target.toString();
        }
      };
      
      updateCount();
    });
  };
  
  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounters();
            statsObserver.unobserve(entry.target);
        }
        });
    }, { threshold: 0.5 });
    statsObserver.observe(statsSection);
  }
});
