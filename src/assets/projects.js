const projects = [
  {
    id: 1,
    title: 'MNHS LMS',
    description: 'A Learning Management System (LMS) proposed for a local high school in Mexico, Pampanga.',
    description2: 'Node.js, Express.js, PostgreSQL',
    description3: 'A Learning Management System (LMS) proposed for a local high school in Mexico, Pampanga. It aims to simplify educational management with features like user registration and login, dashboards, and administrative controls.',
    image: '/images/mnhs-login.jpeg',
    links: [
      'https://mnhs-lms.onrender.com/login',
      'https://github.com/ru-wel/mnhs-lms-mern',
    ],
    roles: ['Backend', 'Client'],
    logo: '/images/wel-logo-final.png',
    screenshots: [
      '/images/mnhs-dashboard.png',
      '/images/mnhs-admin-users.jpeg',
      '/images/mnhs-admin-modules.jpeg',
    ],
    features: [
      'Student Dashboard',
      'Admin Dashboard (Users)',
      'Admin Dashboard (Modules)',
    ],
    featureDescription: [
      "Created the backend for the LMS' student dashboard to display all the subjects of the student, and view uploaded modules.",
      'Created the backend for the admin dashboard that allows administrators to manage user accounts with full CRUD functionality—while also granting admin privileges when needed.',
      'Created the backend for the admin dashboard, enabling administrators to manage modules—allowing them to upload, update, and delete uploaded modules.',
    ],
  },
  {
    id: 2,
    title: 'Caution Coffee',
    description: 'A website created to showcase Caution Coffee, a cafe and premium supply store located in Angeles City, Philippines',
    description2: 'EJS, Node.js, Express.js, Firebase',
    description3: "Caution Coffee and Supply™ is a café and premium supply store located in Angeles City, Pampanga. This website aims to showcase the shop's offerings while improving it's online presence and visibility.",
    image: '/images/caution-home.png',
    links: [
      'https://caution-coffee.onrender.com/',
      'https://github.com/ru-wel/CAUTION-COFFEE',
    ],
    roles: ['Backend', 'School / Client'],
    logo: '/images/wel-logo-final.png',
    screenshots: [
      '/images/caution-login.png',
      '/images/caution-cart.png',
      '/images/caution-reviews.png',
    ],
    features: [
      'Login & Signup with Firebase Authentication',
      'Shopping Cart',
      'Reviews Page',
    ],
    featureDescription: [
      'Utilized Firebase Authentication to handle user sessions, and to allow users to signup and login.',
      "Created a user-friendly shopping cart that allows customers to add, remove, and update items from the coffee shop's offerings.",
      'Created an interactive reviews page where customers can share their thoughts and experiences about the coffee shop and are displayed in the website.',
    ],
  },
  {
    id: 3,
    title: 'AREA: Your Home Away From Home',
    description: 'AREA is a website that focuses on travel and lifestyle where we offer a fictional Airbnb-inspired service and layout.',
    description2: 'HTML, CSS, JS, PHP, MySQL, Bootstrap',
    description3: 'AREA is a website that focuses on travel and lifestyle where we offer a fictional Airbnb-inspired service. The website shows a range of options for travelers alike offering them places they can choose to stay in which they can rent.',
    image: '/images/area-home.png',
    links: [
      'https://areahomes.hstn.me/',
      'https://github.com/ru-wel/AREA-DWEBIMAN',
    ],
    roles: ['Fullstack', 'School'],
    logo: '/images/wel-logo-final.png',
    screenshots: [
      '/images/area-one-rental.png',
      '/images/area-book.png',
      '/images/area-dashboard-properties2.png',
    ],
    features: [
      'Property Listing Page',
      'Booking Page',
      'Admin Dashboard',
    ],
    featureDescription: [
      'Designed and developed the frontend backend for the property listing page, allowing users to browse property information such as images, pricing, location, and key features.',
      'Created the backend for the booking page that allows users to reserve the selected property, and manages bookings, availability, and confirmation details.',
      'Created the admin dashboard with full CRUD functionality, enabling administrators to manage property listings. Additionally, the list of users and properties are shown as well.',
    ],
  },
  {
    id: 4,
    title: 'PRGM Cheatsheets',
    description: 'My personal WordPress site consisting of Web Development related blogs that aim to provide a resource for starting developers.',
    description2: 'WordPress',
    description3: 'PRGM is my personal blog, and consists of web development cheatsheets. Moreover, I created the blog to help learners and developers (such as myself) to save time and effort by providing a reference that aids in understanding and implementing basic web development techniques.',
    image: '/images/prgm-home.png',
    links: [
      'https://prgmm.WordPress.com/',
    ],
    roles: ['WordPress', 'School'],
    logo: '/images/wel-logo-final.png',
    screenshots: [
      '/images/prgm-git.png',
      '/images/prgm-sql.png',
      '/images/prgm-js.png',
    ],
    features: [
      'Git & GitHub Cheatsheet',
      'SQL Cheatsheet',
      'JavaScript Cheatsheet',
    ],
    featureDescription: [
      '',
      '',
      '',
    ],
  },
  {
    id: 5,
    title: 'Baumann Fit Box',
    description: 'A WordPress site for Baumann Fit Box, a premium gym located in Tagaytay City, Philippines.',
    description2: 'WordPress',
    description3: "This WordPress site for Baumann Fit Box aims to enhance the SEO and boost the online visibility of the said gym. Furthermore, it aligns with the client's instruction to be designed to attract potential members, showcase gym facilities, coaching programs, and client testimonials while optimizing search rankings to drive more site traffic.",
    image: '/images/baumann-home.png',
    links: [
      'https://baumannfitbox.site/',
    ],
    roles: ['WordPress', 'School / Client'],
    logo: '/images/wel-logo-final.png',
    screenshots: [
      '/images/baumann-about.png',
      '/images/baumann-services.png',
      '/images/baumann-blog.png',
    ],
    features: [
      'About Page',
      'Services Page',
      'Blog Page',
    ],
    featureDescription: [
      '',
      '',
      '',
    ],
  },
  {
    id: 6,
    title: 'Project in Progress',
    description: '',
    description2: 'WordPress',
    description3: "",
    image: '',
    links: [
      '',
    ],
    roles: ['WordPress', 'Client'],
    logo: '/images/wel-logo-final.png',
    screenshots: [
      '',
    ],
    features: [
      '',
      '',
      '',
    ],
    featureDescription: [
      '',
      '',
      '',
    ],
  },
];

export default projects;