# Guía de estilos GeekPost

## 1. El nombre GeekPost

El **nombre de la marca** se escribirá siempre en PascalCase salvo en el caso de los nombres de archivos.

- Uso correcto
  - GeekPost
- Usos incorrectos:
  - Geekpost, geekpost, geekPost, GEEKPOST

**Excepción** «nombres de archivo»:

- Usos incorrectos
  - Geekpost, geekpost, geekPost, GEEKPOST
- Uso correcto
  - GeekPost

## 2. _Cases_

- kebab-case: CSS
  - Tanto a nivel de archivo como a nivel de selectores
- PascalCase: React
- camelCase: JS vainilla

## 3. Extensiones

- React: .jsx
- JavaScript: .js
- Python: .py
- CSS: .css

## 4. Estilos globales

### Selectores globales

1. Selectores globales y generalistas tales que ```*```, ```html```y ```body``` no se utilizarán salvo, en el último de los casos, para ```margin:0```;

### Fuentes

Las fuentes utilizadas en el presente documento serán:

- **inglobal** (con sus variantes _italic_, _bold_ y _bold-italic_) para los títulos
- **Roboto** (con todas sus variantes de peso) para los párrafos, botones, etiquetas y campos de formulario, etc.

En ningún caso habremos de olvidarnos de configurar el _fallback_ correspondiente a la hora de hacer el llamado a las fuentes, justo de la siguiente manera:

    .mi-selector-de-clase {
        font-family: "inglobal", sans-serif;
    }

### _Headings_ (```h1``` a ```h6```)

1. Los _headings_, por defecto y salvo excepción justificada, siempre irán en fuente **inglobal-bold** y en color ```var(--purple)```. Igualmente, salvo excepción justificada, el tamaño de cada uno de ellos será el definido por el user-agent del navegador correspondiente.

2. Los únicos matices permitidos serán lo relativos a la opacidad de los colores, razón única por la que utilizar ```rgb()```.

### Enlaces (```a```)

1. Todos los enlaces del documento, por defecto, serán ```text-decoration:none```

### Parrafos (```p```)

1. Todos los párrafos del documento serán ```font-family: "Roboto", sans-serif;```

### _Inputs_ (```input```)

1. Todos los _inputs_ del documento serán ```font-family: "Roboto", sans-serif;```
