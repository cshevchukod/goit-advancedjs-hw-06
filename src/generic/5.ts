/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}

const pair1: KeyValuePair<string, number> = {
  key: "age",
  value: 30,
};

const pair2: KeyValuePair<number, string> = {
  key: 1,
  value: "first",
};

export {};
