import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { MapPin, Phone, Mail, Calendar, Download, Calculator, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertEventInquirySchema } from "@shared/schema";

const contactFormSchema = insertEventInquirySchema.extend({
  eventDate: z.string().optional(),
  guestCount: z.coerce.number().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guestCount: undefined,
      budgetRange: "",
      message: "",
    },
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/inquiries", data);
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted!",
        description: "Thank you for your interest. We'll contact you within 2 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    submitInquiry.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6" data-testid="contact-title">
            Let's Create Magic Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="contact-description">
            Ready to plan your extraordinary event? Get in touch with our expert team for a personalized consultation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="glass-effect rounded-3xl border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold text-white mb-6" data-testid="contact-form-title">
                Start Your Journey
              </h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">First Name *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="Enter your first name"
                              className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-coral"
                              data-testid="input-first-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Last Name *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="Enter your last name"
                              className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-coral"
                              data-testid="input-last-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            placeholder="your@email.com"
                            className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-coral"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            value={field.value || ""}
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-coral"
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Event Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-coral" data-testid="select-event-type">
                              <SelectValue placeholder="Select your event type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="social">Social Celebration</SelectItem>
                            <SelectItem value="virtual">Virtual Event</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Event Date</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="date"
                              className="bg-white/10 border-white/20 text-white focus:border-coral"
                              data-testid="input-event-date"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="guestCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Guest Count</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="number"
                              placeholder="Estimated guests"
                              className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-coral"
                              data-testid="input-guest-count"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="budgetRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Budget Range</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                          <FormControl>
                            <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-coral" data-testid="select-budget-range">
                              <SelectValue placeholder="Select your budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="under-5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="over-50k">Over $50,000</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Tell us about your vision</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            value={field.value || ""}
                            rows={4}
                            placeholder="Describe your dream event..."
                            className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-coral resize-none"
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02]"
                    data-testid="button-submit-inquiry"
                  >
                    {isSubmitting ? "Submitting..." : "Request Free Consultation"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-white mb-6" data-testid="contact-info-title">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4" data-testid="contact-office">
                  <div className="bg-coral/20 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Our Office</h4>
                    <p className="text-gray-300">123 Luxury Lane<br />Beverly Hills, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4" data-testid="contact-phone">
                  <div className="bg-coral/20 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-GLOW<br />Available 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4" data-testid="contact-email">
                  <div className="bg-coral/20 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Email</h4>
                    <p className="text-gray-300">hello@evergloworganisers.com<br />Response within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold text-white mb-4" data-testid="quick-actions-title">Quick Actions</h4>
                <div className="space-y-3">
                  <button className="flex items-center gap-3 text-gray-300 hover:text-coral transition-colors w-full text-left" data-testid="link-virtual-tour">
                    <Calendar className="w-5 h-5" />
                    <span>Schedule Virtual Tour</span>
                  </button>
                  <button className="flex items-center gap-3 text-gray-300 hover:text-coral transition-colors w-full text-left" data-testid="link-planning-guide">
                    <Download className="w-5 h-5" />
                    <span>Download Event Planning Guide</span>
                  </button>
                  <button className="flex items-center gap-3 text-gray-300 hover:text-coral transition-colors w-full text-left" data-testid="link-budget-calculator">
                    <Calculator className="w-5 h-5" />
                    <span>Use Budget Calculator</span>
                  </button>
                  <button className="flex items-center gap-3 text-gray-300 hover:text-coral transition-colors w-full text-left" data-testid="link-meet-team">
                    <Users className="w-5 h-5" />
                    <span>Meet Our Team</span>
                  </button>
                </div>
              </CardContent>
            </Card>
            
            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-white mb-4" data-testid="social-media-title">Follow Our Journey</h4>
              <div className="flex gap-4">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="bg-white/10 hover:bg-coral/20 p-3 rounded-full transition-all duration-300"
                  data-testid="social-instagram"
                >
                  <span className="text-white text-xl">📷</span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="bg-white/10 hover:bg-coral/20 p-3 rounded-full transition-all duration-300"
                  data-testid="social-facebook"
                >
                  <span className="text-white text-xl">📘</span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="bg-white/10 hover:bg-coral/20 p-3 rounded-full transition-all duration-300"
                  data-testid="social-pinterest"
                >
                  <span className="text-white text-xl">📌</span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="bg-white/10 hover:bg-coral/20 p-3 rounded-full transition-all duration-300"
                  data-testid="social-youtube"
                >
                  <span className="text-white text-xl">📺</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
