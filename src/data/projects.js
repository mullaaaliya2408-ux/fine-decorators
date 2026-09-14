import project01 from "../assets/projects/p1.jpg";
import project02 from "../assets/projects/p2.jpg";
import p1_2 from "../assets/projects/p1-2.jpg";
import p1_3 from "../assets/projects/p1-3.jpg";
import project03 from "../assets/projects/p3.jpg";
import project04 from "../assets/projects/p4.jpg";
import project05 from "../assets/projects/p5.jpg";
import project06 from "../assets/projects/p6.jpg";
import kitchen from "../assets/projects/kitchen.jpg";
import bathroom from "../assets/projects/bathroom.jpg";

export const projects = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "LIVING ROOM",
    type: "RESIDENTIAL",
    location: "[LOCATION]",
    image: project01,
  },

  {
    id: 2,
    title: "Contemporary Bedroom",
    category: "BEDROOM",
    type: "RESIDENTIAL",
    location: "[LOCATION]",
    image: project02,
    gallery: [p1_2, p1_3],
  },

  {
    id: 3,
    title: "Commercial Ceiling",
    category: "COMMERCIAL",
    type: "COMMERCIAL",
    location: "[LOCATION]",
    image: project03,
  },
  {
    id: 4,
    title: "Premium Office Interior",
    category: "COMMERCIAL",
    type: "COMMERCIAL",
    location: "[LOCATION]",
    image: project04,
  },
  {
    id: 5,
    title: "Corporate Workspace",
    category: "COMMERCIAL",
    type: "COMMERCIAL",
    location: "[LOCATION]",
    image: project05,
  },
  {
    id: 6,
    title: "Retail Store Interior",
    category: "COMMERCIAL",
    type: "COMMERCIAL",
    location: "[LOCATION]",
    image: project06,
  },
  {
  id: 7,
  title: "Modern Kitchen",
  category: "RESIDENTIAL",
  type: "RESIDENTIAL",
  location: "[LOCATION]",
  image: kitchen,
},
{
  id: 8,
  title: "Modern Bathroom",
  category: "RESIDENTIAL",
  type: "RESIDENTIAL",
  location: "[LOCATION]",
  image: bathroom,
},

 
];