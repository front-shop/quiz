export default function calculateResult(correctAnswer: number, userAnswer: number) {
  return Number(((userAnswer / correctAnswer) * 100).toFixed());
}
