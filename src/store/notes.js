export default {
	state: {
		notes: [
			{
				title: 'First note',
				descr: 'Description for first note',
				date: new Date(Date.now()),
				isEdit: false
			},
			{
				title: 'Second note',
				descr: 'Description for second note',
				date: new Date(Date.now()),
				isEdit: false
			},
			{
				title: 'Third note',
				descr: 'Description for third note',
				date: new Date(Date.now()),
				isEdit: false
			}
		],
		initialNotes: [],
	},
	mutations: {
		addNote(state, newNote) {
			state.notes.push(newNote)
			state.initialNotes = state.notes
		},
		updateNotes(state, search) {
			if (!search) state.notes = state.initialNotes;

			state.notes = state.initialNotes.filter(item => {
				if (item.title.toLowerCase().includes(search)) {
					return item
				}
			})
		},
		initNotes(state) {
			state.initialNotes = state.notes
		},
		deleteNote(state, i) {
			state.notes.splice(i, 1)
		},
		editTitle(state, id) {
			state.notes[id].isEdit = true
		},
		save(state, {index, value}) {
			state.notes[index].title = value
			state.notes[index].isEdit = false
		}
	},
	actions: {
		notesFilter(ctx, search) {
			ctx.commit('updateNotes', search.trim().toLowerCase())
		},
		save(ctx, {index, event}) {
			if (event.key === 'Enter') {
				ctx.commit('save', {index, value: event.target.value})
			}
		}
	},
	getters: {
		getNotes(state) {
			return state.notes
		},
	}
}