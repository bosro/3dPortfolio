import React from "react";
import TitleHeader from "../components/TitleHeader";
import { div } from "three/tsl";
import TechIcon from "../components/Models/TechLogo/TechIcon";

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Stack"
          sub="🤝 The Skills I bring to the Table"
        />

        <div className="tech-grid">
          {techStackIcons.map(() => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
                <div className="tech-card-animated-bg"/>
                <div className="tech-card-content">
                    <div className="tech-icon-wrapper">
                        <TechIcon model={icon}/>
                    </div>
                    <div className="padding-x w-full">
                       <p> {icon.name}</p>
                    </div>
                </div>
              {icon.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
