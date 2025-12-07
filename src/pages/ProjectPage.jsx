import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import Carousel from "../components/carousel/Carousel";
import "./ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Proyecto no encontrado</h2>
        <p>El proyecto solicitado no existe.</p>
        <Link to="/">Volver a inicio</Link>
      </div>
    );
  }

  return (
    <main className="project-page" >
      <div className="project-header">
        <h1>{project.title}</h1>
        <p>{project.text}</p>
        <Link to="/#trabajos" className="back-link">← Volver a nuestros trabajos</Link>
      </div>

      <section className="project-carousel">
        <Carousel images={project.images} auto={false} />
      </section>
    </main>
  );
}
