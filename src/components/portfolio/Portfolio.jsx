import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Mine Sweeper Game",
    img: "https://media.istockphoto.com/id/1224500457/tr/foto%C4%9Fraf/programlama-kodu-soyut-teknoloji-arka-plan-yaz%C4%B1l%C4%B1m-geli%C5%9Ftiricisi-ve-bilgisayar-script.jpg?s=612x612&w=0&k=20&c=fWCeGOSgqADoBy5kCdqcBC4beMu-RdktezCcmYGuZAE=",
    desc: "A Minesweeper application with Java",
    link: "https://github.com/cgezginci/MayinTarlasi/tree/main/MayinTarlasi",
  },
  {
    id: 2,
    title: "Tourism Agency Application",
    img: "https://media.istockphoto.com/id/1224500457/tr/foto%C4%9Fraf/programlama-kodu-soyut-teknoloji-arka-plan-yaz%C4%B1l%C4%B1m-geli%C5%9Ftiricisi-ve-bilgisayar-script.jpg?s=612x612&w=0&k=20&c=fWCeGOSgqADoBy5kCdqcBC4beMu-RdktezCcmYGuZAE=",
    desc: "A Tourism Agency application with Java",
    link: "https://github.com/cgezginci/Tourism_Agency/tree/main/tourismAgency",
  },
  {
    id: 3,
    title: "Veterinary Clinic Management System REST API",
    img: "https://media.istockphoto.com/id/1224500457/tr/foto%C4%9Fraf/programlama-kodu-soyut-teknoloji-arka-plan-yaz%C4%B1l%C4%B1m-geli%C5%9Ftiricisi-ve-bilgisayar-script.jpg?s=612x612&w=0&k=20&c=fWCeGOSgqADoBy5kCdqcBC4beMu-RdktezCcmYGuZAE=",
    desc: "Veterinary Management System built with Java Spring Boot.",
    link: "https://github.com/cgezginci/Capstone-Backend",
  },
  {
    id: 4,
    title: "Veterinary Clinic Management System Frontend with React",
    img: "https://media.istockphoto.com/id/1224500457/tr/foto%C4%9Fraf/programlama-kodu-soyut-teknoloji-arka-plan-yaz%C4%B1l%C4%B1m-geli%C5%9Ftiricisi-ve-bilgisayar-script.jpg?s=612x612&w=0&k=20&c=fWCeGOSgqADoBy5kCdqcBC4beMu-RdktezCcmYGuZAE=",
    desc: "The React frontend of my veterinary project built with Java Spring Boot.",
    link: "https://github.com/cgezginci/Capstone-Frontend",
  },
  {
    id: 5,
    title: "Sport Center",
    img: "https://media.istockphoto.com/id/1224500457/tr/foto%C4%9Fraf/programlama-kodu-soyut-teknoloji-arka-plan-yaz%C4%B1l%C4%B1m-geli%C5%9Ftiricisi-ve-bilgisayar-script.jpg?s=612x612&w=0&k=20&c=fWCeGOSgqADoBy5kCdqcBC4beMu-RdktezCcmYGuZAE=",
    desc: "Sport Center is a desktop sports center website created with HTML and CSS. The website is designed to be responsive, providing an optimal viewing and interaction experience across a wide range of devices, from desktop computers to mobile phones.",
    link: "https://github.com/cgezginci/sportCenterProject",
  },
  {
    id: 6,
    title: "Question App",
    img: "https://media.istockphoto.com/id/1224500457/tr/foto%C4%9Fraf/programlama-kodu-soyut-teknoloji-arka-plan-yaz%C4%B1l%C4%B1m-geli%C5%9Ftiricisi-ve-bilgisayar-script.jpg?s=612x612&w=0&k=20&c=fWCeGOSgqADoBy5kCdqcBC4beMu-RdktezCcmYGuZAE=",
    desc: "A quiz application built with React.",
    link: "https://github.com/cgezginci/questionApp",
  },
  {
    id: 7,
    title: "Tourism Agency REST API",
    img: "https://media.istockphoto.com/id/1224500457/tr/foto%C4%9Fraf/programlama-kodu-soyut-teknoloji-arka-plan-yaz%C4%B1l%C4%B1m-geli%C5%9Ftiricisi-ve-bilgisayar-script.jpg?s=612x612&w=0&k=20&c=fWCeGOSgqADoBy5kCdqcBC4beMu-RdktezCcmYGuZAE=",
    desc: "Tourism Agency REST API built with Java Spring Boot.",
    link: "https://github.com/cgezginci/Backend-Tourism-Agency",
  },
  {
    id: 8,
    title: "Tourism Agency Frontend with React",
    img: "https://media.istockphoto.com/id/1224500457/tr/foto%C4%9Fraf/programlama-kodu-soyut-teknoloji-arka-plan-yaz%C4%B1l%C4%B1m-geli%C5%9Ftiricisi-ve-bilgisayar-script.jpg?s=612x612&w=0&k=20&c=fWCeGOSgqADoBy5kCdqcBC4beMu-RdktezCcmYGuZAE=",
    desc: "The React frontend of my tourism project built with Java Spring Boot.",
    link: "https://github.com/cgezginci/Frontend-Tourism-Agency/tree/main/Tourism%20Agency",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See More</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
