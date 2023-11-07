const data = {
  notes: [
    {
      id: '1',
      content: 'Какое-то дефолтное сообщение для первого запроса ...',
    },
    {
      id: '2',
      content: 'Какое - то новое сообщение с кучей буков и цифирей: 1 2 3 4 5 6 7 8 9 =)',
    },
  ],

  addNote(note) {
    this.notes.push(note);
  },

  deleteNote(id) {
    this.notes = this.notes.filter((note) => note.id !== id);
  },
};

module.exports = data;
