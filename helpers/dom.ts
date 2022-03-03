/**
 * Condition whether server-side or client-side
 */
export const isClient: boolean = typeof window === 'object';

export const isMediaQuery = {
  mobile: (): boolean => isClient && window.innerWidth < 768,
};

/**
 * Return condition if mobile layout
 */
export const isMobileLayout = (): boolean => isMediaQuery.mobile();
