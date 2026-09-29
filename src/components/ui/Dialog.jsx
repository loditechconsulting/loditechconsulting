import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const widths = {
  md: 'max-w-xl',
  lg: 'max-w-2xl',
  xl: 'max-w-3xl',
};

/**
 * Modal built on the native <dialog> element: the browser handles focus
 * containment, Escape-to-close and making the page behind inert.
 * Clicking the backdrop also closes it.
 */
export default function Dialog({ open, onClose, labelledBy, size = 'md', children }) {
  const ref = useRef(null);
  const pointerStartedOnBackdrop = useRef(false);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const close = () => ref.current?.close();

  return (
    // Keyboard users close with Escape (native) or the close button; the click
    // handler only adds mouse/touch dismissal on the backdrop.
    // oxlint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onClose={onClose}
      onPointerDown={(e) => {
        pointerStartedOnBackdrop.current = e.target === e.currentTarget;
      }}
      onClick={(e) => {
        if (pointerStartedOnBackdrop.current && e.target === e.currentTarget) close();
      }}
      className={`m-auto w-[calc(100%-2rem)] ${widths[size]} max-h-[90dvh] overflow-hidden rounded-2xl border-0 bg-transparent p-0 text-left text-ink shadow-2xl`}
    >
      <div className="relative max-h-[90dvh] overflow-y-auto overscroll-contain bg-white p-6 sm:p-8">
        <button
          type="button"
          onClick={close}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-surface text-muted transition-colors hover:bg-line hover:text-ink cursor-pointer"
          aria-label="Close"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        {children}
      </div>
    </dialog>
  );
}
