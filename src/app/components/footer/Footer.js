import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(to bottom, #000000, #1a1a1a)", 
        color: "#ffffff",
        padding: "2rem 1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Individual Sections */}
        {[
          { title: "Product", items: ["Product", "Login", "University", "Integrations", "Pricing", "Changelog"] },
          { title: "Blog", items: ["AI for Sales Prospecting", "Why good CRM data matters", "Google Maps lead generation in 5 easy steps", "Outbound Sales Automation", "AI Lead Generation"] },
          { title: "Tools", items: ["Email Finder", "Headcount Finder", "Credits Calculator", "Chrome Extension", "CPM Calculator", "Margin Calculator"] },
          { title: "Support", items: ["Send us an email", "Join Slack", "FAQ", "Status"] },
          { title: "Company", items: ["Customer Stories", "Wall of Love", "Careers", "Creators Program", "Integrate with Clay"] },
        ].map((section, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 180px",
              margin: "1rem",
              textAlign: "center", 
            }}
          >
            <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem", borderBottom: "1px solid #444", paddingBottom: "0.5rem" }}>
              {section.title}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "1.8" }}>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} style={{ fontSize: "0.9rem", color: "#cccccc", cursor: "pointer" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.85rem", color: "#888888" }}>
        <p>© Clay 2024 / Uplevel your data enrichment. Scale personalized outreach.</p>
      </div>
    </footer>
  );
};

export default Footer;