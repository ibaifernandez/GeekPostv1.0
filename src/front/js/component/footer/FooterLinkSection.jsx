import React from "react";
import { Link } from "react-router-dom";

export const FooterLinkSection = ({ title, links }) => (
  <div className="col-lg-3 col-md-6 footer-links">
    <h4 className="mb-3">{title}</h4>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <i className="fa fa-chevron-right me-3"></i>
          <Link to={link.to}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);