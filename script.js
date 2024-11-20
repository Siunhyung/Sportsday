// List of events with categories, times, and student data
const events = [
  {
    type: "Shot Putt",
    events: [
      { category: "U7 Girls", time: "2024-11-20T08:30:00", students: [{ name: "Alice", performance: "3.2m" }, { name: "Bob", performance: "3.1m" }] },
      { category: "U7 Boys", time: "2024-11-20T08:30:00", students: [{ name: "Charlie", performance: "3.4m" }, { name: "David", performance: "3.2m" }] },
      { category: "U9 Girls", time: "2024-11-20T09:00:00", students: [{ name: "Eve", performance: "3.6m" }, { name: "Frank", performance: "3.5m" }] },
      { category: "U9 Boys", time: "2024-11-20T09:00:00", students: [{ name: "Grace", performance: "3.8m" }, { name: "Henry", performance: "3.7m" }] },
      { category: "U11 Girls", time: "2024-11-20T09:30:00", students: [{ name: "Ivy", performance: "4.1m" }, { name: "Jack", performance: "4.0m" }] },
      { category: "U11 Boys", time: "2024-11-20T09:30:00", students: [{ name: "Kate", performance: "4.3m" }, { name: "Liam", performance: "4.2m" }] },
      { category: "U13 Girls", time: "2024-11-20T10:00:00", students: [{ name: "Mia", performance: "4.5m" }, { name: "Noah", performance: "4.4m" }] },
      { category: "U13 Boys", time: "2024-11-20T10:00:00", students: [{ name: "Olivia", performance: "4.8m" }, { name: "Paul", performance: "4.7m" }] },
      { category: "U15 Girls", time: "2024-11-20T10:15:00", students: [{ name: "Quinn", performance: "5.0m" }, { name: "Ryan", performance: "4.9m" }] },
      { category: "U15 Boys", time: "2024-11-20T10:15:00", students: [{ name: "Sophia", performance: "5.2m" }, { name: "Tom", performance: "5.1m" }] },
    ],
  },
  {
    type: "Long Jump",
    events: [
      { category: "U7 Girls", time: "2024-11-20T08:30:00", students: [{ name: "Alice", performance: "1.8m" }, { name: "Bob", performance: "1.7m" }] },
      { category: "U7 Boys", time: "2024-11-20T08:30:00", students: [{ name: "Charlie", performance: "1.9m" }, { name: "David", performance: "1.8m" }] },
      { category: "U9 Girls", time: "2024-11-20T09:00:00", students: [{ name: "Eve", performance: "2.0m" }, { name: "Frank", performance: "1.9m" }] },
      { category: "U9 Boys", time: "2024-11-20T09:00:00", students: [{ name: "Grace", performance: "2.1m" }, { name: "Henry", performance: "2.0m" }] },
      { category: "U11 Girls", time: "2024-11-20T09:30:00", students: [{ name: "Ivy", performance: "2.3m" }, { name: "Jack", performance: "2.2m" }] },
      { category: "U11 Boys", time: "2024-11-20T09:30:00", students: [{ name: "Kate", performance: "2.4m" }, { name: "Liam", performance: "2.3m" }] },
      { category: "U13 Girls", time: "2024-11-20T10:00:00", students: [{ name: "Mia", performance: "2.6m" }, { name: "Noah", performance: "2.5m" }] },
      { category: "U13 Boys", time: "2024-11-20T10:00:00", students: [{ name: "Olivia", performance: "2.8m" }, { name: "Paul", performance: "2.7m" }] },
      { category: "U15 Girls", time: "2024-11-20T10:15:00", students: [{ name: "Quinn", performance: "3.0m" }, { name: "Ryan", performance: "2.9m" }] },
      { category: "U15 Boys", time: "2024-11-20T10:15:00", students: [{ name: "Sophia", performance: "3.2m" }, { name: "Tom", performance: "3.1m" }] },
    ],
  },
];

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
