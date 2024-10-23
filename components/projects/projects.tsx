import React, { useState, useRef, useEffect } from "react";
import styles from "./Projects.module.css";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  src: string;
  description: string;
  width: number;
  height: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Noatric",
    src: "https://api.microlink.io/?url=https%3A%2F%2Fnoatric.vercel.app%2Fhome&screenshot=true&embed=screenshot.url",
    description: "Ecommerce Website",
    width: 1000,
    height: 1000,
  },
  {
    id: 2,
    title: "SkySense",
    src: "https://api.microlink.io/?url=https%3A%2F%2Fjsndz.github.io%2FskysenseDeploy%2F&overlay.browser=dark&screenshot=true&embed=screenshot.url",
    description: "Weather Data",
    width: 1000,
    height: 1000,
  },
  {
    id: 3,
    title: "Ephemera",
    src: "https://api.microlink.io/?url=https%3A%2F%2Fephemera-rho.vercel.app%2F&overlay.browser=dark&screenshot=true&embed=screenshot.url",
    description: "Secure Communication",
    width: 1000,
    height: 1000,
  },
  {
    id: 4,
    title: "Building a SQLite with C",
    src: "/assets/lang/CSS.svg",
    description: "Database Project",
    width: 1000,
    height: 1000,
  },
  {
    id: 5,
    title: "CLI_Template.js",
    src: "/assets/lang/CSS.svg",
    description: "Command Line Tool",
    width: 1000,
    height: 1000,
  },
  {
    id: 6,
    title: "PrimeBoard",
    src: "https://api.microlink.io/?url=https%3A%2F%2Fprimeboard.vercel.app%2F&overlay.browser=dark&screenshot=true&embed=screenshot.url",
    description: "Product Leaderboard",
    width: 1000,
    height: 1000,
  },
  {
    id: 7,
    title: "Dept-Emp",
    src: "/assets/lang/CSS.svg",
    description: "DBMS Mini-Project",
    width: 1000,
    height: 1000,
  },
  {
    id: 8,
    title: "v4-Parking-Service",
    src: "/assets/lang/CSS.svg",
    description: "Smart Parking",
    width: 1000,
    height: 1000,
  },
  {
    id: 9,
    title: "SnapShort",
    src: "/assets/lang/CSS.svg",
    description: "URL Shortener",
    width: 1000,
    height: 1000,
  },
  {
    id: 10,
    title: "SnapStory",
    src: "/assets/lang/CSS.svg",
    description: "Short Blog Posts",
    width: 1000,
    height: 1000,
  },
  {
    id: 11,
    title: "Twitter backend clone",
    src: "/assets/lang/CSS.svg",
    description: "Social Media Backend",
    width: 1000,
    height: 1000,
  },
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollTop;
        const imageHeight = scrollRef.current.clientHeight;
        const newIndex =
          Math.round(scrollPosition / imageHeight) % projects.length;
        setCurrentIndex(newIndex);
      }
    };

    scrollRef.current?.addEventListener("scroll", handleScroll);
    return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      scrollRef.current.scrollTop = index * scrollRef.current.clientHeight;
    }
  };

  const handleTitleClick = (direction: "prev" | "next") => {
    const newIndex =
      (currentIndex + (direction === "next" ? 1 : -1) + projects.length) %
      projects.length;
    setCurrentIndex(newIndex);
    if (scrollRef.current) {
      scrollRef.current.scrollTop = newIndex * scrollRef.current.clientHeight;
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.projectsWrapper}>
        <div className={styles.titleContainer}>
          <button
            onClick={() => handleTitleClick("prev")}
            className={styles.titleButton}
          >
            {
              projects[(currentIndex - 1 + projects.length) % projects.length]
                .title
            }
          </button>
          <h2 className={styles.currentTitle}>
            {projects[currentIndex].title}
          </h2>
          <button
            onClick={() => handleTitleClick("next")}
            className={styles.titleButton}
          >
            {projects[(currentIndex + 1) % projects.length].title}
          </button>
        </div>
        <div className={styles.imageContainer} ref={scrollRef}>
          {projects.map((project, index) => (
            <Image
              key={project.id}
              src={project.src}
              alt={project.title}
              className={`${styles.projectImage} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() =>
                index === currentIndex ? openModal() : handleImageClick(index)
              }
              width={project.width}
              height={project.height}
            />
          ))}
        </div>
      </div>
      {modalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{projects[currentIndex].title}</h2>
            <Image
              src={projects[currentIndex].src}
              alt={projects[currentIndex].title}
              width={100}
              height={100}
            />
            <p>{projects[currentIndex].description}</p>
            <button className="text-black" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
