import mapboxgl from "mapbox-gl";

export const markerBuilder = function (type, coordinates) {
  const marker = document.createElement("marker");
  marker.style.width = "32px";
  marker.style.height = "39px";

  if (type === "hotel") {
    marker.style.backgroundImage = "url( http://i.imgur.com/D9574Cu.png)";
  } else if (type === "activity") {
    marker.style.backgroundImage = "url( http://i.imgur.com/WbMOfMl.png)";
  } else if (type === "restaurant") {
    marker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }

  return new mapboxgl.Marker(marker).setLngLat(coordinates);
  // .addTo(map);
};

// let x = {};
// export default x;
