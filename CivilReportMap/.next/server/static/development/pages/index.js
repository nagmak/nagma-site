module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/nugget/Documents/CSProjects/CivilReportMap/pages/index.js";


var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "Hello Next.js"));
};

var apiKey = '<INSERT API KEY HERE>';
var map;
var drawingManager;

var lat, _long; // var selectedMarkers = [];
// var markerType;
// var setUnverifiableMark = (markerType) =>{
//     this.markerType = markerType;
// }


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 43.6532,
      lng: -79.3832
    },
    zoom: 15
  }); // WORKING ON SAVING MARKERRS TO THE GOOGLE MAPS 
  // MAYBE NEED TO GET THESE FROM THE DATABASE INSTEAD? to ensure accuracy?
  // if (selectedMarkers !== null){
  //     selectedMarkers.forEach(function(marker){
  //         var marker = new google.maps.Marker({
  //             position: new google.maps.LatLng(Number(marker.latitude), Number(marker.longitude)),
  //             map: map,
  //             draggable: true,
  //             icon: markerType,
  //         });
  //     });
  // };

  drawingManager = new google.maps.drawing.DrawingManager({
    drawingControl: false
  });
  /*drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYLINE,
      drawingControl: false,
      drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
              google.maps.drawing.OverlayType.POLYLINE
          ]
      },
      polylineOptions: {
          strokeColor: '#000000'
      }
  });*/

  drawingManager.setMap(map); // Snap-to-road when the polyline is completed.

  drawingManager.addListener('polylinecomplete', function (poly) {
    var path = poly.getPath();
    polylines.push(poly);
    placeIdArray = [];
    runSnapToRoad(path);
  }); // Clear button. Click to remove all polylines.

  $('#clear').click(function (ev) {
    for (var i = 0; i < polylines.length; ++i) {
      polylines[i].setMap(null);
    }

    polylines = [];
    ev.preventDefault();
    return false;
  });
  var displayLatitude = document.getElementById('latitude');
  var displayLongitude = document.getElementById('longitude');
  google.maps.event.addListener(map, "rightclick", function (event) {
    lat = event.latLng.lat();
    _long = event.latLng.lng(); //  var db = req.db;
    //  // Set our collection
    // var regularUser = db.get('regularUser');
    // populate yor box/field with lat, lng
    //  alert("Lat=" + lat + "; Lng=" + lng);
    // selectedMarkers.push(addMarker(event.latLng, map));

    displayLatitude.value = lat;
    displayLongitude.value = _long;
    getCloseRoad(event.latLng); //showMapMenu(event.latLng);
  }); // google.maps.event.addDomListener(window, 'load', initMap);

  /*google.maps.event.addListener(map, "mouseout", function(event) {
      removeMapMenu();
  });*/
}
/*
   Adds the marker to the map
   (needs work such as taking all the stored points in the database and placing them on the map)
   */


function addMarker(location, map) {
  var unverifiedMark = {
    path: 'M 2,2 2,2 2,2 2,2 2,2 z',
    fillColor: 'green',
    fillOpacity: 0.8,
    scale: 1.5,
    strokeColor: 'green',
    strokeWeight: 14
  };
  var verifiedMark = {
    path: 'M 2,2 2,2 2,2 2,2 2,2 z',
    fillColor: 'red',
    fillOpacity: 0.8,
    scale: 1.5,
    strokeColor: 'red',
    strokeWeight: 14
  };
  var falseMark = {
    path: 'M 2,2 2,2 2,2 2,2 2,2 z',
    fillColor: 'gray',
    fillOpacity: 0.8,
    scale: 1.5,
    strokeColor: 'gray',
    strokeWeight: 14
  };
  var dispatchedMark = {
    path: 'M 2,2 2,2 2,2 2,2 2,2 z',
    fillColor: 'blue',
    fillOpacity: 0.8,
    scale: 1.5,
    strokeColor: 'blue',
    strokeWeight: 14
  }; // setUnverifiableMark(unverifiedMark);

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    draggable: true,
    icon: unverifiedMark
  });
}

function getCloseRoad(caurrentLatLng) {
  pathCoord = [caurrentLatLng, caurrentLatLng];
  var pathRoad = new google.maps.Polyline({
    path: pathCoord,
    strokeOpacity: 0,
    strokeWeight: 1
  });
  pathRoad.setMap(map);
  runSnapToRoad(pathRoad.getPath()); //https://roads.googleapis.com/v1/nearestRoads?parameters&key=AIzaSyCA7uRtmPo9Dij18BiD-KUCejMR4HBQJPk
}

function getCanvasXY(caurrentLatLng) {
  var scale = Math.pow(2, map.getZoom());
  var nw = new google.maps.LatLng(map.getBounds().getNorthEast().lat(), map.getBounds().getSouthWest().lng());
  var worldCoordinateNW = map.getProjection().fromLatLngToPoint(nw);
  var worldCoordinate = map.getProjection().fromLatLngToPoint(caurrentLatLng);
  var caurrentLatLngOffset = new google.maps.Point(Math.floor((worldCoordinate.x - worldCoordinateNW.x) * scale), Math.floor((worldCoordinate.y - worldCoordinateNW.y) * scale));
  return caurrentLatLngOffset;
}

function setMenuXY(caurrentLatLng) {
  var mapWidth = $('#map_canvas').width();
  var mapHeight = $('#map_canvas').height();
  var menuWidth = $('.contextmenu').width();
  var menuHeight = $('.contextmenu').height();
  var clickedPosition = getCanvasXY(caurrentLatLng);
  var x = clickedPosition.x;
  var y = clickedPosition.y;
  if (mapWidth - x < menuWidth) x = x - menuWidth;
  if (mapHeight - y < menuHeight) y = y - menuHeight;
  $('.contextmenu').css('left', x);
  $('.contextmenu').css('top', y);
}

;

function showMapMenu(caurrentLatLng, dist) {
  var projection;
  var contextmenuDir;

  if (dist <= 25) {
    projection = map.getProjection();
    $('.contextmenu').remove();
    contextmenuDir = document.createElement("div");
    $(contextmenuDir).attr("tabindex", -1);
    contextmenuDir.className = 'contextmenu';
    contextmenuDir.innerHTML = "<a id='reportProblem' data-toggle='modal' data-target='#problemModal'><div class=context>Report a Problem<\/div><\/a><a id='menu2'><div class=context>menu item 2<\/div><\/a>";
    $(map.getDiv()).append(contextmenuDir);
    setMenuXY(caurrentLatLng);
    contextmenuDir.style.visibility = "visible";
    $(contextmenuDir).focus(); //console.log(document.activeElement);

    $(contextmenuDir).focusout(function () {
      $('.contextmenu').remove();
    });
  }
}
/*function removeMapMenu(){
    $('.contextmenu').remove();
}
  //
  drawingManager.setMap(map);


}
*/
// Snap a user-created polyline to roads and draw the snapped path


function runSnapToRoad(path) {
  var pathValues = [];
  var currPts = path.getAt(0);

  for (var i = 0; i < path.getLength(); i++) {
    pathValues.push(path.getAt(i).toUrlValue());
  }

  console.log(pathValues);
  $.get('https://roads.googleapis.com/v1/snapToRoads', {
    interpolate: true,
    key: apiKey,
    path: pathValues.join('|')
  }, function (data) {
    processSnapToRoadResponse(data, currPts); //drawSnappedPolyline();
  });
} // Store snapped polyline returned by the snap-to-road service.


function processSnapToRoadResponse(data, currPts) {
  snappedCoordinates = [];
  placeIdArray = [];
  var dist = 0;

  for (var i = 0; i < data.snappedPoints.length; i++) {
    var latlng = new google.maps.LatLng(data.snappedPoints[i].location.latitude, data.snappedPoints[i].location.longitude);
    snappedCoordinates.push(latlng);
    placeIdArray.push(data.snappedPoints[i].placeId);
  }

  dist = google.maps.geometry.spherical.computeDistanceBetween(latlng, currPts);
  console.log(google.maps.geometry.spherical.computeDistanceBetween(latlng, currPts));
  showMapMenu(currPts, dist);
} // Draws the snapped polyline (after processing snap-to-road response).

/*function drawSnappedPolyline() {
    var snappedPolyline = new google.maps.Polyline({
        path: snappedCoordinates,
        strokeColor: 'black',
        strokeWeight: 3,
        opacity: 1
    });

    snappedPolyline.setMap(map);
    //polylines.push(snappedPolyline);
}
*/


var getLat = function getLat() {
  console.log("dis" + lat);
  return lat;
};

var getLong = function getLong() {
  console.log("dis2" + _long);
  return _long;
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nugget/Documents/CSProjects/CivilReportMap/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map