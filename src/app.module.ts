import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './project/project.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TasksModule, AuthModule, ProjectModule, UsersModule, PaymentsModule],
  controllers: [HelloController],
})
export class AppModule {}
