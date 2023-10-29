import { Injectable } from '@nestjs/common';
import {TaskDto} from "../dto/task.dto";
const fs = require('fs');
const path = require('path');

@Injectable()
export class TaskService {
    private source: string = '';
    private dataTasks: TaskDto[] = [];

    constructor() {
        this.source = path.join(__dirname, 'data.json');

        try {
            if (fs.existsSync(this.source)) {
                const data = fs.readFileSync(this.source, 'utf-8');
                this.dataTasks = JSON.parse(data);
            }
        }
        catch (e) {
            console.log('Problem with file');
        }
    }

    async save(data: TaskDto) {
        try {
            let flagOld = false;

            // saving changes
            this.dataTasks = this.dataTasks.map((task) => {
                if(task.id === data.id){
                    flagOld = true;
                    return data;
                }
                return task;
            });

            //saving new data
            if(!flagOld){
                this.dataTasks.push(data);
            }

            await this.saveData();
            return true;
        }
        catch (e) {
            return e;
        }
    }

    private async saveData(){
        fs.writeFileSync(this.source, JSON.stringify(this.dataTasks), 'utf-8');
    }

    async getAll(filter: string){
        if(!filter){
            return this.dataTasks;
        }

        return this.dataTasks.filter((task) => task.caption.toLowerCase().includes(filter.toLowerCase()));
    }

    async delete(taskId: string) {
        try {
            this.dataTasks = this.dataTasks.filter((task) => task.id !== taskId);

            await this.saveData();
            return true;
        }
        catch (e) {
            return e;
        }
    }
}
