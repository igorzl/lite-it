import Sortable from 'sortablejs';

const initSortable = () => {
  const list = document.querySelector('#projects');
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 150,
    // onEnd: (event) => {
      // fetch PATCH (`${event.oldIndex} moved to ${event.newIndex}`);
    // }
  });
};

export { initSortable };
