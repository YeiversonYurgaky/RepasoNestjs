import { IsBoolean, IsString, MinLength } from 'class-validator';

export class CreateTaskDTO {
  @IsString()
  @MinLength(1)
  title: string;
  @MinLength(1)
  @IsString()
  description: string;
  @IsBoolean()
  status: boolean;
}
