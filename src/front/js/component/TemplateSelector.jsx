import React, { useContext, useEffect} from "react";
import { Context } from "../store/appContext.js"
import { FormalSquareTemplate } from "../templates/FormalSquareTemplate.jsx";
import { FormalVerticalTemplate } from "../templates/FormalVerticalTemplate.jsx";
import { SemiFormalSquareTemplate } from "../templates/SemiFormalSquareTemplate.jsx";
import { SemiFormalVerticalTemplate } from "../templates/SemiFormalVerticalTemplate.jsx";
import { InformalSquareTemplate } from "../templates/InformalSquareTemplate.jsx";
import { InformalVerticalTemplate } from "../templates/InformalVerticalTemplate.jsx";

export const templateSelector = ({ ratio, formality }) => {
  let template = null;

  if (ratio === "vertical") {
    if (formality === 1) {
      template = <InformalVerticalTemplate />;
    } else if (formality === 2) {
      template = <SemiFormalVerticalTemplate />;
    } else if (formality === 3) {
      template = <FormalVerticalTemplate />;
    } else {
      // ¿Qué hacemos en caso de que no haya una combinación de plantilla válida para las variables dadas?
    }
  } else if (ratio === "square") {
    if (formality === 1) {
      template = <InformalSquareTemplate />;
    } else if (formality === 2) {
      template = <SemiFormalSquareTemplate />;
    } else if (formality === 3) {
      template = <FormalSquareTemplate />;
    } else {
      // ¿Qué hacemos en caso de que no haya una combinación de plantilla válida para las variables dadas?
    }
  } else {
      // ¿Qué hacemos en caso de que no haya una combinación de plantilla válida para las variables dadas?
  }

  return template;
};

export const Xxx = () => {
  const {store, actions} = useContext(Context)

  useEffect(() => {
    const infoPost = actions.getInfoPost()
    console.log(infoPost)
  },[])

  return (<h1>Hola</h1>)
}