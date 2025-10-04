import { quotes } from "@/lib/data"
import { Quote } from "lucide-react"
import * as motion from "motion/react-client"

export default function QuotesSectopn() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    return (
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-accent">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                    <div>
                        <Quote className="text-orange-700/30 size-12 mx-auto mb-6" />
                        <blockquote className="text-2xl md:text-3xl font-serif font-medium text-foreground leading-relaxed mb-6">“{randomQuote.text}”</blockquote>
                        <cite className="text-lg text-foreground font-medium not-italic">- {randomQuote.author}</cite>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}