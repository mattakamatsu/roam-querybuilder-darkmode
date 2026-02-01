/**
 * Roam Styling Extension
 * Compatible with Roam Studio theming system
 *
 * Features:
 * - Query Builder dark mode compatibility (dark mode only)
 * - Roam embed styling (light & dark mode)
 *
 * Installation: Load as extension from folder, or paste into a roam/js code block
 *
 * This script injects CSS that uses Roam Studio's CSS variables for seamless
 * theme integration. It works with both light and dark modes.
 */
(function() {
  'use strict';

  const STYLE_ID = 'roam-styling-extension';

  // Prevent duplicate injection
  if (document.getElementById(STYLE_ID)) {
    console.log('[Roam Styling] Styles already loaded');
    return;
  }

  const css = `
/* ============================================
   Roam Query Builder Dark Mode Styles
   (Only applies in dark mode)
   ============================================ */

/* --- Main Card Container --- */
.bp4-dark .roamjs-query-page,
.bp5-dark .roamjs-query-page,
[data-color-mode="dark"] .roamjs-query-page,
.bp4-dark .roamjs-query-page.bp4-card,
.bp5-dark .roamjs-query-page.bp5-card,
[data-color-mode="dark"] .roamjs-query-page.bp4-card,
[data-color-mode="dark"] .roamjs-query-page.bp5-card,
.bp4-dark [id^="roamjs-query-page-"],
.bp5-dark [id^="roamjs-query-page-"],
[data-color-mode="dark"] [id^="roamjs-query-page-"] {
  background-color: var(--bc-dialog, var(--cl-gray-825, #2d2d2d)) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
  border: 1px solid var(--cl-gray-675, #4a4a4a) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* --- Results View Container --- */
.bp4-dark .roamjs-query-results-view,
.bp5-dark .roamjs-query-results-view,
[data-color-mode="dark"] .roamjs-query-results-view {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- Table Styling --- */
.bp4-dark .roamjs-query-page table,
.bp5-dark .roamjs-query-page table,
[data-color-mode="dark"] .roamjs-query-page table {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

.bp4-dark .roamjs-query-page thead,
.bp5-dark .roamjs-query-page thead,
[data-color-mode="dark"] .roamjs-query-page thead,
.bp4-dark .roamjs-query-page thead tr,
.bp5-dark .roamjs-query-page thead tr,
[data-color-mode="dark"] .roamjs-query-page thead tr {
  background: var(--cl-gray-800, #1f2937) !important;
}

.bp4-dark .roamjs-query-page thead td,
.bp5-dark .roamjs-query-page thead td,
[data-color-mode="dark"] .roamjs-query-page thead td,
.bp4-dark .roamjs-query-page thead th,
.bp5-dark .roamjs-query-page thead th,
[data-color-mode="dark"] .roamjs-query-page thead th {
  background: var(--cl-gray-800, #1f2937) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
  border-color: var(--cl-gray-700, #374151) !important;
}

.bp4-dark .roamjs-query-page tfoot,
.bp5-dark .roamjs-query-page tfoot,
[data-color-mode="dark"] .roamjs-query-page tfoot,
.bp4-dark .roamjs-query-page tfoot tr,
.bp5-dark .roamjs-query-page tfoot tr,
[data-color-mode="dark"] .roamjs-query-page tfoot tr,
.bp4-dark .roamjs-query-page tfoot td,
.bp5-dark .roamjs-query-page tfoot td,
[data-color-mode="dark"] .roamjs-query-page tfoot td {
  background: var(--cl-gray-800, #1f2937) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
}

.bp4-dark .roamjs-query-page tbody tr:hover,
.bp5-dark .roamjs-query-page tbody tr:hover,
[data-color-mode="dark"] .roamjs-query-page tbody tr:hover {
  background: var(--cl-gray-750, #26272b) !important;
}

.bp4-dark .roamjs-query-page tbody td,
.bp5-dark .roamjs-query-page tbody td,
[data-color-mode="dark"] .roamjs-query-page tbody td {
  border-color: var(--cl-gray-700, #374151) !important;
}

/* Striped table rows */
.bp4-dark .roamjs-query-page .bp4-html-table-striped tbody tr:nth-child(odd),
.bp5-dark .roamjs-query-page .bp5-html-table-striped tbody tr:nth-child(odd),
[data-color-mode="dark"] .roamjs-query-page .bp4-html-table-striped tbody tr:nth-child(odd),
[data-color-mode="dark"] .roamjs-query-page .bp5-html-table-striped tbody tr:nth-child(odd) {
  background: var(--cl-gray-850, #1c1c1c) !important;
}

/* --- Loading State --- */
.bp4-dark .roamjs-query-page .px-8.py-4,
.bp5-dark .roamjs-query-page .px-8.py-4,
[data-color-mode="dark"] .roamjs-query-page .px-8.py-4,
.bp4-dark .roamjs-query-page p,
.bp5-dark .roamjs-query-page p,
[data-color-mode="dark"] .roamjs-query-page p {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* Blueprint Spinner */
.bp4-dark .roamjs-query-page .bp4-spinner .bp4-spinner-head,
.bp5-dark .roamjs-query-page .bp5-spinner .bp5-spinner-head,
[data-color-mode="dark"] .roamjs-query-page .bp4-spinner .bp4-spinner-head,
[data-color-mode="dark"] .roamjs-query-page .bp5-spinner .bp5-spinner-head {
  stroke: var(--co-main, var(--cl-gray-300, #b0b0b0));
}

/* --- Error Messages --- */
.bp4-dark .roamjs-query-page .text-red-700,
.bp5-dark .roamjs-query-page .text-red-700,
[data-color-mode="dark"] .roamjs-query-page .text-red-700,
.bp4-dark .roamjs-query-page .mb-4.text-red-700,
.bp5-dark .roamjs-query-page .mb-4.text-red-700,
[data-color-mode="dark"] .roamjs-query-page .mb-4.text-red-700 {
  color: #f87171 !important;
}

/* --- Query Editor Panel --- */
.bp4-dark .roamjs-query-page .p-4,
.bp5-dark .roamjs-query-page .p-4,
[data-color-mode="dark"] .roamjs-query-page .p-4 {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- Search Filter Panel --- */
.bp4-dark .roamjs-query-page .p-4.w-full,
.bp5-dark .roamjs-query-page .p-4.w-full,
[data-color-mode="dark"] .roamjs-query-page .p-4.w-full,
.bp4-dark .roamjs-query-results-view > .p-4,
.bp5-dark .roamjs-query-results-view > .p-4,
[data-color-mode="dark"] .roamjs-query-results-view > .p-4 {
  background: var(--cl-gray-800, #1f2937) !important;
}

/* --- Interface Footer (Showing X of Y results) --- */
.bp4-dark .roamjs-query-results-view > .relative > div:last-child,
.bp5-dark .roamjs-query-results-view > .relative > div:last-child,
[data-color-mode="dark"] .roamjs-query-results-view > .relative > div:last-child {
  background: var(--cl-gray-800, #1f2937) !important;
}

/* --- Query Used Panel --- */
.bp4-dark .roamjs-query-used,
.bp5-dark .roamjs-query-used,
[data-color-mode="dark"] .roamjs-query-used {
  background: var(--cl-gray-850, #1c1c1c) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
}

/* --- Blueprint Buttons --- */
.bp4-dark .roamjs-query-page .bp4-button,
.bp5-dark .roamjs-query-page .bp5-button,
[data-color-mode="dark"] .roamjs-query-page .bp4-button,
[data-color-mode="dark"] .roamjs-query-page .bp5-button {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

.bp4-dark .roamjs-query-page .bp4-button:not(.bp4-intent-primary):not(.bp4-minimal),
.bp5-dark .roamjs-query-page .bp5-button:not(.bp5-intent-primary):not(.bp5-minimal),
[data-color-mode="dark"] .roamjs-query-page .bp4-button:not(.bp4-intent-primary):not(.bp4-minimal),
[data-color-mode="dark"] .roamjs-query-page .bp5-button:not(.bp5-intent-primary):not(.bp5-minimal) {
  background: var(--cl-gray-700, #374151);
  border-color: var(--cl-gray-600, #4b5563);
}

.bp4-dark .roamjs-query-page .bp4-button:not(.bp4-intent-primary):hover,
.bp5-dark .roamjs-query-page .bp5-button:not(.bp5-intent-primary):hover,
[data-color-mode="dark"] .roamjs-query-page .bp4-button:not(.bp4-intent-primary):hover,
[data-color-mode="dark"] .roamjs-query-page .bp5-button:not(.bp5-intent-primary):hover {
  background: var(--cl-gray-600, #4b5563);
}

/* Minimal buttons */
.bp4-dark .roamjs-query-page .bp4-button.bp4-minimal,
.bp5-dark .roamjs-query-page .bp5-button.bp5-minimal,
[data-color-mode="dark"] .roamjs-query-page .bp4-button.bp4-minimal,
[data-color-mode="dark"] .roamjs-query-page .bp5-button.bp5-minimal {
  color: var(--co-main, var(--cl-gray-300, #d1d5db));
}

.bp4-dark .roamjs-query-page .bp4-button.bp4-minimal:hover,
.bp5-dark .roamjs-query-page .bp5-button.bp5-minimal:hover,
[data-color-mode="dark"] .roamjs-query-page .bp4-button.bp4-minimal:hover,
[data-color-mode="dark"] .roamjs-query-page .bp5-button.bp5-minimal:hover {
  background: var(--cl-gray-700, #374151);
}

/* --- Blueprint Input Fields --- */
.bp4-dark .roamjs-query-page .bp4-input,
.bp5-dark .roamjs-query-page .bp5-input,
[data-color-mode="dark"] .roamjs-query-page .bp4-input,
[data-color-mode="dark"] .roamjs-query-page .bp5-input,
.bp4-dark .roamjs-query-page .bp4-input-group input,
.bp5-dark .roamjs-query-page .bp5-input-group input,
[data-color-mode="dark"] .roamjs-query-page .bp4-input-group input,
[data-color-mode="dark"] .roamjs-query-page .bp5-input-group input {
  background: var(--cl-gray-900, #111827) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
  border-color: var(--cl-gray-600, #4b5563) !important;
}

.bp4-dark .roamjs-query-page .bp4-input::placeholder,
.bp5-dark .roamjs-query-page .bp5-input::placeholder,
[data-color-mode="dark"] .roamjs-query-page .bp4-input::placeholder,
[data-color-mode="dark"] .roamjs-query-page .bp5-input::placeholder {
  color: var(--cl-gray-500, #6b7280);
}

.bp4-dark .roamjs-query-page .bp4-input:focus,
.bp5-dark .roamjs-query-page .bp5-input:focus,
[data-color-mode="dark"] .roamjs-query-page .bp4-input:focus,
[data-color-mode="dark"] .roamjs-query-page .bp5-input:focus {
  border-color: var(--cl-blue-500, #3b82f6) !important;
  box-shadow: 0 0 0 1px var(--cl-blue-500, #3b82f6);
}

/* --- Blueprint TextArea --- */
.bp4-dark .roamjs-query-page .bp4-text-area,
.bp5-dark .roamjs-query-page .bp5-text-area,
[data-color-mode="dark"] .roamjs-query-page .bp4-text-area,
[data-color-mode="dark"] .roamjs-query-page .bp5-text-area,
.bp4-dark .roamjs-query-page textarea,
.bp5-dark .roamjs-query-page textarea,
[data-color-mode="dark"] .roamjs-query-page textarea {
  background: var(--cl-gray-900, #111827) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
  border-color: var(--cl-gray-600, #4b5563) !important;
}

/* --- Blueprint Switch --- */
.bp4-dark .roamjs-query-page .bp4-control.bp4-switch,
.bp5-dark .roamjs-query-page .bp5-control.bp5-switch,
[data-color-mode="dark"] .roamjs-query-page .bp4-control.bp4-switch,
[data-color-mode="dark"] .roamjs-query-page .bp5-control.bp5-switch,
.bp4-dark .roamjs-query-page .bp3-control.bp3-switch,
.bp5-dark .roamjs-query-page .bp3-control.bp3-switch,
[data-color-mode="dark"] .roamjs-query-page .bp3-control.bp3-switch {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- Blueprint Tabs --- */
.bp4-dark .roamjs-query-page .bp4-tabs,
.bp5-dark .roamjs-query-page .bp5-tabs,
[data-color-mode="dark"] .roamjs-query-page .bp4-tabs,
[data-color-mode="dark"] .roamjs-query-page .bp5-tabs,
.bp4-dark .roamjs-query-page .bp3-tabs,
.bp5-dark .roamjs-query-page .bp3-tabs,
[data-color-mode="dark"] .roamjs-query-page .bp3-tabs {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

.bp4-dark .roamjs-query-page .bp4-tab,
.bp5-dark .roamjs-query-page .bp5-tab,
[data-color-mode="dark"] .roamjs-query-page .bp4-tab,
[data-color-mode="dark"] .roamjs-query-page .bp5-tab,
.bp4-dark .roamjs-query-page .bp3-tab,
.bp5-dark .roamjs-query-page .bp3-tab,
[data-color-mode="dark"] .roamjs-query-page .bp3-tab {
  color: var(--cl-gray-400, #9ca3af);
}

.bp4-dark .roamjs-query-page .bp4-tab[aria-selected="true"],
.bp5-dark .roamjs-query-page .bp5-tab[aria-selected="true"],
[data-color-mode="dark"] .roamjs-query-page .bp4-tab[aria-selected="true"],
[data-color-mode="dark"] .roamjs-query-page .bp5-tab[aria-selected="true"],
.bp4-dark .roamjs-query-page .bp3-tab[aria-selected="true"],
.bp5-dark .roamjs-query-page .bp3-tab[aria-selected="true"],
[data-color-mode="dark"] .roamjs-query-page .bp3-tab[aria-selected="true"] {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- Blueprint Popover/Menu --- */
.bp4-dark .roamjs-query-page .bp4-popover,
.bp5-dark .roamjs-query-page .bp5-popover,
[data-color-mode="dark"] .roamjs-query-page .bp4-popover,
[data-color-mode="dark"] .roamjs-query-page .bp5-popover,
.bp4-dark .roamjs-query-page .bp3-popover,
.bp5-dark .roamjs-query-page .bp3-popover,
[data-color-mode="dark"] .roamjs-query-page .bp3-popover {
  background: var(--bc-dialog, var(--cl-gray-825, #2d2d2d));
}

.bp4-dark .roamjs-query-page .bp4-menu,
.bp5-dark .roamjs-query-page .bp5-menu,
[data-color-mode="dark"] .roamjs-query-page .bp4-menu,
[data-color-mode="dark"] .roamjs-query-page .bp5-menu,
.bp4-dark .roamjs-query-page .bp3-menu,
.bp5-dark .roamjs-query-page .bp3-menu,
[data-color-mode="dark"] .roamjs-query-page .bp3-menu {
  background: var(--bc-dialog, var(--cl-gray-825, #2d2d2d)) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
}

.bp4-dark .roamjs-query-page .bp4-menu-item,
.bp5-dark .roamjs-query-page .bp5-menu-item,
[data-color-mode="dark"] .roamjs-query-page .bp4-menu-item,
[data-color-mode="dark"] .roamjs-query-page .bp5-menu-item,
.bp4-dark .roamjs-query-page .bp3-menu-item,
.bp5-dark .roamjs-query-page .bp3-menu-item,
[data-color-mode="dark"] .roamjs-query-page .bp3-menu-item {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
}

.bp4-dark .roamjs-query-page .bp4-menu-item:hover,
.bp5-dark .roamjs-query-page .bp5-menu-item:hover,
[data-color-mode="dark"] .roamjs-query-page .bp4-menu-item:hover,
[data-color-mode="dark"] .roamjs-query-page .bp5-menu-item:hover,
.bp4-dark .roamjs-query-page .bp3-menu-item:hover,
.bp5-dark .roamjs-query-page .bp3-menu-item:hover,
[data-color-mode="dark"] .roamjs-query-page .bp3-menu-item:hover {
  background: var(--cl-gray-700, #374151) !important;
}

.bp4-dark .roamjs-query-page .bp4-menu-divider,
.bp5-dark .roamjs-query-page .bp5-menu-divider,
[data-color-mode="dark"] .roamjs-query-page .bp4-menu-divider,
[data-color-mode="dark"] .roamjs-query-page .bp5-menu-divider,
.bp4-dark .roamjs-query-page .bp3-menu-divider,
.bp5-dark .roamjs-query-page .bp3-menu-divider,
[data-color-mode="dark"] .roamjs-query-page .bp3-menu-divider {
  border-color: var(--cl-gray-600, #4b5563) !important;
}

/* --- Column Views Panel --- */
.bp4-dark .roamjs-query-column-views,
.bp5-dark .roamjs-query-column-views,
[data-color-mode="dark"] .roamjs-query-column-views {
  background: var(--bc-dialog, var(--cl-gray-825, #2d2d2d)) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
}

.bp4-dark .roamjs-query-column-views .bg-gray-50,
.bp5-dark .roamjs-query-column-views .bg-gray-50,
[data-color-mode="dark"] .roamjs-query-column-views .bg-gray-50,
.bp4-dark .roamjs-query-column-views thead,
.bp5-dark .roamjs-query-column-views thead,
[data-color-mode="dark"] .roamjs-query-column-views thead {
  background: var(--cl-gray-800, #1f2937) !important;
}

.bp4-dark .roamjs-query-column-views .bg-white,
.bp5-dark .roamjs-query-column-views .bg-white,
[data-color-mode="dark"] .roamjs-query-column-views .bg-white,
.bp4-dark .roamjs-query-column-views tbody,
.bp5-dark .roamjs-query-column-views tbody,
[data-color-mode="dark"] .roamjs-query-column-views tbody {
  background: var(--cl-gray-850, #1c1c1c) !important;
}

.bp4-dark .roamjs-query-column-views .text-gray-500,
.bp5-dark .roamjs-query-column-views .text-gray-500,
[data-color-mode="dark"] .roamjs-query-column-views .text-gray-500,
.bp4-dark .roamjs-query-column-views th,
.bp5-dark .roamjs-query-column-views th,
[data-color-mode="dark"] .roamjs-query-column-views th {
  color: var(--cl-gray-400, #9ca3af) !important;
}

.bp4-dark .roamjs-query-column-views .divide-gray-200 > *,
.bp5-dark .roamjs-query-column-views .divide-gray-200 > *,
[data-color-mode="dark"] .roamjs-query-column-views .divide-gray-200 > * {
  border-color: var(--cl-gray-700, #374151) !important;
}

/* --- Layout Selection Grid --- */
.bp4-dark .roamjs-query-page .grid .border,
.bp5-dark .roamjs-query-page .grid .border,
[data-color-mode="dark"] .roamjs-query-page .grid .border {
  border-color: var(--cl-gray-600, #4b5563) !important;
}

.bp4-dark .roamjs-query-page .grid .border-blue-800,
.bp5-dark .roamjs-query-page .grid .border-blue-800,
[data-color-mode="dark"] .roamjs-query-page .grid .border-blue-800 {
  border-color: var(--cl-blue-500, #3b82f6) !important;
}

.bp4-dark .roamjs-query-page .grid .text-gray-800,
.bp5-dark .roamjs-query-page .grid .text-gray-800,
[data-color-mode="dark"] .roamjs-query-page .grid .text-gray-800 {
  color: var(--cl-gray-300, #d1d5db) !important;
}

.bp4-dark .roamjs-query-page .grid .text-blue-800,
.bp5-dark .roamjs-query-page .grid .text-blue-800,
[data-color-mode="dark"] .roamjs-query-page .grid .text-blue-800 {
  color: var(--cl-blue-400, #60a5fa) !important;
}

/* --- Kanban Cards --- */
.bp4-dark .roamjs-kanban-card > div,
.bp5-dark .roamjs-kanban-card > div,
[data-color-mode="dark"] .roamjs-kanban-card > div {
  background-color: var(--cl-gray-800, #1f2937) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
}

.bp4-dark .roamjs-kanban-card > div:hover,
.bp5-dark .roamjs-kanban-card > div:hover,
[data-color-mode="dark"] .roamjs-kanban-card > div:hover {
  background-color: var(--cl-gray-700, #374151) !important;
}

.bp4-dark .roamjs-kanban-card .bg-white,
.bp5-dark .roamjs-kanban-card .bg-white,
[data-color-mode="dark"] .roamjs-kanban-card .bg-white {
  background-color: var(--cl-gray-800, #1f2937) !important;
}

.bp4-dark .roamjs-kanban-card .hover\\:bg-gray-200:hover,
.bp5-dark .roamjs-kanban-card .hover\\:bg-gray-200:hover,
[data-color-mode="dark"] .roamjs-kanban-card .hover\\:bg-gray-200:hover {
  background-color: var(--cl-gray-700, #374151) !important;
}

.bp4-dark .roamjs-kanban-card .text-gray-400,
.bp5-dark .roamjs-kanban-card .text-gray-400,
[data-color-mode="dark"] .roamjs-kanban-card .text-gray-400 {
  color: var(--cl-gray-500, #6b7280) !important;
}

/* --- Kanban Column Headers --- */
.bp4-dark .roamjs-query-page .roamjs-kanban-column-header,
.bp5-dark .roamjs-query-page .roamjs-kanban-column-header,
[data-color-mode="dark"] .roamjs-query-page .roamjs-kanban-column-header {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- Filter Panels --- */
.bp4-dark .roamjs-query-page .relative.p-4,
.bp5-dark .roamjs-query-page .relative.p-4,
[data-color-mode="dark"] .roamjs-query-page .relative.p-4 {
  background: var(--bc-dialog, var(--cl-gray-825, #2d2d2d));
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- MultiSelect Tags --- */
.bp4-dark .roamjs-query-page .bp4-tag,
.bp5-dark .roamjs-query-page .bp5-tag,
[data-color-mode="dark"] .roamjs-query-page .bp4-tag,
[data-color-mode="dark"] .roamjs-query-page .bp5-tag,
.bp4-dark .roamjs-query-page .bp3-tag,
.bp5-dark .roamjs-query-page .bp3-tag,
[data-color-mode="dark"] .roamjs-query-page .bp3-tag {
  background: var(--cl-gray-700, #374151);
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- Blueprint Icons --- */
.bp4-dark .roamjs-query-page .bp4-icon,
.bp5-dark .roamjs-query-page .bp5-icon,
[data-color-mode="dark"] .roamjs-query-page .bp4-icon,
[data-color-mode="dark"] .roamjs-query-page .bp5-icon,
.bp4-dark .roamjs-query-page .bp3-icon,
.bp5-dark .roamjs-query-page .bp3-icon,
[data-color-mode="dark"] .roamjs-query-page .bp3-icon {
  color: var(--cl-gray-400, #9ca3af);
}

/* --- Filter Component --- */
.bp4-dark .roamjs-query-page .roamjs-filter-button,
.bp5-dark .roamjs-query-page .roamjs-filter-button,
[data-color-mode="dark"] .roamjs-query-page .roamjs-filter-button {
  color: var(--cl-gray-400, #9ca3af);
}

/* --- Dirty Indicator --- */
.bp4-dark .roamjs-query-page .roamjs-item-dirty::after,
.bp5-dark .roamjs-query-page .roamjs-item-dirty::after,
[data-color-mode="dark"] .roamjs-query-page .roamjs-item-dirty::after {
  background: var(--cl-blue-500, #3b82f6);
}

/* --- Headings --- */
.bp4-dark .roamjs-query-page h4,
.bp5-dark .roamjs-query-page h4,
[data-color-mode="dark"] .roamjs-query-page h4,
.bp4-dark .roamjs-query-page h6,
.bp5-dark .roamjs-query-page h6,
[data-color-mode="dark"] .roamjs-query-page h6,
.bp4-dark .roamjs-query-page .bp4-heading,
.bp5-dark .roamjs-query-page .bp5-heading,
[data-color-mode="dark"] .roamjs-query-page .bp4-heading,
[data-color-mode="dark"] .roamjs-query-page .bp5-heading {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
}

/* --- Links --- */
.bp4-dark .roamjs-query-page a,
.bp5-dark .roamjs-query-page a,
[data-color-mode="dark"] .roamjs-query-page a,
.bp4-dark .roamjs-query-page .rm-page-ref,
.bp5-dark .roamjs-query-page .rm-page-ref,
[data-color-mode="dark"] .roamjs-query-page .rm-page-ref {
  color: var(--cl-blue-400, #60a5fa);
}

.bp4-dark .roamjs-query-page a:hover,
.bp5-dark .roamjs-query-page a:hover,
[data-color-mode="dark"] .roamjs-query-page a:hover {
  color: var(--cl-blue-300, #93c5fd);
}

/* --- Embeds in Query Builder --- */
.bp4-dark .roamjs-query-embed,
.bp5-dark .roamjs-query-embed,
[data-color-mode="dark"] .roamjs-query-embed {
  background: var(--cl-gray-850, #1c1c1c);
  border-radius: 4px;
  padding: 4px;
}

/* --- Highlighted Results --- */
.bp4-dark .roamjs-query-hightlighted-result,
.bp5-dark .roamjs-query-hightlighted-result,
[data-color-mode="dark"] .roamjs-query-hightlighted-result {
  background: var(--cl-yellow-900, #713f12);
  color: var(--cl-yellow-200, #fef08a);
  padding: 0 2px;
  border-radius: 2px;
}

/* --- Extra Row (Context/Discourse) --- */
.bp4-dark .roamjs-extra-row td,
.bp5-dark .roamjs-extra-row td,
[data-color-mode="dark"] .roamjs-extra-row td {
  background: var(--cl-gray-850, #1c1c1c) !important;
}

/* --- Tooltip --- */
.bp4-dark .roamjs-query-page .bp4-tooltip,
.bp5-dark .roamjs-query-page .bp5-tooltip,
[data-color-mode="dark"] .roamjs-query-page .bp4-tooltip,
[data-color-mode="dark"] .roamjs-query-page .bp5-tooltip {
  background: var(--cl-gray-900, #111827);
}

.bp4-dark .roamjs-query-page .bp4-tooltip .bp4-popover-content,
.bp5-dark .roamjs-query-page .bp5-tooltip .bp5-popover-content,
[data-color-mode="dark"] .roamjs-query-page .bp4-tooltip .bp4-popover-content,
[data-color-mode="dark"] .roamjs-query-page .bp5-tooltip .bp5-popover-content {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- Column Resize Handle --- */
.bp4-dark .roamjs-query-page td > div[style*="cursor: ew-resize"],
.bp5-dark .roamjs-query-page td > div[style*="cursor: ew-resize"],
[data-color-mode="dark"] .roamjs-query-page td > div[style*="cursor: ew-resize"] {
  background: var(--cl-gray-600, #4b5563) !important;
}

/* --- Disabled State --- */
.bp4-dark .roamjs-query-page .bp4-disabled,
.bp5-dark .roamjs-query-page .bp5-disabled,
[data-color-mode="dark"] .roamjs-query-page .bp4-disabled,
[data-color-mode="dark"] .roamjs-query-page .bp5-disabled,
.bp4-dark .roamjs-query-page .bp3-disabled,
.bp5-dark .roamjs-query-page .bp3-disabled,
[data-color-mode="dark"] .roamjs-query-page .bp3-disabled {
  color: var(--cl-gray-500, #6b7280) !important;
}

/* --- Blueprint Label --- */
.bp4-dark .roamjs-query-page .bp4-label,
.bp5-dark .roamjs-query-page .bp5-label,
[data-color-mode="dark"] .roamjs-query-page .bp4-label,
[data-color-mode="dark"] .roamjs-query-page .bp5-label {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- Italic/Empty State --- */
.bp4-dark .roamjs-query-page i,
.bp5-dark .roamjs-query-page i,
[data-color-mode="dark"] .roamjs-query-page i {
  color: var(--cl-gray-500, #6b7280);
}

/* --- No Results Message --- */
.bp4-dark .roamjs-query-page .flex.justify-between.items-center.mb-0 i,
.bp5-dark .roamjs-query-page .flex.justify-between.items-center.mb-0 i,
[data-color-mode="dark"] .roamjs-query-page .flex.justify-between.items-center.mb-0 i {
  color: var(--cl-gray-400, #9ca3af);
}

/* ============================================
   Roam Embed Styles (Light & Dark Mode)
   ============================================ */

/* --- Main Embed Container (Light Mode Default) --- */
.rm-embed-container {
  background-color: var(--bc-embed, var(--cl-gray-100, #f3f4f6)) !important;
  border-radius: 4px;
  border-left: 3px solid var(--cl-blue-500, #3b82f6);
  margin: 8px 0;
  padding: 8px 12px;
}

/* Dark mode override for embeds */
.bp4-dark .rm-embed-container,
.bp5-dark .rm-embed-container,
[data-color-mode="dark"] .rm-embed-container {
  background-color: var(--bc-embed, var(--cl-gray-850, #1c1c1c)) !important;
  border-left-color: var(--cl-blue-400, #60a5fa);
}

/* --- Page Embeds --- */
.rm-embed--page {
  background-color: var(--bc-embed-page, var(--cl-gray-100, #f3f4f6)) !important;
  border: 1px solid var(--cl-gray-200, #e5e7eb);
  border-left: 3px solid var(--cl-blue-500, #3b82f6);
  border-radius: 4px;
}

.bp4-dark .rm-embed--page,
.bp5-dark .rm-embed--page,
[data-color-mode="dark"] .rm-embed--page {
  background-color: var(--bc-embed-page, var(--cl-gray-850, #1c1c1c)) !important;
  border-color: var(--cl-gray-700, #374151);
  border-left-color: var(--cl-blue-400, #60a5fa);
}

/* --- Embed Content Text --- */
.rm-embed-container .rm-block-text,
.rm-embed__content {
  color: var(--co-main, inherit) !important;
}

/* --- Nested Embeds Level 2 (Light Mode) --- */
.rm-embed-container .rm-embed-container {
  background-color: var(--bc-embed__container-2, var(--cl-gray-200, #e5e7eb)) !important;
  border-left-color: var(--cl-gray-400, #9ca3af);
}

/* Dark mode nested embeds */
.bp4-dark .rm-embed-container .rm-embed-container,
.bp5-dark .rm-embed-container .rm-embed-container,
[data-color-mode="dark"] .rm-embed-container .rm-embed-container {
  background-color: var(--bc-embed__container-2, var(--cl-gray-800, #1f2937)) !important;
  border-left-color: var(--cl-gray-500, #6b7280);
}

/* --- Nested Embeds Level 3+ --- */
.rm-embed-container .rm-embed-container .rm-embed-container {
  background-color: var(--bc-embed__container-3, var(--cl-gray-300, #d1d5db)) !important;
  border-left-color: var(--cl-gray-500, #6b7280);
}

.bp4-dark .rm-embed-container .rm-embed-container .rm-embed-container,
.bp5-dark .rm-embed-container .rm-embed-container .rm-embed-container,
[data-color-mode="dark"] .rm-embed-container .rm-embed-container .rm-embed-container {
  background-color: var(--bc-embed__container-3, var(--cl-gray-750, #26272b)) !important;
  border-left-color: var(--cl-gray-600, #4b5563);
}

/* --- Embed Controls (expand/collapse) --- */
.rm-embed-margin-action {
  color: var(--cl-gray-500, #6b7280);
}

.rm-embed-margin-action:hover {
  color: var(--cl-gray-700, #374151);
}

.bp4-dark .rm-embed-margin-action:hover,
.bp5-dark .rm-embed-margin-action:hover,
[data-color-mode="dark"] .rm-embed-margin-action:hover {
  color: var(--cl-gray-300, #d1d5db);
}

/* --- Embed Path/Breadcrumb --- */
.rm-embed-path__inner {
  background-color: var(--cl-gray-100, #f3f4f6);
  border-radius: 3px;
  padding: 2px 6px;
}

.bp4-dark .rm-embed-path__inner,
.bp5-dark .rm-embed-path__inner,
[data-color-mode="dark"] .rm-embed-path__inner {
  background-color: var(--cl-gray-800, #1f2937);
}

/* --- Embed Edit Button --- */
.rm-embed-edit {
  background-color: var(--cl-gray-100, #f3f4f6);
  border-radius: 4px;
  padding: 2px 4px;
}

.bp4-dark .rm-embed-edit,
.bp5-dark .rm-embed-edit,
[data-color-mode="dark"] .rm-embed-edit {
  background-color: var(--cl-gray-700, #374151);
}

/* --- Block Embed Variant --- */
.rm-embed-container--block {
  margin-top: 4px;
  margin-bottom: 4px;
}

/* --- Embed within Query Builder Results (Dark Mode Only) --- */
.bp4-dark .roamjs-query-page .rm-embed-container,
.bp5-dark .roamjs-query-page .rm-embed-container,
[data-color-mode="dark"] .roamjs-query-page .rm-embed-container {
  background-color: var(--cl-gray-800, #1f2937) !important;
}

.bp4-dark .roamjs-query-page .rm-embed-container .rm-embed-container,
.bp5-dark .roamjs-query-page .rm-embed-container .rm-embed-container,
[data-color-mode="dark"] .roamjs-query-page .rm-embed-container .rm-embed-container {
  background-color: var(--cl-gray-750, #26272b) !important;
}
`;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = css;
  document.head.appendChild(style);

  console.log('[Roam Styling] Extension loaded successfully');
})();
