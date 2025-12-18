import { TaskService } from '../task.service';
import { Task } from '../../models/Task';

jest.mock('../../models/Task');

describe('TaskService - createTask', () => {
  it('should create and return a new task', async () => {
    const mockTask = {
      title: 'Test Task',
      description: 'Test description',
      userId: 'user-123',
      completed: false,
      save: jest.fn().mockResolvedValue({
        title: 'Test Task',
        description: 'Test description',
        userId: 'user-123',
        completed: false,
      }),
    };

    // Mock del constructor de Task
    (Task as unknown as jest.Mock).mockImplementation(() => mockTask);

    const result = await TaskService.createTask({
      title: 'Test Task',
      description: 'Test description',
      userId: 'user-123',
    });

    expect(result.title).toBe('Test Task');
    expect(result.userId).toBe('user-123');
    expect(mockTask.save).toHaveBeenCalled();
  });
});