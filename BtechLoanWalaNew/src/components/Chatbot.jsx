import { useState } from 'react'
import './Chatbot.css'

export default function Chatbot() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <div className="chatbot-window" role="dialog" aria-label="B-Tech Loan Wala Chatbot">
          <button
            className="chatbot-close"
            onClick={() => setOpen(false)}
            aria-label="Close chatbot"
          >
            ×
          </button>

          <iframe
            src="/chatbot/index.html"
            title="B-Tech Loan Wala Loan Assistant"
            className="chatbot-iframe"
            allow="clipboard-write"
          />
        </div>
      )}

      {!open && (
        <button
          className="chatbot-launcher"
          onClick={() => setOpen(true)}
          aria-label="Open B-Tech Loan Wala Chatbot"
          title="Chat with B-Tech Loan Wala"
        >
          <span className="chatbot-launcher-icon">💬</span>
          <span className="chatbot-launcher-text">Chat with us</span>
        </button>
      )}
    </>
  )
}
