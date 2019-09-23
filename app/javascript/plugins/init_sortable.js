import Sortable from 'sortablejs';

const initSortable = () => {
  const list = document.querySelector('#projects');
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 150,
    onEnd: (event) => {
      let listItems = document.querySelectorAll(".list-unstyled")
      // console.log(listItems) // project id and position
      let order = {}
      Array.from(listItems).forEach(function(item, index) {
        return order[index] = item.id
      })
      console.log(order)
      fetch("projects/sort", {
        method: "PATCH",
        dataType: 'script',
        credentials: 'include',
        headers: {
          // pass same origin source
          "Content_Type": "application/json",
          "Accept": "text/javascript",
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-Token': getMetaValue('csrf-token'),
        },
        body: JSON.stringify({order: order})
      })
      .then(res => res.json())
      .then(data => {
        const projects = [...data];
        console.log(projects)
        let projectsHtml = '';
        const projectsList = document.querySelector('#projects');
        projects.forEach((project, index) => {
          const projectTemplate =
          `<li class="list-unstyled" id="${project.id}">
              <a class="card-link" id="project_81" href="/projects/81">
                <div class="project-card ${index % 2 !== 0 && 'project-card-left'}">
                  <div class="project-title ${ index % 2 !== 0 ? 'project-title-left' :'project-title-rt' } " >
                    ${project.name}
                  </div>
                    <div class="img">
                      <img src="${project.image && project.image.url}">
                  </div>
                </div>
              </a>
            </li>`
          projectsHtml += projectTemplate;
        })
        console.log(projectsHtml)
        projectsList.innerHTML = projectsHtml

      });
    }
  });
};



function getMetaValue(name) {
    const element = document.head.querySelector(`meta[name="${name}"]`);
    return element.getAttribute('content');
}

export { initSortable };
