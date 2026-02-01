import { z } from "zod";

export const navSchema = z.object({
  text: z
  .string()
  .trim()
  .min(3, 'At least 3 chars')
  .max( 14, '14 is enough')
  .refine((val) => !val.toLowerCase().startsWith('qwe'), {
      message: 'Type something else'
    })
  .refine((val) => val.toLowerCase() !== 'some', {
      message: 'Some not allowed'
    })
  // .refine((val) => val.toLowerCase() !== 'admin', {
  //     message: 'Admin not allowed'
  //   })
    ,
})
export type navSchemaType = z.infer<typeof navSchema>