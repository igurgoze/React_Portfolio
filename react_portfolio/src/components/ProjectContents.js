
export default function ProjectContents(props) {
    return (
      <>
        {props.projects.map(item => (
          <div className="img-wrapper col-12 col-md-9">
            <h5 id="projectTitle">{item.name}</h5>
            <img class="p-2 blur" src={item.image} />
            <div class="content fade slide-up">
              <h6><b>{item.name}</b></h6>
              <p>{item.description}</p>
              <a href={item.deployedLink} target="_blank"><p>Deployed Application</p></a>
              <a href={item.githubLink} class="fa fa-github" target="_blank">Repo</a>
            </div>
          </div>
        ))}
      </>
    )
  }