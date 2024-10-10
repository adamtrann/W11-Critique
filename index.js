var specVis1 = "Visualisation/AQI_Syd.vg.json";
var specVis2 = "Visualisation/AQI_Vic.vg.json";
var specVis3 = "Visualisation/fire_state.vg.json";
var specVis4 = "Visualisation/forest_burn.vg.json";
var specVis5 = "Visualisation/mean_temp_dev_vg.json";
var specVis6 = "Visualisation/rainfall.vg.json";
var specVis7 = "Visualisation/wildlife_deaths.vg.json";



vegaEmbed('#vis1', specVis1, { "actions": false }).then(function (result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

vegaEmbed('#vis2', specVis2, { "actions": false }).then(function (result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

vegaEmbed('#vis3', specVis3, { "actions": false }).then(function (result) {
    // Access the Vega view instance as result.view
  }).catch(console.error);
  
  vegaEmbed('#vis4', specVis4, { "actions": false }).then(function (result) {
    // Access the Vega view instance as result.view
  }).catch(console.error);

  vegaEmbed('#vis5', specVis5, { "actions": false }).then(function (result) {
    // Access the Vega view instance as result.view
  }).catch(console.error);
  
  vegaEmbed('#vis6', specVis6, { "actions": false }).then(function (result) {
    // Access the Vega view instance as result.view
  }).catch(console.error);

  vegaEmbed('#vis7', specVis7, { "actions": false }).then(function (result) {
    // Access the Vega view instance as result.view
  }).catch(console.error);