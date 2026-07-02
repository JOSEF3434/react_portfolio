export function validateContactForm({ name, email, subject, message }) {
  const errors = {};

  if (!name.trim()) {
    errors.name = "Name is required.";
  } else if (name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!subject.trim()) {
    errors.subject = "Subject is required.";
  } else if (subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters.";
  }

  if (!message.trim()) {
    errors.message = "Message is required.";
  } else if (message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export default validateContactForm;
