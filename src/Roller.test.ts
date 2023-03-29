import {Roller} from './Roller';

describe("Smoke test", ()=> {
  test("The test scaffold runs successfully.", ()=> {
    expect(true).toBe(true);
  });
})

describe("Roller tests", ()=> {
  test("Description", () => {
  });
});

describe('Roller', () => {
  describe('constructor', () => {
    it('should create a 6-sided die if no faces are specified', () => {
      const roller = new Roller(0);
      expect(roller).toBeDefined();
      expect(roller.roll(1)).toBe(1);
      expect(roller.distribution().get(1)).toBe(1);
    });

    it('should create a 6-sided die if faces is less than 2', () => {
      const roller = new Roller(0);
      expect(roller).toBeDefined();
      expect(roller.roll(1)).toBe(1);
      expect(roller.distribution().get(1)).toBe(1);
    });

    it('should create a die with the specified number of faces', () => {
      const roller = new Roller(10);
      expect(roller).toBeDefined();
      expect(roller.roll(1)).toBe(1);
      expect(roller.distribution().get(1)).toBe(1);
    });
  });

  describe('roll', () => {
    it('should return 0 if the value is less than 1', () => {
      const roller = new Roller(6);
      expect(roller.roll(0)).toBe(0);
      expect(roller.last()).toBe(0);
      expect(roller.distribution().get(1)).toBe(0);
    });

    it('should return 0 if the value is greater than the number of faces', () => {
      const roller = new Roller(6);
      expect(roller.roll(7)).toBe(0);
      expect(roller.last()).toBe(0);
      expect(roller.distribution().get(1)).toBe(0);
    });

    it('should record the roll and update the distribution for valid values', () => {
      const roller = new Roller(6);
      expect(roller.roll(3)).toBe(3);
      expect(roller.last()).toBe(3);
      expect(roller.distribution().get(3)).toBe(1);

      expect(roller.roll(3)).toBe(3);
      expect(roller.last()).toBe(3);
      expect(roller.distribution().get(3)).toBe(2);

      expect(roller.roll(6)).toBe(6);
      expect(roller.last()).toBe(6);
      expect(roller.distribution().get(6)).toBe(1);
    });
  });

  describe('last', () => {
    it('should return 0 if no rolls have been made', () => {
      const roller = new Roller(6);
      expect(roller.last()).toBe(0);
    });

    it('should return the value of the last roll', () => {
      const roller = new Roller(6);
      expect(roller.roll(4)).toBe(4);
      expect(roller.last()).toBe(4);

      expect(roller.roll(2)).toBe(2);
      expect(roller.last()).toBe(2);
    });
  });

  describe('distribution', () => {
    it('should return a map with keys for all possible values', () => {
      const roller = new Roller(6);
      const distribution = roller.distribution();
      expect(distribution.size).toBe(6);
      expect(distribution.get(1)).toBeDefined();
      expect(distribution.get(2)).toBeDefined();
      expect(distribution.get(3)).toBeDefined();
      expect(distribution.get(4)).toBeDefined();
      expect(distribution.get(5)).toBeDefined();
      expect(distribution.get(6)).toBeDefined();
    });
  });
  });