import React from "react";
import { FormalSquareTemplate } from "./templates/FormalSquareTemplate.jsx";
import { FormalVerticalTemplate } from "./templates/FormalVerticalTemplate.jsx";
import { SemiFormalSquareTemplate } from "./templates/SemiFormalSquareTemplate.jsx";
import { SemiFormalVerticalTemplate } from "./templates/SemiFormalVerticalTemplate.jsx";
import { InformalSquareTemplate } from "./templates/InformalSquareTemplate.jsx";
import { InformalVerticalTemplate } from "./templates/InformalVerticalTemplate.jsx";

const TemplateSelector = ({ ratio, formality }) => {
  let template = null;

  if (ratio === "vertical") {
    if (formality === "semiformal") {
      template = <SemiFormalVerticalTemplate />;
    } else if (formality === 1) {
      template = <InformalVerticalTemplate />;
    } else {
      // en caso de que no haya una combinación de plantilla válida para las variables dadas
      return <div>No se ha encontrado una plantilla para las variables dadas</div>;
    }
  } else if (ratio === "horizontal") {
    if (formality === "formal") {
      template = <FormalHorizontalTemplate />;
    } else if (formality === "semiformal") {
      template = <SemiFormalHorizontalTemplate />;
    } else if (formality === "informal") {
      template = <InformalHorizontalTemplate />;
    } else {
      // en caso de que no haya una combinación de plantilla válida para las variables dadas
      return <div>No se ha encontrado una plantilla para las variables dadas</div>;
    }
  } else {
    // en caso de que no haya una combinación de plantilla válida para las variables dadas
    return <div>No se ha encontrado una plantilla para las variables dadas</div>;
  }

  return template;
};

export default TemplateSelector;
