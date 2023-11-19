import httpService from "@/lib/utils/axios.interceptor";

class TaskService {

    async getAllTasks() {
        const res: any = await httpService.get('/task')

        if (!res) {
            return null
        }

        return res


    }

}

export const taskService = new TaskService();