// List of events and their times
const events = [
  { name: "100m Dash", time: "2024-11-20T09:00:00" },
  { name: "200m Relay", time: "2024-11-20T10:00:00" },
  { name: "High Jump", time: "2024-11-20T11:30:00" },
  { name: "Lunch Break", time: "2024-11-20T12:30:00" },
  { name: "Long Jump", time: "2024-11-20T14:00:00" },
  { name: "400m Relay", time: "2024-11-20T15:30:00" },
];

// Function to display events
function displayEvents() {
  const eventsList = document.getElementById("eventsList");
  const now = new Date();

  events.forEach((event) => {
    const eventTime = new Date(event.time);
    const listItem = document.createElement("li");

    listItem.textContent = `${event.name} - ${eventTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    
    // Add a crossed-out class if the event time has passed
    if (now > eventTime) {
      listItem.classList.add("crossed-out");
    }

    eventsList.appendChild(listItem);
  });
}

// Call the function when the page loads
window.onload = displayEvents;
