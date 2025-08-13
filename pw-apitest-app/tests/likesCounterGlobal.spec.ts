import {test, expect, request} from '@playwright/test'

test('Like counter increase', async ({page}) => {
    await page.goto('https://conduit.bondaracademy.com/')
    await page.getByText('Global Feed').click()
    const firstLikeButton = await page.locator('app-article-preview').first().locator('button')

    await firstLikeButton.click()
})