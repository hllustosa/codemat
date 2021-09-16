export function useQueryParams() {
  if (typeof window === "undefined") {
    return {};
  }
  const params = new URLSearchParams(window ? window.location.search : {});

  return new Proxy(params, {
    get(target, prop) {
      return target.get(prop);
    },
  });
}
