// src/hello_world.test.ts
import { hello } from './hello_world';

describe('test hello', () => {
  it('should return hello world', () => {
    expect(hello()).toBe('Hello world!');
  });
});