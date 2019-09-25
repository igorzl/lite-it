import Sortable from 'sortablejs';

const initSortable = () => {
  const list = document.querySelector('#projects');
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 150,
    onMove: event => {
      console.log(event)
      console.log(list.size)
      const el = event.dragged.childNodes[1].children[0];

      // 1. check if moving up / or down (originalEvent.clientRect) if mouse is higher than prev position / lower
      // 2. if down (find NEXT sibling.. and change classes)
      // 3. if up (find PREV sibling.. and change classes)
      // projects.children[3].previousElementSibling (or check id of number)
      // el.style.transition = 'all 1s ease';


      if (el.classList.contains('project-card-left')) {

        el.classList.remove('project-card-left')
        el.classList.add('project-card-rt')
      } else {
        el.classList.add('project-card-left')
        el.classList.remove('project-card-rt')
      }
      // event.dragged.classList.add('')
    },
    onEnd: (event) => {
      let listItems = document.querySelectorAll(".list-unstyled")
      // console.log(listItems) // project id and position
      let order = {}
      Array.from(listItems).forEach(function(item, index) {
        return order[index] = item.id
      })
      console.log(order)
      console.log(listItems.count)
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
              <a class="card-link" href="/projects/${project.id}">
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
