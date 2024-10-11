class LeafletMap {
    
    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();
    }

    initTileLayer() {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    addMarker(lat, lng, message) {
        const marker = L.marker([lat, lng]).addTo(this.map);
        marker.bindPopup(message);
    }

    loadMarkersFromJson(url) {
        fetch(url)
            .then(response => response.html())
            .then(data => {
                data.forEach(marker => {
                    this.addMarker(marker.latitude, marker.longitude, marker.message);
                });
            })
            .catch(error => console.error('Error loading markers:', error));
    }
}

const myMap = new LeafletMap('map', [8.204911, 124.857932], 16);

myMap.addMarker (8.203298, 124.856522, 'Parking Lot 1');
myMap.addMarker (8.204737, 124.856543, 'Parking Lot 2');
myMap.addMarker (8.205496, 124.857166, 'Comfort Room');
myMap.addMarker (8.205857, 124.857519, 'Dahilayan Adventure Park');
myMap.addMarker (8.205082, 124.857460, 'Picnic Grounds');
myMap.addMarker (8.202841, 124.857423, 'Forest Putt Mini Golf');

myMap.loadMarkersFromJson('diego.json');
