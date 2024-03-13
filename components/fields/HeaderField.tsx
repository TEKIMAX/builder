// "use client";
// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   FormElement,
//   FormElementInstance,
//   SubmitFunction,
// } from "../FormElements";
// import useDesigner from "../hooks/useDesigner";
// import { Input } from "../ui/input";
// import { effect, z } from "zod";

// import { MdOutlineTitle } from "react-icons/md";
// import Header from "../slice/HeaderFieldComponent";
// import { Square } from "lucide-react";

// const type = "HeaderField";

// type CustomInstanceExtraAttributes = {
//   title: string;
//   description: string;
//   backgroundColor: string;
//   backgroundImageUrl?: string; // New optional field for background image URL
//   alignment: "center" | "left" | "right";
//   showButtons: boolean;
//   typography: {
//     fontFamily: string;
//     fontSize: number;
//     fontWeight: string;
//     textColor: string;
//   };
//   effect: {
//     opacity: number;
//     overlayColor: string;
//   };
// };

// type CustomInstance = FormElementInstance & {
//   extraAttributes: CustomInstanceExtraAttributes;
// };

// const defaultExtraAttributes: CustomInstanceExtraAttributes = {
//   title: "Data to enrich your online business",
//   description:
//     "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
//   backgroundColor: "#e0d6eb",
//   alignment: "center",
//   showButtons: true,
//   typography: {
//     fontFamily: "Inter",
//     fontSize: 16,
//     fontWeight: "Medium",
//     textColor: "#000000",
//   },
//   effect: {
//     opacity: 100,
//     overlayColor: "#ffffff",
//   },
//   backgroundImageUrl: "",
// };

// // Zod schema for form validation
// const propertiesSchema = z.object({
//   title: z.string().min(1).max(100),
//   description: z.string().min(1).max(200),
//   backgroundColor: z.string().min(4),
//   alignment: z.enum(["left", "center", "right"]),
//   showButtons: z.boolean(),
//   typography: z.object({
//     fontFamily: z.string(),
//     fontSize: z.number(),
//     fontWeight: z.string(),
//     textColor: z.string(),
//   }),
//   effect: z.object({
//     opacity: z.number().min(0).max(100),
//     overlayColor: z.string(),
//   }),
//   backgroundImageUrl: z.string().optional(),
// });

// export const HeaderFieldFormElement: FormElement = {
//   type: "HeaderField",
//   construct: (id: string) => ({
//     id,
//     type: "HeaderField",
//     extraAttributes: defaultExtraAttributes,
//   }),
//   designerBtnElement: {
//     icon: Square,
//     label: "Header",
//   },
//   designerComponent: DesignerComponent,
//   formComponent: FormComponent,
//   propertiesComponent: PropertiesComponent,
//   validate: () => true, // Add your validation logic if needed
// };

// function DesignerComponent({
//   elementInstance,
// }: {
//   elementInstance: FormElementInstance;
// }) {
//   const element = elementInstance as CustomInstance;
//   const {
//     title,
//     description,
//     backgroundColor,
//     backgroundImageUrl,
//     typography,
//   } = element.extraAttributes;

//   return (
//     <Header
//       title={title}
//       description={description}
//       backgroundColor={backgroundColor}
//       backgroundImageUrl={backgroundImageUrl}
//       textColor={typography.textColor}
//       // Add other props as needed
//     />
//   );
// }

// //preview component
// function FormComponent({
//   elementInstance,
// }: {
//   elementInstance: FormElementInstance;
// }) {
//   const element = elementInstance as CustomInstance;
//   const {
//     title,
//     description,
//     backgroundColor,
//     backgroundImageUrl,
//     typography,
//   } = element.extraAttributes;
//   return (
//     (
//       <Header
//         title={title}
//         description={description}
//         backgroundColor={backgroundColor}
//         backgroundImageUrl={backgroundImageUrl}
//         textColor={typography.textColor}
//         // Add other props as needed
//       />
//     ) || null
//   );
// }

// function PropertiesComponent({
//   elementInstance,
// }: {
//   elementInstance: FormElementInstance;
// }) {
//   const { updateElement } = useDesigner();
//   const { register, handleSubmit, watch } =
//     useForm<CustomInstanceExtraAttributes>({
//       resolver: zodResolver(propertiesSchema),
//       defaultValues: elementInstance.extraAttributes,
//     });

//   const onSubmit = (values: CustomInstanceExtraAttributes) => {
//     updateElement(elementInstance.id, {
//       ...elementInstance,
//       extraAttributes: values,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
//       {/* Inputs and labels for header properties */}
//       <Input {...register("title")} />
//       <Input {...register("description")} />
//       <Input type="color" {...register("backgroundColor")} />
//       <Input type="color" {...register("typography.textColor")} />
//       <label>Background Image URL</label>
//       <Input
//         type="text"
//         {...register("backgroundImageUrl")}
//         placeholder="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
//         alt=""
//       />

//       <select {...register("alignment")}>
//         <option value="left">Left</option>
//         <option value="center">Center</option>
//         <option value="right">Right</option>
//       </select>
//       <label>
//         <input type="checkbox" {...register("showButtons")} />
//         Show Buttons
//       </label>
//       <Input {...register("typography.fontFamily")} />
//       <Input type="number" {...register("typography.fontSize")} />
//       <Input {...register("typography.fontWeight")} />
//       <Input type="color" {...register("effect.overlayColor")} />
//       <Input type="number" {...register("effect.opacity")} />
//       <button type="submit">Save</button>
//     </form>
//   );
// }

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from "../FormElements";
import useDesigner from "../hooks/useDesigner";

import { Square } from "lucide-react";
import HeaderSlice from "../slice/HeaderFieldComponent";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Slider } from "../ui/slider";
import { Input } from "../ui/input";

const type: ElementsType = "HeaderField";

const extraAttributes = {
  height: 20,
  title: "Data to enrich your online business",
  description:
    "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  backgroundColor: "#fffff",
  image1:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
  image2:
    "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
  image3:
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80",
  image4:
    "https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80",
  image5:
    "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
  btnTitle: "Button",
  btnColor: "#00000",
  textColor: "#000000",
  descColor: "#000000",
};

const propertiesSchema = z.object({
  height: z.number().min(5).max(200),
  title: z.string(),
  description: z.string(),
  backgroundColor: z.string(),
  image1: z.string().optional(),
  image2: z.string().optional(),
  image3: z.string().optional(),
  image4: z.string().optional(),
  image5: z.string().optional(),
  btnTitle: z.string().max(30),
  btnColor: z.string(),
  textColor: z.string(),
  descColor: z.string(),
});

export const HeaderFieldElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: Square,
    label: "Header field",
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: () => true,
};

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;

  return (
    <HeaderSlice
      title={element.extraAttributes.title}
      description={element.extraAttributes.description}
      backgroundColor={element.extraAttributes.backgroundColor}
      image1={element.extraAttributes.image1}
      image2={element.extraAttributes.image2}
      image3={element.extraAttributes.image3}
      image4={element.extraAttributes.image4}
      image5={element.extraAttributes.image5}
      btnTitle={element.extraAttributes.btnTitle}
      btnColor={element.extraAttributes.btnColor}
      textColor={element.extraAttributes.textColor}
      descColor={element.extraAttributes.descColor}
    />
  );
}

function FormComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;

  const { height } = element.extraAttributes;
  return (
    <HeaderSlice
      title={element.extraAttributes.title}
      description={element.extraAttributes.description}
      backgroundColor={element.extraAttributes.backgroundColor}
      image1={element.extraAttributes.image1}
      image2={element.extraAttributes.image2}
      image3={element.extraAttributes.image3}
      image4={element.extraAttributes.image4}
      image5={element.extraAttributes.image5}
      btnTitle={element.extraAttributes.btnTitle}
      btnColor={element.extraAttributes.btnColor}
      textColor={element.extraAttributes.textColor}
      descColor={element.extraAttributes.descColor}
    />
  );
}

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;

function PropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { updateElement } = useDesigner();
  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: "onBlur",
    defaultValues: {
      height: element.extraAttributes.height,
      title: element.extraAttributes.title,
      description: element.extraAttributes.description,
      backgroundColor: element.extraAttributes.backgroundColor,
      image1: element.extraAttributes.image1,
      image2: element.extraAttributes.image2,
      image3: element.extraAttributes.image3,
      image4: element.extraAttributes.image4,
      image5: element.extraAttributes.image5,
      btnTitle: element.extraAttributes.btnTitle,
      btnColor: element.extraAttributes.btnColor,
      textColor: element.extraAttributes.textColor,
      descColor: element.extraAttributes.descColor,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: propertiesFormSchemaType) {
    const {
      height,
      title,
      description,
      backgroundColor,
      image1,
      image2,
      image3,
      image4,
      image5,
      btnTitle,
      btnColor,
      textColor,
      descColor,
    } = values;

    updateElement(element.id, {
      ...element,
      extraAttributes: {
        height,
        title,
        description,
        backgroundColor,
        image1,
        image2,
        image3,
        image4,
        image5,
        btnTitle,
        btnColor,
        textColor,
        descColor,
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Height (px): {form.watch("height")}</FormLabel>
              <FormControl className="pt-2">
                <Slider
                  defaultValue={[field.value]}
                  min={5}
                  max={200}
                  step={1}
                  onValueChange={(value) => {
                    field.onChange(value[0]);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
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
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="backgroundColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Background color</FormLabel>
              <FormControl>
                <Input
                  type="color"
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image 1</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image 2</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image3"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image 3</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image4"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image 4</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image5"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image 5</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="btnTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Button title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="btnColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Button color</FormLabel>
              <FormControl>
                <Input
                  type="color"
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="textColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title color</FormLabel>
              <FormControl>
                <Input
                  type="color"
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="descColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description color</FormLabel>
              <FormControl>
                <Input
                  type="color"
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
