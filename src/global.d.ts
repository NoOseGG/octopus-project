export {};

declare global {
  interface Window {
    ym: (counterId: number, action: string, goalName: string) => void;
  }
}
