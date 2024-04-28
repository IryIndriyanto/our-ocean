import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import { icon } from "leaflet";

const ICON = icon({
  iconUrl: "/marker.png",
  iconSize: [30, 40],
});
export default function Map() {
  return (
    <MapContainer
      style={{ height: "100vh", zIndex: "0" }}
      center={[51.505, -0.09]}
      zoom={13}
      zoomControl={false}
    >
      <ClickComponent />
      <ZoomControl position="bottomright" />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} icon={ICON}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

function ClickComponent() {
  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      console.log("Clicked location:", lat, lng);
      map.locate();
    },
    locationfound: (location) => {
      console.log("location found:", location);
      // map.setView(location.latlng, 12)
    },
  });
  return null;
}
