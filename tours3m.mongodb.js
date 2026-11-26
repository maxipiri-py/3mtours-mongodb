use('tours3m_db');
// ===== CREATE =====
// 1 ficha nueva
db.tours.insertOne({
  "codigo_tour": "TOUR-014",
  "nombre": "Kayak Lago Llanquihue",
  "destino": "Puerto Varas",
  "estado": "activo",
  "precio": 95000,
  "cupos_disponibles": 20,
  "activo": true,
  "fecha_tour": new Date("2026-12-15"),
  "operador": { "nombre": "Volcanes Activos Tours" },
  "ubicacion": { "ciudad": "Puerto Varas", "punto_encuentro": "Muelle Costanera" },
  "promocion": { "descuento": 10 },
  "etiquetas": ["aventura", "lago", "familiar"],
  "incluye": ["kayak", "chaleco", "snack"],
  "idiomas_guia": ["español", "inglés"],
  "itinerario": [
    { "hora": "09:00", "actividad": "Seguridad" },
    { "hora": "09:30", "actividad": "Remada" },
  ],
  "resenas": [
    {
      "usuario": "Maximiliano S.",
      "puntaje": 5,
      "comentario": "Excelente experiencia, el guia muy profesional.",
    },
  ],
  "fecha_registro": new Date(),
});
// Lote inicial: 10 tours de la tabla TOURS de Oracle (activos, cancelados, inactivos y sin cupos)
db.tours.insertMany([
  {
    "codigo_tour": "TOUR-001",
    "nombre": "Palafitos de Castro",
    "destino": "Chiloe",
    "estado": "cancelado",
    "precio": 72000,
    "cupos_disponibles": 14,
    "activo": false,
    "fecha_tour": new Date("2025-05-28"),
    "operador": { "nombre": "Rutas Patagonicas Ltda" },
    "ubicacion": { "ciudad": "Castro", "punto_encuentro": "Plaza de Armas" },
    "etiquetas": ["cultural", "patrimonio"],
    "incluye": ["transporte", "guia bilingue"],
    "idiomas_guia": ["español", "inglés"],
    "itinerario": [
      { "hora": "10:00", "actividad": "Palafitos de Gamboa" },
      { "hora": "12:00", "actividad": "Mercado de Castro" },
    ],
    "resenas": [],
    "fecha_registro": new Date(),
  },
  {
    "codigo_tour": "TOUR-002",
    "nombre": "Iglesias Patrimoniales de Chiloe",
    "destino": "Chiloe",
    "estado": "activo",
    "precio": 35000,
    "cupos_disponibles": 10,
    "activo": true,
    "fecha_tour": new Date("2025-03-05"),
    "operador": { "nombre": "Sur Travel Experience" },
    "ubicacion": { "ciudad": "Castro", "punto_encuentro": "Iglesia San Francisco" },
    "etiquetas": ["cultural", "patrimonio", "familiar"],
    "incluye": ["transporte", "guia bilingue"],
    "idiomas_guia": ["español", "inglés"],
    "itinerario": [
      { "hora": "09:00", "actividad": "Iglesia de Castro" },
      { "hora": "11:30", "actividad": "Iglesia de Dalcahue" },
    ],
    "resenas": [],
    "fecha_registro": new Date(),
  },
  {
    "codigo_tour": "TOUR-003",
    "nombre": "Curanto y Cultura Chilota",
    "destino": "Chiloe",
    "estado": "activo",
    "precio": 85000,
    "cupos_disponibles": 9,
    "activo": true,
    "fecha_tour": new Date("2025-10-13"),
    "operador": { "nombre": "Volcanes Activos Tours" },
    "ubicacion": { "ciudad": "Castro", "punto_encuentro": "Feria Yumbel" },
    "etiquetas": ["gastronomia", "cultural"],
    "incluye": ["transporte", "guia bilingue", "almuerzo"],
    "idiomas_guia": ["español", "inglés"],
    "itinerario": [
      { "hora": "11:00", "actividad": "Preparacion del curanto" },
      { "hora": "13:00", "actividad": "Almuerzo" },
    ],
    "resenas": [
      { "usuario": "Fernanda L.", "puntaje": 2, "comentario": "Buena relacion precio calidad." },
    ],
    "fecha_registro": new Date(),
  },
  {
    "codigo_tour": "TOUR-004",
    "nombre": "Parque Tantauco Full Day",
    "destino": "Chiloe",
    "estado": "activo",
    "precio": 48000,
    "cupos_disponibles": 8,
    "activo": true,
    "fecha_tour": new Date("2025-04-12"),
    "operador": { "nombre": "Ruta Lacustre SpA" },
    "ubicacion": { "ciudad": "Quellon", "punto_encuentro": "Acceso Parque Tantauco" },
    "etiquetas": ["naturaleza", "aventura", "familiar"],
    "incluye": ["transporte", "guia bilingue"],
    "idiomas_guia": ["español", "inglés"],
    "itinerario": [
      { "hora": "08:00", "actividad": "Salida desde Quellon" },
      { "hora": "10:00", "actividad": "Sendero Lago Chaiguata" },
    ],
    "resenas": [],
    "fecha_registro": new Date(),
  },
  {
    "codigo_tour": "TOUR-005",
    "nombre": "Carretera Austral Norte",
    "destino": "Patagonia",
    "estado": "activo",
    "precio": 55000,
    "cupos_disponibles": 2,
    "activo": true,
    "fecha_tour": new Date("2025-08-23"),
    "operador": { "nombre": "Volcanes Activos Tours" },
    "ubicacion": { "ciudad": "Puerto Montt", "punto_encuentro": "Terminal de buses" },
    "etiquetas": ["aventura", "naturaleza"],
    "incluye": ["transporte", "guia bilingue", "almuerzo"],
    "idiomas_guia": ["español", "inglés"],
    "itinerario": [
      { "hora": "07:00", "actividad": "Salida" },
      { "hora": "12:00", "actividad": "Hornopiren" },
    ],
    "resenas": [
      {
        "usuario": "Agustin S.",
        "puntaje": 3,
        "comentario": "Paisajes increibles, totalmente recomendado.",
      },
    ],
    "fecha_registro": new Date(),
  },
  {
    "codigo_tour": "TOUR-007",
    "nombre": "Fiordos de Patagonia",
    "destino": "Patagonia",
    "estado": "activo",
    "precio": 72000,
    "cupos_disponibles": 0,
    "activo": true,
    "fecha_tour": new Date("2025-09-04"),
    "operador": { "nombre": "Rutas Patagonicas Ltda" },
    "ubicacion": { "ciudad": "Puerto Aysen", "punto_encuentro": "Muelle Puerto Chacabuco" },
    "etiquetas": ["naturaleza", "navegacion"],
    "incluye": ["transporte", "guia bilingue", "almuerzo"],
    "idiomas_guia": ["español", "inglés"],
    "itinerario": [
      { "hora": "08:30", "actividad": "Embarque" },
      { "hora": "13:00", "actividad": "Almuerzo a bordo" },
    ],
    "resenas": [
      {
        "usuario": "Fernanda L.",
        "puntaje": 5,
        "comentario": "Una de las mejores actividades del viaje.",
      },
      { "usuario": "Camila C.", "puntaje": 5, "comentario": "Buena relacion precio calidad." },
    ],
    "fecha_registro": new Date(),
  },
  {
    "codigo_tour": "TOUR-009",
    "nombre": "Costanera y Teatro del Lago",
    "destino": "Frutillar",
    "estado": "inactivo",
    "precio": 110000,
    "cupos_disponibles": 0,
    "activo": false,
    "fecha_tour": new Date("2025-03-30"),
    "operador": { "nombre": "Volcanes Activos Tours" },
    "ubicacion": { "ciudad": "Frutillar", "punto_encuentro": "Teatro del Lago" },
    "etiquetas": ["cultural", "familiar"],
    "incluye": ["transporte", "guia bilingue"],
    "idiomas_guia": ["español", "inglés"],
    "itinerario": [
      { "hora": "17:00", "actividad": "Costanera" },
      { "hora": "19:00", "actividad": "Teatro del Lago" },
    ],
    "resenas": [
      {
        "usuario": "Fernanda L.",
        "puntaje": 4,
        "comentario": "El precio vale la pena, volveria a repetir.",
      },
    ],
    "fecha_registro": new Date(),
  },
  {
    "codigo_tour": "TOUR-013",
    "nombre": "Saltos del Petrohue",
    "destino": "Puerto Varas",
    "estado": "inactivo",
    "precio": 65000,
    "cupos_disponibles": 10,
    "activo": false,
    "fecha_tour": new Date("2025-08-10"),
    "operador": { "nombre": "Volcanes Activos Tours" },
    "ubicacion": { "ciudad": "Puerto Varas", "punto_encuentro": "Plaza de Armas" },
    "etiquetas": ["naturaleza", "familiar"],
    "incluye": ["transporte", "guia bilingue"],
    "idiomas_guia": ["español", "inglés"],
    "itinerario": [
      { "hora": "09:00", "actividad": "Salida" },
      { "hora": "10:30", "actividad": "Saltos del Petrohue" },
    ],
    "resenas": [
      { "usuario": "Felipe C.", "puntaje": 3, "comentario": "Falto organizacion en los horarios." },
    ],
    "fecha_registro": new Date(),
  },
  {
    "codigo_tour": "TOUR-015",
    "nombre": "Ciudad de las Rosas",
    "destino": "Puerto Varas",
    "estado": "activo",
    "precio": 35000,
    "cupos_disponibles": 5,
    "activo": true,
    "fecha_tour": new Date("2025-07-07"),
    "operador": { "nombre": "Chiloe Aventura SpA" },
    "ubicacion": { "ciudad": "Puerto Varas", "punto_encuentro": "Iglesia del Sagrado Corazon" },
    "etiquetas": ["cultural", "familiar"],
    "incluye": ["transporte", "guia bilingue"],
    "idiomas_guia": ["español", "inglés"],
    "itinerario": [
      { "hora": "10:00", "actividad": "Barrio historico" },
      { "hora": "11:30", "actividad": "Costanera" },
    ],
    "resenas": [],
    "fecha_registro": new Date(),
  },
  {
    "codigo_tour": "TOUR-016",
    "nombre": "Termas de Puyehue",
    "destino": "Osorno",
    "estado": "cancelado",
    "precio": 65000,
    "cupos_disponibles": 9,
    "activo": false,
    "fecha_tour": new Date("2025-10-06"),
    "operador": { "nombre": "Rutas Patagonicas Ltda" },
    "ubicacion": { "ciudad": "Puyehue", "punto_encuentro": "Termas Puyehue" },
    "etiquetas": ["relajo", "naturaleza"],
    "incluye": ["transporte", "guia bilingue", "entrada a termas"],
    "idiomas_guia": ["español", "inglés"],
    "itinerario": [{ "hora": "11:00", "actividad": "Piscinas termales" }],
    "resenas": [],
    "fecha_registro": new Date(),
  },
]);
// ===== READ =====
// Activos entre $30.000 y $60.000
db.tours.find(
  { "activo": true, "precio": { $gte: 30000, $lte: 60000 } },
  { "_id": 0, "codigo_tour": 1, "nombre": 1, "precio": 1 },
);
// En Chiloé o Puerto Varas
db.tours.find(
  { "destino": { $in: ["Chiloe", "Puerto Varas"] } },
  { "_id": 0, "codigo_tour": 1, "nombre": 1, "destino": 1 },
);
// De aventura Y familiares
db.tours.find(
  { "etiquetas": { $all: ["aventura", "familiar"] } },
  { "_id": 0, "codigo_tour": 1, "nombre": 1, "etiquetas": 1 },
);
// Que NO incluyen almuerzo
db.tours.find(
  { "incluye": { $nin: ["almuerzo"] } },
  { "_id": 0, "codigo_tour": 1, "nombre": 1, "incluye": 1 },
);
// Subdocumento: tours de Puerto Varas
db.tours.find(
  { "ubicacion.ciudad": "Puerto Varas" },
  { "_id": 0, "codigo_tour": 1, "nombre": 1, "ubicacion": 1 },
);
// Sin cupos o cancelados
db.tours.find(
  { $or: [{ "cupos_disponibles": 0 }, { "estado": "cancelado" }] },
  { "_id": 0, "codigo_tour": 1, "nombre": 1, "cupos_disponibles": 1, "estado": 1 },
);
// Solo nombre y precio, sin _id, del más barato
db.tours.find({ "activo": true }, { "_id": 0, "nombre": 1, "precio": 1 }).sort({ "precio": 1 });
// Los 3 tours más caros
db.tours.find({}, { "_id": 0, "nombre": 1, "precio": 1 }).sort({ "precio": -1 }).limit(3);
// Destinos sin repetir
db.tours.distinct("destino");
// ===== UPDATE =====
// Reserva de 2 personas: resta solo si alcanzan
db.tours.updateOne(
  { "codigo_tour": "TOUR-014", "cupos_disponibles": { $gte: 2 } },
  { $inc: { "cupos_disponibles": -2 } },
);
// Reserva en un tour sin cupos: no modifica nada
db.tours.updateOne(
  { "codigo_tour": "TOUR-007", "cupos_disponibles": { $gte: 2 } },
  { $inc: { "cupos_disponibles": -2 } },
);
// Se cancela un tour
db.tours.updateOne(
  { "codigo_tour": "TOUR-002" },
  { $set: { "estado": "cancelado", "activo": false } },
);
// Termina la promoción
db.tours.updateOne({ "codigo_tour": "TOUR-014" }, { $unset: { "promocion": "" } });
// Temporada alta: +$5.000 en Chiloé
db.tours.updateMany({ "destino": "Chiloe" }, { $inc: { "precio": 5000 } });
// ===== DELETE =====
// 1. Antes de borrar, probar el mismo filtro
db.tours.countDocuments({ "estado": "cancelado", "activo": false });
// 2. Borrar los tours cancelados
db.tours.deleteMany({ "estado": "cancelado", "activo": false });
// Registro de prueba y su borrado puntual
db.tours.insertOne({
  "codigo_tour": "TOUR-PRUEBA",
  "nombre": "Registro de prueba",
  "activo": false,
});
db.tours.deleteOne({ "codigo_tour": "TOUR-PRUEBA" });
// Verificación final
db.tours.countDocuments({});
