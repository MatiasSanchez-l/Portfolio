/**
 * Scroll utility functions for single-page navigation
 */

/**
 * Smoothly scrolls to a section by ID
 * @param sectionId - The ID of the section to scroll to (without #)
 * @param offset - Optional offset from the top (default: 80px for header height)
 */
export function scrollToSection(sectionId: string, offset: number = 80): void {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
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
