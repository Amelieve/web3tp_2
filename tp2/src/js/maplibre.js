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

const carte = new maplibregl.Map({
  container: "map",
  style: styleBase,
  center: [9.202387,45.965105],
  zoom: 17
});

new maplibregl.Marker()
  .setLngLat([9.202387,45.965105])
  .addTo(carte);


