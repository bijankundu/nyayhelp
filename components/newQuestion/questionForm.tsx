"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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
import { Textarea } from "../ui/textarea";
import { TagInput } from "../ui/tagInput";

const formSchema = z.object({
  title: z.string().min(10, {
    message: "title is too short",
  }),
  description: z.string().min(20, {
    message: "description is too short",
  }),
  tags: z.array(z.string()).optional(),
});

const QuestionForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: [],
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const onTagsUpdate = (tags: string[]) => {
    form.setValue("tags", tags);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormDescription className="!mt-0">
                Be specific and imagine you&apos;re asking a question to another
                person
              </FormDescription>
              <FormControl>
                <Input placeholder="e.g. What is law?" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormDescription className="!mt-0">
                Include all the information someone would need to answer your
                question
              </FormDescription>
              <FormControl>
                <Textarea rows={6} placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={() => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <TagInput onChange={onTagsUpdate} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Post your question</Button>
      </form>
    </Form>
  );
};

export default QuestionForm;
