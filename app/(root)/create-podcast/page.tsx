"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader } from "lucide-react"
import { useState } from "react"

const formSchema = z.object({
  podcastTitle: z.string().min(2),
  podcastDescription: z.string().min(2),
})

const CreatePodcast = () => {
  const [IsSubmitting, setIsSubmitting] = useState(false)

        // 1. Define your form.
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          podcastTitle: "",
          podcastDescription: "",
        },
      })

      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <section className="mt-10 flex flex-col">
      <h1 className="text-20 font-bold text-white-1">Create Podcast</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 flex w-full flex-col">

          <div className="flex flex-col gap-[30px] border-b border-black-5 pb-10">

            <FormField
                control={form.control}
                name="podcastTitle"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2.5">
                    <FormLabel className="text-16 font-bold text-white-1">Title</FormLabel>
                    <FormControl>
                      <Input className="input-class focus-visible:ring-offset-orange-1" placeholder="Project-Title" {...field} />
                    </FormControl>
                    <FormMessage className="text-white-1"/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="podcastDescription"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2.5">
                    <FormLabel className="text-16 font-bold text-white-1">Description</FormLabel>
                    <FormControl>
                      <Textarea className="input-class focus-visible:ring-offset-orange-1" placeholder="Abstract of project" {...field} />
                    </FormControl>
                    <FormMessage className="text-white-1"/>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col pt-10">
                <div className="mt-10 w-full">
                    <Button type="submit" className="text-16 w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-black-1">
                      {IsSubmitting ? (
                        <>
                            Submitting                      
                            <Loader size={20} className="animate-spin ml-1"/>
                        </>
                      ) : (
                          'Submit & Published Podcast'
                      )}
                    </Button>
                </div>
            </div>

          
        </form>
      </Form>
    </section>
  )
}

export default CreatePodcast;