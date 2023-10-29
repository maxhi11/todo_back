import { Module } from '@nestjs/common';
import {TaskModule} from './task/task.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    TaskModule
  ]
})
export class AppModule {}
