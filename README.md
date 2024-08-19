<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
        }

        h1 {
            margin-top: 0;
            font-size: 24px;
        }

        input {
            width: calc(100% - 90px);
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }

        button {
            width: 80px;
            padding: 10px;
            margin-left: 10px;
            background-color: #28a745;
            border: none;
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #218838;
        }

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        li {
            padding: 10px;
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        li span {
            flex: 1;
        }

        li button {
            background: #dc3545;
            border: none;
            color: #fff;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
        }

        li button:hover {
            background: #c82333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>To-Do List</h1>
        <input type="text" id="taskInput" placeholder="Add a new task">
        <button id="addTaskButton">Add Task</button>
        <ul id="taskList"></ul>
    </div>
    <script>
        document.getElementById('addTaskButton').addEventListener('click', function() {
            const taskInput = document.getElementById('taskInput');
            const taskValue = taskInput.value.trim();
            if (taskValue) {
                const taskList = document.getElementById('taskList');
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span>${taskValue}</span>
                    <button class="deleteButton">Delete</button>
                `;
                taskList.appendChild(listItem);
                taskInput.value = '';

                listItem.querySelector('.deleteButton').addEventListener('click', function() {
                    taskList.removeChild(listItem);
                });
            }
        });

        document.getElementById('taskInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('addTaskButton').click();
            }
        });
    </script>
</body>
</html>

