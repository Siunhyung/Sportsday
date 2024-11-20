// List of events and their times
const events = [
  { name: "100m Dash", time: "2024-11-20T09:00:00", students: [{ name: "Alice", time: "12.5s" }, { name: "Bob", time: "13.1s" }] },
  { name: "200m Relay", time: "2024-11-20T10:00:00", students: [{ name: "Charlie", time: "25.8s" }, { name: "Diana", time: "24.3s" }] },
  { name: "High Jump", time: "2024-11-20T11:30:00", students: [{ name: "Eve", time: "1.8m" }, { name: "Frank", time: "1.9m" }] },
  { name: "Lunch Break", time: "2024-11-20T12:30:00", students: [] },
  { name: "Long Jump", time: "2024-11-20T14:00:00", students: [{ name: "Grace", time: "5.6m" }, { name: "Hank", time: "5.9m" }] },
  { name: "400m Relay", time: "2024-11-20T15:30:00", students: [{ name: "Ivy", time: "55.4s" }, { name: "Jack", time: "54.1s" }] },
];

// Currently open event
let openEvent = null;

// Function to display events
function displayEvents() {
  const eventsList = document.getElementById("eventsList");
  const now = new Date();

  events.forEach((event, index) => {
    const eventTime = new Date(event.time);
    const listItem = document.createElement("li");
    listItem.classList.add("event-item");
    listItem.textContent = `${event.name} - ${eventTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    // Add a crossed-out class if the event time has passed
    if (now > eventTime) {
      listItem.classList.add("crossed-out");
    }

    // Click event to toggle student list
    listItem.addEventListener("click", () => toggleStudentList(index));

    eventsList.appendChild(listItem);
  });
}

// Function to toggle student list
function toggleStudentList(index) {
  const event = events[index];
  const eventsList = document.getElementById("eventsList");

  // Remove any existing student lists
  const existingList = document.querySelector(".student-list");
  if (existingList) existingList.remove();

  // If the same event is clicked again, close the list
  if (openEvent === index) {
    openEvent = null;
    return;
  }

  // Set the current event as open
  openEvent = index;

  // Create the student list
  const studentList = document.createElement("ul");
  studentList.classList.add("student-list");

  if (event.students.length === 0) {
    const noStudents = document.createElement("li");
    noStudents.textContent = "No students participated.";
    studentList.appendChild(noStudents);
  } else {
    event.students.forEach((student) => {
      const studentItem = document.createElement("li");
      studentItem.textContent = `${student.name} - ${student.time}`;
      studentList.appendChild(studentItem);
    });
  }

  // Insert the student list after the clicked event
  const eventItems = document.querySelectorAll(".event-item");
  eventItems[index].after(studentList);
}

// Call the function when the page loads
window.onload = displayEvents;
