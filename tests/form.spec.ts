import test, { expect } from "@playwright/test";

test.describe('Form Page', () => {

  test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:3000/data');
  });

  test("Should have title", async ({page}) => {    
    await expect(page.getByRole('heading', {
      name: 'data',
    })).toBeVisible();
  });

  test('Should have an input', async ({page}) => {
    await expect(page.getByPlaceholder('todo')).toBeVisible();
  })

  test('Should have a button', async ({page}) => {
    await expect(page.getByRole('button', {name: 'ADD'})).toBeVisible();
  })

  test('The list should be empty', async ({page}) => {
    const items = page.getByTestId('items-list');

    await expect(items).toBeEmpty();
  })

  test('The list should have an item', async ({page}) => {
    const input = page.getByPlaceholder('todo');

    await input.fill('item 1');

    await page.getByRole('button', {name: 'add'}).click();

    const item = page.getByTestId('item').nth(0);

    await expect(item).toHaveText('item 1');

    await expect(input).toBeEmpty();
  })

});