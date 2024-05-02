'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('TypeVacancies', [
        { id: 1, name_vacancy_type: 'Frontend Developer', description_vacancy_type: 'A developer who specializes in the front-end of websites and web applications.', status_vacancy_type: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 2, name_vacancy_type: 'Backend Developer', description_vacancy_type: 'A developer who specializes in the back-end of websites and web applications.', status_vacancy_type: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        { id: 3, name_vacancy_type: 'Fullstack Developer', description_vacancy_type: 'A developer who specializes in both the front-end and back-end of websites and web applications.', status_vacancy_type: true, createdAt: '2025-03-11 00:00:00.000', updatedAt: '2025-03-11 00:00:00.000' },
        {
          id: 4,
          name_vacancy_type: 'Mobile App Developer',
          description_vacancy_type: 'A developer specializing in mobile application development for iOS and Android platforms.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 5,
          name_vacancy_type: 'Software Engineer',
          description_vacancy_type: 'An engineer involved in the design, development, and maintenance of software applications and systems.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 6,
          name_vacancy_type: 'Data Scientist',
          description_vacancy_type: 'A professional specialized in analyzing and interpreting complex data to inform business decisions.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 7,
          name_vacancy_type: 'Product Manager',
          description_vacancy_type: 'A manager responsible for overseeing the development and launch of new products or services.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 8,
          name_vacancy_type: 'UX/UI Designer',
          description_vacancy_type: 'A designer focused on creating user-friendly interfaces and experiences for digital products.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 9,
          name_vacancy_type: 'Network Engineer',
          description_vacancy_type: 'An engineer specializing in the design, implementation, and maintenance of computer networks.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 10,
          name_vacancy_type: 'DevOps Engineer',
          description_vacancy_type: 'An engineer responsible for the development, deployment, and maintenance of IT infrastructure and systems.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 11,
          name_vacancy_type: 'Cybersecurity Analyst',
          description_vacancy_type: 'An analyst focused on identifying and mitigating security risks in computer systems and networks.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 12,
          name_vacancy_type: 'Machine Learning Engineer',
          description_vacancy_type: 'An engineer specializing in developing machine learning algorithms and models for data analysis and prediction.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 13,
          name_vacancy_type: 'Cloud Solutions Architect',
          description_vacancy_type: 'An architect responsible for designing and implementing cloud-based solutions for organizations.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 14,
          name_vacancy_type: 'IT Project Manager',
          description_vacancy_type: 'A manager overseeing IT projects, including planning, execution, and delivery within budget and schedule constraints.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 15,
          name_vacancy_type: 'Database Administrator',
          description_vacancy_type: 'An administrator responsible for managing and optimizing database systems, ensuring data integrity and availability.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 16,
          name_vacancy_type: 'Technical Support Specialist',
          description_vacancy_type: 'A specialist providing technical assistance and support to end-users for hardware, software, and network issues.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 17,
          name_vacancy_type: 'QA Automation Engineer',
          description_vacancy_type: 'An engineer responsible for developing and implementing automated testing processes to ensure software quality and reliability.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 18,
          name_vacancy_type: 'Technical Writer',
          description_vacancy_type: 'A writer specializing in creating technical documentation, manuals, and guides for software and IT systems.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 19,
          name_vacancy_type: 'Technical Sales Engineer',
          description_vacancy_type: 'An engineer with technical expertise who assists in sales processes by providing technical support and solutions to customers.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 20,
          name_vacancy_type: 'IT Consultant',
          description_vacancy_type: 'A consultant offering expertise and advice on IT strategies, solutions, and implementations to organizations.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 21,
          name_vacancy_type: 'Business Analyst',
          description_vacancy_type: 'An analyst responsible for analyzing business processes, identifying needs, and proposing solutions using IT resources.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 22,
          name_vacancy_type: 'Digital Marketing Specialist',
          description_vacancy_type: 'A specialist focused on planning and executing digital marketing campaigns, strategies, and initiatives.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 23,
          name_vacancy_type: 'IT Security Specialist',
          description_vacancy_type: 'A specialist responsible for implementing and maintaining security measures to protect IT systems and data.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 24,
          name_vacancy_type: 'Business Intelligence Analyst',
          description_vacancy_type: 'An analyst specializing in analyzing data to provide insights and support decision-making processes within an organization.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 25,
          name_vacancy_type: 'E-commerce Manager',
          description_vacancy_type: 'A manager overseeing the development and management of e-commerce platforms and strategies for online sales.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 26,
          name_vacancy_type: 'IT Trainer',
          description_vacancy_type: 'A trainer responsible for providing IT training and education to employees and clients to enhance skills and knowledge.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 27,
          name_vacancy_type: 'System Administrator',
          description_vacancy_type: 'An administrator managing and maintaining computer systems, networks, and servers for optimal performance and reliability.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 28,
          name_vacancy_type: 'Web Content Manager',
          description_vacancy_type: 'A manager responsible for creating, organizing, and updating content on websites to ensure relevance and effectiveness.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 29,
          name_vacancy_type: 'AI Engineer',
          description_vacancy_type: 'An engineer specializing in developing and implementing artificial intelligence algorithms and systems for various applications.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 30,
          name_vacancy_type: 'Blockchain Developer',
          description_vacancy_type: 'A developer focusing on designing, implementing, and maintaining blockchain-based solutions and applications.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 31,
          name_vacancy_type: 'IT Risk Manager',
          description_vacancy_type: 'A manager overseeing risk assessment and management processes related to IT systems and cybersecurity.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 32,
          name_vacancy_type: 'Software Quality Assurance Analyst',
          description_vacancy_type: 'An analyst responsible for testing software applications to ensure quality, reliability, and adherence to specifications.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 33,
          name_vacancy_type: 'Medical Doctor (General Practitioner)',
          description_vacancy_type: 'A doctor specializing in general medicine, providing primary healthcare services to patients of all ages.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 34,
          name_vacancy_type: 'Pediatrician',
          description_vacancy_type: 'A doctor specializing in the medical care of infants, children, and adolescents.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 35,
          name_vacancy_type: 'Surgeon',
          description_vacancy_type: 'A doctor specializing in surgical procedures to treat injuries, diseases, and conditions.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 36,
          name_vacancy_type: 'Anesthesiologist',
          description_vacancy_type: 'A doctor specializing in administering anesthesia and managing pain during surgical procedures.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 37,
          name_vacancy_type: 'Cardiologist',
          description_vacancy_type: 'A doctor specializing in diagnosing and treating heart diseases and conditions.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 38,
          name_vacancy_type: 'Dermatologist',
          description_vacancy_type: 'A doctor specializing in diagnosing and treating skin diseases and conditions.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 39,
          name_vacancy_type: 'Ophthalmologist',
          description_vacancy_type: 'A doctor specializing in diagnosing and treating eye diseases and conditions.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 40,
          name_vacancy_type: 'Psychiatrist',
          description_vacancy_type: 'A doctor specializing in diagnosing and treating mental health disorders and conditions.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 41,
          name_vacancy_type: 'Orthopedic Surgeon',
          description_vacancy_type: 'A surgeon specializing in diagnosing and treating musculoskeletal injuries, diseases, and conditions.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 42,
          name_vacancy_type: 'Gynecologist',
          description_vacancy_type: 'A doctor specializing in women\'s reproductive health, including pregnancy, childbirth, and fertility issues.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 43,
          name_vacancy_type: 'Urologist',
          description_vacancy_type: 'A doctor specializing in diagnosing and treating urinary tract and male reproductive system disorders.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 44,
          name_vacancy_type: 'Radiologist',
          description_vacancy_type: 'A doctor specializing in interpreting medical images (e.g., X-rays, CT scans) to diagnose and treat diseases.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 45,
          name_vacancy_type: 'Neurologist',
          description_vacancy_type: 'A doctor specializing in diagnosing and treating disorders of the nervous system, including the brain and spinal cord.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 46,
          name_vacancy_type: 'Pulmonologist',
          description_vacancy_type: 'A doctor specializing in diagnosing and treating respiratory diseases and conditions, including asthma and COPD.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 47,
          name_vacancy_type: 'Construction Project Manager',
          description_vacancy_type: 'A manager overseeing construction projects, including planning, budgeting, scheduling, and coordination of resources.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 48,
          name_vacancy_type: 'Civil Engineer',
          description_vacancy_type: 'An engineer specializing in the design, construction, and maintenance of infrastructure projects such as roads, bridges, and buildings.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 49,
          name_vacancy_type: 'Architect',
          description_vacancy_type: 'A professional designing and planning the layout, structure, and aesthetics of buildings and other structures.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 50,
          name_vacancy_type: 'Construction Foreman',
          description_vacancy_type: 'A supervisor overseeing construction activities, managing crews, and ensuring compliance with safety and quality standards.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 51,
          name_vacancy_type: 'Building Inspector',
          description_vacancy_type: 'An inspector responsible for assessing and ensuring compliance with building codes, regulations, and standards.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 52,
          name_vacancy_type: 'Construction Estimator',
          description_vacancy_type: 'An estimator calculating project costs, including materials, labor, equipment, and other expenses, to prepare accurate bids.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 53,
          name_vacancy_type: 'Heavy Equipment Operator',
          description_vacancy_type: 'An operator handling and maneuvering heavy equipment and machinery on construction sites, such as excavators and bulldozers.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 54,
          name_vacancy_type: 'Construction Carpenter',
          description_vacancy_type: 'A skilled tradesperson constructing and installing wooden structures, fixtures, and finishes in buildings.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 55,
          name_vacancy_type: 'Electrician',
          description_vacancy_type: 'A tradesperson specializing in electrical wiring, installation, and maintenance in residential, commercial, and industrial settings.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 56,
          name_vacancy_type: 'Plumber',
          description_vacancy_type: 'A tradesperson specializing in installing and maintaining plumbing systems and fixtures in buildings and infrastructure.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 57,
          name_vacancy_type: 'Construction Laborer',
          description_vacancy_type: 'A general laborer performing various tasks on construction sites, including carrying materials, digging, and assisting tradespeople.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 58,
          name_vacancy_type: 'Concrete Finisher',
          description_vacancy_type: 'A skilled worker responsible for pouring, leveling, and finishing concrete surfaces on construction projects.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 59,
          name_vacancy_type: 'Construction Safety Officer',
          description_vacancy_type: 'An officer ensuring safety protocols are followed on construction sites, conducting inspections, and addressing safety concerns.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        }, {
          id: 60,
          name_vacancy_type: 'Human Resources Manager',
          description_vacancy_type: 'A manager overseeing all aspects of human resources, including recruitment, training, employee relations, and compliance with labor laws.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 61,
          name_vacancy_type: 'Recruitment Specialist',
          description_vacancy_type: 'A specialist responsible for sourcing, screening, and selecting candidates for job vacancies within an organization.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 62,
          name_vacancy_type: 'Training Coordinator',
          description_vacancy_type: 'A coordinator organizing and facilitating training programs for employees to enhance their skills and knowledge.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 63,
          name_vacancy_type: 'Employee Relations Specialist',
          description_vacancy_type: 'A specialist managing relationships between employees and the organization, handling disputes, grievances, and promoting positive work environments.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 64,
          name_vacancy_type: 'Compensation and Benefits Manager',
          description_vacancy_type: 'A manager responsible for designing and administering compensation and benefits programs to attract and retain employees.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 65,
          name_vacancy_type: 'Payroll Administrator',
          description_vacancy_type: 'An administrator processing payroll, managing employee records, and ensuring accurate and timely payment of salaries and benefits.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 66,
          name_vacancy_type: 'HR Generalist',
          description_vacancy_type: 'A generalist handling various HR tasks, including recruitment, employee relations, training, and compliance.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 67,
          name_vacancy_type: 'HR Assistant',
          description_vacancy_type: 'An assistant providing administrative support to the HR department, including managing files, scheduling interviews, and assisting with HR programs.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 68,
          name_vacancy_type: 'Training and Development Manager',
          description_vacancy_type: 'A manager overseeing training and development programs to enhance employee skills, knowledge, and performance.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 69,
          name_vacancy_type: 'HR Consultant',
          description_vacancy_type: 'A consultant providing expert advice and guidance on HR policies, procedures, and strategies to organizations.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 70,
          name_vacancy_type: 'Benefits Administrator',
          description_vacancy_type: 'An administrator managing employee benefits programs, including health insurance, retirement plans, and wellness programs.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 71,
          name_vacancy_type: 'HR Coordinator',
          description_vacancy_type: 'A coordinator assisting with various HR activities, such as recruitment, onboarding, training, and maintaining HR records.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 72,
          name_vacancy_type: 'Talent Acquisition Specialist',
          description_vacancy_type: 'A specialist focused on sourcing and acquiring top talent for an organization through strategic recruitment efforts.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 73,
          name_vacancy_type: 'HR Analyst',
          description_vacancy_type: 'An analyst responsible for collecting and analyzing HR data to inform decision-making and improve HR processes and strategies.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 74,
          name_vacancy_type: 'HR Director',
          description_vacancy_type: 'A director leading and overseeing all HR functions within an organization, developing HR strategies, and aligning HR initiatives with business goals.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 75,
          name_vacancy_type: 'Teacher',
          description_vacancy_type: 'Responsible for imparting knowledge and guiding students\' learning in various academic areas.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 76,
          name_vacancy_type: 'Tutor',
          description_vacancy_type: 'Provides individualized support and guidance to students to improve their academic performance.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 77,
          name_vacancy_type: 'Academic Director',
          description_vacancy_type: 'Manages and coordinates educational programs, evaluates teaching staff, and plans academic activities.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 78,
          name_vacancy_type: 'Educational Program Coordinator',
          description_vacancy_type: 'Designs, implements, and supervises educational programs to ensure quality and effectiveness of learning.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 79,
          name_vacancy_type: 'Special Education Specialist',
          description_vacancy_type: 'Works with students with special educational needs, adapts curriculum, and provides additional support.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 80,
          name_vacancy_type: 'Teacher\'s Assistant',
          description_vacancy_type: 'Supports the teacher in the classroom, assisting students and performing administrative tasks.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 81,
          name_vacancy_type: 'Educational Counselor',
          description_vacancy_type: 'Provides academic, career, and personal guidance to students to help them achieve their goals.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 82,
          name_vacancy_type: 'Training Instructor',
          description_vacancy_type: 'Delivers training and instruction in specific skills, such as languages, technology, or professional development.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 83,
          name_vacancy_type: 'Teaching Supervisor',
          description_vacancy_type: 'Supervises and evaluates teaching staff to ensure quality teaching practices and student learning outcomes.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 84,
          name_vacancy_type: 'Tutoring Coordinator',
          description_vacancy_type: 'Organizes and oversees tutoring programs for students needing additional support in their learning.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 85,
          name_vacancy_type: 'Curriculum Designer',
          description_vacancy_type: 'Develops curricula and educational materials to ensure relevance and effectiveness of learning.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 86,
          name_vacancy_type: 'Assessment Coordinator',
          description_vacancy_type: 'Designs and administers educational assessments to measure student progress and achievement.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 87,
          name_vacancy_type: 'Early Childhood Education Assistant',
          description_vacancy_type: 'Supports the development and learning of young children in educational settings such as daycare or preschool.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 88,
          name_vacancy_type: 'Student Counselor',
          description_vacancy_type: 'Provides counseling and support services to students, addressing academic, personal, and social issues.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 91,
          name_vacancy_type: 'Carpenter',
          description_vacancy_type: 'Constructs and repairs wooden structures and furniture, using tools and woodworking techniques.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 92,
          name_vacancy_type: 'Construction Worker',
          description_vacancy_type: 'Performs various tasks related to construction, such as digging, lifting, and operating machinery.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 93,
          name_vacancy_type: 'Concrete Finisher',
          description_vacancy_type: 'Places, finishes, and repairs concrete surfaces, such as floors, walls, and sidewalks.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 94,
          name_vacancy_type: 'Welder',
          description_vacancy_type: 'Joins metal parts together by heating and melting them, using welding equipment and techniques.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 95,
          name_vacancy_type: 'Mechanic',
          description_vacancy_type: 'Repairs and maintains mechanical equipment and vehicles, diagnosing and fixing issues.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 96,
          name_vacancy_type: 'Painter',
          description_vacancy_type: 'Applies paint and coatings to surfaces, such as walls, ceilings, and structures, to protect and enhance their appearance.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 97,
          name_vacancy_type: 'Landscaper',
          description_vacancy_type: 'Designs and maintains outdoor spaces, including gardens, lawns, and parks, by planting and caring for plants and trees.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 98,
          name_vacancy_type: 'HVAC Technician',
          description_vacancy_type: 'Installs, maintains, and repairs heating, ventilation, and air conditioning systems in buildings and facilities.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 99,
          name_vacancy_type: 'Mason',
          description_vacancy_type: 'Builds and repairs structures and surfaces using materials such as brick, stone, and concrete, following architectural plans.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 100,
          name_vacancy_type: 'Electrician\'s Apprentice',
          description_vacancy_type: 'Assists electricians in installing and repairing electrical systems, learning the trade through hands-on experience and training.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 101,
          name_vacancy_type: 'Plumber\'s Assistant',
          description_vacancy_type: 'Assists plumbers in installing and repairing plumbing systems, learning the trade through hands-on experience and training.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 102,
          name_vacancy_type: 'Carpenter\'s Assistant',
          description_vacancy_type: 'Assists carpenters in constructing and repairing wooden structures, learning the trade through hands-on experience and training.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 103,
          name_vacancy_type: 'Construction Worker\'s Assistant',
          description_vacancy_type: 'Assists construction workers in various tasks related to construction projects, learning the trade through hands-on experience and training.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 104,
          name_vacancy_type: 'Welder\'s Assistant',
          description_vacancy_type: 'Assists welders in joining metal parts, learning the trade through hands-on experience and training.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        }, {
          id: 105,
          name_vacancy_type: 'Mechanic\'s Assistant',
          description_vacancy_type: 'Assists mechanics in repairing and maintaining mechanical equipment and vehicles, learning the trade through hands-on experience and training.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 106,
          name_vacancy_type: 'Painter\'s Assistant',
          description_vacancy_type: 'Assists painters in applying paint and coatings to surfaces, learning the trade through hands-on experience and training.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 107,
          name_vacancy_type: 'Landscaper\'s Assistant',
          description_vacancy_type: 'Assists landscapers in designing and maintaining outdoor spaces, learning the trade through hands-on experience and training.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 108,
          name_vacancy_type: 'HVAC Technician\'s Assistant',
          description_vacancy_type: 'Assists HVAC technicians in installing, maintaining, and repairing HVAC systems, learning the trade through hands-on experience and training.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 109,
          name_vacancy_type: 'Mason\'s Assistant',
          description_vacancy_type: 'Assists masons in building and repairing structures using brick, stone, and concrete, learning the trade through hands-on experience and training.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 110,
          name_vacancy_type: 'Electrician\'s Helper',
          description_vacancy_type: 'Assists electricians in various tasks related to electrical work, learning the trade through hands-on experience and training.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 111,
          name_vacancy_type: 'Plumber\'s Helper',
          description_vacancy_type: 'Assists plumbers in various tasks related to plumbing work, learning the trade through hands-on experience and training.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 112,
          name_vacancy_type: 'Carpenter\'s Helper',
          description_vacancy_type: 'Assists carpenters in various tasks related to woodworking and construction, learning the trade through hands-on experience and training.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 113,
          name_vacancy_type: 'Construction Worker\'s Helper',
          description_vacancy_type: 'Assists construction workers in various tasks related to construction projects, learning the trade through hands-on experience and training.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 114,
          name_vacancy_type: 'Welder\'s Helper',
          description_vacancy_type: 'Assists welders in various tasks related to welding, learning the trade through hands-on experience and training.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 115,
          name_vacancy_type: 'Mechanical Engineer',
          description_vacancy_type: 'Designs, develops, and tests mechanical systems and devices.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 116,
          name_vacancy_type: 'Quality Control Inspector',
          description_vacancy_type: 'Inspects products and processes to ensure they meet quality standards and specifications.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 117,
          name_vacancy_type: 'Equipment Operator',
          description_vacancy_type: 'Operates machinery and equipment, such as forklifts, cranes, and bulldozers, to perform tasks in construction and other industries.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 118,
          name_vacancy_type: 'Safety Coordinator',
          description_vacancy_type: 'Develops and implements safety policies and procedures to ensure a safe work environment.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 119,
          name_vacancy_type: 'Foreman',
          description_vacancy_type: 'Supervises and coordinates construction activities and workers on-site.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 120,
          name_vacancy_type: 'Project Manager',
          description_vacancy_type: 'Plans, executes, and oversees construction projects from start to finish, ensuring they are completed on time and within budget.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 121,
          name_vacancy_type: 'Construction Estimator',
          description_vacancy_type: 'Estimates the costs and materials required for construction projects based on project plans and specifications.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 122,
          name_vacancy_type: 'Building Inspector',
          description_vacancy_type: 'Inspects buildings and structures to ensure they meet building codes and regulations.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 123,
          name_vacancy_type: 'Heavy Equipment Operator',
          description_vacancy_type: 'Operates heavy machinery and equipment, such as excavators and bulldozers, to perform tasks in construction and earthmoving projects.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 124,
          name_vacancy_type: 'Construction Safety Officer',
          description_vacancy_type: 'Ensures compliance with safety regulations and promotes a culture of safety on construction sites.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 125,
          name_vacancy_type: 'Demolition Worker',
          description_vacancy_type: 'Performs demolition tasks, such as dismantling structures and removing debris, using specialized equipment and techniques.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 126,
          name_vacancy_type: 'Construction Scheduler',
          description_vacancy_type: 'Develops and maintains construction schedules to ensure timely completion of projects.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 127,
          name_vacancy_type: 'Roofer',
          description_vacancy_type: 'Installs and repairs roofs on buildings and structures, using materials such as shingles, tiles, and metal sheets.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 128,
          name_vacancy_type: 'Plasterer',
          description_vacancy_type: 'Applies plaster or stucco to interior and exterior walls and ceilings, creating smooth and durable surfaces.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 126,
          name_vacancy_type: 'Flooring Installer',
          description_vacancy_type: 'Installs and maintains various types of flooring, such as hardwood, tile, and carpet, in residential and commercial properties.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 127,
          name_vacancy_type: 'Scaffolding Erector',
          description_vacancy_type: 'Assembles and disassembles scaffolding structures, providing safe access for workers at construction sites.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        },
        {
          id: 128,
          name_vacancy_type: 'Concrete Pump Operator',
          description_vacancy_type: 'Operates concrete pumps to transport and pour concrete in construction projects, ensuring accuracy and efficiency.',
          status_vacancy_type: true,
          createdAt: '2025-03-11 00:00:00.000',
          updatedAt: '2025-03-11 00:00:00.000'
        }
      ], {});
    } catch (error) {
      console.error('Error during seed:', error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TypeVacancies', null, {});
  }
};