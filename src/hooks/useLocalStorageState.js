import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key] // Including 'key' in the dependencies ensures the hook updates if the key changes.
  );

  // Return both the state (value) and the setter function (setValue)
  return [value, setValue];
}
