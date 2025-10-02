import HeroSection from "@/components/hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import React from "react";


export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>

      <HeroSection />
      {/* Features Section */}
      <section className="w-full py-8 md:py-24 lg:py-16 bg-background/50"> 
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Powerful Features for Your Career Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((features,index)=>{
            return(
              <Card key={index}
               className="border-2 hover:border-primary transition-colors duration-300">
               <CardContent className="pt-6 text-center fpex flex-col items-center">
                   <div className="flex flex-col items-center text-center">
                   {features.icon} 
                   <h3 className="text-xl font-bold mb-2">
                    {features.title}
                   </h3>
                   <p className="text-muted-foreground">
                    {features.description}
                   </p>
                   </div>
              </CardContent>
              </Card>
            )          
            })}</div>
        </div>
      </section>
      {/* FAQ Section */}
        <section className="w-full py-8 md:py-24 lg:py-16 bg-background/50"> 
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform.
            </p>
            <div className="max-w-6xl mx-auto">
              <Accordion type="single" collapsible>
              {faqs.map((faq, index) => {
                return (
                  <AccordionItem key={index} value="item-${index}">
                     <AccordionTrigger>{faq.question}</AccordionTrigger>
                     <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                )
              })}
              </Accordion>
            </div>
          </div>
  
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce"
              >
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
