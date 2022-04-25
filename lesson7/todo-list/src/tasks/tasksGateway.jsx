const baseUrl = "https://625ac031398f3bc782a5bba2.mockapi.io/tasks"

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Fail to creat task')
    } 
  });
};

export const fetchTasksList = () => {
  return fetch(baseUrl)
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    })
    .then(tasksList => tasksList);
};

export const updateTask = (taskId, TaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(TaskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Fail to creat task')
    }
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task')
    } 
  });
}