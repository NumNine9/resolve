import { DocsUrl, BlogUrl } from '../shared/common';
import daBoiAvatar from '../client/static/da-boi.png';
import avatarPlaceholder from '../client/static/avatar-placeholder.png';
import { routes } from 'wasp/client/router';

export const navigation = [
  { name: 'About Us', href: '#about' },
  // { name: 'Pricing', href: routes.PricingPageRoute.build() },
  // { name: 'Documentation', href: DocsUrl },
  // { name: 'Blog', href: BlogUrl },
  {name: 'Contact Us', href: '#contact'},
  {name: 'Search', href: '#'}
];
export const features = [
  {
    name: 'Cool Feature #1',
    description: 'Describe your cool feature here.',
    icon: '🤝',
    href: DocsUrl,
  },
  {
    name: 'Cool Feature #2',
    description: 'Describe your cool feature here.',
    icon: '🔐',
    href: DocsUrl,
  },
  {
    name: 'Cool Feature #3',
    description: 'Describe your cool feature here.',
    icon: '🥞',
    href: DocsUrl,
  },
  {
    name: 'Cool Feature #4',
    description: 'Describe your cool feature here.',
    icon: '💸',
    href: DocsUrl,
  },
];
export const testimonials = [
  {
    name: 'Emma Johnson',
    role: 'High School Student',
    avatarSrc: daBoiAvatar,
    socialUrl: 'https://twitter.com/wasplang',
    quote: 'I love how easy it is to find detailed explanations for every topic. The video lessons are clear, and the quizzes help me stay on track!',
  },
  {
    name: 'Liam Carter',
    role: 'College Sophomore',
    avatarSrc: avatarPlaceholder,
    socialUrl: '',
    quote: 'The personalized learning plans are a game-changer. It’s like having a tutor who knows exactly what I need to work on.',
  },
  {
    name: 'Ethan Smith',
    role: 'Graduate Student',
    avatarSrc: avatarPlaceholder,
    socialUrl: '#',
    quote: 'The collaborative features are amazing. Being able to connect with peers and discuss topics really deepens my understanding.',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'What qualifications and expertise do your instructors have?',
    answer: 'Our instructors are industry experts and certified educators with years of experience. Many have advanced degrees and have worked in their respective fields.',
    href: 'https://en.wikipedia.org/wiki/42_(number)',
  },
  {
    id: 2,
    question: 'How often is the course material updated to reflect current knowledge and industry standards?',
    answer: 'We review and update our course material quarterly to ensure it stays relevant to evolving trends and advancements in each field.',
    href: 'https://example.com/course-updates',
  },
  {
    id: 3,
    question: 'What types of interactive tools and resources do you offer to enhance the learning experience?',
    answer: 'Our platform includes interactive videos, quizzes, virtual labs, and discussion forums to make learning engaging and immersive.',
    href: 'https://example.com/interactive-tools',
  },
  {
    id: 4,
    question: 'Are courses delivered in a live format, recorded, or both? What is the average length of each course?',
    answer: 'We offer both live sessions and recorded courses. The average course length varies, but most are structured into bite-sized lessons of 10-20 minutes each.',
    href: 'https://example.com/course-formats',
  },
  {
    id: 5,
    question: 'Do you offer any scholarships, discounts, or payment plans for students?',
    answer: 'Yes, we provide a variety of scholarships, discounts, and flexible payment plans to make education accessible to all learners.',
    href: 'https://example.com/financial-aid',
  },
  {
    id: 6,
    question: 'How do you track and report student progress throughout the course?',
    answer: 'We use a comprehensive dashboard to track progress, including completed lessons, quiz scores, and milestones, so you can monitor your achievements in real-time.',
    href: 'https://example.com/progress-tracking',
  },
  {
    id: 7,
    question: 'Do you issue certifications upon completion, and are they recognized by employers?',
    answer: 'Yes, we issue certificates upon course completion. Many are accredited and recognized by top employers and professional organizations.',
    href: 'https://example.com/certifications',
  },
];
export const footerNavigation = {
  app: [
    { name: 'Documentation', href: DocsUrl },
    { name: 'Blog', href: BlogUrl },
  ],
  company: [
    { name: 'About', href: 'https://wasp-lang.dev' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};
