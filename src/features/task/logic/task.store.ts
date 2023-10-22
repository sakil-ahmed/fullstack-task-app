import { createStore, withDevTools } from '@poly-state/poly-state';
import { useStore } from '@poly-state/react';


export const taskInitial= {
  tasks: []
};

export const taskStore = createStore(taskInitial);

export const useTaskStore = () => useStore(taskStore);

if (process.env.NODE_ENV === 'development') {
  withDevTools(taskStore, 'TASKS_STORE');
}