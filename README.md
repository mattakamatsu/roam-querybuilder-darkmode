# Roam Styling Extension

Styling improvements for Roam Research, compatible with [Roam Studio](https://github.com/rcvd/RoamStudio) themes.

## Features

### 1. Query Builder Dark Mode
Make the Roam Query Builder extension compatible with dark mode themes.

![Query Builder in Dark Mode](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fdiscourse-graphs%2FTUOr3ZDklv.png?alt=media&token=9fc9bc04-6115-466c-b158-cd078f481b50)

### 2. Embed Styling (Light & Dark Mode)
Improved styling for `{{[[embed]]}}` blocks in both light and dark modes.

**Light Mode:**
- Subtle gray background for visual separation
- Blue left border accent for hierarchy
- Clean, polished appearance

**Dark Mode:**
- Dark background that matches your theme
- Proper text contrast
- Visible but subtle borders

**Nested Embeds:**
- Progressive background colors for visual depth
- Works up to 3+ levels of nesting

## The Problem

- **Query Builder**: Uses hardcoded light-colored backgrounds, unreadable in dark mode
- **Embeds**: Background color doesn't adapt to dark themes, making text unreadable

## The Solution

This extension injects CSS that uses Roam Studio's CSS variable system (`--bc-*`, `--co-*`, `--cl-gray-*`) for seamless theme integration. The styles automatically adapt when you switch between light and dark modes.

## What Gets Styled

### Query Builder
- Main query builder card containers
- Results tables (headers, footers, rows)
- Query editor panels
- Form elements (inputs, buttons, switches)
- Kanban cards
- Popovers and menus
- Error messages and loading states

### Embeds
- `.rm-embed-container` - Main embed wrapper
- `.rm-embed--page` - Page embeds
- `.rm-embed-container--block` - Block embeds
- Nested embed containers (levels 2-3+)
- Embed controls and edit buttons
- Embed path/breadcrumb navigation

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

3. **Support Both Modes**: Uses dark mode selectors (`.bp4-dark`, `[data-color-mode="dark"]`) to apply appropriate styles

## Compatibility

- Works with Roam Studio light and dark themes
- Compatible with Blueprint JS v4 and v5 components
- Falls back to sensible defaults if Roam Studio variables aren't defined
- Works standalone (without Roam Studio) using fallback colors

## Requirements

- [Roam Research](https://roamresearch.com/)
- [Roam Studio](https://github.com/rcvd/RoamStudio) (recommended for best results)
- [Query Builder extension](https://github.com/RoamJS/query-builder) (for Query Builder features)

## License

MIT
