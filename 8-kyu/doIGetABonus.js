function bonusTime(salary, bonus) {
  if (bonus) return `£${salary * 10}`;
  return `£${salary}`;
}

bonusTime(10000, true);
//  '£100000'
// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
