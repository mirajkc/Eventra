import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { addUserDTO } from "@/rules/user.rules"
import { toast } from "sonner"
import axiosInstance from "@/configs/axios.config"

type AddUserFormValues = z.infer<typeof addUserDTO>

interface AddUserProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function AddUser({ open, setOpen }: AddUserProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AddUserFormValues>({
    resolver: zodResolver(addUserDTO),
    defaultValues: {
      email  : "",
      password : "",
      confirmPassword : ""
    },
  })

  const onSubmit = async(data: AddUserFormValues) => {
    try {
      await axiosInstance.post("/auth/register", data)
      toast.success("User created successfully")
      setOpen(false)
      reset()
    } catch (error : any) {
      if(error.response.status !== 200 && error.response.data.message){
        toast.error(error.response.data.message)
        return
      }
      toast.error("Error occured while creating new user please try again later. ")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription>
            Enter the details of the new user below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} placeholder="john@example.com" />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input placeholder="********" id="password" type="password" {...register("password")} />
            {errors.password && (
              <p className="text-sm text-destructive">{errors.password.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input placeholder="********" id="confirmPassword" type="password" {...register("confirmPassword")} />
            {errors.confirmPassword && (
              <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
            )}
          </div>
          <DialogFooter>
            <Button disabled={isSubmitting} type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
