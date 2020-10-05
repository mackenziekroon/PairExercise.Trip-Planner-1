console.log('Hello World!')

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoibWljaGVsaW5ld3UiLCJhIjoiY2tmd3A5aWd5MTVjNTJybXRwZmRnbDUzbiJ9.dQVNQNqgDZD2Kp_rJzpI8g";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v11" // mapbox has lots of different map styles available.
});

// const marker = document.createElement("marker");
const marker = new Marker(options: Object?, legacyOptions: Options?)

const newYork0 = new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);
const newYork1 = new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.7051]).addTo(map);


// NY [-74.009151, 40.705086]
// Chicago [-87.641, 41.895]
