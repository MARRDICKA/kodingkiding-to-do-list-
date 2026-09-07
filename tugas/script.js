const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

// Mengambil data dari localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// ===============================
// MENAMPILKAN TUGAS
// ===============================

function displayTasks() {
  taskList.innerHTML = "";

  // Jika tidak ada tugas
  if (tasks.length === 0) {
    taskList.innerHTML = `
            <li class="empty">
                Belum ada tugas.
            </li>
        `;

    updateTaskCount();

    return;
  }

  // Menampilkan setiap tugas
  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.className = "task";

    // Jika tugas selesai
    if (task.completed) {
      li.classList.add("completed");
    }

    // Membuat isi tugas
    li.innerHTML = `

            <input
                type="checkbox"
                ${task.completed ? "checked" : ""}
            >

            <span>${task.text}</span>

            <button class="edit-button">
                Edit
            </button>

            <button class="delete-button">
                Hapus
            </button>

        `;

    // ===============================
    // CHECKBOX
    // ===============================

    const checkbox = li.querySelector("input");

    checkbox.addEventListener("change", function () {
      toggleTask(index);
    });

    // ===============================
    // TOMBOL EDIT
    // ===============================

    const editButton = li.querySelector(".edit-button");

    if (task.completed) {
      editButton.disabled = true;
      editButton.style.opacity = "0.5";
      editButton.style.cursor = "not-allowed";
    }

    editButton.addEventListener("click", function () {
      if (!task.completed) {
        editTask(index);
      }
    });


    // ===============================
    // TOMBOL HAPUS
    // ===============================

    const deleteButton = li.querySelector(".delete-button");

    deleteButton.addEventListener("click", function () {
      deleteTask(index);
    });

    // Memasukkan li ke dalam ul
    taskList.appendChild(li);
  });

  updateTaskCount();
}

// ===============================
// MENAMBAHKAN TUGAS
// ===============================

function addTask() {
  const text = taskInput.value.trim();

  // Cek apakah input kosong
  if (text === "") {
    alert("Silakan masukkan tugas terlebih dahulu!");

    return;
  }

  // Memasukkan tugas ke array
  tasks.push({
    text: text,

    completed: false,
  });

  // Simpan data
  saveTasks();

  // Kosongkan input
  taskInput.value = "";

  // Fokus kembali ke input
  taskInput.focus();

  // Tampilkan tugas
  displayTasks();
}

// ===============================
// EDIT TUGAS
// ===============================

function editTask(index) {
  // Meminta teks baru dari user
  const newText = prompt("Edit tugas:", tasks[index].text);

  // Jika user menekan Cancel
  if (newText === null) {
    return;
  }

  // Menghapus spasi di awal dan akhir
  const cleanText = newText.trim();

  // Jika teks kosong
  if (cleanText === "") {
    alert("Tugas tidak boleh kosong!");

    return;
  }

  // Mengubah teks tugas
  tasks[index].text = cleanText;

  // Menyimpan perubahan
  saveTasks();

  // Menampilkan ulang tugas
  displayTasks();
}

// ===============================
// MENANDAI TUGAS SELESAI
// ===============================

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;

  saveTasks();

  displayTasks();
}

// ===============================
// MENGHAPUS TUGAS
// ===============================

function deleteTask(index) {
  const confirmation = confirm("Apakah kamu yakin ingin menghapus tugas ini?");

  if (!confirmation) {
    return;
  }

  tasks.splice(index, 1);

  saveTasks();

  displayTasks();
}

// ===============================
// MENYIMPAN DATA
// ===============================

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ===============================
// MENGHITUNG TUGAS
// ===============================

function updateTaskCount() {
  const activeTasks = tasks.filter((task) => !task.completed).length;

  taskCount.textContent = activeTasks;
}

// ===============================
// EVENT TOMBOL TAMBAH
// ===============================

addButton.addEventListener("click", addTask);

// ===============================
// EVENT ENTER
// ===============================

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// ===============================
// MENJALANKAN PROGRAM
// ===============================

displayTasks();
