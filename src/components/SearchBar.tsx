import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery?: string;
};

const SearchBar = ({ onSubmit, onReset, placeHolder, searchQuery }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex flex-col gap-3 rounded-3xl border bg-white p-3 shadow-soft sm:flex-row sm:items-center sm:rounded-full sm:py-2 sm:pl-5 sm:pr-2 ${
          form.formState.errors.searchQuery && "border-red-500"
        }`}
      >
        <Search
          strokeWidth={2.5}
          size={24}
          className="hidden shrink-0 text-primary sm:block"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="min-w-0 flex-1 space-y-0">
              <FormControl>
                <Input
                  {...field}
                  className="h-11 border-none bg-transparent text-base shadow-none focus-visible:ring-0 md:text-lg"
                  placeholder={placeHolder}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex gap-2">
          {onReset && (
            <Button
              onClick={handleReset}
              type="button"
              variant="outline"
              className="h-11 flex-1 sm:flex-none"
            >
              Reset
            </Button>
          )}
          <Button type="submit" className="h-11 flex-1 px-6 sm:flex-none">
            Search
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SearchBar;
