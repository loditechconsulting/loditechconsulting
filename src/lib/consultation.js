import { createContext, useContext } from 'react';

/**
 * Opens the consultation dialog from anywhere in the tree.
 * openConsultation({ service?: string, context?: string })
 *   service - preselects an option in "Service of interest"
 *   context - shown in the dialog and sent with the request (e.g. an industry)
 */
export const ConsultationContext = createContext(() => {});

export const useConsultation = () => useContext(ConsultationContext);
