export class TaskModel {
    constructor(
      public title: string,
      public description: string,
      public creator: string,
      public assignedTo: string,
      public _id?: string,
      public completed: boolean = false,
      public createdAt?: Date,
      public updatedAt?: Date
    ) {}
  
    // Marcar la tarea como completada
    markAsCompleted(): void {
      this.completed = true;
      this.updatedAt = new Date(); // Actualizar la fecha de modificación
    }
  
    // Actualizar la información de la tarea
    updateInfo(title: string, description: string): void {
      this.title = title;
      this.description = description;
      this.updatedAt = new Date(); // Actualizar la fecha de modificación
    }
  
    // Formatear la fecha de creación para mostrarla en la UI
    getFormattedCreatedAt(): string {
      return this.createdAt ? this.formatDate(this.createdAt) : 'Fecha no definida';
    }
  
    // Método auxiliar privado para formatear fechas
    private formatDate(date: Date): string {
      // Puedes ajustar el formato según tus necesidades
      return date.toLocaleDateString('es-CO', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  }
  