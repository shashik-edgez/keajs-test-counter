import { kea } from "kea";
interface IAction {
  actions: {
    increment: any;
    decrement: any;
  };
}
const counterLogic = kea({
  actions: () => ({
    increment: (amount: any) => ({ amount }),
    decrement: (amount: any) => ({ amount }),
  }),

  reducers: ({ actions }: IAction) => ({
    counter: [
      0,
      {
        [actions.increment]: (state: any, payload: { amount: any }) =>
          state + payload.amount,
        [actions.decrement]: (state: number, payload: { amount: number }) =>
          state - payload.amount,
      },
    ],
  }),

  selectors: ({ selectors }: { [selectors: string]: any }) => ({
    doubleCounter: [
      () => [selectors.counter],
      (counter: number) => (counter % 2 === 0 ? "Even Number" : "Odd Number"),
    ],
  }),
});

export default counterLogic;
