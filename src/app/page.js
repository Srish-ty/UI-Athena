import Image from "next/image";
import logo from "./images/logo1.png";
import stats from "./images/stats.png";
import brand0 from "./images/brand0.png";
import brand2 from "./images/brand2.png";
import brand3 from "./images/brand3.png";
import brand4 from "./images/brand4.png";
import brand5 from "./images/brand5.png";
import brand6 from "./images/brand6.png";
import use0 from "./images/use0.png";
import use1 from "./images/use1.png";
import use2 from "./images/use2.png";
import glasscard0 from "./images/glasscard0.png";
import glasscard1 from "./images/glasscard1.png";
import centre from "./images/centre.png";
import Footer from "./images/footer.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import bigimage from "./images/bigimage.png";

const accordionData = [
  {
    value: "item-1",
    trigger:
      "How is Athena Screen better than existing tech and coding test tools?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    trigger:
      "Why should I use a Developer Screening or Interview AI Assistant?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    value: "item-3",
    trigger: "What Technical skills can I test candidates for?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    value: "item-4",
    trigger: "How do I interpret test scores?",
    content:
      "We score candidates on a 5-point scale. We provide overall scores, as well as a breakdown of scores into Problem Solving (Algorithms & Data Structures) and General Coding Logic & Development Skills. When deciding whether to interview candidates, we generally recommend the following:",
  },
  {
    value: "item-5",
    trigger: "What types of companies use Screen to hire engineers?",
    content:
      "We score candidates on a 5-point scale. We provide overall scores, as well as a breakdown of scores into Problem Solving (Algorithms & Data Structures) and General Coding Logic & Development Skills. When deciding whether to interview candidates, we generally recommend the following:",
  },
  {
    value: "item-6",
    trigger:
      "How well do the tests predict phone screen and interview performance?",
    content:
      "We score candidates on a 5-point scale. We provide overall scores, as well as a breakdown of scores into Problem Solving (Algorithms & Data Structures) and General Coding Logic & Development Skills. When deciding whether to interview candidates, we generally recommend the following:",
  },
  {
    value: "item-7",
    trigger: "How large is the test data?",
    content:
      "We score candidates on a 5-point scale. We provide overall scores, as well as a breakdown of scores into Problem Solving (Algorithms & Data Structures) and General Coding Logic & Development Skills. When deciding whether to interview candidates, we generally recommend the following:",
  },
  {
    value: "item-8",
    trigger: "Are the tests getting better over time?",
    content:
      "We score candidates on a 5-point scale. We provide overall scores, as well as a breakdown of scores into Problem Solving (Algorithms & Data Structures) and General Coding Logic & Development Skills. When deciding whether to interview candidates, we generally recommend the following:",
  },
];

const AccordionDemo = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {accordionData.map((item, index) => (
        <AccordionItem key={index} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const RoundedButton = ({ children }) => (
  <button className="rounded-3xl border-white border-2 px-5 py-3">
    {children}
  </button>
);
const ColorButton = ({ children }) => (
  <button className="rounded-3xl border-white border-[1px] px-5 py-3 bg-gradient-to-r from-[#9021D4] to-[#26126F] text-white  hover:opacity-80 transition-opacity">
    {children}
  </button>
);

const NavBar = () => (
  <nav className="flex justify-between items-center p-8">
    <div className="flex items-center space-x-4">
      <Image src={logo} alt="Logo" width={200} height={100} />
    </div>
    <div className="flex space-x-4">
      <RoundedButton>Log in</RoundedButton>
      <ColorButton>Create new account</ColorButton>
    </div>
  </nav>
);

const Title = ({ children }) => (
  <div className="p-2 m-2">
    <h1 className="text-5xl font-bold text-center">{children}</h1>
  </div>
);
const SuperTitle = ({ children }) => (
  <div className="py-2 px-24 mx-8 m-2">
    <h1 className="text-5xl text-center font-extrabold">{children}</h1>
  </div>
);

const SubTitle = ({ children }) => (
  <div className="p-2 m-2">
    <h2 className="text-xl text-center">{children}</h2>
  </div>
);

const EmailField = () => {
  return (
    <div className="rounded-lg  my-4 p-6 max-w-3xl mx-auto">
      <div className="space-y-4 max-w-lg mx-auto">
        <div className="flex items-center rounded-full border-2 border-gray-500 border-primary h-[60px]">
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent px-4 py-2 text-primary-foreground placeholder-muted-foreground focus:outline-none rounded-l-full"
          />
          <button
            type="button"
            className="bg-gradient-to-r h-[100%] from-[#5F0A87] to-[#A4508B] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Get Early Access -&gt;
          </button>
        </div>
      </div>
    </div>
  );
};

const StatsField = () => (
  <div className="relative w-full w-max mx-auto">
    <div className="absolute w-full inset-0 -z-10 rounded-lg bg-gradient-to-r from-[#F1A410] via-[#822B6F] at-26% via-[#B8BA4B] at-66% via-[#93F7F3] at-85% to-[#4A64C2] blur-[80px] opacity-60" />
    <div className="relative overflow-hidden w-full">
      <Image src={stats} alt="image" width={1000} height={1000} />
    </div>
  </div>
);

const Brand = ({ src }) => (
  <div className="flex items-center justify-center w-[160px]">
    <Image src={src} alt="Brand" width={200} height={100} />
  </div>
);

const useCases = [
  {
    src: use0,
    title: "For HRTech & HR Vendors",
    desc: "Deliver Al-Powered HR APPS and Experiences",
  },
  {
    src: use1,
    title: "For Staffing & Consulting firms",
    desc: "Increase your revenue, retention and operating margin",
  },
  {
    src: use2,
    title: "For Large employers & Public sector",
    desc: "Power Talent Management with Data and Connectivity.",
  },
];

const UseCase = ({ src, title, description }) => (
  <div className="flex flex-col justify-center items-start w-[300px]">
    <Image src={src} alt="Use Case" width={80} height={80} />
    <h3 className="text-xl font-extrabold mt-4">{title}</h3>
    <p className="mt-2 text-left">{description}</p>
  </div>
);

const Uses = () => {
  return (
    <div className="flex flex-col justify-between items-center p-8 w-full my-8">
      <div className="w-[50vw]">
        <Title>Leverage Athena.ai across industries & use-cases</Title>
      </div>
      <div className="flex flex-row justify-evenly w-full my-10">
        {useCases.map((useCase, index) => (
          <UseCase
            key={index}
            src={useCase.src}
            title={useCase.title}
            description={useCase.desc}
          />
        ))}
      </div>
    </div>
  );
};

const brandContent = [brand0, brand2, brand3, brand4, brand5, brand6];

const BrandsContainer = () => (
  <div className="flex flex-col justify-between items-center p-8 w-full my-8">
    <Title>Brands that trust us</Title>
    <div className="flex flex-row justify-evenly w-full my-4">
      {brandContent.map((src, index) => (
        <Brand key={index} src={src} />
      ))}
    </div>
  </div>
);

export const Advert = () => (
  <div className="p-8 my-4 mx-auto w-[50vw] flex flex-col items-center">
    <Title>The ultimate Talent Data Intelligence</Title>
    <p className="text-lg my-2">Make Data and AI your competitive advantage.</p>
  </div>
);

const GlassyCard = ({ heading, descr, children }) => (
  <div
    className="relative w-full max-w-[45%] mx-4 rounded-lg border border-solid border-[#44417a] bg-opacity-0 "
    style={{
      backgroundImage:
        "linear-gradient(to bottom, #9893E3 0%, #44417a 10%, #090a2b 30%)",
    }}
  >
    <div className="px-20  pt-10">
      <h1 className="text-xl font-bold text-white mb-4">{heading}</h1>
      <p className="text-sm text-white text-opacity-70">{descr}</p>
    </div>
    <div className="w-full">{children}</div>
  </div>
);

const cardsInfo = [
  {
    heading: "Bring your own data",
    descr:
      "18 months ago, Yogini and I started Peerlist as a side project to effectively showcase our proof of work, a problem we faced firsthand. We realized that LinkedIn, a prominent Professional Network, is not catering effectively to ",
    img: glasscard0,
  },
  {
    heading: "Easy to Use ",
    descr:
      "18 months ago, Yogini and I started Peerlist as a side project to effectively showcase our proof of work, a problem we faced firsthand. We realized that LinkedIn, a prominent Professional Network, is not catering effectively to ",

    img: glasscard1,
  },
];

const CardsSec = () => {
  return (
    <div className="w-[85%] mx-auto">
      <div className="flex flex-row justify-evenly w-full my-10">
        {cardsInfo.map((card, index) => (
          <GlassyCard key={index} heading={card.heading} descr={card.descr}>
            <Image
              src={card.img}
              alt="card"
              width={index == 0 ? 600 : 450}
              height={index == 1 ? 500 : 100}
              className="mx-auto"
            />
          </GlassyCard>
        ))}
      </div>
    </div>
  );
};

const BigCentralCont = () => {
  return (
    <div className="w-[80%] flex flex-row justify-between items-center mx-auto rounded-lg border border-solid border-[#44417a] bg-opacity-0 py-10 px-12">
      <div className="w-1/3">
        <h1 className="text-2xl my-4 font-bold">Flexible and customizable</h1>
        <p className="text-sm my-6 text-white text-opacity-70">
          18 months ago, Yogini and I started Peerlist as a side project to
          effectively showcase our proof of work, a problem we faced firsthand.
          We realized that LinkedIn, a prominent Professional Network, is not
          catering effectively to
        </p>
      </div>
      <div>
        <Image src={centre} alt="image" width={500} height={300} />
      </div>
    </div>
  );
};

const InfoData = [
  {
    title: "Resume Parser",
    desc: "Turn any resume/CV, job offer or HR document into a structured JSON.",
  },
  {
    title: "Profile Insights",
    desc: "Enrich any Resume/CV, profile or job offer with implicit hard-skills and soft-skills. industry, most challenging projects,  and achievments",
  },
  {
    title: "Auto Update Old Resume Data",
    desc: "Find the most up-to-date candidate details with a combination of latest online data & predictive analytics",
  },
];

const InfoCont = () => {
  return (
    <section className="my-16">
      <div className="headings my-10">
        <Title>Ready to use tools</Title>
        <div className="w-[40vw] mx-auto">
          <div className="text-lg text-center text-white opacity-60 mx-auto">
            A suite of AI solutions to enable leading HR experiences &
            automations
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-evenly">
        {InfoData.map((data, index) => (
          <div
            key={index}
            className="p-6 w-[28%] my-6 text-center hover:bg-[#333157] rounded-lg hover:border-2 border-[#7773c8] border-primary"
          >
            <h1 className="text-2xl font-bold my-2">{data.title}</h1>
            <p className="w-[85%] mx-auto text-sm text-white text-opacity-70 p-3">
              {data.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const BigImgCont = () => {
  return (
    <div className="w-full mx-auto flex flex-col items-center my-6">
      <Image src={bigimage} alt="image" width={1200} height={500} />
    </div>
  );
};

const AccordionCont = () => {
  return (
    <div className="w-[80%] my-6 p-6 mx-auto flex flex-col justify-center items-center">
      <section className="my-8">
        <Title>Frequently Asked Question </Title>
        <div className="w-[40vw] ">
          <div className="text-lg text-center text-white opacity-60">
            If you can't find what you're looking for email our support team at
            team@athenasquare.org and someone will get back to you
          </div>
        </div>
      </section>
      <AccordionDemo />
    </div>
  );
};

const FooterCont = () => {
  return (
    <div className="p-6 mx-auto flex flex-col justify-center items-center">
      <Image src={Footer} alt="image" width={1200} height={500} />
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <NavBar />
      <section className="hero py-4 my-2">
        <SuperTitle>
          Enabling Companies to Build AI-Powered HRTech Solutions
        </SuperTitle>
        <SubTitle>
          Go from idea to product with one API integration and without a single
          line of code.
        </SubTitle>{" "}
      </section>

      <EmailField />

      <StatsField />

      <BrandsContainer />
      <Uses />

      <Advert />
      <CardsSec />
      <BigCentralCont />

      <InfoCont />
      <BigImgCont />

      <AccordionCont />

      <section className="hero h-[500px]"> first section </section>
      <FooterCont />
    </div>
  );
}
