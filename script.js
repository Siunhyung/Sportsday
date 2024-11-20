// List of events with categories and times
const events = [
  {
    type: "Shot Putt",
    events: [
      { category: "U7 Girls", time: "2024-11-20T08:30:00", students: [{ name: "Alice", performance: "3.2m" }, { name: "Bob", performance: "3.0m" }] },
      { category: "U7 Boys", time: "2024-11-20T08:30:00", students: [{ name: "Charlie", performance: "3.5m" }, { name: "David", performance: "3.1m" }] },
      // Add more categories as needed
    ],
  },
  {
    type: "Long Jump",
    events: [
      { category: "U7 Girls", time: "2024-11-20T08:30:00", students: [{ name: "Eve", performance: "1.8m" }, { name: "Frank", performance: "1.6m" }] },
      { category: "U7 Boys", time: "2024-11-20T08:30:00", students: [{ name: "Grace", performance: "1.9m" }, { name: "Henry", performance: "1.7m" }] },
      // Add more categories as needed
    ],
  },
];

// Currently open event tracking
let openCategory = null;

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

  // Create the student list
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

  // Insert the student list after the clicked event
  const eventItems = document.querySelectorAll(".event-item");
  eventItems[Array.from(eventItems).findIndex((el) => el.textContent.includes(event.category))].after(studentList);
}

// Call the function when the page loads
window.onload = displayEvents;
