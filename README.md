# 3M Tours – Evaluación Parcial N° 3 (MongoDB Atlas)

**Taller de Base de Datos (BDY1103) · Duoc UC Puerto Montt**

Integrantes: Maximiliano Cáceres, Yonathan Machado y Matías Sandoval.

## Contenido

- `tours3m.mongodb.js`: script completo utilizado en el trabajo (Create, Read, Update y Delete) sobre la colección `tours` de la base `tours3m_db` en MongoDB Atlas.

## Cómo ejecutarlo

1. Abrir el archivo en Visual Studio Code con la extensión **MongoDB for VS Code**.
2. Conectarse al cluster de MongoDB Atlas.
3. Ejecutar cada bloque con **Run Selected Lines** (el botón Play ejecuta el archivo completo).

## Modelo

Un documento = la ficha completa de un tour: campos simples, subdocumentos (`operador`, `ubicacion`, `promocion`), arreglos de texto (`etiquetas`, `incluye`, `idiomas_guia`) y arreglos de subdocumentos (`itinerario`, `resenas`).
