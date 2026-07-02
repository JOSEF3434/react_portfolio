import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend, FiDownload, FiCheckCircle } from "react-icons/fi";
import { profile } from "../../data/portfolio";
import { useContactForm } from "../../hooks/useContactForm";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { GlassCard } from "../ui/AnimatedCounter";

const FormField = ({ id, label, error, touched, children }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-foreground mb-1.5">
      {label}
    </label>
    {children}
    {touched && error && (
      <p id={`${id}-error`} className="mt-1.5 text-sm text-red-500" role="alert">
        {error}
      </p>
    )}
  </div>
);

const inputClasses = (hasError) =>
  `w-full px-4 py-3 rounded-xl border bg-surface-0 dark:bg-surface-900 text-foreground placeholder:text-foreground-muted/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
    hasError
      ? "border-red-400 dark:border-red-500"
      : "border-border hover:border-brand-500/30"
  }`;

const Contact = () => {
  const {
    form,
    errors,
    status,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm();

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-50 dark:bg-surface-900/50" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Build Something Great"
          description="Open to full-time roles, freelance projects, and collaborations. Reach out — I typically respond within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <GlassCard className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              <address className="not-italic space-y-5">
                {[
                  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                  { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` },
                  { icon: FiMapPin, label: "Location", value: profile.location },
                ].map((item) => {
                  const ItemIcon = item.icon;
                  return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 shrink-0">
                      <ItemIcon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-foreground-muted hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground-muted">{item.value}</p>
                      )}
                    </div>
                  </div>
                  );
                })}
              </address>
            </GlassCard>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
              <h3 className="text-lg font-bold mb-2">Ready to collaborate?</h3>
              <p className="text-white/90 text-sm mb-5 leading-relaxed">
                Download my CV for a detailed overview of my skills, projects, and experience.
              </p>
              <Button
                href={profile.cvPath}
                download
                variant="secondary"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto"
              >
                <FiDownload aria-hidden="true" /> Download CV
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6 md:p-8">
              {status === "success" ? (
                <div className="text-center py-12" role="status">
                  <FiCheckCircle className="mx-auto text-emerald-500 mb-4" size={48} aria-hidden="true" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Prepared!</h3>
                  <p className="text-foreground-muted">
                    Your email client should open shortly. Thank you for reaching out!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      id="name"
                      label="Name"
                      error={errors.name}
                      touched={touched.name}
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClasses(touched.name && errors.name)}
                        placeholder="Your name"
                        aria-invalid={!!(touched.name && errors.name)}
                        aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                        autoComplete="name"
                      />
                    </FormField>

                    <FormField
                      id="email"
                      label="Email"
                      error={errors.email}
                      touched={touched.email}
                    >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClasses(touched.email && errors.email)}
                        placeholder="you@email.com"
                        aria-invalid={!!(touched.email && errors.email)}
                        autoComplete="email"
                      />
                    </FormField>
                  </div>

                  <FormField
                    id="subject"
                    label="Subject"
                    error={errors.subject}
                    touched={touched.subject}
                  >
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClasses(touched.subject && errors.subject)}
                      placeholder="Project inquiry"
                      aria-invalid={!!(touched.subject && errors.subject)}
                    />
                  </FormField>

                  <FormField
                    id="message"
                    label="Message"
                    error={errors.message}
                    touched={touched.message}
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputClasses(touched.message && errors.message)} resize-y min-h-[120px]`}
                      placeholder="Tell me about your project or opportunity..."
                      aria-invalid={!!(touched.message && errors.message)}
                    />
                  </FormField>

                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto"
                  >
                    <FiSend aria-hidden="true" />
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
