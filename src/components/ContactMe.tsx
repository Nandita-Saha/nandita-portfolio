import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000); // Reset status after 5 seconds
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact-me" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                        Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 shadow-xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can I help you?"
                                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className={`
                  w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300
                  ${status === 'loading'
                                        ? 'bg-gray-700 cursor-wait'
                                        : status === 'success'
                                            ? 'bg-green-600 cursor-default'
                                            : 'bg-gradient-to-r from-rose-500 to-pink-600 hover:shadow-lg hover:shadow-pink-500/25 active:scale-95 text-white'}
                `}
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Sending...
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle size={20} />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </div>

                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/20"
                            >
                                <AlertCircle size={20} />
                                <p className="text-sm">{errorMessage}</p>
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
