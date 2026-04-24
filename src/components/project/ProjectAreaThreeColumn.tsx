import ProjectThreeColumnCard from "./subComponents/ProjectThreeColumnCard";
import { TextArrowIcon } from "@/svg/ArrowIcon";
import projectData from "@/data/projectData";
import Link from "next/link";

const ProjectAreaThreeColumn = () => {
    const displayProjects = projectData.slice(61, 70); // Number of projects to display

    return (
        <div className="tp-project-area inner-portfolio-2-style pb-155 fix">
            <div className="container container-1510">
                <div className="row">
                    {
                        displayProjects.map((project) => (
                            <ProjectThreeColumnCard
                                key={project.id}
                                {...project}
                            />
                        ))
                    }
                    <div className="col-xl-12">
                        <div className="tp-portfolio-btn pt-30 text-center tp-fade-anim" data-delay=".3" data-ease="bounce" data-fade-from="top" data-duration="1.2">
                            <Link className="tp-btn-circle tp-hover-btn-item tp-hover-btn" href="/project-three-colum">
                                <span>
                                    <TextArrowIcon />
                                </span>
                                Load More
                                <div className="tp-btn-circle-dot"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectAreaThreeColumn;