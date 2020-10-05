// console.log("Hello World!");
import { markerBuilder } from "./marker";

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWljaGVsaW5ld3UiLCJhIjoiY2tmd3A5aWd5MTVjNTJybXRwZmRnbDUzbiJ9.dQVNQNqgDZD2Kp_rJzpI8g";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v11", // mapbox has lots of different map styles available.
});

const marker = document.createElement("marker");
marker.style.width = "32px";
marker.style.height = "39px";
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// const marker = new Marker(options: Object?, legacyOptions: Options?)

// const one = new mapboxgl.Marker(marker)
//   .setLngLat([-73.9857, 40.7484])
//   .addTo(map);

markerBuilder("hotel", [-73.9857, 40.7484]).addTo(map);

markerBuilder("restaurant", [-74.009151, 40.705086]).addTo(map);

// NY [-74.009151, 40.705086]
// Chicago [-87.641, 41.895]

// const two = new mapboxgl.Marker(marker)
// .setLngLat([-74.009151, 40.705086])
// .addTo(map);
