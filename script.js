// List of events with types, categories, times, and student data
const events = [
  {
    type: "Shot Putt",
    events: [
      { category: "U7 Girls", time: "2024-11-20T08:30:00", students: [{ name: "Alice", performance: "3.2m" }, { name: "Bob", performance: "3.1m" }] },
      { category: "U7 Boys", time: "2024-11-20T08:30:00", students: [{ name: "Charlie", performance: "3.5m" }, { name: "David", performance: "3.4m" }] },
    ],
  },
  {
    type: "Javelin",
    events: [
      { category: "U7 Girls", time: "2024-11-20T08:30:00", students: [{ name: "Eve", performance: "18m" }, { name: "Frank", performance: "17.5m" }] },
      { category: "U7 Boys", time: "2024-11-20T08:30:00", students: [{ name: "Grace", performance: "19m" }, { name: "Henry", performance: "18.8m" }] },
    ],
  },
];

let openEventType = null; // Keeps track of the open event type
let openSubEvent = null; // Keeps track of the open sub-event

// Function to display event types
function displayEvents() {
  const eventsList = document.getElementById("eventsList");
  eventsList.innerHTML = ""; // Clear existing content

  events.forEach((eventType, typeIndex) => {
    // Add event type as a clickable header
    const header = document.createElement("h2");
    header.textContent = eventType.type;
    header.classList.add("event-header");
    header.addEventListener("click", () => toggleEventType(typeIndex));
    eventsList.appendChild(header);
  });
}

// Toggle sub-events for an event type (e.g., "Shot Putt")
function toggleEventType(typeIndex) {
  const eventType = events[typeIndex];
  const eventsList = document.getElementById("eventsList");

  // Remove any existing sub-event lists
  const existingSubEventList = document.querySelector(".sub-event-list");
  if (existingSubEventList) existingSubEventList.remove();

  // If the same event type is clicked again, close the list
  if (openEventType === typeIndex) {
    openEventType = null;
    return;
  }

  // Set the current event type as open
  openEventType = typeIndex;

  // Create a sub-event list for the selected event type
  const subEventList = document.createElement("ul");
  subEventList.classList.add("sub-event-list");

  eventType.events.forEach((event, eventIndex) => {
    const subEventItem = document.createElement("li");
    const eventTime = new Date(event.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    subEventItem.textContent = `${event.category} - ${eventTime}`;
    subEventItem.classList.add("sub-event-item");
    subEventItem.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent triggering the parent event type click
      toggleSubEvent(typeIndex, eventIndex);
    });
    subEventList.appendChild(subEventItem);
  });

  // Insert the sub-event list after the clicked event type header
  const headers = document.querySelectorAll(".event-header");
  headers[typeIndex].after(subEventList);
}

// Toggle student list for a sub-event (e.g., "U7 Girls")
function toggleSubEvent(typeIndex, eventIndex) {
  const eventType = events[typeIndex];
  const event = eventType.events[eventIndex];
  const eventsList = document.getElementById("eventsList");

  // Remove any existing student lists
  const existingStudentList = document.querySelector(".student-list");
  if (existingStudentList) existingStudentList.remove();

  // If the same sub-event is clicked again, close the list
  if (openSubEvent === `${typeIndex}-${eventIndex}`) {
    openSubEvent = null;
    return;
  }

  // Set the current sub-event as open
  openSubEvent = `${typeIndex}-${eventIndex}`;

  // Create a student list for the selected sub-event
  const studentList = document.createElement("ul");
  studentList.classList.add("student-list");

  if (!event.students || event.students.length === 0) {
    const noStudents = document.createElement("li");
    noStudents.textContent = "No students participated.";
    studentList.appendChild(noStudents);
  } else {
    event.students.forEach((student) => {
      const studentItem = document.createElement("li");
      studentItem.textContent = `${student.name} - ${student.performance}`;
      studentList.appendChild(studentItem);
    });
  }

  // Insert the student list after the clicked sub-event
  const subEventItems = document.querySelectorAll(".sub-event-item");
  subEventItems[eventIndex].after(studentList);
}

// Call the function when the page loads
window.onload = displayEvents;
