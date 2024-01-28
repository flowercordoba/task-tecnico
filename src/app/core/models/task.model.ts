
export class TaskModel {
    constructor(
      public _id: string,
      public title: string,
      public description: string,
      // Asumiendo que creator y assignedTo son del tipo IUser
      public creator:string ,
      public assignedTo:string ,
      public completed: boolean = false,
      public createdAt?: Date,
      public updatedAt?: Date
    ) {}
  
    // Marcar la tarea como completada
    markAsCompleted(): void {
      this.completed = true;
      this.updatedAt = new Date(); // Actualizar la fecha de modificación
    }

  
  
  }
  