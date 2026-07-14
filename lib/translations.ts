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
  price: string;
  description: string;
  features: string[];
};

export type BenefitItem = {
  title: string;
  description: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Dictionary = {
  nav: {
    home: string;
    services: string;
    contact: string;
    getQuote: string;
    toggleMenu: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  benefits: {
    eyebrow: string;
    heading: string;
    items: BenefitItem[];
  };
  services: {
    eyebrow: string;
    heading: string;
    viewAll: string;
    requestQuote: string;
    items: ServiceItem[];
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    items: TestimonialItem[];
  };
  cta: {
    heading: string;
    sub: string;
    button: string;
  };
  servicesPage: {
    eyebrow: string;
    heading: string;
    sub: string;
    notSureHeading: string;
    notSureSub: string;
  };
  contactPage: {
    eyebrow: string;
    heading: string;
    sub: string;
    faqHeading: string;
    directHeading: string;
    faqs: FaqItem[];
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
    };
  };
  footer: {
    tagline: string;
    requestQuote: string;
    rights: string;
  };
};

export const translations: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      contact: "Contact",
      getQuote: "Get a Quote",
      toggleMenu: "Toggle menu",
    },
    hero: {
      eyebrow: "Business setup in Armenia",
      headline: "Launch your business in Armenia with",
      headlineAccent: "taxes from 0%",
      sub: "Remote company registration, accounting, and residency support. Tell us what you need and get a tailored quote back within the hour.",
      ctaPrimary: "Get a Quote",
      ctaSecondary: "View Services",
      stats: [
        { value: "500+", label: "Companies registered" },
        { value: "5 days", label: "Average setup time" },
        { value: "0%", label: "Tax rate for IT" },
      ],
    },
    benefits: {
      eyebrow: "Why Armenia",
      heading: "Built for founders who want to move fast",
      items: [
        {
          title: "0% Tax for IT",
          description: "IT companies can qualify for a 0% profit tax rate.",
        },
        {
          title: "100% Foreign Ownership",
          description: "No local partner or shareholder required.",
        },
        {
          title: "No Office Required",
          description: "Register a company without renting physical space.",
        },
        {
          title: "Fully Remote Setup",
          description: "Handle registration without visiting Armenia in person.",
        },
        {
          title: "49 Double Tax Treaties",
          description: "Avoid being taxed twice on the same income.",
        },
        {
          title: "Fast Turnaround",
          description: "Most registrations complete in days, not months.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      heading: "Popular services",
      viewAll: "View all services",
      requestQuote: "Request Quote",
      items: [
        {
          slug: "llc-registration",
          title: "LLC / Company Registration",
          price: "From $1,000",
          description:
            "Remote company formation with charter, bank account assistance, and tax registration. No travel required.",
          features: [
            "Full company registration",
            "Bank account assistance",
            "Tax registration & setup",
            "1-year registered address",
          ],
        },
        {
          slug: "pe-registration",
          title: "Individual Entrepreneur Setup",
          price: "From $500",
          description:
            "The fastest way to start operating in Armenia as a sole entrepreneur, fully remote.",
          features: [
            "PE registration",
            "Bank account assistance",
            "Tax registration",
            "Social security number",
          ],
        },
        {
          slug: "accounting",
          title: "Accounting & Bookkeeping",
          price: "From $100/mo",
          description:
            "Ongoing tax filing and reporting handled by licensed local accountants.",
          features: [
            "Monthly tax filing",
            "Bookkeeping",
            "Compliance & reporting",
            "Direct accountant access",
          ],
        },
        {
          slug: "residence-permit",
          title: "Residence Permit",
          price: "$500 to $1,500",
          description:
            "Document prep, translations, and application support for temporary residency in Armenia.",
          features: [
            "Document preparation",
            "Notarized translations",
            "Application support",
            "Social card registration",
          ],
        },
        {
          slug: "consultation",
          title: "Expert Consultation",
          price: "$200",
          description:
            "A focused 45-minute session covering registration, taxes, banking, or relocation questions.",
          features: [
            "45-minute video call",
            "Personalized guidance",
            "Follow-up notes",
            "No commitment required",
          ],
        },
      ],
    },
    testimonials: {
      eyebrow: "Client stories",
      heading: "What clients say",
      items: [
        {
          quote:
            "They handled everything. Legal registration, banking, ongoing accounting. One less thing for me to worry about.",
          name: "Ilya K.",
          role: "CEO at DSML",
        },
        {
          quote:
            "I registered as a sole entrepreneur and opened a bank account entirely remotely. The process was faster than I expected.",
          name: "Milita N.",
          role: "PE, Game Designer",
        },
        {
          quote:
            "Reliable and responsive from day one. We've recommended them to several partners since.",
          name: "Konstantin I.",
          role: "CEO at Taptima",
        },
      ],
    },
    cta: {
      heading: "Ready to get started?",
      sub: "Send us a few details about your business and we'll follow up with a quote, usually within the hour.",
      button: "Get a Quote",
    },
    servicesPage: {
      eyebrow: "Services",
      heading: "Everything you need to set up and run a business in Armenia",
      sub: "Pick a service to request a tailored quote. A real person will follow up, usually within the hour.",
      notSureHeading: "Not sure which service fits?",
      notSureSub: "Book a short consultation and we'll point you in the right direction.",
    },
    contactPage: {
      eyebrow: "Contact",
      heading: "Tell us what you need",
      sub: "Fill out the form and we'll get back to you with a tailored quote, usually within the hour.",
      faqHeading: "Frequently asked questions",
      directHeading: "Prefer to reach out directly?",
      faqs: [
        {
          question: "How do I get a quote?",
          answer:
            "Fill out the form with a few details about your situation. We typically respond within an hour with a tailored quote and next steps.",
        },
        {
          question: "Do I need to be in Armenia to register a company?",
          answer:
            "No. Registration can be handled remotely with a notarized power of attorney and translated passport.",
        },
        {
          question: "How long does registration take?",
          answer:
            "Most PE and LLC registrations are completed within a few business days once documents are ready.",
        },
        {
          question: "Which tax system is right for me?",
          answer:
            "It depends on your turnover and industry. We'll walk you through the options (microentrepreneurship, turnover tax, or general taxation) during your consultation.",
        },
        {
          question: "Can I open a bank account remotely?",
          answer:
            "Personal presence is currently required to open a bank account in Armenia, but we guide you through the entire process when you arrive.",
        },
      ],
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
        submit: "Request Quote",
        nameRequired: "Name is required.",
        emailRequired: "Email is required.",
        emailInvalid: "Enter a valid email address.",
        serviceRequired: "Select a service.",
        successTitle: "Request received",
        successMessage: (name) =>
          `Thanks, ${name}. This is a preview form, so no message was actually sent yet.`,
        sendAnother: "Send another request",
      },
    },
    footer: {
      tagline: "Business registration, accounting, and residency support in Armenia.",
      requestQuote: "Request a quote",
      rights: "All rights reserved.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      contact: "Контакты",
      getQuote: "Получить смету",
      toggleMenu: "Открыть меню",
    },
    hero: {
      eyebrow: "Регистрация бизнеса в Армении",
      headline: "Запустите бизнес в Армении с",
      headlineAccent: "налогом от 0%",
      sub: "Удалённая регистрация компании, бухгалтерия и поддержка по виду на жительство. Расскажите, что вам нужно, и получите индивидуальную смету в течение часа.",
      ctaPrimary: "Получить смету",
      ctaSecondary: "Смотреть услуги",
      stats: [
        { value: "500+", label: "Зарегистрированных компаний" },
        { value: "5 дней", label: "Среднее время регистрации" },
        { value: "0%", label: "Налог для IT" },
      ],
    },
    benefits: {
      eyebrow: "Почему Армения",
      heading: "Создано для тех, кто хочет действовать быстро",
      items: [
        {
          title: "0% налог для IT",
          description: "IT-компании могут претендовать на нулевую ставку налога на прибыль.",
        },
        {
          title: "100% иностранное владение",
          description: "Локальный партнёр или акционер не требуется.",
        },
        {
          title: "Офис не обязателен",
          description: "Зарегистрируйте компанию без аренды физического офиса.",
        },
        {
          title: "Полностью удалённо",
          description: "Пройдите регистрацию без личного визита в Армению.",
        },
        {
          title: "49 соглашений об избежании двойного налогообложения",
          description: "Не платите налог дважды с одного и того же дохода.",
        },
        {
          title: "Быстрые сроки",
          description: "Большинство регистраций занимает дни, а не месяцы.",
        },
      ],
    },
    services: {
      eyebrow: "Услуги",
      heading: "Популярные услуги",
      viewAll: "Все услуги",
      requestQuote: "Получить смету",
      items: [
        {
          slug: "llc-registration",
          title: "Регистрация ООО / компании",
          price: "От $1 000",
          description:
            "Удалённое создание компании: устав, помощь с открытием счёта и налоговая регистрация. Без поездок.",
          features: [
            "Полная регистрация компании",
            "Помощь с открытием банковского счёта",
            "Налоговая регистрация и настройка",
            "Юридический адрес на 1 год",
          ],
        },
        {
          slug: "pe-registration",
          title: "Регистрация ИП",
          price: "От $500",
          description:
            "Самый быстрый способ начать работать в Армении как индивидуальный предприниматель, полностью удалённо.",
          features: [
            "Регистрация ИП",
            "Помощь с открытием банковского счёта",
            "Налоговая регистрация",
            "Социальный номер (SSN)",
          ],
        },
        {
          slug: "accounting",
          title: "Бухгалтерия и учёт",
          price: "От $100/мес",
          description:
            "Постоянная подача налоговой отчётности силами лицензированных местных бухгалтеров.",
          features: [
            "Ежемесячная налоговая отчётность",
            "Бухгалтерский учёт",
            "Контроль соответствия и отчётность",
            "Прямой доступ к бухгалтеру",
          ],
        },
        {
          slug: "residence-permit",
          title: "Вид на жительство",
          price: "От $500 до $1 500",
          description:
            "Подготовка документов, переводы и сопровождение заявки на временное проживание в Армении.",
          features: [
            "Подготовка документов",
            "Нотариальный перевод",
            "Сопровождение заявки",
            "Оформление социальной карты",
          ],
        },
        {
          slug: "consultation",
          title: "Консультация эксперта",
          price: "$200",
          description:
            "Сфокусированная 45-минутная сессия по регистрации, налогам, банкам или переезду.",
          features: [
            "45-минутный видеозвонок",
            "Персональные рекомендации",
            "Заметки по итогам встречи",
            "Без обязательств",
          ],
        },
      ],
    },
    testimonials: {
      eyebrow: "Отзывы клиентов",
      heading: "Что говорят клиенты",
      items: [
        {
          quote:
            "Они взяли на себя всё: юридическую регистрацию, банк, текущую бухгалтерию. Одной заботой меньше.",
          name: "Илья К.",
          role: "CEO, DSML",
        },
        {
          quote:
            "Я зарегистрировал ИП и открыл банковский счёт полностью удалённо. Процесс прошёл быстрее, чем я ожидал.",
          name: "Милита Н.",
          role: "ИП, геймдизайнер",
        },
        {
          quote:
            "Надёжно и оперативно с первого дня. С тех пор рекомендуем их партнёрам.",
          name: "Константин И.",
          role: "CEO, Taptima",
        },
      ],
    },
    cta: {
      heading: "Готовы начать?",
      sub: "Расскажите немного о своём бизнесе, и мы свяжемся с вами со сметой, обычно в течение часа.",
      button: "Получить смету",
    },
    servicesPage: {
      eyebrow: "Услуги",
      heading: "Всё необходимое для запуска и ведения бизнеса в Армении",
      sub: "Выберите услугу, чтобы получить индивидуальную смету. Реальный человек свяжется с вами, обычно в течение часа.",
      notSureHeading: "Не уверены, какая услуга подойдёт?",
      notSureSub: "Запишитесь на короткую консультацию, и мы поможем определиться.",
    },
    contactPage: {
      eyebrow: "Контакты",
      heading: "Расскажите, что вам нужно",
      sub: "Заполните форму, и мы свяжемся с вами с индивидуальной сметой, обычно в течение часа.",
      faqHeading: "Часто задаваемые вопросы",
      directHeading: "Хотите связаться напрямую?",
      faqs: [
        {
          question: "Как получить смету?",
          answer:
            "Заполните форму, указав несколько деталей о вашей ситуации. Обычно мы отвечаем в течение часа со сметой и дальнейшими шагами.",
        },
        {
          question: "Нужно ли мне быть в Армении для регистрации компании?",
          answer:
            "Нет. Регистрацию можно провести удалённо по нотариальной доверенности и переведённому паспорту.",
        },
        {
          question: "Сколько занимает регистрация?",
          answer:
            "Большинство регистраций ИП и ООО завершается за несколько рабочих дней после подготовки документов.",
        },
        {
          question: "Какая система налогообложения мне подходит?",
          answer:
            "Зависит от оборота и вида деятельности. Мы разберём варианты (микропредпринимательство, оборотный налог или общая система) на консультации.",
        },
        {
          question: "Можно ли открыть банковский счёт удалённо?",
          answer:
            "На данный момент для открытия счёта в Армении требуется личное присутствие, но мы сопроводим вас на всех этапах по приезде.",
        },
      ],
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
        submit: "Получить смету",
        nameRequired: "Укажите имя.",
        emailRequired: "Укажите email.",
        emailInvalid: "Введите корректный email.",
        serviceRequired: "Выберите услугу.",
        successTitle: "Заявка получена",
        successMessage: (name) =>
          `Спасибо, ${name}. Это демо-форма, сообщение пока никуда не отправлено.`,
        sendAnother: "Отправить ещё одну заявку",
      },
    },
    footer: {
      tagline: "Регистрация бизнеса, бухгалтерия и поддержка по виду на жительство в Армении.",
      requestQuote: "Получить смету",
      rights: "Все права защищены.",
    },
  },
  hy: {
    nav: {
      home: "Գլխավոր",
      services: "Ծառայություններ",
      contact: "Կապ",
      getQuote: "Ստանալ գնանշում",
      toggleMenu: "Բացել ընտրացանկը",
    },
    hero: {
      eyebrow: "Բիզնեսի գրանցում Հայաստանում",
      headline: "Սկսեք ձեր բիզնեսը Հայաստանում՝",
      headlineAccent: "հարկերով 0%-ից",
      sub: "Հեռավար ընկերության գրանցում, հաշվապահություն և կացության թույլտվության աջակցություն։ Պատմեք, թե ինչ է ձեզ անհրաժեշտ, և ստացեք անհատական գնանշում մեկ ժամվա ընթացքում։",
      ctaPrimary: "Ստանալ գնանշում",
      ctaSecondary: "Դիտել ծառայությունները",
      stats: [
        { value: "500+", label: "Գրանցված ընկերություններ" },
        { value: "5 օր", label: "Միջին գրանցման ժամկետ" },
        { value: "0%", label: "Հարկ IT ընկերությունների համար" },
      ],
    },
    benefits: {
      eyebrow: "Ինչու Հայաստան",
      heading: "Ստեղծված է արագ գործող հիմնադիրների համար",
      items: [
        {
          title: "0% հարկ IT ոլորտի համար",
          description: "IT ընկերությունները կարող են ստանալ շահույթահարկի 0% դրույքաչափ։",
        },
        {
          title: "100% օտարերկրյա սեփականություն",
          description: "Տեղական գործընկեր կամ բաժնետեր չի պահանջվում։",
        },
        {
          title: "Գրասենյակ պարտադիր չէ",
          description: "Գրանցեք ընկերություն առանց ֆիզիկական տարածք վարձակալելու։",
        },
        {
          title: "Ամբողջովին հեռավար",
          description: "Իրականացրեք գրանցումը առանց Հայաստան անձամբ այցելելու։",
        },
        {
          title: "49 կրկնակի հարկումից խուսափելու համաձայնագիր",
          description: "Խուսափեք միևնույն եկամուտից երկու անգամ հարկվելուց։",
        },
        {
          title: "Արագ ժամկետներ",
          description: "Գրանցումների մեծ մասն ավարտվում է օրերի, ոչ թե ամիսների ընթացքում։",
        },
      ],
    },
    services: {
      eyebrow: "Ծառայություններ",
      heading: "Ամենապահանջված ծառայությունները",
      viewAll: "Բոլոր ծառայությունները",
      requestQuote: "Ստանալ գնանշում",
      items: [
        {
          slug: "llc-registration",
          title: "ՍՊԸ / ընկերության գրանցում",
          price: "$1,000-ից",
          description:
            "Ընկերության հեռավար հիմնում՝ կանոնադրություն, բանկային հաշվի բացման աջակցություն և հարկային գրանցում։ Ուղևորություն չի պահանջվում։",
          features: [
            "Ընկերության ամբողջական գրանցում",
            "Բանկային հաշվի բացման աջակցություն",
            "Հարկային գրանցում և կարգավորում",
            "Գրանցված հասցե 1 տարով",
          ],
        },
        {
          slug: "pe-registration",
          title: "Անհատ ձեռնարկատիրոջ գրանցում",
          price: "$500-ից",
          description:
            "Ամենաարագ ձևը Հայաստանում որպես անհատ ձեռնարկատեր գործունեություն սկսելու համար, ամբողջովին հեռավար։",
          features: [
            "ԱՁ գրանցում",
            "Բանկային հաշվի բացման աջակցություն",
            "Հարկային գրանցում",
            "Սոցիալական քարտի ձևակերպում",
          ],
        },
        {
          slug: "accounting",
          title: "Հաշվապահություն և հաշվառում",
          price: "$100/ամսից",
          description:
            "Հարկային հաշվետվությունների մշտական վարում լիցենզավորված տեղական հաշվապահների կողմից։",
          features: [
            "Ամսական հարկային հաշվետվություն",
            "Հաշվապահական հաշվառում",
            "Համապատասխանության վերահսկում",
            "Ուղղակի կապ հաշվապահի հետ",
          ],
        },
        {
          slug: "residence-permit",
          title: "Կացության թույլտվություն",
          price: "$500-ից $1,500",
          description:
            "Փաստաթղթերի պատրաստում, թարգմանություններ և աջակցություն Հայաստանում ժամանակավոր կացության դիմումի համար։",
          features: [
            "Փաստաթղթերի պատրաստում",
            "Նոտարական թարգմանություն",
            "Դիմումի ուղեկցում",
            "Սոցիալական քարտի գրանցում",
          ],
        },
        {
          slug: "consultation",
          title: "Փորձագիտական խորհրդատվություն",
          price: "$200",
          description:
            "Կենտրոնացված 45-րոպեանոց հանդիպում՝ գրանցման, հարկերի, բանկերի կամ տեղափոխության հարցերով։",
          features: [
            "45-րոպեանոց տեսազանգ",
            "Անհատական խորհրդատվություն",
            "Հանդիպումից հետո ամփոփում",
            "Առանց պարտավորության",
          ],
        },
      ],
    },
    testimonials: {
      eyebrow: "Հաճախորդների կարծիքներ",
      heading: "Ինչ են ասում հաճախորդները",
      items: [
        {
          quote:
            "Նրանք ստանձնեցին ամեն ինչ՝ իրավաբանական գրանցում, բանկ, ընթացիկ հաշվապահություն։ Մեկ հոգսով ավելի քիչ։",
          name: "Իլյա Կ.",
          role: "Գործադիր տնօրեն, DSML",
        },
        {
          quote:
            "Ես գրանցեցի ԱՁ և բացեցի բանկային հաշիվ ամբողջովին հեռավար։ Գործընթացն ավելի արագ էր, քան ես սպասում էի։",
          name: "Միլիտա Ն.",
          role: "ԱՁ, խաղերի դիզայներ",
        },
        {
          quote:
            "Հուսալի և օպերատիվ առաջին օրվանից։ Այդ ժամանակից ի վեր առաջարկում ենք գործընկերներին։",
          name: "Կոնստանտին Ի.",
          role: "Գործադիր տնօրեն, Taptima",
        },
      ],
    },
    cta: {
      heading: "Պատրա՞ստ եք սկսել",
      sub: "Ուղարկեք մեզ մի քանի մանրամասն ձեր բիզնեսի մասին, և մենք կապ կհաստատենք գնանշումով, սովորաբար մեկ ժամվա ընթացքում։",
      button: "Ստանալ գնանշում",
    },
    servicesPage: {
      eyebrow: "Ծառայություններ",
      heading: "Այն ամենը, ինչ անհրաժեշտ է Հայաստանում բիզնես սկսելու և վարելու համար",
      sub: "Ընտրեք ծառայություն՝ անհատական գնանշում ստանալու համար։ Իրական մասնագետը կապ կհաստատի, սովորաբար մեկ ժամվա ընթացքում։",
      notSureHeading: "Վստահ չե՞ք, թե որ ծառայությունն է հարմար",
      notSureSub: "Ամրագրեք կարճ խորհրդատվություն, և մենք կուղղորդենք ձեզ ճիշտ ուղղությամբ։",
    },
    contactPage: {
      eyebrow: "Կապ",
      heading: "Պատմեք, թե ինչ է ձեզ անհրաժեշտ",
      sub: "Լրացրեք ձևը, և մենք կապ կհաստատենք ձեզ հետ անհատական գնանշումով, սովորաբար մեկ ժամվա ընթացքում։",
      faqHeading: "Հաճախ տրվող հարցեր",
      directHeading: "Նախընտրու՞մ եք ուղղակի կապ",
      faqs: [
        {
          question: "Ինչպե՞ս ստանալ գնանշում",
          answer:
            "Լրացրեք ձևը՝ նշելով ձեր իրավիճակի մի քանի մանրամասն։ Սովորաբար պատասխանում ենք մեկ ժամվա ընթացքում՝ գնանշումով և հաջորդ քայլերով։",
        },
        {
          question: "Անհրաժե՞շտ է լինել Հայաստանում ընկերություն գրանցելու համար",
          answer:
            "Ոչ։ Գրանցումը կարող է իրականացվել հեռավար՝ նոտարական լիազորագրով և թարգմանված անձնագրով։",
        },
        {
          question: "Որքա՞ն ժամանակ է տևում գրանցումը",
          answer:
            "ԱՁ և ՍՊԸ գրանցումների մեծ մասն ավարտվում է մի քանի աշխատանքային օրվա ընթացքում՝ փաստաթղթերի պատրաստ լինելուց հետո։",
        },
        {
          question: "Ո՞ր հարկային համակարգն է ինձ համար հարմար",
          answer:
            "Կախված է շրջանառությունից և գործունեության տեսակից։ Խորհրդատվության ընթացքում կներկայացնենք տարբերակները (միկրոձեռնարկատիրություն, շրջանառության հարկ կամ ընդհանուր հարկման համակարգ)։",
        },
        {
          question: "Կարո՞ղ եմ բանկային հաշիվ բացել հեռավար",
          answer:
            "Ներկայումս Հայաստանում հաշիվ բացելու համար պահանջվում է անձնական ներկայություն, սակայն մենք կուղեկցենք ձեզ ողջ գործընթացում ժամանելուց հետո։",
        },
      ],
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
        submit: "Ստանալ գնանշում",
        nameRequired: "Նշեք անունը։",
        emailRequired: "Նշեք էլ. փոստը։",
        emailInvalid: "Մուտքագրեք վավեր էլ. փոստ։",
        serviceRequired: "Ընտրեք ծառայություն։",
        successTitle: "Հայտն ընդունված է",
        successMessage: (name) =>
          `Շնորհակալություն, ${name}։ Սա նախադիտման ձև է, հաղորդագրությունը դեռ ուղարկված չէ։`,
        sendAnother: "Ուղարկել նոր հայտ",
      },
    },
    footer: {
      tagline: "Բիզնեսի գրանցում, հաշվապահություն և կացության թույլտվության աջակցություն Հայաստանում։",
      requestQuote: "Ստանալ գնանշում",
      rights: "Բոլոր իրավունքները պաշտպանված են։",
    },
  },
};
