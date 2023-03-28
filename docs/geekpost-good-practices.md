# GeekPost: Buenas prácticas

## Buena práctica nº1: estrictez sobre los _cases_

- kebab-case: CSS
- PascalCase: React
- camelCase: JS vainilla

## Buena práctica nº2: estrictez sobre las extensiones

- React: .jsx
- JavaScript: .js
- Python: .py
- CSS: .css

## Buena práctica nº3: mensajes apropiados para los _commits_, los _reviews_ y los _merges_

Los _commmits_, los _reviews_, los _merges_ y en general todo cambio que implique un comentario habrá de hacerse de una manera clara y descriptiva.

## Buena práctica nº4: Respetar los estilos globales

Se respetarán los estilos globales explicados en [la guía de estilo GeekPost](./geekpost-style-guide.md)

## Buena práctica nº5: Respetar los nombres propuestos

A la hora de la ejecución, los nombres propuestos en la planificación serán estrictamente respetados.

En tal sentido, los nombres de los componentes serán siempre descritos en inglés.

## Buena práctica nº6: Exportaciones & Importaciones

Todas las exportaciones e importaciones se harán de manera _nombrada_ de acuerdo al siguiente ejemplo:

- Archivo de exportación

    export const MyComponent = () => {};

- Archivo de importación

    import {MyComponent} from "...";

## Buena práctica nº7: Cuándo elegir Bootstrap y cuándo elegir CSS

A debatir.

## Buena práctica nº8: Imágenes desde local y comprimidas

Todas las imágenes ha ser reproducidas dentro de la aplicación habrán de estar debidamente cargadas en la carpeta creada a tal efecto.

Todas las imágenes que no necesiten transparencia serán almacenadas en formato .jpeg o .jpg.

Todas las imágenes que necesiten transparencia serán almacenadas en formato .png.

A partir de ahí, todas las imágenes tienen que estar debidamente comprimidas, con unas dimensiones no mucho mayores —en todo caso— a 1024px en su lado mayor y un peso nunca superior a los 100 Kb.
