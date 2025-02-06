document.addEventListener("DOMContentLoaded", function () {
    // Loading Screen
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 2000); // Adjust duration as needed
  
    // Tableau Embed Script for Dashboard
    const dashboardPlaceholder = document.getElementById("dashboardPlaceholder");
    const dashboardObject = dashboardPlaceholder.getElementsByTagName("object")[0];
    dashboardObject.style.width = "100%";
    dashboardObject.style.height = window.innerHeight * 0.8 + "px";
    const dashboardScript = document.createElement("script");
    dashboardScript.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    dashboardObject.parentNode.insertBefore(dashboardScript, dashboardObject);
  
    // Tableau Embed Script for Story
    const storyPlaceholder = document.getElementById("storyPlaceholder");
    const storyObject = storyPlaceholder.getElementsByTagName("object")[0];
    storyObject.style.width = "100%";
    storyObject.style.height = window.innerHeight * 0.8 + "px";
    const storyScript = document.createElement("script");
    storyScript.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    storyObject.parentNode.insertBefore(storyScript, storyObject);
  });
  
  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
  