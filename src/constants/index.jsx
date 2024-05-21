import { ShieldCheck } from "lucide-react";
import { BarChart2 } from "lucide-react";
import { MailCheck } from "lucide-react";
import { LucideQrCode } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { Lock } from "lucide-react";

export const navItems = [
  { label: "Home", href: "home" },
  { label: "Features", href: "features" },
  { label: "Workflow", href: "workflow" },
  { label: "Pricing", href: "pricing" },
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

export const footerNavs = [
  { href: "#", text: "Home" },
  { href: "#", text: "Features" },
  { href: "#", text: "Events" },
  { href: "#", text: "Event Onboarding" },
  { href: "/company-eula", text: "Terms and conditions" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
