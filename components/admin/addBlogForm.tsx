"use client";

import { FC, useEffect } from "react";
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

import RichEditor from "@/components/richEditor/editor";

const formSchema = z.object({
  title: z.string().min(10, {
    message: "title is too short",
  }),
  description: z.string().min(20, {
    message: "description is too short",
  }),
  content: z.string().min(100, {
    message: "content is too short",
  }),
  tags: z.array(z.string()).optional(),
});

interface IAddBlogFormProps {
  isPrefilled?: boolean;
  prefillData?: z.infer<typeof formSchema>;
}

const AddBlogForm: FC<IAddBlogFormProps> = ({
  isPrefilled = false,
  prefillData = {},
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
      tags: [],
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const onTagsUpdate = (tags: string[]) => {
    form.setValue("tags", tags);
  };

  const onContentChange = (content: string) => {
    form.setValue("content", content);
  };

  const populateForm = () => {
    form.setValue("title", prefillData?.title || "");
    form.setValue("description", prefillData?.description || "");
    form.setValue("content", prefillData?.content || "");
    form.setValue("tags", prefillData?.tags || []);
  };

  useEffect(() => {
    if (isPrefilled) {
      populateForm();
    }
  }, []);

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
                Add a attractive title to your blog
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
                Add a brief description to your blog
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
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormDescription className="!mt-0">
                Add the detailed content of your blog
              </FormDescription>
              <FormControl>
                <RichEditor
                  onChange={onContentChange}
                  value=""
                  containerClassNames="!mt-0 min-h-[300px]"
                />
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

        <Button type="submit">{isPrefilled ? "Save Changes" : "Post"}</Button>
      </form>
    </Form>
  );
};

export default AddBlogForm;
