function trigger() {
      window.botpressWebChat?.sendEvent?.({ type: "show" });
      window.botpressWebChat?.sendPayload?.({ type: "text", text: "Hello there!" });
  }

  // Export the function if needed
module.exports = trigger;