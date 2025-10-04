import * as motion from "motion/react-client";

type HeroProps = {
    title: string;
    subtitle?: string;
}

export default function HeroSection({ title, subtitle }: HeroProps) {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-6">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-700/40 to-orange-900/70 -z-10"></div>

            {/* Decorative Blur Circles */}
            <div className="absolute top-10 left-10 size-40 bg-orange-600/30 blur-3xl rounded-full -z-10"></div>
            <div className="absolute bottom-10 right-10 size-52 bg-orange-400/30 blur-3xl rounded-full -z-10"></div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-2 gap-10 items-center w-full max-w-6xl"
            >
                {/* Left */}
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-xl mx-auto lg:mx-0">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="hidden lg:flex justify-center"
                >
                    <div className="p-10 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 w-72 h-60 flex items-center justify-center">
                        {/* Decorative block only, no text */}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
