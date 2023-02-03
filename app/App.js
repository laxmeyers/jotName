import { NotesController } from "./Controllers/NotesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  notesController = new NotesController();
}

window["app"] = new App();
