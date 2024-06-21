import { ShieldCheck } from "lucide-react";
import { BarChart2 } from "lucide-react";
import { MailCheck } from "lucide-react";
import { LucideQrCode } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { Lock } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/Contact-Us" },
];

export const workflow = [
  {
    title: "Visit the Event Registration Page",
    description:
      "Navigate to the HOST YOUR EVENT page to begin the registration process.",
  },
  {
    title: "Read Terms of Service and Data Privacy",
    description:
      "Carefully review the terms of service and data privacy policies before proceeding with registration.",
  },
  {
    title: "Enter Event Details to Register",
    description:
      "Fill in the required information to complete the event registration form.",
  },
  {
    title: "Receive Admin Panel Credentials",
    description:
      "After successful registration, you'll receive credentials to access the admin panel and event analytics.",
  },
  {
    title: "Access Secure Admin Panel",
    description:
      "Use the provided credentials to log in and access the secure admin panel and analytics dashboard for your event.",
  },
];

export const features = [
  {
    icon: <ShieldCheck />,
    text: "Payment Security",
    description:
      "Rest easy with our robust integration with PhonePay, ensuring secure transactions and peace of mind for both organizers and participants.",
  },
  {
    icon: <MailCheck />,
    text: "Automated Mailing System",
    description:
      "Effortlessly communicate event details to participants upon successful payment, including event information and unique QR codes for streamlined access.",
  },
  {
    icon: <LucideQrCode />,
    text: "Dynamic QR Ticketing",
    description:
      "Revolutionize event check-in with dynamic QR ticketing, enabling seamless onboarding and authentication for participants while simplifying the registration process.",
  },
  {
    icon: <BarChart2 />,
    text: "Analytics Dashboard",
    description:
      "Empower event managers with comprehensive insights into attendee demographics, ticket sales, and engagement metrics, facilitating data-driven decision-making for enhanced event success.",
  },
  {
    icon: <CalendarCheck />,
    text: "Event Creation and Management",
    description:
      "Streamline event organization and participant registration with our intuitive platform, providing secure online registration and customizable event management tools.",
  },
  {
    icon: <Lock />,
    text: "Security and Data Privacy",
    description:
      "Protect attendee data with robust security measures and ensure compliance with data privacy regulations, safeguarding sensitive information and enhancing trust.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "0 INR",
    features: [
      "Designed for Free Events",
      "Unlimited Participants Onboarding",
      "Basic Web Analytics",
      "Event Registration Management",
      "Standard Email Support",
    ],
  },
  {
    title: "Paid",
    price: "2% + 5 INR",
    features: [
      "Designed for Paid Events",
      "Unlimited Participants Onboarding",
      "Advanced Web Analytics",
      "Dynamic QR Code Ticketing",
      "Secured Admin Panel",
      "Secure Tunnel",
      "2% transaction fee (payment gateway fee)",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Tailored for Large Paid Events",
      "Unlimited Participants Onboarding",
      "Comprehensive Web Analytics",
      "Dynamic QR Code Ticketing",
      "Custom Payment Gateway Integration",
      "Enhanced Secure Tunnel",
      "2% transaction fee (payment gateway fee)",
    ],
  },
];

export const team = [
  {
    avatar:
      "https://media.licdn.com/dms/image/D5603AQH3m_VqfMjRXQ/profile-displayphoto-shrink_400_400/0/1690730441108?e=1722470400&v=beta&t=PS_ZyX-SSbmD0cs3XZuVX_o9t5tU8R-tbKbfEUCPaY0",
    name: "Sindhu Ravuri",
    title: "CEO , CFO & Chief Marketing Officer (CMO)",
    linkedin: "https://www.linkedin.com/in/sindhu-ravuri/",
    twitter: "javascript:void(0)",
  },
  {
    avatar:
      "https://media.licdn.com/dms/image/D5603AQFVRgQq0ObZCg/profile-displayphoto-shrink_400_400/0/1697024171061?e=1722470400&v=beta&t=GEJ7TsLeoaI_Zhvmosv6nibvf-VOchVD27FL8kP2yQE",
    name: "RUDRAVALLYVARUNHARINATH",
    title: "Co-founder & Lead Developer ",
    linkedin: "https://www.linkedin.com/in/varun-harinath/",
    twitter: "javascript:void(0)",
  },
  {
    avatar:
      "https://media.licdn.com/dms/image/D5603AQESlx66wwEMJA/profile-displayphoto-shrink_400_400/0/1708603457057?e=1722470400&v=beta&t=Wy_dqLT0HHtW8gBnEFhf6PKSJzR7mK9oEEU8kveAQQU",
    name: "Sarhtak Aitha",
    title: "CTO & Technology Team Lead",
    linkedin: "https://www.linkedin.com/in/sarthak-aitha-943534252/",
    twitter: "javascript:void(0)",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Selva Geeta Velan",
    title: "Social Media Manager",
    linkedin: "javascript:void(0)",
    twitter: "javascript:void(0)",
  },
  {
    avatar:
      "https://media.licdn.com/dms/image/D5603AQFmrsIDUYlGag/profile-displayphoto-shrink_400_400/0/1713345468327?e=1722470400&v=beta&t=nP-LUAkm-9R5emm6hw14Plnx36UP8kv6smpvrd4eU7E",
    name: "Akshay Rachakonda",
    title: "Frontend Developer",
    linkedin: "https://www.linkedin.com/in/akshay-rachakonda-a92bb524a/",
    twitter: "javascript:void(0)",
  },
  {
    avatar:
      "https://media.licdn.com/dms/image/D5603AQGZIrxbD16qwA/profile-displayphoto-shrink_400_400/0/1670678932973?e=1722470400&v=beta&t=j5IUMh9-DjDRBrLtl0OT6QQYL7PtYnmoa4yBVbRsZA0",
    name: "Akshay Sakinam",
    title: "Frontend Developer",
    linkedin: "https://www.linkedin.com/in/akshay-sakinam-516502255/",
    twitter: "javascript:void(0)",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const footerNavs = [
  { href: "/about-us", text: "About Us" },
  { href: "/events", text: "Events" },
  { href: "/secure/v3/Event-On-Boadring", text: "Event Onboarding" },
  { href: "/company-eula", text: "Terms and conditions" },
  { href: "/Contact-Us", text: "Contact Us" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
