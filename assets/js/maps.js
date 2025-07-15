// Google Maps integration for RSM locations
let map;
let markers = [];
let infoWindow;

// Initialize Google Maps
function initMap() {
    // Center the map on the US (approximately Kansas)
    const center = { lat: 39.8283, lng: -98.5795 };
    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: center,
        styles: [
            {
                "featureType": "all",
                "stylers": [
                    { "saturation": -20 }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    { "visibility": "off" }
                ]
            }
        ]
    });

    infoWindow = new google.maps.InfoWindow();
    
    // Add markers for all locations
    addLocationMarkers();
}

// Add markers for all RSM locations
function addLocationMarkers(locationsToShow = null) {
    // Clear existing markers
    clearMarkers();
    
    const locations = locationsToShow || getAllLocations();
    
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: formatLocationName(location),
            icon: {
                url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z" fill="#005dab"/>
                    </svg>
                `),
                scaledSize: new google.maps.Size(24, 24),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(12, 24)
            }
        });

        // Create info window content
        const locationURL = generateLocationURL(location);
        const infoContent = `
            <div style="padding: 8px; max-width: 250px;">
                <h3 style="margin: 0 0 8px 0; color: #005dab; font-weight: bold;">${location.name}</h3>
                <p style="margin: 0; color: #666; font-size: 14px;">${formatLocationName(location)}</p>
                ${location.zip ? `<p style="margin: 4px 0 0 0; color: #666; font-size: 12px;">ZIP: ${location.zip}</p>` : ''}
                <div style="margin-top: 12px; display: flex; flex-direction: column; gap: 6px;">
                    <a href="${locationURL}" target="_blank" style="color: #005dab; text-decoration: none; font-weight: bold; font-size: 12px; display: inline-flex; align-items: center;">
                        🏫 Visit ${location.name} Website
                    </a>
                    <a href="#contact" style="color: #94c041; text-decoration: none; font-weight: bold; font-size: 12px; display: inline-flex; align-items: center;">
                        📅 Schedule Assessment
                    </a>
                </div>
            </div>
        `;

        marker.addListener('click', () => {
            infoWindow.setContent(infoContent);
            infoWindow.open(map, marker);
        });

        markers.push(marker);
    });
    
    // Adjust map bounds to fit all markers if there are any
    if (markers.length > 0) {
        const bounds = new google.maps.LatLngBounds();
        markers.forEach(marker => {
            bounds.extend(marker.getPosition());
        });
        map.fitBounds(bounds);
        
        // Set a minimum zoom level
        google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
            if (map.getZoom() > 10) {
                map.setZoom(10);
            }
        });
    }
}

// Clear all markers from the map
function clearMarkers() {
    markers.forEach(marker => {
        marker.setMap(null);
    });
    markers = [];
}

// Search and filter locations
function filterLocations(searchTerm) {
    const filteredLocations = searchLocations(searchTerm);
    addLocationMarkers(filteredLocations);
    return filteredLocations;
}

// Initialize map when page loads
window.initMap = initMap;