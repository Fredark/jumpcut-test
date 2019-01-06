const uuidv1 = require('uuid');

uuidv1.v1();

export const dataMenu = {
  menu: [
    {
      key: uuidv1(),
      link: "#",
      title: "Community",
      active: false
    },
    {
      key: uuidv1(),
      link: "#",
      title: "My Courses",
      active: false
    },
    {
      key: uuidv1(),
      link: "#",
      title: "Video Review",
      active: false
    },
    {
      key: uuidv1(),
      link: "#",
      title: "Bootcamp",
      active: false
    },
    {
      key: uuidv1(),
      link: "#",
      title: "Collaborate",
      active: true
    }
  ]
};
