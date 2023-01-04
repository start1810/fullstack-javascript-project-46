/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
import { test, expect } from '@jest/globals';
import diffFinder from '../src/diffFinder.js';

const testAnswer = {
  "  host": "hexlet.io",
  "+ timeout": 20,
  "+ verbose": true,
  "- follow": false,
  "- proxy": "123.234.53.22",
  "- timeout": 50,
};

test('diffFinder', () => {
  expect(diffFinder('./example_files/file1.json', './example_files/file2.json')).toEqual(testAnswer);
});
