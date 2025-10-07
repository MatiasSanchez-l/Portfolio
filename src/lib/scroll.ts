/**
 * Scroll utility functions for single-page navigation
 */

import type { ScrollToSectionOptions } from '@/types';
import { SCROLL_OFFSET, SCROLL_BEHAVIOR } from './constants';

/**
 * Gets the actual header height dynamically
 * @returns The height of the header element in pixels
 */
function getHeaderHeight(): number {
  const header = document.querySelector('header');
  if (header) {
    return header.offsetHeight;
  }
  // Fallback to mobile-friendly offset if header is not found
  return window.innerWidth < 768 ? 100 : SCROLL_OFFSET;
}

/**
 * Smoothly scrolls to a section by ID
 * @param sectionId - The ID of the section to scroll to (without #)
 * @param options - Scroll options including offset and behavior
 */
export function scrollToSection(sectionId: string, options: ScrollToSectionOptions = {}): void {
  const { offset, behavior = SCROLL_BEHAVIOR } = options;
  // Use dynamic header height if offset is not explicitly provided
  const actualOffset = offset !== undefined ? offset : getHeaderHeight() + 20;
  
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - actualOffset;

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
    
    if (onLinkClick) {
      // If there's a callback (e.g., close mobile menu), call it first
      onLinkClick();
      // Wait for the menu closing animation to complete before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 350); // Slightly longer than the 300ms menu animation
    } else {
      // No callback, scroll immediately
      scrollToSection(sectionId);
    }
  } else {
    // Handle external links normally
    window.location.href = href;
  }
}
