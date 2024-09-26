import {
  FaDiagramProject,
  FaEnvelope,
  FaTwitter,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
} from "react-icons/fa6";
import { BMS, Edusity, ChefsKitchen, Weather } from "../assets";

export const Socials = [
  {
    id: `twitter-${Date.now()}`,
    Icon: FaTwitter,
    uril: "https://twitter.com/siddharth27soni",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uril: "https://www.linkedin.com/in/siddharth-soni-b2a0132a8/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uril: "https://github.com/web-sid",
    color: "#fff",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `Chef's Kitchen-${Date.now()}`,
    name: "Chef's Kitchen",
    imgSrc: ChefsKitchen,
    gitURL: "https://github.com/web-sid/Chefs-Kitchen-Frontend.git",
    demo: "https://chef-s-kitchen.netlify.app",
  },
  {
    id: `University-${Date.now()}`,
    name: "Edusity University!",
    imgSrc: Edusity,
    gitURL: "https://github.com/web-sid/Edusity",
    demo: "https://edusity-education-university.netlify.app/",
  },
  {
    id: `BMS-Wellness-${Date.now()}`,
    name: "BMS Wellness Center",
    imgSrc: BMS,
    gitURL: "https://github.com/web-sid/BMS-Website",
    demo: "https://bms-website-1bsc.onrender.com",
  },
  {
    id: `Weather App-${Date.now()}`,
    name: "Weather App",
    imgSrc: Weather,
    gitURL: "https://github.com/web-sid/Weather-App",
    demo: "https://web-sid.github.io/Weather-App/",
  },
];
