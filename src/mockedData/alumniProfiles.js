import anon from '../assets/anon.svg';

const alumniProfiles = {
  0: {
    id: 0,
    image: anon,
    name: {
      first: 'Test',
      last: 'User',
      preferred: 'Test',
    },
    links: {
      linkedIn: 'https://www.linkedin.com/',
      gitHub: 'https://github.com/',
      email: 'abc@def.com',
      website: {
        displayName: 'testuser.com',
        url: 'https://www.google.com/',
      },
    },
    quickFacts: {
      cohort: 'April 2018',
      company: 'A Great Place',
      role: 'Software Developer',
      location: 'New Orleans',
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh mauris cursus mattis. Elementum pulvinar etiam non quam lacus suspendisse. Justo nec ultrices dui sapien eget.\n
    Odio euismod lacinia at quis. Tellus cras adipiscing enim eu. Tortor dignissim convallis aenean et tortor at. Morbi tincidunt ornare massa eget egestas purus viverra.\n
    Ornare aenean euismod elementum nisi quis eleifend. Et netus et malesuada fames ac turpis egestas sed tempus. Est ultricies integer quis auctor elit sed. Tempor orci dapibus ultrices in iaculis nunc sed augue. Nunc non blandit massa enim nec dui nunc. Turpis tincidunt id aliquet risus feugiat in ante metus. Ullamcorper morbi tincidunt ornare massa.\n
    Nisl nunc mi ipsum faucibus vitae. Molestie at elementum eu facilisis sed odio. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Ultrices gravida dictum fusce ut placerat. Sit amet consectetur adipiscing elit. Sit amet est placerat in egestas erat imperdiet sed. Arcu risus quis varius quam quisque id diam vel. Feugiat nisl pretium fusce id velit ut tortor. Vestibulum lorem sed risus ultricies tristique nulla. Tellus elementum sagittis vitae et leo duis ut diam quam.\n
    Tempus egestas sed sed risus pretium quam. Malesuada fames ac turpis egestas integer eget aliquet nibh. Non curabitur gravida arcu ac tortor dignissim convallis.`,
  },
  1: {
    id: 1,
    image: anon,
    name: {
      first: 'Another',
      last: 'User',
      preferred: 'Another',
    },
    links: {
      linkedIn: 'https://www.linkedin.com/',
      gitHub: 'https://github.com/',
      email: 'abc@def.com',
      website: {
        displayName: 'anotheruser.com',
        url: 'https://www.google.com/',
      },
    },
    quickFacts: {
      cohort: 'January 2017',
      company: 'An Okay Place',
      role: 'Software Developer',
      location: 'New Orleans',
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh mauris cursus mattis. Elementum pulvinar etiam non quam lacus suspendisse. Justo nec ultrices dui sapien eget.\n
    Odio euismod lacinia at quis. Tellus cras adipiscing enim eu. Tortor dignissim convallis aenean et tortor at. Morbi tincidunt ornare massa eget egestas purus viverra.\n
    Ornare aenean euismod elementum nisi quis eleifend. Et netus et malesuada fames ac turpis egestas sed tempus. Est ultricies integer quis auctor elit sed. Tempor orci dapibus ultrices in iaculis nunc sed augue. Nunc non blandit massa enim nec dui nunc. Turpis tincidunt id aliquet risus feugiat in ante metus. Ullamcorper morbi tincidunt ornare massa.\n
    Nisl nunc mi ipsum faucibus vitae. Molestie at elementum eu facilisis sed odio. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Ultrices gravida dictum fusce ut placerat. Sit amet consectetur adipiscing elit. Sit amet est placerat in egestas erat imperdiet sed. Arcu risus quis varius quam quisque id diam vel. Feugiat nisl pretium fusce id velit ut tortor. Vestibulum lorem sed risus ultricies tristique nulla. Tellus elementum sagittis vitae et leo duis ut diam quam.\n
    Tempus egestas sed sed risus pretium quam. Malesuada fames ac turpis egestas integer eget aliquet nibh. Non curabitur gravida arcu ac tortor dignissim convallis.`,
  },
  2: {
    id: 2,
    image: anon,
    name: {
      first: 'Random',
      last: 'User',
      preferred: 'Random',
    },
    links: {
      linkedIn: 'https://www.linkedin.com/',
      gitHub: 'https://github.com/',
      email: 'abc@def.com',
      website: {
        displayName: 'randomuser.com',
        url: 'https://www.google.com/',
      },
    },
    quickFacts: {
      cohort: 'January 2018',
      company: 'That Place',
      role: 'Software Developer',
      location: 'New Orleans',
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh mauris cursus mattis. Elementum pulvinar etiam non quam lacus suspendisse. Justo nec ultrices dui sapien eget.\n
    Odio euismod lacinia at quis. Tellus cras adipiscing enim eu. Tortor dignissim convallis aenean et tortor at. Morbi tincidunt ornare massa eget egestas purus viverra.\n
    Ornare aenean euismod elementum nisi quis eleifend. Et netus et malesuada fames ac turpis egestas sed tempus. Est ultricies integer quis auctor elit sed. Tempor orci dapibus ultrices in iaculis nunc sed augue. Nunc non blandit massa enim nec dui nunc. Turpis tincidunt id aliquet risus feugiat in ante metus. Ullamcorper morbi tincidunt ornare massa.\n
    Nisl nunc mi ipsum faucibus vitae. Molestie at elementum eu facilisis sed odio. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Ultrices gravida dictum fusce ut placerat. Sit amet consectetur adipiscing elit. Sit amet est placerat in egestas erat imperdiet sed. Arcu risus quis varius quam quisque id diam vel. Feugiat nisl pretium fusce id velit ut tortor. Vestibulum lorem sed risus ultricies tristique nulla. Tellus elementum sagittis vitae et leo duis ut diam quam.\n
    Tempus egestas sed sed risus pretium quam. Malesuada fames ac turpis egestas integer eget aliquet nibh. Non curabitur gravida arcu ac tortor dignissim convallis.`,
  },
  3: {
    id: 3,
    image: anon,
    name: {
      first: 'Test',
      last: 'User',
      preferred: 'Test',
    },
    links: {
      linkedIn: 'https://www.linkedin.com/',
      gitHub: 'https://github.com/',
      email: 'abc@def.com',
      website: {
        displayName: 'testuser.com',
        url: 'https://www.google.com/',
      },
    },
    quickFacts: {
      cohort: 'April 2018',
      company: 'A Great Place',
      role: 'Software Developer',
      location: 'New Orleans',
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh mauris cursus mattis. Elementum pulvinar etiam non quam lacus suspendisse. Justo nec ultrices dui sapien eget.\n
    Odio euismod lacinia at quis. Tellus cras adipiscing enim eu. Tortor dignissim convallis aenean et tortor at. Morbi tincidunt ornare massa eget egestas purus viverra.\n
    Ornare aenean euismod elementum nisi quis eleifend. Et netus et malesuada fames ac turpis egestas sed tempus. Est ultricies integer quis auctor elit sed. Tempor orci dapibus ultrices in iaculis nunc sed augue. Nunc non blandit massa enim nec dui nunc. Turpis tincidunt id aliquet risus feugiat in ante metus. Ullamcorper morbi tincidunt ornare massa.\n
    Nisl nunc mi ipsum faucibus vitae. Molestie at elementum eu facilisis sed odio. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Ultrices gravida dictum fusce ut placerat. Sit amet consectetur adipiscing elit. Sit amet est placerat in egestas erat imperdiet sed. Arcu risus quis varius quam quisque id diam vel. Feugiat nisl pretium fusce id velit ut tortor. Vestibulum lorem sed risus ultricies tristique nulla. Tellus elementum sagittis vitae et leo duis ut diam quam.\n
    Tempus egestas sed sed risus pretium quam. Malesuada fames ac turpis egestas integer eget aliquet nibh. Non curabitur gravida arcu ac tortor dignissim convallis.`,
  },
  4: {
    id: 4,
    image: anon,
    name: {
      first: 'Test',
      last: 'User',
      preferred: 'Test',
    },
    links: {
      linkedIn: 'https://www.linkedin.com/',
      gitHub: 'https://github.com/',
      email: 'abc@def.com',
      website: {
        displayName: 'testuser.com',
        url: 'https://www.google.com/',
      },
    },
    quickFacts: {
      cohort: 'April 2018',
      company: 'A Great Place',
      role: 'Software Developer',
      location: 'New Orleans',
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh mauris cursus mattis. Elementum pulvinar etiam non quam lacus suspendisse. Justo nec ultrices dui sapien eget.\n
    Odio euismod lacinia at quis. Tellus cras adipiscing enim eu. Tortor dignissim convallis aenean et tortor at. Morbi tincidunt ornare massa eget egestas purus viverra.\n
    Ornare aenean euismod elementum nisi quis eleifend. Et netus et malesuada fames ac turpis egestas sed tempus. Est ultricies integer quis auctor elit sed. Tempor orci dapibus ultrices in iaculis nunc sed augue. Nunc non blandit massa enim nec dui nunc. Turpis tincidunt id aliquet risus feugiat in ante metus. Ullamcorper morbi tincidunt ornare massa.\n
    Nisl nunc mi ipsum faucibus vitae. Molestie at elementum eu facilisis sed odio. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Ultrices gravida dictum fusce ut placerat. Sit amet consectetur adipiscing elit. Sit amet est placerat in egestas erat imperdiet sed. Arcu risus quis varius quam quisque id diam vel. Feugiat nisl pretium fusce id velit ut tortor. Vestibulum lorem sed risus ultricies tristique nulla. Tellus elementum sagittis vitae et leo duis ut diam quam.\n
    Tempus egestas sed sed risus pretium quam. Malesuada fames ac turpis egestas integer eget aliquet nibh. Non curabitur gravida arcu ac tortor dignissim convallis.`,
  },
  5: {
    id: 5,
    image: anon,
    name: {
      first: 'Test',
      last: 'User',
      preferred: 'Test',
    },
    links: {
      linkedIn: 'https://www.linkedin.com/',
      gitHub: 'https://github.com/',
      email: 'abc@def.com',
      website: {
        displayName: 'testuser.com',
        url: 'https://www.google.com/',
      },
    },
    quickFacts: {
      cohort: 'April 2018',
      company: 'A Great Place',
      role: 'Software Developer',
      location: 'New Orleans',
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh mauris cursus mattis. Elementum pulvinar etiam non quam lacus suspendisse. Justo nec ultrices dui sapien eget.\n
    Odio euismod lacinia at quis. Tellus cras adipiscing enim eu. Tortor dignissim convallis aenean et tortor at. Morbi tincidunt ornare massa eget egestas purus viverra.\n
    Ornare aenean euismod elementum nisi quis eleifend. Et netus et malesuada fames ac turpis egestas sed tempus. Est ultricies integer quis auctor elit sed. Tempor orci dapibus ultrices in iaculis nunc sed augue. Nunc non blandit massa enim nec dui nunc. Turpis tincidunt id aliquet risus feugiat in ante metus. Ullamcorper morbi tincidunt ornare massa.\n
    Nisl nunc mi ipsum faucibus vitae. Molestie at elementum eu facilisis sed odio. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Ultrices gravida dictum fusce ut placerat. Sit amet consectetur adipiscing elit. Sit amet est placerat in egestas erat imperdiet sed. Arcu risus quis varius quam quisque id diam vel. Feugiat nisl pretium fusce id velit ut tortor. Vestibulum lorem sed risus ultricies tristique nulla. Tellus elementum sagittis vitae et leo duis ut diam quam.\n
    Tempus egestas sed sed risus pretium quam. Malesuada fames ac turpis egestas integer eget aliquet nibh. Non curabitur gravida arcu ac tortor dignissim convallis.`,
  },
  6: {
    id: 6,
    image: anon,
    name: {
      first: 'Test',
      last: 'User',
      preferred: 'Test',
    },
    links: {
      linkedIn: 'https://www.linkedin.com/',
      gitHub: 'https://github.com/',
      email: 'abc@def.com',
      website: {
        displayName: 'testuser.com',
        url: 'https://www.google.com/',
      },
    },
    quickFacts: {
      cohort: 'April 2018',
      company: 'A Great Place',
      role: 'Software Developer',
      location: 'New Orleans',
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh mauris cursus mattis. Elementum pulvinar etiam non quam lacus suspendisse. Justo nec ultrices dui sapien eget.\n
    Odio euismod lacinia at quis. Tellus cras adipiscing enim eu. Tortor dignissim convallis aenean et tortor at. Morbi tincidunt ornare massa eget egestas purus viverra.\n
    Ornare aenean euismod elementum nisi quis eleifend. Et netus et malesuada fames ac turpis egestas sed tempus. Est ultricies integer quis auctor elit sed. Tempor orci dapibus ultrices in iaculis nunc sed augue. Nunc non blandit massa enim nec dui nunc. Turpis tincidunt id aliquet risus feugiat in ante metus. Ullamcorper morbi tincidunt ornare massa.\n
    Nisl nunc mi ipsum faucibus vitae. Molestie at elementum eu facilisis sed odio. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Ultrices gravida dictum fusce ut placerat. Sit amet consectetur adipiscing elit. Sit amet est placerat in egestas erat imperdiet sed. Arcu risus quis varius quam quisque id diam vel. Feugiat nisl pretium fusce id velit ut tortor. Vestibulum lorem sed risus ultricies tristique nulla. Tellus elementum sagittis vitae et leo duis ut diam quam.\n
    Tempus egestas sed sed risus pretium quam. Malesuada fames ac turpis egestas integer eget aliquet nibh. Non curabitur gravida arcu ac tortor dignissim convallis.`,
  },
  7: {
    id: 7,
    image: anon,
    name: {
      first: 'Test',
      last: 'User',
      preferred: 'Test',
    },
    links: {
      linkedIn: 'https://www.linkedin.com/',
      gitHub: 'https://github.com/',
      email: 'abc@def.com',
      website: {
        displayName: 'testuser.com',
        url: 'https://www.google.com/',
      },
    },
    quickFacts: {
      cohort: 'April 2018',
      company: 'A Great Place',
      role: 'Software Developer',
      location: 'New Orleans',
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh mauris cursus mattis. Elementum pulvinar etiam non quam lacus suspendisse. Justo nec ultrices dui sapien eget.\n
    Odio euismod lacinia at quis. Tellus cras adipiscing enim eu. Tortor dignissim convallis aenean et tortor at. Morbi tincidunt ornare massa eget egestas purus viverra.\n
    Ornare aenean euismod elementum nisi quis eleifend. Et netus et malesuada fames ac turpis egestas sed tempus. Est ultricies integer quis auctor elit sed. Tempor orci dapibus ultrices in iaculis nunc sed augue. Nunc non blandit massa enim nec dui nunc. Turpis tincidunt id aliquet risus feugiat in ante metus. Ullamcorper morbi tincidunt ornare massa.\n
    Nisl nunc mi ipsum faucibus vitae. Molestie at elementum eu facilisis sed odio. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Ultrices gravida dictum fusce ut placerat. Sit amet consectetur adipiscing elit. Sit amet est placerat in egestas erat imperdiet sed. Arcu risus quis varius quam quisque id diam vel. Feugiat nisl pretium fusce id velit ut tortor. Vestibulum lorem sed risus ultricies tristique nulla. Tellus elementum sagittis vitae et leo duis ut diam quam.\n
    Tempus egestas sed sed risus pretium quam. Malesuada fames ac turpis egestas integer eget aliquet nibh. Non curabitur gravida arcu ac tortor dignissim convallis.`,
  },
  8: {
    id: 8,
    image: anon,
    name: {
      first: 'Test',
      last: 'User',
      preferred: 'Test',
    },
    links: {
      linkedIn: 'https://www.linkedin.com/',
      gitHub: 'https://github.com/',
      email: 'abc@def.com',
      website: {
        displayName: 'testuser.com',
        url: 'https://www.google.com/',
      },
    },
    quickFacts: {
      cohort: 'April 2018',
      company: 'A Great Place',
      role: 'Software Developer',
      location: 'New Orleans',
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh mauris cursus mattis. Elementum pulvinar etiam non quam lacus suspendisse. Justo nec ultrices dui sapien eget.\n
    Odio euismod lacinia at quis. Tellus cras adipiscing enim eu. Tortor dignissim convallis aenean et tortor at. Morbi tincidunt ornare massa eget egestas purus viverra.\n
    Ornare aenean euismod elementum nisi quis eleifend. Et netus et malesuada fames ac turpis egestas sed tempus. Est ultricies integer quis auctor elit sed. Tempor orci dapibus ultrices in iaculis nunc sed augue. Nunc non blandit massa enim nec dui nunc. Turpis tincidunt id aliquet risus feugiat in ante metus. Ullamcorper morbi tincidunt ornare massa.\n
    Nisl nunc mi ipsum faucibus vitae. Molestie at elementum eu facilisis sed odio. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Ultrices gravida dictum fusce ut placerat. Sit amet consectetur adipiscing elit. Sit amet est placerat in egestas erat imperdiet sed. Arcu risus quis varius quam quisque id diam vel. Feugiat nisl pretium fusce id velit ut tortor. Vestibulum lorem sed risus ultricies tristique nulla. Tellus elementum sagittis vitae et leo duis ut diam quam.\n
    Tempus egestas sed sed risus pretium quam. Malesuada fames ac turpis egestas integer eget aliquet nibh. Non curabitur gravida arcu ac tortor dignissim convallis.`,
  },
};

export default alumniProfiles;
