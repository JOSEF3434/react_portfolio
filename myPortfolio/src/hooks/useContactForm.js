import { useState } from "react";
import { validateContactForm } from "../utils/validation";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function useContactForm() {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [touched, setTouched] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const nextErrors = validateContactForm({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: nextErrors[name] }));
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const nextErrors = validateContactForm(form);
    setErrors((prev) => ({ ...prev, [name]: nextErrors[name] }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateContactForm(form);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    const mailtoLink = `mailto:jociemane@gmail.com?subject=${encodeURIComponent(
      `[Portfolio] ${form.subject}`,
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setStatus("success");
      setForm(initialFormState);
      setTouched({});
      setErrors({});
    }, 600);
  };

  const resetStatus = () => {
    if (status === "success") setStatus("idle");
  };

  return {
    form,
    errors,
    status,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetStatus,
  };
}

export default useContactForm;
