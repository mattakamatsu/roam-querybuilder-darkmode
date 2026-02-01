# Roam Query Builder Dark Mode

Make the Roam Query Builder extension compatible with [Roam Studio](https://github.com/rcvd/RoamStudio) dark mode themes.

![Query Builder in Dark Mode](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fdiscourse-graphs%2FTUOr3ZDklv.png?alt=media&token=9fc9bc04-6115-466c-b158-cd078f481b50)

## The Problem

The [Query Builder](https://github.com/RoamJS/query-builder) extension uses hardcoded light-colored backgrounds and text, which become unreadable when using Roam Studio's dark themes.

## The Solution

This extension injects CSS that uses Roam Studio's CSS variable system (`--bc-*`, `--co-*`, `--cl-gray-*`) for seamless theme integration. The styles automatically adapt when you switch between light and dark modes.

## What Gets Styled

- Main query builder card containers
- Results tables (headers, footers, rows)
- Query editor panels
- Form elements (inputs, buttons, switches)
- Kanban cards
- Popovers and menus
- Error messages
- Loading states

## Installation

### Option 1: Install from Folder (Recommended)

1. Clone or download this repository to your local machine
2. In Roam Research, go to **Settings** > **Custom Extensions**
3. Click **Add Extension** and select **Load from folder**
4. Navigate to the `roam-querybuilder-darkmode` folder and select it
5. The extension will load automatically

### Option 2: Copy/Paste into roam/js

1. Copy the contents of `extension.js`
2. In Roam Research, create a new page or use an existing one
3. Type `{{[[roam/js]]}}` to create a JavaScript code block
4. Paste the code into the block
5. The styles will apply immediately

## How It Works

The extension creates a `<style>` element with CSS rules that:

1. **Use CSS Variables**: Leverages Roam Studio's theming variables with fallbacks
   ```css
   background-color: var(--bc-dialog, var(--cl-gray-825, #2d2d2d));
   color: var(--co-main, var(--cl-gray-125, #e0e0e0));
   ```

2. **Prevent Duplicate Injection**: Checks if styles are already loaded before injecting

3. **Target Specific Selectors**: Only styles Query Builder components without affecting other parts of Roam

## Compatibility

- Works with Roam Studio light and dark themes
- Compatible with Blueprint JS v4 and v5 components
- Falls back to sensible defaults if Roam Studio variables aren't defined

## Requirements

- [Roam Research](https://roamresearch.com/)
- [Query Builder extension](https://github.com/RoamJS/query-builder)
- [Roam Studio](https://github.com/rcvd/RoamStudio) (for dark mode themes)

## License

MIT
