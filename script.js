const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-btn");
sidebar.classList.toggle("collapsed");
document.querySelector("main").classList.toggle("collapsed");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  document.querySelector("main").classList.toggle("collapsed");
});

// Toggle Statistik
document.getElementById("toggle-statistics").addEventListener("click", () => {
  const statisticsSection = document.getElementById("statistics-section");
  const mapsSection = document.querySelector(".webgis-content");

  statisticsSection.classList.toggle("collapsed");

  if (statisticsSection.classList.contains("collapsed")) {
    mapsSection.style.flex = "1";
  } else {
    mapsSection.style.flex = "0.25";
  }
});

// get element
var suhu1 = document.getElementById("suhu-titik1");
var suhu2 = document.getElementById("suhu-titik2");
var suhu3 = document.getElementById("suhu-titik3");
var suhu4 = document.getElementById("suhu-titik4");

var kelembaban1 = document.getElementById("kelembaban-titik1");
var kelembaban2 = document.getElementById("kelembaban-titik2");
var kelembaban3 = document.getElementById("kelembaban-titik3");
var kelembaban4 = document.getElementById("kelembaban-titik4");


// fetch data
function fetchData() {
  var apiUrl =
    "https://api.thingspeak.com/channels/2798512/feeds/last.json?timezone=Asia%2FJakarta&api_key=OZ8G2N5D2QF2SV3M";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON:", data);

      suhu1.innerText = parseFloat(data.field4).toFixed(2);
      kelembaban1.innerText = parseFloat(data.field3).toFixed(2);
      document.getElementById("coordinate1").innerText = data.field1 + " | " + data.field2;   

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data.field1}&lon=${data.field2}&format=json`
      )
        .then((response) => response.json())
        .then((dataLoc) => {
          
          document.getElementById("type1").innerText = dataLoc.type;
          document.getElementById("address1").innerText = dataLoc.display_name;
        });
    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl2 =
    "https://api.thingspeak.com/channels/2798689/feeds/last.json?timezone=Asia%2FJakarta&api_key=A92K85CX026UDB9P";

  fetch(apiUrl2)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON:", data2);

      suhu2.innerText = parseFloat(data2.field4).toFixed(2);
      kelembaban2.innerText = parseFloat(data2.field3).toFixed(2);
      document.getElementById("coordinate2").innerText = data2.field1 + " | " + data2.field2;   

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data2.field1}&lon=${data2.field2}&format=json`
      )
        .then((response2) => response2.json())
        .then((dataLoc2) => {
          
          document.getElementById("type2").innerText = dataLoc2.type;
          document.getElementById("address2").innerText = dataLoc2.display_name;
        });
    })
    .catch((error) => console.error("Error fetching data:", error));
///////////////////////////////////////////////////////////////////////////////////////////////////
  var apiUrl3 =
    "https://api.thingspeak.com/channels/2790380/feeds/last.json?timezone=Asia%2FJakarta&api_key=MV0HEWPA894CJ5P3";

  fetch(apiUrl3)
    .then((response3) => response3.json())
    .then((data3) => {
      console.log("Response JSON:", data3);

      suhu3.innerText = parseFloat(data3.field4).toFixed(2);
      kelembaban3.innerText = parseFloat(data3.field3).toFixed(2);
      document.getElementById("coordinate3").innerText = data3.field1 + " | " + data3.field2;   

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data3.field1}&lon=${data3.field2}&format=json`
      )
        .then((response2) => response2.json())
        .then((dataLoc3) => {
          document.getElementById("type3").innerText = dataLoc3.type;
          document.getElementById("address3").innerText = dataLoc3.display_name;
        });
    })
    .catch((error) => console.error("Error fetching data:", error));
///////////////////////////////////////////////////////////////////////////////////////////////////
    var apiUrl4 =
      "https://api.thingspeak.com/channels/2798694/feeds/last.json?timezone=Asia%2FJakarta&api_key=D14S2H8MOHJ95AQH";

    fetch(apiUrl4)
    .then((response4) => response4.json())
    .then((data4) => {
      console.log("Response JSON:", data4);

      suhu4.innerText = parseFloat(data4.field4).toFixed(2);
      kelembaban4.innerText = parseFloat(data4.field3).toFixed(2);
      document.getElementById("coordinate4").innerText = data4.field1 + " | " + data4.field2;   

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data4.field1}&lon=${data4.field2}&format=json`
      )
        .then((response2) => response2.json())
        .then((dataLoc4) => {
          document.getElementById("type4").innerText = dataLoc4.type;
          document.getElementById("address4").innerText = dataLoc4.display_name;
        });
    })
    .catch((error) => console.error("Error fetching data:", error));
}

fetchData();