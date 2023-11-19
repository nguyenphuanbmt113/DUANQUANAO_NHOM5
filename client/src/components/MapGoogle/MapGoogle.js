import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
export const MapGoogle = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyCe92_jWytokRP0Ejrgx4TuekBolaETxfY",
    });

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <>
            <Map></Map>
        </>
    );
};
function Map() {
    const containerStyle = {
        "max-width": "1340px",
        margin: "50px auto",
        width: "100%",
        height: "500px",
    };

    const center = {
        lat: -3.745,
        lng: -38.523,
    };
    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        ></GoogleMap>
    );
}
