export default function Project({ projects }) {
    return (
        projects.forEach(project => {
            <div class="col-lg-6">
                <img className="proj" key={project.id} src={project.picture}>{project.title}</img>
                <p>{project.desc}</p>
            </div>
        })
    )}
    // projects.map((project)) => (

    // )
            // <>
            // <img src={project.picture}>{project.title}</img>
            // <p>{project.description}</p>
            // </>
//         );
//     };
// }   