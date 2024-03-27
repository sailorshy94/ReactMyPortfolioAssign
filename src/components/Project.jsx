import { AiFillGithub } from "react-icons/ai";

export default function Project({ projects }) {
    return (
        <div className="proj-group">
            {projects.map((project) => (
                <div className="proj-item" key={project.id} class="col-lg-6">
                    <img src={`${project.picture}`}></img>
                        <a href={`${project.repoLink}`} target="blank">
                            <AiFillGithub />
                        </a>
                </div>
            ))}
        </div>
    );
}