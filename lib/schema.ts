import type { Locale } from "@/lib/translations";
import type { PageKey } from "@/lib/routing";

/**
 * JSON-LD structured data, transcribed verbatim from the schema markup the SEO
 * agency supplied. The graphs are stored exactly as they were delivered, so any
 * revision should come from the agency rather than being edited here.
 */
const SCHEMA: Record<Locale, Record<PageKey, Record<string, unknown>>> = {
  en: {
    home: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://relopartner.org/#organization",
          "name": "ReloPartner Armenia",
          "url": "https://relopartner.org/",
          "description": "Comprehensive relocation, business and accounting support in Armenia.",
          "email": "info@relopartner.org",
          "telephone": "+374 41 554 510",
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://relopartner.org/#website",
          "url": "https://relopartner.org/",
          "name": "ReloPartner Armenia",
          "publisher": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "en"
        },
        {
          "@type": "WebPage",
          "@id": "https://relopartner.org/#webpage",
          "url": "https://relopartner.org/",
          "name": "ReloPartner Armenia — Relocation Services in Armenia",
          "description": "Comprehensive relocation, business and accounting support in Armenia.",
          "isPartOf": {
            "@id": "https://relopartner.org/#website"
          },
          "about": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/#relocation-service",
          "name": "Relocation Services in Armenia",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/services/"
        },
        {
          "@type": "FAQPage",
          "@id": "https://relopartner.org/#faq",
          "url": "https://relopartner.org/",
          "inLanguage": "en",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How can I relocate to Armenia?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Foreign citizens can relocate to Armenia by choosing the appropriate residency option, preparing the required documents, and completing the necessary registration procedures. ReloPartner provides support throughout the relocation process."
              }
            },
            {
              "@type": "Question",
              "name": "Can foreigners open a company in Armenia?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, foreigners can establish and operate a business in Armenia. ReloPartner can assist with company registration and other business-related procedures."
              }
            },
            {
              "@type": "Question",
              "name": "Is Armenia a good country for relocation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Armenia offers a range of benefits for people considering relocation, including a relatively straightforward business environment, accessible services, and opportunities for living and working in the country."
              }
            },
            {
              "@type": "Question",
              "name": "What relocation services does ReloPartner offer in Armenia?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ReloPartner provides comprehensive relocation support in Armenia, including assistance with residency, business registration, accounting, and other services related to moving and settling in the country."
              }
            }
          ]
        }
      ]
    },
    services: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://relopartner.org/#organization",
          "name": "ReloPartner Armenia",
          "url": "https://relopartner.org/",
          "description": "Comprehensive relocation, business, and accounting support in Armenia.",
          "email": "info@relopartner.org",
          "telephone": "+374 41 554 510",
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://relopartner.org/#website",
          "url": "https://relopartner.org/",
          "name": "ReloPartner Armenia",
          "publisher": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "en"
        },
        {
          "@type": "WebPage",
          "@id": "https://relopartner.org/services/#webpage",
          "url": "https://relopartner.org/services/",
          "name": "Relocation Services in Armenia for Individuals and Businesses",
          "description": "ReloPartner Armenia provides comprehensive relocation services for individuals, entrepreneurs, and businesses moving to Armenia, including residence permits, company registration, work permits, citizenship assistance, accounting, tax compliance, and legal support.",
          "isPartOf": {
            "@id": "https://relopartner.org/#website"
          },
          "about": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/services/#residence-permit",
          "name": "Residence Permit in Armenia",
          "description": "Full support in obtaining a temporary or permanent residence permit in the Republic of Armenia, including eligibility assessment, document preparation, application support, liaison with government authorities, and resident card issuance.",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/services/"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/services/#citizenship",
          "name": "Citizenship of Armenia",
          "description": "Support throughout the process of acquiring citizenship of the Republic of Armenia, including preliminary assessment, document preparation, and assistance through completion.",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/services/"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/services/#individual-entrepreneur",
          "name": "Individual Entrepreneur Registration in Armenia",
          "description": "Registration of an individual entrepreneur in Armenia, including document preparation, business registration, registration data and tax ID, bank account assistance, and ongoing support.",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/services/"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/services/#legal-entity",
          "name": "Legal Entity Registration in Armenia",
          "description": "Formation of companies in Armenia, including document preparation, company registration, registration data and tax ID, bank account assistance, and ongoing support.",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/services/"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/services/#work-permit",
          "name": "Work Permit in Armenia",
          "description": "Support in obtaining a work permit for employment in the Republic of Armenia.",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/services/"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/services/#accounting-tax",
          "name": "Accounting and Tax Support in Armenia",
          "description": "Comprehensive accounting and tax support for individuals and businesses, including bookkeeping, tax accounting, payroll calculation, HR support, preparation and filing of reports, and tax consulting.",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/services/"
        },
        {
          "@type": "FAQPage",
          "@id": "https://relopartner.org/services/#faq",
          "url": "https://relopartner.org/services/",
          "inLanguage": "en",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What relocation services does ReloPartner provide in Armenia?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ReloPartner Armenia offers comprehensive relocation services, including residence permit applications, company registration, work permits, citizenship assistance, accounting and tax support, document preparation, and guidance throughout the relocation process for individuals and businesses."
              }
            },
            {
              "@type": "Question",
              "name": "Can foreigners register a business in Armenia?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Foreigners can register a business in Armenia, subject to the applicable registration and legal requirements. ReloPartner can assist with document preparation, business registration, tax registration, bank account opening, and ongoing support."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to register a business in Armenia?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The time required to register a business in Armenia depends on the type of business and the specific registration requirements. ReloPartner can help prepare the necessary documents and guide clients through the registration process."
              }
            },
            {
              "@type": "Question",
              "name": "Why choose ReloPartner Armenia?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ReloPartner Armenia provides comprehensive support for relocation, business registration, immigration procedures, accounting, and tax matters, helping individuals and businesses manage the practical requirements of moving to and operating in Armenia."
              }
            }
          ]
        }
      ]
    },
    contact: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://relopartner.org/#organization",
          "name": "ReloPartner Armenia",
          "url": "https://relopartner.org/",
          "description": "Comprehensive relocation, business, and accounting support in Armenia.",
          "email": "info@relopartner.org",
          "telephone": "+374 41 554 510",
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://relopartner.org/#website",
          "url": "https://relopartner.org/",
          "name": "ReloPartner Armenia",
          "publisher": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "en"
        },
        {
          "@type": "ContactPage",
          "@id": "https://relopartner.org/contact/#webpage",
          "url": "https://relopartner.org/contact/",
          "name": "Contact Our Armenia Relocation Experts",
          "description": "Contact ReloPartner Armenia for professional support with relocation, business registration, residence permits, accounting and other services in Armenia.",
          "isPartOf": {
            "@id": "https://relopartner.org/#website"
          },
          "about": {
            "@id": "https://relopartner.org/#organization"
          },
          "mainEntity": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "en"
        },
        {
          "@type": "FAQPage",
          "@id": "https://relopartner.org/contact/#faq",
          "url": "https://relopartner.org/contact/",
          "inLanguage": "en",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What services does the company provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide comprehensive support with relocation, residence permits, citizenship, business registration, accounting services, work permits, and other related matters."
              }
            },
            {
              "@type": "Question",
              "name": "Can I receive support remotely?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Depending on the nature of the service, certain procedures can be arranged remotely in accordance with applicable legislation."
              }
            },
            {
              "@type": "Question",
              "name": "How long does the process take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The timeframe depends on the selected service, the basis for the application, and the requirements of the relevant government authorities. After the consultation, we provide an individual plan with estimated timelines for each stage."
              }
            },
            {
              "@type": "Question",
              "name": "Do you work with businesses?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We support individual entrepreneurs, organizations, and international companies, providing comprehensive solutions for conducting business in the Republic of Armenia."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide consultations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our specialists provide individual consultations to help determine the most appropriate next steps."
              }
            }
          ]
        }
      ]
    },
  },
  ru: {
    home: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://relopartner.org/#organization",
          "name": "ReloPartner Armenia",
          "url": "https://relopartner.org/ru/",
          "description": "Комплексное сопровождение релокации, бизнеса и бухгалтерии в Армении.",
          "email": "info@relopartner.org",
          "telephone": "+374 41 554 510",
          "areaServed": {
            "@type": "Country",
            "name": "Армения"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://relopartner.org/#website",
          "url": "https://relopartner.org/ru/",
          "name": "ReloPartner Armenia",
          "publisher": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "ru-RU"
        },
        {
          "@type": "WebPage",
          "@id": "https://relopartner.org/ru/#webpage",
          "url": "https://relopartner.org/ru/",
          "name": "ReloPartner Armenia — услуги по релокации в Армению",
          "description": "Комплексное сопровождение релокации, бизнеса и бухгалтерии в Армении.",
          "isPartOf": {
            "@id": "https://relopartner.org/#website"
          },
          "about": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "ru-RU"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/ru/#relocation-service",
          "name": "Услуги релокации в Армению",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Армения"
          },
          "url": "https://relopartner.org/ru/services/"
        },
        {
          "@type": "FAQPage",
          "@id": "https://relopartner.org/ru/#faq",
          "url": "https://relopartner.org/ru/",
          "inLanguage": "ru-RU",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Как переехать в Армению?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Иностранные граждане могут переехать в Армению, выбрав подходящее основание для проживания, подготовив необходимые документы и пройдя необходимые регистрационные процедуры."
              }
            },
            {
              "@type": "Question",
              "name": "Можно ли зарегистрировать ИП или ООО в Армении удаленно?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Да, в некоторых случаях иностранные граждане могут зарегистрировать ИП или ООО в Армении дистанционно по доверенности. Возможность удаленной регистрации зависит от выбранной организационно-правовой формы, гражданства заявителя и требований государственных органов. Специалисты ReloPartner помогут оценить вашу ситуацию, подготовить необходимые документы и организовать процесс регистрации с минимальным личным участие."
              }
            },
            {
              "@type": "Question",
              "name": "Сколько времени занимает регистрация ИП в Армении?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "При наличии всех необходимых документов регистрация ИП обычно занимает от одного рабочего дня. Дополнительное время может потребоваться для открытия банковского счета и оформления сопутствующих документов."
              }
            },
            {
              "@type": "Question",
              "name": "Почему Армения является привлекательной страной для релокации?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Армения предлагает благоприятные условия для жизни и ведения бизнеса, доступную стоимость проживания, простую процедуру регистрации компаний и возможности для предпринимателей, удаленных специалистов и семей, планирующих переезд."
              }
            },
            {
              "@type": "Question",
              "name": "Какие услуги по релокации в Армению предоставляет ReloPartner?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ReloPartner предоставляет комплексные услуги по релокации в Армению, включая помощь в получении вида на жительство, регистрацию ИП и юридических лиц, миграционное сопровождение, подготовку документов, помощь в открытии банковского счета, бухгалтерское и налоговое сопровождение, а также поддержку при адаптации после переезда."
              }
            }
          ]
        }
      ]
    },
    services: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://relopartner.org/#organization",
          "name": "ReloPartner Armenia",
          "url": "https://relopartner.org/ru/",
          "description": "Комплексное сопровождение релокации, бизнеса и бухгалтерии в Армении.",
          "email": "info@relopartner.org",
          "telephone": "+374 41 554 510",
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://relopartner.org/#website",
          "url": "https://relopartner.org/ru/",
          "name": "ReloPartner Armenia",
          "publisher": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "ru-RU"
        },
        {
          "@type": "WebPage",
          "@id": "https://relopartner.org/ru/services/#webpage",
          "url": "https://relopartner.org/ru/services/",
          "name": "Услуги по релокации в Армению для физических лиц и бизнеса",
          "description": "ReloPartner Armenia предоставляет комплексные услуги по релокации для физических лиц, предпринимателей и компаний, включая ВНЖ, гражданство, регистрацию ИП и юридических лиц, разрешения на работу и бухгалтерское сопровождение.",
          "isPartOf": {
            "@id": "https://relopartner.org/#website"
          },
          "about": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "ru-RU"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/ru/services/#residence-permit",
          "name": "Вид на жительство в Армении",
          "description": "Полное сопровождение процедуры получения временного и постоянного вида на жительство в Республике Армения.",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/ru/services/"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/ru/services/#citizenship",
          "name": "Гражданство Армении",
          "description": "Сопровождение процедуры приобретения гражданства Республики Армения, включая предварительный анализ, подготовку документов и сопровождение до завершения процедуры.",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/ru/services/"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/ru/services/#sole-proprietor",
          "name": "Регистрация ИП в Армении",
          "description": "Регистрация индивидуального предпринимателя в Армении, включая подготовку документов, регистрацию бизнеса, получение регистрационных данных, помощь при открытии банковского счета и дальнейшее сопровождение.",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/ru/services/"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/ru/services/#company-registration",
          "name": "Регистрация юридических лиц в Армении",
          "description": "Создание компаний в Армении, включая подготовку документов, регистрацию бизнеса, получение регистрационных данных, помощь при открытии банковского счета и дальнейшее сопровождение.",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/ru/services/"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/ru/services/#work-permit",
          "name": "Разрешение на работу в Армении",
          "description": "Сопровождение получения разрешения на работу в Республике Армения.",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/ru/services/"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/ru/services/#accounting",
          "name": "Бухгалтерские услуги в Армении",
          "description": "Комплексное бухгалтерское и налоговое сопровождение, включая бухгалтерский и налоговый учет, расчет заработной платы, кадровое сопровождение, подготовку и сдачу отчетности и консультации по вопросам налогообложения.",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/ru/services/"
        },
        {
          "@type": "FAQPage",
          "@id": "https://relopartner.org/ru/services/#faq",
          "url": "https://relopartner.org/ru/services/",
          "inLanguage": "ru-RU",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Какие услуги по релокации в Армению предоставляет ReloPartner?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ReloPartner Armenia предоставляет комплексные услуги по релокации, включая помощь в получении вида на жительство, регистрацию ИП и юридических лиц, оформление разрешений на работу, сопровождение при получении гражданства, бухгалтерское и налоговое сопровождение, подготовку документов и профессиональную поддержку на всех этапах переезда для физических лиц и бизнеса."
              }
            },
            {
              "@type": "Question",
              "name": "Могут ли иностранные граждане зарегистрировать бизнес в Армении?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Да. Иностранные граждане могут зарегистрировать ИП или юридическое лицо в Армении. Мы помогаем с регистрацией бизнеса, постановкой на налоговый учет, подготовкой необходимых документов и дальнейшим сопровождением в соответствии с требованиями законодательства."
              }
            },
            {
              "@type": "Question",
              "name": "Сколько времени занимает регистрация бизнеса в Армении?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "При наличии всех необходимых документов регистрация бизнеса обычно занимает несколько рабочих дней. Срок зависит от выбранной организационно-правовой формы и необходимости прохождения дополнительных процедур."
              }
            },
            {
              "@type": "Question",
              "name": "Почему выбирают ReloPartner Armenia?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ReloPartner Armenia предлагает комплексное сопровождение релокации, объединяя опыт специалистов в области миграционного, корпоративного и налогового права. Мы обеспечиваем многоязычную поддержку, прозрачность процессов и индивидуальный подход к каждому клиенту."
              }
            }
          ]
        }
      ]
    },
    contact: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://relopartner.org/#organization",
          "name": "ReloPartner Armenia",
          "url": "https://relopartner.org/ru/",
          "description": "Комплексное сопровождение релокации, бизнеса и бухгалтерии в Армении.",
          "email": "info@relopartner.org",
          "telephone": "+374 41 554 510",
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://relopartner.org/#website",
          "url": "https://relopartner.org/ru/",
          "name": "ReloPartner Armenia",
          "publisher": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "ru-RU"
        },
        {
          "@type": "ContactPage",
          "@id": "https://relopartner.org/ru/contact/#webpage",
          "url": "https://relopartner.org/ru/contact/",
          "name": "Свяжитесь с экспертами по релокации в Армению",
          "description": "Свяжитесь с ReloPartner Armenia для получения консультации по вопросам релокации, бизнеса и бухгалтерии в Армении.",
          "isPartOf": {
            "@id": "https://relopartner.org/#website"
          },
          "about": {
            "@id": "https://relopartner.org/#organization"
          },
          "mainEntity": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "ru-RU"
        },
        {
          "@type": "FAQPage",
          "@id": "https://relopartner.org/ru/contact/#faq",
          "url": "https://relopartner.org/ru/contact/",
          "inLanguage": "ru-RU",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Какие услуги предоставляет компания?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Мы оказываем комплексное сопровождение по вопросам релокации, получения вида на жительство, гражданства, регистрации бизнеса, бухгалтерского обслуживания, оформления разрешений на работу и другим сопутствующим вопросам."
              }
            },
            {
              "@type": "Question",
              "name": "Можно ли получить сопровождение дистанционно?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Да. В зависимости от характера услуги отдельные процедуры могут быть организованы дистанционно в соответствии с требованиями законодательства."
              }
            },
            {
              "@type": "Question",
              "name": "Сколько времени занимает оформление?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Срок зависит от выбранной услуги, основания обращения и требований государственных органов. После консультации мы предоставляем индивидуальный план работы с ориентировочными сроками каждого этапа."
              }
            },
            {
              "@type": "Question",
              "name": "Работаете ли вы с бизнесом?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Да. Мы сопровождаем индивидуальных предпринимателей, организации и международные компании, предоставляя комплексные решения для ведения деятельности в Республике Армения."
              }
            },
            {
              "@type": "Question",
              "name": "Предоставляете ли вы консультации?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Да. Наши специалисты проводят индивидуальные консультации, позволяющие определить оптимальный порядок дальнейших действий."
              }
            }
          ]
        }
      ]
    },
  },
  hy: {
    home: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://relopartner.org/#organization",
          "name": "ReloPartner Armenia",
          "url": "https://relopartner.org/hy/",
          "description": "Տեղափոխության, բիզնեսի և հաշվապահության համալիր աջակցություն Հայաստանում։",
          "email": "info@relopartner.org",
          "telephone": "+374 41 554 510",
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://relopartner.org/#website",
          "url": "https://relopartner.org/hy/",
          "name": "ReloPartner Armenia",
          "publisher": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "hy-AM"
        },
        {
          "@type": "WebPage",
          "@id": "https://relopartner.org/hy/#webpage",
          "url": "https://relopartner.org/hy/",
          "name": "ReloPartner Armenia — Տեղափոխության ծառայություններ Հայաստանում",
          "description": "Տեղափոխության, բիզնեսի և հաշվապահության համալիր աջակցություն Հայաստանում։",
          "isPartOf": {
            "@id": "https://relopartner.org/#website"
          },
          "about": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "hy-AM"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/hy/#relocation-service",
          "name": "Տեղափոխության ծառայություններ Հայաստանում",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/hy/services/"
        },
        {
          "@type": "FAQPage",
          "@id": "https://relopartner.org/hy/#faq",
          "url": "https://relopartner.org/hy/",
          "inLanguage": "hy-AM",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Ինչպե՞ս տեղափոխվել Հայաստան։",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Օտարերկրյա քաղաքացիները կարող են տեղափոխվել Հայաստան՝ ընտրելով համապատասխան հիմքը, պատրաստելով անհրաժեշտ փաստաթղթերը և անցնելով սահմանված գրանցման ընթացակարգերը։ ReloPartner-ը տրամադրում է աջակցություն տեղափոխության գործընթացի տարբեր փուլերում։"
              }
            },
            {
              "@type": "Question",
              "name": "Կարո՞ղ են օտարերկրացիները գրանցել ընկերություն Հայաստանում։",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Օտարերկրացիները կարող են Հայաստանում գրանցել ընկերություն՝ համապատասխան իրավական և պետական գրանցման ընթացակարգերի միջոցով։ ReloPartner-ը տրամադրում է աջակցություն ընկերության գրանցման և բիզնեսի հետ կապված գործընթացներում։"
              }
            },
            {
              "@type": "Question",
              "name": "Ինչպե՞ս ստանալ կացության թույլտվություն Հայաստանում։",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Հայաստանում կացության թույլտվություն ստանալու համար անհրաժեշտ է ընտրել համապատասխան հիմքը, պատրաստել պահանջվող փաստաթղթերը և անցնել սահմանված ընթացակարգը։ ReloPartner-ը կարող է աջակցել փաստաթղթերի և դիմելու գործընթացում։"
              }
            },
            {
              "@type": "Question",
              "name": "Հնարավո՞ր է հեռավար գրանցել ԱՁ կամ ՍՊԸ Հայաստանում։",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Հայաստանում ԱՁ կամ ՍՊԸ գրանցելու հնարավորությունը և անհրաժեշտ քայլերը կախված են դիմողի կարգավիճակից և կոնկրետ հանգամանքներից։ ReloPartner-ը տրամադրում է աջակցություն բիզնեսի գրանցման գործընթացում։"
              }
            },
            {
              "@type": "Question",
              "name": "Ի՞նչ ծառայություններ է տրամադրում ReloPartner Armenia-ն։",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ReloPartner Armenia-ն տրամադրում է տեղափոխության, բիզնեսի և հաշվապահության համալիր աջակցություն Հայաստանում, ներառյալ բնակության, բիզնեսի գրանցման և այլ հարակից գործընթացների աջակցություն։"
              }
            }
          ]
        }
      ]
    },
    services: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://relopartner.org/#organization",
          "name": "ReloPartner Armenia",
          "url": "https://relopartner.org/hy/",
          "description": "Տեղափոխության, բիզնեսի և հաշվապահության համալիր աջակցություն Հայաստանում։",
          "email": "info@relopartner.org",
          "telephone": "+374 41 554 510",
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://relopartner.org/#website",
          "url": "https://relopartner.org/hy/",
          "name": "ReloPartner Armenia",
          "publisher": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "hy-AM"
        },
        {
          "@type": "WebPage",
          "@id": "https://relopartner.org/hy/services/#webpage",
          "url": "https://relopartner.org/hy/services/",
          "name": "Հայաստան տեղափոխման ծառայություններ ֆիզիկական անձանց և բիզնեսի համար",
          "description": "ReloPartner Armenia-ն տրամադրում է տեղափոխության, կացության կարգավիճակի, բիզնեսի գրանցման, աշխատանքի թույլտվության, քաղաքացիության, հաշվապահական և հարկային ծառայություններ Հայաստանում։",
          "isPartOf": {
            "@id": "https://relopartner.org/#website"
          },
          "about": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "hy-AM"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/hy/services/#residence-permit",
          "name": "Կացության կարգավիճակի ձեռքբերում Հայաստանում",
          "description": "Հայաստանի Հանրապետությունում ժամանակավոր և մշտական կացության թույլտվության ստացման ընթացակարգի ամբողջական ուղեկցում՝ հիմքերի վերլուծություն, փաստաթղթերի պատրաստում, դիմումի ուղեկցում, պետական մարմինների հետ փոխգործակցություն և կացության քարտի ստացում։",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/hy/services/"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/hy/services/#citizenship",
          "name": "Հայաստանի քաղաքացիության ձեռքբերում",
          "description": "Հայաստանի Հանրապետության քաղաքացիություն ձեռք բերելու գործընթացի ուղեկցում՝ նախնական վերլուծություն, փաստաթղթերի պատրաստում և աջակցություն մինչև ընթացակարգի ավարտը։",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/hy/services/"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/hy/services/#individual-entrepreneur",
          "name": "ԱՁ գրանցում Հայաստանում",
          "description": "Անհատ ձեռնարկատիրոջ գրանցում Հայաստանում՝ փաստաթղթերի պատրաստում, բիզնեսի գրանցում, գրանցման տվյալների ստացում, բանկային հաշվի բացման աջակցություն և հետագա սպասարկում։",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/hy/services/"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/hy/services/#legal-entity",
          "name": "Իրավաբանական անձանց գրանցում Հայաստանում",
          "description": "Ընկերությունների ստեղծում Հայաստանում՝ փաստաթղթերի պատրաստում, բիզնեսի գրանցում, գրանցման տվյալների ստացում, բանկային հաշվի բացման աջակցություն և հետագա սպասարկում։",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/hy/services/"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/hy/services/#work-permit",
          "name": "Աշխատանքի թույլտվություն Հայաստանում",
          "description": "Հայաստանի Հանրապետությունում աշխատանքի թույլտվության ստացման ամբողջական ուղեկցում։",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/hy/services/"
        },
        {
          "@type": "Service",
          "@id": "https://relopartner.org/hy/services/#accounting-tax",
          "name": "Հաշվապահական և հարկային ծառայություններ Հայաստանում",
          "description": "Համալիր հաշվապահական և հարկային աջակցություն՝ հաշվապահական և հարկային հաշվառում, աշխատավարձի հաշվարկ, կադրային սպասարկում, հաշվետվությունների պատրաստում և ներկայացում, ինչպես նաև հարկային հարցերով խորհրդատվություն։",
          "provider": {
            "@id": "https://relopartner.org/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          },
          "url": "https://relopartner.org/hy/services/"
        },
        {
          "@type": "FAQPage",
          "@id": "https://relopartner.org/hy/services/#faq",
          "url": "https://relopartner.org/hy/services/",
          "inLanguage": "hy-AM",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Ի՞նչ ծառայություններ է տրամադրում ReloPartner Armenia-ն Հայաստանի տեղափոխության համար։",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ReloPartner Armenia-ն տրամադրում է տեղափոխության համալիր ծառայություններ, ներառյալ կացության թույլտվության ձևակերպում, ԱՁ և ընկերությունների գրանցում, աշխատանքի թույլտվության ստացում, քաղաքացիության հարցերով աջակցություն, հաշվապահական և հարկային սպասարկում, փաստաթղթերի պատրաստում և ամբողջ գործընթացի ընթացքում մասնագիտական ուղեկցում ֆիզիկական անձանց և բիզնեսի համար։"
              }
            },
            {
              "@type": "Question",
              "name": "Կարո՞ղ են օտարերկրացիները գրանցել բիզնես Հայաստանում։",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Այո, օտարերկրացիները կարող են Հայաստանում գրանցել բիզնես՝ համապատասխան իրավական և պետական գրանցման ընթացակարգերի պահպանմամբ։ ReloPartner Armenia-ն աջակցում է փաստաթղթերի պատրաստման, բիզնեսի գրանցման և հարակից գործընթացների իրականացման հարցերում։"
              }
            },
            {
              "@type": "Question",
              "name": "Որքա՞ն ժամանակ է տևում բիզնեսի գրանցումը Հայաստանում։",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Բիզնեսի գրանցման ժամկետը կախված է բիզնեսի տեսակից և գրանցման համար անհրաժեշտ ընթացակարգերից։ ReloPartner Armenia-ն օգնում է պատրաստել անհրաժեշտ փաստաթղթերը և ուղեկցում է գրանցման գործընթացը։"
              }
            },
            {
              "@type": "Question",
              "name": "Ինչու՞ ընտրել ReloPartner Armenia-ն։",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ReloPartner Armenia-ն տրամադրում է տեղափոխության, բիզնեսի, կացության կարգավիճակի, աշխատանքի թույլտվության, հաշվապահական և հարկային հարցերի համալիր աջակցություն՝ օգնելով ֆիզիկական անձանց և բիզնեսներին կազմակերպել տեղափոխության և Հայաստանում գործունեություն ծավալելու գործընթացը։"
              }
            }
          ]
        }
      ]
    },
    contact: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://relopartner.org/#organization",
          "name": "ReloPartner Armenia",
          "url": "https://relopartner.org/hy/",
          "description": "Տեղափոխության, բիզնեսի և հաշվապահության համալիր աջակցություն Հայաստանում։",
          "email": "info@relopartner.org",
          "telephone": "+374 41 554 510",
          "areaServed": {
            "@type": "Country",
            "name": "Armenia"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://relopartner.org/#website",
          "url": "https://relopartner.org/hy/",
          "name": "ReloPartner Armenia",
          "publisher": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "hy-AM"
        },
        {
          "@type": "ContactPage",
          "@id": "https://relopartner.org/hy/contact/#webpage",
          "url": "https://relopartner.org/hy/contact/",
          "name": "Կապվեք Ռելոկացիայի մասնագետների հետ Հայաստանում",
          "description": "Կապվեք ReloPartner Armenia-ի հետ՝ Հայաստանում տեղափոխության, բիզնեսի և հաշվապահության հարցերով մասնագիտական աջակցություն ստանալու համար։",
          "isPartOf": {
            "@id": "https://relopartner.org/#website"
          },
          "about": {
            "@id": "https://relopartner.org/#organization"
          },
          "mainEntity": {
            "@id": "https://relopartner.org/#organization"
          },
          "inLanguage": "hy-AM"
        },
        {
          "@type": "FAQPage",
          "@id": "https://relopartner.org/hy/contact/#faq",
          "url": "https://relopartner.org/hy/contact/",
          "inLanguage": "hy-AM",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Ի՞նչ ծառայություններ է տրամադրում ընկերությունը։",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Մենք տրամադրում ենք համալիր աջակցություն տեղափոխության, կացության թույլտվության, քաղաքացիության, բիզնեսի գրանցման, հաշվապահական սպասարկման, աշխատանքի թույլտվության ձևակերպման և այլ հարակից հարցերի վերաբերյալ։"
              }
            },
            {
              "@type": "Question",
              "name": "Հնարավո՞ր է ստանալ աջակցություն հեռավար եղանակով։",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Այո։ Կախված ծառայության բնույթից՝ որոշ ընթացակարգեր կարող են իրականացվել հեռավար՝ օրենսդրության պահանջներին համապատասխան։"
              }
            },
            {
              "@type": "Question",
              "name": "Որքա՞ն ժամանակ է տևում գործընթացը։",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ժամկետը կախված է ընտրված ծառայությունից, դիմելու հիմքից և պետական մարմինների պահանջներից։ Խորհրդատվությունից հետո մենք տրամադրում ենք անհատական աշխատանքային պլան՝ յուրաքանչյուր փուլի մոտավոր ժամկետներով։"
              }
            },
            {
              "@type": "Question",
              "name": "Աշխատո՞ւմ եք բիզնեսների հետ։",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Այո։ Մենք աջակցում ենք անհատ ձեռնարկատերերին, կազմակերպություններին և միջազգային ընկերություններին՝ տրամադրելով համալիր լուծումներ Հայաստանի Հանրապետությունում գործունեություն իրականացնելու համար։"
              }
            },
            {
              "@type": "Question",
              "name": "Տրամադրո՞ւմ եք խորհրդատվություն։",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Այո։ Մեր մասնագետները տրամադրում են անհատական խորհրդատվություն՝ օգնելով որոշել հետագա գործողությունների առավել համապատասխան ընթացակարգը։"
              }
            }
          ]
        }
      ]
    },
  },
};

export function pageSchema(locale: Locale, page: PageKey): Record<string, unknown> {
  return SCHEMA[locale][page];
}
