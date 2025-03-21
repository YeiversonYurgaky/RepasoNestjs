import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  getAllTasks() {
    return this.tasks;
  }

  createTask(task: CreateTaskDTO) {
    console.log(task);
    const newTask = {
      ...task, //copiar todos los valores de task
      id: this.tasks.length + 1,
    };
    this.tasks.push(newTask);
    return task;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (!taskFound) {
      return new NotFoundException(`Task with ID ${id} not found`);
    }
    return taskFound;
  }

  updateTask(task: UpdateTaskDTO) {
    console.log(task);
    return 'update task';
  }

  deleteTask() {
    return 'delete task';
  }

  patchTask() {
    return 'patch task';
  }
}
