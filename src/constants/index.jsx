import { ShieldCheck } from "lucide-react";
import { BarChart2 } from "lucide-react";
import { MailCheck } from "lucide-react";
import { LucideQrCode } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { Lock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const workflow = [
  {
    title: "Visit the Event Registration Page",
    description:
      "Navigate to the event registration page to begin the registration process.",
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

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "₹0",
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
    price: "2% + ₹5",
    features: [
      "Designed for Paid Events",
      "Unlimited Participants Onboarding",
      "Advanced Web Analytics",
      "Dynamic QR Code Ticketing",
      "Secured Admin Panel",
      "Secure Tunnel",
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
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
