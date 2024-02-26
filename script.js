var map;
var startPoint = null;
var endPoint = null;

function GetMap() {
    map = new Microsoft.Maps.Map("#map2", {
        credentials: "Akhu8dQwRttMpSpKSt_dY2Zj9W_nyUyLObEcD-Ow6AVctBbKawYKzm8yLA2ZO2mX",
        center: new Microsoft.Maps.Location(28.68405990, 77.10249010),
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 12,
    });
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
        Microsoft.Maps.Events.addHandler(map, 'click', function (e) {
            if (startPoint === null) {
                startPoint = new Microsoft.Maps.Directions.Waypoint({ location: e.location });
                alert('start point is: ' + e.location.latitude + ', ' + e.location.longitude);
            } else if (endPoint === null) {
                endPoint = new Microsoft.Maps.Directions.Waypoint({ location: e.location });
                alert('snd point is: ' + e.location.latitude + ', ' + e.location.longitude);
                calculateRoute(startPoint, endPoint);
            }
        });
    });
}

function calculateRoute(startPoint, endPoint) {
    var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
    directionsManager.addWaypoint(startPoint);
    directionsManager.addWaypoint(endPoint);
    directionsManager.setRenderOptions({
        itineraryContainer: document.getElementById("directionsPanel"),
    });
    directionsManager.calculateDirections();
}
