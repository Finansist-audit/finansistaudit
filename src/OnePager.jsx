import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionHeader from "./SectionHeader";
import ScrollToTopButton from "./ScrollToTopButton";
import ContactsSection from "./ContactsSection";

// import logo from "/public/assets/logo.svg";
import logo from "/public/assets/logo.png";
import main1 from "/public/assets/main/main1.jpg";
import main2 from "/public/assets/main/main2.jpg";
import main3 from "/public/assets/main/main3.jpg";
import main4 from "/public/assets/main/main4.jpeg";
import main5 from "/public/assets/main/main5.jpg";
import about1 from "/public/assets/about/about1.png";
import about2 from "/public/assets/about/about2.png";
import about3 from "/public/assets/about/about3.png";
import about4 from "/public/assets/about/about4.png";
import about5 from "/public/assets/about/about5.png";
import cert from "/public/assets/about/fcca-certificate.png";
import PortfolioSection from "./PortfolioSection";

export default function OnePager() {
  const [lang, setLang] = useState("ua");
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState("audit");

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  const t = {
    ua: {
      menu: ["Про нас", "Послуги", "Портфоліо", "Контакти"],
      why: "Чому ми?",
      whyText:
        " Ви можете задатись питанням — маю понад 10 пропозицій від аудиторів. Вони члени міжнародних організацій, сертифіковані члени АССА, CPA, SIMA. Чому ж обрати саме нас?",
      button: "Бо ми молоді!",
      vision: "Наша візія",
      visionArr: ["Ефективність", "Швидкість", "Прямота", "Благодійність"],
      message:
        "НАШІ ЗНАННЯ ЦІННІ ТІЛЬКИ ТАМ - ДЕ ЛЮДСЬКА ЦІННІСТЬ ПЕРЕВАЖАЄ ГРОШОВУ",
      about: {
        title: "Про нас",
        subtitle: "Наші ключові обличчя",
        cert: "Переглянути сертифікат",
        text: "Сьогодні ми маємо найкращу нагоду сказати — на короткому дзвінку у нас десятки спеціалістів, готових долучитись до Вашого завдання! Але, про всяк випадок — ми знаємо, що ви справді бажаєте знати. А чи є у нас реальні фахівці з міжнародним досвідом? Так і ще раз так!",
      },
      services: {
        float1: "Загальний досвід",
        float2: "20+ років",
        float3: "Проєктів успішно завершено",
        float4: "Клієнти з довірою",
        float5: "87% повторних",
        title: "Послуги",
        subtitle: "наш професійний підхід та досвід",
      },
      portfolio: {
        title: "Портфоліо",
        subtitle: "наші клієнти та партнери, з якими ми працювали",
      },
      contacts: {
        title: "Контакти",
        subtitle: "зв’яжіться з нами для співпраці або консультації",
        subtitleL: "Маєте запитання чи потребуєте додаткової інформації? Ми готові допомогти. Зв’яжіться з нами — ми з радістю вам допоможемо!",
        send: "Надіслати емейл",
        call: "Подзвонити нам",
        help: "Чим ми можемо допомогти?",
        points: [{t: 'Загальні запитання', text: 'Отримайте відповіді на свої запитання.'},
        {t: 'Співпраця', text: 'Обговорімо можливості спільної роботи.'},
        {t: 'Підтримка та інформація', text: 'Зв’яжіться з нами, якщо вам потрібна додаткова інформація.'},
        ],
        subtitleR: "Зв’яжіться з нами напряму",
        // address: "49000, м. Дніпро, проспект Д. Яворницького,",
        address: "місто Дніпро, вул. Фабрично-заводська",
        address2: "будинок 28",
        regNum: "ЄДРПОУ",
        thank: "Ми відповімо протягом одного робочого дня.",
        thank2: "Дякуємо, що обрали",
        name: "Фінансист",
      },
      finalMessage: "Аудиторстка фірма \"Фінансист\". Всі права захищено."
    },

    en: {
      menu: ["About Us", "Services", "Portfolio", "Contacts"],
      why: "Why us?",
      whyText:
        "You may be wondering — I have more than 10 proposals from different auditors. They are members of international organizations, certified members of ACCA, CPA, SIMA. Why choose us?",
      button: "Because we’re young!",
      vision: "Our Vision",
      visionArr: ["Efficiency", "Speed", "Directness", "Charity"],
      message: "OUR KNOWLEDGE MATTERS ONLY WHERE HUMAN VALUES OUTWEIGH MONEY",
      about: {
        title: "About Us",
        subtitle: "Our Key People",
        cert: "View the certificate",
        text: "Today we have the best opportunity to say - on a short call we have dozens of specialists ready to join your task! But, just in case - we know what you really want to know. And do we have real specialists with international experience? Yes and again yes!",
      },
      services: {
        float1: "Total experience",
        float2: "20+ years",
        float3: "Projects successfully completed",
        float4: "Trusted clients",
        float5: "87% repeat customers",
        title: "Services",
        subtitle: "our professional approach and expertise",
      },
      portfolio: {
        title: "Portfolio",
        subtitle: "our clients and partners we have worked with",
      },
      contacts: {
        title: "Contacts",
        subtitle: "get in touch with us for collaboration or consultation",
        // send: "Send",
        leftSub: "Have a question or need more information? We're here to help. Get in touch with us, and we'll be happy to assist you!",
        send: "Send email",
        call: "Call us",
        help: "How can we help?",
        points: [{t: 'General inquiries', text: 'Get answers to your questions.'},
        {t: 'Cooperation', text: 'Let\'s discuss opportunities to work together.'},
        {t: 'Support and information', text: 'Contact us if you need additional information.'},
        ],
        subtitleR: "Contact us directly",
        address: "49000, Dnipro, Fabrychno-zavodskya Street,",
        address2: "building 28",
        regNum: "Registration number",
        thank: "We will respond within one business day.",
        thank2: "Thank you for choosing",
        name: "Fininsist",
      },
      finalMessage: "Fininsist. All rights reserved."
    },
  };

  const pastelBlues = [
    "bg-blue-50",
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
  ];

  const mainsUa = [
    {
      title: "Ми Ефективні",
      text: 'В нас працюють знахідки як з "Big Four" так і з другого ешелону. Наша команда молода — а тому ефективна. Нас цікавить результат, а не маржа. Ми працюємо з неприбутковим сегментом і підтримуємо "work-life balance", що підвищує ефективність.',
      img: main2,
    },
    {
      title: "Ми Швидкі",
      text: "Ми швидше інтегрували штучний інтелект, ніж регулятори визнали його інструментом. Тривіальну роботу тепер виконує ШІ — це означає швидший відгук і результати.",
      img: main3,
    },
    {
      title: "Ми Прямі та Чесні",
      text: "Вас цікавить результат, а нас — гідна платня за досвід. Якщо ви чогось не знаєте — ми навчимо. Ми не приховуємо істину: навчаємо створювати звітність, яка приносить реальну користь.",
      img: main4,
    },
    {
      title:
        "Наші працівники, партнери та підрядники - всі мають гуманітарну місію!",
      text: 'Коли Ви звертаєтесь до "Фінансист", ми знаходимо ресурс, ефективний, швидкий, прямий. І ми розуміємо всі ваші візії. Наша діяльність - благодійна там, де ми можемо прикласти наш досвід та навички. Це там де ми корисні. Коли фінансист гукає "Так а як я здам річний звіт" - Ресурс аудит готовий бути поряд, бо ми розуміємо.',
      img: main5,
    },
  ];
  const mainsEn = [
    {
      title: "We are efficient",
      text: 'We employ both "Big Four" and second-tier talent. Our team is young, and therefore efficient. We are interested in results, not margins. We work with the non-profit segment and support a "work-life balance," which increases efficiency.',
      img: main2,
    },
    {
      title: "We are fast",
      text: "We integrated AI faster than regulators recognized it as a tool. Trivial work is now done by AI - which means faster response and results.",
      img: main3,
    },
    {
      title: "We are Direct and Honest",
      text: "You are interested in the result, and we are interested in a decent salary for experience. If you don't know something, we will teach you. We don't hide the truth: we teach you how to create reporting that brings real benefits.",
      img: main4,
    },
    {
      title:
        "Our employees, partners, and contractors all have a humanitarian mission!",
      text: 'When you turn to "Finansist", we find a resource, effective, fast, direct. And we understand all your visions. Our activity is charitable where we can apply our experience and skills. This is where we are useful. When the financier shouts "So how do I submit the annual report" - Finanasist is ready to be there, because we understand.',
      img: main5,
    },
  ];

  let mains = lang == "ua" ? mainsUa : mainsEn;

  const teamUa = [
    // {
    //   name: "Нікіфоренко Микола",
    //   role: "Генеральний директор",
    //   text: "Понад 25 років стажу. Присяжний член IFAC, один із творців Аудиторської палати України. Почесний член ФПБАУ та САУ.",
    //   img: about1,
    // },
    {
      name: "Поспехова Олена",
      role: "Генеральний директор",
      text: "Понад 25 років стажу. Присяжна членкиня IFAC.",
      img: about1,
    },
    {
      name: "Гаврилова Олена",
      role: "Менеджерка з аудиту",
      text: "Понад 20 років стажу в аудиті. Спеціаліст з податкового обліку, емітентів та неприбуткових організацій. Почесна членкиня САУ та ФПБАУ.",
      img: about2,
    },
    {
      name: "Воят Олександр",
      role: "Директор департаменту аудиту",
      text: "Понад 10 років досвіду. Почесний член ФПБАУ та САУ. Сертифікований член АССА (FCCA).",
      img: about3,
      cert: cert,
    },
    {
      name: "Кузь Анастасія",
      role: "Головна аудиторка",
      text: "Понад 15 років стажу. Сертифікації CPA, DIPIFR (ACCA), SIMA.",
      img: about4,
    },
    {
      name: "Голуб Сергій",
      role: "Контролер якості",
      text: "Більше 20 років досвіду у сфері фінансів та аудиту, включаючи керуючий досвід у «Великій Четвірці». Сертифікат FCCA.",
      img: about5,
    },
  ];

  const teamEn = [
    {
      name: "Olena Pospeлhova",
      role: "General director",
      text: "Over 25 years of experience. IFAC sworn member.",
      img: about1,
    },
    {
      name: "Olena Gavrilova",
      role: "Audit Manager",
      text: "Over 20 years of experience in auditing. Specialist in tax accounting, issuers and non-profit organizations. Honorary member of the Ukrainian Association of Accountants and Auditors and the Ukrainian Federation of Accountants.",
      img: about2,
    },
    {
      name: "Oleksandr Voyat",
      role: "Director of Audit Department",
      text: "Over 10 years of experience. Honorary member of FPBAU and SAU. Certified member of ACCA (FCCA).",
      img: about3,
      cert: cert,
    },
    {
      name: "Anastasia Kuz",
      role: "The main auditor",
      text: "Over 15 years of experience. CPA, DIPIFR (ACCA), SIMA certifications.",
      img: about4,
    },
    {
      name: "Serhiy Golub",
      role: "Quality controller",
      text: 'Over 20 years of experience in finance and auditing, including management experience in the "Big Four". FCCA certified.',
      img: about5,
    },
  ];
  let team = lang == "ua" ? teamUa : teamEn;

  const servicesUa = [
    {
      id: "audit",
      title: "Аудит",
      text: `Ми спеціалізуємося у проведенні ініціативного аудиту.
Наше бачення — регулятор не здатний і не має візії.
Тільки власники бізнесу та користувачі фінансової звітності можуть бажати неупередженого аудиту.
Поки аудиторські фірми третього та четвертого реєстру переслідують вимог регуляторів —
ми стоїмо на захисті приватного бізнесу, бо наша ціль не збір паперу, а об’єктивна оцінка та чесне висловлення думки.`,
    },
    {
      id: "business",
      title: "Ініціативний аудит бізнесу",
      text: `Ви можете бути прибутковими і ні, емітентами та ні — нам байдуже, якщо наше завдання — неупереджений аудит.
Ми пропонуємо пакет послуг — ініціативний аудит та due-diligence.
Хай Ваш власник буде спокійним: поки “основний” аудитор збирає папір — ми робимо об’єктивний аудит.`,
    },
    {
      id: "nonprofit",
      title: "Ініціативний аудит неприбуткового сегменту",
      text: `Хочете секрет? Всі наші працівники так чи інакше працювали в неприбутковій сфері.
Нас об’єднала місія: служити людям, щоб на планеті всі жили краще.
Якщо ви Організація із неприбуткового сегменту - ви не зможете знайти кращий професіоналів у цій справі. Щонайменше шість наших самих досвідчених фахівців - працювали або досі працюють у неприбутковому сегменті.
Досить терпіти стандартний підхід - Ви та Ваші донори варті кращого. Це розуміння`,
    },
    {
      id: "extra",
      title: "Додаткові послуги",
      text: `Нехай інші заробляють, ми будемо допомагати.
Наші спеціалісти також вправні у консолідації фінансової звітності, підготовці звітності у таксономії xbrl, due-dilligance та оглядах
у податкових ревізіях (перед проведенням інспекції).
Ми також продаємо потужні цукерки! Жартуємо. Але можна домовитись!`,
    },
  ];
  const servicesEn = [
    {
      id: "audit",
      title: "Audit",
      text: `We specialize in conducting proactive audits.
Our vision is that the regulator is incapable and has no vision.
Only business owners and users of financial statements can desire an impartial audit.
While third and fourth-tier audit firms are chasing regulatory demands —
we stand in defense of private business, because our goal is not to collect paper, but to objectively evaluate and honestly express our opinion.`,
    },
    {
      id: "business",
      title: "Proactive business audit",
      text: `You can be profitable or not, issuers or not - we don't care, as long as our task is an impartial audit.
We offer a package of services - proactive audit and due diligence.
Let your owner rest assured: while the “main” auditor is collecting paperwork, we are conducting an objective audit.`,
    },
    {
      id: "nonprofit",
      title: "Proactive audit of the non-profit segment",
      text: `Want a secret? All of our employees have worked in the nonprofit sector in one way or another.
We are united by a mission: to serve people so that everyone on the planet can live better.
If you are a non-profit organization, you won't find a better professional in this field. At least six of our most experienced professionals have worked or are still working in the non-profit sector.
Stop putting up with the standard approach - you and your donors deserve better. This understanding`,
    },
    {
      id: "extra",
      title: "Additional services",
      text: `Let others earn, we will help.
Our specialists are also skilled in financial statement consolidation, preparation of reports in xbrl taxonomy, due-dilligance and reviews
in tax audits (before conducting an inspection).
We also sell powerful candies! Just kidding. But we can negotiate!`,
    },
  ];
  let services = lang == "ua" ? servicesUa : servicesEn;

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Header with mobile burger menu */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
  {/* Logo */}
  <img src={logo} alt= {t[lang].contacts.name} className="h-12 w-auto" />

  {/* Desktop Navigation */}
  <nav className="hidden md:flex items-center space-x-6">
    <a href="#about" className="hover:text-blue-600 transition-colors">
      {t[lang].menu[0]}
    </a>
    <a href="#services" className="hover:text-blue-600 transition-colors">
      {t[lang].menu[1]}
    </a>
    <a href="#portfolio" className="hover:text-blue-600 transition-colors">
      {t[lang].menu[2]}
    </a>
    <a href="#contacts" className="hover:text-blue-600 transition-colors">
      {t[lang].menu[3]}
    </a>

    {/* Language Switch (Desktop) */}
    <button
      onClick={() => setLang(lang === "ua" ? "en" : "ua")}
      className="relative group overflow-hidden border border-gray-300 rounded-full px-4 py-1 text-sm font-medium transition-all hover:border-blue-400"
    >
      <span
        className={`block transition-transform duration-300 ${
          lang === "ua" ? "translate-y-0" : "-translate-y-full"
        } group-hover:text-blue-600`}
      >
        EN
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
          lang === "ua" ? "translate-y-full" : "translate-y-0"
        } group-hover:text-blue-600`}
      >
        UA
      </span>
    </button>
  </nav>

  {/* Mobile Burger Menu */}
  <button
    className="md:hidden flex flex-col justify-center items-center space-y-1"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    <span className="w-6 h-0.5 bg-gray-700"></span>
    <span className="w-6 h-0.5 bg-gray-700"></span>
    <span className="w-6 h-0.5 bg-gray-700"></span>
  </button>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className="absolute top-20 left-0 w-full bg-white flex flex-col items-center py-4 space-y-4 shadow-md md:hidden">
      <a
        href="#about"
        className="hover:text-blue-600"
        onClick={() => setMenuOpen(false)}
      >
        {t[lang].menu[0]}
      </a>
      <a
        href="#services"
        className="hover:text-blue-600"
        onClick={() => setMenuOpen(false)}
      >
        {t[lang].menu[1]}
      </a>
      <a
        href="#portfolio"
        className="hover:text-blue-600"
        onClick={() => setMenuOpen(false)}
      >
        {t[lang].menu[2]}
      </a>
      <a
        href="#contacts"
        className="hover:text-blue-600"
        onClick={() => setMenuOpen(false)}
      >
        {t[lang].menu[3]}
      </a>

      {/* Language Switch (Mobile) */}
      <button
        onClick={() => {
          setLang(lang === "ua" ? "en" : "ua");
          setMenuOpen(false);
        }}
        className="border border-gray-300 rounded-full px-4 py-1 text-sm font-medium hover:bg-blue-50 hover:border-blue-400 transition-all"
      >
        {lang === "ua" ? "EN" : "UA"}
      </button>
    </div>
  )}
</header>


      {/* Section 1: Головна */}
      <section className="relative py-36 md:py-56 px-6 text-center flex flex-col justify-center items-center">
        {/* Background image with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${main1})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-white max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-semibold mb-10">
            {t[lang].why}
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed mb-12">
            {t[lang].whyText}
          </p>
          {/* <motion.a
            whileHover={{ scale: 1.05 }}
            href="#services"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg shadow-lg transition-all"
          >
            Бо ми молоді!
          </motion.a> */}
          <motion.a whileHover={{ scale: 1.05 }} href="#main">
            {" "}
            <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 text-2xl font-medium transition-all text-gray-900">
              {" "}
              {t[lang].button}
            </div>{" "}
          </motion.a>
        </div>
      </section>

      {/* Section 2: Наша візія */}
      <section id="main" className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-semibold text-center mb-10">
          {t[lang].vision}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {t[lang].visionArr.map((value, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`${pastelBlues[i]} rounded-2xl p-6 shadow-md transition-all`}
            >
              <h3 className="text-2xl font-semibold mb-2">{value}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2.1–2.4 */}
      <section className="py-16 px-2 md:px-6 lg:px-12 bg-gray-50 space-y-10">
        {mains.map((block, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className={`flex flex-col ${
              i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center bg-white rounded-2xl shadow-md overflow-hidden transition-all lg:max-w-[calc(100%-100px)] md:max-w-[calc(100%-40px)] sm:mx-auto mx-[20px]`}
          >
            <img
              src={block.img}
              alt={block.title}
              className={`w-full md:w-1/2 ${
                i === 3 ? "h-96 xl:h-[400px] md:h-[460px]" : "h-64 md:h-72"
              } object-cover object-center`}
            />
            <div className="p-6 md:w-1/2 text-center md:text-left md:px-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                {block.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                {block.text}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Final Message */}
        <div className="text-center text-2xl md:text-3xl font-semibold mt-16 text-gray-800">
          {t[lang].message}
        </div>
      </section>

      <section
        id="about"
        className="py-20 px-4 md:px-8 bg-white text-center overflow-x-hidden"
      >
        <h2 className="text-4xl font-semibold mb-8">{t[lang].about.title}</h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-10">
          {t[lang].about.text}
        </p>

        <h3 className="text-2xl font-semibold mb-10">
          {" "}
          {t[lang].about.subtitle}
        </h3>

        {/* Scrollable gallery */}
        {/* <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory justify-start md:justify-center px-2"> */}
        <div
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 md:px-8 lg:px-10 xl:justify-center"
          // style={{ scrollPadding: "0 2rem" }}
        >
          {team.map((person, i) => (
            <motion.div
              key={i}
              className="relative w-72 h-[420px] flex-shrink-0 snap-center group"
              style={{
                perspective: "1200px",
                paddingBottom: "20px",
                paddingTop: "20px",
              }}
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg overflow-hidden [backface-visibility:hidden]">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-2/3 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold">{person.name}</h4>
                    <p className="text-sm text-gray-600">{person.role}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-6 flex flex-col justify-between text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-1">
                        {person.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        {person.role}
                      </p>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {person.text}
                    </p>
                    {person.cert ? (
                      <a
                        href={person.cert}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-blue-700 font-medium hover:underline"
                      >
                        {t[lang].about.cert} →
                      </a>
                    ) : (
                      <div style={{ height: "64px" }} />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="py-20 px-6 md:px-12 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Graphics */}
          <div className="relative flex justify-center items-center">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100 rounded-full blur-2xl opacity-60" />
            <div className="relative z-10 flex flex-col space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white shadow-lg rounded-2xl p-4 w-56"
              >
                <p className="text-gray-500 text-sm"> {t[lang].services.float1}</p>
                <p className="text-xl font-bold text-gray-800">{t[lang].services.float2}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white shadow-lg rounded-2xl p-4 w-56"
              >
                <p className="text-gray-500 text-sm">
                  {t[lang].services.float3}
                </p>
                <p className="text-xl font-bold text-gray-800">100+</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white shadow-lg rounded-2xl p-4 w-56"
              >
                <p className="text-gray-500 text-sm">{t[lang].services.float4}</p>
                <p className="text-xl font-bold text-gray-800">{t[lang].services.float5}</p>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div>
            <h2 className="text-4xl font-semibold mb-2">{t[lang].services.title}</h2>
            <p className="uppercase text-sm tracking-widest text-gray-500 mb-8">
              {t[lang].services.subtitle}
            </p>

            {services.map((item) => (
              <div key={item.id} className="border-b border-gray-200 mb-4 pb-4">
                <button
                  className="w-full flex justify-between items-center text-left focus:outline-none"
                  onClick={() => toggle(item.id)}
                >
                  <span className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </span>
                  <span className="text-2xl text-blue-500">
                    {open === item.id ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {open === item.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-gray-700 leading-relaxed"
                    >
                      {item.text}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PortfolioSection portfolio={t[lang].portfolio}/>

      <ContactsSection contacts={t[lang].contacts} lang={lang}/>

      <ScrollToTopButton />
      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900 text-gray-300">
        <p>© {new Date().getFullYear()} {t[lang].finalMessage}</p>
      </footer>
      <style>{`
/* Hide scrollbar */
.scrollbar-hide::-webkit-scrollbar {
display: none;
}
.scrollbar-hide {
-ms-overflow-style: none;
scrollbar-width: none;
}
.group:hover > div {
transform: rotateY(180deg);
}
`}</style>
    </div>
  );
}
