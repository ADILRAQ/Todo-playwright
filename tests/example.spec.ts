import { test, expect } from '@playwright/test';

test.describe("Home Page", () => {

  test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:3000');
  })

  test("Should have title", async ({page}) => {
    await expect(page).toHaveTitle('React App');
    
    await expect(page.getByRole('heading', {
      name: 'my app',
    })).toBeVisible();

    await expect(page.getByRole('link', {
      name: 'form',
    })).toBeVisible();

  });

  test('Should redirect to the form', async ({page}) => {
    await page.getByRole('link', {name: 'Form'}).click();

    await expect(page.getByRole('heading', {name: 'data'})).toBeVisible();
  })
});


