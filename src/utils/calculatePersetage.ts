export default function calculatePersentage(value1: number, value2: number) {
  const percentage = 100 - (((value2 - value1) / (value1)) * 100);
  return percentage;
}
