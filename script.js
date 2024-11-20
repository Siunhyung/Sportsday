// List of events with categories and times
const events = [
  {
    type: "Shot Putt",
    events: [
      { category: "U7 Girls", time: "2024-11-20T08:30:00" },
      { category: "U7 Boys", time: "2024-11-20T08:30:00" },
      { category: "U9 Girls", time: "2024-11-20T09:00:00" },
      { category: "U9 Boys", time: "2024-11-20T09:00:00" },
      { category: "U11 Girls", time: "2024-11-20T09:30:00" },
      { category: "U11 Boys", time: "2024-11-20T09:30:00" },
      { category: "U13 Girls", time: "2024-11-20T10:00:00" },
      { category: "U13 Boys", time: "2024-11-20T10:00:00" },
      { category: "U15 Girls", time: "2024-11-20T10:15:00" },
      { category: "U15 Boys", time: "2024-11-20T10:15:00" },
    ],
  },
  {
    type: "Long Jump",
    events: [
      { category: "U7 Girls", time: "2024-11-20T08:30:00" },
      { category: "U7 Boys", time: "2024-11-20T08:30:00" },
      { category: "U9 Girls", time: "2024-11-20T09:00:00" },
      { category: "U9 Boys", time: "2024-11-20T09:00:00" },
      { category: "U11 Girls", time: "2024-11-20T09:30:00" },
      { category: "U11 Boys", time: "2024-11-20T09:30:00" },
      { category: "U13 Girls", time: "2024-11-20T10:00:00" },
      { category: "U13 Boys", time: "2024-11-20T10:00:00" },
      { category: "U15 Girls", time: "2024-11-20T10:15:00" },
      { category: "U15 Boys", time: "2024-11-20T10:15:00" },
    ],
  },
];

let openCategory = null; // To track the currently open category

// Function to display events with headers and sub-events
function displayEvents() {
  const eventsList = document.getElementById("eventsList");
  eventsList.innerHTML = ""; // Clear existing content

  const now = new Date();

  events.forEach((eventType, typeIndex) => {
    // Add event type as a header
    const header = document.createElement("h2");
    header.textContent = eventType.type;
    header.classList.add("event-header");
    eventsList.appendChild(header);

    // Add sub-events for the event type
    eventType.events.forEach((event, eventIndex) => {
      const eventTime = new Date(event.time);
      const listItem = document.createElement("li");
      listItem.classList.add("event-item");
      listItem.textContent = `${event.category} - ${eventTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;

      // Add a crossed-out class if the event time has passed
      if (now > eventTime) {
        listItem.classList.add("crossed-out");
      }

      // Click event to toggle student list
      listItem.addEventListener("click", () => toggleStudentList(typeIndex, eventIndex));
      eventsList.appendChild(listItem);
    });
  });
}

// Function to toggle student list for a specific sub-event
function toggleStudentList(typeIndex, eventIndex) {
  const eventType = events[typeIndex];
  const event = eventType.events[eventIndex];
  const eventsList = document.getElementById("eventsList");

  // Remove any existing student lists
  const existingList = document.querySelector(".student-list");
  if (existingList) existingList.remove();

  // If the same event is clicked again, close the list
  if (openCategory === `${typeIndex}-${eventIndex}`) {
    openCategory = null;
    return;
  }

  // Set the current category as open
  openCategory = `${typeIndex}-${eventIndex}`;

  // Fetch and display student data (dummy data for now)
  const students = [
    { name: "Alice", performance: "12.5s" },
    { name: "Bob", performance: "13.1s" },
  ]; // Replace with real data fetching logic

  // Create the student list
  const studentList = document.createElement("ul");
  studentList.classList.add("student-list");

  if (students.length === 0) {
    const noStudents = document.createElement("li");
    noStudents.textContent = "No students participated.";
    studentList.appendChild(noStudents);
  } else {
    students.forEach((student) => {
      const studentItem = document.createElement("li");
      studentItem.textContent = `${student.name} - ${student.performance}`;
      studentList.appendChild(studentItem);
    });
  }

  // Insert the student list after the clicked event
  const eventItems = document.querySelectorAll(".event-item");
  eventItems[eventIndex].after(studentList);
}

// Call the function when the page loads
window.onload = displayEvents;
