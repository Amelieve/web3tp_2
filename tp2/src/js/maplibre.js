import maplibregl from "maplibre-gl";

const carte = new maplibregl.Map({
  container: "m",    
  style: "https://demotiles.maplibre.org/style.json",
  center: [45.9652533, 9.1999174,17z],
  zoom: 12
});
new maplibregl.Marker()
  .setLngLat([45.9652533, 9.1999174,17z])
  .addTo(carte);