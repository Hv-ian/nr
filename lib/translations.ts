export type Locale = "en" | "ru" | "hy";

export const locales: Locale[] = ["en", "ru", "hy"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  hy: "HY",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  hy: "Հայերեն",
};

export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  features: string[];
};

export type PrincipleItem = {
  title: string;
  description: string;
};

export type StepItem = {
  title: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Dictionary = {
  brand: string;
  nav: {
    home: string;
    services: string;
    contact: string;
    getConsultation: string;
    toggleMenu: string;
  };
  hero: {
    eyebrow: string;
    headlinePre: string;
    headlineAccent: string;
    headlineSuffix: string;
    sub: string;
    subSecondary: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  servicesOverview: {
    eyebrow: string;
    heading: string;
    viewAll: string;
    items: { slug: string; title: string }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    sub: string;
    getConsultation: string;
    items: ServiceItem[];
  };
  principles: {
    eyebrow: string;
    heading: string;
    items: PrincipleItem[];
  };
  howWeWork: {
    eyebrow: string;
    heading: string;
    steps: StepItem[];
  };
  whyChoose: {
    eyebrow: string;
    heading: string;
    items: string[];
  };
  homeFaq: {
    eyebrow: string;
    heading: string;
    items: FaqItem[];
  };
  cta: {
    heading: string;
    sub: string;
    button: string;
  };
  servicesPage: {
    eyebrow: string;
    heading: string;
    intro: string;
    sub: string;
    notSureHeading: string;
    notSureSub: string;
    faqHeading: string;
    faqs: FaqItem[];
  };
  contactPage: {
    eyebrow: string;
    heading: string;
    sub: string;
    faqHeading: string;
    directHeading: string;
    faqs: FaqItem[];
    contacts: {
      addressLabel: string;
      phoneLabel: string;
      emailLabel: string;
      whatsappLabel: string;
      telegramLabel: string;
      addressValue: string;
      phoneValue: string;
      emailValue: string;
      whatsappValue: string;
      whatsappHref: string;
      telegramValue: string;
      telegramHref: string;
    };
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      optional: string;
      phonePlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      otherOption: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      serviceRequired: string;
      successTitle: string;
      successMessage: (name: string) => string;
      sendAnother: string;
      submitting: string;
      submitError: string;
    };
  };
  footer: {
    tagline: string;
    getConsultation: string;
    rights: string;
  };
  meta: {
    home: { title: string; description: string };
    services: { title: string; description: string };
    contact: { title: string; description: string };
  };
};

export const translations: Record<Locale, Dictionary> = {
  en: {
    brand: "ReloPartner Armenia",
    nav: {
      home: "Home",
      services: "Services",
      contact: "Contact",
      getConsultation: "Get a Consultation",
      toggleMenu: "Toggle menu",
    },
    hero: {
      eyebrow: "Relocation to Armenia",
      headlinePre: "Your Trusted ",
      headlineAccent: "Relocation Partner",
      headlineSuffix: " in Armenia",
      sub: "We support individuals, entrepreneurs, and companies at every stage of relocation, providing professional migration, corporate, and accounting support.",
      subSecondary:
        "From obtaining a residence permit and registering a business to accounting support and liaising with government authorities, we offer comprehensive solutions that let our clients focus on their personal goals and business growth.",
      ctaPrimary: "Get a Consultation",
      ctaSecondary: "View Services",
    },
    about: {
      eyebrow: "About Us",
      heading: "About ReloPartner Armenia",
      paragraphs: [
        "ReloPartner Armenia is a consulting company specializing in supporting individuals and businesses in the Republic of Armenia.",
        "We provide a full range of migration, corporate, and accounting services. Our team supports clients at every stage, ensuring professional guidance, transparent processes, and a personalized approach.",
        "Our goal is to make the process of relocating, establishing legal status, and running a business as comfortable and efficient as possible.",
      ],
    },
    servicesOverview: {
      eyebrow: "Services",
      heading: "What we help with",
      viewAll: "View all services",
      items: [
        { slug: "residence-permit", title: "Residence Permit" },
        { slug: "citizenship", title: "Citizenship of Armenia" },
        { slug: "ip-registration", title: "Individual Entrepreneur Registration" },
        { slug: "llc-registration", title: "Legal Entity Registration" },
        { slug: "work-permit", title: "Work Permit" },
        { slug: "accounting", title: "Accounting & Tax Support" },
      ],
    },
    services: {
      eyebrow: "Services",
      heading: "Our services",
      sub: "Explore our full range of relocation, business, and accounting services.",
      getConsultation: "Get a Consultation",
      items: [
        {
          slug: "residence-permit",
          title: "Residence Permit",
          description:
            "Full support in obtaining a temporary or permanent residence permit in the Republic of Armenia.",
          features: [
            "Eligibility assessment",
            "Document preparation",
            "Application support",
            "Liaison with government authorities",
            "Issuance of the resident card",
          ],
        },
        {
          slug: "citizenship",
          title: "Citizenship of Armenia",
          description:
            "Support throughout the process of acquiring citizenship of the Republic of Armenia. Our specialists conduct a preliminary assessment, help prepare documents, and accompany the client through to completion.",
          features: [],
        },
        {
          slug: "ip-registration",
          title: "Individual Entrepreneur Registration",
          description:
            "Registration of an individual entrepreneur in Armenia, including document preparation, registration, and assistance opening a bank account.",
          features: [
            "Document preparation",
            "Business registration",
            "Registration data & tax ID",
            "Bank account assistance",
            "Ongoing support",
          ],
        },
        {
          slug: "llc-registration",
          title: "Legal Entity Registration",
          description:
            "Formation of companies in Armenia, including document preparation, registration, and assistance opening a bank account.",
          features: [
            "Document preparation",
            "Company registration",
            "Registration data & tax ID",
            "Bank account assistance",
            "Ongoing support",
          ],
        },
        {
          slug: "work-permit",
          title: "Work Permit",
          description:
            "Support in obtaining a work permit for employment in the Republic of Armenia.",
          features: [],
        },
        {
          slug: "accounting",
          title: "Accounting & Tax Support",
          description: "Comprehensive accounting and tax support for individuals and businesses.",
          features: [
            "Bookkeeping",
            "Tax accounting",
            "Payroll calculation",
            "HR support",
            "Preparation and filing of reports",
            "Tax consulting",
          ],
        },
      ],
    },
    principles: {
      eyebrow: "Our Principles",
      heading: "What guides our work",
      items: [
        {
          title: "Professionalism",
          description: "We maintain high standards of quality and pay attention to every detail.",
        },
        {
          title: "Personalized Approach",
          description:
            "Every situation calls for a tailored solution that reflects the client's goals and circumstances.",
        },
        {
          title: "Confidentiality",
          description:
            "We protect client information and uphold confidentiality at every stage of our work together.",
        },
        {
          title: "Responsibility",
          description:
            "We stay with the client until the result is achieved, providing professional support at every step.",
        },
      ],
    },
    howWeWork: {
      eyebrow: "How We Work",
      heading: "Our process",
      steps: [
        { title: "Consultation" },
        { title: "Document Preparation" },
        { title: "Procedure Support" },
        { title: "Achieving the Result" },
        { title: "Ongoing Support" },
      ],
    },
    whyChoose: {
      eyebrow: "Why Us",
      heading: "Why Choose ReloPartner?",
      items: [
        "Local Armenia expertise",
        "Multilingual relocation support",
        "Complete relocation assistance",
        "Business and legal coordination",
        "Support before and after arrival",
      ],
    },
    homeFaq: {
      eyebrow: "FAQ",
      heading: "Frequently asked questions",
      items: [
        {
          question: "How can I relocate to Armenia?",
          answer:
            "Foreign citizens can relocate to Armenia by choosing the appropriate residency option, preparing required documents, and completing local registration procedures. ReloPartner helps manage the relocation process from start to finish.",
        },
        {
          question: "Can foreigners open a company in Armenia?",
          answer:
            "Yes, foreigners can establish businesses in Armenia. Professional support can help with company registration, tax setup, banking, and compliance requirements.",
        },
        {
          question: "Is Armenia a good country for relocation?",
          answer:
            "Armenia offers a growing business environment, affordable living costs, and opportunities for entrepreneurs, remote workers, and families looking for a new place to live.",
        },
        {
          question: "What relocation services does ReloPartner offer in Armenia?",
          answer:
            "ReloPartner provides comprehensive relocation services in Armenia, including residence permit assistance, business registration, immigration support, document preparation, banking assistance, tax and accounting guidance, and settlement support for individuals, families, and businesses.",
        },
      ],
    },
    cta: {
      heading: "Start your relocation with a reliable partner",
      sub: "Whether you're planning to relocate, register a business, obtain a residence permit, or need accounting support, the ReloPartner Armenia team is ready to offer professional solutions and comprehensive support at every stage. Contact us for a personal consultation and to discuss the best way to work together.",
      button: "Get a Consultation",
    },
    servicesPage: {
      eyebrow: "Services",
      heading: "Relocation Services in Armenia for Individuals and Businesses",
      intro:
        "ReloPartner Armenia provides comprehensive relocation services for individuals, entrepreneurs, and businesses moving to Armenia. Our team offers end-to-end support, including residence permit applications, company registration, work permits, citizenship assistance, accounting, tax compliance, and legal support.",
      sub: "Explore our full range of relocation, business, and accounting services.",
      notSureHeading: "Not sure which service you need?",
      notSureSub: "Get in touch and we'll help you find the right solution.",
      faqHeading: "Frequently asked questions",
      faqs: [
        {
          question: "What relocation services does ReloPartner provide in Armenia?",
          answer:
            "ReloPartner Armenia offers comprehensive relocation services, including residence permit applications, company registration, work permits, citizenship assistance, accounting and tax support, document preparation, and guidance throughout the relocation process for individuals and businesses.",
        },
        {
          question: "Can foreigners register a business in Armenia?",
          answer:
            "Yes. Foreign citizens can register a sole proprietorship (IE) or a company in Armenia. We assist with company registration, tax registration, legal documentation, and ongoing compliance.",
        },
        {
          question: "How long does it take to register a business in Armenia?",
          answer:
            "Business registration is generally completed within a few business days once all required documents have been prepared. The exact timeframe depends on the type of business entity and any additional procedures.",
        },
        {
          question: "Why choose ReloPartner Armenia?",
          answer:
            "ReloPartner Armenia provides end-to-end relocation support with experienced legal and accounting professionals, multilingual assistance, transparent communication, and personalized solutions for individuals, entrepreneurs, and international businesses relocating to Armenia.",
        },
      ],
    },
    contactPage: {
      eyebrow: "Contact",
      heading: "Get a Consultation",
      sub: "Fill out the form below and our team will get back to you to discuss the details.",
      faqHeading: "Frequently asked questions",
      directHeading: "Contact details",
      faqs: [
        {
          question: "What services does the company provide?",
          answer:
            "We provide comprehensive support with relocation, residence permits, citizenship, business registration, accounting services, work permits, and related matters.",
        },
        {
          question: "Can support be provided remotely?",
          answer:
            "Yes. Depending on the nature of the service, certain procedures can be arranged remotely in accordance with legal requirements.",
        },
        {
          question: "How long does the process take?",
          answer:
            "Timing depends on the selected service, the grounds for the application, and government requirements. After a consultation, we provide an individual work plan with estimated timelines for each stage.",
        },
        {
          question: "Do you work with businesses?",
          answer:
            "Yes. We support individual entrepreneurs, organizations, and international companies, providing comprehensive solutions for operating in the Republic of Armenia.",
        },
        {
          question: "Do you offer consultations?",
          answer:
            "Yes. Our specialists provide individual consultations to help determine the best course of action.",
        },
      ],
      contacts: {
        addressLabel: "Office Address",
        phoneLabel: "Phone",
        emailLabel: "E-mail",
        whatsappLabel: "WhatsApp",
        telegramLabel: "Telegram",
        addressValue: "Yerevan, Armenia",
        phoneValue: "+374 41 554 510",
        emailValue: "info@relopartner.org",
        whatsappValue: "+374 41 554 510",
        whatsappHref: "https://wa.me/37441554510",
        telegramValue: "+374 41 554 510",
        telegramHref: "https://t.me/+37441554510",
      },
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your full name",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        phoneLabel: "Phone / Telegram",
        optional: "(optional)",
        phonePlaceholder: "+1 555 000 0000 or @username",
        serviceLabel: "Service",
        servicePlaceholder: "Select a service",
        otherOption: "Other / Not sure",
        messageLabel: "Message",
        messagePlaceholder: "Tell us a bit about what you need...",
        submit: "Get a Consultation",
        nameRequired: "Name is required.",
        emailRequired: "Email is required.",
        emailInvalid: "Enter a valid email address.",
        serviceRequired: "Select a service.",
        successTitle: "Request received",
        successMessage: (name) =>
          `Thanks, ${name}. We've received your request and will get back to you shortly.`,
        sendAnother: "Send another request",
        submitting: "Sending...",
        submitError: "Something went wrong. Please try again or email us directly.",
      },
    },
    footer: {
      tagline: "Comprehensive relocation, business, and accounting support in Armenia.",
      getConsultation: "Get a consultation",
      rights: "All rights reserved.",
    },
    meta: {
      home: {
        title: "Relocation to Armenia | Business Setup & Residency Experts",
        description:
          "Move to Armenia with confidence. We provide company registration, residence permits, immigration, banking, accounting, and relocation support.",
      },
      services: {
        title: "Relocation Services in Armenia | Business & Immigration",
        description:
          "Professional relocation services in Armenia including company formation, residence permits, immigration, tax consulting, accounting, and legal support.",
      },
      contact: {
        title: "Contact Our Armenia Relocation Experts",
        description:
          "Need help relocating to Armenia? Contact our team for personalized support with residency, company registration, immigration, and business relocation.",
      },
    },
  },
  ru: {
    brand: "ReloPartner Armenia",
    nav: {
      home: "Главная",
      services: "Услуги",
      contact: "Контакты",
      getConsultation: "Получить консультацию",
      toggleMenu: "Открыть меню",
    },
    hero: {
      eyebrow: "Релокация в Армению",
      headlinePre: "Комплексное сопровождение релокации в ",
      headlineAccent: "Армению",
      headlineSuffix: "",
      sub: "Мы сопровождаем физических лиц, предпринимателей и компании на всех этапах релокации, обеспечивая профессиональную миграционную, корпоративную и бухгалтерскую поддержку.",
      subSecondary:
        "От получения вида на жительство и регистрации бизнеса до бухгалтерского сопровождения и взаимодействия с государственными органами мы предлагаем комплексные решения, позволяющие нашим клиентам сосредоточиться на личных целях и развитии бизнеса.",
      ctaPrimary: "Получить консультацию",
      ctaSecondary: "Смотреть услуги",
    },
    about: {
      eyebrow: "О компании",
      heading: "О компании ReloPartner Armenia",
      paragraphs: [
        "ReloPartner Armenia является консалтинговой компанией, специализирующейся на сопровождении физических лиц и бизнеса в Республике Армения.",
        "Мы предоставляем полный спектр миграционных, корпоративных и бухгалтерских услуг. Наша команда сопровождает клиентов на каждом этапе, обеспечивая профессиональную поддержку, прозрачность процессов и индивидуальный подход.",
        "Наша цель заключается в том, чтобы сделать процесс переезда, оформления правового статуса и ведения бизнеса максимально комфортным и эффективным.",
      ],
    },
    servicesOverview: {
      eyebrow: "Услуги",
      heading: "В чем мы помогаем",
      viewAll: "Все услуги",
      items: [
        { slug: "residence-permit", title: "Вид на жительство" },
        { slug: "citizenship", title: "Гражданство Республики Армения" },
        { slug: "ip-registration", title: "Регистрация ИП" },
        { slug: "llc-registration", title: "Регистрация юридических лиц" },
        { slug: "work-permit", title: "Разрешение на работу (Work Permit)" },
        { slug: "accounting", title: "Бухгалтерское и налоговое сопровождение" },
      ],
    },
    services: {
      eyebrow: "Услуги",
      heading: "Наши услуги",
      sub: "Ознакомьтесь с полным спектром услуг по релокации, бизнесу и бухгалтерии.",
      getConsultation: "Получить консультацию",
      items: [
        {
          slug: "residence-permit",
          title: "Вид на жительство",
          description:
            "Полное сопровождение процедуры получения временного и постоянного вида на жительство в Республике Армения.",
          features: [
            "Анализ оснований",
            "Подготовка документов",
            "Сопровождение подачи",
            "Взаимодействие с государственными органами",
            "Получение карты резидента",
          ],
        },
        {
          slug: "citizenship",
          title: "Гражданство",
          description:
            "Сопровождение процедуры приобретения гражданства Республики Армения. Наши специалисты проводят предварительный анализ, помогают подготовить документы и сопровождают клиента до завершения процедуры.",
          features: [],
        },
        {
          slug: "ip-registration",
          title: "Регистрация ИП",
          description:
            "Регистрация индивидуального предпринимателя в Армении: подготовка документов, регистрация и помощь при открытии банковского счета.",
          features: [
            "Подготовка документов",
            "Регистрация бизнеса",
            "Получение регистрационных данных",
            "Помощь при открытии банковского счета",
            "Дальнейшее сопровождение",
          ],
        },
        {
          slug: "llc-registration",
          title: "Регистрация юридических лиц",
          description:
            "Создание компаний в Армении: подготовка документов, регистрация и помощь при открытии банковского счета.",
          features: [
            "Подготовка документов",
            "Регистрация бизнеса",
            "Получение регистрационных данных",
            "Помощь при открытии банковского счета",
            "Дальнейшее сопровождение",
          ],
        },
        {
          slug: "work-permit",
          title: "Разрешение на работу",
          description: "Сопровождение получения разрешения на работу в Республике Армения.",
          features: [],
        },
        {
          slug: "accounting",
          title: "Бухгалтерские услуги",
          description: "Комплексное бухгалтерское и налоговое сопровождение.",
          features: [
            "Бухгалтерский учет",
            "Налоговый учет",
            "Расчет заработной платы",
            "Кадровое сопровождение",
            "Подготовка и сдача отчетности",
            "Консультации по вопросам налогообложения",
          ],
        },
      ],
    },
    principles: {
      eyebrow: "Наши принципы",
      heading: "На чем строится наша работа",
      items: [
        {
          title: "Профессионализм",
          description: "Мы придерживаемся высоких стандартов качества и уделяем внимание каждой детали.",
        },
        {
          title: "Индивидуальный подход",
          description: "Каждая ситуация требует персонального решения с учетом целей и особенностей клиента.",
        },
        {
          title: "Конфиденциальность",
          description:
            "Мы обеспечиваем защиту информации и соблюдение принципов конфиденциальности на всех этапах сотрудничества.",
        },
        {
          title: "Ответственность",
          description:
            "Мы сопровождаем клиента до достижения результата, обеспечивая профессиональную поддержку на каждом этапе.",
        },
      ],
    },
    howWeWork: {
      eyebrow: "Как мы работаем",
      heading: "Наш процесс",
      steps: [
        { title: "Консультация" },
        { title: "Подготовка документов" },
        { title: "Сопровождение процедур" },
        { title: "Получение результата" },
        { title: "Дальнейшая поддержка клиента" },
      ],
    },
    whyChoose: {
      eyebrow: "Почему мы",
      heading: "Почему выбирают ReloPartner?",
      items: [
        "Экспертное знание законодательства и процедур Республики Армения.",
        "Поддержка клиентов на нескольких языках.",
        "Комплексное сопровождение релокации «под ключ».",
        "Юридическая, корпоративная и бухгалтерская поддержка в одном месте.",
        "Сопровождение как до переезда, так и после начала жизни и ведения бизнеса в Армении.",
      ],
    },
    homeFaq: {
      eyebrow: "FAQ",
      heading: "Часто задаваемые вопросы",
      items: [
        {
          question: "Как переехать в Армению?",
          answer:
            "Иностранные граждане могут переехать в Армению, выбрав подходящее основание для проживания, подготовив необходимые документы и пройдя все регистрационные процедуры. ReloPartner сопровождает клиентов на каждом этапе релокации — от первичной консультации до получения необходимых документов и адаптации в стране.",
        },
        {
          question: "Можно ли зарегистрировать ИП или ООО в Армении удаленно?",
          answer:
            "Да, в некоторых случаях иностранные граждане могут зарегистрировать ИП или ООО в Армении дистанционно по доверенности. Возможность удаленной регистрации зависит от выбранной организационно-правовой формы, гражданства заявителя и требований государственных органов. Специалисты ReloPartner помогут оценить вашу ситуацию, подготовить необходимые документы и организовать процесс регистрации с минимальным личным участием.",
        },
        {
          question: "Сколько времени занимает регистрация ИП в Армении?",
          answer:
            "При наличии всех необходимых документов регистрация ИП обычно занимает от одного рабочего дня. Дополнительное время может потребоваться для открытия банковского счета и оформления сопутствующих документов.",
        },
        {
          question: "Почему Армения является привлекательной страной для релокации?",
          answer:
            "Армения предлагает благоприятные условия для жизни и ведения бизнеса, доступную стоимость проживания, простую процедуру регистрации компаний и возможности для предпринимателей, удаленных специалистов и семей, планирующих переезд.",
        },
        {
          question: "Какие услуги по релокации в Армению предоставляет ReloPartner?",
          answer:
            "ReloPartner предоставляет комплексные услуги по релокации в Армению, включая помощь в получении вида на жительство, регистрацию ИП и юридических лиц, миграционное сопровождение, подготовку документов, помощь в открытии банковского счета, бухгалтерское и налоговое сопровождение, а также поддержку при адаптации после переезда.",
        },
      ],
    },
    cta: {
      heading: "Начните процесс релокации с надежным партнером",
      sub: "Независимо от того, планируете ли вы переезд, регистрацию бизнеса, получение вида на жительство или бухгалтерское сопровождение деятельности, команда ReloPartner Armenia готова предложить профессиональные решения и обеспечить комплексную поддержку на каждом этапе. Свяжитесь с нами, чтобы получить персональную консультацию и обсудить оптимальный формат сотрудничества.",
      button: "Получить консультацию",
    },
    servicesPage: {
      eyebrow: "Услуги",
      heading: "Услуги по релокации в Армению для физических лиц и бизнеса",
      intro:
        "ReloPartner Armenia предоставляет комплексные услуги по релокации для физических лиц, предпринимателей и компаний, планирующих переезд или развитие бизнеса в Республике Армения. Мы сопровождаем клиентов на всех этапах — от оформления вида на жительство и регистрации бизнеса до получения разрешений на работу, бухгалтерского и налогового сопровождения, а также взаимодействия с государственными органами.",
      sub: "Ознакомьтесь с полным спектром услуг по релокации, бизнесу и бухгалтерии.",
      notSureHeading: "Не уверены, какая услуга вам нужна?",
      notSureSub: "Свяжитесь с нами, и мы поможем найти подходящее решение.",
      faqHeading: "Часто задаваемые вопросы",
      faqs: [
        {
          question: "Какие услуги по релокации в Армению предоставляет ReloPartner?",
          answer:
            "ReloPartner Armenia предоставляет комплексные услуги по релокации, включая помощь в получении вида на жительство, регистрацию ИП и юридических лиц, оформление разрешений на работу, сопровождение при получении гражданства, бухгалтерское и налоговое сопровождение, подготовку документов и профессиональную поддержку на всех этапах переезда для физических лиц и бизнеса.",
        },
        {
          question: "Могут ли иностранные граждане зарегистрировать бизнес в Армении?",
          answer:
            "Да. Иностранные граждане могут зарегистрировать ИП или юридическое лицо в Армении. Мы помогаем с регистрацией бизнеса, постановкой на налоговый учет, подготовкой необходимых документов и дальнейшим сопровождением в соответствии с требованиями законодательства.",
        },
        {
          question: "Сколько времени занимает регистрация бизнеса в Армении?",
          answer:
            "При наличии всех необходимых документов регистрация бизнеса обычно занимает несколько рабочих дней. Срок зависит от выбранной организационно-правовой формы и необходимости прохождения дополнительных процедур.",
        },
        {
          question: "Почему выбирают ReloPartner Armenia?",
          answer:
            "ReloPartner Armenia предлагает комплексное сопровождение релокации, объединяя опыт специалистов в области миграционного, корпоративного и налогового права. Мы обеспечиваем многоязычную поддержку, прозрачность процессов и индивидуальный подход к каждому клиенту.",
        },
      ],
    },
    contactPage: {
      eyebrow: "Контакты",
      heading: "Получить консультацию",
      sub: "Заполните форму ниже, и наша команда свяжется с вами для обсуждения деталей.",
      faqHeading: "Часто задаваемые вопросы",
      directHeading: "Контактные данные",
      faqs: [
        {
          question: "Какие услуги предоставляет компания?",
          answer:
            "Мы оказываем комплексное сопровождение по вопросам релокации, получения вида на жительство, гражданства, регистрации бизнеса, бухгалтерского обслуживания, оформления разрешений на работу и другим сопутствующим вопросам.",
        },
        {
          question: "Можно ли получить сопровождение дистанционно?",
          answer:
            "Да. В зависимости от характера услуги отдельные процедуры могут быть организованы дистанционно в соответствии с требованиями законодательства.",
        },
        {
          question: "Сколько времени занимает оформление?",
          answer:
            "Срок зависит от выбранной услуги, основания обращения и требований государственных органов. После консультации мы предоставляем индивидуальный план работы с ориентировочными сроками каждого этапа.",
        },
        {
          question: "Работаете ли вы с бизнесом?",
          answer:
            "Да. Мы сопровождаем индивидуальных предпринимателей, организации и международные компании, предоставляя комплексные решения для ведения деятельности в Республике Армения.",
        },
        {
          question: "Предоставляете ли вы консультации?",
          answer:
            "Да. Наши специалисты проводят индивидуальные консультации, позволяющие определить оптимальный порядок дальнейших действий.",
        },
      ],
      contacts: {
        addressLabel: "Адрес офиса",
        phoneLabel: "Телефон",
        emailLabel: "E-mail",
        whatsappLabel: "WhatsApp",
        telegramLabel: "Telegram",
        addressValue: "Ереван, Армения",
        phoneValue: "+374 41 554 510",
        emailValue: "info@relopartner.org",
        whatsappValue: "+374 41 554 510",
        whatsappHref: "https://wa.me/37441554510",
        telegramValue: "+374 41 554 510",
        telegramHref: "https://t.me/+37441554510",
      },
      form: {
        nameLabel: "Имя",
        namePlaceholder: "Ваше полное имя",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        phoneLabel: "Телефон / Telegram",
        optional: "(необязательно)",
        phonePlaceholder: "+1 555 000 0000 или @username",
        serviceLabel: "Услуга",
        servicePlaceholder: "Выберите услугу",
        otherOption: "Другое / Не уверен",
        messageLabel: "Сообщение",
        messagePlaceholder: "Расскажите немного о том, что вам нужно...",
        submit: "Получить консультацию",
        nameRequired: "Укажите имя.",
        emailRequired: "Укажите email.",
        emailInvalid: "Введите корректный email.",
        serviceRequired: "Выберите услугу.",
        successTitle: "Заявка получена",
        successMessage: (name) =>
          `Спасибо, ${name}. Мы получили вашу заявку и скоро свяжемся с вами.`,
        sendAnother: "Отправить ещё одну заявку",
        submitting: "Отправка...",
        submitError: "Что-то пошло не так. Попробуйте ещё раз или напишите нам напрямую.",
      },
    },
    footer: {
      tagline: "Комплексное сопровождение релокации, бизнеса и бухгалтерии в Армении.",
      getConsultation: "Получить консультацию",
      rights: "Все права защищены.",
    },
    meta: {
      home: {
        title: "Релокация в Армению | Регистрация бизнеса и ВНЖ",
        description:
          "Переезжайте в Армению с профессиональной поддержкой. Регистрация компании, получение ВНЖ, иммиграционные услуги, бухгалтерия, банковское сопровождение и налоговые консультации.",
      },
      services: {
        title: "Услуги по релокации в Армению | Регистрация компании и ВНЖ",
        description:
          "Комплексные услуги по релокации в Армению: регистрация бизнеса, получение ВНЖ, иммиграционная поддержка, бухгалтерия, налоги, банковские услуги и юридическое сопровождение.",
      },
      contact: {
        title: "Свяжитесь с экспертами по релокации в Армению",
        description:
          "Свяжитесь с нашей командой для консультации по переезду в Армению, регистрации компании, оформлению ВНЖ, иммиграции и сопровождению бизнеса.",
      },
    },
  },
  hy: {
    brand: "ReloPartner Armenia",
    nav: {
      home: "Գլխավոր",
      services: "Ծառայություններ",
      contact: "Կապ",
      getConsultation: "Ստանալ խորհրդատվություն",
      toggleMenu: "Բացել ընտրացանկը",
    },
    hero: {
      eyebrow: "Տեղափոխություն Հայաստան",
      headlinePre: "Ռելոկացիոն ",
      headlineAccent: "ծառայություններ",
      headlineSuffix: " Հայաստանում",
      sub: "Մենք աջակցում ենք ֆիզիկական անձանց, ձեռնարկատերերին և ընկերություններին տեղափոխության բոլոր փուլերում՝ ապահովելով պրոֆեսիոնալ միգրացիոն, կորպորատիվ և հաշվապահական աջակցություն։",
      subSecondary:
        "Կացության կարգավիճակի ձեռքբերումից և բիզնեսի գրանցումից մինչև հաշվապահական սպասարկում և պետական մարմինների հետ փոխգործակցություն՝ մենք առաջարկում ենք համալիր լուծումներ, որոնք թույլ են տալիս մեր հաճախորդներին կենտրոնանալ անձնական նպատակների և բիզնեսի զարգացման վրա։",
      ctaPrimary: "Ստանալ խորհրդատվություն",
      ctaSecondary: "Դիտել ծառայությունները",
    },
    about: {
      eyebrow: "Մեր մասին",
      heading: "ReloPartner Armenia ընկերության մասին",
      paragraphs: [
        "ReloPartner Armenia-ն խորհրդատվական ընկերություն է, որը մասնագիտացած է Հայաստանի Հանրապետությունում ֆիզիկական անձանց և բիզնեսի սպասարկման ոլորտում։",
        "Մենք տրամադրում ենք միգրացիոն, կորպորատիվ և հաշվապահական ծառայությունների լրիվ շրջանակ։ Մեր թիմն ուղեկցում է հաճախորդներին յուրաքանչյուր փուլում՝ ապահովելով պրոֆեսիոնալ աջակցություն, գործընթացների թափանցիկություն և անհատական մոտեցում։",
        "Մեր նպատակն է տեղափոխության, իրավական կարգավիճակի ձևակերպման և բիզնես վարելու գործընթացը դարձնել հնարավորինս հարմարավետ և արդյունավետ։",
      ],
    },
    servicesOverview: {
      eyebrow: "Ծառայություններ",
      heading: "Ինչում ենք օգնում",
      viewAll: "Բոլոր ծառայությունները",
      items: [
        { slug: "residence-permit", title: "Կացության կարգավիճակի ձեռքբերում" },
        { slug: "citizenship", title: "Հայաստանի Հանրապետության քաղաքացիության ձեռքբերում" },
        { slug: "ip-registration", title: "ԱՁ գրանցում" },
        { slug: "llc-registration", title: "Իրավաբանական անձանց գրանցում" },
        { slug: "work-permit", title: "Աշխատանքի թույլտվություն (Work Permit)" },
        { slug: "accounting", title: "Հաշվապահական և հարկային աջակցություն" },
      ],
    },
    services: {
      eyebrow: "Ծառայություններ",
      heading: "Մեր ծառայությունները",
      sub: "Ծանոթացեք տեղափոխության, բիզնեսի և հաշվապահության ոլորտում մեր ծառայությունների ամբողջական շրջանակին։",
      getConsultation: "Ստանալ խորհրդատվություն",
      items: [
        {
          slug: "residence-permit",
          title: "Կացության կարգավիճակի ձեռքբերում",
          description:
            "Հայաստանի Հանրապետությունում ժամանակավոր և մշտական կացության թույլտվության ստացման ընթացակարգի ամբողջական ուղեկցում։",
          features: [
            "Հիմքերի վերլուծություն",
            "Փաստաթղթերի պատրաստում",
            "Դիմումի ուղեկցում",
            "Փոխգործակցություն պետական մարմինների հետ",
            "Կացության քարտի ստացում",
          ],
        },
        {
          slug: "citizenship",
          title: "Քաղաքացիության ձեռքբերում",
          description:
            "Հայաստանի Հանրապետության քաղաքացիություն ձեռք բերելու գործընթացի ուղեկցում։ Մեր մասնագետներն իրականացնում են նախնական վերլուծություն, օգնում են պատրաստել փաստաթղթերը և ուղեկցում հաճախորդին մինչև ընթացակարգի ավարտը։",
          features: [],
        },
        {
          slug: "ip-registration",
          title: "ԱՁ գրանցում",
          description:
            "Անհատ ձեռնարկատիրոջ գրանցում Հայաստանում՝ փաստաթղթերի պատրաստում, գրանցում և բանկային հաշվի բացման աջակցություն։",
          features: [
            "Փաստաթղթերի պատրաստում",
            "Բիզնեսի գրանցում",
            "Գրանցման տվյալների ստացում",
            "Բանկային հաշվի բացման աջակցություն",
            "Հետագա սպասարկում",
          ],
        },
        {
          slug: "llc-registration",
          title: "Իրավաբանական անձանց գրանցում",
          description:
            "Ընկերությունների ստեղծում Հայաստանում՝ փաստաթղթերի պատրաստում, գրանցում և բանկային հաշվի բացման աջակցություն։",
          features: [
            "Փաստաթղթերի պատրաստում",
            "Բիզնեսի գրանցում",
            "Գրանցման տվյալների ստացում",
            "Բանկային հաշվի բացման աջակցություն",
            "Հետագա սպասարկում",
          ],
        },
        {
          slug: "work-permit",
          title: "Աշխատանքի թույլտվություն",
          description: "Հայաստանի Հանրապետությունում աշխատանքի թույլտվության ստացման ուղեկցում։",
          features: [],
        },
        {
          slug: "accounting",
          title: "Հաշվապահական ծառայություններ",
          description: "Համալիր հաշվապահական և հարկային աջակցություն։",
          features: [
            "Հաշվապահական հաշվառում",
            "Հարկային հաշվառում",
            "Աշխատավարձի հաշվարկ",
            "Կադրային սպասարկում",
            "Հաշվետվությունների պատրաստում և ներկայացում",
            "Խորհրդատվություն հարկային հարցերով",
          ],
        },
      ],
    },
    principles: {
      eyebrow: "Մեր սկզբունքները",
      heading: "Ինչի վրա է հիմնված մեր աշխատանքը",
      items: [
        {
          title: "Պրոֆեսիոնալիզմ",
          description: "Մենք հավատարիմ ենք մնում որակի բարձր չափանիշներին և ուշադրություն ենք դարձնում ամեն մանրուքի։",
        },
        {
          title: "Անհատական մոտեցում",
          description:
            "Յուրաքանչյուր իրավիճակ պահանջում է անհատական լուծում՝ հաշվի առնելով հաճախորդի նպատակներն ու առանձնահատկությունները։",
        },
        {
          title: "Գաղտնիություն",
          description:
            "Մենք ապահովում ենք տեղեկատվության պաշտպանությունը և գաղտնիության սկզբունքների պահպանումը համագործակցության բոլոր փուլերում։",
        },
        {
          title: "Պատասխանատվություն",
          description:
            "Մենք ուղեկցում ենք հաճախորդին մինչև արդյունքի հասնելը՝ ապահովելով պրոֆեսիոնալ աջակցություն յուրաքանչյուր փուլում։",
        },
      ],
    },
    howWeWork: {
      eyebrow: "Ինչպես ենք աշխատում",
      heading: "Մեր գործընթացը",
      steps: [
        { title: "Խորհրդատվություն" },
        { title: "Փաստաթղթերի պատրաստում" },
        { title: "Ընթացակարգերի ուղեկցում" },
        { title: "Արդյունքի ստացում" },
        { title: "Հաճախորդի հետագա աջակցություն" },
      ],
    },
    whyChoose: {
      eyebrow: "Ինչու մենք",
      heading: "Ինչու՞ ընտրել ReloPartner Armenia-ն",
      items: [
        "Անհատական մոտեցում յուրաքանչյուր հաճախորդի նկատմամբ։",
        "Իրավական և հաշվապահական փորձագիտական աջակցություն։",
        "Բազմալեզու սպասարկում։",
        "Ուղեկցում մինչև բոլոր գործընթացների հաջող ավարտը։",
        "Աջակցություն ինչպես տեղափոխվելուց առաջ, այնպես էլ դրանից հետո։",
      ],
    },
    homeFaq: {
      eyebrow: "FAQ",
      heading: "Հաճախ տրվող հարցեր",
      items: [
        {
          question: "Ինչպե՞ս տեղափոխվել Հայաստան։",
          answer:
            "Օտարերկրյա քաղաքացիները կարող են տեղափոխվել Հայաստան՝ ընտրելով համապատասխան հիմքը, պատրաստելով անհրաժեշտ փաստաթղթերը և անցնելով սահմանված գրանցման ընթացակարգերը։ ReloPartner-ը տրամադրում է ամբողջական աջակցություն տեղափոխության յուրաքանչյուր փուլում։",
        },
        {
          question: "Կարո՞ղ են օտարերկրացիները գրանցել ընկերություն Հայաստանում։",
          answer:
            "Այո՛, օտարերկրյա քաղաքացիները կարող են գրանցել ԱՁ կամ ընկերություն Հայաստանում։ ReloPartner-ը աջակցում է բիզնեսի գրանցմանը, հարկային հաշվառմանը, բանկային հաշվի բացմանը և իրավական գործընթացների կազմակերպմանը։",
        },
        {
          question: "Ինչպե՞ս ստանալ կացության թույլտվություն Հայաստանում։",
          answer:
            "Կացության թույլտվություն կարելի է ստանալ տարբեր հիմքերով՝ աշխատանքի, բիզնեսի, ընտանիքի վերամիավորման կամ օրենքով նախատեսված այլ հիմքերի միջոցով։ Մենք օգնում ենք ընտրել համապատասխան տարբերակը, պատրաստել փաստաթղթերը և ուղեկցում ենք ամբողջ գործընթացի ընթացքում։",
        },
        {
          question: "Հնարավո՞ր է հեռավար գրանցել ԱՁ կամ ՍՊԸ Հայաստանում։",
          answer:
            "Որոշ դեպքերում հնարավոր է գրանցել ԱՁ կամ ՍՊԸ հեռավար՝ լիազորագրի հիման վրա։ Հնարավորությունը կախված է կոնկրետ իրավիճակից և գործող իրավական պահանջներից։",
        },
        {
          question: "Ի՞նչ ծառայություններ է տրամադրում ReloPartner Armenia-ն։",
          answer:
            "ReloPartner Armenia-ն առաջարկում է տեղափոխման համալիր ծառայություններ, ներառյալ կացության թույլտվության ձևակերպում, քաղաքացիության հարցերով աջակցություն, ԱՁ և ընկերությունների գրանցում, աշխատանքի թույլտվության ստացում, բանկային հաշվի բացման աջակցություն, ինչպես նաև հաշվապահական և հարկային սպասարկում։",
        },
      ],
    },
    cta: {
      heading: "Սկսեք տեղափոխության գործընթացը հուսալի գործընկերոջ հետ",
      sub: "Անկախ նրանից՝ դուք պլանավորում եք տեղափոխություն, բիզնեսի գրանցում, կացության կարգավիճակի ձեռքբերում, թե հաշվապահական սպասարկում, ReloPartner Armenia-ի թիմը պատրաստ է առաջարկել պրոֆեսիոնալ լուծումներ և ապահովել համալիր աջակցություն յուրաքանչյուր փուլում։ Կապվեք մեզ հետ՝ անհատական խորհրդատվություն ստանալու և համագործակցության արդյունավետ ձևաչափը քննարկելու համար։",
      button: "Ստանալ խորհրդատվություն",
    },
    servicesPage: {
      eyebrow: "Ծառայություններ",
      heading: "Հայաստան տեղափոխման ծառայություններ ֆիզիկական անձանց և բիզնեսի համար",
      intro:
        "ReloPartner Armenia-ն տրամադրում է ծառայություններ ֆիզիկական անձանց, ձեռնարկատերերի և ընկերությունների համար, որոնք ծրագրում են տեղափոխվել Հայաստան, ստանալ կացության կարգավիճակ կամ հիմնել ու զարգացնել բիզնես։ Մենք ապահովում ենք ամբողջական ուղեկցում յուրաքանչյուր փուլում՝ սկսած կացության թույլտվության ձևակերպումից և բիզնեսի գրանցումից մինչև աշխատանքի թույլտվության ստացում, հաշվապահական և հարկային սպասարկում, ինչպես նաև պետական մարմինների հետ փոխգործակցություն։",
      sub: "Ծանոթացեք տեղափոխության, բիզնեսի և հաշվապահության ոլորտում մեր ծառայությունների ամբողջական շրջանակին։",
      notSureHeading: "Վստահ չե՞ք, թե որ ծառայությունն է ձեզ անհրաժեշտ",
      notSureSub: "Կապվեք մեզ հետ, և մենք կօգնենք գտնել հարմար լուծումը։",
      faqHeading: "Հաճախ տրվող հարցեր",
      faqs: [
        {
          question:
            "Ի՞նչ ծառայություններ է տրամադրում ReloPartner Armenia-ն Հայաստանի տեղափոխության համար։",
          answer:
            "ReloPartner Armenia-ն տրամադրում է տեղափոխության համալիր ծառայություններ, ներառյալ կացության թույլտվության ձևակերպում, ԱՁ և ընկերությունների գրանցում, աշխատանքի թույլտվության ստացում, քաղաքացիության հարցերով աջակցություն, հաշվապահական և հարկային սպասարկում, փաստաթղթերի պատրաստում և ամբողջ գործընթացի ընթացքում մասնագիտական ուղեկցում ֆիզիկական անձանց և բիզնեսի համար։",
        },
        {
          question: "Կարո՞ղ են օտարերկրացիները գրանցել բիզնես Հայաստանում։",
          answer:
            "Այո՛։ Օտարերկրյա քաղաքացիները կարող են գրանցել ԱՁ կամ ընկերություն Հայաստանում։ Մենք աջակցում ենք բիզնեսի գրանցմանը, հարկային հաշվառմանը, անհրաժեշտ փաստաթղթերի պատրաստմանը և հետագա իրավական ու հաշվապահական ուղեկցմանը։",
        },
        {
          question: "Որքա՞ն ժամանակ է տևում բիզնեսի գրանցումը Հայաստանում։",
          answer:
            "Բոլոր անհրաժեշտ փաստաթղթերի առկայության դեպքում բիզնեսի գրանցումը սովորաբար իրականացվում է մի քանի աշխատանքային օրվա ընթացքում։ Վերջնական ժամկետը կախված է ընտրված կազմակերպաիրավական ձևից և անհրաժեշտ լրացուցիչ ընթացակարգերից։",
        },
        {
          question: "Ինչու՞ ընտրել ReloPartner Armenia-ն։",
          answer:
            "ReloPartner Armenia-ն առաջարկում է տեղափոխության ամբողջական աջակցություն՝ համատեղելով միգրացիոն, կորպորատիվ, իրավական և հաշվապահական փորձագիտությունը։ Մենք ապահովում ենք բազմալեզու սպասարկում, թափանցիկ գործընթացներ և անհատական մոտեցում յուրաքանչյուր հաճախորդի համար։",
        },
      ],
    },
    contactPage: {
      eyebrow: "Կապ",
      heading: "Ստանալ խորհրդատվություն",
      sub: "Լրացրեք ստորև ձևը, և մեր թիմը կապ կհաստատի ձեզ հետ մանրամասները քննարկելու համար։",
      faqHeading: "Հաճախ տրվող հարցեր",
      directHeading: "Կապի տվյալներ",
      faqs: [
        {
          question: "Ի՞նչ ծառայություններ է մատուցում ընկերությունը։",
          answer:
            "Մենք տրամադրում ենք համալիր աջակցություն տեղափոխության, կացության թույլտվության, քաղաքացիության ստացման, բիզնեսի գրանցման, հաշվապահական սպասարկման, աշխատանքի թույլտվության ձևակերպման և հարակից այլ հարցերում։",
        },
        {
          question: "Հնարավո՞ր է սպասարկում ստանալ հեռավար։",
          answer:
            "Այո։ Ծառայության բնույթից կախված՝ առանձին ընթացակարգեր կարող են կազմակերպվել հեռավար՝ օրենսդրության պահանջներին համապատասխան։",
        },
        {
          question: "Որքա՞ն ժամանակ է տևում ձևակերպումը։",
          answer:
            "Ժամկետը կախված է ընտրված ծառայությունից, դիմելու հիմքից և պետական մարմինների պահանջներից։ Խորհրդատվությունից հետո մենք տրամադրում ենք անհատական աշխատանքային պլան՝ յուրաքանչյուր փուլի մոտավոր ժամկետներով։",
        },
        {
          question: "Աշխատու՞մ եք բիզնեսի հետ։",
          answer:
            "Այո։ Մենք սպասարկում ենք անհատ ձեռնարկատերերի, կազմակերպությունների և միջազգային ընկերությունների՝ տրամադրելով համալիր լուծումներ Հայաստանի Հանրապետությունում գործունեություն ծավալելու համար։",
        },
        {
          question: "Խորհրդատվություն տրամադրու՞մ եք։",
          answer:
            "Այո։ Մեր մասնագետներն իրականացնում են անհատական խորհրդատվություններ, որոնք թույլ են տալիս որոշել հետագա գործողությունների օպտիմալ կարգը։",
        },
      ],
      contacts: {
        addressLabel: "Գրասենյակի հասցե",
        phoneLabel: "Հեռախոս",
        emailLabel: "Էլ. փոստ",
        whatsappLabel: "WhatsApp",
        telegramLabel: "Telegram",
        addressValue: "Երևան, Հայաստան",
        phoneValue: "+374 41 554 510",
        emailValue: "info@relopartner.org",
        whatsappValue: "+374 41 554 510",
        whatsappHref: "https://wa.me/37441554510",
        telegramValue: "+374 41 554 510",
        telegramHref: "https://t.me/+37441554510",
      },
      form: {
        nameLabel: "Անուն",
        namePlaceholder: "Ձեր լրիվ անունը",
        emailLabel: "Էլ. փոստ",
        emailPlaceholder: "you@example.com",
        phoneLabel: "Հեռախոս / Telegram",
        optional: "(ըստ ցանկության)",
        phonePlaceholder: "+1 555 000 0000 կամ @username",
        serviceLabel: "Ծառայություն",
        servicePlaceholder: "Ընտրեք ծառայություն",
        otherOption: "Այլ / Վստահ չեմ",
        messageLabel: "Հաղորդագրություն",
        messagePlaceholder: "Պատմեք մի փոքր, թե ինչ է ձեզ անհրաժեշտ...",
        submit: "Ստանալ խորհրդատվություն",
        nameRequired: "Նշեք անունը։",
        emailRequired: "Նշեք էլ. փոստը։",
        emailInvalid: "Մուտքագրեք վավեր էլ. փոստ։",
        serviceRequired: "Ընտրեք ծառայություն։",
        successTitle: "Հայտն ընդունված է",
        successMessage: (name) =>
          `Շնորհակալություն, ${name}։ Մենք ստացել ենք ձեր հայտը և շուտով կապ կհաստատենք ձեզ հետ։`,
        sendAnother: "Ուղարկել նոր հայտ",
        submitting: "Ուղարկվում է...",
        submitError: "Ինչ-որ բան այնպես չգնաց։ Խնդրում ենք փորձել կրկին կամ գրել մեզ ուղղակիորեն։",
      },
    },
    footer: {
      tagline: "Տեղափոխության, բիզնեսի և հաշվապահության համալիր աջակցություն Հայաստանում։",
      getConsultation: "Ստանալ խորհրդատվություն",
      rights: "Բոլոր իրավունքները պաշտպանված են։",
    },
    meta: {
      home: {
        title: "Ռելոկացիա Հայաստան | Բիզնեսի գրանցում և Բնակության թույլտվություն",
        description:
          "Ռելոկացիա Հայաստան՝ ամբողջական աջակցությամբ։ Օգնում ենք տեղափոխվել Հայաստան, գրանցել բիզնես, ստանալ բնակության թույլտվություն, հարկային և իրավաբանական աջակցություն։",
      },
      services: {
        title: "Ռելոկացիայի ծառայություններ Հայաստանում | Բիզնես և Իմիգրացիա",
        description:
          "Մասնագիտական ռելոկացիայի ծառայություններ Հայաստանում՝ ընկերության գրանցում, բնակության թույլտվություն, ներգաղթի աջակցություն, հաշվապահություն, հարկային և բիզնես խորհրդատվություն։",
      },
      contact: {
        title: "Կապվեք Ռելոկացիայի մասնագետների հետ Հայաստանում",
        description:
          "Կապվեք մեր ռելոկացիայի մասնագետների հետ՝ Հայաստան տեղափոխվելու, բիզնես ստեղծելու, բնակության թույլտվություն ստանալու և ներգաղթի գործընթացները կազմակերպելու համար։",
      },
    },
  },
};
