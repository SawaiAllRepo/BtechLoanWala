export default function SuccessPopup({ open, title, message, onClose }) {
  if (!open) return null

  return (
    <div
      className="success-popup-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-popup-title"
      onClick={onClose}
    >
      <div className="success-popup" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="success-popup-close"
          onClick={onClose}
          aria-label="Close message"
        >
          ×
        </button>

        <div className="success-popup-icon" aria-hidden="true">
          ✓
        </div>

        <h2 id="success-popup-title">{title}</h2>
        <p>{message}</p>

        <button type="button" className="btn btn-primary" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  )
}
