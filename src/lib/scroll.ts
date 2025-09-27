/**
 * Scroll utility functions for single-page navigation
 */

import type { ScrollToSectionOptions } from '@/types';
import { SCROLL_OFFSET, SCROLL_BEHAVIOR } from './constants';

/**
 * Smoothly scrolls to a section by ID
 * @param sectionId - The ID of the section to scroll to (without #)
 * @param options - Scroll options including offset and behavior
 */
export function scrollToSection(sectionId: string, options: ScrollToSectionOptions = {}): void {
  const { offset = SCROLL_OFFSET, behavior = SCROLL_BEHAVIOR } = options;
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior
    });
  }
}

/**
 * Handles navigation link clicks for single-page sections
 * @param href - The href attribute (e.g., "#about")
 * @param onLinkClick - Optional callback to execute after clicking
 */
export function handleSectionNavigation(href: string, onLinkClick?: () => void): void {
  if (href.startsWith('#')) {
    const sectionId = href.substring(1); // Remove the # symbol
    scrollToSection(sectionId);
    onLinkClick?.(); // Call the callback if provided (e.g., close mobile menu)
  } else {
    // Handle external links normally
    window.location.href = href;
  }
}
