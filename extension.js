/**
 * Roam Query Builder Dark Mode Compatibility
 * Compatible with Roam Studio theming system
 *
 * Installation: Paste this code into a roam/js code block in Roam Research
 *
 * This script injects CSS that uses Roam Studio's CSS variables for seamless
 * theme integration. It works with both light and dark modes.
 */
(function() {
  'use strict';

  const STYLE_ID = 'roamjs-qb-darkmode-styles';

  // Prevent duplicate injection
  if (document.getElementById(STYLE_ID)) {
    console.log('[QB Dark Mode] Styles already loaded');
    return;
  }

  const css = `
/* ============================================
   Roam Query Builder Dark Mode Styles
   ============================================ */

/* --- Main Card Container --- */
.roamjs-query-page,
.roamjs-query-page.bp4-card,
.roamjs-query-page.bp5-card,
[id^="roamjs-query-page-"] {
  background-color: var(--bc-dialog, var(--cl-gray-825, #2d2d2d)) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
  border: 1px solid var(--cl-gray-675, #4a4a4a) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* --- Results View Container --- */
.roamjs-query-results-view {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- Table Styling --- */
.roamjs-query-page table {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

.roamjs-query-page thead,
.roamjs-query-page thead tr {
  background: var(--cl-gray-800, #1f2937) !important;
}

.roamjs-query-page thead td,
.roamjs-query-page thead th {
  background: var(--cl-gray-800, #1f2937) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
  border-color: var(--cl-gray-700, #374151) !important;
}

.roamjs-query-page tfoot,
.roamjs-query-page tfoot tr,
.roamjs-query-page tfoot td {
  background: var(--cl-gray-800, #1f2937) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
}

.roamjs-query-page tbody tr:hover {
  background: var(--cl-gray-750, #26272b) !important;
}

.roamjs-query-page tbody td {
  border-color: var(--cl-gray-700, #374151) !important;
}

/* Striped table rows */
.roamjs-query-page .bp4-html-table-striped tbody tr:nth-child(odd),
.roamjs-query-page .bp5-html-table-striped tbody tr:nth-child(odd) {
  background: var(--cl-gray-850, #1c1c1c) !important;
}

/* --- Loading State --- */
.roamjs-query-page .px-8.py-4,
.roamjs-query-page p {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* Blueprint Spinner */
.roamjs-query-page .bp4-spinner .bp4-spinner-head,
.roamjs-query-page .bp5-spinner .bp5-spinner-head {
  stroke: var(--co-main, var(--cl-gray-300, #b0b0b0));
}

/* --- Error Messages --- */
.roamjs-query-page .text-red-700,
.roamjs-query-page .mb-4.text-red-700 {
  color: #f87171 !important;
}

/* --- Query Editor Panel --- */
.roamjs-query-page .p-4 {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- Search Filter Panel --- */
.roamjs-query-page .p-4.w-full,
.roamjs-query-results-view > .p-4 {
  background: var(--cl-gray-800, #1f2937) !important;
}

/* --- Interface Footer (Showing X of Y results) --- */
.roamjs-query-results-view > .relative > div:last-child {
  background: var(--cl-gray-800, #1f2937) !important;
}

/* --- Query Used Panel --- */
.roamjs-query-used {
  background: var(--cl-gray-850, #1c1c1c) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
}

/* --- Blueprint Buttons --- */
.roamjs-query-page .bp4-button,
.roamjs-query-page .bp5-button {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

.roamjs-query-page .bp4-button:not(.bp4-intent-primary):not(.bp4-minimal),
.roamjs-query-page .bp5-button:not(.bp5-intent-primary):not(.bp5-minimal) {
  background: var(--cl-gray-700, #374151);
  border-color: var(--cl-gray-600, #4b5563);
}

.roamjs-query-page .bp4-button:not(.bp4-intent-primary):hover,
.roamjs-query-page .bp5-button:not(.bp5-intent-primary):hover {
  background: var(--cl-gray-600, #4b5563);
}

/* Minimal buttons */
.roamjs-query-page .bp4-button.bp4-minimal,
.roamjs-query-page .bp5-button.bp5-minimal {
  color: var(--co-main, var(--cl-gray-300, #d1d5db));
}

.roamjs-query-page .bp4-button.bp4-minimal:hover,
.roamjs-query-page .bp5-button.bp5-minimal:hover {
  background: var(--cl-gray-700, #374151);
}

/* --- Blueprint Input Fields --- */
.roamjs-query-page .bp4-input,
.roamjs-query-page .bp5-input,
.roamjs-query-page .bp4-input-group input,
.roamjs-query-page .bp5-input-group input {
  background: var(--cl-gray-900, #111827) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
  border-color: var(--cl-gray-600, #4b5563) !important;
}

.roamjs-query-page .bp4-input::placeholder,
.roamjs-query-page .bp5-input::placeholder {
  color: var(--cl-gray-500, #6b7280);
}

.roamjs-query-page .bp4-input:focus,
.roamjs-query-page .bp5-input:focus {
  border-color: var(--cl-blue-500, #3b82f6) !important;
  box-shadow: 0 0 0 1px var(--cl-blue-500, #3b82f6);
}

/* --- Blueprint TextArea --- */
.roamjs-query-page .bp4-text-area,
.roamjs-query-page .bp5-text-area,
.roamjs-query-page textarea {
  background: var(--cl-gray-900, #111827) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
  border-color: var(--cl-gray-600, #4b5563) !important;
}

/* --- Blueprint Switch --- */
.roamjs-query-page .bp4-control.bp4-switch,
.roamjs-query-page .bp5-control.bp5-switch,
.roamjs-query-page .bp3-control.bp3-switch {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- Blueprint Tabs --- */
.roamjs-query-page .bp4-tabs,
.roamjs-query-page .bp5-tabs,
.roamjs-query-page .bp3-tabs {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

.roamjs-query-page .bp4-tab,
.roamjs-query-page .bp5-tab,
.roamjs-query-page .bp3-tab {
  color: var(--cl-gray-400, #9ca3af);
}

.roamjs-query-page .bp4-tab[aria-selected="true"],
.roamjs-query-page .bp5-tab[aria-selected="true"],
.roamjs-query-page .bp3-tab[aria-selected="true"] {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- Blueprint Popover/Menu --- */
.roamjs-query-page .bp4-popover,
.roamjs-query-page .bp5-popover,
.roamjs-query-page .bp3-popover {
  background: var(--bc-dialog, var(--cl-gray-825, #2d2d2d));
}

.roamjs-query-page .bp4-menu,
.roamjs-query-page .bp5-menu,
.roamjs-query-page .bp3-menu {
  background: var(--bc-dialog, var(--cl-gray-825, #2d2d2d)) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
}

.roamjs-query-page .bp4-menu-item,
.roamjs-query-page .bp5-menu-item,
.roamjs-query-page .bp3-menu-item {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
}

.roamjs-query-page .bp4-menu-item:hover,
.roamjs-query-page .bp5-menu-item:hover,
.roamjs-query-page .bp3-menu-item:hover {
  background: var(--cl-gray-700, #374151) !important;
}

.roamjs-query-page .bp4-menu-divider,
.roamjs-query-page .bp5-menu-divider,
.roamjs-query-page .bp3-menu-divider {
  border-color: var(--cl-gray-600, #4b5563) !important;
}

/* --- Column Views Panel --- */
.roamjs-query-column-views {
  background: var(--bc-dialog, var(--cl-gray-825, #2d2d2d)) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
}

.roamjs-query-column-views .bg-gray-50,
.roamjs-query-column-views thead {
  background: var(--cl-gray-800, #1f2937) !important;
}

.roamjs-query-column-views .bg-white,
.roamjs-query-column-views tbody {
  background: var(--cl-gray-850, #1c1c1c) !important;
}

.roamjs-query-column-views .text-gray-500,
.roamjs-query-column-views th {
  color: var(--cl-gray-400, #9ca3af) !important;
}

.roamjs-query-column-views .divide-gray-200 > * {
  border-color: var(--cl-gray-700, #374151) !important;
}

/* --- Layout Selection Grid --- */
.roamjs-query-page .grid .border {
  border-color: var(--cl-gray-600, #4b5563) !important;
}

.roamjs-query-page .grid .border-blue-800 {
  border-color: var(--cl-blue-500, #3b82f6) !important;
}

.roamjs-query-page .grid .text-gray-800 {
  color: var(--cl-gray-300, #d1d5db) !important;
}

.roamjs-query-page .grid .text-blue-800 {
  color: var(--cl-blue-400, #60a5fa) !important;
}

/* --- Kanban Cards --- */
.roamjs-kanban-card > div {
  background-color: var(--cl-gray-800, #1f2937) !important;
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
}

.roamjs-kanban-card > div:hover {
  background-color: var(--cl-gray-700, #374151) !important;
}

.roamjs-kanban-card .bg-white {
  background-color: var(--cl-gray-800, #1f2937) !important;
}

.roamjs-kanban-card .hover\\:bg-gray-200:hover {
  background-color: var(--cl-gray-700, #374151) !important;
}

.roamjs-kanban-card .text-gray-400 {
  color: var(--cl-gray-500, #6b7280) !important;
}

/* --- Kanban Column Headers --- */
.roamjs-query-page .roamjs-kanban-column-header {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- Filter Panels --- */
.roamjs-query-page .relative.p-4 {
  background: var(--bc-dialog, var(--cl-gray-825, #2d2d2d));
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- MultiSelect Tags --- */
.roamjs-query-page .bp4-tag,
.roamjs-query-page .bp5-tag,
.roamjs-query-page .bp3-tag {
  background: var(--cl-gray-700, #374151);
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- Blueprint Icons --- */
.roamjs-query-page .bp4-icon,
.roamjs-query-page .bp5-icon,
.roamjs-query-page .bp3-icon {
  color: var(--cl-gray-400, #9ca3af);
}

/* --- Filter Component --- */
.roamjs-query-page .roamjs-filter-button {
  color: var(--cl-gray-400, #9ca3af);
}

/* --- Dirty Indicator --- */
.roamjs-query-page .roamjs-item-dirty::after {
  background: var(--cl-blue-500, #3b82f6);
}

/* --- Headings --- */
.roamjs-query-page h4,
.roamjs-query-page h6,
.roamjs-query-page .bp4-heading,
.roamjs-query-page .bp5-heading {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0)) !important;
}

/* --- Links --- */
.roamjs-query-page a,
.roamjs-query-page .rm-page-ref {
  color: var(--cl-blue-400, #60a5fa);
}

.roamjs-query-page a:hover {
  color: var(--cl-blue-300, #93c5fd);
}

/* --- Embeds --- */
.roamjs-query-embed {
  background: var(--cl-gray-850, #1c1c1c);
  border-radius: 4px;
  padding: 4px;
}

/* --- Highlighted Results --- */
.roamjs-query-hightlighted-result {
  background: var(--cl-yellow-900, #713f12);
  color: var(--cl-yellow-200, #fef08a);
  padding: 0 2px;
  border-radius: 2px;
}

/* --- Extra Row (Context/Discourse) --- */
.roamjs-extra-row td {
  background: var(--cl-gray-850, #1c1c1c) !important;
}

/* --- Tooltip --- */
.roamjs-query-page .bp4-tooltip,
.roamjs-query-page .bp5-tooltip {
  background: var(--cl-gray-900, #111827);
}

.roamjs-query-page .bp4-tooltip .bp4-popover-content,
.roamjs-query-page .bp5-tooltip .bp5-popover-content {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- Column Resize Handle --- */
.roamjs-query-page td > div[style*="cursor: ew-resize"] {
  background: var(--cl-gray-600, #4b5563) !important;
}

/* --- Disabled State --- */
.roamjs-query-page .bp4-disabled,
.roamjs-query-page .bp5-disabled,
.roamjs-query-page .bp3-disabled {
  color: var(--cl-gray-500, #6b7280) !important;
}

/* --- Blueprint Label --- */
.roamjs-query-page .bp4-label,
.roamjs-query-page .bp5-label {
  color: var(--co-main, var(--cl-gray-125, #e0e0e0));
}

/* --- Italic/Empty State --- */
.roamjs-query-page i {
  color: var(--cl-gray-500, #6b7280);
}

/* --- No Results Message --- */
.roamjs-query-page .flex.justify-between.items-center.mb-0 i {
  color: var(--cl-gray-400, #9ca3af);
}
`;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = css;
  document.head.appendChild(style);

  console.log('[QB Dark Mode] Styles loaded successfully');
})();
