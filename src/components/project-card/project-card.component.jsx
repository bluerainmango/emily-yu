import React from "react";
import { Card, Icon, CardTitle, Col } from "react-materialize";

export const ProjectCard = ({ proj }) => {
  return (
    <Col key={123}>
      <Card
        actions={[
          <a
            key={proj.linkDeploy}
            href={proj.linkDeploy}
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed version
          </a>,
          <a
            key={proj.linkRepo}
            href={proj.linkRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Git repo
          </a>
        ]}
        closeIcon={<Icon>close</Icon>}
        header={<CardTitle image={proj.image}></CardTitle>}
        revealIcon={<Icon>more_vert</Icon>}
      >
        <div className="card-header">
          <h4>{proj.title}</h4>
          <span className="card-header--team">{proj.type} Proj</span>
        </div>
        <p className="role line-height-m red-text text-darken-4">{proj.role}</p>
        <p>{proj.description}</p>
        <div className="card-tag">
          {proj.tech.map(skill => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </Card>
    </Col>
  );
};
