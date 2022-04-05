mapboxgl.accessToken = 
    'pk.eyJ1IjoiY29zaW1hcm9zaWUiLCJhIjoiY2t1d3BtYnF4MDZrcTJucXFoNGN1M3hkaCJ9.RgMCkP3mQoUKWG2O5Rw4Fw';
    const map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/cosimarosie/cl1mpjgy8001114lzv0qmkxpg', 
        center: [5.5029464582576715, 50.96530045035756], 
        zoom: 16 
    });

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right'); 
 

const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [5.5029464582576715, 50.96530045035756]
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.'
        }
      },
    ]
  };

 for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
  }