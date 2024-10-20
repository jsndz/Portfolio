import React, { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import { encode } from "querystring";
import Image from "next/image";
interface ProjectItem {
  title: string;
  src: string;
  category: string;
  subtitle2: string;
  width: number;
  height: number;
}

const Projects: React.FC = () => {
  const [items, setItems] = useState<ProjectItem[]>([ { title: "Noatric", src: "https://api.microlink.io/?url=https%3A%2F%2Fnoatric.vercel.app%2Fhome&screenshot=true&embed=screenshot.url", width: 1920, height: 1080, category: "Web Application", subtitle2: "Ecommerce Website" }, { title: "SkySense", src: "https://api.microlink.io/?url=https%3A%2F%2Fjsndz.github.io%2FskysenseDeploy%2F&overlay.browser=dark&screenshot=true&embed=screenshot.url", width: 1920, height: 1080, category: "Web Application", subtitle2: "Weather Data" }, { title: "Ephemera", src: "https://api.microlink.io/?url=https%3A%2F%2Fephemera-rho.vercel.app%2F&overlay.browser=dark&screenshot=true&embed=screenshot.url", width: 1920, height: 1080, category: "Web Application", subtitle2: "Secure Communication" }, { title: "Building a SQLite with C", src: "/assets/lang/CSS.svg", width: 1920, height: 1080, category: "Software Development", subtitle2: "Database Project" }, { title: "CLI_Template.js", src: "/assets/lang/CSS.svg", width: 1920, height: 1080, category: "Software Development", subtitle2: "Command Line Tool" }, { title: "PrimeBoard", src: "https://api.microlink.io/?url=https%3A%2F%2Fprimeboard.vercel.app%2F&overlay.browser=dark&screenshot=true&embed=screenshot.url", width: 1920, height: 1080, category: "Web Application", subtitle2: "Product Leaderboard" }, { title: "Dept-Emp", src: "/assets/lang/CSS.svg", width: 1920, height: 1080, category: "Web Application", subtitle2: "DBMS Mini-Project" }, { title: "v4-Parking-Service", src: "/assets/lang/CSS.svg", width: 1920, height: 1080, category: "IoT Development", subtitle2: "Smart Parking" }, { title: "SnapShort", src: "/assets/lang/CSS.svg", width: 1920, height: 1080, category: "Backend Development", subtitle2: "URL Shortener" }, { title: "SnapStory", src: "/assets/lang/CSS.svg", width: 1920, height: 1080, category: "Backend Development", subtitle2: "Short Blog Posts" }, { title: "Twitter backend clone", src: "/assets/lang/CSS.svg", width: 1920, height: 1080, category: "Backend Development", subtitle2: "Social Media Backend" }, ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const clonedItems = [...items.slice(-1), ...items, ...items.slice(0, 1)];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && !isTransitioning) {
        const scrollPosition = containerRef.current.scrollTop;
        const itemHeight = containerRef.current.clientHeight;
        let newIndex = Math.round(scrollPosition / itemHeight) - 1;
        
        if (newIndex < 0) {
          newIndex = items.length - 1;
          resetScroll(items.length * itemHeight);
        } else if (newIndex >= items.length) {
          newIndex = 0;
          resetScroll(itemHeight);
        }
        
        setCurrentIndex(newIndex);
      }
    };

    const resetScroll = (position: number) => {
      setIsTransitioning(true);
      if (containerRef.current) {
        containerRef.current.style.scrollBehavior = 'auto';
        containerRef.current.scrollTop = position;
        containerRef.current.style.scrollBehavior = 'smooth';
      }
      setTimeout(() => setIsTransitioning(false), 50);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [items.length, isTransitioning]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = (currentIndex + 1) * containerRef.current.clientHeight;
    }
  }, []);

  const handleItemClick = (index: number) => {
    setCurrentIndex(index);
    if (containerRef.current) {
      containerRef.current.scrollTop = (index + 1) * containerRef.current.clientHeight;
    }
  };

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.carouselContainer} ref={containerRef}>
        {clonedItems.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.carouselItem} ${index - 1 === currentIndex || (index === clonedItems.length - 1 && currentIndex === 0) || (index === 0 && currentIndex === items.length - 1) ? styles.active : ''}`}
            onClick={() => handleItemClick(index - 1 < 0 ? items.length - 1 : index - 1 >= items.length ? 0 : index - 1)}
          ><Image src={item.src} alt="Projects Screenshot" width={item.width} height={item.height} />
          </div>
        ))}
      </div>
      <div className={styles.projectTitles}>
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.projectTitle} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <h2>{item.title}</h2>
            <p>{item.category}</p>
            <p>{item.subtitle2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Projects;