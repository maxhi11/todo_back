import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {TaskService} from "./task.service";
import {TaskDto} from "../dto/task.dto";

@Controller()
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Post('/save')
    create(
        @Body() task: TaskDto,
    ){
        return this.taskService.save(task);
    }

    @Get('/tasks')
    taskAll(
        @Query('search_text') search_text: string,
    ) {
        return this.taskService.getAll(search_text);
    }

    @Post('/delete/:task_id')
    delete(
        @Param('task_id') task_id: string,
    ) {
        return this.taskService.delete(task_id);
    }
}


