import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  removeMenuItem: () => void;
};

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel className="flex items-center gap-1">
              Name <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Jollof Rice & Chicken"
                className="bg-white"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem className="sm:w-40">
            <FormLabel className="flex items-center gap-1">
              Price (₦) <FormMessage />
            </FormLabel>
            <FormControl>
              <Input {...field} placeholder="3500" className="bg-white" />
            </FormControl>
          </FormItem>
        )}
      />
      <Button
        type="button"
        variant="outline"
        onClick={removeMenuItem}
        className="max-h-fit text-red-600 hover:bg-red-50 hover:text-red-600"
      >
        Remove
      </Button>
    </div>
  );
};

export default MenuItemInput;
