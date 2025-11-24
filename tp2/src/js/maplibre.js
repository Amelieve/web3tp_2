import maplibregl from "maplibre-gl";

const carte = new maplibregl.Map({
  container: "map",                  
  style: "https://demotiles.maplibre.org/style.json",
  center: [9.1999174, 45.9652533],  
});

new maplibregl.Marker()
  .setLngLat([9.1999174, 45.9652533])   
  .addTo(carte);
