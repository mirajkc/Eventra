import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button";
import { loginDTO } from "@/rules/auth.rules";
import axiosInstance from "@/configs/axios.config";
import Cookies from 'js-cookie'
import {toast} from 'sonner'


export default function Login() {
  

  const { control, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: zodResolver(loginDTO)

  })
  async function loginAdmin (data: {
    email : string, 
    password : string
  }) {
    try {
      const response = await axiosInstance.post('/auth/login' , data)
      Cookies.set("accessToken", response.data.data.accessToken, {
        expires : 1,
        path  : ""
      })
      //feth the admin details one admin is logged in using the zust
      toast.success("Hello admin, you are logged in successfully. ")
    } catch (error:any) {
      if(error.response){
        toast.error(error.response.data.message)
        return
      }
       toast.error("Error occured while logging in you in please try again later. ")
    }
  }
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="m-4 w-full max-w-md md:min-w-1/2 lg:min-w-1/4" >
          <Card>
          <CardHeader>
            Admin Login
            <CardDescription>
              Enter you admin credentials.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(loginAdmin)}>
              <FieldGroup>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Field >
                      <FieldLabel htmlFor="form-rhf-demo-email">
                        Enter Email
                      </FieldLabel>
                      <Input
                        {...field}
                        id="form-rhf-demo-email"
                        placeholder="admin@example.com"
                        autoComplete="off"
                      />
                      {
                        errors.email?.message ? <span className="text-sm text-red-500 italica"> {errors.email?.message} </span> : <></>
                      }
                    </Field>
                  )}
                />
              </FieldGroup>
              <FieldGroup>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Field >
                      <FieldLabel htmlFor="form-rhf-demo-password">
                        Enter Password
                      </FieldLabel>
                      <Input
                        {...field}
                        id="form-rhf-demo-password"
                        placeholder="password"
                        autoComplete="off"
                        type="password"
                      />
                      {
                        errors.password?.message ? <span> {errors.password?.message} </span> : <></>
                      }
                    </Field>
                  )}
                />
              </FieldGroup>
              <FieldGroup>
                <Field orientation="horizontal">
                  <Button disabled={isSubmitting} type="submit">Submit</Button >
                  <Button disabled={isSubmitting} onClick={() => reset()} variant="outline" type="button">
                    Reset
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>


        </Card>
        </div>
      </div>
    </>
  )
}
