import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <picture>
          <source srcSet={imgUrl.replace('.png', '.webp')} type="image/webp" />
          <source srcSet={imgUrl.replace('.png', '.avif')} type="image/avif" />
          <img src={imgUrl} alt={title} />
        </picture>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </Col>
  )}