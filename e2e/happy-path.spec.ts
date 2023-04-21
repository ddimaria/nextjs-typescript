import { test, expect } from '@playwright/test'

test('should navigate to the ssg page and increment the counter', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveURL('/')
  await expect(page.locator('h1')).toContainText('Count: 0')
  await page.click('text=+1')
  await expect(page.locator('h1')).toContainText('Count: 1')
})
