import Validator from '../validator';

test('Проверка валидатора валидным никнейом', () => {
  const validator = new Validator('ni_c-k12name');
  const received = validator.validateUsername();
  const expected = true;
  expect(received).toEqual(expected);
});

test('Проверка валидатора c запрещенным символом @', () => {
  const validator = new Validator('nickn@me');
  const received = validator.validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('Проверка c никнеймом содержащим 3 цифры подряд', () => {
  const validator = new Validator('nick777name');
  const received = validator.validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('Проверка c нижним подчеркиванием в начале', () => {
  const validator = new Validator('_nickname');
  const received = validator.validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('Проверка c нижним подчеркиванием в конце', () => {
  const validator = new Validator('nickname_');
  const received = validator.validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('Проверка c тире в начале', () => {
  const validator = new Validator('-nickname');
  const received = validator.validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('Проверка c тире в конце', () => {
  const validator = new Validator('nickname-');
  const received = validator.validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('Проверка c цифрой в начале', () => {
  const validator = new Validator('1nickname');
  const received = validator.validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('Проверка c цифрой в конце', () => {
  const validator = new Validator('nickname2');
  const received = validator.validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});

test('Проверка с пустым никнеймом', () => {
  const validator = new Validator();
  const received = validator.validateUsername();
  const expected = false;
  expect(received).toEqual(expected);
});
