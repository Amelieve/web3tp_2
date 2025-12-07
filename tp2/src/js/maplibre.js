/* Style des maps */
const styleBase = {
  version: 8,
  sources: {
    osm: {
      type: "raster",
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256
    }
  },
  layers: [
    {
      id: "osm-layer",
      type: "raster",
      source: "osm",
      paint: {
        "raster-opacity": 1
      }
    }
  ]
};
/* Code map point précis */
const carte = new maplibregl.Map({
  container: "map",
  /* Utilisation du style d'en haut */
  style: styleBase,
  /* Données de la map */
  center: [9.202387,45.965105],
  zoom: 17,
  /* Enlever information */
  attributionControl: false
});

new maplibregl.Marker()
  .setLngLat([9.202387,45.965105])
  .addTo(carte);


/* Code map terre */
  const carte2 = new maplibregl.Map({ 
    container: "mp",
    /* Style pour la terre complète */
    style: "https://tiles.openfreemap.org/styles/bright",
    /* Aucun endroit précis */
    center: [0, 0],
    zoom: 1,
    bearing: 0,
    pitch: 0,
    /* Enlever information */
    attributionControl: false
});

carte2.on("style.load", () => {
    carte2.setProjection({ type: "globe" });
});

