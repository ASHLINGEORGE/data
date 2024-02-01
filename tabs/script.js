document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tabs a");
    const tabContent = document.getElementById("tab-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();
            loadTabContent(tab.href);
            loadTabScript(tab.getAttribute("data-js"));
        });
    });

    function loadTabContent(url) {
        fetch(url)
            .then((response) => response.text())
            .then((data) => {
                tabContent.innerHTML = data;
            })
            .catch((error) => {
                console.error("Error loading content:", error);
            });
    }

    function loadTabScript(scriptUrl) {
        const script = document.createElement("script");
        script.src = scriptUrl;

        // Remove any existing scripts from the tab content
        const existingScript = tabContent.querySelector("script");
        if (existingScript) {
            existingScript.remove();
        }

        // Append the new script to the tab content
        tabContent.appendChild(script);
    }

    // Load the default tab content (e.g., Tab 1)
    loadTabContent(tabs[0].href);
    loadTabScript(tabs[0].getAttribute("data-js"));
});