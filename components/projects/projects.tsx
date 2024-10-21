import React, { useState, useRef, useEffect } from "react";
import styles from "./Projects.module.css";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Noatric",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fnoatric.vercel.app%2Fhome&screenshot=true&embed=screenshot.url",
    description: "Ecommerce Website",
  },
  {
    id: 2,
    title: "SkySense",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fjsndz.github.io%2FskysenseDeploy%2F&overlay.browser=dark&screenshot=true&embed=screenshot.url",
    description: "Weather Data",
  },
  {
    id: 3,
    title: "Ephemera",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fephemera-rho.vercel.app%2F&overlay.browser=dark&screenshot=true&embed=screenshot.url",
    description: "Secure Communication",
  },
  {
    id: 4,
    title: "Building a SQLite with C",
    image: "/assets/lang/CSS.svg",
    description: "Database Project",
  },
  {
    id: 5,
    title: "CLI_Template.js",
    image: "/assets/lang/CSS.svg",
    description: "Command Line Tool",
  },
  {
    id: 6,
    title: "PrimeBoard",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fprimeboard.vercel.app%2F&overlay.browser=dark&screenshot=true&embed=screenshot.url",
    description: "Product Leaderboard",
  },
  {
    id: 7,
    title: "Dept-Emp",
    image: "/assets/lang/CSS.svg",
    description: "DBMS Mini-Project",
  },
  {
    id: 8,
    title: "v4-Parking-Service",
    image: "/assets/lang/CSS.svg",
    description: "Smart Parking",
  },
  {
    id: 9,
    title: "SnapShort",
    image: "/assets/lang/CSS.svg",
    description: "URL Shortener",
  },
  {
    id: 10,
    title: "SnapStory",
    image: "/assets/lang/CSS.svg",
    description: "Short Blog Posts",
  },
  {
    id: 11,
    title: "Twitter backend clone",
    image: "/assets/lang/CSS.svg",
    description: "Social Media Backend",
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
            <img
              key={project.id}
              src={project.image}
              alt={project.title}
              className={`${styles.projectImage} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() =>
                index === currentIndex ? openModal() : handleImageClick(index)
              }
            />
          ))}
        </div>
      </div>
      {modalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{projects[currentIndex].title}</h2>
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
            />
            <p>{projects[currentIndex].description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
