import { AiFillGithub } from "react-icons/ai";



export default function Project({ projects }) {
    return (
        <div className="proj-group" class="row">
            {projects.map((project) => (
                <div className="proj-item" key={project.id} class="col-lg-6">
                    <a href={`${project.appLink}`} target="blank">
                        <img src={`${project.picture}`} style={{ width: "100%", height: "100%", paddingBottom: "40px"}}></img></a>
                    <p class="fs-3" style={{textAlign: "start", position: "relative", top: -80, backgroundColor: "gray", opacity: .8, paddingLeft: "2px" }}>{`${project.title}`}</p>
                    <a href={`${project.repoLink}`} class="fs-3" style={{textAlign: "start", position: "relative", top: -100}} target="blank">
                        <AiFillGithub />
                    </a>
                </div>
            ))}
        </div>
    );
}