/**
 * Central company configuration for Tiger Creek Enterprises Inc. (TCE).
 * Keeps all contact info, claims boundaries, demo switches, and metadata in one place.
 */

export const SITE_CONFIG = {
  // Demo Mode Switch: controls noindex, demo banner, crawl policies
  isDemoMode: true,
  demoBannerText: "Proposed Website Concept · For Review & Demonstration",

  // Company Details (from public filings & customer brief - to be verified prior to production)
  companyName: "Tiger Creek Enterprises Inc.",
  shortName: "TCE",
  tagline: "Grounded in Texas. Built for what's below.",
  eyebrow: "TEXAS UNDERGROUND UTILITY CONSTRUCTION",
  locationName: "Brookeland, Texas",
  phoneFormatted: "(409) 698-3377",
  phoneRaw: "+14096983377",
  phoneTelLink: "tel:+14096983377",
  address: "409 Private Road 7065, Brookeland, TX 75931",
  addressNotes:
    "Publicly listed filing address. Requires company verification before launch. Not an open walk-in office.",

  // Primary Services (Strict scope: Horizontal boring & Texas natural gas line installation/replacement)
  primaryService: "Horizontal Boring",
  services: [
    {
      id: "horizontal-boring",
      num: "01",
      category: "CORE SERVICE",
      title: "Horizontal boring",
      description:
        "A trenchless approach to installing underground pipe where an open-cut route may be disruptive or impractical. Each crossing requires a site-specific assessment.",
    },
    {
      id: "natural-gas-installation",
      num: "02",
      category: "UTILITY INFRASTRUCTURE",
      title: "Natural gas installation",
      description:
        "Underground natural gas line construction for utility infrastructure programs across Texas.",
    },
    {
      id: "line-replacement",
      num: "03",
      category: "SYSTEM UPGRADES",
      title: "Gas line replacement",
      description:
        "Installation of replacement natural gas lines as part of utility system renewal projects.",
    },
  ],

  // Production URL config (change when production domain is designated)
  productionUrl: "https://tigercreektx.com", // placeholder production domain for canonicals/schema
  currentOrigin: "", // resolved dynamically or via window.location

  // Hero asset (attached generated HDD image)
  heroImage:
    "https://vibe.filesafe.space/1793575584947955523/attachments/874ce2bc-a47c-4f43-8779-78fd7a6a5ea0.png",
  heroImageAlt:
    "Orange horizontal directional drilling rig set up on an East Texas roadside with pine trees and utility piping in the foreground",
  heroImageCaption: "Illustrative image. Not an actual TCE jobsite.",
};
