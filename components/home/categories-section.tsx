import { Code, Globe, Heart, Lightbulb, Palette, Zap } from "lucide-react"
import * as motion from "motion/react-client"
import { Badge } from "../ui/badge"
import { Card } from "../ui/card"

export default function CategoriesSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="px-6 max-w-6xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl text-foreground mb-4 font-bold">Explore <span className="text-orange-700">Topics</span></h2>
                    <p className="text-lg text-muted-foreground">Discover a wide range of subjects from lifestyle to technology health travel creativity and more designed to keep curiosity alive daily.</p>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

                    {/* Repeat Categories */}
                    
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 1 * 0.1 }}>
                        <div className="group">
                            <Card className="rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50">
                                <div className="text-center">
                                    <div className="mb-4 size-8 mx-auto text-orange-700 group-hover:scale-110 transition-transform duration-300">
                                        <Code />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-3 group-hover:text-orange-700 transition-colors duration-300">Tech</h3>
                                    <Badge variant="outline" className="text-xs">Tech Insights</Badge>
                                </div>
                            </Card>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 1 * 0.1 }}>
                        <div className="group">
                            <Card className="rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50">
                                <div className="text-center">
                                    <div className="mb-4 size-8 mx-auto text-orange-700 group-hover:scale-110 transition-transform duration-300">
                                        <Palette />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-3 group-hover:text-orange-700 transition-colors duration-300">Design</h3>
                                    <Badge variant="outline" className="text-xs">Design Ideas</Badge>
                                </div>
                            </Card>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 1 * 0.1 }}>
                        <div className="group">
                            <Card className="rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50">
                                <div className="text-center">
                                    <div className="mb-4 size-8 mx-auto text-orange-700 group-hover:scale-110 transition-transform duration-300">
                                       <Lightbulb />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-3 group-hover:text-orange-700 transition-colors duration-300">Creativity</h3>
                                    <Badge variant="outline" className="text-xs">Creative Sparks</Badge>
                                </div>
                            </Card>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 1 * 0.1 }}>
                        <div className="group">
                            <Card className="rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50">
                                <div className="text-center">
                                    <div className="mb-4 size-8 mx-auto text-orange-700 group-hover:scale-110 transition-transform duration-300">
                                       <Zap />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-3 group-hover:text-orange-700 transition-colors duration-300">Innovation</h3>
                                    <Badge variant="outline" className="text-xs">Innovative Thinking</Badge>
                                </div>
                            </Card>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 1 * 0.1 }}>
                        <div className="group">
                            <Card className="rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50">
                                <div className="text-center">
                                    <div className="mb-4 size-8 mx-auto text-orange-700 group-hover:scale-110 transition-transform duration-300">
                                        <Globe />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-3 group-hover:text-orange-700 transition-colors duration-300">Digital</h3>
                                    <Badge variant="outline" className="text-xs">Digital World</Badge>
                                </div>
                            </Card>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 1 * 0.1 }}>
                        <div className="group">
                            <Card className="rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50">
                                <div className="text-center">
                                    <div className="mb-4 size-8 mx-auto text-orange-700 group-hover:scale-110 transition-transform duration-300">
                                        <Heart/>
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-3 group-hover:text-orange-700 transition-colors duration-300">Lifestyle</h3>
                                    <Badge variant="outline" className="text-xs">Modern Living</Badge>
                                </div>
                            </Card>
                        </div>
                    </motion.div>
                    
                     {/* Repeat Categories End */}

                </div>
            </div>

        </section>
    )
}