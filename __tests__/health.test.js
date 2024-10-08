import { getHealthStatus } from '../health';

test('health > 50 should return healthy', () => {
  expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('health between 50 and 15 should return wounded', () => {
  expect(getHealthStatus({ name: 'Воин', health: 50 })).toBe('wounded');
  expect(getHealthStatus({ name: 'Лучник', health: 30 })).toBe('wounded');
});

test('health < 15 should return critical', () => {
  expect(getHealthStatus({ name: 'Танк', health: 10 })).toBe('critical');
});
