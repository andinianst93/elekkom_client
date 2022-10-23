import React from 'react'
import {
  MdMic,
  MdComment,
  MdComputer,
  MdCheckCircleOutline,
} from 'react-icons/md'

export const links = [
  {
    id: 1,
    text: 'products',
    url: '/products',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
]
export const services = [
  {
    id: 1,
    icon: <MdComputer />,
    title: 'what we do',
    text: 'Our end-to-end solutions help and support you build a better tomorrow.',
  },
  {
    id: 2,
    icon: <MdComment />,
    title: 'customer story',
    text: 'Powering businesses and innovation with high-performance technology.',
  },
  {
    id: 3,
    icon: <MdMic />,
    title: 'podcast',
    text: 'The KomCast is the flagship podcast from ElekKom about gadgets, Big Tech, and everything in between.',
  },

  {
    id: 4,
    icon: <MdCheckCircleOutline />,
    title: 'warranty',
    text: 'Support Services and Contracts. Identify your product to see your Support Services status and coverage options.',
  },
]
export const questions = [
  {
    id: 1,
    title: 'What is ElekKom Preferred Account (EPA) financing?',
    info: 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
  },
  {
    id: 2,
    title: 'What is Zero % liability on unauthorized charges?',
    info: 'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
  },
  {
    id: 3,
    title: 'Is a minimum payment required?',
    info: 'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
  },
  {
    id: 4,
    title: 'How are my payments applied to my promotional purchase?',
    info: 'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
  },
  {
    id: 5,
    title: 'Can I view my account information online?',
    info: 'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
  },
]

export const products_url =
  'https://store-elec-mern-api.herokuapp.com/api/v1/products?page='
