const useDebounce = (
  func: { (e: any): void; (args_0: any): void },
  milliseconds: number
) => {
  const time = milliseconds || 400;
  let timer: string | number | NodeJS.Timeout | undefined;

  return (event: any) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(func, time, event);
  };
};
export { useDebounce };
