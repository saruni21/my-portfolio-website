"use client"

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { socialLinks } from "@/lib/data";
import { Github, Linkedin, Loader2 } from "lucide-react";
import { WhatsappIcon } from "../icons/WhatsappIcon";
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const sendEmailNotification = async (submissionData: typeof formData) => {
  //   // Using Supabase Edge Functions for email
  //   const { data, error } = await supabase.functions.invoke('send-contact-email', {
  //     body: {
  //       to: 'sir.ningo@gmail.com',
  //       subject: 'New Contact Form Submission',
  //       html: `
  //         <h2>New Contact Form Submission</h2>
  //         <p><strong>Name:</strong> ${submissionData.name}</p>
  //         <p><strong>Email:</strong> ${submissionData.email}</p>
  //         <p><strong>Message:</strong> ${submissionData.message}</p>
  //         <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
  //       `
  //     }
  //   });

  //   return { success: !error, error };
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: dbData, error: dbError } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (dbError) throw dbError;

      // const emailResult = await sendEmailNotification(formData);
      
      // if (!emailResult.success) {
      //   console.warn('Email notification failed:', emailResult.error);
      // }

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });

      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mt-2">I'm open to collaborations and new opportunities.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">Send a Message</CardTitle>
            <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <Textarea 
                placeholder="Your Message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5} 
                required 
              />
              <Button 
                type="submit" 
                size="lg" 
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-4">
            <Card className="p-6 flex flex-col items-center text-center shadow-lg">
                <h3 className="font-headline text-lg mb-4">Connect with Me</h3>
                <div className="flex justify-center gap-4">
                    <Button variant="outline" size="icon" asChild>
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <WhatsappIcon className="h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </Card>
        </div>
      </div>
    </section>
  );
}