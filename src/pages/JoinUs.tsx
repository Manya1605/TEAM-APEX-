
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  reason: z.string({
    required_error: "Please select how you want to get involved.",
  }),
  message: z.string().min(10, {
    message: "Your message must be at least 10 characters.",
  }),
  skills: z.string().optional(),
  newsletter: z.boolean().default(false),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

const JoinUs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      skills: "",
      newsletter: false,
      termsAccepted: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Thank you for joining our community!", {
      description: "We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="md:flex items-start gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-primary">
              Join Our Mission
            </h1>
            <p className="font-inter text-lg text-gray-600 mb-6">
              Together, we can create a more equitable world. Join our community of advocates, mentors, 
              and changemakers dedicated to bridging the gender gap.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg mb-8">
              <h3 className="font-playfair text-xl font-semibold mb-4">Why Join Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">➤</span>
                  <span>Connect with inspiring mentors and leaders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">➤</span>
                  <span>Access exclusive educational resources and events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">➤</span>
                  <span>Make a real impact through advocacy campaigns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">➤</span>
                  <span>Help shape a future of gender equality</span>
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
              <img 
                src="https://source.unsplash.com/random/600x800/?diverse-women-team" 
                alt="Diverse team collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="font-playfair text-2xl font-semibold mb-6">Get Involved</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane" {...field} />
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
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="jane.doe@example.com" {...field} />
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
                      <FormLabel>Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How would you like to get involved?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="volunteer">Volunteer</SelectItem>
                          <SelectItem value="mentor">Become a Mentor</SelectItem>
                          <SelectItem value="mentee">Find a Mentor</SelectItem>
                          <SelectItem value="partner">Corporate Partnership</SelectItem>
                          <SelectItem value="advocate">Advocacy</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skills/Expertise (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Leadership, Technology, Research, etc." {...field} />
                      </FormControl>
                      <FormDescription>
                        Let us know your areas of expertise to better match you with opportunities.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your interest in bridging the gender gap..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="newsletter"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Subscribe to newsletter</FormLabel>
                        <FormDescription>
                          Receive updates about events, resources, and opportunities.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Terms & Conditions</FormLabel>
                        <FormDescription>
                          I agree to the terms of service and privacy policy.
                        </FormDescription>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">Submit</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JoinUs;
