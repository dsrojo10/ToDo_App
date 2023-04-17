export const state = () => ({
    task: []
})

export const mutations = {
    ADD_TASK(state, task) {
        state.tasks = [{ content: task, done: false }, ...state.tasks ]
    },
    REMOVE_TASK(state, task) {
        state.task.splice(state.task.indexOf(task), 1);
    },
    TOGGLE_TASK(state, task) {
        task.done =!task.done;
    }
}