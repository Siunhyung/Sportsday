document.addEventListener("DOMContentLoaded", () => {
  const events = [
    { id: "100m", name: "100m Race", time: "09:00" },
    { id: "long-jump", name: "Long Jump", time: "10:30" },
    { id: "relay", name: "Relay Race", time: "11:15" },
    { id: "high-jump", name: "High Jump", time: "13:00" },
    { id: "400m", name: "400m Race", time: "14:30" },
  ];

  const eventList = document.getElementById("event-list");
  const studentList = document.getElementById("student-list");

  // Populate the event list
  events.forEach((event) => {
    const li = document.createElement("li");
    li.dataset.id = event.id;
    li.dataset.time = event.time;

    const eventName = document.createElement("span");
    eventName.textContent = event.name;

    const eventTime = document.createElement("span");
    eventTime.textContent = event.time;
    eventTime.classList.add("time");

    li.appendChild(eventName);
    li.appendChild(eventTime);
    eventList.appendChild(li);

    // Add click event to fetch students for this event
    li.addEventListener("click", () => fetchStudents(event.id));
  });

  // Function to check and update event statuses
  function checkEvents() {
    const now = new Date();

    document.querySelectorAll("#event-list li").forEach((li) => {
      const [hours, minutes] = li.dataset.time.split(":").map(Number);
      const eventTime = new Date();
      eventTime.setHours(hours, minutes, 0, 0);

      if (now >= eventTime) {
        li.classList.add("past");
      } else {
        li.classList.remove("past");
      }
    });
  }

  // Function to fetch students for a specific event
  async function fetchStudents(eventId) {
    // URL of the spreadsheet or API endpoint (use a public API or mock data for now)
    const spreadsheetUrl = "https://example.com/spreadsheet.json"; // Replace with your actual endpoint

    try {
      const response = await fetch(spreadsheetUrl);
      const data = await response.json();

      // Filter students by eventId
      const students = data[eventId] || [];
      displayStudents(students);
    } catch (error) {
      console.error("Error fetching student data:", error);
      studentList.innerHTML = "<li>Error loading participants.</li>";
    }
  }

  // Function to display students in the student list
  function displayStudents(students) {
    studentList.innerHTML = ""; // Clear the list first
    students.forEach((student) => {
      const li = document.createElement("li");
      li.textContent = `${student.name} - ${student.time}`;
      studentList.appendChild(li);
    });
  }

  // Initial event status check and set interval for updates
  checkEvents();
  setInterval(checkEvents, 30000);
});
