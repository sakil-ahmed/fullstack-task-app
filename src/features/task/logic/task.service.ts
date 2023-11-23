import httpService from "@/lib/utils/axios.interceptor";
import {taskStore} from "@/features/task/logic/task.store";

class TaskService {

    async getAllTasks() {
        const res: any = await httpService.get('/task')

        if (!res) {
            return null
        }

        taskStore.setTasks(res)

        return res


    }

}

export const taskService = new TaskService();